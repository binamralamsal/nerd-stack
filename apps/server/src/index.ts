import { swagger } from "@elysiajs/swagger";

import { Elysia } from "elysia";
import { env } from "./config/env";

const app = new Elysia()
  .use(
    swagger({
      documentation: { info: { title: "API Documentation", version: "0.0.0" } },
    })
  )
  .get("/", () => "Hello Elysia")
  .listen(env.PORT);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
