# TriggerHttpConfig

Configuration details specific to HTTP-triggered workflows. This object describes the
HTTP method and URL that will trigger the workflow, providing the endpoint and method
that should be used to initiate the workflow.


## Example Usage

```typescript
import { TriggerHttpConfig } from "@docusign/iam-sdk/models/components";

let value: TriggerHttpConfig = {
  method: "GET",
  url: "https://example.com/resource/123",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `method`                                                                                                                           | [components.Method](../../models/components/method.md)                                                                             | :heavy_minus_sign:                                                                                                                 | The HTTP method used to trigger the workflow. This defines the type of request<br/>that will initiate the workflow (e.g., GET, POST).<br/> | GET                                                                                                                                |
| `url`                                                                                                                              | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | https://example.com/resource/123                                                                                                   |