# BulkJobActionTemplates

## Example Usage

```typescript
import { BulkJobActionTemplates } from "@docusign/iam-sdk/models/components";

let value: BulkJobActionTemplates = {
  uploadDocument: {
    method: "PUT",
    required: true,
    description: "Upload document file to Azure Blob Storage",
    headers: {},
    constraints: {
      maxSizeMb: 100,
      maxDocumentsPerJob: 10000,
      allowedFormats: [
        "pdf",
        "docx",
        "txt",
      ],
      timeoutSeconds: 300,
    },
    successStatusCode: 201,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uploadDocument`                                                                     | [components.BulkJobActionTemplate](../../models/components/bulkjobactiontemplate.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |