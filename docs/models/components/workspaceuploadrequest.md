# WorkspaceUploadRequest

## Example Usage

```typescript
import { WorkspaceUploadRequest } from "@docusign/iam-sdk/models/components";

let value: WorkspaceUploadRequest = {
  uploadRequestId: "813f6ba8-3250-44c6-bd7d-1fd81560ca4c",
  workspaceId: "70c44852-ef19-4cff-804a-a2f128139364",
  name: "<value>",
  uploadRequestOwner: {
    userId: "b2250a9f-5d21-4da1-b23d-5d0b88051483",
  },
  status: "overdue",
  documents: [],
  assignments: [],
  createdDate: new Date("2023-01-02T04:54:12.774Z"),
  updatedDate: new Date("2023-12-29T22:45:15.002Z"),
  canView: true,
  canEdit: false,
  canDelete: false,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `uploadRequestId`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the upload request                                                                                 |
| `workspaceId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the workspace                                                                                      |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the upload request                                                                               |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The description of the upload request                                                                        |
| `uploadRequestOwner`                                                                                         | [components.WorkspaceUploadRequestOwner](../../models/components/workspaceuploadrequestowner.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [components.WorkspaceUploadRequestStatus](../../models/components/workspaceuploadrequeststatus.md)           | :heavy_check_mark:                                                                                           | Enum representing the status of a workspace upload request                                                   |
| `documents`                                                                                                  | [components.WorkspaceUploadRequestDocument](../../models/components/workspaceuploadrequestdocument.md)[]     | :heavy_check_mark:                                                                                           | List of documents associated with the upload request                                                         |
| `assignments`                                                                                                | [components.WorkspaceUploadRequestAssignment](../../models/components/workspaceuploadrequestassignment.md)[] | :heavy_check_mark:                                                                                           | List of user assignments for the upload request                                                              |
| `createdDate`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The date the upload request was created                                                                      |
| `updatedDate`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The date the upload request was last updated                                                                 |
| `dueDate`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | The due date for the upload request                                                                          |
| `sentDate`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | The date the upload request was sent                                                                         |
| `completedDate`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | The date the upload request was completed                                                                    |
| `canView`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the current user can view the upload request                                                         |
| `canEdit`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the current user can edit the upload request                                                         |
| `canDelete`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the current user can delete the upload request                                                       |