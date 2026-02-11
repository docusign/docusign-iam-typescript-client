# BulkJobMetadata

Properties about THIS request/response, not the job resource itself

## Example Usage

```typescript
import { BulkJobMetadata } from "@docusign/iam-sdk/models/components";

let value: BulkJobMetadata = {
  requestId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  responseDuration: 150,
  responseTimestamp: new Date("2025-10-27T19:11:42Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | a1b2c3d4-e5f6-7890-abcd-ef1234567890                                                          |
| `responseDuration`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | Time in ms to process this request                                                            | 150                                                                                           |
| `responseTimestamp`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When this response was generated                                                              | 2025-10-27T19:11:42Z                                                                          |