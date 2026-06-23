# CreateBulkJob

## Example Usage

```typescript
import { CreateBulkJob } from "@docusign/iam-sdk/models/components";

let value: CreateBulkJob = {
  jobName: "Q4 2025 Contracts",
  expectedNumberOfDocs: 2,
  language: "en-US",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `jobName`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Name for the new job to be created. If empty, server will auto-create name for the job.             | Q4 2025 Contracts                                                                                   |
| `expectedNumberOfDocs`                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | Number of docs this job will have. Will use provided document_requests size if there is a mismatch. | 2                                                                                                   |
| `language`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Language for the user, such as en-US, en-GB, if not provided will default to en-US.                 | en-US                                                                                               |