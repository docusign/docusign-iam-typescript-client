# WorkspaceUserForCreate

## Example Usage

```typescript
import { WorkspaceUserForCreate } from "@docusign/iam-sdk/models/components";

let value: WorkspaceUserForCreate = {
  email: "Marcel_Bartoletti@yahoo.com",
  firstName: "Herminio",
  lastName: "DuBuque",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `email`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | The email address of the added user. May be an internal user to the account or an external user |
| `firstName`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | The first name of the added user                                                                |
| `lastName`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | The last name of the added user                                                                 |
| `roleId`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | The optional Role ID to assign to the user. Defaults to the "Participate" role                  |