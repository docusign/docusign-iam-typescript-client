/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TabConnectedFieldsData,
  TabConnectedFieldsData$inboundSchema,
  TabConnectedFieldsData$Outbound,
  TabConnectedFieldsData$outboundSchema,
} from "./tabconnectedfieldsdata.js";
import {
  TabConnectionInstance,
  TabConnectionInstance$inboundSchema,
  TabConnectionInstance$Outbound,
  TabConnectionInstance$outboundSchema,
} from "./tabconnectioninstance.js";

/**
 * Indicates if the field is required to sign the document
 */
export const ExtensionPolicy = {
  None: "None",
} as const;
/**
 * Indicates if the field is required to sign the document
 */
export type ExtensionPolicy = ClosedEnum<typeof ExtensionPolicy>;

export type TabExtensionData = {
  /**
   * A unique UUID for each tab group. Tabs associated with the same model or concept will share the same extensionGroupId.
   */
  extensionGroupId: string;
  /**
   * Determines input data key required for data verification.
   */
  actionInputKey: string;
  /**
   * Indicates if the field is required to sign the document
   */
  extensionPolicy?: ExtensionPolicy | undefined;
  /**
   * Publisher of the extension app.
   */
  publisherName?: string | undefined;
  /**
   * Name of the extension app.
   */
  applicationName?: string | undefined;
  /**
   * Name of an action in an extension app.
   */
  actionName?: string | undefined;
  /**
   * Indicates the  template that defines an extension.
   */
  extensionContract?: string | undefined;
  /**
   * Indicates the template defining an action.
   */
  actionContract?: string | undefined;
  /**
   * Name of the extension.
   */
  extensionName?: string | undefined;
  /**
   * A boolean value that indicates if the field must pass verification to sign the document.
   */
  requiredForExtension: boolean;
  /**
   * Array representing the extension app connection name and instance.
   */
  connectionInstances?: Array<TabConnectionInstance> | undefined;
  connectedFieldsData?: TabConnectedFieldsData | undefined;
};

/** @internal */
export const ExtensionPolicy$inboundSchema: z.ZodNativeEnum<
  typeof ExtensionPolicy
> = z.nativeEnum(ExtensionPolicy);

/** @internal */
export const ExtensionPolicy$outboundSchema: z.ZodNativeEnum<
  typeof ExtensionPolicy
> = ExtensionPolicy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExtensionPolicy$ {
  /** @deprecated use `ExtensionPolicy$inboundSchema` instead. */
  export const inboundSchema = ExtensionPolicy$inboundSchema;
  /** @deprecated use `ExtensionPolicy$outboundSchema` instead. */
  export const outboundSchema = ExtensionPolicy$outboundSchema;
}

/** @internal */
export const TabExtensionData$inboundSchema: z.ZodType<
  TabExtensionData,
  z.ZodTypeDef,
  unknown
> = z.object({
  extensionGroupId: z.string(),
  actionInputKey: z.string(),
  extensionPolicy: ExtensionPolicy$inboundSchema.optional(),
  publisherName: z.string().optional(),
  applicationName: z.string().optional(),
  actionName: z.string().optional(),
  extensionContract: z.string().optional(),
  actionContract: z.string().optional(),
  extensionName: z.string().optional(),
  requiredForExtension: z.boolean(),
  connectionInstances: z.array(TabConnectionInstance$inboundSchema).optional(),
  connectedFieldsData: TabConnectedFieldsData$inboundSchema.optional(),
});

/** @internal */
export type TabExtensionData$Outbound = {
  extensionGroupId: string;
  actionInputKey: string;
  extensionPolicy?: string | undefined;
  publisherName?: string | undefined;
  applicationName?: string | undefined;
  actionName?: string | undefined;
  extensionContract?: string | undefined;
  actionContract?: string | undefined;
  extensionName?: string | undefined;
  requiredForExtension: boolean;
  connectionInstances?: Array<TabConnectionInstance$Outbound> | undefined;
  connectedFieldsData?: TabConnectedFieldsData$Outbound | undefined;
};

/** @internal */
export const TabExtensionData$outboundSchema: z.ZodType<
  TabExtensionData$Outbound,
  z.ZodTypeDef,
  TabExtensionData
> = z.object({
  extensionGroupId: z.string(),
  actionInputKey: z.string(),
  extensionPolicy: ExtensionPolicy$outboundSchema.optional(),
  publisherName: z.string().optional(),
  applicationName: z.string().optional(),
  actionName: z.string().optional(),
  extensionContract: z.string().optional(),
  actionContract: z.string().optional(),
  extensionName: z.string().optional(),
  requiredForExtension: z.boolean(),
  connectionInstances: z.array(TabConnectionInstance$outboundSchema).optional(),
  connectedFieldsData: TabConnectedFieldsData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TabExtensionData$ {
  /** @deprecated use `TabExtensionData$inboundSchema` instead. */
  export const inboundSchema = TabExtensionData$inboundSchema;
  /** @deprecated use `TabExtensionData$outboundSchema` instead. */
  export const outboundSchema = TabExtensionData$outboundSchema;
  /** @deprecated use `TabExtensionData$Outbound` instead. */
  export type Outbound = TabExtensionData$Outbound;
}

export function tabExtensionDataToJSON(
  tabExtensionData: TabExtensionData,
): string {
  return JSON.stringify(
    TabExtensionData$outboundSchema.parse(tabExtensionData),
  );
}

export function tabExtensionDataFromJSON(
  jsonString: string,
): SafeParseResult<TabExtensionData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TabExtensionData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TabExtensionData' from JSON`,
  );
}
