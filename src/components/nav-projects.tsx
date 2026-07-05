'use client';

import { type LucideIcon } from 'lucide-react';

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      {/* <SidebarGroupLabel>Feature</SidebarGroupLabel> */}
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild isActive={pathname === item.url}
                tooltip={item.name}>
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
