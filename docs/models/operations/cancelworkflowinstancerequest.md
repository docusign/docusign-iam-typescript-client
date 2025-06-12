# CancelWorkflowInstanceRequest

## Example Usage

```typescript
import { CancelWorkflowInstanceRequest } from "@docusign/iam-sdk/models/operations";

let value: CancelWorkflowInstanceRequest = {
  accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  instanceId: "f13a0104-6e97-4dd2-8556-cc2eb1ed5cd3",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `accountId`                                 | *string*                                    | :heavy_check_mark:                          | The unique identifier of the account.       | ae232f1f-8efc-4b8c-bb08-626847fad8bb        |
| `workflowId`                                | *string*                                    | :heavy_check_mark:                          | The unique identifier of the workflow.      | ae232f1f-8efc-4b8c-bb08-626847fad8bb        |
| `instanceId`                                | *string*                                    | :heavy_check_mark:                          | Unique identifier for the workflow instance |                                             |