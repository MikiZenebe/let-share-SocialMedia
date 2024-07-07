"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import {
  IoIosSettings,
  IoMdHelp,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { BsCardChecklist, BsSunFill } from "react-icons/bs";
import Logo from "../../public/Logo.png";
import { headerNavLink } from "../../utils";

export default function Header() {
  const modalRef = useRef();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Add event listener to close modal when clicking outside of it
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar w-full flex items-center justify-between py-5 lg:px-10 md:py-4 px-4 bg-primary shadow-sm backdrop-blur-md ">
      <Link href="/" className="flex gap-2 items-center">
        <div className="w-6 rounded">
          <Image src={Logo} alt="" />
        </div>
        <span className="text-xl md:text-2xl text-[#258dee] font-semibold">
          LetShare
        </span>
      </Link>

      <form className="hidden md:flex items-center justify-center">
        <input
          placeholder="Search..."
          className="transition-all duration-[300ms] ease-out bg-secondary rounded-tl rounded-bl px-2 border-[#66666690]  outline-none text-sm text-ascent-1  placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#258dee] focus:border-transparent w-full p-2 border"
          styles="w-[18rem] lg:w-[20rem] rounded-l-full  border border-gray-300"
        />
        <CustomButton
          title="Search"
          type="submit"
          containerStyle="bg-[#258dee] text-white px-6 py-2  rounded-r-full"
        />
      </form>

      {/* Dark an Light */}

      <div className="flex items-center gap-8">
        {headerNavLink.map((link, i) => {
          return (
            <div className="flex flex-col items-center" key={i}>
              <p>{link.iconUrl}</p>
              <p>{link.label}</p>
            </div>
          );
        })}

        {/* Current user login image */}
        <div>
          <Image
            className="rounded-full object-cover w-10 h-10"
            src={"/img.jpeg"}
            alt="user"
            width={40}
            height={50}
          />
        </div>
      </div>

      <div
        className={`bg-white flex flex-col gap-2  ${
          !toggle ? "hidden" : "flex"
        } p-6 bg-white border border-gray-300  absolute top-20 right-0 mx-4 my-2 min-w-[250px] rounded-xl dropDown`}
      >
        <div className="flex flex-col gap-6  text-ascent-1 text-md md:text-xl">
          <div className="flex items-center justify-between">
            <p className="font-bold text-[20px] mb-3">Profile</p>
          </div>
          <hr className="border-ascent-2" />
          <Link href={`/profile/user`} className="flex items-center gap-2">
            <BsCardChecklist color="#258dee" />
            <span className="">My Profile</span>
          </Link>

          <button className="flex items-center gap-2">
            <IoIosSettings color="#258dee" />
            <span className="">Settings</span>
          </button>

          <p className="flex items-center gap-2">
            <IoMdHelp color="#258dee" />
            <span className="">Help</span>
          </p>
          <hr className="mt-2 border-ascent-2" />

          <div>
            <CustomButton
              title="Logout"
              type="submit"
              containerStyle="bg-[#258dee] text-white px-4 md:px-6 py-1 md:py-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
