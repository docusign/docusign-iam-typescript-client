# GetWorkspaceDocumentResponse

## Example Usage

```typescript
import { GetWorkspaceDocumentResponse } from "@docusign/iam-sdk/models/components";

let value: GetWorkspaceDocumentResponse = {
  documentId: "42d653ad-f312-4b7f-9abd-3fb0c72cb02d",
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the workspace                                                                       |
| `documentId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the document                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the document                                                                      |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the owner of the document                                                           |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The size of the document in bytes                                                             |
| `createdDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the document was created                                                             |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The document content type                                                                     |