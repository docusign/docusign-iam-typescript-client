# PageLinks

Hypermedia controls (HATEOAS) for navigating between pages in a paginated collection of results.
Links for the current page, next page, and previous page, with optional first and last page links.


## Example Usage

```typescript
import { PageLinks } from "@docusign/iam-sdk/models/components";

let value: PageLinks = {
  first: {
    href:
      "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
  },
  next: {
    href:
      "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
  },
  self: {
    href:
      "https://api.docusign.com/v1/accounts/12345678/agreements?limit=10&ctoken=abc123",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `first`                                                                                                                            | [components.PageLink](../../models/components/pagelink.md)                                                                         | :heavy_minus_sign:                                                                                                                 | A URL that references a specific page in the pagination process. This is typically used for navigation<br/>between paginated results.<br/> |
| `next`                                                                                                                             | [components.PageLink](../../models/components/pagelink.md)                                                                         | :heavy_minus_sign:                                                                                                                 | A URL that references a specific page in the pagination process. This is typically used for navigation<br/>between paginated results.<br/> |
| `self`                                                                                                                             | [components.PageLink](../../models/components/pagelink.md)                                                                         | :heavy_minus_sign:                                                                                                                 | A URL that references a specific page in the pagination process. This is typically used for navigation<br/>between paginated results.<br/> |