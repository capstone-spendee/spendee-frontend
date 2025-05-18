'use client';

import { MoreHorizontal, type LucideIcon } from 'lucide-react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';

interface Roll {
  name: string;
  url: string;
  icon: LucideIcon;
}
interface Project {
  name: string;
  url: string;
  icon: LucideIcon;
  roll?: Roll[];
}
interface ProjectListProps {
  projects: Project[];
}

export function NavProjects({ projects }: ProjectListProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Feature</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild size={isMobile ? "sm" : "lg"}>
              <a href={item.url}>
                <item.icon/>
                <span className='font-medium'>{item.name}</span>
              </a>
            </SidebarMenuButton>
              {item.roll && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48"
                  side={isMobile ? 'bottom' : 'right'}
                  align={isMobile ? 'end' : 'start'}
                >
                  <>
                    {item.roll.map((roll, index) => (
                      <DropdownMenuItem key={index}>
                        <roll.icon />
                        <span className='font-medium'>{roll.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </>
                </DropdownMenuContent>
            </DropdownMenu>
              )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
