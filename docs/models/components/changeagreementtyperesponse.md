# ChangeAgreementTypeResponse

The updated agreement after a type change.

## Example Usage

```typescript
import { ChangeAgreementTypeResponse } from "@docusign/iam-sdk/models/components";

let value: ChangeAgreementTypeResponse = {
  metadata: {
    requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
    responseTimestamp: new Date("2024-10-17T14:30:00Z"),
    responseDurationMs: 150,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Unique identifier of the agreement.                                                                        |
| `title`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Title of the agreement.                                                                                    |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The updated agreement type.                                                                                |
| `category`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Server-recomputed category based on new type.                                                              |
| `status`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Current status of the agreement.                                                                           |
| `metadata`                                                                                                 | [components.ResourceMetadata](../../models/components/resourcemetadata.md)                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `links`                                                                                                    | [components.ChangeAgreementTypeResponseLinks](../../models/components/changeagreementtyperesponselinks.md) | :heavy_minus_sign:                                                                                         | Hypermedia links for the agreement.                                                                        |
| `actions`                                                                                                  | [components.Actions](../../models/components/actions.md)                                                   | :heavy_minus_sign:                                                                                         | Available actions on the agreement.                                                                        |