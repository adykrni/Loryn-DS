import type { Meta, StoryObj } from "@storybook/react"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"

const meta: Meta<typeof InputGroup> = { title: "UI/InputGroup", component: InputGroup }
export default meta
type Story = StoryObj<typeof InputGroup>

export const Default: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}
