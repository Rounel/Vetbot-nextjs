import React from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <main className="flex-1 max-h-[100dvh] overflow-auto relative">
            <SidebarTrigger className="-ml-1 absolute top-2 left-2 z-20" />
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
