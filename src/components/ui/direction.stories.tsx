import type { Meta, StoryObj } from "@storybook/react"
import { DirectionProvider } from "@/components/ui/direction"

const meta: Meta<typeof DirectionProvider> = { title: "UI/Direction", component: DirectionProvider }
export default meta
type Story = StoryObj<typeof DirectionProvider>

export const LTR: Story = {
  render: () => <DirectionProvider dir="ltr"><p className="p-4">Left-to-right layout</p></DirectionProvider>,
}
export const RTL: Story = {
  render: () => <DirectionProvider dir="rtl"><p className="p-4">Right-to-left layout</p></DirectionProvider>,
}
