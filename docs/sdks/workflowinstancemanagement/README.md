# Maestro.WorkflowInstanceManagement

## Overview

### Available Operations

* [getWorkflowInstancesList](#getworkflowinstanceslist) - Retrieve All Workflow Instances
* [getWorkflowInstance](#getworkflowinstance) - Retrieve a Workflow Instance
* [cancelWorkflowInstance](#cancelworkflowinstance) - Cancel a Running Workflow Instance

## getWorkflowInstancesList

This operation retrieves a list of all available Maestro workflow instances. It returns basic information
about each workflow instance, including its unique identifier (`id`), name, status, timestamps, and
additional metadata.

The response provides key details that help users understand what workflow instances are in progress
or completed, and the relevant data for each. Each workflow instance entry also includes metadata, such
as who started it, when it was last modified, and how many steps have been completed.

### Use Cases:
- Listing all available workflow instances for manual or automated review
- Monitoring which workflow instances are currently running or have finished
- Gathering basic metadata about workflow instances for auditing, logging, or reporting purposes

### Key Features:
- **Comprehensive Instance Overview**: Provides a full list of workflow instances, giving visibility
  into all ongoing and completed workflows within the Maestro platform
- **Metadata for Tracking**: Includes helpful metadata like creation time, last modification date,
  and user details to support audit trails
- **Scalable and Future-Proof**: Designed to handle growing numbers of workflow instances as the
  platform scales


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkflowInstancesList" method="get" path="/v1/accounts/{accountId}/workflows/{workflowId}/instances" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflowInstanceManagement.getWorkflowInstancesList({
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { maestroWorkflowInstanceManagementGetWorkflowInstancesList } from "@docusign/iam-sdk/funcs/maestroWorkflowInstanceManagementGetWorkflowInstancesList.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowInstanceManagementGetWorkflowInstancesList(iamClient, {
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowInstanceManagementGetWorkflowInstancesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkflowInstancesListRequest](../../models/operations/getworkflowinstanceslistrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkflowInstanceCollection](../../models/components/workflowinstancecollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getWorkflowInstance

This operation retrieves a single Maestro workflow instance by its unique identifier (`id`).
It returns the primary details of the workflow instance, including its name, status,
starting information, and other metadata.

The response provides key details that help users understand the current state of the workflow
instance, when it was started, and who initiated it. Additional metadata is included to support
auditing and reporting within the system.

### Use Cases:
- Getting the details of a specific workflow instance for further processing or review
- Monitoring the status of a running workflow instance to determine completion or cancellation
- Accessing metadata for auditing, logging, or reporting on a single workflow instance

### Key Features:
- **Single Workflow Instance**: Provides direct access to a specific workflow instance by `id`
- **Detailed Status Information**: Includes the workflow's start and end times, status, and other lifecycle timestamps
- **Metadata for Tracking**: Useful metadata like who initiated the workflow (`started_by`) and versioning details
- **Future-Proof**: Designed to be extensible if additional fields or nested information are required over time


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWorkflowInstance" method="get" path="/v1/accounts/{accountId}/workflows/{workflowId}/instances/{instanceId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflowInstanceManagement.getWorkflowInstance({
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    instanceId: "ce20ee0f-4090-48d8-b5fa-3d05ca654f73",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { maestroWorkflowInstanceManagementGetWorkflowInstance } from "@docusign/iam-sdk/funcs/maestroWorkflowInstanceManagementGetWorkflowInstance.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowInstanceManagementGetWorkflowInstance(iamClient, {
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    instanceId: "ce20ee0f-4090-48d8-b5fa-3d05ca654f73",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowInstanceManagementGetWorkflowInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkflowInstanceRequest](../../models/operations/getworkflowinstancerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkflowInstance](../../models/components/workflowinstance.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## cancelWorkflowInstance

This operation cancels a running Maestro workflow instance by its unique identifier (`instanceId`).
Once canceled, the workflow instance will no longer continue executing any remaining steps.

### Use Cases:
- Stopping a workflow execution when it is no longer needed or relevant
- Manually intervening in a workflow to prevent it from reaching completion if conditions change

### Key Features:
- **Immediate Termination**: Ensures the workflow instance no longer processes subsequent steps
- **Clear Feedback**: Returns a confirmation message including both the instance and workflow identifiers


### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelWorkflowInstance" method="post" path="/v1/accounts/{accountId}/workflows/{workflowId}/instances/{instanceId}/actions/cancel" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflowInstanceManagement.cancelWorkflowInstance({
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    instanceId: "ba4a94fa-3efc-4309-9463-36899a4c6d1e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { maestroWorkflowInstanceManagementCancelWorkflowInstance } from "@docusign/iam-sdk/funcs/maestroWorkflowInstanceManagementCancelWorkflowInstance.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowInstanceManagementCancelWorkflowInstance(iamClient, {
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    instanceId: "ba4a94fa-3efc-4309-9463-36899a4c6d1e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowInstanceManagementCancelWorkflowInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelWorkflowInstanceRequest](../../models/operations/cancelworkflowinstancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CancelWorkflowInstanceResponse](../../models/components/cancelworkflowinstanceresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorT      | 400, 403, 404, 409 | application/json   |
| errors.ErrorT      | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |