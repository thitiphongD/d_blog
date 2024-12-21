import { Post } from "@/app/types";
import PostComponent from "../components/PostComponent";

const getPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "force-cache", // Cache indefinitely until deployment
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch post with id: ${id}`);
  }
  return res.json();
};

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Destructure params to get the id
  const post = await getPost(id);
  return (
    <div>
      <PostComponent post={post} />
    </div>
  );
};

export default Page;