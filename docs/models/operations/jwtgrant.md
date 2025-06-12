# JWTGrant

JSON Web Token (JWT) Grant is an OAuth 2.0 flow that is used to grant an access token to service integrations

## Example Usage

```typescript
import { JWTGrant } from "@docusign/iam-sdk/models/operations";

let value: JWTGrant = {
  assertion: "YOUR_JSON_WEB_TOKEN",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `grantType`                                                                                          | [operations.GetTokenFromJWTGrantGrantType](../../models/operations/gettokenfromjwtgrantgranttype.md) | :heavy_minus_sign:                                                                                   | The grant type.                                                                                      | urn:ietf:params:oauth:grant-type:jwt-bearer                                                          |
| `assertion`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Your JWT                                                                                             | YOUR_JSON_WEB_TOKEN                                                                                  |