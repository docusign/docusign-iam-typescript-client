# RevokeWorkspaceUserDetails

## Example Usage

```typescript
import { RevokeWorkspaceUserDetails } from "@docusign/iam-sdk/models/components";

let value: RevokeWorkspaceUserDetails = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `revocationDate`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | The optional date in the future to initiate the revocation. If not specified, the revocation will be immediate |