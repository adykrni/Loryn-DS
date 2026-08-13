import type { Meta, StoryObj } from "@storybook/react"
import { ThemeProvider } from "next-themes"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

const meta: Meta<typeof Toaster> = { title: "UI/Sonner", component: Toaster }
export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Button onClick={() => toast("Event has been created")}>Show toast</Button>
      <Toaster />
    </ThemeProvider>
  ),
}
