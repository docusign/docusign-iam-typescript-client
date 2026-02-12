# AgreementLinks

Hypermedia controls (HATEOAS) for agreement specific links to resources.


## Example Usage

```typescript
import { AgreementLinks } from "@docusign/iam-sdk/models/components";

let value: AgreementLinks = {
  document: {
    href:
      "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `document`                                         | [components.Link](../../models/components/link.md) | :heavy_minus_sign:                                 | A URL that references a specific resource. <br/>   |