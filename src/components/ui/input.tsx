import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-none bg-[#f4f4f4] px-4 py-[11px] text-sm text-[#161616] tracking-[0.16px] placeholder:text-[#8c8c8c] border-b border-[#8d8d8d] border-t-0 border-l-0 border-r-0 focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-b-[#0f62fe] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
