import type { Meta, StoryObj } from "@storybook/react"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

const meta: Meta<typeof ResizablePanelGroup> = { title: "UI/Resizable", component: ResizablePanelGroup }
export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6">Panel A</div></ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6">Panel B</div></ResizablePanel>
    </ResizablePanelGroup>
  ),
}
