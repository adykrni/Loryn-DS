import type { Meta, StoryObj } from "@storybook/react"
import { Questionnaire, QuestionnaireDescription, QuestionnaireItem, QuestionnaireTitle } from "@/components/ui/questionnaire"

const meta: Meta<typeof Questionnaire> = { title: "UI/Questionnaire", component: Questionnaire }
export default meta
type Story = StoryObj<typeof Questionnaire>

export const Default: Story = {
  render: () => (
    <Questionnaire className="max-w-md">
      <QuestionnaireItem>
        <QuestionnaireTitle>Quick survey</QuestionnaireTitle>
        <QuestionnaireDescription>Help us improve the design system.</QuestionnaireDescription>
      </QuestionnaireItem>
    </Questionnaire>
  ),
}
