import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, password, plan, className } = body;

    if (!fullName || !email || !phone || !password) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[0-9]{10,15}$/.test(String(phone))) {
      return NextResponse.json(
        { success: false, error: "Phone number must contain only digits." },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO members (full_name, email, phone, status, plan, class_name) VALUES (?, ?, ?, ?, ?, ?)",
      [fullName, email, phone, "Active", plan || "Basic", className || "General"]
    );

    return NextResponse.json({ success: true, message: "Member registered successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Registration failed. Please check your database connection." },
      { status: 500 }
    );
  }
}
