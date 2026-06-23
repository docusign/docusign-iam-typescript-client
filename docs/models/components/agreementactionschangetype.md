# AgreementActionsChangeType

Change the agreement type to a different configured type.
Only present when the agreement type is mutable.


## Example Usage

```typescript
import { AgreementActionsChangeType } from "@docusign/iam-sdk/models/components";

let value: AgreementActionsChangeType = {
  href: "/v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type",
  method: "PATCH",
  description: "Change the agreement type to a different configured type.",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `href`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | The URL for the change-type action.                                   | /v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type |
| `method`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The HTTP method for the action.                                       | PATCH                                                                 |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Human-readable description of the action.                             | Change the agreement type to a different configured type.             |