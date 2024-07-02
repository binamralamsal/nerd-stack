import { edenTreaty } from "@elysiajs/eden";
import type { App } from "server";

export const api: ReturnType<typeof edenTreaty<App>> = edenTreaty<App>(
  "http://0.0.0.0:3001/"
);
