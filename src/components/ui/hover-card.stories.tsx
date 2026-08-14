import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof HoverCard> = { title: "UI/HoverCard", component: HoverCard }
export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild><Button variant="tertiary">@loryn</Button></HoverCardTrigger>
      <HoverCardContent className="w-64">The Loryn design system — contract-first components.</HoverCardContent>
    </HoverCard>
  ),
}
