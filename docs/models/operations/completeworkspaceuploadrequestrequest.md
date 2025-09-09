# CompleteWorkspaceUploadRequestRequest

## Example Usage

```typescript
import { CompleteWorkspaceUploadRequestRequest } from "@docusign/iam-sdk/models/operations";

let value: CompleteWorkspaceUploadRequestRequest = {
  accountId: "6d69acc7-45d6-43a3-a266-b0f255c8845b",
  workspaceId: "3d93d648-4798-428b-8866-273a7121e622",
  uploadRequestId: "6c7347fe-8036-42e8-b335-b18485266421",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `accountId`                              | *string*                                 | :heavy_check_mark:                       | The ID of the account                    |
| `workspaceId`                            | *string*                                 | :heavy_check_mark:                       | The ID of the workspace                  |
| `uploadRequestId`                        | *string*                                 | :heavy_check_mark:                       | The ID of the upload request to complete |