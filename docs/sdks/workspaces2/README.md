# Workspaces2
(*workspaces.workspaces*)

## Overview

### Available Operations

* [getWorkspaces](#getworkspaces) - Gets workspaces available to the calling user
* [createWorkspace](#createworkspace) - Creates a new workspace
* [updateWorkspace](#updateworkspace) - Updates an existing workspace
* [getWorkspace](#getworkspace) - Returns details about the workspace
* [getWorkspaceAssignableRoles](#getworkspaceassignableroles) - Returns the roles the caller can assign to workspace users
* [createWorkspaceEnvelope](#createworkspaceenvelope) - Creates an envelope with the given documents. Returns the ID of the created envelope
* [getWorkspaceEnvelopes](#getworkspaceenvelopes) - Returns the envelopes associated with the given workspace

## getWorkspaces

This operation retrieves a list of workspaces available to the calling user. It returns basic information about each workspace, including its unique identifier (ID), name, and metadata such as when it was created and by whom.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaces" method="get" path="/v1/accounts/{accountId}/workspaces" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaces.getWorkspaces({
    accountId: "c0aa779c-d467-40d4-863c-49bc82f11d0f",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspacesGetWorkspaces } from "@docusign/iam-sdk/funcs/workspacesWorkspacesGetWorkspaces.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspacesGetWorkspaces(iamClient, {
    accountId: "c0aa779c-d467-40d4-863c-49bc82f11d0f",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspacesGetWorkspaces failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspacesRequest](../../models/operations/getworkspacesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspacesResponse](../../models/components/getworkspacesresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## createWorkspace

This operation creates a new workspace. The calling user is automatically added as a member of the workspace with the role of Manage.

Once created, the `workspace_id` is utilized to associate tasks such as envelopes. Participants on tasks will automatically be added to the workspace with the Participate role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createWorkspace" method="post" path="/v1/accounts/{accountId}/workspaces" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaces.createWorkspace({
    accountId: "a112e56c-a7e3-42a4-841a-04ccff785253",
    createWorkspaceBody: {
      name: "<value>",
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
import { workspacesWorkspacesCreateWorkspace } from "@docusign/iam-sdk/funcs/workspacesWorkspacesCreateWorkspace.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspacesCreateWorkspace(iamClient, {
    accountId: "a112e56c-a7e3-42a4-841a-04ccff785253",
    createWorkspaceBody: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspacesCreateWorkspace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateWorkspaceRequest](../../models/operations/createworkspacerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateWorkspaceResponse](../../models/components/createworkspaceresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## updateWorkspace

This operation updates details about a specific workspace. It returns the workspace's unique identifier (ID), name, and metadata such as when it was created and by whom.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateWorkspace" method="put" path="/v1/accounts/{accountId}/workspaces/{workspaceId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaces.updateWorkspace({
    accountId: "a03ca946-93ee-47cf-8cbe-a53c7e3284bf",
    workspaceId: "c41ace15-4a79-4fe4-84bb-81adc9c7df98",
    updateWorkspaceBody: {
      name: "<value>",
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
import { workspacesWorkspacesUpdateWorkspace } from "@docusign/iam-sdk/funcs/workspacesWorkspacesUpdateWorkspace.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspacesUpdateWorkspace(iamClient, {
    accountId: "a03ca946-93ee-47cf-8cbe-a53c7e3284bf",
    workspaceId: "c41ace15-4a79-4fe4-84bb-81adc9c7df98",
    updateWorkspaceBody: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspacesUpdateWorkspace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWorkspaceRequest](../../models/operations/updateworkspacerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UpdateWorkspaceResponse](../../models/components/updateworkspaceresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspace

This operation retrieves details about a specific workspace. It returns the workspace's unique identifier (ID), name, and metadata such as when it was created and by whom.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspace" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaces.getWorkspace({
    accountId: "ad230bf6-0f5f-4b96-87ed-f1dfb60c2369",
    workspaceId: "55f7d452-cda5-4e74-a1a9-d0a5073bb942",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspacesGetWorkspace } from "@docusign/iam-sdk/funcs/workspacesWorkspacesGetWorkspace.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspacesGetWorkspace(iamClient, {
    accountId: "ad230bf6-0f5f-4b96-87ed-f1dfb60c2369",
    workspaceId: "55f7d452-cda5-4e74-a1a9-d0a5073bb942",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspacesGetWorkspace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceRequest](../../models/operations/getworkspacerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceResponse](../../models/components/getworkspaceresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceAssignableRoles

This operation returns roles that are assignable to users in the workspace based on the caller's role in the workspace. Roles available include Manage (internal) and Participate (external). Participate is the default role.

Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned "External" roles.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceAssignableRoles" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/assignable-roles" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaces.getWorkspaceAssignableRoles({
    accountId: "541b0318-7597-4668-b774-ac66de5ddf28",
    workspaceId: "62ce984d-c201-4336-9e9f-8cf191c29d9c",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspacesGetWorkspaceAssignableRoles } from "@docusign/iam-sdk/funcs/workspacesWorkspacesGetWorkspaceAssignableRoles.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspacesGetWorkspaceAssignableRoles(iamClient, {
    accountId: "541b0318-7597-4668-b774-ac66de5ddf28",
    workspaceId: "62ce984d-c201-4336-9e9f-8cf191c29d9c",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspacesGetWorkspaceAssignableRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceAssignableRolesRequest](../../models/operations/getworkspaceassignablerolesrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceAssignableRolesResponse](../../models/components/getworkspaceassignablerolesresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## createWorkspaceEnvelope

This operation creates an envelope associated with the workspace. Using the `envelope_id` from the response, the [eSignature API](https://developers.docusign.com/docs/esign-rest-api/) may be utilized to modify the envelope and ultimately send it.

Envelope recipients will automatically be granted Participate access to the workspace. Envelope recipients will receive consolidated notifications from Docusign Workspaces rather than standard individual envelope notifications.

Docusign Connect events may be utilized to receive updates to individual envelope events.

The `envelopes` operation on the workspace may be utilized to query the status of all the envelopes in the workspace.

When `document_ids` is empty or excluded, the envelope is created without any documents from the workspace. eSignature API calls, including adding documents and templates, may be utilized to modify the envelope before it is sent. The eSignature API must be utilized to send the envelope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createWorkspaceEnvelope" method="post" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/envelopes" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaces.createWorkspaceEnvelope({
    accountId: "d2da53cf-e564-4282-bb1d-8cdaa0948abe",
    workspaceId: "69b8ec97-5be8-40a3-ae01-fbff4ba7a447",
    workspaceEnvelopeForCreate: {
      envelopeName: "<value>",
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
import { workspacesWorkspacesCreateWorkspaceEnvelope } from "@docusign/iam-sdk/funcs/workspacesWorkspacesCreateWorkspaceEnvelope.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspacesCreateWorkspaceEnvelope(iamClient, {
    accountId: "d2da53cf-e564-4282-bb1d-8cdaa0948abe",
    workspaceId: "69b8ec97-5be8-40a3-ae01-fbff4ba7a447",
    workspaceEnvelopeForCreate: {
      envelopeName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspacesCreateWorkspaceEnvelope failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateWorkspaceEnvelopeRequest](../../models/operations/createworkspaceenveloperequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateWorkspaceEnvelopeResponse](../../models/components/createworkspaceenveloperesponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getWorkspaceEnvelopes

This operation retrieves a list of all associated workspace envelopes. The [`status`](https://support.docusign.com/s/document-item?bundleId=oeq1643226594604&topicId=wdm1578456348227.html) on each envelope can be used to track envelope progress. Statuses are formatted as ProperCase. e.g. `Sent`, `WaitingForOthers`, `Completed`, etc.

Based on the permissions of the caller, additional envelope details may be retrieved from the [eSignature API](https://developers.docusign.com/docs/esign-rest-api/) using the `envelope_id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceEnvelopes" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/envelopes" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaces.getWorkspaceEnvelopes({
    accountId: "6582b4dd-d705-43f5-8bd2-cebfd9049aa8",
    workspaceId: "c80f66a9-e39c-4ab6-818e-cf6b04f77d1a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspacesGetWorkspaceEnvelopes } from "@docusign/iam-sdk/funcs/workspacesWorkspacesGetWorkspaceEnvelopes.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspacesGetWorkspaceEnvelopes(iamClient, {
    accountId: "6582b4dd-d705-43f5-8bd2-cebfd9049aa8",
    workspaceId: "c80f66a9-e39c-4ab6-818e-cf6b04f77d1a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspacesGetWorkspaceEnvelopes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceEnvelopesRequest](../../models/operations/getworkspaceenvelopesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceEnvelopesResponse](../../models/components/getworkspaceenvelopesresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |