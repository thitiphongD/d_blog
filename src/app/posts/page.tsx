import React, { Suspense } from 'react'
import PostComponent from "./components/PostComponent";
import SkeltionCardLoading from '@/components/loading/SkeltionCardLoading';

const PostPage = () => {
  return (
    <Suspense fallback={<SkeltionCardLoading />}>
      <PostComponent />
    </Suspense>
  )
};

export default PostPage