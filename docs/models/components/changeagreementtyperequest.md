# ChangeAgreementTypeRequest

Request body for changing an agreement's type.

## Example Usage

```typescript
import { ChangeAgreementTypeRequest } from "@docusign/iam-sdk/models/components";

let value: ChangeAgreementTypeRequest = {
  type: "MSA_DOCUMENT_DATA",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The name of the target agreement type from the agreement-types collection. | MSA_DOCUMENT_DATA                                                          |