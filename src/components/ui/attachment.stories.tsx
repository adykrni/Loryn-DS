import type { Meta, StoryObj } from "@storybook/react"
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentTitle } from "@/components/ui/attachment"

const meta: Meta<typeof Attachment> = { title: "UI/Attachment", component: Attachment }
export default meta
type Story = StoryObj<typeof Attachment>

export const Default: Story = {
  render: () => (
    <Attachment className="max-w-sm">
      <AttachmentContent>
        <AttachmentTitle>design-spec.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
}
