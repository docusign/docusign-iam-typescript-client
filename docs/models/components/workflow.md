# Workflow

## Example Usage

```typescript
import { Workflow } from "@docusign/iam-sdk/models/components";

let value: Workflow = {
  metadata: {
    requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
    responseTimestamp: new Date("2024-10-17T14:30:00Z"),
    responseDurationMs: 150,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | A user-provided name for this workflow                                     |
| `accountId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `status`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Indicates the readiness and deployment status of a workflow                |
| `metadata`                                                                 | [components.ResourceMetadata](../../models/components/resourcemetadata.md) | :heavy_minus_sign:                                                         | N/A                                                                        |