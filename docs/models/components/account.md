# Account

## Example Usage

```typescript
import { Account } from "@docusign/iam-sdk/models/components";

let value: Account = {
  accountId: "<id>",
  isDefault: false,
  accountName: "<value>",
  baseUri: "https://cute-restaurant.biz/",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `isDefault`                                                        | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `accountName`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `baseUri`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `organization`                                                     | [components.Organization](../../models/components/organization.md) | :heavy_minus_sign:                                                 | N/A                                                                |