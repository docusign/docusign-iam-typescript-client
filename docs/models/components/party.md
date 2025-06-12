# Party

A party is a person, group, or organization that is involved in a contract and has legally binding obligations and responsibilities. They also seek to benefit from the agreement.


## Example Usage

```typescript
import { Party } from "@docusign/iam-sdk/models/components";

let value: Party = {
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Unique identifier for the party, mapped to the party entity reference. |
| `nameInAgreement`                                                      | *string*                                                               | :heavy_minus_sign:                                                     | Name of the party as it appears in the agreement.                      |
| `preferredName`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Formal name of the party.                                              |