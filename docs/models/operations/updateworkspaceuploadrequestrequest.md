# UpdateWorkspaceUploadRequestRequest

## Example Usage

```typescript
import { UpdateWorkspaceUploadRequestRequest } from "@docusign/iam-sdk/models/operations";

let value: UpdateWorkspaceUploadRequestRequest = {
  accountId: "c7445bac-c24e-44bf-8dd0-fa5292211a6e",
  workspaceId: "6cf9d969-026a-431b-ac90-f47dcca4cc8a",
  uploadRequestId: "b1fcb3a5-686a-473b-a8e2-062563c4e4e4",
  updateWorkspaceUploadRequestBody: {
    name: null,
    description: "mid tired creamy bourgeoisie hmph dead",
    status: "complete",
    dueDate: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the account                                                                                      |
| `workspaceId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the workspace                                                                                    |
| `uploadRequestId`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the upload request to update                                                                     |
| `updateWorkspaceUploadRequestBody`                                                                         | [components.UpdateWorkspaceUploadRequestBody](../../models/components/updateworkspaceuploadrequestbody.md) | :heavy_check_mark:                                                                                         | The upload request object with updated values                                                              |