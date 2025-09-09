# GetWorkspaceDocumentRequest

## Example Usage

```typescript
import { GetWorkspaceDocumentRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkspaceDocumentRequest = {
  accountId: "79268688-caab-4610-ae24-ea53f6cb6e29",
  workspaceId: "2737d508-b664-4701-8af5-d7848a6cf0b9",
  documentId: "71df82a8-966f-4947-bd35-9f0162c8289d",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `accountId`             | *string*                | :heavy_check_mark:      | The ID of the account   |
| `workspaceId`           | *string*                | :heavy_check_mark:      | The ID of the workspace |
| `documentId`            | *string*                | :heavy_check_mark:      | The ID of the document  |