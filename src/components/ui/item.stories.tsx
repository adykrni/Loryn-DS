import type { Meta, StoryObj } from "@storybook/react"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item"

const meta: Meta<typeof Item> = { title: "UI/Item", component: Item }
export default meta
type Story = StoryObj<typeof Item>

export const Default: Story = {
  render: () => (
    <ItemGroup className="max-w-sm">
      <Item>
        <ItemContent>
          <ItemTitle>Design tokens</ItemTitle>
          <ItemDescription>Core and component token layers.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}
