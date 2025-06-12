# AuthorizationCodeGrantResponse

## Example Usage

```typescript
import { AuthorizationCodeGrantResponse } from "@docusign/iam-sdk/models/components";

let value: AuthorizationCodeGrantResponse = {
  accessToken: "eyJ0eXAi.....QFsje43QVZ_gw",
  tokenType: "Bearer",
  refreshToken: "eyJ0eXAi.....QFsje43QVZ_gw",
  expiresIn: 28800,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The value of the access token. This value will be added to the Authorization header of all Docusign API calls. |                                                                                                                |
| `tokenType`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The type of token. For access tokens, the value of this will be Bearer.                                        |                                                                                                                |
| `refreshToken`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The refresh token.                                                                                             |                                                                                                                |
| `expiresIn`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The number of seconds until the access token expires.                                                          | 28800                                                                                                          |