import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "@/components/ui/separator"

const meta: Meta<typeof Separator> = { title: "UI/Separator", component: Separator }
export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xs space-y-2 text-sm">
      <p>Section one</p>
      <Separator />
      <p>Section two</p>
    </div>
  ),
}
