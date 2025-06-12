import { z } from "zod";
import { createPrivateKey } from "node:crypto";

export const DocusignOAuthBasePathSchema = z.enum(
  ["account-d.docusign.com", "account.docusign.com"],
  {
    message:
      "OAuth base path must be either 'account-d.docusign.com' or 'account.docusign.com'",
  },
);
export type DocusignOAuthBasePath = z.infer<typeof DocusignOAuthBasePathSchema>;

/**
 * Schema for validating RSA private keys
 */
export const RsaPrivateKeySchema = z.string().refine(
  (key) => {
    try {
      const privateKey = createPrivateKey(key);
      return privateKey.asymmetricKeyType === "rsa";
    } catch (error) {
      return false;
    }
  },
  {
    message:
      "Invalid RSA private key. Please provide a valid PEM-encoded RSA private key.",
  },
);
