import { createPrivateKey, createSign } from "node:crypto";
import { z } from "zod";
import { DOCUSIGN_IAM_OAUTH_SCOPES, DocusignIamAuthScope } from "./scopes.js";
import { DocusignOAuthBasePathSchema, RsaPrivateKeySchema } from "./types.js";

/**
 * Schema for JWT user token request parameters
 */
export const FetchJwtUserTokenRequestSchema = z.object({
  /**
   * Docusign OAuth Client ID (AKA Integrator Key)
   */
  clientId: z.string({
    required_error: "Client ID (Integrator Key) is required",
    invalid_type_error: "Client ID must be a string",
  }),

  /**
   * The Docusign user ID for which to generate the token
   */
  userId: z.string({
    required_error: "User ID is required",
    invalid_type_error: "User ID must be a string",
  }),

  /**
   * The environment to use for the OAuth flow.
   *
   * Use `account-d-docusign.com` for demo and `account.docusign.com` for
   * production.
   *
   * @default account-d.docusign.com
   */
  oauthBasePath: DocusignOAuthBasePathSchema.optional().default(
    "account-d.docusign.com",
  ),

  /**
   * Private key in PEM format used to sign the JWT
   */
  privateKey: RsaPrivateKeySchema,

  /**
   * Scopes for the OAuth flow.
   *
   * If no scopes are provided, all available scopes will be used.
   *
   * @link https://developers.docusign.com/platform/auth/scopes/
   */
  scopes: z
    .string()
    .array()
    .readonly()
    .optional()
    .default(DOCUSIGN_IAM_OAUTH_SCOPES),
});

type CreateAssertionParams = Omit<
  z.input<typeof FetchJwtUserTokenRequestSchema>,
  "scopes"
> & {
  /**
   * Scopes for the OAuth flow.
   *
   * If no scopes are provided, all available scopes will be used.
   *
   * @link https://developers.docusign.com/platform/auth/scopes/
   */
  scopes?: Array<DocusignIamAuthScope | (string & {})> | undefined;
};

export function createJwtAssertion(params: CreateAssertionParams): string {
  const { clientId, userId, oauthBasePath, privateKey, scopes } =
    FetchJwtUserTokenRequestSchema.parse(params);

  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000); // Current time in seconds
  const exp = now + 3_600; // Expiration time

  const payload = {
    iss: clientId,
    sub: userId,
    aud: oauthBasePath,
    iat: now,
    exp: exp,
    nbf: now,
    scope: scopes.join(" "),
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
    "base64url",
  );
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );

  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  const signer = createSign("RSA-SHA256");
  signer.update(signatureInput);

  const key = createPrivateKey(privateKey);

  const signature = signer.sign(key, "base64url");

  return `${signatureInput}.${signature}`;
}
