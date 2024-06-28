import { NextResponse } from "next/server";

async function POST(req) {
  try {
    const formData = req.formData();
  } catch (error) {
    NextResponse.json({ message: error.message || error });
  }
}
