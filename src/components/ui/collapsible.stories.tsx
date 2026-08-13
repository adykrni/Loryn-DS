import type { Meta, StoryObj } from "@storybook/react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Collapsible> = { title: "UI/Collapsible", component: Collapsible }
export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-full max-w-md space-y-2">
      <CollapsibleTrigger asChild><Button variant="outline">Toggle details</Button></CollapsibleTrigger>
      <CollapsibleContent className="rounded-lg border p-4 text-sm">Hidden content revealed on toggle.</CollapsibleContent>
    </Collapsible>
  ),
}
