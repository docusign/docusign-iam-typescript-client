# Organization

## Example Usage

```typescript
import { Organization } from "@docusign/iam-sdk/models/components";

let value: Organization = {
  organizationId: "<id>",
  links: [
    {
      rel: "<value>",
      href: "<value>",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `organizationId`                                     | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `links`                                              | [components.Link](../../models/components/link.md)[] | :heavy_check_mark:                                   | N/A                                                  |