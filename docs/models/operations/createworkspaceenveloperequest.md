# CreateWorkspaceEnvelopeRequest

## Example Usage

```typescript
import { CreateWorkspaceEnvelopeRequest } from "@docusign/iam-sdk/models/operations";

let value: CreateWorkspaceEnvelopeRequest = {
  accountId: "3a07e441-9089-40de-aaab-a761f58fa09b",
  workspaceId: "3b72c869-b976-48cf-909f-d5a130c9a91b",
  workspaceEnvelopeForCreate: {
    envelopeName: "<value>",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | The ID of the account                                                                               |
| `workspaceId`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | The ID of the workspace                                                                             |
| `workspaceEnvelopeForCreate`                                                                        | [components.WorkspaceEnvelopeForCreate](../../models/components/workspaceenvelopeforcreate.md)      | :heavy_check_mark:                                                                                  | The details of the envelope to be created including the list of document IDs to add to the envelope |