import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    PORT: z.string().transform((v) => +v),
    DATABASE_URL: z.string(),
    NODE_ENV: z.string(),
  },
  runtimeEnv: process.env,
});
