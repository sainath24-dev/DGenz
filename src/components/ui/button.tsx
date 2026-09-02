import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-normal tracking-[0.16px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f62fe] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#0f62fe] text-white hover:bg-[#0353e9] active:bg-[#002d9c] border border-transparent",
        primary:
          "bg-[#0f62fe] text-white hover:bg-[#0353e9] active:bg-[#002d9c] border border-transparent",
        secondary:
          "bg-[#161616] text-white hover:bg-[#393939] active:bg-[#525252] border border-transparent",
        tertiary:
          "bg-white text-[#0f62fe] border border-[#0f62fe] hover:bg-[#0f62fe] hover:text-white",
        outline:
          "border border-[#e0e0e0] bg-white text-[#161616] hover:bg-[#f4f4f4]",
        ghost:
          "bg-transparent text-[#0f62fe] hover:bg-[#f4f4f4]",
        destructive:
          "bg-[#da1e28] text-white hover:bg-[#ba1b23] border border-transparent",
        link:
          "text-[#0f62fe] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-4 py-3",
        sm: "h-9 px-3 py-1.5 text-xs",
        lg: "h-14 px-6 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
