import MobileNav from "@/components/MobileNav";
import NavBar from "@/components/NavBar";
import { Sidebar } from "@/components/Sidebar";
import { AuthProvider } from "@/contexts/AuthContext";

import { AuthFlowProvider } from "@/contexts/AuthFlowContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
export const metadata = {
  title: "Dash Layout",
  description: "Layout for this route group",
};

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthFlowProvider>
      <SidebarProvider>
        <section className="w-svw h-svh dark:bg-bg bg-neutral-120 flex  overflow-hidden">
          <AuthProvider>
            <Sidebar />
          </AuthProvider>

          <section className="w-full flex flex-col">
            <MobileNav />
            <NavBar />
            {children}
          </section>
        </section>
      </SidebarProvider>
    </AuthFlowProvider>
  );
}
