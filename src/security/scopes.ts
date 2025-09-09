import { z } from "zod";

/**
 * CONNECTED FIELDS SCOPES
 */

/** OAuth Scopes for Docusign Connected Fields API */
export const DOCUSIGN_IAM_CONNECTED_FIELDS_OAUTH_SCOPES = [
  "adm_store_unified_repo_read",
  "signature",
] as const;

/** OAuth Scopes for Docusign Connected Fields API */
export type DocusignIamConnectedFieldsOAuthScope =
  (typeof DOCUSIGN_IAM_CONNECTED_FIELDS_OAUTH_SCOPES)[number];

/**
 * MAESTRO SCOPES
 */

/** OAuth Scopes for Docusign Maestro API */
export const DOCUSIGN_IAM_MAESTRO_OAUTH_SCOPES = [
  "adm_store_unified_repo_read",
  "aow_manage",
  "signature",
] as const;

/** OAuth Scopes for Docusign Connected Fields API */
export type DocusignIamMaestroOAuthScope =
  (typeof DOCUSIGN_IAM_MAESTRO_OAUTH_SCOPES)[number];

/**
 * NAVIGATOR SCOPES
 */

/** OAuth Scopes for Docusign Maestro API */
export const DOCUSIGN_IAM_NAVIGATOR_OAUTH_SCOPES = [
  "adm_store_unified_repo_read",
  "aow_manage",
  "signature",
] as const;

/** OAuth Scopes for Docusign Connected Fields API */
export type DocusignIamNavigatorOAuthScope =
  (typeof DOCUSIGN_IAM_NAVIGATOR_OAUTH_SCOPES)[number];

/**
 * WORKSPACE SCOPES
 */

/** OAuth Scopes for Docusign Workspace API */
export const DOCUSIGN_IAM_WORKSPACE_OAUTH_SCOPES = [
  "signature",
  "dtr.company.read",
  "dtr.rooms.read",
  "dtr.rooms.write",
  "dtr.documents.write",
] as const;

/** OAuth Scopes for Docusign Workspace API */
export type DocusignIamWorkspaceOAuthScope =
  (typeof DOCUSIGN_IAM_WORKSPACE_OAUTH_SCOPES)[number];

/**
 * COMMON SCOPES
 */

/** Common OAuth Scopes for Docusign API's */
export const DOCUSIGN_IAM_COMMON_OAUTH_SCOPES = [
  "signature",
  "impersonation",
] as const;

/** Common OAuth Scopes for Docusign API's */
export type DocusignIamCommonOAuthScope =
  (typeof DOCUSIGN_IAM_COMMON_OAUTH_SCOPES)[number];

/** All OAuth Scopes for Docusign IAM API's */
export const DOCUSIGN_IAM_OAUTH_SCOPES = [
  ...DOCUSIGN_IAM_COMMON_OAUTH_SCOPES,
  ...DOCUSIGN_IAM_CONNECTED_FIELDS_OAUTH_SCOPES,
  ...DOCUSIGN_IAM_MAESTRO_OAUTH_SCOPES,
  ...DOCUSIGN_IAM_NAVIGATOR_OAUTH_SCOPES,
  ...DOCUSIGN_IAM_WORKSPACE_OAUTH_SCOPES,
] as const;

/** Schema to validate OAuth scopes for Docusign API's */
export const DocusignIamAuthScopeSchema = z.enum(DOCUSIGN_IAM_OAUTH_SCOPES);

/** OAuth Scopes for Docusign API's */
export type DocusignIamAuthScope = z.input<typeof DocusignIamAuthScopeSchema>;
