# Link

A URL that references a specific resource. 


## Example Usage

```typescript
import { Link } from "@docusign/iam-sdk/models/components";

let value: Link = {
  href:
    "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `href`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The URL for the referenced page.                                                | https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123 |