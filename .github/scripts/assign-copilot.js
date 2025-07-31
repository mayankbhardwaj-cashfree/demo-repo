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
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            ... on Bot { id }
          }
        }
      }
    }
  `;
  const { repository: { suggestedActors: { nodes } } } = await graphql(actorsQuery, {
    owner: REPO_OWNER, name: REPO_NAME
  });
  const copilot = nodes.find(n => n.login === 'copilot-swe-agent');
  if (!copilot) throw new Error("Copilot coding agent not found in suggestedActors");

  // 3. Assign Copilot to the issue
  const assignMutation = `
    mutation($assignableId: ID!, $assigneeIds: [ID!]!) {
      addAssigneesToAssignable(input: { assignableId: $assignableId, assigneeIds: $assigneeIds }) {
        assignable { ... on Issue { number } }
      }
    }
  `;
  await graphql(assignMutation, {
    assignableId: issue.id,
    assigneeIds: [copilot.id]
  });
  console.log("Assigned Copilot to issue", ISSUE_NUMBER);
})().catch(e => {
  console.error("Error:", e.message || e);
  process.exit(1);
});