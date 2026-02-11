# BulkJobStatus

Job lifecycle states:
* OPEN - Job created and accepting documents
* UPLOAD_COMPLETE - All documents have been received, and processing has not yet started
* IN_PROGRESS - Documents are being processed (AI extraction)
* COMPLETE - The full e2e process is complete
* FAILED - System error prevented job execution
* CANCELED - User initiated request to cancel a job


## Example Usage

```typescript
import { BulkJobStatus } from "@docusign/iam-sdk/models/components";

let value: BulkJobStatus = "OPEN";
```

## Values

```typescript
"OPEN" | "UPLOAD_COMPLETE" | "IN_PROGRESS" | "COMPLETE" | "FAILED" | "CANCELLED"
```