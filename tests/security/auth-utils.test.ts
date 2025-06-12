import { describe, expect, it, beforeAll } from "vitest";
import { AuthUtils } from "../../src/security/index.js";
import { generateKeyPairSync } from "node:crypto";

describe("AuthUtils", () => {
  describe("createAuthorizationUrl", () => {
    it("should create a valid authorization URL for code flow", () => {
      const url = AuthUtils.createAuthorizationUrl({
        type: "code",
        clientId: "test-client-id",
        redirectUri: "https://example.com/callback",
      });

      expect(url).toContain("https://account-d.docusign.com/oauth/auth");
      expect(url).toContain("response_type=code");
      expect(url).toContain("client_id=test-client-id");
      expect(url).toContain(
        "redirect_uri=https%3A%2F%2Fexample.com%2Fcallback",
      );

      // Should include default scopes
      expect(url).toContain("scope=");
    });

    it("should create a valid authorization URL for token flow", () => {
      const url = AuthUtils.createAuthorizationUrl({
        type: "token",
        clientId: "test-client-id",
        redirectUri: "https://example.com/callback",
      });

      expect(url).toContain("https://account-d.docusign.com/oauth/auth");
      expect(url).toContain("response_type=token");
      expect(url).toContain("client_id=test-client-id");
      expect(url).toContain(
        "redirect_uri=https%3A%2F%2Fexample.com%2Fcallback",
      );
    });

    it("should support custom scopes", () => {
      const url = AuthUtils.createAuthorizationUrl({
        type: "code",
        clientId: "test-client-id",
        redirectUri: "https://example.com/callback",
        scopes: ["signature", "impersonation"],
      });

      expect(url).toContain("scope=signature%20impersonation");
    });

    it("should support state parameter", () => {
      const url = AuthUtils.createAuthorizationUrl({
        type: "code",
        clientId: "test-client-id",
        redirectUri: "https://example.com/callback",
        state: "test-state",
      });

      expect(url).toContain("state=test-state");
    });

    it("should support code challenge for PKCE", () => {
      const url = AuthUtils.createAuthorizationUrl({
        type: "code",
        clientId: "test-client-id",
        redirectUri: "https://example.com/callback",
        codeChallenge: "test-code-challenge",
      });

      expect(url).toContain("code_challenge=test-code-challenge");
      expect(url).toContain("code_challenge_method=S256");
    });

    it("should use custom OAuth base path", () => {
      const url = AuthUtils.createAuthorizationUrl({
        type: "code",
        clientId: "test-client-id",
        redirectUri: "https://example.com/callback",
        oauthBasePath: "account.docusign.com",
      });

      expect(url).toContain("https://account.docusign.com/oauth/auth");
    });

    it("should properly encode all parameters", () => {
      const url = AuthUtils.createAuthorizationUrl({
        type: "code",
        clientId: "client id with spaces",
        redirectUri: "https://example.com/callback?param=value",
        state: "state with spaces & special chars",
      });

      expect(url).toContain("client_id=client%20id%20with%20spaces");
      expect(url).toContain(
        "redirect_uri=https%3A%2F%2Fexample.com%2Fcallback%3Fparam%3Dvalue",
      );
      expect(url).toContain(
        "state=state%20with%20spaces%20%26%20special%20chars",
      );
    });

    it("should throw an error when clientId is missing", () => {
      expect(() =>
        // @ts-expect-error Testing invalid input
        AuthUtils.createAuthorizationUrl({
          type: "code",
          redirectUri: "https://example.com/callback",
        }),
      ).toThrow();
    });

    it("should throw an error when redirectUri is missing", () => {
      expect(() =>
        // @ts-expect-error Testing invalid input
        AuthUtils.createAuthorizationUrl({
          type: "code",
          clientId: "test-client-id",
        }),
      ).toThrow();
    });

    it("should throw an error when type is missing", () => {
      expect(() =>
        // @ts-expect-error Testing invalid input
        AuthUtils.createAuthorizationUrl({
          clientId: "test-client-id",
          redirectUri: "https://example.com/callback",
        }),
      ).toThrow();
    });

    it("should throw an error when redirectUri is not a valid URL", () => {
      expect(() =>
        AuthUtils.createAuthorizationUrl({
          type: "code",
          clientId: "test-client-id",
          redirectUri: "not-a-url",
        }),
      ).toThrow();
    });

    it("should throw an error when oauthBasePath is invalid", () => {
      expect(() =>
        AuthUtils.createAuthorizationUrl({
          type: "code",
          clientId: "test-client-id",
          redirectUri: "https://example.com/callback",
          // @ts-expect-error Testing invalid input
          oauthBasePath: "invalid-domain.com",
        }),
      ).toThrow();
    });
  });

  describe("createJwtAssertion", () => {
    let testPrivateKey: string;

    beforeAll(() => {
      // Generate a test RSA key pair
      const { privateKey } = generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
          type: "spki",
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs8",
          format: "pem",
        },
      });

      testPrivateKey = privateKey;
    });

    it("should create a valid JWT assertion", () => {
      const assertion = AuthUtils.createJwtAssertion({
        clientId: "test-client-id",
        userId: "test-user-id",
        privateKey: testPrivateKey,
      });

      // JWT should have 3 parts separated by dots
      const parts = assertion.split(".");
      expect(parts).toHaveLength(3);

      // Decode the header and check its properties
      const header = JSON.parse(Buffer.from(parts[0], "base64url").toString());
      expect(header).toEqual({
        alg: "RS256",
        typ: "JWT",
      });

      // Decode the payload and check its properties
      const payload = JSON.parse(Buffer.from(parts[1], "base64url").toString());
      expect(payload.iss).toBe("test-client-id");
      expect(payload.sub).toBe("test-user-id");
      expect(payload.aud).toBe("account-d.docusign.com");
      expect(payload.scope).toBeDefined();

      // Check time-based claims
      expect(payload.iat).toBeDefined();
      expect(payload.exp).toBeDefined();
      expect(payload.nbf).toBeDefined();
      expect(payload.exp - payload.iat).toBe(3600); // 1 hour expiration
    });

    it("should use custom OAuth base path", () => {
      const assertion = AuthUtils.createJwtAssertion({
        clientId: "test-client-id",
        userId: "test-user-id",
        privateKey: testPrivateKey,
        oauthBasePath: "account.docusign.com",
      });

      const payload = JSON.parse(
        Buffer.from(assertion.split(".")[1], "base64url").toString(),
      );

      expect(payload.aud).toBe("account.docusign.com");
    });

    it("should use custom scopes", () => {
      const assertion = AuthUtils.createJwtAssertion({
        clientId: "test-client-id",
        userId: "test-user-id",
        privateKey: testPrivateKey,
        scopes: ["signature", "impersonation"],
      });

      const payload = JSON.parse(
        Buffer.from(assertion.split(".")[1], "base64url").toString(),
      );

      expect(payload.scope).toBe("signature impersonation");
    });

    it("should throw an error when clientId is missing", () => {
      expect(() =>
        // @ts-expect-error Testing invalid input
        AuthUtils.createJwtAssertion({
          userId: "test-user-id",
          privateKey: testPrivateKey,
        }),
      ).toThrow();
    });

    it("should throw an error when userId is missing", () => {
      expect(() =>
        // @ts-expect-error Testing invalid input
        AuthUtils.createJwtAssertion({
          clientId: "test-client-id",
          privateKey: testPrivateKey,
        }),
      ).toThrow();
    });

    it("should throw an error when privateKey is missing", () => {
      expect(() =>
        // @ts-expect-error Testing invalid input
        AuthUtils.createJwtAssertion({
          clientId: "test-client-id",
          userId: "test-user-id",
        }),
      ).toThrow();
    });

    it("should throw an error when privateKey is invalid", () => {
      expect(() =>
        AuthUtils.createJwtAssertion({
          clientId: "test-client-id",
          userId: "test-user-id",
          privateKey: "not-a-valid-private-key",
        }),
      ).toThrow();
    });

    it("should throw an error when oauthBasePath is invalid", () => {
      expect(() =>
        AuthUtils.createJwtAssertion({
          clientId: "test-client-id",
          userId: "test-user-id",
          privateKey: testPrivateKey,
          // @ts-expect-error Testing invalid input
          oauthBasePath: "invalid-domain.com",
        }),
      ).toThrow();
    });
  });
});
