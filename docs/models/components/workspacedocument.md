# WorkspaceDocument

## Example Usage

```typescript
import { WorkspaceDocument } from "@docusign/iam-sdk/models/components";

let value: WorkspaceDocument = {
  documentId: "4608ec9c-c55e-4923-abb5-b11f261ea5a9",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `documentId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the document                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the document                                                                      |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who owns the document                                                      |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The size of the document in bytes                                                             |
| `createdDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the document was created                                                             |
| `lastUpdatedDate`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the document was last updated                                                        |
| `owner`                                                                                       | [components.WorkspaceDocumentOwner](../../models/components/workspacedocumentowner.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |