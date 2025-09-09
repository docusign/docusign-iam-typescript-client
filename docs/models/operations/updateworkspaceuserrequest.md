# UpdateWorkspaceUserRequest

## Example Usage

```typescript
import { UpdateWorkspaceUserRequest } from "@docusign/iam-sdk/models/operations";

let value: UpdateWorkspaceUserRequest = {
  accountId: "1a092a9c-6b0a-459a-91d4-bbb601b78a07",
  workspaceId: "59ced2ea-7ec2-4b65-8a1f-b606dcda811f",
  userId: "e163751e-fd76-4e55-b3cf-7c1327174c9c",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the account                                                                  |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the workspace                                                                |
| `userId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the user to update                                                           |
| `workspaceUserForUpdate`                                                               | [components.WorkspaceUserForUpdate](../../models/components/workspaceuserforupdate.md) | :heavy_minus_sign:                                                                     | The user details to update to including the RoleId                                     |