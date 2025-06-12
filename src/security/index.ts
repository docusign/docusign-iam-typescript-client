import { createAuthorizationUrl } from "./authorization-url.js";
import { createJwtAssertion } from "./jwt-assertion.js";

/**
 * Utility class providing authentication-related functionality for DocuSign
 * API integration.
 */
export class AuthUtils {
  static createAuthorizationUrl = createAuthorizationUrl;
  static createJwtAssertion = createJwtAssertion;
}
