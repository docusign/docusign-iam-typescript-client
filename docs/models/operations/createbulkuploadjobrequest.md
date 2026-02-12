# CreateBulkUploadJobRequest

## Example Usage

```typescript
import { CreateBulkUploadJobRequest } from "@docusign/iam-sdk/models/operations";

let value: CreateBulkUploadJobRequest = {
  createBulkJob: {
    agreementSetIds: [
      "-8c-dVtBzjSe7nh_zAf9L",
    ],
    expectedNumberOfDocs: 2,
    jobName: "Q4 2025 Contracts",
    language: "en-US",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `createBulkJob`                                                      | [components.CreateBulkJob](../../models/components/createbulkjob.md) | :heavy_check_mark:                                                   | N/A                                                                  |