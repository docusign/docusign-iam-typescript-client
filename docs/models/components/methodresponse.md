# MethodResponse

The HTTP method used to trigger the workflow. This defines the type of request
that will initiate the workflow (e.g., GET, POST).


## Example Usage

```typescript
import { MethodResponse } from "@docusign/iam-sdk/models/components";

let value: MethodResponse = "GET";
```

## Values

```typescript
"GET" | "POST" | "PUT" | "PATCH" | "DELETE"
```