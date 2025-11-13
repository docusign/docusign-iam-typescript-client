# UpdateWorkspaceResponse

The details of a single workspace

## Example Usage

```typescript
import { UpdateWorkspaceResponse } from "@docusign/iam-sdk/models/components";

let value: UpdateWorkspaceResponse = {
  workspaceId: "23c8f1ba-6688-414c-88a8-0b687d4e849d",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the workspace                                                                       |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the workspace                                                                     |
| `createdDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the workspace was created                                                            |
| `createdByUserId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who created the workspace                                                  |
| `workspaceOwnerIds`                                                                           | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The list of user IDs of the workspace owners                                                  |