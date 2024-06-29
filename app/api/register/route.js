import User from "@/app/database/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import uploadImg from "@/helpers/uploadImage";
import connectDB from "@/db/connectDB";

connectDB();

export async function POST(req) {
  try {
    const formData = await req.formData();
    const fullName = formData.get("fullName");
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const profilePic = formData.get("profilePic");
    const profileViews = formData.get("profileViews");
    const profileImpression = formData.get("profileImpression");
    const location = formData.get("location");
    const occupation = formData.get("occupation");
    const bio = formData.get("bio");
    const instagram = formData.get("instagram");
    const telegram = formData.get("telegram");
    const twitter = formData.get("twitter");

    //Check email
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return NextResponse.json({ message: "Already existed email" });
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Upload profilePic in cloudnary
    const uploadProfilePic = await uploadImg(profilePic);

    const payload = {
      fullName,
      username,
      password: hashedPassword,
      email,
      profilePic: uploadProfilePic,
      profileViews,
      profileImpression,
      location,
      occupation,
      bio,
      instagram,
      telegram,
      twitter,
    };

    const user = new User(payload);
    const newUser = await user.save();

    return NextResponse.json({ message: "User created", data: newUser });
  } catch (error) {
    return NextResponse.json({ message: error.message || error });
  }
}
