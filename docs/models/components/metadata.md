# Metadata

Additional metadata related to this workflow instance

## Example Usage

```typescript
import { Metadata } from "@docusign/iam-sdk/models/components";

let value: Metadata = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `workflowCreatedBy`                                                   | *string*                                                              | :heavy_minus_sign:                                                    | Identifier of the user who originally created the workflow definition |
| `workflowVersion`                                                     | *string*                                                              | :heavy_minus_sign:                                                    | Version string of the deployed workflow                               |
| `workflowMetadataId`                                                  | *string*                                                              | :heavy_minus_sign:                                                    | Identifier for workflow definition metadata in the system             |