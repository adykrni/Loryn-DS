import { Button } from "@/components/ui/button"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8">
      <DarkModeToggle />
      <h1 className="text-2xl font-semibold text-foreground">Loryn Design System</h1>
      <p className="text-sm text-text-secondary">
        Surfaces use tinted gray; text uses neutral. Action uses teal.
      </p>
      <div className="flex gap-3">
        <Button>Request access</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <div className="w-full max-w-sm rounded-lg border border-border bg-surface-raised p-4">
        <p className="text-sm text-foreground">Raised surface card</p>
        <p className="text-sm text-text-secondary">Secondary text on surface</p>
      </div>
    </main>
  )
}
