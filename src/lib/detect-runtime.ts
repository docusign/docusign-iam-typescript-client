type Process = {
  runtime: "deno" | "node" | "bun" | "browser" | "unknown";
  version: string;
};

/**
 * Detects the current runtime environment (Node.js, Deno, Bun, or Browser).
 */
export function detectRuntime(): Process {
  const gt: unknown = globalThis;

  if (isDeno(gt)) {
    return {
      runtime: "deno",
      version: gt.Deno.version.deno,
    };
  }

  if (isBun(gt)) {
    return {
      runtime: "bun",
      version: gt.Bun.version,
    };
  }

  if (isBrowser(gt)) {
    return {
      runtime: "browser",
      version: gt.navigator?.userAgent ?? "unknown",
    };
  }

  if (isNode(gt)) {
    return {
      runtime: "node",
      version: gt.process.versions.node,
    };
  }

  return {
    runtime: "unknown",
    version: "unknown",
  };
}

type DenoGlobalMinimal = { Deno: { version: { deno: string } } };
function isDeno(globalThisObj: unknown): globalThisObj is DenoGlobalMinimal {
  if (typeof globalThisObj !== "object" || globalThisObj === null) {
    return false;
  }

  if (!("Deno" in globalThisObj)) {
    return false;
  }

  return true;
}

type BunGlobalMinimal = { Bun: { version: string } };
function isBun(globalThisObj: unknown): globalThisObj is BunGlobalMinimal {
  if (typeof globalThisObj !== "object" || globalThisObj === null) {
    return false;
  }

  if (!("Bun" in globalThisObj)) {
    return false;
  }

  return true;
}

type NodeGlobalMinimal = { process: { versions: { node: string } } };
function isNode(globalThisObj: unknown): globalThisObj is NodeGlobalMinimal {
  if (typeof globalThis !== "object" || globalThis === null) {
    return false;
  }

  if (!("process" in globalThis)) {
    return false;
  }

  // Check if it has the node version property
  const process = (globalThisObj as any).process;
  return (
    typeof process === "object" &&
    process !== null &&
    "versions" in process &&
    typeof process.versions === "object" &&
    process.versions !== null &&
    "node" in process.versions
  );
}

type BrowserGlobalMinimal = {
  window: object;
  document: object;
  navigator?: { userAgent: string };
};
function isBrowser(
  globalThisObj: unknown,
): globalThisObj is BrowserGlobalMinimal {
  if (typeof globalThisObj !== "object" || globalThisObj === null) {
    return false;
  }

  // Check for the presence of window and document objects, which are browser-specific
  return (
    "window" in globalThisObj &&
    "document" in globalThisObj &&
    typeof globalThisObj.window === "object" &&
    typeof globalThisObj.document === "object"
  );
}
