# AddWorkspaceUploadRequestDocumentResponse

Response for adding a document to an upload request

## Example Usage

```typescript
import { AddWorkspaceUploadRequestDocumentResponse } from "@docusign/iam-sdk/models/components";

let value: AddWorkspaceUploadRequestDocumentResponse = {
  uploadRequestId: "29355f29-f871-42d8-880e-b52330d9bc88",
  documentId: "6b33d241-3545-4cd7-8472-2b96a00392d4",
  documentName: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `uploadRequestId`                     | *string*                              | :heavy_check_mark:                    | The ID of the upload request          |
| `documentId`                          | *string*                              | :heavy_check_mark:                    | The ID of the document that was added |
| `documentName`                        | *string*                              | :heavy_check_mark:                    | The name of the document              |