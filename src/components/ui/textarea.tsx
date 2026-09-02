import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-none bg-[#f4f4f4] px-4 py-3 text-sm text-[#161616] tracking-[0.16px] placeholder:text-[#8c8c8c] border-b border-[#8d8d8d] border-t-0 border-l-0 border-r-0 focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-b-[#0f62fe] disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
