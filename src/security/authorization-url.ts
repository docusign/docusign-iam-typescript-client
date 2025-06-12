import { z } from "zod";
import { DOCUSIGN_IAM_OAUTH_SCOPES, DocusignIamAuthScope } from "./scopes.js";
import { DocusignOAuthBasePathSchema } from "./types.js";

/**
 * Schema for authorization URL options.
 */
export const AuthorizationUrlParamsSchema = z.object({
  /**
   * The type of response to request.
   *
   * Use `code` for authorization code flows, and `token` for implicit flows.
   *
   * @link https://developers.docusign.com/platform/auth/consent/obtaining-individual-consent/
   */
  type: z.enum(["code", "token"]),

  /**
   * The environment to use for the OAuth flow.
   *
   * Use `account-d-docusign.com` for demo and `account.docusign.com` for
   * production.
   *
   * If no environment is provided, the default is `account-d.docusign.com`.
   */
  oauthBasePath: DocusignOAuthBasePathSchema.optional().default(
    "account-d.docusign.com",
  ),

  /** Client ID (AKA Integration Key) */
  clientId: z.string(),

  /**
   * The URI where the user will be redirected after authorization.
   *
   * This must match one of the redirect URIs configured for your integration.
   */
  redirectUri: z.string().url(),

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

  /**
   * An opaque value used to maintain state between the request and callback.
   *
   * This parameter is used to prevent cross-site request forgery.
   */
  state: z.string().optional(),

  /**
   * The coptionsode challenge for PKCE.
   *
   * A Base64-URL-encoded string derived from the code verifier.
   * Used in authorization code flow with PKCE for public clients.
   */
  codeChallenge: z.string().optional(),
});

/** Options for creating an Authorization URL */
export type AuthorizationUrlSchema = Omit<
  z.input<typeof AuthorizationUrlParamsSchema>,
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

/**
 * Creates an authorization URL for the Docusign OAuth flows.
 *
 * @link https://developers.docusign.com/platform/auth/consent/obtaining-individual-consent/
 */
export function createAuthorizationUrl(
  options: AuthorizationUrlSchema,
): string {
  const {
    type,
    clientId,
    redirectUri,
    scopes,
    state,
    codeChallenge,
    oauthBasePath,
  } = AuthorizationUrlParamsSchema.parse(options);

  let uri = `https://${oauthBasePath}/oauth/auth`;
  uri += `?response_type=${encodeURIComponent(type)}`;
  uri += `&client_id=${encodeURIComponent(clientId)}`;
  uri += `&scope=${encodeURIComponent(scopes.join(" "))}`;
  uri += `&redirect_uri=${encodeURIComponent(redirectUri)}`;

  if (state) {
    uri += `&state=${encodeURIComponent(state)}`;
  }

  if (codeChallenge) {
    uri += `&code_challenge=${encodeURIComponent(codeChallenge)}`;
    uri += `&code_challenge_method=S256`;
  }

  return uri;
}
