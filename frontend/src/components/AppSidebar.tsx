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

const EXAMPLE_ZONES = ["⛏️ Deep Work", "💼 Work", "🎮 Gaming", "💪 Workout"];

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
              {EXAMPLE_ZONES.map((zone) => {
                return <Button className="w-full">{zone}</Button>;
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
