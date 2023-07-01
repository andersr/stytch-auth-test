import * as stytch from "stytch";

const project_id = process.env.STYTCH_PROJECT_ID;
const secret = process.env.STYTCH_SECRET;

if (!project_id || !secret) {
  throw new Error("Missing auth env vars");
}

let client: any;

const loadStytchBackendAPI = () => {
  if (!client) {
    client = new stytch.Client({
      project_id,
      secret,
      env: stytch.envs.test,
    });
  }

  return client;
};

export default loadStytchBackendAPI;
