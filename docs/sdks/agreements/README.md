# Agreements
(*navigator.agreements*)

## Overview

### Available Operations

* [getAgreementsList](#getagreementslist) - Retrieve a list of agreements
* [getAgreement](#getagreement) - Retrieve detailed information about a specific agreement
* [deleteAgreement](#deleteagreement) - Delete a specific agreement
* [createAgreementSummary](#createagreementsummary) - Create an AI-generated summary of an agreement document

## getAgreementsList

This operation retrieves a list of all agreements available in the system. It provides a high-level overview of each agreement, including its unique identifier (`id`), title, type, status, and involved parties. The list also includes important metadata, such as the agreement's creation and modification timestamps, and information on the agreement's source system (e.g., eSign, CLM).

Each agreement entry includes essential details that allow users to quickly assess the agreements and determine which ones are relevant for their needs. For example, the agreement's status can help users understand whether an agreement is still active, pending, or completed.

The response also includes provisions that outline the key legal, financial, and lifecycle conditions, along with custom user-defined fields, providing a comprehensive understanding of each agreement.

### Use Cases:
- **Retrieving a list of agreements for integration into external systems**: Export or sync agreement data into other platforms (e.g., CRM, ERP systems) to align business processes across different tools.
- **Providing data for RAG (Retrieval-Augmented Generation) applications or Copilots**: The list of agreements can be a valuable data source for AI/LLM-based applications that answer user queries about agreements. 
  It allows Copilots to understand what agreements exist and offer insights based on their details.
- **Filtering agreements by type or status**: Determine which agreements are active, pending, or completed, and gather a summary of key provisions across multiple agreements.
- **Auditing or reporting**: Generate a report on agreements based on type, status, or date created, helping with compliance tracking and internal reviews.
- **Metadata tracking**: Track when agreements were created, modified, and by whom, ensuring proper governance and version control.

### Key Features:
- **Comprehensive Agreement Overview**: Provides high-level visibility into all agreements, with essential details for each one, including status, type, and involved parties.
- **Metadata and Provisions**: Returns important metadata and provisions (legal, financial, and custom) for each agreement, helping users understand their obligations and contract terms.
- **Source System Information**: Captures details about where the agreement originated (e.g., eSign, CLM), making it easier to integrate and track agreements across different business systems.
- **Data for AI Applications**: The operation is designed to support LLM-powered apps, making it ideal for use in RAG-based applications and Copilots that query agreements for decision-making or information purposes.


### Example Usage

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.navigator.agreements.getAgreementsList({
    accountId: "00000000-0000-0000-0000-000000000000",
    limit: 10,
    ctoken: "abc123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { navigatorAgreementsGetAgreementsList } from "@docusign/iam-sdk/funcs/navigatorAgreementsGetAgreementsList.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await navigatorAgreementsGetAgreementsList(iamClient, {
    accountId: "00000000-0000-0000-0000-000000000000",
    limit: 10,
    ctoken: "abc123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("navigatorAgreementsGetAgreementsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAgreementsListRequest](../../models/operations/getagreementslistrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AgreementsResponse](../../models/components/agreementsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getAgreement

This operation retrieves detailed information about a specific agreement, identified by its unique `id`. The response provides a comprehensive view of the agreement, including its title, type, status, summary, and the full list of involved parties.

In addition to general details, the operation returns provisions that define the agreement's legal, financial, lifecycle, and custom conditions. It also provides key metadata, such as creation and modification timestamps, related agreements, and user-defined or custom attributes, which help represent the structure and context of the agreement.

The operation is essential for retrieving the full context of an agreement, enabling users to understand the contract's scope, key provisions, and the legal or financial obligations that have been agreed upon.

### Use Cases:
- **Integrating agreement data into external systems**: Sync detailed agreement information, such as legal and financial provisions, into external systems like ERP, CRM, or contract management tools to streamline workflows.
- **Providing detailed data for RAG (Retrieval-Augmented Generation) applications or Copilots**: Retrieve detailed agreement data for use in LLM-based applications that answer specific user queries about their agreements, such as the status of a contract, its provisions, or involved parties.
- **Retrieving the complete details of a specific agreement**: Use the full details of the agreement, including legal and financial provisions, for auditing, compliance, or review purposes.
- **Accessing agreement provisions for verification**: Verify compliance with specific legal or financial terms of the agreement, ensuring that all parties are following the agreed-upon conditions.
- **Tracking agreement changes and history**: Fetch metadata and related agreements to understand the evolution of an agreement, including modifications, associated agreements, and additional context provided by custom fields.
- **Reviewing user-defined or custom attributes**: Examine custom fields or attributes to get more context about the agreement, particularly where the business has defined custom provisions or attributes.

### Key Features:
- **Detailed Agreement Overview**: Provides a comprehensive view of a specific agreement, including its title, type, status, summary, and more.
- **Provisions for Legal, Financial, and Lifecycle Conditions**: Includes the full set of provisions that define the terms and conditions of the agreement, making it ideal for compliance and auditing purposes.
- **Metadata and History**: Tracks the agreement’s history through metadata such as creation and modification dates and user-defined fields.
- **Data Source for AI Applications**: Enables LLM-based applications to access granular agreement data, providing AI/ML-based solutions (such as Copilots) with the necessary context to answer detailed queries about an agreement.
- **Involved Parties and Related Agreements**: Lists all parties involved and related agreements, allowing users to see all associated legal documents and relationships between agreements.   


### Example Usage

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.navigator.agreements.getAgreement({
    accountId: "00000000-0000-0000-0000-000000000000",
    agreementId: "00000000-0000-0000-0000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { navigatorAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/navigatorAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await navigatorAgreementsGetAgreement(iamClient, {
    accountId: "00000000-0000-0000-0000-000000000000",
    agreementId: "00000000-0000-0000-0000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("navigatorAgreementsGetAgreement failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAgreementRequest](../../models/operations/getagreementrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Agreement](../../models/components/agreement.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteAgreement

This operation safely deletes an agreement. This action conforms to GDPR and CCPA compliance requirements.


### Example Usage

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.navigator.agreements.deleteAgreement({
    accountId: "00000000-0000-0000-0000-000000000000",
    agreementId: "00000000-0000-0000-0000-000000000000",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { navigatorAgreementsDeleteAgreement } from "@docusign/iam-sdk/funcs/navigatorAgreementsDeleteAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await navigatorAgreementsDeleteAgreement(iamClient, {
    accountId: "00000000-0000-0000-0000-000000000000",
    agreementId: "00000000-0000-0000-0000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("navigatorAgreementsDeleteAgreement failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAgreementRequest](../../models/operations/deleteagreementrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createAgreementSummary

This operation request an AI-generated summary of the specified agreement document. 
The summary is intended to provide a concise overview of the original agreement’s content 
and key points; however, it may not capture all details or legal nuances. 

**Important**: By invoking this operation, you acknowledge and accept the 
[Docusign AI Terms and Conditions](https://www.docusign.com/legal/terms-and-conditions/ai-attachment-docusign-services). 
Please refer to the original agreement for any legally binding information.


### Example Usage

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.navigator.agreements.createAgreementSummary({
    accountId: "00000000-0000-0000-0000-000000000000",
    agreementId: "00000000-0000-0000-0000-000000000000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { navigatorAgreementsCreateAgreementSummary } from "@docusign/iam-sdk/funcs/navigatorAgreementsCreateAgreementSummary.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await navigatorAgreementsCreateAgreementSummary(iamClient, {
    accountId: "00000000-0000-0000-0000-000000000000",
    agreementId: "00000000-0000-0000-0000-000000000000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("navigatorAgreementsCreateAgreementSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAgreementSummaryRequest](../../models/operations/createagreementsummaryrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AgreementSummary](../../models/components/agreementsummary.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |