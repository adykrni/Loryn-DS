import type { Meta, StoryObj } from "@storybook/react"
import { BoldIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const meta: Meta<typeof Toggle> = { title: "UI/Toggle", component: Toggle }
export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => <Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>,
}
