import { Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function AppSidebar() {
  return (
    <Sidebar className="dark:bg-[#171717] dark:text-[#f9f9f9] border-r border-r-[#262626]">
      <SidebarContent>
        <SidebarGroup className="px-2 py-4">
          <SidebarGroupLabel className="mb-4">
            <span className="text-xl font-bold">YouLearn</span>
          </SidebarGroupLabel>
          <SidebarContent>
            <Button
              variant={"dashed"}
              className="dark:bg-[#222222] dark:text-[#f9f9f9] outline-dashed outline-2 px-2 -outline-offset-2 outline-slate-100/25 rounded-xl flex items-center justify-start font-medium"
            >
              <Plus className="w-8 h-8 text-gray-100" />
              Add content
            </Button>
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup className="mt-4 px-2">
          <SidebarGroupLabel>
            <span className="font-medium text-base">Welcome to YouLearn</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2 flex flex-col gap-3 mt-2 text-gray-400">
            <p>An AI tutor personalized to you.</p>

            <p>
              Understand your files, YouTube video, or recorded lecture through
              key concepts, familiar learning tools like flashcards, and
              interactive conversations.
            </p>

            <p>
              We’re constantly improving the platform, and if you have any
              feedback, we’d love to hear from you.
            </p>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarFooter className="bottom-8 absolute w-full">
          <SidebarContent>
            <p className="text-center text-sm text-slate-100/50">
              Sign in to continue
            </p>
            <Button className="bg-[#f9f9f9]">
              Sign in
            </Button>
          </SidebarContent>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
