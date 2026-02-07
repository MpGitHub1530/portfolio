import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables.
   * These are NEVER exposed to the browser.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    RESEND_API_KEY: z.string().min(1),
  },

  /**
   * Client-side environment variables.
   * Keep empty since you removed EmailJS.
   */
  client: {},

  /**
   * Runtime environment variables mapping.
   * Must exactly match keys defined above.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },

  /**
   * Allow skipping validation when explicitly requested.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Treat empty strings as undefined.
   */
  emptyStringAsUndefined: true,
});
