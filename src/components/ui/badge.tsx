import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-none border px-2 py-0.5 text-xs font-normal tracking-[0.32px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#0f62fe] text-white",
        secondary:
          "border-[#e0e0e0] bg-[#f4f4f4] text-[#161616]",
        outline:
          "border-[#e0e0e0] bg-white text-[#161616]",
        success:
          "border-transparent bg-[#24a148] text-white",
        warning:
          "border-transparent bg-[#f1c21b] text-[#161616]",
        destructive:
          "border-transparent bg-[#da1e28] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
