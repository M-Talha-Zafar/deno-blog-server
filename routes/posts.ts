import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import PostsController from "../controllers/posts.ts";

const router = new Router();

router.get("/posts", PostsController.getAllPosts);

router.post("/posts", PostsController.createPost);

router.put("/posts/:id", PostsController.updatePost);

router.delete("/posts/:id", PostsController.deletePost);

export default router;
