# BulkJobEmbeddedItems

## Example Usage

```typescript
import { BulkJobEmbeddedItems } from "@docusign/iam-sdk/models/components";

let value: BulkJobEmbeddedItems = {
  actions: {
    uploadDocument:
      "https://docupstoragewestwu3dsto.blob.core.windows.net/1d4dbfd5-6911-47a7-93fa-f597975f7d2d/8c566d26-e7fb-4b7e-870c-1d0fb8df9084?sv=2023-01-03&st=2025-10-27T19%3A11%3A42Z&se=2025-10-28T03%3A16%3A42Z&sr=b&sp=cw&sig=st%2Fot4COaU9icCNYbEfm7RdKJhjxgfi4Oo0HSEZ7EMQ%3D",
  },
  agreementId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  id: "8c566d26-e7fb-4b7e-870c-1d0fb8df9084",
  sequence: 1,
  status: "NOT_STARTED",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actions`                                                                                     | [components.BulkJobItemActions](../../models/components/bulkjobitemactions.md)                | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `agreementId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Agreement ID associated with this document, if created                                        | 3fa85f64-5717-4562-b3fc-2c963f66afa6                                                          |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Error message if document processing failed                                                   |                                                                                               |
| `errorCode`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | Error code if document processing failed                                                      |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Id of the document                                                                            | 8c566d26-e7fb-4b7e-870c-1d0fb8df9084                                                          |
| `sequence`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Sequential order of the document                                                              | 1                                                                                             |
| `status`                                                                                      | [components.DocStatus](../../models/components/docstatus.md)                                  | :heavy_minus_sign:                                                                            | Document status. Last 3 are terminal statuses. Matches enum with similar name in the backend. | NOT_STARTED                                                                                   |