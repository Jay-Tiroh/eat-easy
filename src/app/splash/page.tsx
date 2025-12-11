"use client";
import Image from "next/image";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/onboarding");
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div
      className="flex items-end p-10 w-screen h-screen relative"
      style={{
        background:
          "linear-gradient(to right, #fcfcfc, #f7f7f7, #f7f7f7, #f7f7f7, #fcfcfc)",
      }}
    >
      <div className="flex flex-col z-10">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={300}
          height={300}
          className="w-40 sm:block hidden"
        />
        <Image
          src="/assets/images/logo-sm.svg"
          alt="logo"
          width={300}
          height={300}
          className="w-30 my-10 sm:hidden block"
        />
        <p className="text-neutral-600 leading-8 text-lg font-medium hidden sm:block ">
          Are you tired of scrolling through menus and struggling to decide{" "}
          <br /> what to order? Our new restaurant app has got you covered with{" "}
          <br />
          personalized recommendations from our digital assistant.
        </p>
      </div>

      <Image
        src="/assets/images/food-pic-left.png"
        alt="dish pic left"
        width={300}
        height={300}
        className="md:w-96 absolute top-0 left-0"
      />
      <Image
        src="/assets/images/food-pic-right.png"
        alt="dish pic right"
        width={300}
        height={300}
        className="md:w-96 absolute bottom-0 right-0"
      />
    </div>
  );
}
