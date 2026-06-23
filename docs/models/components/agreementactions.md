# AgreementActions

Available actions on the agreement. Actions are conditionally present based on the current state of the resource.


## Example Usage

```typescript
import { AgreementActions } from "@docusign/iam-sdk/models/components";

let value: AgreementActions = {
  changeType: {
    href:
      "/v1/accounts/{accountId}/agreements/{agreementId}/actions/change-type",
    method: "PATCH",
    description: "Change the agreement type to a different configured type.",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `changeType`                                                                                                | [components.AgreementActionsChangeType](../../models/components/agreementactionschangetype.md)              | :heavy_minus_sign:                                                                                          | Change the agreement type to a different configured type.<br/>Only present when the agreement type is mutable.<br/> |