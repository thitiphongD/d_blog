import { Post } from "@/app/types";
import PostIdComponent from "./PostIdComponent";
import { Suspense } from "react";
import SkeltionCardLoading from "@/components/loading/SkeltionCardLoading";

const getPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch post with id: ${id}`);
  }
  return res.json();
};


const PostByIDPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <Suspense fallback={<SkeltionCardLoading />}>
      <PostIdComponent post={post} />
    </Suspense>
  );
};

export default PostByIDPage;