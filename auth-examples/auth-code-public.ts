/// <reference types="bun-types" />
// bun --env-file="auth-examples/.env" run auth-examples/auth-code-public.ts

import { hash, randomBytes } from "node:crypto";
import { AuthUtils, IamClient } from "../src/index.js";
import { OAuthErrorResponse } from "../src/models/errors/index.js";
import { listenForAuthCallback } from "./_helpers.js";

// Details configured from the Docusign developer console.
const clientId = process.env.AUTH_CODE_PUBLIC_CLIENT_ID!;
const redirectUri = process.env.DOCUSIGN_REDIRECT_URI!;

// These are provided by the SDK user at runtime
const codeVerifier = randomBytes(32).toString("base64url");
const codeChallenge = hash("sha256", codeVerifier, "base64url");

const authorizationUrl = AuthUtils.createAuthorizationUrl({
  type: "code",
  clientId,
  redirectUri,
  codeChallenge,
});

// Prompt the user to visit the authorization URL. They'll need to grab the
// code from the `code` query parameter
console.log(
  `Please visit this URL to authorize the application:\n${authorizationUrl}\n`,
);

// Spin up a local server to listen for the redirect from Docusign
const { value: code } = await listenForAuthCallback({
  path: new URL(redirectUri).pathname,
});

// Get token information using the authorization code
const { accessToken, refreshToken, expiresIn } = await new IamClient().auth
  .getTokenFromPublicAuthCode({ clientId, codeVerifier, code })
  .catch((error) => {
    if (error instanceof OAuthErrorResponse) {
      throw new Error(
        `Failed to get auth session. Error: ${error.error}, Description: ${error.errorDescription}`,
      );
    }
    throw error;
  });

console.log(
  `Auth Session:\n${JSON.stringify({ accessToken, refreshToken, expiresIn }, null, 2)}\n`,
);

// Instantiate the SDK with the refresh token cb
// Note that `type` is `public`.
const authenticatedClient = new IamClient({
  accessToken: accessToken,
});

const result = await authenticatedClient.auth.getUserInfo();

// Handle the result
console.log("User Info:\n", result, "\n");
