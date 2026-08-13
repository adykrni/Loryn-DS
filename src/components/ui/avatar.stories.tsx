import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const meta: Meta<typeof Avatar> = { title: "UI/Avatar", component: Avatar }
export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>LK</AvatarFallback>
    </Avatar>
  ),
}
export const Fallback: Story = {
  render: () => <Avatar><AvatarFallback>AD</AvatarFallback></Avatar>,
}
