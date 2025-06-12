# TabConnectedFieldsData

## Example Usage

```typescript
import { TabConnectedFieldsData } from "@docusign/iam-sdk/models/components";

let value: TabConnectedFieldsData = {
  typeSystemNamespace: "<value>",
  typeName: "<value>",
  supportedOperation: "VerifyType",
  propertyName: "<value>",
  supportedUri: "https://austere-negotiation.info",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `typeSystemNamespace`                                                          | *string*                                                                       | :heavy_check_mark:                                                             | The fully qualified namespace for the type system being verified.              |
| `typeName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Name of the type being verified.                                               |
| `supportedOperation`                                                           | [components.SupportedOperation](../../models/components/supportedoperation.md) | :heavy_check_mark:                                                             | The operation that the field supports.                                         |
| `propertyName`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | The name of the individual field being verified.                               |
| `supportedUri`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | Indicates the type verification url of the field.                              |