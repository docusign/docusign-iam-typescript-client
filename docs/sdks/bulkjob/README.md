# Navigator.BulkJob

## Overview

### Available Operations

* [createBulkUploadJob](#createbulkuploadjob) - Create new bulk job with presigned URLs direct to Azure Blob Store
* [getBulkJobStatus](#getbulkjobstatus) - Get bulk job status
* [uploadCompleteBulkJob](#uploadcompletebulkjob) - Mark bulk job upload as complete

## createBulkUploadJob

Create a new job, give pre-signed URLs back, the client will upload to Azure Blob Store directly.

[Required scopes](/docs/navigator-api/auth/): `document_uploader_write`, `document_uploader_read`

**Important Upload Workflow**:
1. Call this endpoint to create a job and receive upload URLs
2. For each document in the response's `_embedded.documents` array, extract the `upload_document` URL from `_actions`
3. Upload your document file to each URL using an HTTP PUT request with the document content as binary data
4. After all documents are uploaded, call the `/actions/complete` endpoint to finalize the job
5. Use the GET endpoint to monitor job progress

**Example response structure**:
```json
{
  "_embedded": {
    "documents": [
      {
        "id": "8c566d26-e7fb-4b7e-870c-1d0fb8df9084",
        "sequence": 1,
        "_actions": {
          "upload_document": "https://docupstoragewestwu3dsto.blob.core.windows.net/..."
        }
      }
    ]
  }
}
```

**Azure Blob Storage Upload Instructions**:

Use the pre-signed URL from step 2 to upload your document directly to Azure Blob Storage:

```
PUT [pre-signed URL from _actions.upload_document]

Headers:
- x-ms-blob-type: BlockBlob
- x-ms-meta-filename: YourDocumentName.pdf
- Content-Type: application/pdf

Body: [Your document binary data]
```

**Important Notes**:
- The `upload_document` URLs are pre-signed Azure Blob Storage URLs with time-limited validity (8 hours)
- The `x-ms-meta-filename` header should contain your original document filename
- The `x-ms-blob-type` must be set to `BlockBlob`
- Setting the `Content-Type` header is recommended to match your document type
- If `Content-Type` is not specified, Azure defaults to `application/octet-stream`

**Firewall & Network Configuration**:

If your organization uses firewalls or network restrictions, you may need to whitelist the following Azure Blob Storage domains 
to ensure successful document uploads. The upload URLs returned by this API will use one of these domains based on your 
account's geographic region:

**Primary Storage Endpoints**:
- `https://docupstorageaustauepsto.blob.core.windows.net/`
- `https://docupstoragecanacacpsto.blob.core.windows.net/`
- `https://docupstoragecentcuspsto.blob.core.windows.net/`
- `https://docupstorageeasteu2psto.blob.core.windows.net/`
- `https://docupstorageeasteusdsto.blob.core.windows.net/` (Demo)
- `https://docupstoragejapajpepsto.blob.core.windows.net/`
- `https://docupstoragenortneupsto.blob.core.windows.net/`
- `https://docupstoragewestweupsto.blob.core.windows.net/`
- `https://docupstoragewestwu3dsto.blob.core.windows.net/` (Demo)

**Secondary Storage Endpoints** (for redundancy/failover):
- `https://docupstorageaustauepsto-secondary.blob.core.windows.net/`
- `https://docupstoragecanacacpsto-secondary.blob.core.windows.net/`
- `https://docupstoragecentcuspsto-secondary.blob.core.windows.net/`
- `https://docupstorageeasteu2psto-secondary.blob.core.windows.net/`
- `https://docupstorageeasteusdsto-secondary.blob.core.windows.net/` (Demo)
- `https://docupstoragejapajpepsto-secondary.blob.core.windows.net/`
- `https://docupstoragenortneupsto-secondary.blob.core.windows.net/`
- `https://docupstoragewestweupsto-secondary.blob.core.windows.net/`
- `https://docupstoragewestwu3dsto-secondary.blob.core.windows.net/` (Demo)

**Note**: You may whitelist all domains listed above, or contact your DocuSign administrator to determine which specific 
region(s) your account uses to minimize the whitelist scope.

**Supported File Formats & Content Types**:

The table below shows common file formats and their recommended Content-Type headers. 
**Note**: For the most up-to-date list of supported formats, headers, and constraints, always refer to the 
`_action_templates` object in the API response, which provides dynamic configuration including:
- `allowed_formats`: Current list of supported file extensions
- `headers`: Required HTTP headers with examples
- `constraints`: Maximum file size and other limits
- `success_status_code`: Expected response code for successful uploads

| Format | Extension | Content-Type |
|--------|-----------|--------------|
| PDF | .pdf | `application/pdf` |
| Word Document (2007+) | .docx | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| Word Document (Legacy) | .doc | `application/msword` |
| PowerPoint Presentation (2007+) | .pptx | `application/vnd.openxmlformats-officedocument.presentationml.presentation` |
| PowerPoint Presentation (Legacy) | .ppt | `application/vnd.ms-powerpoint` |
| PowerPoint Slideshow | .ppsx | `application/vnd.openxmlformats-officedocument.presentationml.slideshow` |
| Excel Workbook (2007+) | .xlsx | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| Excel Workbook (Legacy) | .xls | `application/vnd.ms-excel` |
| Excel Binary Workbook | .xlsb | `application/vnd.ms-excel.sheet.binary.macroenabled.12` |
| Rich Text Format | .rtf | `text/rtf` |
| WordPerfect Document | .wpd | `application/vnd.wordperfect` |
| HTML | .html, .htm | `text/html` |
| JPEG Image | .jpg, .jpeg | `image/jpeg` |
| PNG Image | .png | `image/png` |
| TIFF Image | .tif, .tiff | `image/tiff` |

**Example Upload Requests**:

PDF Document:
```
PUT https://storage.blob.core.windows.net/container/doc-id?signature=...
Content-Type: application/pdf
x-ms-blob-type: BlockBlob
x-ms-meta-filename: contract.pdf

[Binary PDF data]
```

Word Document:
```
PUT https://storage.blob.core.windows.net/container/doc-id?signature=...
Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document
x-ms-blob-type: BlockBlob
x-ms-meta-filename: agreement.docx

[Binary DOCX data]
```

Image:
```
PUT https://storage.blob.core.windows.net/container/doc-id?signature=...
Content-Type: image/jpeg
x-ms-blob-type: BlockBlob
x-ms-meta-filename: signed-page.jpg

[Binary JPEG data]
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createBulkUploadJob" method="post" path="/v1/accounts/{accountId}/upload/jobs" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.navigator.bulkJob.createBulkUploadJob({
    createBulkJob: {
      expectedNumberOfDocs: 2,
      jobName: "Q4 2025 Contracts",
      language: "en-US",
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
import { navigatorBulkJobCreateBulkUploadJob } from "@docusign/iam-sdk/funcs/navigatorBulkJobCreateBulkUploadJob.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await navigatorBulkJobCreateBulkUploadJob(iamClient, {
    createBulkJob: {
      expectedNumberOfDocs: 2,
      jobName: "Q4 2025 Contracts",
      language: "en-US",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("navigatorBulkJobCreateBulkUploadJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBulkUploadJobRequest](../../models/operations/createbulkuploadjobrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BulkJob](../../models/components/bulkjob.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrDetails  | 400, 401, 403, 429 | application/json   |
| errors.ErrDetails  | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## getBulkJobStatus

Get the current status and details of a bulk job.

[Required scopes](/docs/navigator-api/auth/): `document_uploader_read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBulkJobStatus" method="get" path="/v1/accounts/{accountId}/upload/jobs/{jobId}" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.navigator.bulkJob.getBulkJobStatus({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { navigatorBulkJobGetBulkJobStatus } from "@docusign/iam-sdk/funcs/navigatorBulkJobGetBulkJobStatus.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await navigatorBulkJobGetBulkJobStatus(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("navigatorBulkJobGetBulkJobStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBulkJobStatusRequest](../../models/operations/getbulkjobstatusrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BulkJob](../../models/components/bulkjob.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrDetails | 401, 403, 404     | application/json  |
| errors.ErrDetails | 500               | application/json  |
| errors.APIError   | 4XX, 5XX          | \*/\*             |

## uploadCompleteBulkJob

Mark the upload of documents as complete for a bulk job. 
End user won't upload more docs for this job.

**Important**: Only call this endpoint after successfully uploading all documents to their respective pre-signed URLs obtained from the create job response.

[Required scopes](/docs/navigator-api/auth/): `document_uploader_write`, `document_uploader_read`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadCompleteBulkJob" method="post" path="/v1/accounts/{accountId}/upload/jobs/{jobId}/actions/complete" -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.navigator.bulkJob.uploadCompleteBulkJob({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IamClientCore } from "@docusign/iam-sdk/core.js";
import { navigatorBulkJobUploadCompleteBulkJob } from "@docusign/iam-sdk/funcs/navigatorBulkJobUploadCompleteBulkJob.js";

// Use `IamClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const iamClient = new IamClientCore({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await navigatorBulkJobUploadCompleteBulkJob(iamClient, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("navigatorBulkJobUploadCompleteBulkJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadCompleteBulkJobRequest](../../models/operations/uploadcompletebulkjobrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BulkJob](../../models/components/bulkjob.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrDetails  | 400, 401, 403, 404 | application/json   |
| errors.ErrDetails  | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |