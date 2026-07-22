import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT member_id AS id, full_name, gender, email, phone, address, date_of_birth, join_date, status FROM members ORDER BY member_id DESC"
    );

    return NextResponse.json(rows || []);
  } catch (error) {
    console.error("Members API error:", error);

    return NextResponse.json([], { status: 200 });
  }
}
