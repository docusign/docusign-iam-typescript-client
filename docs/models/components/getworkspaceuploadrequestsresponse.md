# GetWorkspaceUploadRequestsResponse

Response containing a list of upload requests

## Example Usage

```typescript
import { GetWorkspaceUploadRequestsResponse } from "@docusign/iam-sdk/models/components";

let value: GetWorkspaceUploadRequestsResponse = {
  data: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [components.WorkspaceUploadRequest](../../models/components/workspaceuploadrequest.md)[] | :heavy_check_mark:                                                                       | The upload request list                                                                  |