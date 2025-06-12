<!-- Start SDK Example Usage [usage] -->
```typescript
import { IamClient } from "@docusign/iam-sdk";

const iamClient = new IamClient({
  accessToken: process.env["DOCUSIGN_IAM_CLIENT_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await iamClient.auth.getUserInfo();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->