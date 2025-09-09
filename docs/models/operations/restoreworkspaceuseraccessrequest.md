# RestoreWorkspaceUserAccessRequest

## Example Usage

```typescript
import { RestoreWorkspaceUserAccessRequest } from "@docusign/iam-sdk/models/operations";

let value: RestoreWorkspaceUserAccessRequest = {
  accountId: "24bb2271-b669-426e-b8a0-8af0b5255b14",
  workspaceId: "8707a2bb-f906-45c9-8326-01317d375b60",
  userId: "af69e662-db97-43d8-9e26-f01521b6eabe",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `accountId`                                        | *string*                                           | :heavy_check_mark:                                 | The ID of the account                              |
| `workspaceId`                                      | *string*                                           | :heavy_check_mark:                                 | The ID of the workspace to restore access          |
| `userId`                                           | *string*                                           | :heavy_check_mark:                                 | The ID of the user to be restored to the workspace |