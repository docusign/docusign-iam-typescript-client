# DeleteWorkspaceDocumentRequest

## Example Usage

```typescript
import { DeleteWorkspaceDocumentRequest } from "@docusign/iam-sdk/models/operations";

let value: DeleteWorkspaceDocumentRequest = {
  accountId: "14ac357f-51aa-4684-88f2-7e32537ef255",
  workspaceId: "8f38623a-b6e5-4ff6-8b30-854808b6a494",
  documentId: "4e90427f-bf37-40db-9fee-038c745f021c",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `accountId`             | *string*                | :heavy_check_mark:      | The ID of the account   |
| `workspaceId`           | *string*                | :heavy_check_mark:      | The ID of the workspace |
| `documentId`            | *string*                | :heavy_check_mark:      | The ID of the document  |