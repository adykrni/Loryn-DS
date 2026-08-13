import type { Meta, StoryObj } from "@storybook/react"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta: Meta<typeof Field> = { title: "UI/Field", component: Field }
export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}
