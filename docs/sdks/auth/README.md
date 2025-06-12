# Auth
(*auth*)

## Overview

### Available Operations

* [getTokenFromConfidentialAuthCode](#gettokenfromconfidentialauthcode) - Obtains an access token from the Docusign API using an authorization code.
* [getTokenFromPublicAuthCode](#gettokenfrompublicauthcode) - Obtains an access token from the Docusign API using an authorization code.
* [getTokenFromJwtGrant](#gettokenfromjwtgrant) - Obtains an access token from the Docusign API using a JWT grant.
* [getTokenFromRefreshToken](#gettokenfromrefreshtoken) - Obtains an access token from the Docusign API using an authorization code.
* [getUserInfo](#getuserinfo) - Get user information

## getTokenFromConfidentialAuthCode

Obtains an access token from the Docusign API using the confidential flow.
For the developer environment, the URI is https://account-d.docusign.com/oauth/token
For the production environment, the URI is https://account.docusign.com/oauth/token
You do not need an integration key to obtain an access token.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { authGetTokenFromConfidentialAuthCode } from "@docusign/iam-sdk/funcs/authGetTokenFromConfidentialAuthCode.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore();

async function run() {
  const res = await authGetTokenFromConfidentialAuthCode(iamClient, {
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    secretKey: "MTIzNDU2Nzxxxxxxxxxxxxxxxxxxxxx0NTY3ODkwMTI",
  }, {
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authGetTokenFromConfidentialAuthCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ConfidentialAuthCodeGrantRequestBody](../../models/components/confidentialauthcodegrantrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetTokenFromConfidentialAuthCodeSecurity](../../models/operations/gettokenfromconfidentialauthcodesecurity.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.AuthorizationCodeGrantResponse](../../models/components/authorizationcodegrantresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## getTokenFromPublicAuthCode

Obtains an access token from the Docusign API using the confidential flow.
For the developer environment, the URI is https://account-d.docusign.com/oauth/token
For the production environment, the URI is https://account.docusign.com/oauth/token
You do not need an integration key to obtain an access token.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { authGetTokenFromPublicAuthCode } from "@docusign/iam-sdk/funcs/authGetTokenFromPublicAuthCode.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await authGetTokenFromPublicAuthCode(iamClient, {
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
    code: "eyJ0eXAi.....QFsje43QVZ_gw",
    codeVerifier: "R8zFoqs0yey29G71QITZs3dK1YsdIvFNBfO4D1bukBw",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authGetTokenFromPublicAuthCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PublicAuthCodeGrantRequestBody](../../models/components/publicauthcodegrantrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.AuthorizationCodeGrantResponse](../../models/components/authorizationcodegrantresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## getTokenFromJwtGrant

Obtains an access token from the Docusign API.
                                                                                                                      
For the developer environment, the URI is https://account-d.docusign.com/oauth/token
                                                                                                                      
For the production environment, the URI is https://account.docusign.com/oauth/token
                                                                                                                      
                                                                                                                      
You do not need an integration key to obtain an access token.

### Example Usage

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.auth.getTokenFromJwtGrant({
    assertion: "YOUR_JSON_WEB_TOKEN",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { authGetTokenFromJwtGrant } from "@docusign/iam-sdk/funcs/authGetTokenFromJwtGrant.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await authGetTokenFromJwtGrant(iamClient, {
    assertion: "YOUR_JSON_WEB_TOKEN",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authGetTokenFromJwtGrant failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.JWTGrant](../../models/operations/jwtgrant.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.JWTGrantResponse](../../models/components/jwtgrantresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## getTokenFromRefreshToken

Obtains an access token from the Docusign API.
For the developer environment, the URI is https://account-d.docusign.com/oauth/token
For the production environment, the URI is https://account.docusign.com/oauth/token

You do not need an integration key to obtain an access token.

### Example Usage

```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient();

async function run() {
  const result = await iamClient.auth.getTokenFromRefreshToken({
    refreshToken: "<value>",
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { authGetTokenFromRefreshToken } from "@docusign/iam-sdk/funcs/authGetTokenFromRefreshToken.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore();

async function run() {
  const res = await authGetTokenFromRefreshToken(iamClient, {
    refreshToken: "<value>",
    clientId: "2da1cb14-xxxx-xxxx-xxxx-5b7b40829e79",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authGetTokenFromRefreshToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthorizationCodeGrant](../../models/operations/authorizationcodegrant.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetTokenFromRefreshTokenSecurity](../../models/operations/gettokenfromrefreshtokensecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetTokenFromRefreshTokenResponse](../../models/operations/gettokenfromrefreshtokenresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## getUserInfo

This endpoint retrieves user information from the Docusign API using an access token.
For the developer environment, the URI is https://account-d.docusign.com/oauth/userinfo
For the production environment, the URI is https://account.docusign.com/oauth/userinfo

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { authGetUserInfo } from "@docusign/iam-sdk/funcs/authGetUserInfo.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await authGetUserInfo(iamClient);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authGetUserInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.UserInfo](../../models/components/userinfo.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |