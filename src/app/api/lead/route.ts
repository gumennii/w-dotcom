import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const body = await request.json();
  const { first_name, email, items, page_slug, clinic_name } = body;
  const participants = JSON.stringify(items);
  const created_at = new Date().toISOString();
  const id = uuidv4();

  try {
    if (!first_name || !email) throw new Error("Name and Email required");
    await sql`
      INSERT INTO leads (Name, Email, clinic_name, page_slug, Participants, id, created_at)
      VALUES (${first_name}, ${email}, ${clinic_name}, ${page_slug}, ${participants}, ${id}, ${created_at})
      ON CONFLICT (Email) DO NOTHING;
    `;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
