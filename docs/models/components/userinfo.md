# UserInfo

## Example Usage

```typescript
import { UserInfo } from "@docusign/iam-sdk/models/components";

let value: UserInfo = {
  sub: "4799e5e9-xxxx-xxxx-xxxx-cf4713bbcacc",
  name: "First Last",
  givenName: "First",
  familyName: "Last",
  created: "2015-08-13T22:03:03.45",
  email: "first.last@example.com",
  accounts: [
    {
      accountId: "a4ec37d6-xxxx-xxxx-xxxx-143885c333aa",
      isDefault: false,
      accountName: "Example Europe Ltd",
      baseUri: "https://eu.docusign.net",
    },
    {
      accountId: "a4ec37d6-xxxx-xxxx-xxxx-143885c220e1",
      isDefault: true,
      accountName: "Example Corporation",
      baseUri: "https://na3.docusign.net",
      organization: {
        organizationId: "9c5fb8e1-xxxx-xxxx-xxxx-054ff8a249bf",
        links: [
          {
            rel: "self",
            href:
              "https://account.domain.example.com/organizations/9c5fb8e1-xxxx-xxxx-xxxx-054ff8a249bf",
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `sub`                                                      | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `givenName`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `familyName`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `created`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `email`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `accounts`                                                 | [components.Account](../../models/components/account.md)[] | :heavy_check_mark:                                         | N/A                                                        |