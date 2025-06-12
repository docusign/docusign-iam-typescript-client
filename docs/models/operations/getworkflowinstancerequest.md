# GetWorkflowInstanceRequest

## Example Usage

```typescript
import { GetWorkflowInstanceRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkflowInstanceRequest = {
  accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  instanceId: "08924441-47ca-4c61-a74b-d3cdea2cc5ba",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `accountId`                                 | *string*                                    | :heavy_check_mark:                          | The unique identifier of the account.       | ae232f1f-8efc-4b8c-bb08-626847fad8bb        |
| `workflowId`                                | *string*                                    | :heavy_check_mark:                          | The unique identifier of the workflow.      | ae232f1f-8efc-4b8c-bb08-626847fad8bb        |
| `instanceId`                                | *string*                                    | :heavy_check_mark:                          | Unique identifier for the workflow instance |                                             |