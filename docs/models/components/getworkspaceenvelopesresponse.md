# GetWorkspaceEnvelopesResponse

## Example Usage

```typescript
import { GetWorkspaceEnvelopesResponse } from "@docusign/iam-sdk/models/components";

let value: GetWorkspaceEnvelopesResponse = {
  envelopes: [
    {
      envelopeId: "<id>",
      status: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `envelopes`                                                                                  | [components.WorkspaceEnvelopeSummary](../../models/components/workspaceenvelopesummary.md)[] | :heavy_check_mark:                                                                           | The summary list of envelopes associated with the workspace                                  |