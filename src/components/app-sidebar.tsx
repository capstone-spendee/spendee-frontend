'use client';

import { BookOpenCheck, GalleryHorizontalEnd, ListTodo, MessageSquareText, MessageSquareTextIcon, MessagesSquare, Repeat } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

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

const DEFAULT_USER = {
  name: 'User1',
  email: 'user@email.com',
  avatar: '/avatars/shadcn.jpg',
};

const data = {
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

function normalizeImageUrl(url: string) {
  if (!url) return DEFAULT_USER.avatar;
  if (url.startsWith("http")) return url;
  if (url.startsWith("/")) return url;
  return "/" + url;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const [user, setUser] = useState(DEFAULT_USER);

  // Ambil data user dari localStorage
  const syncUserFromLocalStorage = () => {
    const name = localStorage.getItem('userName') || DEFAULT_USER.name;
    const email = localStorage.getItem('userEmail') || DEFAULT_USER.email;
    const avatarRaw = localStorage.getItem('userProfilePic') || DEFAULT_USER.avatar;
    const avatar = normalizeImageUrl(avatarRaw);
    setUser({ name, email, avatar });
  };

  useEffect(() => {
    syncUserFromLocalStorage();
    // Listen custom event
    const handler = () => syncUserFromLocalStorage();
    window.addEventListener('userProfileUpdated', handler);
    return () => window.removeEventListener('userProfileUpdated', handler);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.clear();
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
            <Link href="/dashboard">
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
          <NavUser user={user} />
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
