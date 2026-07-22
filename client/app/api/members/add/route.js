import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT member_id AS id, full_name, gender, email, phone, address, date_of_birth, join_date, status FROM members ORDER BY member_id DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      full_name,
      gender,
      email,
      phone,
      address,
      date_of_birth,
    } = body;

    if (!full_name || !phone) {
      return NextResponse.json(
        { success: false, error: "Full name and phone are required" },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      "INSERT INTO members (full_name, gender, email, phone, address, date_of_birth) VALUES (?, ?, ?, ?, ?, ?)",
      [
        full_name,
        gender || "Male",
        email || null,
        phone,
        address || null,
        date_of_birth || null,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Member registered successfully",
      memberId: result.insertId,
    }, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Failed to register member" },
      { status: 500 }
    );
  }
}