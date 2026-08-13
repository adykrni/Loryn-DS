import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8">
      <h1 className="text-2xl font-semibold text-foreground">Loryn Design System</h1>
      <div className="flex gap-3">
        <Button>Request access</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </main>
  )
}
