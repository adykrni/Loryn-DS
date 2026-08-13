import type { Meta, StoryObj } from "@storybook/react"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

const meta: Meta<typeof NativeSelect> = { title: "UI/NativeSelect", component: NativeSelect }
export default meta
type Story = StoryObj<typeof NativeSelect>

export const Default: Story = {
  render: () => (
    <NativeSelect className="max-w-xs">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="orange">Orange</NativeSelectOption>
    </NativeSelect>
  ),
}
