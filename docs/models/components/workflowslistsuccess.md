# WorkflowsListSuccess

A list of workflows has been successfully returned.

## Example Usage

```typescript
import { WorkflowsListSuccess } from "@docusign/iam-sdk/models/components";

let value: WorkflowsListSuccess = {
  data: [
    {
      metadata: {
        requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
        responseTimestamp: new Date("2024-10-17T14:30:00Z"),
        responseDurationMs: 150,
      },
    },
  ],
  responseMetadata: {
    pageLimit: 10,
    pageTokenNext: "abc123",
    requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
    responseTimestamp: new Date("2024-10-17T14:30:00Z"),
    responseDurationMs: 150,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.Workflow](../../models/components/workflow.md)[]               | :heavy_minus_sign:                                                         | A list of workflows                                                        |
| `responseMetadata`                                                         | [components.ResponseMetadata](../../models/components/responsemetadata.md) | :heavy_minus_sign:                                                         | Control information and metadata for the response.                         |