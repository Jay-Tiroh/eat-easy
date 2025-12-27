import MobileNav from "@/components/MobileNav";
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
        <section className="w-screen h-screen bg-bg flex gap-10 overflow-hidden">
          <AuthProvider>
            <Sidebar />
          </AuthProvider>

          <section className="w-full flex flex-col">
            <MobileNav />
            {children}
          </section>
        </section>
      </SidebarProvider>
    </AuthFlowProvider>
  );
}
