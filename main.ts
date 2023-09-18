import { Application } from "https://deno.land/x/oak/mod.ts";
import postsRoutes from "./routes/posts.ts";

const app = new Application();

app.use(postsRoutes.routes());
app.use(postsRoutes.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 3000 });
