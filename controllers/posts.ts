import Post from "../models/post.ts";
import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsController = {
  getAllPosts: (ctx: Context) => {
    ctx.response.body = { posts };
  },

  createPost: async (ctx: Context) => {
    const data = await ctx.request.body().value;

    const newPost = await Post.insertOne({
      title: data.title,
      body: data.body,
    });

    ctx.response.body = { message: "Post created successfully!", newPost };
  },

  updatePost: async (ctx: Context) => {
    const data = await ctx.request.body().value;
    const { title, body } = data;
    const { id } = ctx.params;

    const updatedPost: Post = {
      id: parseInt(id),
      title,
      body,
    };

    posts = posts.map((p) => (p.id === parseInt(id) ? updatedPost : p));
    ctx.response.body = { message: "Post updated successfully!", updatedPost };
  },

  deletePost: (ctx: Context) => {
    const { id } = ctx.params;
    const deletedPost = posts.find((p) => p.id === parseInt(id));
    if (!deletedPost) {
      ctx.response.status = 404;
      ctx.response.body = { message: "Post not found!" };
      return;
    }
    posts = posts.filter((p) => p.id === deletedPost.id);
    ctx.response.body = { message: "Post deleted successfully!", deletedPost };
  },
};

export default PostsController;
