import type { Meta, StoryObj } from "@storybook/react"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: "Request access" },
}

export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancel" },
}

export const Outline: Story = {
  args: { variant: "outline", children: "Learn more" },
}

export const Ghost: Story = {
  args: { variant: "ghost", children: "Dismiss" },
}

/** Contract variant `tertiary` — text-style action on subtle hover fill. */
export const Tertiary: Story = {
  args: { variant: "tertiary", children: "View details" },
}

export const Disabled: Story = {
  args: { children: "Request access", disabled: true },
}

export const Loading: Story = {
  args: { children: "Saving…", loading: true },
}

export const IconOnly: Story = {
  args: {
    size: "icon",
    variant: "primary",
    "aria-label": "Add item",
    children: <PlusIcon />,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
