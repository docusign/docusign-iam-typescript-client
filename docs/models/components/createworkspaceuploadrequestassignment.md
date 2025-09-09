# CreateWorkspaceUploadRequestAssignment

## Example Usage

```typescript
import { CreateWorkspaceUploadRequestAssignment } from "@docusign/iam-sdk/models/components";

let value: CreateWorkspaceUploadRequestAssignment = {
  uploadRequestResponsibilityTypeId: "watcher",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `assigneeUserId`                                                                                                           | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The ID of the assigned user                                                                                                |
| `uploadRequestResponsibilityTypeId`                                                                                        | [components.WorkspaceUploadRequestResponsibilityType](../../models/components/workspaceuploadrequestresponsibilitytype.md) | :heavy_check_mark:                                                                                                         | Enum representing the responsibility type for a workspace upload request assignment                                        |
| `firstName`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The first name of the assignee                                                                                             |
| `lastName`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The last name of the assignee                                                                                              |
| `email`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The email of the assignee                                                                                                  |