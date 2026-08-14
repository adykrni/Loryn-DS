"use client"

import { Button } from "@/components/ui/button"

export function DarkModeToggle() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => document.documentElement.classList.toggle("dark")}
    >
      Toggle dark mode
    </Button>
  )
}
