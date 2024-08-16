import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { format } from "date-fns";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("userName");
  const email = searchParams.get("userEmail");
  const programName = searchParams.get("programName");
  const pageSlug = searchParams.get("pageSlug");
  const dateCreation = format(new Date(), "MMM d, y");

  try {
    if (!name || !email) throw new Error("Name and Email required");
    await sql`
      INSERT INTO subscribers (Name, Email, Date, program_name, page_slug)
      VALUES (${name}, ${email}, ${dateCreation}, ${programName}, ${pageSlug})
      ON CONFLICT (Email) DO NOTHING;
    `;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
