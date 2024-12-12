interface Props {
  id: string;
}

const PostByID: React.FC<Props> = async ({ id }) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Post</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold hover:underline hover:text-primary">
          {post.title}
        </h2>
      </div>
    </div>
  );
};

export default PostByID;
