import { Router } from "https://deno.land/x/oak/mod.ts";
import PostsController from "../controllers/posts.ts";

const router = new Router();

router.get("/posts", PostsController.getAllPosts);

export default router;
