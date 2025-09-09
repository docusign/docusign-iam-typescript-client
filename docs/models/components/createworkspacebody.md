# CreateWorkspaceBody

## Example Usage

```typescript
import { CreateWorkspaceBody } from "@docusign/iam-sdk/models/components";

let value: CreateWorkspaceBody = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                 | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The name of the workspace                                                                                                                                              |
| `brandId`                                                                                                                                                              | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | A GUID value that identifies a brand. For more information, see <a href="https://developers.docusign.com/docs/esign-rest-api/esign101/concepts/branding/">Branding</a> |