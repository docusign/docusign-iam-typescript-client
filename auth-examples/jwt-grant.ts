/// <reference types="bun-types" />
// bun --env-file="auth-examples/.env" run auth-examples/jwt-grant.ts

import { listenForAuthCallback } from "./_helpers.js";
import { AuthUtils, IamClient } from "../src/index.js";
import { OAuthErrorResponse } from "../src/models/errors/index.js";

// // Details cofigured from the Docusign developer console
const clientId = process.env.AUTH_JWT_CLIENT_ID!;
const redirectUri = "http://localhost:3000/oauth2/callback";
const userId = process.env.DOCUSIGN_USER_ID!;
const privateKey = process.env.AUTH_JWT_PRIVATE_KEY!;

const authorizationUrl = AuthUtils.createAuthorizationUrl({
  type: "code",
  clientId,
  redirectUri,
});

// Prompt the user to visit the authorization URL. They'll need to grab the
// token from the `token` query parameter
console.log(
  `Please visit this URL to authorize the application:\n${authorizationUrl}\n`,
);

const { value: code } = await listenForAuthCallback({
  path: new URL(redirectUri).pathname,
});
console.log(`Code received!\n${code}\n`);

// Spin up a local server to listen for the redirect from Docusign
const jwtAssertion = AuthUtils.createJwtAssertion({
  clientId,
  userId,
  privateKey,
});

// Get token information using the JWT assertion
const { accessToken } = await new IamClient().auth
  .getTokenFromJwtGrant({ assertion: jwtAssertion })
  .catch((error) => {
    if (error instanceof OAuthErrorResponse) {
      throw new Error(
        `Failed to get auth session. Error: ${error.error}, Description: ${error.errorDescription}`,
      );
    }
    throw error;
  });

// Instantiate the SDK with the authorization code grant
// Note that `type` is `public`.
const authenticatedClient = new IamClient({
  accessToken: accessToken,
  server: "demo",
});

const result = await authenticatedClient.auth.getUserInfo();

// Handle the result
console.log("User Info:\n", result, "\n");
