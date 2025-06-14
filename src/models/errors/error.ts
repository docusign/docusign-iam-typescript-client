/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { IamClientError } from "./iamclienterror.js";

/**
 * Bad Request - The request could not be understood or was missing required parameters.
 */
export type ErrorTData = {
  /**
   * A message describing the error.
   */
  error?: string | undefined;
  /**
   * HTTP status code for the error.
   */
  code?: number | undefined;
  /**
   * The timestamp when the error occurred.
   */
  timestamp?: Date | undefined;
};

/**
 * Bad Request - The request could not be understood or was missing required parameters.
 */
export class ErrorT extends IamClientError {
  /**
   * A message describing the error.
   */
  error?: string | undefined;
  /**
   * HTTP status code for the error.
   */
  code?: number | undefined;
  /**
   * The timestamp when the error occurred.
   */
  timestamp?: Date | undefined;

  /** The original data that was passed to this error instance. */
  data$: ErrorTData;

  constructor(
    err: ErrorTData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.error != null) this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.timestamp != null) this.timestamp = err.timestamp;

    this.name = "ErrorT";
  }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    error: z.string().optional(),
    code: z.number().int().optional(),
    timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
  .transform((v) => {
    return new ErrorT(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ErrorT$Outbound = {
  error?: string | undefined;
  code?: number | undefined;
  timestamp?: string | undefined;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.instanceof(ErrorT)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string().optional(),
    code: z.number().int().optional(),
    timestamp: z.date().transform(v => v.toISOString()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}
