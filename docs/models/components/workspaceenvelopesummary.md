# WorkspaceEnvelopeSummary

The summary of the envelope in the workspace

## Example Usage

```typescript
import { WorkspaceEnvelopeSummary } from "@docusign/iam-sdk/models/components";

let value: WorkspaceEnvelopeSummary = {
  envelopeId: "<id>",
  status: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the envelope                                                                        |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The status of the envelope in the workspace                                                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The envelope name                                                                             |
| `subject`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The envelope subject                                                                          |
| `createdDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the envelope was created                                                             |
| `lastUpdatedDate`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the envelope was last updated                                                        |