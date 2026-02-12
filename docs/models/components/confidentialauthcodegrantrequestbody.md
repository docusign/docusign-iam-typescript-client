# ConfidentialAuthCodeGrantRequestBody

The request body for the confidential authorization code grant type.

## Example Usage

```typescript
import { ConfidentialAuthCodeGrantRequestBody } from "@docusign/iam-sdk/models/components";

let value: ConfidentialAuthCodeGrantRequestBody = {
  code: "eyJ0eXAi.....QFsje43QVZ_gw",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `flow`                                                                                                                               | *"confidential"*                                                                                                                     | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `grantType`                                                                                                                          | [components.ConfidentialAuthCodeGrantRequestBodyGrantType](../../models/components/confidentialauthcodegrantrequestbodygranttype.md) | :heavy_minus_sign:                                                                                                                   | The grant type. This value must be set to "authorization_code".                                                                      |
| `code`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The authorization code supplied to the callback.                                                                                     |