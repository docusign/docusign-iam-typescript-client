# PatchAgreementRequest

## Example Usage

```typescript
import { PatchAgreementRequest } from "@docusign/iam-sdk/models/operations";

let value: PatchAgreementRequest = {
  agreement: {
    type: "Master Service Agreement",
    category: "BusinessServices",
    summary:
      "This Master Service Agreement between Alpha Corp and Beta Ltd. defines the terms for services provided by Alpha Corp, including project scope, payment terms, and dispute resolution.",
    provisions: {
      confidentialityObligationPeriod: "P30D",
      liabilityCapDuration: "P30D",
      renewalNoticePeriod: "P90D",
      renewalNoticeDate: "2025-01-22T14:30:00-08:00",
      autoRenewalTermLength: "P1Y",
      renewalExtensionPeriod: "P1Y",
      terminationPeriodForCause: "P6M",
      terminationPeriodForConvenience: "P6M",
      effectiveDate: "2025-01-22T14:30:00-08:00",
      expirationDate: "2025-01-22T14:30:00-08:00",
      executionDate: "2025-01-22T14:30:00-08:00",
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
    links: {
      document: {
        href:
          "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
      },
      agreementTypes: {
        href:
          "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
      },
    },
    actions: {
      changeType: {
        href:
          "/v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type",
        method: "PATCH",
        description:
          "Change the agreement type to a different configured type.",
      },
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `agreementId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `agreement`                                                        | [components.Agreement](../../models/components/agreement.md)       | :heavy_check_mark:                                                 | JSON payload containing the fields to be updated in the agreement. |