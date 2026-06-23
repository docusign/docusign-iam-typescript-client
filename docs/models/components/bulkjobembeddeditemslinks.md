# BulkJobEmbeddedItemsLinks

Hypermedia links related to this document

## Example Usage

```typescript
import { BulkJobEmbeddedItemsLinks } from "@docusign/iam-sdk/models/components";

let value: BulkJobEmbeddedItemsLinks = {
  document: {
    href:
      "https://s1.us.services.demo.docusign.net/document-public-dms/v1/accounts/{accountId}/documents/{documentId}",
  },
  agreement: {
    href: "/v1/accounts/{accountId}/agreements/{agreementId}",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `document`                                                                                           | [components.Document](../../models/components/document.md)                                           | :heavy_minus_sign:                                                                                   | Link to download the document                                                                        |
| `agreement`                                                                                          | [components.BulkJobEmbeddedItemsAgreement](../../models/components/bulkjobembeddeditemsagreement.md) | :heavy_minus_sign:                                                                                   | Link to the associated agreement                                                                     |