# CancelWorkflowInstanceRequest

## Example Usage

```typescript
import { CancelWorkflowInstanceRequest } from "@docusign/iam-sdk/models/operations";

let value: CancelWorkflowInstanceRequest = {
  accountId: "<id>",
  workflowId: "<id>",
  instanceId: "f13a0104-6e97-4dd2-8556-cc2eb1ed5cd3",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `accountId`                                 | *string*                                    | :heavy_check_mark:                          | The unique identifier of the account.       |
| `workflowId`                                | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `instanceId`                                | *string*                                    | :heavy_check_mark:                          | Unique identifier for the workflow instance |