import type { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof ButtonGroup> = { title: "UI/ButtonGroup", component: ButtonGroup }
export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Label</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
    </ButtonGroup>
  ),
}
