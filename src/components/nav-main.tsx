'use client';

import { type LucideIcon } from 'lucide-react';

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import Link from 'next/link';

interface Roll {
  name: string;
  url: string;
  icon: LucideIcon;
}
interface Documents {
  name: string;
  url: string;
  icon: LucideIcon;
  roll?: Roll[];
}
interface DocumentListProps {
  documents: Documents[];
}

export function NavDocumentation({ documents }: DocumentListProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documentation</SidebarGroupLabel>
      <SidebarMenu>
        {documents.map((item) => (
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
