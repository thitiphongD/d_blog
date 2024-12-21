import { Post } from "@/app/types";
import PostIdComponent from "./PostIdComponent";
import { Suspense } from "react";
import SkeltionCardLoading from "@/components/loading/SkeltionCardLoading";

const getPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "force-cache", // Cache indefinitely until deployment
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch post with id: ${id}`);
  }
  return res.json();
};

const PostByIDPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <Suspense fallback={<SkeltionCardLoading />}>
        <PostIdComponent post={post} />
      </Suspense>
    </div>
  );
};

export default PostByIDPage;