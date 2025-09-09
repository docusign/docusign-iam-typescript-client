# AddWorkspaceUserRequest

## Example Usage

```typescript
import { AddWorkspaceUserRequest } from "@docusign/iam-sdk/models/operations";

let value: AddWorkspaceUserRequest = {
  accountId: "ce041614-146a-4dbe-a79a-77dbe0391beb",
  workspaceId: "b405a2ae-508c-4cf4-9e75-3feab9031e77",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the account                                                                  |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the workspace                                                                |
| `workspaceUserForCreate`                                                               | [components.WorkspaceUserForCreate](../../models/components/workspaceuserforcreate.md) | :heavy_minus_sign:                                                                     | The user details                                                                       |