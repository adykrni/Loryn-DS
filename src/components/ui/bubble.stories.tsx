import type { Meta, StoryObj } from "@storybook/react"
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

const meta: Meta<typeof Bubble> = { title: "UI/Bubble", component: Bubble }
export default meta
type Story = StoryObj<typeof Bubble>

export const Default: Story = {
  render: () => (
    <BubbleGroup>
      <Bubble><BubbleContent>Hello from Loryn</BubbleContent></Bubble>
      <Bubble><BubbleContent>How can I help?</BubbleContent></Bubble>
    </BubbleGroup>
  ),
}
