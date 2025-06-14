/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CancelWorkflowInstanceResponse = {
  /**
   * A message confirming the instance was canceled, including the instance and workflow IDs
   */
  message?: string | undefined;
};

/** @internal */
export const CancelWorkflowInstanceResponse$inboundSchema: z.ZodType<
  CancelWorkflowInstanceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
});

/** @internal */
export type CancelWorkflowInstanceResponse$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const CancelWorkflowInstanceResponse$outboundSchema: z.ZodType<
  CancelWorkflowInstanceResponse$Outbound,
  z.ZodTypeDef,
  CancelWorkflowInstanceResponse
> = z.object({
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelWorkflowInstanceResponse$ {
  /** @deprecated use `CancelWorkflowInstanceResponse$inboundSchema` instead. */
  export const inboundSchema = CancelWorkflowInstanceResponse$inboundSchema;
  /** @deprecated use `CancelWorkflowInstanceResponse$outboundSchema` instead. */
  export const outboundSchema = CancelWorkflowInstanceResponse$outboundSchema;
  /** @deprecated use `CancelWorkflowInstanceResponse$Outbound` instead. */
  export type Outbound = CancelWorkflowInstanceResponse$Outbound;
}

export function cancelWorkflowInstanceResponseToJSON(
  cancelWorkflowInstanceResponse: CancelWorkflowInstanceResponse,
): string {
  return JSON.stringify(
    CancelWorkflowInstanceResponse$outboundSchema.parse(
      cancelWorkflowInstanceResponse,
    ),
  );
}

export function cancelWorkflowInstanceResponseFromJSON(
  jsonString: string,
): SafeParseResult<CancelWorkflowInstanceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelWorkflowInstanceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelWorkflowInstanceResponse' from JSON`,
  );
}
