"use client";

import {
  BookOpenText,
  GalleryHorizontalEnd,
  ListTodo,
  MessageSquare,
  MessagesSquare,
  TableOfContents
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavProjects } from "./nav-projects";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "./ui/avatar";

const DEFAULT_USER = {
  name: "user",
  email: "user@email.com",
  avatar: "",
};

const data = {
  navSecondary: [
    {
      title: "How to use",
      url: "/dashboard/howtouse",
      icon: BookOpenText,
    },
    {
      title: "FAQ",
      url: "/dashboard/faq",
      icon: TableOfContents,
    },
    {
      title: "Feedback",
      url: "/dashboard/feedback",
      icon: MessageSquare,
    },
  ],
  projects: [
    {
      name: "Eligibility",
      url: "/dashboard/eligibility",
      icon: ListTodo,
    },
    {
      name: "History ",
      url: "/dashboard/history",
      icon: GalleryHorizontalEnd,
    },
    {
      name: "SpendeeBot",
      url: "/dashboard/consultation",
      icon: MessagesSquare,
    },
    // {
    //   name: "Idr - Usd",
    //   url: "/dashboard/convert",
    //   icon: Landmark,
    // },
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

  const syncUserFromLocalStorage = () => {
    const name = localStorage.getItem("userName") ?? DEFAULT_USER.name;
    const email = localStorage.getItem("userEmail") ?? DEFAULT_USER.email;
    const avatar = normalizeImageUrl(
      localStorage.getItem("userProfilePic") ?? DEFAULT_USER.avatar
    );
    setUser({ name, email, avatar });
  };

  useEffect(() => {
    syncUserFromLocalStorage();
    const handler = () => syncUserFromLocalStorage();
    window.addEventListener("userProfileUpdated", handler);
    return () => window.removeEventListener("userProfileUpdated", handler);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.clear();

    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
    router.push("/");
  }, [router]);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu className="mb-4 ">
          <SidebarMenuItem className="gap-2 flex flex-row items-center justify-between">
            <SidebarMenuButton
              tooltip={user.name}
              className="bg-card md:gap-1 min-w-8 border font-medium h-8 hover:bg-card duration-200 ease-linear"
            >
              <Link href="/" aria-label="Go to Spendee homepage">
                <Avatar className="relative flex shrink-0 overflow-hidden size-5 rounded-none">
                  <AvatarImage
                    className="flex size-full items-center justify-center capitalize font-bold text-muted-foreground rounded-sm dark:bg-foreground"
                    src="/image/icon.png"
                    width="38"
                    height="38"
                    alt="icon_danatour"
                  />
                </Avatar>
              </Link>
              <span className="text-xs truncate text-star max-w-32">{user.name}</span>
            </SidebarMenuButton>
            <div className="flex items-center gap-1.5 group-data-[collapsible=icon]:hidden">
              {/* <LocaleToggle /> */}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-col gap-2 w-full">
          <NavUser user={user} />
          <Button
            variant="outline"
            className="w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
