import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "@/components/ui/spinner"

const meta: Meta<typeof Spinner> = { title: "UI/Spinner", component: Spinner }
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = { render: () => <Spinner /> }
