"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Bg from "@/public/Img.jpeg";
import { TextInput, CustomButton, Loading } from "@/app/components";
import { BsShare } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";
import { useState } from "react";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className=" w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex  rounded-xl overflow-hidden border border-black/10 items-center justify-center">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col items-center justify-center">
          <div className="w-full flex gap-2 items-center mb-6 justify-center">
            <div className="p-2 w-12 rounded text-white">
              <Image src={Logo} alt="" />
            </div>
            <span className="text-2xl text-[#258dee] font-semibold">
              WeShare
            </span>
          </div>

          <p className="text-ascent-1 text-base font-semibold text-center">
            Create your account
          </p>

          <form className="py-8 flex flex-col gap-5">
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="fullName"
                placeholder="Full Name"
                label="Full Name"
                type="text"
                styles="w-full  p-2 border"
              />

              <TextInput
                name="username"
                placeholder="Username"
                label="Username"
                type="text"
                styles="w-full  p-2 border"
              />
            </div>
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              styles="w-full  p-2 border"
            />
            <TextInput
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
              styles="w-full  p-2 border"
            />

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyle={`inline-flex justify-center rounded-md bg-[#258dee] px-8 py-3 text-sm font-medium text-white outline-none`}
                title="Create Account"
              />
            )}
          </form>

          <p className="text-ascent-2 text-sm text-center">
            Have an account?
            <Link
              href={"/login"}
              className="text-[#258dee] font-semibold ml-2 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue-500">
          <div className="relative w-full flex items-center justify-center">
            <Image
              src={Bg}
              alt="Cover"
              className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
            />

            <div className="absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>
            <div className="absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full">
              <ImConnection size={14} />
              <span className="text-xs font-medium">Connect</span>
            </div>
            <div className="absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full">
              <AiOutlineInteraction size={14} />
              <span className="text-xs font-medium">Interact</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white text-base">
              Connect with friends & have share for fun
            </p>
            <span className="text-sm text-white/80">
              Share memories with friends and the world
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
