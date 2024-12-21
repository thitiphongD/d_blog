import React from "react";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Post } from "@/app/types";

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://dummyjson.com/posts?limit=5");
  const data = await res.json();
  return data.posts;
};

const PostComponent = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-5">
          <div className="flex justify-between items-center">
            <Link
              href={`/posts/${post.id}`}
              className="text-xl font-semibold hover:underline hover:text-primary"
            >
              {post.title}
            </Link>
            <div className="flex gap-2 my-2">
              <div className="flex gap-2">
                <ThumbsUp className="w-4 h-4" />
                <p className="text-xs">{post.reactions.likes}</p>
              </div>
              <div className="flex gap-2">
                <ThumbsDown className="w-4 h-4" />
                <p className="text-xs">{post.reactions.dislikes}</p>
              </div>
            </div>
          </div>
          <p className="text-xs">{post.body}</p>
          <div className="flex items-center gap-2 justify-between mt-2">
            <div className="flex gap-2">
              <p className="text-xs">{post.views}</p>
              <Eye className="w-4 h-4" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag, index) => (
                <Badge key={index}>#{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
