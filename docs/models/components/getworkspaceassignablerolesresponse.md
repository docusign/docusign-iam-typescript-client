# GetWorkspaceAssignableRolesResponse

## Example Usage

```typescript
import { GetWorkspaceAssignableRolesResponse } from "@docusign/iam-sdk/models/components";

let value: GetWorkspaceAssignableRolesResponse = {
  roles: [],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `roles`                                                                                                     | [components.WorkspaceRoleSummary](../../models/components/workspacerolesummary.md)[]                        | :heavy_check_mark:                                                                                          | The list of roles that can be assigned to the workspace                                                     |
| `resultSetSize`                                                                                             | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of roles returned in the response. Always equal or less than the `count` of the request          |
| `startPosition`                                                                                             | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Position of the first item in the total results                                                             |
| `endPosition`                                                                                               | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Position of the last item in the total results                                                              |
| `totalRowCount`                                                                                             | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The total number of roles applicable to the request regardless of pagination. It may not always be computed |
| `currentRoleId`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The optional ID of the current role. It may not always be computed                                          |