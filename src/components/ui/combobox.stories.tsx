import type { Meta, StoryObj } from "@storybook/react"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, useComboboxAnchor } from "@/components/ui/combobox"

const meta: Meta<typeof Combobox> = { title: "UI/Combobox", component: Combobox }
export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  render: function ComboboxStory() {
    const anchor = useComboboxAnchor()
    return (
      <Combobox>
        <div ref={anchor} className="w-full max-w-xs">
          <ComboboxInput placeholder="Select framework..." />
        </div>
        <ComboboxContent anchor={anchor}>
          <ComboboxList>
            <ComboboxItem value="next">Next.js</ComboboxItem>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxEmpty>No results.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}
