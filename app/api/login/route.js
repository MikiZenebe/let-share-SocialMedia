import { NextResponse } from "next/server";
import User from "@/app/database/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/db/connectDB";

connectDB();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 400 });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return NextResponse.json(
        { message: "check your password" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    const res = NextResponse.json({
      message: "User logged in",
      token: token,
      success: true,
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
    };

    res.cookies.set("token", token, cookiesOption);

    return res;
  } catch (error) {
    return NextResponse.json({ message: error.message || error });
  }
}
