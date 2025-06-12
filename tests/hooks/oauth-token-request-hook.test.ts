import { describe, expect, it } from "vitest";
import { OAuthTokenRequestHook } from "../../src/hooks/custom/oauth-token-request-hook.js";
import { stringToBase64 } from "../../src/lib/base64.js";
import { GetTokenFromConfidentialAuthCodeSecurity } from "../../src/models/operations/gettokenfromconfidentialauthcode.js";

describe("OAuth Token Request Hook", () => {
  it("should set the Authorization header correctly for GetTokenFromConfidentialAuthCode", async () => {
    const mockClientId = "test-client-id";
    const mockSecretKey = "test-secret-key";
    const mockSecurity: GetTokenFromConfidentialAuthCodeSecurity = {
      clientId: mockClientId,
      secretKey: mockSecretKey,
    };

    const mockRequest = new Request("https://test-base-url.com");
    const hook = new OAuthTokenRequestHook();

    const modifiedRequest = hook.beforeRequest(
      {
        options: {},
        baseURL: "https://test-base-url.com",
        oAuth2Scopes: ["test-auth-scope"],
        operationID: "GetTokenFromConfidentialAuthCode",
        resolvedSecurity: null,
        retryConfig: { strategy: "none" },
        securitySource: mockSecurity,
      },
      mockRequest,
    );

    const actualAuthHeader = modifiedRequest.headers.get("Authorization");
    const expectedAuthHeader = `Basic ${stringToBase64(`${mockClientId}:${mockSecretKey}`)}`;

    expect(actualAuthHeader).toBe(expectedAuthHeader);
  });

  it("should set the Authorization header correctly for GetTokenFromRefreshToken", async () => {
    const mockClientId = "test-client-id";
    const mockSecretKey = "test-secret-key";
    const mockSecurity = {
      clientId: mockClientId,
      secretKey: mockSecretKey,
    };

    const mockRequest = new Request("https://test-base-url.com");
    const hook = new OAuthTokenRequestHook();

    const modifiedRequest = hook.beforeRequest(
      {
        options: {},
        baseURL: "https://test-base-url.com",
        oAuth2Scopes: ["test-auth-scope"],
        operationID: "GetTokenFromRefreshToken",
        resolvedSecurity: null,
        retryConfig: { strategy: "none" },
        securitySource: mockSecurity,
      },
      mockRequest,
    );

    const actualAuthHeader = modifiedRequest.headers.get("Authorization");
    const expectedAuthHeader = `Basic ${stringToBase64(`${mockClientId}:${mockSecretKey}`)}`;

    expect(actualAuthHeader).toBe(expectedAuthHeader);
  });

  it("should handle security source as a function", async () => {
    const mockClientId = "test-client-id";
    const mockSecretKey = "test-secret-key";
    const mockSecurityFunc = () => ({
      clientId: mockClientId,
      secretKey: mockSecretKey,
    });

    const mockRequest = new Request("https://test-base-url.com");
    const hook = new OAuthTokenRequestHook();

    const modifiedRequest = hook.beforeRequest(
      {
        options: {},
        baseURL: "https://test-base-url.com",
        oAuth2Scopes: ["test-auth-scope"],
        operationID: "GetTokenFromConfidentialAuthCode",
        resolvedSecurity: null,
        retryConfig: { strategy: "none" },
        securitySource: mockSecurityFunc,
      },
      mockRequest,
    );

    const actualAuthHeader = modifiedRequest.headers.get("Authorization");
    const expectedAuthHeader = `Basic ${stringToBase64(`${mockClientId}:${mockSecretKey}`)}`;

    expect(actualAuthHeader).toBe(expectedAuthHeader);
  });

  it("should throw an error when security source is not defined", async () => {
    const mockRequest = new Request("https://test-base-url.com");
    const hook = new OAuthTokenRequestHook();

    expect(() =>
      hook.beforeRequest(
        {
          options: {},
          baseURL: "https://test-base-url.com",
          oAuth2Scopes: ["test-auth-scope"],
          operationID: "GetTokenFromConfidentialAuthCode",
          resolvedSecurity: null,
          retryConfig: { strategy: "none" },
          securitySource: null,
        },
        mockRequest,
      ),
    ).toThrow("security source is not defined");
  });

  it("should not modify the request for unrelated operations", async () => {
    const mockRequest = new Request("https://test-base-url.com");
    const hook = new OAuthTokenRequestHook();

    const modifiedRequest = hook.beforeRequest(
      {
        options: {},
        baseURL: "https://test-base-url.com",
        oAuth2Scopes: ["test-auth-scope"],
        operationID: "SomeOtherOperation",
        resolvedSecurity: null,
        retryConfig: { strategy: "none" },
        securitySource: { someKey: "someValue" },
      },
      mockRequest,
    );

    expect(modifiedRequest.headers.get("Authorization")).toBeNull();
  });
});

