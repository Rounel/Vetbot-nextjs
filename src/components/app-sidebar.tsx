"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
  } from "@/components/ui/sidebar"
import { MessageCircle, PenBox } from "lucide-react"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
   
// Menu items.
const items = [
  {
    title: "Context",
    url: "#",
    icon: PenBox,
  },
  {
    title: "Chat",
    url: "#",
    icon: MessageCircle,
  },

]

export function AppSidebar() {
    const {
      state,
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
    } = useSidebar()

    return (
      <Sidebar className="px-2" collapsible="icon">
        <SidebarHeader className="mb-10 text-lg font-bold flex flex-row justify-between">
          <Link href={"/"}>
            VetBot
          </Link>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent className="">
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel>Eléveurs connectés</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
        <SidebarRail />
      </Sidebar>
    )
  }