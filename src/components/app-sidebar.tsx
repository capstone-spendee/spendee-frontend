'use client';

import { BookOpen, Building2, GalleryHorizontalEnd, ListTodo, MessageSquareText, MessagesSquare, Repeat, User } from 'lucide-react';
import type * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import logo from '../../public/image/new-log.png';
import { NavMain } from './nav-main';
import { NavProjects } from './nav-projects';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';
import Link from 'next/link';

const data = {
  user: {
    name: 'frontend',
    email: 'dev@spendee.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'How to use',
          url: '#',
        },
        {
          title: 'Information',
          url: '#',
        },
        {
          title: 'FAQ',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Feedback',
      url: '/dashboard/feedback',
      icon: MessageSquareText,
    },
  ],
  projects: [
    {
      name: 'Check Eligibility',
      url: '/dashboard/eligibility',
      icon: ListTodo,
      roll: [
        {
          name: 'personality',
          url: '#',
          icon: User,
        },
        {
          name: 'startup',
          url: '#',
          icon: Building2,
        },
      ],
    },
    {
      name: 'Consultation Ai',
      url: '/dashboard/consultation',
      icon: MessagesSquare,
    },
    {
      name: 'History Eligibility',
      url: '/dashboard/history',
      icon: GalleryHorizontalEnd,
    },
    {
      name: 'IDR to USD',
      url: '/dashboard/convert',
      icon: Repeat,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="inset"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className=""
            >
              <Link href="/dashboard">
                <Image
                  src={logo}
                  alt="logo"
                  width={90}
                  height={90}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
        <DropdownMenuSeparator />
        <NavSecondary
          items={data.navSecondary}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
