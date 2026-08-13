import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const meta: Meta<typeof Alert> = { title: "UI/Alert", component: Alert }
export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Your request access flow is ready to review.</AlertDescription>
    </Alert>
  ),
}
