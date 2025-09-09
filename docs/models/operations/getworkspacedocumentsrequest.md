# GetWorkspaceDocumentsRequest

## Example Usage

```typescript
import { GetWorkspaceDocumentsRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkspaceDocumentsRequest = {
  accountId: "660863c8-05fc-4675-82f3-d11cbdc26786",
  workspaceId: "cc12c678-84f9-4d17-bfcb-90a0bc76d266",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the account                                                            |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the workspace                                                          |
| `count`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Number of documents to return. Defaults to the maximum which is 100              |
| `startPosition`                                                                  | *number*                                                                         | :heavy_minus_sign:                                                               | Position of the first item in the total results. Defaults to 0                   |
| `nameFilter`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Filter documents where Name contains the filter. Defaults to null, to not filter |