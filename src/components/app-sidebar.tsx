'use client';

import { BookOpenCheck, GalleryHorizontalEnd, ListTodo, MessageSquareText, MessageSquareTextIcon, MessagesSquare, Repeat } from 'lucide-react';
import type * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/image/icon.png';
import { NavDocumentation } from './nav-main';
import { NavProjects } from './nav-projects';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const data = {
  user: {
    name: 'frontend',
    email: 'dev@spendee.com',
    avatar: '/avatars/shadcn.jpg',
  },
  documentation: [
    {
      name: 'How to use',
      url: '/dashboard/howtouse',
      icon: BookOpenCheck,
    },
    {
      name: 'FAQ',
      url: '/dashboard/faq',
      icon: MessageSquareTextIcon,
    }
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
    },
    {
      name: 'SpendeeBot',
      url: '/dashboard/consultation',
      icon: MessagesSquare,
    },
    {
      name: 'History ',
      url: '/dashboard/history',
      icon: GalleryHorizontalEnd,
    },
    {
      name: 'IDR - USD',
      url: '/dashboard/convert',
      icon: Repeat,
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
          <SidebarMenuItem className='p-2 '>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={40}
                // height={90}
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavDocumentation documents={data.documentation} />
        {/* <DropdownMenuSeparator /> */}
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
