import AuthIllustration from "@/components/AuthIllustration";
import { AuthFlowProvider } from "@/contexts/AuthFlowContext";
import Image from "next/image";
import { Suspense } from "react";
import loading from "../loading";
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
    <Suspense fallback={loading()}>
      <AuthFlowProvider>
        <section className="w-screen h-screen bg-bg lg:p-5 grid lg:grid-cols-2 overflow-hidden">
          <section className="">{children}</section>
          <div className=" lg:block hidden">
            <AuthIllustration />
          </div>
        </section>
      </AuthFlowProvider>
    </Suspense>
  );
}
