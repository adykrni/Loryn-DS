import type { Meta, StoryObj } from "@storybook/react"
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider,
} from "@/components/ui/sidebar"

const meta: Meta<typeof SidebarProvider> = { title: "UI/Sidebar", component: SidebarProvider }
export default meta
type Story = StoryObj<typeof SidebarProvider>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar className="relative h-64 w-64 border rounded-lg">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton isActive>Dashboard</SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton>Components</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  ),
}
