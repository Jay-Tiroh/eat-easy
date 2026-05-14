import MobileNav from "@/components/navigation/MobileNav";
import NavBar from "@/components/navigation/NavBar";
import { Sidebar } from "@/components/navigation/Sidebar";

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
    <section className="w-svw h-svh dark:bg-bg bg-neutral-120 flex  overflow-auto scroll-none">
      <Sidebar />

      <section className="w-full flex flex-col">
        <MobileNav />
        <NavBar />
        {children}
      </section>
    </section>
  );
}
