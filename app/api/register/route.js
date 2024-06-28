import User from "@/app/database/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

async function POST(req) {
  try {
    const formData = req.formData();
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
    const socialLinks = formData.get("socialLinks");

    //Check email
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return NextResponse.json({ message: "Already existed email" });
    }

    //Hash the password
    const salt = bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  } catch (error) {
    NextResponse.json({ message: error.message || error });
  }
}
