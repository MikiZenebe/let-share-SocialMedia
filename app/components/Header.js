"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../assets/Logo.png";
import { headerNavLink } from "../../utils";
import { SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const modalRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [userToggle, setUserToggle] = useState(false);

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
    <div className="topbar w-full flex items-center justify-between py-5 lg:px-10 md:py-4 px-4 bg-white  backdrop-blur-md ">
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
          title={<SearchIcon />}
          type="submit"
          containerStyle="bg-[#258dee] text-white px-2 py-[7px] rounded-r-full"
        />
      </form>

      {/* Dark an Light */}

      <div className="items-center gap-4 hidden md:flex">
        {headerNavLink.map((link, i) => {
          const isActive = path === link.route;

          return (
            <Link
              href={link.route}
              className="flex flex-col items-center"
              key={i}
            >
              <p
                className={`text-gray-500 ${
                  isActive &&
                  "bg-[#1B78E6] text-white p-2 transition-all duration-300 ease-in-out rounded-full border-b-[1px] border-[#1B78E6]"
                }`}
              >
                {link.iconUrl}
              </p>
            </Link>
          );
        })}

        {/* Current user login image */}
        <div className="flex items-center">
          <Image
            onClick={() => setUserToggle(!toggle)}
            className="rounded-full object-cover w-6 h-6 cursor-pointer"
            src={"/img.jpeg"}
            alt="user"
            width={40}
            height={50}
          />
        </div>
      </div>

      {/* Menu */}

      <div
        className="flex md:hidden cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
      </div>

      <div
        className={`bg-white flex flex-col gap-2  ${
          !toggle ? "hidden" : "flex"
        } md:hidden p-6 bg-white border border-gray-300  absolute top-20 right-0 mx-4 my-2 min-w-[300px] rounded-xl dropDown`}
      >
        <div className="gap-5 flex flex-col">
          {headerNavLink.map((link, i) => {
            return (
              <Link
                href={link.route}
                className="flex  items-center gap-2"
                key={i}
              >
                <p>{link.iconUrl}</p>
                <p>{link.label}</p>
              </Link>
            );
          })}

          {/* Current user login image */}
          <div>
            <button className="bg-blue-500 w-full p-1.5 text-white font-semibold rounded">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* User Toggle */}
      <div
        className={`bg-white flex flex-col gap-2  ${
          !userToggle ? "hidden" : "flex"
        }  p-6 bg-white border border-gray-300  absolute top-20 right-0 mx-4 my-2 min-w-[300px] rounded-xl dropDown`}
      >
        <div className="gap-5 flex flex-col">
          {headerNavLink.map((link, i) => {
            return (
              <Link
                href={link.route}
                className="flex  items-center gap-2"
                key={i}
              >
                <p>{link.iconUrl}</p>
                <p>{link.label}</p>
              </Link>
            );
          })}

          {/* Current user login image */}
          <div>
            <button className="bg-blue-500 w-full p-1.5 text-white font-semibold rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
