import { BeforeRequestContext, BeforeRequestHook } from "../types.js";
import { stringToBase64 } from "../../lib/base64.js";
import { GetTokenFromConfidentialAuthCodeSecurity } from "../../models/operations/gettokenfromconfidentialauthcode.js";

type TokenRequest = GetTokenFromConfidentialAuthCodeSecurity;

export class OAuthTokenRequestHook implements BeforeRequestHook {
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    switch (hookCtx.operationID) {
      case "GetTokenFromRefreshToken":
      case "GetTokenFromConfidentialAuthCode": {
        let sec = hookCtx.securitySource;
        if (typeof sec === "function") {
          sec = sec();
        }

        if (!sec) {
          throw new Error("security source is not defined");
        }

        const { clientId, secretKey }: TokenRequest = sec;

        if (clientId && secretKey) {
          const encoded = stringToBase64(
            [clientId || "", secretKey || ""].join(":"),
          );

          request.headers.set("Authorization", `Basic ${encoded}`);
        }

        break;
      }
    }

    return request;
  }
}
