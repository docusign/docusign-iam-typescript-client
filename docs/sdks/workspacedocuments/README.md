# Workspaces.WorkspaceDocuments

## Overview

### Available Operations

* [getWorkspaceDocuments](#getworkspacedocuments) - Get documents in the workspace accessible to the calling user
* [addWorkspaceDocument](#addworkspacedocument) - Add a document to a workspace via file contents upload
* [getWorkspaceDocument](#getworkspacedocument) - Get information about the document
* [deleteWorkspaceDocument](#deleteworkspacedocument) - Deletes a document in the workspace
* [getWorkspaceDocumentContents](#getworkspacedocumentcontents) - Get the file contents of the document

## getWorkspaceDocuments

This operation retrieves the documents in the workspace that are accessible to the calling user. Documents may be added directly or automatically through tasks such as envelopes. Documents may be used to create envelopes.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceDocuments" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/documents" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceDocuments.getWorkspaceDocuments({
    accountId: "61364114-072d-477f-a9fc-f9af7aea7896",
    workspaceId: "d44e8655-55a3-498e-bfc3-e23027c5c36a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceDocumentsGetWorkspaceDocuments } from "@docusign/iam-sdk/funcs/workspacesWorkspaceDocumentsGetWorkspaceDocuments.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceDocumentsGetWorkspaceDocuments(iamClient, {
    accountId: "61364114-072d-477f-a9fc-f9af7aea7896",
    workspaceId: "d44e8655-55a3-498e-bfc3-e23027c5c36a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceDocumentsGetWorkspaceDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceDocumentsRequest](../../models/operations/getworkspacedocumentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceDocumentsResponse](../../models/components/getworkspacedocumentsresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## addWorkspaceDocument

This operation adds a document to a workspace via file contents upload. The file is passed in the request body as a multipart/form-data file. The file name is used as the document name.

Once added, it may be used to create an envelope associated with the workspace.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addWorkspaceDocument" method="post" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/documents" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceDocuments.addWorkspaceDocument({
    accountId: "5eddb8e1-d00e-47c4-9ed6-3b1c8915ae0d",
    workspaceId: "7f9e0991-b6d1-4de8-bfa5-7724e59a3087",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceDocumentsAddWorkspaceDocument } from "@docusign/iam-sdk/funcs/workspacesWorkspaceDocumentsAddWorkspaceDocument.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceDocumentsAddWorkspaceDocument(iamClient, {
    accountId: "5eddb8e1-d00e-47c4-9ed6-3b1c8915ae0d",
    workspaceId: "7f9e0991-b6d1-4de8-bfa5-7724e59a3087",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceDocumentsAddWorkspaceDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddWorkspaceDocumentRequest](../../models/operations/addworkspacedocumentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateWorkspaceDocumentResponse](../../models/components/createworkspacedocumentresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceDocument

This operation retrieves information about the document. The response includes the document ID, name, and metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceDocument" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/documents/{documentId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceDocuments.getWorkspaceDocument({
    accountId: "92293164-1793-41a1-8cb1-d6fdf0660804",
    workspaceId: "dfef9b70-860f-4798-889d-2f28cf5df5f4",
    documentId: "b9ed137b-5b0a-4abf-abac-ab9720001190",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceDocumentsGetWorkspaceDocument } from "@docusign/iam-sdk/funcs/workspacesWorkspaceDocumentsGetWorkspaceDocument.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceDocumentsGetWorkspaceDocument(iamClient, {
    accountId: "92293164-1793-41a1-8cb1-d6fdf0660804",
    workspaceId: "dfef9b70-860f-4798-889d-2f28cf5df5f4",
    documentId: "b9ed137b-5b0a-4abf-abac-ab9720001190",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceDocumentsGetWorkspaceDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceDocumentRequest](../../models/operations/getworkspacedocumentrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceDocumentResponse](../../models/components/getworkspacedocumentresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## deleteWorkspaceDocument

This operation permanently deletes a document by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteWorkspaceDocument" method="delete" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/documents/{documentId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.workspaces.workspaceDocuments.deleteWorkspaceDocument({
    accountId: "2e37a9af-e272-4059-96ff-0bfcf9620437",
    workspaceId: "0013f129-d585-40d0-a299-1141daa04cf3",
    documentId: "20dad844-6281-4b04-834a-b5979c0329b7",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceDocumentsDeleteWorkspaceDocument } from "@docusign/iam-sdk/funcs/workspacesWorkspaceDocumentsDeleteWorkspaceDocument.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceDocumentsDeleteWorkspaceDocument(iamClient, {
    accountId: "2e37a9af-e272-4059-96ff-0bfcf9620437",
    workspaceId: "0013f129-d585-40d0-a299-1141daa04cf3",
    documentId: "20dad844-6281-4b04-834a-b5979c0329b7",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workspacesWorkspaceDocumentsDeleteWorkspaceDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWorkspaceDocumentRequest](../../models/operations/deleteworkspacedocumentrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceDocumentContents

This operation retrieves the file contents of the document. The file is returned as a stream in the response body. The Content-Disposition response header contains the document name as the `filename`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceDocumentContents" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/documents/{documentId}/contents" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceDocuments.getWorkspaceDocumentContents({
    accountId: "4bc13f41-0697-41ee-8a11-d96266a80841",
    workspaceId: "4a268145-6144-48d9-b009-283af8fd83e8",
    documentId: "b62fd488-5ecf-4b73-878f-72550a413ac3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceDocumentsGetWorkspaceDocumentContents } from "@docusign/iam-sdk/funcs/workspacesWorkspaceDocumentsGetWorkspaceDocumentContents.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceDocumentsGetWorkspaceDocumentContents(iamClient, {
    accountId: "4bc13f41-0697-41ee-8a11-d96266a80841",
    workspaceId: "4a268145-6144-48d9-b009-283af8fd83e8",
    documentId: "b62fd488-5ecf-4b73-878f-72550a413ac3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceDocumentsGetWorkspaceDocumentContents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceDocumentContentsRequest](../../models/operations/getworkspacedocumentcontentsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |