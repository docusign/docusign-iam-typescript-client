# TriggerWorkflowRequest

## Example Usage

```typescript
import { TriggerWorkflowRequest } from "@docusign/iam-sdk/models/operations";

let value: TriggerWorkflowRequest = {
  accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the account.                                                                    | ae232f1f-8efc-4b8c-bb08-626847fad8bb                                                                     |
| `workflowId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the workflow.                                                                   | ae232f1f-8efc-4b8c-bb08-626847fad8bb                                                                     |
| `triggerWorkflow`                                                                                        | [components.TriggerWorkflow](../../models/components/triggerworkflow.md)                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | {<br/>"instance_name": "My Instance",<br/>"trigger_inputs": {<br/>"name": "Jon Doe",<br/>"email": "jdoe@example.com"<br/>}<br/>} |