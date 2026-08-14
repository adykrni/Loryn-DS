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
    "group/button inline-flex shrink-0 items-center justify-center bg-clip-padding",
    "rounded-md border font-sans leading-none whitespace-nowrap",
    "font-[var(--font-weight-medium)]",
    "transition-colors outline-none select-none",
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
          "border-[length:var(--border-1)] border-border-strong bg-transparent text-foreground hover:bg-muted",
        ghost:
          "border-transparent bg-transparent text-foreground hover:bg-muted",
      },
      size: {
        sm: "h-8 min-h-11 min-w-11 gap-1.5 px-3 text-xs rounded-sm",
        md: "h-10 min-h-11 min-w-11 gap-2 px-4 text-sm rounded-sm",
        lg: "h-12 min-h-11 min-w-11 gap-2.5 px-5 text-base rounded-lg",
        icon: "size-10 min-h-11 min-w-11 gap-0 px-0 rounded-sm",
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
