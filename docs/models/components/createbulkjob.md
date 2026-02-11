# CreateBulkJob

## Example Usage

```typescript
import { CreateBulkJob } from "@docusign/iam-sdk/models/components";

let value: CreateBulkJob = {
  agreementSetIds: [
    "-8c-dVtBzjSe7nh_zAf9L",
  ],
  expectedNumberOfDocs: 2,
  jobName: "Q4 2025 Contracts",
  language: "en-US",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `agreementSetIds`                                                                                   | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | Optional list of agreement set IDs (21-character NanoID format).                                    | [<br/>"-8c-dVtBzjSe7nh_zAf9L"<br/>]                                                                 |
| `expectedNumberOfDocs`                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | Number of docs this job will have. Will use provided document_requests size if there is a mismatch. | 2                                                                                                   |
| `jobName`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Name for the new job to be created. If empty, server will auto-create name for the job.             | Q4 2025 Contracts                                                                                   |
| `language`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Language for the user, such as en-US, en-GB, if not provided will default to en-US.                 | en-US                                                                                               |