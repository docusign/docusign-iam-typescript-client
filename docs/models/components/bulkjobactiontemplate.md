# BulkJobActionTemplate

## Example Usage

```typescript
import { BulkJobActionTemplate } from "@docusign/iam-sdk/models/components";

let value: BulkJobActionTemplate = {
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `constraints`                                                                          | [components.BulkJobConstraints](../../models/components/bulkjobconstraints.md)         | :heavy_minus_sign:                                                                     | Describes the limits of a bulk job, or an action associated with a bulk job            |                                                                                        |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | Upload document file to Azure Blob Storage                                             |
| `errorStatusCodes`                                                                     | [components.ErrorStatusCodes](../../models/components/errorstatuscodes.md)             | :heavy_minus_sign:                                                                     | Key value pairs of error response codes and explanations of those codes                |                                                                                        |
| `headers`                                                                              | [components.Headers](../../models/components/headers.md)                               | :heavy_minus_sign:                                                                     | Key value pairs of header names and example values                                     | {<br/>"x-ms-blob-type": "BlockBlob",<br/>"Content-Type": "application/pdf"<br/>}       |
| `method`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | HTTP method used for this template                                                     | PUT                                                                                    |
| `required`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether this action is required                                                        | true                                                                                   |
| `successStatusCode`                                                                    | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 201                                                                                    |
| `templateVariables`                                                                    | [components.TemplateVariables](../../models/components/templatevariables.md)           | :heavy_minus_sign:                                                                     | Key value pairs of variable names and descriptions, explaining how they are to be used |                                                                                        |