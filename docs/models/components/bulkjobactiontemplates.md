# BulkJobActionTemplates

## Example Usage

```typescript
import { BulkJobActionTemplates } from "@docusign/iam-sdk/models/components";

let value: BulkJobActionTemplates = {
  uploadDocument: {
    constraints: {
      allowedFormats: [
        "pdf",
        "docx",
        "txt",
      ],
      maxDocumentsPerJob: 10000,
      maxSizeMb: 100,
      timeoutSeconds: 300,
    },
    description: "Upload document file to Azure Blob Storage",
    headers: {},
    method: "PUT",
    required: true,
    successStatusCode: 201,
  },
  uploadMetadata: {
    constraints: {
      allowedFormats: [
        "pdf",
        "docx",
        "txt",
      ],
      maxDocumentsPerJob: 10000,
      maxSizeMb: 100,
      timeoutSeconds: 300,
    },
    description: "Upload document file to Azure Blob Storage",
    headers: {},
    method: "PUT",
    required: true,
    successStatusCode: 201,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uploadDocument`                                                                     | [components.BulkJobActionTemplate](../../models/components/bulkjobactiontemplate.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `uploadMetadata`                                                                     | [components.BulkJobActionTemplate](../../models/components/bulkjobactiontemplate.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |