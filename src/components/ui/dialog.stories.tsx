import type { Meta, StoryObj } from "@storybook/react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Dialog> = { title: "UI/Dialog", component: Dialog }
export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild><Button variant="outline">Open dialog</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request access</DialogTitle>
          <DialogDescription>Fill in your details to continue.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
}
