# GetWorkspaceAssignableRolesRequest

## Example Usage

```typescript
import { GetWorkspaceAssignableRolesRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkspaceAssignableRolesRequest = {
  accountId: "a249ad95-6f4a-4210-b9d5-d1be00379bf1",
  workspaceId: "a3aa2af3-7b1c-4ca5-8092-228dc208fff0",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The ID of the account                                                                                       |
| `workspaceId`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The ID of the workspace                                                                                     |
| `filter`                                                                                                    | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A search filter that returns assignable roles by the beginning of the role name                             |
| `startPosition`                                                                                             | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The index position within the total result set from which to start returning values. The default value is 0 |
| `count`                                                                                                     | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The number of results to return. This value must be a number between 1 and 100 (default)                    |