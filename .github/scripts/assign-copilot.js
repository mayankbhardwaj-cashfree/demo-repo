const fetch = require('node-fetch');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER   = process.env.REPO_OWNER;
const REPO_NAME    = process.env.REPO_NAME;
const ISSUE_NUMBER = process.env.ISSUE_NUMBER;

const GRAPHQL_URL  = 'https://api.github.com/graphql';

async function graphql(query, variables) {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

(async () => {
  // 1. Get issue node ID
  const issueQuery = `
    query($owner:String!, $name:String!, $number:Int!) {
      repository(owner: $owner, name: $name) {
        issue(number: $number) {
          id
        }
      }
    }
  `;
  const { repository: { issue } } = await graphql(issueQuery, {
    owner: REPO_OWNER, name: REPO_NAME, number: parseInt(ISSUE_NUMBER)
  });
  if (!issue) throw new Error("Issue not found");

  // 2. Get Copilot's bot ID
  const actorsQuery = `
    query($owner:String!, $name:String!) {
      repository(owner: $owner, name: $name) {
        assignableUsers(first: 100) {
          nodes {
            login
            id
          }
        }
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            ... on User { id }
            ... on Bot { id }
          }
        }
      }
    }
  `;
  const { repository: { assignableUsers, suggestedActors } } = await graphql(actorsQuery, {
    owner: REPO_OWNER, name: REPO_NAME
  });
  
  // Try different Copilot usernames
  const copilotNames = ['copilot-swe-agent', 'github-copilot', 'copilot'];
  let copilot = null;
  
  // First try assignableUsers
  for (const name of copilotNames) {
    copilot = assignableUsers.nodes.find(n => n.login === name);
    if (copilot) {
      console.log(`Found Copilot in assignableUsers: ${copilot.login}`);
      break;
    }
  }
  
  // If not found in assignableUsers, try suggestedActors
  if (!copilot) {
    for (const name of copilotNames) {
      copilot = suggestedActors.nodes.find(n => n.login === name);
      if (copilot) {
        console.log(`Found Copilot in suggestedActors: ${copilot.login}`);
        break;
      }
    }
  }
  
  if (!copilot) {
    console.log("Available assignable users:", assignableUsers.nodes.map(n => n.login));
    console.log("Available suggested actors:", suggestedActors.nodes.map(n => n.login));
    throw new Error("Copilot coding agent not found in assignable users or suggested actors");
  }

  // 3. Assign Copilot to the issue
  const assignMutation = `
    mutation($assignableId: ID!, $assigneeIds: [ID!]!) {
      addAssigneesToAssignable(input: { assignableId: $assignableId, assigneeIds: $assigneeIds }) {
        assignable { 
          ... on Issue { 
            number 
            assignees(first: 10) {
              nodes {
                login
              }
            }
          } 
        }
      }
    }
  `;
  
  try {
    const result = await graphql(assignMutation, {
      assignableId: issue.id,
      assigneeIds: [copilot.id]
    });
    console.log("Successfully assigned Copilot to issue", ISSUE_NUMBER);
    console.log("Current assignees:", result.addAssigneesToAssignable.assignable.assignees.nodes.map(n => n.login));
  } catch (error) {
    console.error("Failed to assign via GraphQL mutation:", error.message);
    
    // Fallback: Try using REST API
    console.log("Trying REST API fallback...");
    const restUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}/assignees`;
    const restResponse = await fetch(restUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        assignees: [copilot.login]
      })
    });
    
    if (restResponse.ok) {
      console.log("Successfully assigned Copilot via REST API to issue", ISSUE_NUMBER);
    } else {
      const errorText = await restResponse.text();
      throw new Error(`REST API assignment failed: ${restResponse.status} ${errorText}`);
    }
  }
})().catch(e => {
  console.error("Error:", e.message || e);
  process.exit(1);
});