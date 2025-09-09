# WorkspaceUsers
(*workspaces.workspaceUsers*)

## Overview

### Available Operations

* [getWorkspaceUsers](#getworkspaceusers) - Retrieves the list of users in the given workspace
* [addWorkspaceUser](#addworkspaceuser) - Adds a user to the workspace by email address
* [updateWorkspaceUser](#updateworkspaceuser) - Updates the specified user's role
* [revokeWorkspaceUserAccess](#revokeworkspaceuseraccess) - Revokes the specified user's access to the workspace
* [restoreWorkspaceUserAccess](#restoreworkspaceuseraccess) - Restores the specified user's access to the workspace

## getWorkspaceUsers

This operations retrieves the users in a workspace. Users sent envelopes or assigned tasks will automatically be added to the workspace with the Participate role.

Pagination is supported by passing `start_position` and `count` in the request. The response will include `resultSetSize`, `start_position`, and `end_position` which may be utilized for subsequent requests.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkspaceUsers" method="get" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/users" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceUsers.getWorkspaceUsers({
    accountId: "9ae55a64-d2c4-4631-8668-7f4264e89a7c",
    workspaceId: "0a03290d-af53-43c0-81a3-aa5e7db57ccc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUsersGetWorkspaceUsers } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUsersGetWorkspaceUsers.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUsersGetWorkspaceUsers(iamClient, {
    accountId: "9ae55a64-d2c4-4631-8668-7f4264e89a7c",
    workspaceId: "0a03290d-af53-43c0-81a3-aa5e7db57ccc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceUsersGetWorkspaceUsers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceUsersRequest](../../models/operations/getworkspaceusersrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetWorkspaceUsersResponse](../../models/components/getworkspaceusersresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## addWorkspaceUser

This operation manually adds an internal or external user to a specific workspace by email address. Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned the Participate role. This operation is not typically needed for adding external participants to a Workspace as they will be automatically added as tasks are assigned.

Available role IDs can be retrieved via the Assignable Roles operation on a workspace. If the `role_id` is not passed, the user is added with the Participate role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addWorkspaceUser" method="post" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/users" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceUsers.addWorkspaceUser({
    accountId: "55ecbf41-d3bb-4ed0-bb6e-019d84813dfb",
    workspaceId: "ac4a8865-6e92-436b-8c1c-596b9bc19344",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUsersAddWorkspaceUser } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUsersAddWorkspaceUser.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUsersAddWorkspaceUser(iamClient, {
    accountId: "55ecbf41-d3bb-4ed0-bb6e-019d84813dfb",
    workspaceId: "ac4a8865-6e92-436b-8c1c-596b9bc19344",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceUsersAddWorkspaceUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddWorkspaceUserRequest](../../models/operations/addworkspaceuserrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateWorkspaceUserResponse](../../models/components/createworkspaceuserresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## updateWorkspaceUser

This operation updates the specified user's role in the workspace. Users within the account are considered "Internal" and may be assigned any role. Users outside the account are considered "External" and may only be assigned "External" roles.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateWorkspaceUser" method="put" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/users/{userId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.workspaces.workspaceUsers.updateWorkspaceUser({
    accountId: "9c21c871-31a0-41bd-b7d0-c4bc7d7e7770",
    workspaceId: "f2cc2db5-2b59-4c1d-9b36-ec191a110bd5",
    userId: "3f0ec84d-ca81-4e4e-a476-bb1a630dde86",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUsersUpdateWorkspaceUser } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUsersUpdateWorkspaceUser.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUsersUpdateWorkspaceUser(iamClient, {
    accountId: "9c21c871-31a0-41bd-b7d0-c4bc7d7e7770",
    workspaceId: "f2cc2db5-2b59-4c1d-9b36-ec191a110bd5",
    userId: "3f0ec84d-ca81-4e4e-a476-bb1a630dde86",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesWorkspaceUsersUpdateWorkspaceUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWorkspaceUserRequest](../../models/operations/updateworkspaceuserrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UpdateWorkspaceUserResponse](../../models/components/updateworkspaceuserresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorDetails | 400, 401            | application/json    |
| errors.ErrorDetails | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## revokeWorkspaceUserAccess

This operation revokes the specified user's access to the workspace. The optional `revocation_date` may be set to schedule revocation in the future. If not specified, the revocation will be immediate.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="revokeWorkspaceUserAccess" method="post" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/users/{userId}/actions/revoke-access" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.workspaces.workspaceUsers.revokeWorkspaceUserAccess({
    accountId: "4b457d23-e0cf-41d6-ab4b-a1cc9d2746e9",
    workspaceId: "7d48c40f-5efb-4c83-8568-002406476a59",
    userId: "6307406e-ab4b-4d4b-b2c0-d2428dc6f8d4",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUsersRevokeWorkspaceUserAccess } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUsersRevokeWorkspaceUserAccess.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUsersRevokeWorkspaceUserAccess(iamClient, {
    accountId: "4b457d23-e0cf-41d6-ab4b-a1cc9d2746e9",
    workspaceId: "7d48c40f-5efb-4c83-8568-002406476a59",
    userId: "6307406e-ab4b-4d4b-b2c0-d2428dc6f8d4",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workspacesWorkspaceUsersRevokeWorkspaceUserAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeWorkspaceUserAccessRequest](../../models/operations/revokeworkspaceuseraccessrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## restoreWorkspaceUserAccess

This operation restores the specified user's access to the workspace. The user must have been previously revoked from the workspace. The access is immediately restored.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="restoreWorkspaceUserAccess" method="post" path="/v1/accounts/{accountId}/workspaces/{workspaceId}/users/{userId}/actions/restore-access" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await iamClient.workspaces.workspaceUsers.restoreWorkspaceUserAccess({
    accountId: "03055c38-466e-4bf1-91d0-c49ecbc09b8f",
    workspaceId: "0c281df3-a315-4c3f-9f07-6b0a3b953797",
    userId: "cf3df2ba-fa4b-4787-b8ad-9932a4d5f94b",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { workspacesWorkspaceUsersRestoreWorkspaceUserAccess } from "@docusign/iam-sdk/funcs/workspacesWorkspaceUsersRestoreWorkspaceUserAccess.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await workspacesWorkspaceUsersRestoreWorkspaceUserAccess(iamClient, {
    accountId: "03055c38-466e-4bf1-91d0-c49ecbc09b8f",
    workspaceId: "0c281df3-a315-4c3f-9f07-6b0a3b953797",
    userId: "cf3df2ba-fa4b-4787-b8ad-9932a4d5f94b",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workspacesWorkspaceUsersRestoreWorkspaceUserAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RestoreWorkspaceUserAccessRequest](../../models/operations/restoreworkspaceuseraccessrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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