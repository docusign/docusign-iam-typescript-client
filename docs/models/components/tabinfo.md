# TabInfo

## Example Usage

```typescript
import { TabInfo } from "@docusign/iam-sdk/models/components";

let value: TabInfo = {
  appId: "<id>",
  tabs: [
    {
      extensionData: {
        extensionGroupId: "<id>",
        actionInputKey: "<value>",
        requiredForExtension: false,
      },
      tabType: "<value>",
      tabLabel: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `appId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | Unique ID of the installed extension app                                     |
| `tabs`                                                                       | [components.Tab](../../models/components/tab.md)[]                           | :heavy_check_mark:                                                           | Tab data representing the tabs associated with installed apps in the account |