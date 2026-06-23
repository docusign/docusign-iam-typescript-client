# ChangeAgreementTypeRequest

## Example Usage

```typescript
import { ChangeAgreementTypeRequest } from "@docusign/iam-sdk/models/operations";

let value: ChangeAgreementTypeRequest = {
  changeAgreementTypeRequest: {
    type: "MSA_DOCUMENT_DATA",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `agreementId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `changeAgreementTypeRequest`                                                                   | [components.ChangeAgreementTypeRequest](../../models/components/changeagreementtyperequest.md) | :heavy_check_mark:                                                                             | JSON payload specifying the target agreement type.                                             |