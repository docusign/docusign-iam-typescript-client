# CreateWorkspaceRequest

## Example Usage

```typescript
import { CreateWorkspaceRequest } from "@docusign/iam-sdk/models/operations";

let value: CreateWorkspaceRequest = {
  accountId: "74bac16e-0f86-4791-abd4-3a41b935e0b7",
  createWorkspaceBody: {
    name: null,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the account                                                            |
| `createWorkspaceBody`                                                            | [components.CreateWorkspaceBody](../../models/components/createworkspacebody.md) | :heavy_check_mark:                                                               | The details of the workspace to be created including the name                    |