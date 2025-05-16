"use client"

import type * as React from "react"
import { BookOpen, House, MessageSquareText, ListTodo, User, Building2, Send} from "lucide-react"

import Image from "next/image"
import logo from "../../public/image/logo.png"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [  
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "How to use",
          url: "#",
        },
        {
          title: "information",
          url: "#",
        }
      ],
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    }
  ],
  projects: [
    {
      name: "Home",
      url: "#",
      icon: House,
    },
    {
      name: "Check Eligibility",
      url: "#",
      icon: ListTodo,
      roll:[
        {
          name: "personality",
          url: "#",
          icon: User,
        },
        {
          name: "startup",
          url: "#",
          icon: Building2,
        }
      ]
    },
    {
      name: "Consultation",
      url: "#",
      icon: MessageSquareText,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="flex justify-center">
              <a href="#">
                <Image src={logo} alt="logo" width={100} height={100} />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
