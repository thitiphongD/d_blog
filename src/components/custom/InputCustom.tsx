import * as React from "react"

import { cn } from "@/lib/utils"

const InputCustom = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "w-full text-xs border rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-200 shadow-sm focus:shadow",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
InputCustom.displayName = "Input"

export { InputCustom }


