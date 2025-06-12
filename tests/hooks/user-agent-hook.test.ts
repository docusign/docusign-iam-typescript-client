import { describe, expect, it } from "vitest";
import { UserAgentHook } from "../../src/hooks/custom/user-agent-hook.js";
import { SDK_METADATA } from "../../src/lib/config.js";
import { detectRuntime } from "../../src/lib/detect-runtime.js";

describe("User Agent Hook", () => {
  it("should set the User-Agent header correctly", async () => {
    const {
      genVersion: GEN_VERSION,
      openapiDocVersion: OAS_VERSION,
      userAgent: DEFAULT_USER_AGENT,
      sdkVersion: SDK_VERSION,
      language: LANGUAGE,
    } = SDK_METADATA;

    const mockRequest = new Request("https://test-base-url.com", {
      headers: [["User-Agent", DEFAULT_USER_AGENT]],
    });
    const hook = new UserAgentHook();

    const modifiedRequest = await hook.beforeRequest(
      {
        options: {
          userAgent: DEFAULT_USER_AGENT,
        },
        baseURL: "https://test-base-url.com",
        oAuth2Scopes: ["test-auth-scope"],
        operationID: "test-operation-id",
        resolvedSecurity: null,
        retryConfig: { strategy: "none" },
        securitySource: null,
      },
      mockRequest,
    );

    const { runtime, version: runtimeVersion } = detectRuntime();

    const actualUserAgent = modifiedRequest.headers.get("User-Agent");
    const expectedUserAgent = `docusign-sdk/${OAS_VERSION}/${SDK_VERSION}/${LANGUAGE}/${runtime}_${runtimeVersion}/${GEN_VERSION}/@docusign/iam-sdk`;

    expect(actualUserAgent).not.toBe(DEFAULT_USER_AGENT);
    expect(actualUserAgent).toBe(expectedUserAgent);
  });
});
