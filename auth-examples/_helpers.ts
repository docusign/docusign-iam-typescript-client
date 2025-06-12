/// <reference types="bun-types" />

/**
 * Starts a local server to listen for OAuth callback with authorization code or access token
 *
 * @param options - Configuration options for the server
 * @returns Promise that resolves with the received code or token
 */
export function listenForAuthCallback(
  options: {
    port?: number;
    path?: string;
    timeout?: number;
    verbose?: boolean;
  } = {},
): Promise<{ type: "code" | "token"; value: string }> {
  const {
    port = 3000,
    path = "/oauth2/callback",
    timeout = 300000, // 5 minutes default timeout
    verbose = false,
  } = options;

  return new Promise((resolve, reject) => {
    let timeoutId: Timer | null = null;

    // Set timeout to automatically reject and clean up
    if (timeout > 0) {
      timeoutId = setTimeout(() => {
        if (server) {
          server.stop();
          reject(new Error(`Authorization timed out after ${timeout}ms`));
        }
      }, timeout);
    }

    // Start the server
    const server = Bun.serve({
      port,
      development: false,
      fetch(req) {
        const url = new URL(req.url);

        // Only handle requests to the callback path
        if (url.pathname !== path) {
          return new Response("Not found", { status: 404 });
        }

        const code = url.searchParams.get("code");
        const token = url.searchParams.get("access_token");

        if (verbose) {
          console.log(`Received callback: ${url.toString()}`);
        }

        // Clear the timeout
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        if (code) {
          resolve({ type: "code", value: code });
          server.stop();
          return new Response("Code received! You can close this tab.");
        } else if (token) {
          resolve({ type: "token", value: token });
          server.stop();
          return new Response("Token received! You can close this tab.");
        } else {
          server.stop();
          return new Response(
            "There was a problem trying to get your code/token",
            { status: 400 },
          );
        }
      },
    });

    if (verbose) {
      console.log(
        `OAuth callback server listening on http://localhost:${port}${path}`,
      );
    }

    // Handle server errors and cleanup
    process.on("SIGINT", () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (server) server.stop();
      reject(new Error("Server stopped by user"));
    });
  });
}
