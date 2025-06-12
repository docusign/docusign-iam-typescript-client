import {
  Awaitable,
  BeforeRequestContext,
  BeforeRequestHook,
} from "../types.js";
import { detectRuntime } from "../../lib/detect-runtime.js";

export class UserAgentHook implements BeforeRequestHook {
  beforeRequest(
    _hookCtx: BeforeRequestContext,
    request: Request,
  ): Awaitable<Request> {
    const userAgentString = request.headers.get("User-Agent");

    if (!userAgentString) {
      // technically not possible, but we'll fail gracefully
      // just in case
      return request;
    }

    const [_, SDK_VERSION, GEN_VERSION, OAS_VERSION, SDK_NAME] =
      userAgentString.split(" ");

    const { runtime, version: runtimeVersion } = detectRuntime();

    const userAgent = [
      "docusign-sdk",
      OAS_VERSION,
      SDK_VERSION,
      "typescript",
      `${runtime}_${runtimeVersion}`,
      GEN_VERSION,
      SDK_NAME,
    ].join("/");

    request.headers.set("User-Agent", userAgent);
    return request;
  }
}
