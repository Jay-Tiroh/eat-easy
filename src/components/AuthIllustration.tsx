import Image from "next/image";
import React from "react";

const AuthIllustration = () => {
  return (
    <section className="relative lg:h-full lg:bg-white dark-bg dark:lg:bg-neutral-700 flex-vertical-center overflow-hidden rounded-3xl gap-6 lg:shadow-sm">
      <div className="overlay h-full absolute top-0  w-full bg-white/5 hidden"></div>
      <Image
        src={"/assets/images/auth-illustration.svg"}
        alt="auth illustration"
        width={500}
        height={500}
        className="w-10/12 sm:w-3/5 sm:max-w-100"
      />
      <Image
        src={"/assets/images/auth-progress-line.svg"}
        alt="auth progress-line"
        width={200}
        height={50}
        className=""
      />
      <div className="text text-center flex flex-col gap-2">
        <h2 className="text-neutral-550 dark:text-white font-medium text-2xl lg:text-3xl leading-10 tracking-[-0.5px] font-heading">
          Full contactless experience
        </h2>{" "}
        <p className="text-neutral-500 dark:text-neutral-150 text-body">
          From ordering to paying, that’s all contactless
        </p>
      </div>
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={300}
        height={300}
        className="w-26 hidden lg:block dark:hidden"
      />
      <Image
        src="/assets/images/logo-dark.svg"
        alt="logo"
        width={300}
        height={300}
        className="w-26 hidden dark:lg:block"
      />
    </section>
  );
};

export default AuthIllustration;
