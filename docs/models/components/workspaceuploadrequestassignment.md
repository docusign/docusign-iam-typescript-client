# WorkspaceUploadRequestAssignment

## Example Usage

```typescript
import { WorkspaceUploadRequestAssignment } from "@docusign/iam-sdk/models/components";

let value: WorkspaceUploadRequestAssignment = {
  assigneeUserId: "d539d201-9a25-420b-a459-707993bddfaf",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `assigneeUserId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the assigned user                                                                                                |
| `uploadRequestResponsibilityTypeId`                                                                                        | [components.WorkspaceUploadRequestResponsibilityType](../../models/components/workspaceuploadrequestresponsibilitytype.md) | :heavy_minus_sign:                                                                                                         | Enum representing the responsibility type for a workspace upload request assignment                                        |