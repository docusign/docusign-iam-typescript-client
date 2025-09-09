# GetWorkspacesRequest

## Example Usage

```typescript
import { GetWorkspacesRequest } from "@docusign/iam-sdk/models/operations";

let value: GetWorkspacesRequest = {
  accountId: "02462d95-1c68-4c38-ab8c-e789246d5619",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The ID of the account                                                |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Number of workspaces to return. Defaults to the maximum which is 100 |
| `startPosition`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | Position of the first item in the total results. Defaults to 0       |