# GetWorkspacesResponse

## Example Usage

```typescript
import { GetWorkspacesResponse } from "@docusign/iam-sdk/models/components";

let value: GetWorkspacesResponse = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `workspaces`                                                                                                     | [components.WorkspaceSummary](../../models/components/workspacesummary.md)[]                                     | :heavy_minus_sign:                                                                                               | The workspace summary list. Includes the ID, name, and creation metadata                                         |
| `resultSetSize`                                                                                                  | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of workspaces returned in the response. Always equal or less than the `count` of the request          |
| `startPosition`                                                                                                  | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Position of the first item in the total results                                                                  |
| `endPosition`                                                                                                    | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Position of the last item in the total results                                                                   |
| `totalRowCount`                                                                                                  | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The total number of workspaces applicable to the request regardless of pagination. It may not always be computed |