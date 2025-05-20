import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#038ab2] via-[#6f42c1] to-[#c6697d] text-white shadow-lg",
        destructive:
          "bg-gradient-to-r from-[#e17a9] via-[#6f42c1] to-[#05b2fd] text-white hover:from-[#c6697d] hover:via-[#6f42c1] hover:to-[#038ab2]",
        outline:
          "border border-[#05b2fd] bg-transparent text-[#05b2fd] hover:bg-[#05b2fd] hover:text-white",
        secondary:
          "bg-gradient-to-r from-[#05b2fd]/20 to-[#e17a9]/20 text-[#05b2fd] hover:from-[#05b2fd]/30 hover:to-[#e17a9]/30",
        ghost:
          "text-[#05b2fd] hover:bg-[#e17a9]/10",
        link:
          "text-[#05b2fd] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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