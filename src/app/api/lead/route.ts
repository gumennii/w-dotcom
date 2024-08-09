import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("userName");
  const email = searchParams.get("userEmail");

  try {
    if (!name || !email) throw new Error("Name and Email required");
    await sql`
      INSERT INTO leads (Name, Email)
      VALUES (${name}, ${email})
      ON CONFLICT (Email) DO NOTHING;
    `;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
