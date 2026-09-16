import { NextResponse } from "next/server";
import db from "../../../../lib/db";

const getMemberId = async (params) => {
  const resolved = await params;
  return Number(resolved?.id);
};

export async function GET(_request, { params }) {
  try {
    const memberId = await getMemberId(params);

    if (!memberId) {
      return NextResponse.json({ error: "Member id is required" }, { status: 400 });
    }

    const [rows] = await db.query(
      "SELECT member_id AS id, full_name, gender, email, phone, address, date_of_birth, join_date, status FROM members WHERE member_id = ?",
      [memberId]
    );

    if (!rows.length) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Get member by id error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const memberId = await getMemberId(params);

    if (!memberId) {
      return NextResponse.json({ error: "Member id is required" }, { status: 400 });
    }

    const body = await request.json();
    const {
      full_name,
      gender,
      email,
      phone,
      address,
      date_of_birth,
      status,
    } = body || {};

    if (!full_name || !phone) {
      return NextResponse.json(
        { error: "Full name and phone are required" },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      `UPDATE members
       SET full_name = ?, gender = ?, email = ?, phone = ?, address = ?, date_of_birth = ?, status = ?
       WHERE member_id = ?`,
      [
        full_name,
        gender || "Male",
        email || null,
        phone,
        address || null,
        date_of_birth || null,
        status || "Active",
        memberId,
      ]
    );

    if (!result.affectedRows) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Member updated successfully" });
  } catch (error) {
    console.error("Update member error:", error);
    return NextResponse.json({ error: "Failed to update member" }, { status: 500 });
  }
}

export async function DELETE(_request, { params }) {
  try {
    const memberId = await getMemberId(params);

    if (!memberId) {
      return NextResponse.json({ error: "Member id is required" }, { status: 400 });
    }

    const [result] = await db.query("DELETE FROM members WHERE member_id = ?", [memberId]);

    if (!result.affectedRows) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Member deleted successfully" });
  } catch (error) {
    const code = error?.code;
    const errno = error?.errno;

    if (code === "ER_ROW_IS_REFERENCED_2" || errno === 1451 || errno === 1452) {
      try {
        const memberId = await getMemberId(params);

        const [updateResult] = await db.query(
          "UPDATE members SET status = 'Inactive' WHERE member_id = ?",
          [memberId]
        );

        if (!updateResult.affectedRows) {
          return NextResponse.json({ error: "Member not found" }, { status: 404 });
        }

        return NextResponse.json({
          success: true,
          message: "Member was deactivated because related records exist.",
          deactivated: true,
        });
      } catch (deactivateError) {
        console.error("Deactivate member fallback error:", deactivateError);
      }
    }

    console.error("Delete member error:", error);
    return NextResponse.json({ error: "Failed to delete member" }, { status: 500 });
  }
}
