"use client"

import * as React from "react"
import { ArchiveX, Command, File, Inbox, MessageCircle, MessageCircleMore, PenBox, Send, Trash2 } from "lucide-react"

import { NavUser } from "./nav-user"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { getDiagnosticsConversations, getConseilsConversations } from "@/services/services";
import { useRouter, useSearchParams, usePathname } from "next/navigation"

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Context",
      url: "/context",
      icon: PenBox,
      isActive: true,
    },
    {
      title: "Diagnostics",
      url: "/diagnostics",
      icon: MessageCircle,
      isActive: false,
    },
    {
      title: "Conseils",
      url: "/conseils",
      icon: MessageCircle,
      isActive: false,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  // Trouve l'item actif selon l'url courante
  const initialActive = React.useMemo(() => {
    return data.navMain.find(item => pathname.startsWith(item.url)) || data.navMain[0];
  }, [pathname]);
  const [activeItem, setActiveItem] = React.useState(initialActive);
  const [conversations, setConversations] = React.useState<any[]>([]);
  const [loadingConvos, setLoadingConvos] = React.useState(false);
  const { setOpen } = useSidebar()
  const searchParams = useSearchParams()
  const uid = searchParams.get('id')

  // Fonction pour charger les conversations selon le type
  const fetchConversations = async (type: "Diagnostics" | "Conseils") => {
    setLoadingConvos(true);
    console.log('hello')
    try {
      let result = [];
      if (type === "Diagnostics") {
        result = await getDiagnosticsConversations();
      } else {
        result = await getConseilsConversations();
      }
      if (result.status) {
        console.log(result)
        // On suppose que l'API retourne un tableau de conversations
        setConversations(result.conversations || result || []);
      }
    } catch (e) {
      console.log("erreur:", e)
      setConversations([]);
    } finally {
      setLoadingConvos(false);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const pathname = window.location.pathname;
      let type: "Diagnostics" | "Conseils" = "Diagnostics";
      if (pathname.includes("conseils")) {
        type = "Conseils";
      } else if (pathname.includes("diagnostics")) {
        type = "Diagnostics";
      }
      await fetchConversations(type);
    }
    fetchData()
  }, [])

  return (
    <Sidebar
      collapsible="icon"
      className={`overflow-hidden *:data-[sidebar=sidebar]:flex-row`}
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className={`w-[calc(var(--sidebar-width-icon)+1px)]! border-r`}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="/">
                  <div className="bg-green-500 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    V
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">VetBot</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        if (item.title === "Context") {
                          setOpen(false)
                        } else {
                          setOpen(true)
                        }
                        // Charger les conversations selon le type
                        if (item.title === "Diagnostics" || item.title === "Conseils") {
                          fetchConversations(item.title as "Diagnostics" | "Conseils");
                        }
                      }}
                      isActive={activeItem?.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* Seconde sidebar : conversations */}
      <Sidebar collapsible="none" className={`hidden flex-1 ${activeItem?.title === "Context" ? "" : "md:flex"}`}>
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              {activeItem?.title}
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="w-80">
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {loadingConvos ? (
                <div className="p-4 text-sm text-gray-500">Chargement...</div>
              ) : conversations.length > 0 ? (
                conversations.map((conv, index, arr) => (
                  <a
                    href={
                      activeItem?.title === "Diagnostics"
                        ? `/diagnostics/${conv.id}`
                        : `/conseils/${conv.id}`
                    }
                    key={conv.id}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                  >
                    <div className="flex w-full items-center gap-2">
                      <span>Conversation {arr.length - index}</span>
                      <span className="ml-auto text-xs">{conv.created_at ? new Date(conv.created_at).toLocaleDateString() : ""}</span>
                    </div>
                    {/* <span className="font-medium">{conv.messages[0].content || "-"}</span>
                    <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
                      {conv.localisation || ""}
                    </span> */}
                  </a>
                ))
              ) : (
                <div className="p-4 text-sm text-gray-500">Aucune conversation</div>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}
