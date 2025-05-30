import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface SecondaryButtonProps extends ButtonProps {
  arrow?: boolean
  rounded?: "full" | "none" | "sm" | "default"
  shadow?: boolean
  asChild?: boolean
}

export const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, children, arrow = false, rounded = "default", shadow = true, asChild, ...props }, ref) => {
    const roundedClasses = {
      full: "rounded-full",
      none: "rounded-none",
      sm: "rounded-sm",
      default: "rounded-lg"
    }

    const flexClasses = asChild ? "" : "flex items-center justify-center gap-2"

    return (
      <Button
        ref={ref}
        variant="outline"
        asChild={asChild}
        className={cn(
          "bg-transparent border-white text-white hover:bg-white/20 font-medium py-3 px-6 transition-all duration-300 transform hover:-translate-y-0.5",
          flexClasses,
          shadow && "shadow-lg hover:shadow-xl",
          roundedClasses[rounded],
          rounded === "full" && "px-6",
          className
        )}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {children}
            {arrow && <ArrowRight className="h-4 w-4" />}
          </>
        )}
      </Button>
    )
  }
)

SecondaryButton.displayName = "SecondaryButton" 