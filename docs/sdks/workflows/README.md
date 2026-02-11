# Maestro.Workflows

## Overview

### Available Operations

* [getWorkflowsList](#getworkflowslist) - Retrieve a list of available Maestro workflows
* [getWorkflowTriggerRequirements](#getworkflowtriggerrequirements) - Retrieve trigger requirements for a specific Maestro workflow
* [triggerWorkflow](#triggerworkflow) - Trigger a new instance of a Maestro workflow
* [pauseNewWorkflowInstances](#pausenewworkflowinstances) - Pause an Active Workflow
* [resumePausedWorkflow](#resumepausedworkflow) - Resume a Paused Workflow

## getWorkflowsList

This operation retrieves a list of all available Maestro workflows. It returns basic information
about each workflow, including its unique identifier (`id`), name, description, and the input
schema required to trigger the workflow.

The response provides key details that help users identify which workflows are available
and understand the input requirements for triggering each one. Each workflow entry also includes
metadata, such as when it was created, last modified, and by whom.

This operation is useful for obtaining an overview of all workflows within the system, helping
users and systems know what workflows are defined, what inputs they require, and how they can
be triggered.

### Use Cases:
- Listing all available workflows in a system for manual or automated workflow initiation.
- Reviewing the input requirements for a workflow before triggering it programmatically.
- Gathering basic metadata about workflows for auditing, logging, or reporting purposes.

### Key Features:
- **Comprehensive Workflow Overview**: Provides a full list of workflows, giving visibility
  into all the automated processes available within the Maestro platform.
- **Input Schema Information**: Each workflow includes its trigger input schema, showing
  what data must be provided when triggering the workflow.
- **Metadata for Tracking**: Useful metadata like creation time, last modification date,
  and user details are included to support tracking and auditing workflows.
- **Future-Proof**: The operation is designed to be expandable as more workflows are added
  or the platform grows, ensuring scalability in the workflow management process.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetWorkflowsList" method="get" path="/v1/accounts/{accountId}/workflows" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflows.getWorkflowsList({
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    status: "active",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { maestroWorkflowsGetWorkflowsList } from "@docusign/iam-sdk/funcs/maestroWorkflowsGetWorkflowsList.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowsGetWorkflowsList(iamClient, {
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    status: "active",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowsGetWorkflowsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkflowsListRequest](../../models/operations/getworkflowslistrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkflowsListSuccess](../../models/components/workflowslistsuccess.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getWorkflowTriggerRequirements

This operation retrieves the configuration and input requirements necessary to trigger a specific
Maestro workflow. It provides detailed information about the `trigger_event_type`, such as HTTP
or other supported types, and specifies the required input schema, including field names, data types,
and any default values.

This information is essential for understanding the data and parameters required to initiate the
workflow. It enables developers to prepare the necessary inputs and configuration before triggering
the workflow instance, ensuring seamless execution and compliance with workflow requirements.

### Use Cases:
- Identifying the required input fields and their data types to successfully trigger the workflow.
- Reviewing the trigger configuration for validation and compliance with expected input.
- Preparing and validating data in advance of triggering the workflow, minimizing runtime errors.

### Key Features:
- **Detailed Trigger Input Requirements**: Provides an exhaustive schema of required fields,
  their data types, and optional default values for easy reference and data validation.
- **Trigger Event Type Information**: Specifies the type of event required to initiate the workflow
  (e.g., HTTP), helping developers configure their systems to invoke the workflow appropriately.
- **Configurable for Custom Triggers**: Suitable for custom configurations, enabling flexibility
  in how workflows can be triggered according to system needs.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetWorkflowTriggerRequirements" method="get" path="/v1/accounts/{accountId}/workflows/{workflowId}/trigger-requirements" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflows.getWorkflowTriggerRequirements({
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
import { maestroWorkflowsGetWorkflowTriggerRequirements } from "@docusign/iam-sdk/funcs/maestroWorkflowsGetWorkflowTriggerRequirements.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowsGetWorkflowTriggerRequirements(iamClient, {
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowsGetWorkflowTriggerRequirements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkflowTriggerRequirementsRequest](../../models/operations/getworkflowtriggerrequirementsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkflowTriggerRequirementsSuccess](../../models/components/workflowtriggerrequirementssuccess.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## triggerWorkflow

This operation triggers a new instance of a specified Maestro workflow. When invoked,
the workflow is started based on the provided input data, and the workflow instance
begins executing according to its defined logic and configuration.

The request requires an `instance_name` and any input data necessary to start the workflow,
as described by the workflow's `trigger_input_schema`. The `instance_name` is a user-defined
label for tracking the workflow run, while the input data fields should match the schema defined
in the workflow.

The operation is event-driven and typically triggered by an external HTTP event or system call,
allowing for the automatic execution of complex processes that span multiple systems or components.

Upon successful execution, the response returns the unique identifier (`id`) for the newly
created workflow instance, along with a URL (`workflow_instance_url`) that can be used to
interact with or track the running instance.

### Use Cases:
- Automating user registration workflows where input fields like `name` and `email` are provided.
- Processing financial transactions where details such as `amount` and `currency` are required.
- Sending notifications based on user interactions in other systems.

### Key Features:
- **Automated Execution**: Once triggered, the workflow runs until a step requires manual intervention.
- **Input-Driven**: Workflow execution is based on the provided input data, which is validated
  against the workflow's input schema.
- **Real-Time Triggering**: Designed to be invoked as part of an event-driven architecture,
  allowing for workflows to respond to external events.
- **Tracking and Interaction**: The response includes a URL that allows users to check the status
  of the workflow instance or take further actions while it runs.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="TriggerWorkflow" method="post" path="/v1/accounts/{accountId}/workflows/{workflowId}/actions/trigger" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflows.triggerWorkflow({
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    triggerWorkflow: {
      instanceName: "My Instance",
      triggerInputs: {
        "name": "Jon Doe",
        "email": "jdoe@example.com",
      },
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
import { maestroWorkflowsTriggerWorkflow } from "@docusign/iam-sdk/funcs/maestroWorkflowsTriggerWorkflow.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowsTriggerWorkflow(iamClient, {
    accountId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    workflowId: "ae232f1f-8efc-4b8c-bb08-626847fad8bb",
    triggerWorkflow: {
      instanceName: "My Instance",
      triggerInputs: {
        "name": "Jon Doe",
        "email": "jdoe@example.com",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowsTriggerWorkflow failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TriggerWorkflowRequest](../../models/operations/triggerworkflowrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TriggerWorkflowSuccess](../../models/components/triggerworkflowsuccess.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## pauseNewWorkflowInstances

This operation pauses new workflow instances from being created. Any running workflows instances will be unaffected.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="pauseNewWorkflowInstances" method="post" path="/v1/accounts/{accountId}/workflows/{workflowId}/actions/pause" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflows.pauseNewWorkflowInstances({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { maestroWorkflowsPauseNewWorkflowInstances } from "@docusign/iam-sdk/funcs/maestroWorkflowsPauseNewWorkflowInstances.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowsPauseNewWorkflowInstances(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowsPauseNewWorkflowInstances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PauseNewWorkflowInstancesRequest](../../models/operations/pausenewworkflowinstancesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PauseNewWorkflowInstancesSuccess](../../models/components/pausenewworkflowinstancessuccess.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorT      | 400, 403, 404, 409 | application/json   |
| errors.ErrorT      | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## resumePausedWorkflow

This operation enables new workflow instances to be created


### Example Usage

<!-- UsageSnippet language="typescript" operationID="resumePausedWorkflow" method="post" path="/v1/accounts/{accountId}/workflows/{workflowId}/actions/resume" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.maestro.workflows.resumePausedWorkflow({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { maestroWorkflowsResumePausedWorkflow } from "@docusign/iam-sdk/funcs/maestroWorkflowsResumePausedWorkflow.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await maestroWorkflowsResumePausedWorkflow(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("maestroWorkflowsResumePausedWorkflow failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ResumePausedWorkflowRequest](../../models/operations/resumepausedworkflowrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ResumeNewWorkflowInstancesSuccess](../../models/components/resumenewworkflowinstancessuccess.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorT      | 400, 403, 404, 409 | application/json   |
| errors.ErrorT      | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |