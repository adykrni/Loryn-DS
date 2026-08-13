import type { Meta, StoryObj } from "@storybook/react"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta: Meta<typeof Kbd> = { title: "UI/Kbd", component: Kbd }
export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {
  render: () => <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>,
}
