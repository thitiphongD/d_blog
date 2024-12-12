'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const PostByIDPage = () => {
    const params = useParams<{ id: string }>()

    return (
        <div>
            Post Slug: {params.id}
        </div>
    )
}

export default PostByIDPage