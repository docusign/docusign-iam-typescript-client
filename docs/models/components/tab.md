# Tab

## Example Usage

```typescript
import { Tab } from "@docusign/iam-sdk/models/components";

let value: Tab = {
  extensionData: {
    extensionGroupId: "<id>",
    actionInputKey: "<value>",
    requiredForExtension: false,
  },
  tabType: "<value>",
  tabLabel: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `extensionData`                                                            | [components.TabExtensionData](../../models/components/tabextensiondata.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `tabType`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Indicates the type of tab                                                  |
| `validationPattern`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | A regular expression used to validate input for the tab.                   |
| `validationMessage`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | The message displayed if the custom tab fails input validation             |
| `tabLabel`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | The label associated to a verification field in a document.                |
| `radios`                                                                   | *string*[]                                                                 | :heavy_minus_sign:                                                         | The radio button properties for the tab (if the tab is of radio type)      |