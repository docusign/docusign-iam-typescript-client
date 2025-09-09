# GetWorkspaceUploadRequestRequest

## Example Usage

```typescript
import { GetWorkspaceUploadRequestRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkspaceUploadRequestRequest = {
  accountId: "623bfa5b-292c-4105-84c6-82adc0ed69b1",
  workspaceId: "2324bb31-7659-4815-804c-522e2d68f842",
  uploadRequestId: "360e691c-7f28-40e8-b936-325d54da4db9",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `accountId`                  | *string*                     | :heavy_check_mark:           | The ID of the account        |
| `workspaceId`                | *string*                     | :heavy_check_mark:           | The ID of the workspace      |
| `uploadRequestId`            | *string*                     | :heavy_check_mark:           | The ID of the upload request |