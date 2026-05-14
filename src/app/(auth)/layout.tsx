import AuthIllustration from "@/components/auth/components/AuthIllustration";
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
      <section className="w-svw h-svh bg-bg lg:p-5 grid lg:grid-cols-2 overflow-hidden">
        <section className="">{children}</section>
        <div className=" lg:block hidden">
          <AuthIllustration />
        </div>
      </section>
    </Suspense>
  );
}
