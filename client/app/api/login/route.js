import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const normalizedUsername = String(username || "").trim().toLowerCase();
    const normalizedPassword = String(password || "").trim();

    const validCredentials = [
      { username: "admin", password: "admin123" },
      { username: "manager", password: "manager123" },
      { username: "staff", password: "staff123" },
      { username: "member", password: "member123" },
    ];

    const match = validCredentials.find(
      (credential) =>
        normalizedUsername === credential.username &&
        normalizedPassword === credential.password
    );

    if (!match) {
      return NextResponse.json(
        { success: false, error: "Invalid username or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true, user: { username: match.username } });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Login failed" },
      { status: 500 }
    );
  }
}
