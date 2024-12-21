import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SkeltionCardLoading = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[20vh] w-full rounded-xl" />
            <Skeleton className="h-[20vh] w-full rounded-xl" />
            <Skeleton className="h-[20vh] w-full rounded-xl" />
            <Skeleton className="h-[20vh] w-full rounded-xl" />
        </div>
    )
}

export default SkeltionCardLoading