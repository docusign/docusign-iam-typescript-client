# RevokeWorkspaceUserAccessRequest

## Example Usage

```typescript
import { RevokeWorkspaceUserAccessRequest } from "@docusign/iam-sdk/models/operations";

let value: RevokeWorkspaceUserAccessRequest = {
  accountId: "fa75bc1e-0a6a-45f0-bc95-683c6b51e146",
  workspaceId: "83567d42-c48e-431d-b433-09cadff94c25",
  userId: "1affc669-3c7b-478f-a739-c889c976e1f1",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the account                                                                          |
| `workspaceId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the workspace to revoke access from                                                  |
| `userId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the user to be revoked from the workspace                                            |
| `revokeWorkspaceUserDetails`                                                                   | [components.RevokeWorkspaceUserDetails](../../models/components/revokeworkspaceuserdetails.md) | :heavy_minus_sign:                                                                             | Optional details. Allows scheduling the revocation for the future                              |