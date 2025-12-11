import Image from "next/image";
import React from "react";

const AuthIllustration = () => {
  return (
    <section className="lg:h-full bg-white flex-vertical-center rounded-3xl gap-6">
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
        <h2 className="text-neutral-550 font-medium text-2xl lg:text-3xl leading-10 tracking-[-0.5px] font-heading">
          Full contactless experience
        </h2>{" "}
        <p className="text-neutral-500 text-body">
          From ordering to paying, that’s all contactless
        </p>
      </div>
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={300}
        height={300}
        className="w-26 hidden lg:block"
      />
    </section>
  );
};

export default AuthIllustration;
