# UpdateWorkspaceBrandResponse

The brand details set for a workspace

## Example Usage

```typescript
import { UpdateWorkspaceBrandResponse } from "@docusign/iam-sdk/models/components";

let value: UpdateWorkspaceBrandResponse = {
  colors: [
    {},
  ],
  brandLanguages: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `brandId`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `brandName`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `brandCompany`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `colors`                                                         | [components.BrandColor](../../models/components/brandcolor.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `logos`                                                          | [components.BrandLogos](../../models/components/brandlogos.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `brandLanguages`                                                 | *string*[]                                                       | :heavy_check_mark:                                               | N/A                                                              |
| `defaultBrandLanguage`                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `isSendingDefault`                                               | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `isSigningDefault`                                               | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `primaryLogoId`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `secondaryLogoId`                                                | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `emailLogoId`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |