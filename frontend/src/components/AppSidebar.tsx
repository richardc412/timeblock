import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarCalendar from "./SidebarCalendar";
import { Button } from "./ui/button";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Calendar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarCalendar />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Zones</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Button className="w-full">Test</Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
