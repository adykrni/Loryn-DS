import type { Meta, StoryObj } from "@storybook/react"
import { Marker, MarkerContent } from "@/components/ui/marker"

const meta: Meta<typeof Marker> = { title: "UI/Marker", component: Marker }
export default meta
type Story = StoryObj<typeof Marker>

export const Default: Story = {
  render: () => <Marker><MarkerContent>1</MarkerContent></Marker>,
}
