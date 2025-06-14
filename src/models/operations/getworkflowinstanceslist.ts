/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetWorkflowInstancesListRequest = {
  /**
   * The unique identifier of the account.
   */
  accountId: string;
  /**
   * The unique identifier of the workflow.
   */
  workflowId: string;
};

/** @internal */
export const GetWorkflowInstancesListRequest$inboundSchema: z.ZodType<
  GetWorkflowInstancesListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountId: z.string(),
  workflowId: z.string(),
});

/** @internal */
export type GetWorkflowInstancesListRequest$Outbound = {
  accountId: string;
  workflowId: string;
};

/** @internal */
export const GetWorkflowInstancesListRequest$outboundSchema: z.ZodType<
  GetWorkflowInstancesListRequest$Outbound,
  z.ZodTypeDef,
  GetWorkflowInstancesListRequest
> = z.object({
  accountId: z.string(),
  workflowId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowInstancesListRequest$ {
  /** @deprecated use `GetWorkflowInstancesListRequest$inboundSchema` instead. */
  export const inboundSchema = GetWorkflowInstancesListRequest$inboundSchema;
  /** @deprecated use `GetWorkflowInstancesListRequest$outboundSchema` instead. */
  export const outboundSchema = GetWorkflowInstancesListRequest$outboundSchema;
  /** @deprecated use `GetWorkflowInstancesListRequest$Outbound` instead. */
  export type Outbound = GetWorkflowInstancesListRequest$Outbound;
}

export function getWorkflowInstancesListRequestToJSON(
  getWorkflowInstancesListRequest: GetWorkflowInstancesListRequest,
): string {
  return JSON.stringify(
    GetWorkflowInstancesListRequest$outboundSchema.parse(
      getWorkflowInstancesListRequest,
    ),
  );
}

export function getWorkflowInstancesListRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetWorkflowInstancesListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWorkflowInstancesListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWorkflowInstancesListRequest' from JSON`,
  );
}
