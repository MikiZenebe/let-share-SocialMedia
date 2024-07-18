import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json({
      message: "Logout successfully",
      success: true,
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
    };

    res.cookies.set("token", "", cookiesOption);

    return res;
  } catch (error) {
    return NextResponse.json({
      message: error.message || error,
      error: true,
    });
  }
}
