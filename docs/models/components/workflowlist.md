# WorkflowList

A list of workflows

## Example Usage

```typescript
import { WorkflowList } from "@docusign/iam-sdk/models/components";

let value: WorkflowList = {
  workflows: [
    {
      metadata: {
        requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
        responseTimestamp: new Date("2024-10-17T14:30:00Z"),
        responseDurationMs: 150,
      },
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workflows`                                                  | [components.Workflow](../../models/components/workflow.md)[] | :heavy_minus_sign:                                           | N/A                                                          |