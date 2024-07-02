import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    PORT: z.string().transform((v) => +v),
  },
  runtimeEnv: process.env,
});