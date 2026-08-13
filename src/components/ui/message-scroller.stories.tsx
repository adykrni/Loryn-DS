import type { Meta, StoryObj } from "@storybook/react"
import { MessageScroller, MessageScrollerContent, MessageScrollerProvider, MessageScrollerViewport } from "@/components/ui/message-scroller"

const meta: Meta<typeof MessageScroller> = { title: "UI/MessageScroller", component: MessageScroller }
export default meta
type Story = StoryObj<typeof MessageScroller>

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="h-48 w-full max-w-md rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="space-y-2 p-4">
            <p className="text-sm">Message one</p>
            <p className="text-sm">Message two</p>
            <p className="text-sm">Message three</p>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}
