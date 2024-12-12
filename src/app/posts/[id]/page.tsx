'use client'

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Post } from "@/app/types";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PostByIDPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        const data: Post = await res.json();
        setPost(data);
      } catch (err) {
        console.log(err instanceof Error ? err.message : "Unknown error");
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Post</h1>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold hover:text-primary">
            {post.title}
          </h2>
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
        <p className="text-base">{post.body}</p>
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
    </div>
  );
};

export default PostByIDPage