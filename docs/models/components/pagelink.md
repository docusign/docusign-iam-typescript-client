# PageLink

A URL that references a specific page in the pagination process. This is typically used for navigation
between paginated results.


## Example Usage

```typescript
import { PageLink } from "@docusign/iam-sdk/models/components";

let value: PageLink = {
  href:
    "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `href`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The URL for the referenced page.                                                | https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123 |