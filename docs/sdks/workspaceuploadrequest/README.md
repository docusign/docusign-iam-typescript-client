# WorkspaceUploadRequest
(*workspaces.workspaceUploadRequest*)

## Overview

### Available Operations

* [createWorkspaceUploadRequest](#createworkspaceuploadrequest) - Creates a new upload request within a workspace
* [getWorkspaceUploadRequests](#getworkspaceuploadrequests) - Gets upload requests within a workspace
* [getWorkspaceUploadRequest](#getworkspaceuploadrequest) - Gets details for a specific upload request
* [updateWorkspaceUploadRequest](#updateworkspaceuploadrequest) - Updates a specific upload request
* [deleteWorkspaceUploadRequest](#deleteworkspaceuploadrequest) - Deletes a specific upload request
* [completeWorkspaceUploadRequest](#completeworkspaceuploadrequest) - Complete an upload request

## createWorkspaceUploadRequest

This operation creates a new upload request within a workspace. The upload request includes name, description, due date, and user assignments. Upload requests can be created as drafts or sent immediately based on the status field.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createWorkspaceUploadRequest" method="post" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/upload-requests" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceUploadRequest.createWorkspaceUploadRequest({
    accountId: "1cbbee87-a846-4a71-86d2-26b7972bb7c4",
    workspaceId: "c2ab6f98-e507-43b1-8c9d-43f1db751c40",
    createWorkspaceUploadRequestBody: {
      name: "<value>",
      description: "what than unique limply quaintly tattered grown",
      dueDate: new Date("2024-04-25T08:01:44.605Z"),
      assignments: [
        {
          uploadRequestResponsibilityTypeId: "assignee",
        },
      ],
      status: "draft",
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
import { workspacesWorkspaceUploadRequestCreateWorkspaceUploadRequest } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUploadRequestCreateWorkspaceUploadRequest.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUploadRequestCreateWorkspaceUploadRequest(iamClient, {
    accountId: "1cbbee87-a846-4a71-86d2-26b7972bb7c4",
    workspaceId: "c2ab6f98-e507-43b1-8c9d-43f1db751c40",
    createWorkspaceUploadRequestBody: {
      name: "<value>",
      description: "what than unique limply quaintly tattered grown",
      dueDate: new Date("2024-04-25T08:01:44.605Z"),
      assignments: [
        {
          uploadRequestResponsibilityTypeId: "assignee",
        },
      ],
      status: "draft",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceUploadRequestCreateWorkspaceUploadRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateWorkspaceUploadRequestRequest](../../models/operations/createworkspaceuploadrequestrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceUploadRequestResponse](../../models/components/getworkspaceuploadrequestresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceUploadRequests

This operation retrieves a list of upload requests within a workspace. Each upload request includes details such as ID, name, description, status, owner information, associated documents, assignments, and various dates.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceUploadRequests" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/upload-requests" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceUploadRequest.getWorkspaceUploadRequests({
    accountId: "5be78df1-c1f7-4e27-8b93-b0613a620dce",
    workspaceId: "b6719b00-fae9-4c7d-afce-b03f5e783434",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUploadRequestGetWorkspaceUploadRequests } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUploadRequestGetWorkspaceUploadRequests.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUploadRequestGetWorkspaceUploadRequests(iamClient, {
    accountId: "5be78df1-c1f7-4e27-8b93-b0613a620dce",
    workspaceId: "b6719b00-fae9-4c7d-afce-b03f5e783434",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceUploadRequestGetWorkspaceUploadRequests failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceUploadRequestsRequest](../../models/operations/getworkspaceuploadrequestsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceUploadRequestsResponse](../../models/components/getworkspaceuploadrequestsresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceUploadRequest

This operation retrieves details about a specific upload request within a workspace. The response includes comprehensive information about the upload request including status, assigned users, associated documents, owner details, and various dates.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceUploadRequest" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/upload-requests/{uploadRequestId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceUploadRequest.getWorkspaceUploadRequest({
    accountId: "7c24b49f-1dcd-49f1-be71-5b7d65118ca4",
    workspaceId: "0d068551-32a6-491f-8107-a554d3760bc6",
    uploadRequestId: "291c9759-17f1-4e96-8db4-c006050dc1c8",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUploadRequestGetWorkspaceUploadRequest } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUploadRequestGetWorkspaceUploadRequest.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUploadRequestGetWorkspaceUploadRequest(iamClient, {
    accountId: "7c24b49f-1dcd-49f1-be71-5b7d65118ca4",
    workspaceId: "0d068551-32a6-491f-8107-a554d3760bc6",
    uploadRequestId: "291c9759-17f1-4e96-8db4-c006050dc1c8",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceUploadRequestGetWorkspaceUploadRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceUploadRequestRequest](../../models/operations/getworkspaceuploadrequestrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceUploadRequestResponse](../../models/components/getworkspaceuploadrequestresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## updateWorkspaceUploadRequest

This operation updates a specific upload request within a workspace. Only draft upload requests can be edited. The editable fields are name, description, due date, and status. Status changes are restricted - only transitions from draft to in_progress are allowed. Attempting to update a non-draft upload request will result in an INVALID_STATUS error. Attempting an invalid status change will result in an INVALID_STATUS_CHANGE error.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateWorkspaceUploadRequest" method="put" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/upload-requests/{uploadRequestId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceUploadRequest.updateWorkspaceUploadRequest({
    accountId: "caf60771-df4b-4068-9ca5-0e088e4b6ebc",
    workspaceId: "da4b7335-e975-49b8-9307-923a86c3b10f",
    uploadRequestId: "5d8c2cfe-7346-46e3-a188-681b6aadfcc3",
    updateWorkspaceUploadRequestBody: {
      name: "<value>",
      description: "at providence phew furthermore save digitize than how circa never",
      status: "overdue",
      dueDate: "<value>",
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
import { workspacesWorkspaceUploadRequestUpdateWorkspaceUploadRequest } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUploadRequestUpdateWorkspaceUploadRequest.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUploadRequestUpdateWorkspaceUploadRequest(iamClient, {
    accountId: "caf60771-df4b-4068-9ca5-0e088e4b6ebc",
    workspaceId: "da4b7335-e975-49b8-9307-923a86c3b10f",
    uploadRequestId: "5d8c2cfe-7346-46e3-a188-681b6aadfcc3",
    updateWorkspaceUploadRequestBody: {
      name: "<value>",
      description: "at providence phew furthermore save digitize than how circa never",
      status: "overdue",
      dueDate: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceUploadRequestUpdateWorkspaceUploadRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWorkspaceUploadRequestRequest](../../models/operations/updateworkspaceuploadrequestrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceUploadRequestResponse](../../models/components/getworkspaceuploadrequestresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## deleteWorkspaceUploadRequest

This operation deletes a specific upload request within a workspace. Upload requests cannot be deleted if they are complete or have associated documents.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteWorkspaceUploadRequest" method="delete" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/upload-requests/{uploadRequestId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.workspaces.workspaceUploadRequest.deleteWorkspaceUploadRequest({
    accountId: "4911c672-2369-401a-b334-65cc19aa9316",
    workspaceId: "1886fee0-c032-4423-a512-78c15992cb4d",
    uploadRequestId: "81d3b642-96bd-4b5e-822b-5a5ebc552ab2",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUploadRequestDeleteWorkspaceUploadRequest } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUploadRequestDeleteWorkspaceUploadRequest.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUploadRequestDeleteWorkspaceUploadRequest(iamClient, {
    accountId: "4911c672-2369-401a-b334-65cc19aa9316",
    workspaceId: "1886fee0-c032-4423-a512-78c15992cb4d",
    uploadRequestId: "81d3b642-96bd-4b5e-822b-5a5ebc552ab2",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workspacesWorkspaceUploadRequestDeleteWorkspaceUploadRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWorkspaceUploadRequestRequest](../../models/operations/deleteworkspaceuploadrequestrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## completeWorkspaceUploadRequest

This operation completes a specific upload request within a workspace and is intended to be called by the user completing the upload request. Only upload requests that are in progress can be completed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="completeWorkspaceUploadRequest" method="post" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/upload-requests/{uploadRequestId}/actions/complete" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.workspaces.workspaceUploadRequest.completeWorkspaceUploadRequest({
    accountId: "66e3adbf-237a-4dc6-a239-f5b562487126",
    workspaceId: "d44b9cea-0e4e-45ec-8c2f-4e0ce9729584",
    uploadRequestId: "ecdb900d-7e60-4a2c-8e83-0252dc622fcb",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUploadRequestCompleteWorkspaceUploadRequest } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUploadRequestCompleteWorkspaceUploadRequest.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUploadRequestCompleteWorkspaceUploadRequest(iamClient, {
    accountId: "66e3adbf-237a-4dc6-a239-f5b562487126",
    workspaceId: "d44b9cea-0e4e-45ec-8c2f-4e0ce9729584",
    uploadRequestId: "ecdb900d-7e60-4a2c-8e83-0252dc622fcb",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workspacesWorkspaceUploadRequestCompleteWorkspaceUploadRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CompleteWorkspaceUploadRequestRequest](../../models/operations/completeworkspaceuploadrequestrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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