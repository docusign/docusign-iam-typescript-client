# ResumeNewWorkflowInstancesSuccess

Indicates that the ability to create new workflow instances from this workflow has been resumed.
Existing workflow instances will be unaffected.


## Example Usage

```typescript
import { ResumeNewWorkflowInstancesSuccess } from "@docusign/iam-sdk/models/components";

let value: ResumeNewWorkflowInstancesSuccess = {};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                             | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | Represents the new state of a workflow's mechanism to permit new workflow instances from being created.<br/>Valid values include:<br/>  - active<br/>  - paused<br/> |