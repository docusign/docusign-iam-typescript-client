# GetTokenFromRefreshTokenResponse

Successful response.

## Example Usage

```typescript
import { GetTokenFromRefreshTokenResponse } from "@docusign/iam-sdk/models/operations";

let value: GetTokenFromRefreshTokenResponse = {
  accessToken: "eyJ0eXAiQFsje43QVZ_gw",
  tokenType: "Bearer",
  refreshToken: "eyJ0eXAiQFsje43QVZ_gw",
  expiresIn: 28800,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The value of the access token. This value will be added to the Authorization header of all Docusign API calls. | eyJ0eXAiQFsje43QVZ_gw                                                                                          |
| `tokenType`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The type of token. For access tokens, the value of this will be Bearer.                                        | Bearer                                                                                                         |
| `refreshToken`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The refresh token.                                                                                             | eyJ0eXAiQFsje43QVZ_gw                                                                                          |
| `expiresIn`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The number of seconds until the access token expires.                                                          | 28800                                                                                                          |