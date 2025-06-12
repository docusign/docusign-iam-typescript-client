# GetWorkflowInstancesListRequest

## Example Usage

```typescript
import { GetWorkflowInstancesListRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkflowInstancesListRequest = {
  accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `accountId`                            | *string*                               | :heavy_check_mark:                     | The unique identifier of the account.  | ae232f1f-8efc-4b8c-bb08-626847fad8bb   |
| `workflowId`                           | *string*                               | :heavy_check_mark:                     | The unique identifier of the workflow. | ae232f1f-8efc-4b8c-bb08-626847fad8bb   |