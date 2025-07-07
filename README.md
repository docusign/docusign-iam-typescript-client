# @docusign/iam-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@docusign/iam-sdk* API.

<div align="left">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>
<br />

## Summary

This SDK enables Typescript and Node.js developers to abstract and simplify the
use of the Docusign IAM APIs.

By installing this nuget package, developers can then use TypeScript objects and
methods to interact with the following Docusign APIs:

* [Maestro API](https://developers.docusign.com/docs/maestro-api/)
* [Navigator API](https://developers.docusign.com/docs/navigator-api/)
* [Connected Fields API](https://developers.docusign.com/docs/connected-fields-api/)

This repo contains the source-code for this SDK. You only need to use the code
in this repo if you want to customize the SDK for your own needs. To use the
SDK you just need to install the npm package and do not need to use this repo.

You can also find code examples and documentation for this SDK in the [Docusign
Developer Center](https://developers.docusign.com/).

<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@docusign/iam-sdk](#docusigniam-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @docusign/iam-sdk
```

### PNPM

```bash
pnpm add @docusign/iam-sdk
```

### Bun

```bash
bun add @docusign/iam-sdk
```

### Yarn

```bash
yarn add @docusign/iam-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.auth.getUserInfo();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type   | Scheme       | Environment Variable               |
| ------------- | ------ | ------------ | ---------------------------------- |
| `accessToken` | oauth2 | OAuth2 token | `DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN` |

To authenticate with the API the `accessToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.auth.getTokenFromPublicAuthCode({
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
    codeVerifier: "R8zFoqs0yey29G71QITZs3dK1YsdIvFNBfO4D1bukBw",
  });

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient();

async function run() {
  const result = await iamClient.auth.getTokenFromConfidentialAuthCode({
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
  }, {
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [auth](docs/sdks/auth/README.md)

* [getTokenFromConfidentialAuthCode](docs/sdks/auth/README.md#gettokenfromconfidentialauthcode) - Obtains an access token from the Docusign API using an authorization code.
* [getTokenFromPublicAuthCode](docs/sdks/auth/README.md#gettokenfrompublicauthcode) - Obtains an access token from the Docusign API using an authorization code.
* [getTokenFromJwtGrant](docs/sdks/auth/README.md#gettokenfromjwtgrant) - Obtains an access token from the Docusign API using a JWT grant.
* [getTokenFromRefreshToken](docs/sdks/auth/README.md#gettokenfromrefreshtoken) - Obtains an access token from the Docusign API using an authorization code.
* [getUserInfo](docs/sdks/auth/README.md#getuserinfo) - Get user information

### [connectedFields](docs/sdks/connectedfields/README.md)


#### [connectedFields.tabInfo](docs/sdks/tabinfo/README.md)

* [getConnectedFieldsTabGroups](docs/sdks/tabinfo/README.md#getconnectedfieldstabgroups) - Returns all tabs associated with the given account


### [maestro](docs/sdks/maestro/README.md)


#### [maestro.workflowInstanceManagement](docs/sdks/workflowinstancemanagement/README.md)

* [getWorkflowInstancesList](docs/sdks/workflowinstancemanagement/README.md#getworkflowinstanceslist) - Retrieve All Workflow Instances
* [getWorkflowInstance](docs/sdks/workflowinstancemanagement/README.md#getworkflowinstance) - Retrieve a Workflow Instance
* [cancelWorkflowInstance](docs/sdks/workflowinstancemanagement/README.md#cancelworkflowinstance) - Cancel a Running Workflow Instance

#### [maestro.workflows](docs/sdks/workflows/README.md)

* [getWorkflowsList](docs/sdks/workflows/README.md#getworkflowslist) - Retrieve a list of available Maestro workflows
* [getWorkflowTriggerRequirements](docs/sdks/workflows/README.md#getworkflowtriggerrequirements) - Retrieve trigger requirements for a specific Maestro workflow
* [triggerWorkflow](docs/sdks/workflows/README.md#triggerworkflow) - Trigger a new instance of a Maestro workflow
* [pauseNewWorkflowInstances](docs/sdks/workflows/README.md#pausenewworkflowinstances) - Pause an Active Workflow
* [resumePausedWorkflow](docs/sdks/workflows/README.md#resumepausedworkflow) - Resume a Paused Workflow

### [navigator](docs/sdks/navigator/README.md)


#### [navigator.agreements](docs/sdks/agreements/README.md)

* [getAgreementsList](docs/sdks/agreements/README.md#getagreementslist) - Retrieve a list of agreements
* [getAgreement](docs/sdks/agreements/README.md#getagreement) - Retrieve detailed information about a specific agreement
* [deleteAgreement](docs/sdks/agreements/README.md#deleteagreement) - Delete a specific agreement
* [createAgreementSummary](docs/sdks/agreements/README.md#createagreementsummary) - Create an AI-generated summary of an agreement document

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authGetTokenFromConfidentialAuthCode`](docs/sdks/auth/README.md#gettokenfromconfidentialauthcode) - Obtains an access token from the Docusign API using an authorization code.
- [`authGetTokenFromJwtGrant`](docs/sdks/auth/README.md#gettokenfromjwtgrant) - Obtains an access token from the Docusign API using a JWT grant.
- [`authGetTokenFromPublicAuthCode`](docs/sdks/auth/README.md#gettokenfrompublicauthcode) - Obtains an access token from the Docusign API using an authorization code.
- [`authGetTokenFromRefreshToken`](docs/sdks/auth/README.md#gettokenfromrefreshtoken) - Obtains an access token from the Docusign API using an authorization code.
- [`authGetUserInfo`](docs/sdks/auth/README.md#getuserinfo) - Get user information
- [`connectedFieldsTabInfoGetConnectedFieldsTabGroups`](docs/sdks/tabinfo/README.md#getconnectedfieldstabgroups) - Returns all tabs associated with the given account
- [`maestroWorkflowInstanceManagementCancelWorkflowInstance`](docs/sdks/workflowinstancemanagement/README.md#cancelworkflowinstance) - Cancel a Running Workflow Instance
- [`maestroWorkflowInstanceManagementGetWorkflowInstance`](docs/sdks/workflowinstancemanagement/README.md#getworkflowinstance) - Retrieve a Workflow Instance
- [`maestroWorkflowInstanceManagementGetWorkflowInstancesList`](docs/sdks/workflowinstancemanagement/README.md#getworkflowinstanceslist) - Retrieve All Workflow Instances
- [`maestroWorkflowsGetWorkflowsList`](docs/sdks/workflows/README.md#getworkflowslist) - Retrieve a list of available Maestro workflows
- [`maestroWorkflowsGetWorkflowTriggerRequirements`](docs/sdks/workflows/README.md#getworkflowtriggerrequirements) - Retrieve trigger requirements for a specific Maestro workflow
- [`maestroWorkflowsPauseNewWorkflowInstances`](docs/sdks/workflows/README.md#pausenewworkflowinstances) - Pause an Active Workflow
- [`maestroWorkflowsResumePausedWorkflow`](docs/sdks/workflows/README.md#resumepausedworkflow) - Resume a Paused Workflow
- [`maestroWorkflowsTriggerWorkflow`](docs/sdks/workflows/README.md#triggerworkflow) - Trigger a new instance of a Maestro workflow
- [`navigatorAgreementsCreateAgreementSummary`](docs/sdks/agreements/README.md#createagreementsummary) - Create an AI-generated summary of an agreement document
- [`navigatorAgreementsDeleteAgreement`](docs/sdks/agreements/README.md#deleteagreement) - Delete a specific agreement
- [`navigatorAgreementsGetAgreement`](docs/sdks/agreements/README.md#getagreement) - Retrieve detailed information about a specific agreement
- [`navigatorAgreementsGetAgreementsList`](docs/sdks/agreements/README.md#getagreementslist) - Retrieve a list of agreements

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient();

async function run() {
  const result = await iamClient.auth.getTokenFromConfidentialAuthCode({
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
  }, {
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await iamClient.auth.getTokenFromConfidentialAuthCode({
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
  }, {
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`IamClientError`](./src/models/errors/iamclienterror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { IamClient } from "@docusign/iam-sdk";
import * as errors from "@docusign/iam-sdk/models/errors";

const iamClient = new IamClient();

async function run() {
  try {
    const result = await iamClient.auth.getTokenFromConfidentialAuthCode({
      clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
      secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
    }, {
      code: "eyJ0eXAi.....QFsje43QVZ_gw",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.IamClientError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.OAuthErrorResponse) {
        console.log(error.data$.error); // string
        console.log(error.data$.errorDescription); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`IamClientError`](./src/models/errors/iamclienterror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (8)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`IamClientError`](./src/models/errors/iamclienterror.ts)**:
* [`ErrorT`](./src/models/errors/errort.ts): Bad Request - The request could not be understood or was missing required parameters. Applicable to 11 of 18 methods.*
* [`OAuthErrorResponse`](./src/models/errors/oautherrorresponse.ts): Status code `400`. Applicable to 5 of 18 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name   | Server                       | Description |
| ------ | ---------------------------- | ----------- |
| `demo` | `https://api-d.docusign.com` | Demo        |
| `prod` | `https://api.docusign.com`   | Production  |

#### Example

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  server: "prod",
});

async function run() {
  const result = await iamClient.auth.getTokenFromConfidentialAuthCode({
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
  }, {
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  serverURL: "https://api-d.docusign.com",
});

async function run() {
  const result = await iamClient.auth.getTokenFromConfidentialAuthCode({
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
  }, {
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient();

async function run() {
  const result = await iamClient.auth.getTokenFromConfidentialAuthCode({
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
  }, {
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
  }, {
    serverURL: "https://account.docusign.com",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { IamClient } from "@docusign/iam-sdk";
import { HTTPClient } from "@docusign/iam-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new IamClient({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { IamClient } from "@docusign/iam-sdk";

const sdk = new IamClient({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DOCUSIGN_IAM_CLIENT_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 
