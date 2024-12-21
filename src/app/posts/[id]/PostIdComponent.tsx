import { Post } from '@/app/types'
import React from 'react'

interface PostComponentProps {
    post: Post
}

const PostIdComponent: React.FC<PostComponentProps> = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostIdComponent