import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import postsRoutes from "./routes/posts.ts";
import connectToMongo from "./helpers/db.ts";

connectToMongo();

const app = new Application();

app.use(postsRoutes.routes());
app.use(postsRoutes.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 3000 });
