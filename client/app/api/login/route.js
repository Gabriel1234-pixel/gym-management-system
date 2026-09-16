import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const normalizedUsername = String(username || "").trim().toLowerCase();
    const normalizedPassword = String(password || "").trim();

    if (!normalizedUsername || !normalizedPassword) {
      return NextResponse.json(
        { success: false, error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const demoCredentials = [
      { username: "admin", password: "admin123", role: "admin" },
      { username: "manager", password: "manager123", role: "admin" },
      { username: "staff", password: "staff123", role: "admin" },
      { username: "member", password: "member123", role: "member" },
    ];

    const demoMatch = demoCredentials.find(
      (credential) =>
        normalizedUsername === credential.username &&
        normalizedPassword === credential.password
    );

    if (demoMatch) {
      return NextResponse.json({
        success: true,
        user: {
          username: demoMatch.username,
          full_name: demoMatch.username,
          role: demoMatch.role,
        },
      });
    }

    const [rows] = await db.query(
      "SELECT full_name, email, phone FROM members WHERE LOWER(email) = ? AND phone = ?",
      [normalizedUsername, normalizedPassword]
    );

    const member = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

    if (member) {
      return NextResponse.json({
        success: true,
        user: {
          username: member.full_name || member.email,
          full_name: member.full_name || member.email,
          role: "member",
        },
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid username or password" },
      { status: 401 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Login failed" },
      { status: 500 }
    );
  }
}
