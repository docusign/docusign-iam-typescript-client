# ValidationError

A single field-level or parameter-level validation error.

## Example Usage

```typescript
import { ValidationError } from "@docusign/iam-sdk/models/components";

let value: ValidationError = {
  code: "invalid_email",
  message: "The provided email format is incorrect.",
  target: "email",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `code`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | A machine-readable error code identifying the specific validation failure. | invalid_email                                                              |
| `message`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | A human-readable description of the validation error.                      | The provided email format is incorrect.                                    |
| `target`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | The name of the field, parameter, or path segment that caused the error.   | email                                                                      |