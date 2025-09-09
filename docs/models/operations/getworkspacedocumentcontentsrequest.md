# GetWorkspaceDocumentContentsRequest

## Example Usage

```typescript
import { GetWorkspaceDocumentContentsRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkspaceDocumentContentsRequest = {
  accountId: "7bae48fd-7673-4109-9cd0-ecb46782d38e",
  workspaceId: "a5a7d432-70dd-48bd-a3ed-5d03b871f494",
  documentId: "2907f017-739b-4386-94ee-3c82db69c3ea",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `accountId`             | *string*                | :heavy_check_mark:      | The ID of the account   |
| `workspaceId`           | *string*                | :heavy_check_mark:      | The ID of the workspace |
| `documentId`            | *string*                | :heavy_check_mark:      | The ID of the document  |