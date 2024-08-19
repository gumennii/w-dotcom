import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("userName");
  const email = searchParams.get("userEmail");
  const programName = searchParams.get("programName");
  const pageSlug = searchParams.get("pageSlug");
  const created_at = new Date().toISOString();
  const id = uuidv4();

  try {
    if (!name || !email) throw new Error("Name and Email required");
    await sql`
      INSERT INTO subscribers (Name, Email, program_name, page_slug, id, created_at)
      VALUES (${name}, ${email}, ${programName}, ${pageSlug}, ${id}, ${created_at})
      ON CONFLICT (Email) DO NOTHING;
    `;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
