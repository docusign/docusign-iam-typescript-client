# DocumentWarning

A warning encountered during document processing that did not prevent overall success.

## Example Usage

```typescript
import { DocumentWarning } from "@docusign/iam-sdk/models/components";

let value: DocumentWarning = {
  code: "METADATA_APPLICATION_FAILED",
  message: "Applying metadata failed",
  recoverable: true,
  remedy: "update_metadata",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `code`                                                                | *string*                                                              | :heavy_check_mark:                                                    | Machine-readable warning code                                         | METADATA_APPLICATION_FAILED                                           |
| `message`                                                             | *string*                                                              | :heavy_check_mark:                                                    | Human-readable warning summary                                        | Applying metadata failed                                              |
| `detail`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | Detailed diagnostic information about the warning                     |                                                                       |
| `recoverable`                                                         | *boolean*                                                             | :heavy_check_mark:                                                    | Whether this warning can be remediated by the client                  | true                                                                  |
| `remedy`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | Key referencing an action in `_actions` that can resolve this warning | update_metadata                                                       |