# AgreementsResponse

## Example Usage

```typescript
import { AgreementsResponse } from "@docusign/iam-sdk/models/components";

let value: AgreementsResponse = {
  links: {
    first: {
      href:
        "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
    },
    next: {
      href:
        "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
    },
    self: {
      href:
        "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
    },
  },
  data: [
    {
      links: {
        document: {
          href:
            "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
      },
      category: "BusinessServices",
      languages: [
        "en-US",
      ],
      metadata: {
        requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
        responseDurationMs: 150,
        responseTimestamp: new Date("2024-10-17T14:30:00Z"),
      },
      provisions: {
        confidentialityObligationPeriod: "P30D",
        liabilityCapDuration: "P30D",
        autoRenewalTermLength: "P1Y",
        renewalExtensionPeriod: "P1Y",
        renewalNoticeDate: "2025-01-22T14:30:00-08:00",
        renewalNoticePeriod: "P90D",
        terminationPeriodForCause: "P6M",
        terminationPeriodForConvenience: "P6M",
        effectiveDate: "2025-01-22T14:30:00-08:00",
        executionDate: "2025-01-22T14:30:00-08:00",
        expirationDate: "2025-01-22T14:30:00-08:00",
        termLength: "P30D",
      },
      sourceAccountId: "faee2c10-cae6-4d90-ba66-6d6d117d92c5",
      sourceId: "8ade6915-d04b-40d6-bb6f-9c6ba6aa1bb5",
      sourceName: "Docusign eSign",
      summary:
        "This Master Service Agreement between Alpha Corp and Beta Ltd. defines the terms for services provided by Alpha Corp, including project scope, payment terms, and dispute resolution.",
      type: "Master Service Agreement",
    },
  ],
  responseMetadata: {
    pageLimit: 10,
    requestId: "3f7c9e4b-851c-4f9b-89e7-123456789abc",
    responseDurationMs: 150,
    responseTimestamp: new Date("2024-10-17T14:30:00Z"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                              | [components.PageLinks](../../models/components/pagelinks.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                   | Hypermedia controls (HATEOAS) for navigating between pages in a paginated collection of results.<br/>Links for the current page, next page, and previous page, with optional first and last page links.<br/> |
| `data`                                                                                                                                                                                               | [components.Agreement](../../models/components/agreement.md)[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | A list of agreements                                                                                                                                                                                 |
| `responseMetadata`                                                                                                                                                                                   | [components.ResponseMetadata](../../models/components/responsemetadata.md)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                   | Control information and metadata for the response.                                                                                                                                                   |