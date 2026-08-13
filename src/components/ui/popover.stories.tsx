import type { Meta, StoryObj } from "@storybook/react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Popover> = { title: "UI/Popover", component: Popover }
export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
      <PopoverContent className="w-64">Popover content goes here.</PopoverContent>
    </Popover>
  ),
}
