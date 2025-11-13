# UpdateWorkspaceRequest

## Example Usage

```typescript
import { UpdateWorkspaceRequest } from "@docusign/iam-sdk/models/operations";

let value: UpdateWorkspaceRequest = {
  accountId: "a6134c26-d088-4d31-b23f-5eef1d21ac9f",
  workspaceId: "6c5768fb-641c-43b6-ab77-0d1b055eca7a",
  updateWorkspaceBody: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the account                                                            |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the workspace                                                          |
| `updateWorkspaceBody`                                                            | [components.UpdateWorkspaceBody](../../models/components/updateworkspacebody.md) | :heavy_check_mark:                                                               | N/A                                                                              |