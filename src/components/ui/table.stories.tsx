import type { Meta, StoryObj } from "@storybook/react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const meta: Meta<typeof Table> = { title: "UI/Table", component: Table }
export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table className="max-w-lg">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>Button</TableCell><TableCell>Ready</TableCell></TableRow>
        <TableRow><TableCell>Input</TableCell><TableCell>Ready</TableCell></TableRow>
      </TableBody>
    </Table>
  ),
}
