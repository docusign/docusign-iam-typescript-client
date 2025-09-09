# DeleteWorkspaceUploadRequestRequest

## Example Usage

```typescript
import { DeleteWorkspaceUploadRequestRequest } from "@docusign/iam-sdk/models/operations";

let value: DeleteWorkspaceUploadRequestRequest = {
  accountId: "19e2033f-3339-4513-8920-62d223b2f90f",
  workspaceId: "85bc6241-c6d7-44ec-87ff-9c961caac3cf",
  uploadRequestId: "eaa062c9-4ec2-4dca-aa86-ed67b69a95dc",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `accountId`                            | *string*                               | :heavy_check_mark:                     | The ID of the account                  |
| `workspaceId`                          | *string*                               | :heavy_check_mark:                     | The ID of the workspace                |
| `uploadRequestId`                      | *string*                               | :heavy_check_mark:                     | The ID of the upload request to delete |