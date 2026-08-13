import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = { title: "UI/Button", component: Button }
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: "Request access" } }
export const Secondary: Story = { args: { variant: "secondary", children: "Cancel" } }
