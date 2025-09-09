# ErrorT

Bad Request - The request could not be understood or was missing required parameters.

## Example Usage

```typescript
import { ErrorT } from "@docusign/iam-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | A message describing the error.                                                               | An unexpected error occurred on the server.                                                   |
| `code`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | HTTP status code for the error.                                                               | 500                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the error occurred.                                                        | 2023-01-01T12:00:00Z                                                                          |