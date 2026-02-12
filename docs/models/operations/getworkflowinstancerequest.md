# GetWorkflowInstanceRequest

## Example Usage

```typescript
import { GetWorkflowInstanceRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkflowInstanceRequest = {
  instanceId: "08924441-47ca-4c61-a74b-d3cdea2cc5ba",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `accountId`                                 | *string*                                    | :heavy_check_mark:                          | The unique identifier of the account.       |
| `workflowId`                                | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `instanceId`                                | *string*                                    | :heavy_check_mark:                          | Unique identifier for the workflow instance |