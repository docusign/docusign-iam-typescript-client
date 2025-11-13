# WorkspaceBrands
(*workspaces.workspaceBrands*)

## Overview

### Available Operations

* [getWorkspaceBrand](#getworkspacebrand) - Returns details about the brand set for a workspace
* [updateWorkspaceBrand](#updateworkspacebrand) - Updates brand for an existing workspace

## getWorkspaceBrand

This operation retrieves details about a specific workspace. It returns the brand details such as its unique identifier (ID), name, and metadata such as brand colors and logos.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceBrand" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/brand" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceBrands.getWorkspaceBrand({
    accountId: "0bfcafb4-f092-4bc8-8ef8-948bc7bf03c3",
    workspaceId: "a0cddd57-5c88-4a44-afcc-5b6de2154b65",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceBrandsGetWorkspaceBrand } from "@docusign/iam-sdk/funcs/workspacesWorkspaceBrandsGetWorkspaceBrand.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceBrandsGetWorkspaceBrand(iamClient, {
    accountId: "0bfcafb4-f092-4bc8-8ef8-948bc7bf03c3",
    workspaceId: "a0cddd57-5c88-4a44-afcc-5b6de2154b65",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceBrandsGetWorkspaceBrand failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceBrandRequest](../../models/operations/getworkspacebrandrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceBrandResponse](../../models/components/getworkspacebrandresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## updateWorkspaceBrand

This operation updates brand for a specific workspace. It returns the brand details such as its unique identifier (ID), name, and metadata such as brand colors and logos.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateWorkspaceBrand" method="put" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/brand" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceBrands.updateWorkspaceBrand({
    accountId: "1b06d538-9938-4fc1-ac20-f9284b7b9a0a",
    workspaceId: "e99e34d2-4d67-46bb-89e6-29aec34fda9e",
    updateWorkspaceBrandBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceBrandsUpdateWorkspaceBrand } from "@docusign/iam-sdk/funcs/workspacesWorkspaceBrandsUpdateWorkspaceBrand.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceBrandsUpdateWorkspaceBrand(iamClient, {
    accountId: "1b06d538-9938-4fc1-ac20-f9284b7b9a0a",
    workspaceId: "e99e34d2-4d67-46bb-89e6-29aec34fda9e",
    updateWorkspaceBrandBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceBrandsUpdateWorkspaceBrand failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWorkspaceBrandRequest](../../models/operations/updateworkspacebrandrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UpdateWorkspaceBrandResponse](../../models/components/updateworkspacebrandresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |