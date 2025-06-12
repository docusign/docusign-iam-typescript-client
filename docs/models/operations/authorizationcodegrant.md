# AuthorizationCodeGrant

This grant optionally uses Proof Key for Code Exchange (PKCE) to authenticate securely without requiring a client secret.

## Example Usage

```typescript
import { AuthorizationCodeGrant } from "@docusign/iam-sdk/models/operations";

let value: AuthorizationCodeGrant = {
  refreshToken: "<value>",
  clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `grantType`                                                                                                  | [operations.GetTokenFromRefreshTokenGrantType](../../models/operations/gettokenfromrefreshtokengranttype.md) | :heavy_minus_sign:                                                                                           | The grant type. This value must be set to "refresh_token".                                                   |                                                                                                              |
| `refreshToken`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The refresh token supplied to the callback.                                                                  |                                                                                                              |
| `clientId`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The client ID.                                                                                               | 2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79                                                                         |