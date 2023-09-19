import { dango } from "https://deno.land/x/dangodb@v1.0.2/mod.ts";

const PostSchema = dango.schema({
  title: {
    type: "string",
    required: true,
    unique: false,
    default: null,
    validator: null,
  },
  body: {
    type: "string",
    required: true,
    unique: false,
    default: null,
    validator: null,
  },
});

const Post = dango.model("Post", PostSchema);

export default Post;
