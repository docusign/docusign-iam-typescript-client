/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { IamClientCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { IamClientError } from "../models/errors/iamclienterror.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Retrieve a list of available Maestro workflows
 *
 * @remarks
 * This operation retrieves a list of all available Maestro workflows. It returns basic information
 * about each workflow, including its unique identifier (`id`), name, description, and the input
 * schema required to trigger the workflow.
 *
 * The response provides key details that help users identify which workflows are available
 * and understand the input requirements for triggering each one. Each workflow entry also includes
 * metadata, such as when it was created, last modified, and by whom.
 *
 * This operation is useful for obtaining an overview of all workflows within the system, helping
 * users and systems know what workflows are defined, what inputs they require, and how they can
 * be triggered.
 *
 * ### Use Cases:
 * - Listing all available workflows in a system for manual or automated workflow initiation.
 * - Reviewing the input requirements for a workflow before triggering it programmatically.
 * - Gathering basic metadata about workflows for auditing, logging, or reporting purposes.
 *
 * ### Key Features:
 * - **Comprehensive Workflow Overview**: Provides a full list of workflows, giving visibility
 *
 *   into all the automated processes available within the Maestro platform.
 * - **Input Schema Information**: Each workflow includes its trigger input schema, showing
 *
 *   what data must be provided when triggering the workflow.
 * - **Metadata for Tracking**: Useful metadata like creation time, last modification date,
 *
 *   and user details are included to support tracking and auditing workflows.
 * - **Future-Proof**: The operation is designed to be expandable as more workflows are added
 *
 *   or the platform grows, ensuring scalability in the workflow management process.
 */
export function maestroWorkflowsGetWorkflowsList(
  client: IamClientCore,
  request: operations.GetWorkflowsListRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.WorkflowsListSuccess,
    | errors.ErrorT
    | IamClientError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: IamClientCore,
  request: operations.GetWorkflowsListRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.WorkflowsListSuccess,
      | errors.ErrorT
      | IamClientError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetWorkflowsListRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    accountId: encodeSimple("accountId", payload.accountId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/accounts/{accountId}/workflows")(pathParams);

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "GetWorkflowsList",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.accessToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 5000,
          exponent: 1.5,
          maxElapsedTime: 30000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX", "429"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.WorkflowsListSuccess,
    | errors.ErrorT
    | IamClientError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, components.WorkflowsListSuccess$inboundSchema),
    M.jsonErr([400, 401, 403, 404], errors.ErrorT$inboundSchema),
    M.jsonErr(500, errors.ErrorT$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
