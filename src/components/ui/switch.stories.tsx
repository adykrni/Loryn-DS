import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const meta: Meta<typeof Switch> = { title: "UI/Switch", component: Switch }
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
}
