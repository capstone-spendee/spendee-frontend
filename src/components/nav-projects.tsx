'use client';

import { type LucideIcon } from 'lucide-react';

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import Link from 'next/link';

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
              <Link href={item.url} className='px-3'>
                <item.icon />
                <span className='font-medium px-1.5'>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
