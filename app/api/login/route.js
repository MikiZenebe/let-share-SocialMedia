import { NextResponse } from "next/server";

async function POST(req) {
  try {
  } catch (error) {
    NextResponse.json({ message: error.message || error });
  }
}
