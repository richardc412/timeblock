
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import SidebarCalendar from "./SidebarCalendar"
import { Button } from "./ui/button"

 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pl-4">Calendar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex justify-center items-center">
            <SidebarCalendar></SidebarCalendar>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
                <SidebarGroup>
          <SidebarGroupLabel className="pl-4">Zones</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex justify-center items-center">
              <Button>
                Test
              </Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}