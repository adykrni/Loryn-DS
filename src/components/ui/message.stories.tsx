import type { Meta, StoryObj } from "@storybook/react"
import { Message, MessageAvatar, MessageContent, MessageGroup, MessageHeader } from "@/components/ui/message"

const meta: Meta<typeof Message> = { title: "UI/Message", component: Message }
export default meta
type Story = StoryObj<typeof Message>

export const Default: Story = {
  render: () => (
    <MessageGroup className="max-w-md">
      <Message>
        <MessageAvatar>LK</MessageAvatar>
        <MessageContent>
          <MessageHeader>Loryn</MessageHeader>
          <div className="rounded-lg bg-muted px-3 py-2">Welcome to the design system.</div>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
