# UpdateWorkspaceBrandRequest

## Example Usage

```typescript
import { UpdateWorkspaceBrandRequest } from "@docusign/iam-sdk/models/operations";

let value: UpdateWorkspaceBrandRequest = {
  accountId: "760a8a87-506f-4362-86b3-a3ab769be657",
  workspaceId: "91dee348-5fc2-4b34-b2a1-4994fdcded97",
  updateWorkspaceBrandBody: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `accountId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the account                                                                      |
| `workspaceId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the workspace                                                                    |
| `updateWorkspaceBrandBody`                                                                 | [components.UpdateWorkspaceBrandBody](../../models/components/updateworkspacebrandbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |