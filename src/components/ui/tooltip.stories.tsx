import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const meta: Meta<typeof Tooltip> = { title: "UI/Tooltip", component: Tooltip }
export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
}
