import { SignupForm } from "@/components/Forms/Signup-Form";
import Image from "next/image";
import React from "react";

function SignupPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-6 md:p-10 bg-gradient-to-r from-black via-[rgb(242,66,31)] to-black">
      {/* Burger Images - Positioned Around the Form */}
      <Image
        src="/image/burger-1.png"
        alt="Burger"
        width={100}
        height={100}
        className="absolute top-4 left-[450px] md:w-96 rotate-[-45deg] drop-shadow-lg"
      />
      <Image
        src="/image/burger-2.png"
        alt="Burger"
        width={120}
        height={120}
        className="absolute top-10 right-44 md:w-96 rotate-[20deg] drop-shadow-lg"
      />
      <Image
        src="/image/burger-3.png"
        alt="Burger"
        width={100}
        height={100}
        className="absolute bottom-16 left-44 md:w-96 rotate-[10deg] drop-shadow-lg"
      />
      <Image
        src="/image/burger-4.png"
        alt="Burger"
        width={120}
        height={120}
        className="absolute bottom-10 right-10 md:w-96 rotate-[-10deg] drop-shadow-lg"
      />

      {/* Form Container */}
      <div className="relative w-full max-w-sm md:max-w-96 ">
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;
