# BulkJobConstraints

Describes the limits of a bulk job, or an action associated with a bulk job

## Example Usage

```typescript
import { BulkJobConstraints } from "@docusign/iam-sdk/models/components";

let value: BulkJobConstraints = {
  maxSizeMb: 100,
  maxDocumentsPerJob: 10000,
  allowedFormats: [
    "pdf",
    "docx",
    "txt",
  ],
  timeoutSeconds: 300,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `maxSizeMb`              | *number*                 | :heavy_minus_sign:       | N/A                      | 100                      |
| `maxDocumentsPerJob`     | *number*                 | :heavy_minus_sign:       | N/A                      | 10000                    |
| `allowedFormats`         | *string*[]               | :heavy_minus_sign:       | N/A                      | [<br/>"pdf",<br/>"docx",<br/>"txt"<br/>] |
| `timeoutSeconds`         | *number*                 | :heavy_minus_sign:       | N/A                      | 300                      |