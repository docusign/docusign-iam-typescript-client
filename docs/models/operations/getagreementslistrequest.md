# GetAgreementsListRequest

## Example Usage

```typescript
import { GetAgreementsListRequest } from "@docusign/iam-sdk/models/operations";

let value: GetAgreementsListRequest = {
  limit: 10,
  ctoken: "abc123",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | The maximum number of items that can be returned in a single page. | 10                                                                 |
| `ctoken`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | An opaque token that helps retrieve the a page of data.            | abc123                                                             |