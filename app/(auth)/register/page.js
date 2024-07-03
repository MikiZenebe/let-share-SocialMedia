"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Bg from "@/public/Img.jpeg";
import { CustomButton, Loading } from "@/app/components";
import { BsShare } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    profilePic: "",
  });
  const [img, setImg] = useState(null);
  const inputFileRef = useRef();
  const navigate = useRouter();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOpenFileUploader = () => {
    inputFileRef.current.click();
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setData((prev) => {
      return {
        ...prev,
        profilePic: file,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.set("fullName", data.fullName);
      formData.set("username", data.username);
      formData.set("email", data.email);
      formData.set("password", data.password);
      formData.set("profilePic", data.profilePic);

      const res = await axios.post("/api/register", formData);
      toast.success(res.data.message + "🚀👨");

      if (res.status === 200) {
        setData({
          fullName: "",
          username: "",
          email: "",
          password: "",
          profilePic: "",
        });

        navigate.push("/login");
      }

      setLoading(false);
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };

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
              LetShare
            </span>
          </div>

          <p className="text-ascent-1 text-base font-semibold text-center">
            Create your account
          </p>

          <form className="py-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <div className="w-full flex flex-col mt-2">
                <div>
                  <p className="text-ascent-2 text-sm mb-2">FullName</p>
                  <input
                    className="transition-all duration-[300ms] ease-out bg-secondary rounded px-2 border-[#66666690] outline-none text-sm text-ascent-1  placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#258dee] focus:border-transparent w-full p-2 border"
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col mt-2">
                <div>
                  <p className="text-ascent-2 text-sm mb-2">Username</p>
                  <input
                    className="transition-all duration-[300ms] ease-out bg-secondary rounded px-2 border-[#66666690] outline-none text-sm text-ascent-1  placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#258dee] focus:border-transparent w-full p-2 border"
                    name="username"
                    placeholder="Username"
                    type="text"
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col mt-2">
              <div>
                <p className="text-ascent-2 text-sm mb-2">Email</p>
                <input
                  className="transition-all duration-[300ms] ease-out bg-secondary rounded px-2 border-[#66666690] outline-none text-sm text-ascent-1  placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#258dee] focus:border-transparent w-full p-2 border"
                  name="email"
                  placeholder="example@gmail.com"
                  type="email"
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-2">
              <div>
                <p className="text-ascent-2 text-sm mb-2">Password</p>
                <input
                  className="transition-all duration-[300ms] ease-out bg-secondary rounded px-2 border-[#66666690] outline-none text-sm text-ascent-1  placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#258dee] focus:border-transparent w-full p-2 border"
                  name="password"
                  placeholder="Password"
                  type="passowrd"
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="w-full flex flex-col mt-2">
              <div onClick={handleOpenFileUploader}>
                <label
                  htmlFor="profilePic"
                  className="cursor-pointer rounded px-2 border-[#258dee] text-[#258dee] text-sm w-full p-2 border "
                  ref={inputFileRef}
                >
                  Upload Profile Pic
                </label>
                <input
                  className="hidden"
                  id="profilePic"
                  type="file"
                  onChange={handleImgChange}
                />
              </div>
            </div>

            {loading ? (
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
            {img ? (
              <Image
                src={img}
                alt="Cover"
                className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
                width={50}
                height={50}
              />
            ) : (
              <Image
                src={Bg}
                alt="Cover"
                className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
              />
            )}

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
