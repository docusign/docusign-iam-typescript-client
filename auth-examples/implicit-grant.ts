/// <reference types="bun-types" />
// bun --env-file="auth-examples/.env" run auth-examples/implicit-grant.ts

import { AuthUtils, IamClient } from "../src/index.js";
import { createInterface } from "readline/promises";

// Details cofigured from the Docusign developer console
const clientId = process.env.AUTH_IMPLICIT_CLIENT_ID!;
const redirectUri = process.env.DOCUSIGN_REDIRECT_URI!;

const authorizationUrl = AuthUtils.createAuthorizationUrl({
  type: "token",
  clientId,
  redirectUri,
});

// Prompt the user to visit the authorization URL. They'll need to grab the
// token from the `token` query parameter
console.log(
  `Please visit this URL to authorize the application:\n${authorizationUrl}\n`,
);

console.log(
  "It will redirect you to a localhost URL, which will contain an access_token.",
);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const url = await rl.question("Copy the whole URL and paste it here:\n");
rl.close();

const paramsString = url.split("#")[1];
const params = new URLSearchParams(paramsString);
const authSession = Object.fromEntries(params.entries());

console.log("\nExtracted Auth Session:\n", authSession, "\n");

// Instantiate the SDK with the token
// Note that `type` is `public`.
const authenticatedClient = new IamClient({
  accessToken: authSession.access_token!,
});

const result = await authenticatedClient.auth.getUserInfo();

// Handle the result
console.log("User Info:\n", result, "\n");
