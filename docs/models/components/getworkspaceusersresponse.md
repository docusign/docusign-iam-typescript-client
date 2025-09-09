# GetWorkspaceUsersResponse

## Example Usage

```typescript
import { GetWorkspaceUsersResponse } from "@docusign/iam-sdk/models/components";

let value: GetWorkspaceUsersResponse = {
  users: [],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                                      | [components.WorkspaceUserSummary](../../models/components/workspaceusersummary.md)[]                                         | :heavy_check_mark:                                                                                                           | The user summary list. Includes the ID, name, and metadata such as the role ID and role name                                 |
| `resultSetSize`                                                                                                              | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The number of users returned in the response. Always equal or less than the `count` of the request                           |
| `startPosition`                                                                                                              | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Position of the first item in the total results                                                                              |
| `endPosition`                                                                                                                | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Position of the last item in the total results                                                                               |
| `totalRowCount`                                                                                                              | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The total number of users in the workspace applicable to the request regardless of pagination. It may not always be computed |