const fetch = require('node-fetch');

const PAT_GITHUB = process.env.PAT_GITHUB;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME  = process.env.REPO_NAME;
const ISSUE_NUMBER = process.env.ISSUE_NUMBER;

const GITHUB_API = 'https://api.github.com/graphql';
const HEADERS = {
  'Authorization': `Bearer ${PAT_GITHUB}`,
  'Content-Type': 'application/json'
};

async function githubGraphQL(query, variables = {}) {
  const res = await fetch(GITHUB_API, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

async function getIssueNodeId() {
  const query = `
    query($owner: String!, $name: String!, $number: Int!) {
      repository(owner: $owner, name: $name) {
        issue(number: $number) {
          id
          title
        }
      }
    }
  `;
  const data = await githubGraphQL(query, {
    owner: REPO_OWNER,
    name: REPO_NAME,
    number: parseInt(ISSUE_NUMBER, 10),
  });
  if (!data.repository.issue) throw new Error('Issue not found');
  return data.repository.issue.id;
}

async function getCopilotBotId() {
  const query = `
    query($owner: String!, $name: String!) {
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
  const data = await githubGraphQL(query, {
    owner: REPO_OWNER,
    name: REPO_NAME
  });
  const node = data.repository.suggestedActors.nodes.find(n => n.login === 'copilot-swe-agent');
  if (!node) throw new Error('Copilot coding agent not enabled.');
  return node.id;
}

async function assignCopilot(issueId, copilotId) {
  const mutation = `
    mutation($assignableId: ID!, $assigneeIds: [ID!]!) {
      addAssigneesToAssignable(input: { assignableId: $assignableId, assigneeIds: $assigneeIds }) {
        assignable { ... on Issue { number title } }
      }
    }
  `;
  await githubGraphQL(mutation, { assignableId: issueId, assigneeIds: [copilotId] });
}

(async () => {
  try {
    const issueId = await getIssueNodeId();
    const copilotId = await getCopilotBotId();
    await assignCopilot(issueId, copilotId);
    console.log(`Assigned Copilot to issue #${ISSUE_NUMBER}`);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
})();