import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const meta: Meta<typeof Accordion> = { title: "UI/Accordion", component: Accordion }
export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Loryn?</AccordionTrigger>
        <AccordionContent>A contract-first design system.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do tokens work?</AccordionTrigger>
        <AccordionContent>Core tokens feed component tokens.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
