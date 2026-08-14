import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"

/** CVA keys — kept in sync with contracts/button.contract.json (destructive deferred). */
export const BUTTON_CVA_VARIANTS = [
  "primary",
  "secondary",
  "tertiary",
  "outline",
  "ghost",
] as const

export const BUTTON_CVA_SIZES = ["sm", "md", "lg", "icon"] as const

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-md border bg-clip-padding",
    "text-sm font-medium whitespace-nowrap transition-colors outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-busy:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        tertiary:
          "border-transparent bg-transparent text-primary hover:bg-primary-subtle",
        outline:
          "border-border-strong bg-transparent text-foreground hover:bg-muted",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-muted",
      },
      size: {
        sm: "min-h-11 min-w-11 px-3 text-sm [&_svg:not([class*='size-'])]:size-4",
        md: "min-h-11 min-w-11 px-4 text-sm",
        lg: "min-h-11 min-w-11 px-5 text-base",
        icon: "size-11 min-h-11 min-w-11 p-0 [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  loading = false,
  disabled,
  type,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }) {
  const isDisabled = disabled || loading
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-loading={loading ? "" : undefined}
      disabled={asChild ? undefined : isDisabled}
      aria-disabled={asChild && isDisabled ? true : undefined}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      type={asChild ? undefined : type ?? "button"}
      {...props}
    >
      {loading ? (
        <>
          <Spinner aria-hidden className="size-4" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
