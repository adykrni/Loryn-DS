import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea } from "@/components/ui/scroll-area"

const meta: Meta<typeof ScrollArea> = { title: "UI/ScrollArea", component: ScrollArea }
export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-48 rounded-md border p-4">
      {Array.from({ length: 20 }, (_, i) => <p key={i} className="text-sm">Item {i + 1}</p>)}
    </ScrollArea>
  ),
}
