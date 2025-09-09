# CreateWorkspaceUploadRequestRequest

## Example Usage

```typescript
import { CreateWorkspaceUploadRequestRequest } from "@docusign/iam-sdk/models/operations";

let value: CreateWorkspaceUploadRequestRequest = {
  accountId: "5e0bbd72-477e-4ade-8a57-ed331ed36f77",
  workspaceId: "65edddd3-fe2d-418b-9d92-4d72d4fe51d7",
  createWorkspaceUploadRequestBody: {
    name: null,
    description:
      "er heavenly phew chairperson gee sans randomize thoroughly for",
    dueDate: new Date("2023-10-09T00:51:49.699Z"),
    assignments: [
      {
        uploadRequestResponsibilityTypeId: "assignee",
      },
    ],
    status: "in_progress",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the account                                                                                      |
| `workspaceId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the workspace                                                                                    |
| `createWorkspaceUploadRequestBody`                                                                         | [components.CreateWorkspaceUploadRequestBody](../../models/components/createworkspaceuploadrequestbody.md) | :heavy_check_mark:                                                                                         | The upload request details including name, description, assignments, and status                            |