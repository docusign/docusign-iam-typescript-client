import { beforeEach, describe, expect, it, vi } from "vitest";
import { detectRuntime } from "../../src/lib/detect-runtime.js";

describe("Runtime Detection Utility", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.unstubAllGlobals();
  });

  it("should detect Node.js runtime", () => {
    vi.stubGlobal("process", { versions: { node: "test-node-version" } });

    const result = detectRuntime();

    expect(result).toEqual({ runtime: "node", version: "test-node-version" });
  });

  it("should detect Deno runtime", () => {
    vi.stubGlobal("Deno", { version: { deno: "test-deno-version" } });

    const result = detectRuntime();

    expect(result).toEqual({ runtime: "deno", version: "test-deno-version" });
  });

  it("should detect Bun runtime", () => {
    vi.stubGlobal("Bun", { version: "test-bun-version" });

    const result = detectRuntime();

    expect(result).toEqual({ runtime: "bun", version: "test-bun-version" });
  });

  it("should detect Browser runtime", () => {
    vi.stubGlobal("window", {});
    vi.stubGlobal("document", {});
    vi.stubGlobal("navigator", { userAgent: "test-browser-user-agent" });

    const result = detectRuntime();

    expect(result).toEqual({
      runtime: "browser",
      version: "test-browser-user-agent",
    });
  });
});
