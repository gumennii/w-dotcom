import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("userName");
  const email = searchParams.get("userEmail");
  const programName = searchParams.get("programName");
  const pageSlug = searchParams.get("pageSlug");
  const utm = JSON.stringify(searchParams.get("utmParams"));
  const created_at = new Date().toISOString();
  const id = uuidv4();

  try {
    if (!name || !email) throw new Error("Name and Email required");
    await sql`
      INSERT INTO subscribers (Name, Email, program_name, page_slug, id, created_at, utm)
      VALUES (${name}, ${email}, ${programName}, ${pageSlug}, ${id}, ${created_at}, ${utm});
    `;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
