'use client';

import { BookOpen, Building2, GalleryHorizontalEnd, ListTodo, MessagesSquare, MessageSquareText, User, Bitcoin } from 'lucide-react';
import type * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import Image from 'next/image';
import logo from '../../public/image/logo.png';
import { NavMain } from './nav-main';
import { NavProjects } from './nav-projects';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

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
      name: 'History Eligibility',
      url: '/dashboard/history',
      icon: GalleryHorizontalEnd,
    },
    {
      name: 'Consultation Ai',
      url: '/dashboard',
      icon: MessagesSquare,
    },
    {
      name: 'IDR to USD',
      url: '/dashboard/convert',
      icon: Bitcoin,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    router.push('/sign-in');
  }, [router]);

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
              <a href="#">
                <Image
                  src={logo}
                  alt="logo"
                  width={110}
                  height={110}
                />
              </a>
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
        <div className="flex flex-col gap-2 w-full">
          <NavUser user={data.user} />
          <Button
            variant="outline"
            className="w-full mt-2"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
