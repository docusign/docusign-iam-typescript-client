# AgreementManager.Agreements

## Overview

### Available Operations

* [getAgreementsList](#getagreementslist) - Retrieve a list of agreements
* [patchAgreementByDocumentId](#patchagreementbydocumentid) - Update an agreement by locating it via document ID
* [getAgreementTypes](#getagreementtypes) - List configured agreement types for the account.
* [getAgreement](#getagreement) - Retrieve detailed information about a specific agreement
* [deleteAgreement](#deleteagreement) - Delete a specific agreement
* [patchAgreement](#patchagreement) - Update specific fields of an agreement
* [changeAgreementType](#changeagreementtype) - Change the type of an agreement

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

<!-- UsageSnippet language="typescript" operationID="GetAgreementsList" method="get" path="/v1/accounts/{accountId}/agreements" example="AgreementsCollection" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreementsList({
    limit: 10,
    ctoken: "abc123",
    dollarSearch: "/agreements?$search=Acme",
    dollarFilter: "parties/name_in_agreement eq 'HEALTHEON CORPORATION'",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreementsList } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreementsList.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreementsList(iamClient, {
    limit: 10,
    ctoken: "abc123",
    dollarSearch: "/agreements?$search=Acme",
    dollarFilter: "parties/name_in_agreement eq 'HEALTHEON CORPORATION'",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreementsList failed:", res.error);
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

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrDetails        | 400, 403, 404            | application/problem+json |
| errors.ErrDetails        | 500                      | application/problem+json |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

## patchAgreementByDocumentId

This operation updates a specific agreement by first locating it using its associated `document_id`. 
This is useful when the client knows the document storage identifier but not the agreement ID.

The operation accepts a `document_id` query parameter to uniquely identify the agreement, then applies the partial updates specified in the request body. 
The system will search for an agreement containing the specified document ID, and if found, apply the requested modifications. 
The operation returns a `204 No Content` response on success.

This endpoint provides an alternative way to update agreements when the agreement ID is not readily available, making it convenient for systems that primarily work with document references rather than agreement identifiers.

### Use Cases:
- **Updating agreements referenced by document storage ID**: When integration points provide document IDs but not agreement IDs, this endpoint allows direct updates without a prior lookup.
- **Batch updating via external document references**: Systems that track agreements through external document management systems can update agreements using their document storage identifiers.
- **Cross-system synchronization**: Update agreements based on document references from external systems (e.g., content management systems, document repositories) without maintaining agreement ID mappings.
- **Document-centric workflows**: In document-first business processes, update agreements using the document reference that users are familiar with.

### Key Features:
- **Document ID Based Lookup**: Locate agreements by their associated document storage identifier rather than requiring the agreement ID upfront.
- **Automatic Resolution**: The system automatically finds the agreement associated with the provided document ID.
- **Partial Updates**: Modify only the fields you need; other agreement data remains unchanged.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="PatchAgreementByDocumentId" method="patch" path="/v1/accounts/{accountId}/agreements" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.agreementManager.agreements.patchAgreementByDocumentId({
    agreement: {
      type: "Master Service Agreement",
      category: "BusinessServices",
      summary: "This Master Service Agreement between Alpha Corp and Beta Ltd. defines the terms for services provided by Alpha Corp, including project scope, payment terms, and dispute resolution.",
      provisions: null,
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
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
        agreementTypes: {
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
      },
      actions: null,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsPatchAgreementByDocumentId } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsPatchAgreementByDocumentId.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsPatchAgreementByDocumentId(iamClient, {
    agreement: {
      type: "Master Service Agreement",
      category: "BusinessServices",
      summary: "This Master Service Agreement between Alpha Corp and Beta Ltd. defines the terms for services provided by Alpha Corp, including project scope, payment terms, and dispute resolution.",
      provisions: null,
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
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
        agreementTypes: {
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
      },
      actions: null,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("agreementManagerAgreementsPatchAgreementByDocumentId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAgreementByDocumentIdRequest](../../models/operations/patchagreementbydocumentidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrDetails        | 400, 403, 404            | application/problem+json |
| errors.ErrDetails        | 500                      | application/problem+json |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

## getAgreementTypes

Returns the list of agreement type names configured for the specified account as a simple array of strings.

Use this endpoint to discover the available agreement types so that users can see the options to choose from. The returned type names can then be used with the change type endpoint (`PATCH /v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type`) to change the type of an existing agreement.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAgreementTypes" method="get" path="/v1/accounts/{accountId}/agreement-types" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreementTypes({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreementTypes } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreementTypes.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreementTypes(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreementTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAgreementTypesRequest](../../models/operations/getagreementtypesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string[]](../../models/.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrDetails        | 400, 403, 404            | application/problem+json |
| errors.ErrDetails        | 500                      | application/problem+json |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

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


### Example Usage: AddendumDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="AddendumDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: AmendmentDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="AmendmentDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: AppendixDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="AppendixDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: AttachmentDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="AttachmentDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: CertificateOfInsuranceDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="CertificateOfInsuranceDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ChangeOrderDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ChangeOrderDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ConfirmationOfRenewalDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ConfirmationOfRenewalDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ConsultingDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ConsultingDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ContractorDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ContractorDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: CreditCardDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="CreditCardDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: DistributionDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="DistributionDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: EmploymentSeparationDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="EmploymentSeparationDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: EngagementLetterDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="EngagementLetterDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: EventDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="EventDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ExhibitDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ExhibitDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: FeeDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="FeeDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: FranchiseDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="FranchiseDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: IntellectualPropertyAssignmentDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="IntellectualPropertyAssignmentDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: InvestmentAccountDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="InvestmentAccountDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: JointVentureDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="JointVentureDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: LeaseDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="LeaseDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: LetterOfIntentDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="LetterOfIntentDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: LicenseDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="LicenseDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: LoanDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="LoanDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: MarketingDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="MarketingDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: MemorandumOfUnderstandingDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="MemorandumOfUnderstandingDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: MsaDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="MsaDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: NdaDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="NdaDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: OfferLetterDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="OfferLetterDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: OrderFormDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="OrderFormDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: OtherDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="OtherDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: PartnershipDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="PartnershipDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: PrivacySecurityDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="PrivacySecurityDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ProposalDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ProposalDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: PublishingDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="PublishingDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: PurchaseDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="PurchaseDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: PurchaseOrderDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="PurchaseOrderDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: QuoteDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="QuoteDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ReleaseWaiverDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ReleaseWaiverDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: RetainerDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="RetainerDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: ServicesAgreementDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="ServicesAgreementDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: SlaDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="SlaDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: SowDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="SowDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: StockPurchaseDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="StockPurchaseDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: SubscriptionDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="SubscriptionDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: SupplementalDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="SupplementalDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: TerminationDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="TerminationDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: TermsAndConditionsDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="TermsAndConditionsDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
  }
}

run();
```
### Example Usage: WealthManagementDocumentTemplate

<!-- UsageSnippet language="typescript" operationID="GetAgreement" method="get" path="/v1/accounts/{accountId}/agreements/{agreementId}" example="WealthManagementDocumentTemplate" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.getAgreement({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsGetAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsGetAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsGetAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsGetAgreement failed:", res.error);
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

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrDetails        | 400, 403, 404            | application/problem+json |
| errors.ErrDetails        | 500                      | application/problem+json |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

## deleteAgreement

This operation safely deletes an agreement. This action conforms to GDPR and CCPA compliance requirements.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteAgreement" method="delete" path="/v1/accounts/{accountId}/agreements/{agreementId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.agreementManager.agreements.deleteAgreement({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsDeleteAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsDeleteAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsDeleteAgreement(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("agreementManagerAgreementsDeleteAgreement failed:", res.error);
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

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrDetails        | 400, 403, 404            | application/problem+json |
| errors.ErrDetails        | 500                      | application/problem+json |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

## patchAgreement

This operation updates one or more fields of a specific agreement identified by its `agreementId`. 
The operation supports partial updates, allowing clients to modify only the fields they need without affecting the rest of the agreement data.

The request body should contain a JSON payload with the fields to be updated. Only the fields provided in the request body will be modified; all other fields remain unchanged. The operation returns a `204 No Content` response on success.

This operation is essential for maintaining and evolving agreement data throughout the agreement's lifecycle, such as updating status, provisions, custom fields, or metadata based on business events or reviews.

### Use Cases:
- **Updating agreement status or review completion**: Mark agreements as reviewed, completed, or pending further action based on internal workflows.
- **Modifying provision details**: Update agreement terms, effective dates, expiration dates, or renewal conditions as circumstances change.
- **Managing custom attributes**: Add or modify user-defined fields and custom metadata to capture additional business context for the agreement.
- **Recording business events**: Update agreements to reflect changes such as amendments, renewals, or termination notices.
- **Synchronizing agreements across systems**: Update agreements in response to changes detected in external systems (e.g., ERP, CRM) to maintain data integrity.

### Key Features:
- **Partial Updates**: Modify only the fields you need; other agreement data remains intact.
- **Flexible Payload**: Accept JSON objects with any combination of updateable agreement fields, including provisions, metadata, and custom attributes.
- **Data Integrity**: Validates all input data to ensure compliance with agreement structure and data constraints.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="PatchAgreement" method="patch" path="/v1/accounts/{accountId}/agreements/{agreementId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.agreementManager.agreements.patchAgreement({
    agreement: {
      type: "Master Service Agreement",
      category: "BusinessServices",
      summary: "This Master Service Agreement between Alpha Corp and Beta Ltd. defines the terms for services provided by Alpha Corp, including project scope, payment terms, and dispute resolution.",
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
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
        agreementTypes: {
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
      },
      actions: {
        changeType: {
          href: "/v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type",
          method: "PATCH",
          description: "Change the agreement type to a different configured type.",
        },
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsPatchAgreement } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsPatchAgreement.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsPatchAgreement(iamClient, {
    agreement: {
      type: "Master Service Agreement",
      category: "BusinessServices",
      summary: "This Master Service Agreement between Alpha Corp and Beta Ltd. defines the terms for services provided by Alpha Corp, including project scope, payment terms, and dispute resolution.",
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
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
        agreementTypes: {
          href: "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
        },
      },
      actions: {
        changeType: {
          href: "/v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type",
          method: "PATCH",
          description: "Change the agreement type to a different configured type.",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("agreementManagerAgreementsPatchAgreement failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAgreementRequest](../../models/operations/patchagreementrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrDetails        | 400, 403, 404            | application/problem+json |
| errors.ErrDetails        | 500                      | application/problem+json |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

## changeAgreementType

Changes the type of an existing agreement to a different configured type.
The target type must exist in the account's agreement-types collection.
Upon successful change, the server recomputes the category based on the new type.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="ChangeAgreementType" method="patch" path="/v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.agreementManager.agreements.changeAgreementType({
    changeAgreementTypeRequest: {
      type: "MSA_DOCUMENT_DATA",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { agreementManagerAgreementsChangeAgreementType } from "@docusign/iam-sdk/funcs/agreementManagerAgreementsChangeAgreementType.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await agreementManagerAgreementsChangeAgreementType(iamClient, {
    changeAgreementTypeRequest: {
      type: "MSA_DOCUMENT_DATA",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agreementManagerAgreementsChangeAgreementType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChangeAgreementTypeRequest](../../models/operations/changeagreementtyperequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChangeAgreementTypeResponse](../../models/components/changeagreementtyperesponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrDetails        | 400, 403, 404, 422       | application/problem+json |
| errors.ErrDetails        | 500                      | application/problem+json |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |