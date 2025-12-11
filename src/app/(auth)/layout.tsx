import AuthIllustration from "@/components/AuthIllustration";
import Image from "next/image";

export const metadata = {
  title: "Auth Layout",
  description: "Layout for this route group",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-screen h-screen bg-[#f7f7f7] lg:p-5 grid lg:grid-cols-2">
      <section className="">{children}</section>
      <div className=" lg:block hidden">
        <AuthIllustration />
      </div>
    </section>
  );
}
