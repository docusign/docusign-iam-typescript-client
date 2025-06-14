/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AuthorizationCodeGrantResponse = {
  /**
   * The value of the access token. This value will be added to the Authorization header of all Docusign API calls.
   */
  accessToken: string;
  /**
   * The type of token. For access tokens, the value of this will be Bearer.
   */
  tokenType: string;
  /**
   * The refresh token.
   */
  refreshToken: string;
  /**
   * The number of seconds until the access token expires.
   */
  expiresIn: number;
};

/** @internal */
export const AuthorizationCodeGrantResponse$inboundSchema: z.ZodType<
  AuthorizationCodeGrantResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  access_token: z.string(),
  token_type: z.string(),
  refresh_token: z.string(),
  expires_in: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "access_token": "accessToken",
    "token_type": "tokenType",
    "refresh_token": "refreshToken",
    "expires_in": "expiresIn",
  });
});

/** @internal */
export type AuthorizationCodeGrantResponse$Outbound = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
};

/** @internal */
export const AuthorizationCodeGrantResponse$outboundSchema: z.ZodType<
  AuthorizationCodeGrantResponse$Outbound,
  z.ZodTypeDef,
  AuthorizationCodeGrantResponse
> = z.object({
  accessToken: z.string(),
  tokenType: z.string(),
  refreshToken: z.string(),
  expiresIn: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    accessToken: "access_token",
    tokenType: "token_type",
    refreshToken: "refresh_token",
    expiresIn: "expires_in",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthorizationCodeGrantResponse$ {
  /** @deprecated use `AuthorizationCodeGrantResponse$inboundSchema` instead. */
  export const inboundSchema = AuthorizationCodeGrantResponse$inboundSchema;
  /** @deprecated use `AuthorizationCodeGrantResponse$outboundSchema` instead. */
  export const outboundSchema = AuthorizationCodeGrantResponse$outboundSchema;
  /** @deprecated use `AuthorizationCodeGrantResponse$Outbound` instead. */
  export type Outbound = AuthorizationCodeGrantResponse$Outbound;
}

export function authorizationCodeGrantResponseToJSON(
  authorizationCodeGrantResponse: AuthorizationCodeGrantResponse,
): string {
  return JSON.stringify(
    AuthorizationCodeGrantResponse$outboundSchema.parse(
      authorizationCodeGrantResponse,
    ),
  );
}

export function authorizationCodeGrantResponseFromJSON(
  jsonString: string,
): SafeParseResult<AuthorizationCodeGrantResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthorizationCodeGrantResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthorizationCodeGrantResponse' from JSON`,
  );
}
