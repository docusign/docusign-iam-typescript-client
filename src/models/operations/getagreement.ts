/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAgreementRequest = {
  accountId?: string | null | undefined;
  agreementId?: string | null | undefined;
};

/** @internal */
export const GetAgreementRequest$inboundSchema: z.ZodType<
  GetAgreementRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountId: z.nullable(
    z.string().default("00000000-0000-0000-0000-000000000000"),
  ),
  agreementId: z.nullable(
    z.string().default("00000000-0000-0000-0000-000000000000"),
  ),
});

/** @internal */
export type GetAgreementRequest$Outbound = {
  accountId: string | null;
  agreementId: string | null;
};

/** @internal */
export const GetAgreementRequest$outboundSchema: z.ZodType<
  GetAgreementRequest$Outbound,
  z.ZodTypeDef,
  GetAgreementRequest
> = z.object({
  accountId: z.nullable(
    z.string().default("00000000-0000-0000-0000-000000000000"),
  ),
  agreementId: z.nullable(
    z.string().default("00000000-0000-0000-0000-000000000000"),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAgreementRequest$ {
  /** @deprecated use `GetAgreementRequest$inboundSchema` instead. */
  export const inboundSchema = GetAgreementRequest$inboundSchema;
  /** @deprecated use `GetAgreementRequest$outboundSchema` instead. */
  export const outboundSchema = GetAgreementRequest$outboundSchema;
  /** @deprecated use `GetAgreementRequest$Outbound` instead. */
  export type Outbound = GetAgreementRequest$Outbound;
}

export function getAgreementRequestToJSON(
  getAgreementRequest: GetAgreementRequest,
): string {
  return JSON.stringify(
    GetAgreementRequest$outboundSchema.parse(getAgreementRequest),
  );
}

export function getAgreementRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAgreementRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAgreementRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAgreementRequest' from JSON`,
  );
}
