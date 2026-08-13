import type { Meta, StoryObj } from "@storybook/react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Empty> = { title: "UI/Empty", component: Empty }
export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: () => (
    <Empty className="max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">📭</EmptyMedia>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try adjusting your search or filters.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent><Button variant="outline" size="sm">Clear filters</Button></EmptyContent>
    </Empty>
  ),
}
