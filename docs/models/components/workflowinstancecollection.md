# WorkflowInstanceCollection

## Example Usage

```typescript
import { WorkflowInstanceCollection } from "@docusign/iam-sdk/models/components";

let value: WorkflowInstanceCollection = {
  data: [
    {
      triggerInputs: {
        "key": "John Doe",
      },
    },
  ],
  responseMetadata: {
    pageLimit: 10,
    requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
    responseDurationMs: 150,
    responseTimestamp: new Date("2024-10-17T14:30:00Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.WorkflowInstance](../../models/components/workflowinstance.md)[] | :heavy_minus_sign:                                                           | Array of workflow instances                                                  |
| `responseMetadata`                                                           | [components.ResponseMetadata](../../models/components/responsemetadata.md)   | :heavy_minus_sign:                                                           | Control information and metadata for the response.                           |