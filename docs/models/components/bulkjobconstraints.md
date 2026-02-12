# BulkJobConstraints

Describes the limits of a bulk job, or an action associated with a bulk job

## Example Usage

```typescript
import { BulkJobConstraints } from "@docusign/iam-sdk/models/components";

let value: BulkJobConstraints = {
  allowedFormats: [
    "pdf",
    "docx",
    "txt",
  ],
  maxDocumentsPerJob: 10000,
  maxSizeMb: 100,
  timeoutSeconds: 300,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `allowedFormats`         | *string*[]               | :heavy_minus_sign:       | N/A                      | [<br/>"pdf",<br/>"docx",<br/>"txt"<br/>] |
| `maxDocumentsPerJob`     | *number*                 | :heavy_minus_sign:       | N/A                      | 10000                    |
| `maxSizeMb`              | *number*                 | :heavy_minus_sign:       | N/A                      | 100                      |
| `timeoutSeconds`         | *number*                 | :heavy_minus_sign:       | N/A                      | 300                      |