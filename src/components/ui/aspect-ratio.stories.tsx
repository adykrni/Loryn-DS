import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta: Meta<typeof AspectRatio> = { title: "UI/AspectRatio", component: AspectRatio }
export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="max-w-md overflow-hidden rounded-lg bg-muted">
      <div className="flex h-full items-center justify-center text-muted-foreground">16:9</div>
    </AspectRatio>
  ),
}
