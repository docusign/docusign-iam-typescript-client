# AgreementsResponse

A collection of agreements.

## Example Usage

```typescript
import { AgreementsResponse } from "@docusign/iam-sdk/models/components";
import { RFCDate } from "@docusign/iam-sdk/types";

let value: AgreementsResponse = {
  data: [
    {
      type: "Master Service Agreement",
      category: "BusinessServices",
      summary:
        "This Master Service Agreement between Alpha Corp and Beta Ltd. defines the terms for services provided by Alpha Corp, including project scope, payment terms, and dispute resolution.",
      provisions: {
        confidentialityObligationPeriod: "P30D",
        liabilityCapDuration: "P30D",
        renewalNoticePeriod: "P30D",
        renewalNoticeDate: new Date("2024-08-01T00:00:00+02:00"),
        autoRenewalTermLength: "P30D",
        renewalExtensionPeriod: "P30D",
        terminationPeriodForCause: "P6M",
        terminationPeriodForConvenience: "P6M",
        effectiveDate: new RFCDate("2025-01-01T00:00:00+02:00"),
        expirationDate: new RFCDate("2025-12-31T23:59:00+02:00"),
        executionDate: new RFCDate("2024-12-16T09:13:22+02:00"),
        termLength: "P30D",
      },
      languages: [
        "en-US",
      ],
      sourceName: "Docusign eSign",
      sourceId: "8ade6915-d04b-40d6-bb6f-9c6ba6aa1bb5",
      sourceAccountId: "faee2c10-cae6-4d90-ba66-6d6d117d92c5",
      metadata: {
        requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
        responseTimestamp: new Date("2024-10-17T14:30:00Z"),
        responseDurationMs: 150,
      },
    },
  ],
  responseMetadata: {
    pageLimit: 10,
    pageTokenNext: "abc123",
    requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
    responseTimestamp: new Date("2024-10-17T14:30:00Z"),
    responseDurationMs: 150,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.Agreement](../../models/components/agreement.md)[]             | :heavy_minus_sign:                                                         | A list of agreements                                                       |
| `responseMetadata`                                                         | [components.ResponseMetadata](../../models/components/responsemetadata.md) | :heavy_minus_sign:                                                         | Control information and metadata for the response.                         |