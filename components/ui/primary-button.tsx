import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface PrimaryButtonProps extends ButtonProps {
  arrow?: boolean
  rounded?: "full" | "none" | "sm" | "default"
  shadow?: boolean
}

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, arrow = false, rounded = "default", shadow = true, ...props }, ref) => {
    const roundedClasses = {
      full: "rounded-full",
      none: "rounded-none",
      sm: "rounded-sm",
      default: ""
    }

    return (
      <Button
        ref={ref}
        variant="default"
        className={cn(
          "font-light transition-all",
          shadow && "shadow-md hover:shadow-lg",
          roundedClasses[rounded],
          rounded === "full" && "px-6",
          className
        )}
        {...props}
      >
        <span className="flex items-center">
          {children}
          {arrow && <ArrowRight className="ml-2 h-4 w-4" />}
        </span>
      </Button>
    )
  }
)

PrimaryButton.displayName = "PrimaryButton" 