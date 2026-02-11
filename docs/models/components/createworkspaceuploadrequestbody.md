# CreateWorkspaceUploadRequestBody

## Example Usage

```typescript
import { CreateWorkspaceUploadRequestBody } from "@docusign/iam-sdk/models/components";

let value: CreateWorkspaceUploadRequestBody = {
  name: "<value>",
  description: "husband from than",
  dueDate: new Date("2024-09-11T01:57:32.078Z"),
  assignments: [],
  status: "complete",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The name of the upload request                                                                                           |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The description of the upload request                                                                                    |
| `dueDate`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | The due date for the upload request                                                                                      |
| `assignments`                                                                                                            | [components.CreateWorkspaceUploadRequestAssignment](../../models/components/createworkspaceuploadrequestassignment.md)[] | :heavy_check_mark:                                                                                                       | List of user assignments for the upload request                                                                          |
| `status`                                                                                                                 | [components.WorkspaceUploadRequestStatus](../../models/components/workspaceuploadrequeststatus.md)                       | :heavy_check_mark:                                                                                                       | Enum representing the status of a workspace upload request                                                               |