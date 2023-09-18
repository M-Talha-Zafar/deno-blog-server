interface Post {
  id: number;
  title: string;
  body: string;
}

let posts: Post[] = [];

const PostsController = {
  getAllPosts: (ctx) => {
    ctx.response.body = { posts };
  },

  createPost: (ctx) => {
    const { title, body } = ctx.request.body;
    const newPost: Post = {
      id: posts.length + 1,
      title,
      body,
    };
  },

  updatePost: async (ctx) => {
    const data = await ctx.request.body();
    const { title, body } = data;
    const { id } = ctx.params;

    const post = posts.find((p) => p.id === parseInt(id));
  },

  deletePost: (ctx) => {
    const { id } = ctx.params;
    const post = posts.find((p) => p.id === parseInt(id));
  },
};

export default PostsController;
