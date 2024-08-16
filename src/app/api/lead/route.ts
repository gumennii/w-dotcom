import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { format } from "date-fns";

export async function POST(request: Request) {
  const body = await request.json();
  const { first_name, email, items, page_slug, clinic_name } = body;
  const participants = JSON.stringify(items);
  const dateCreation = format(new Date(), "MMM d, y");

  try {
    if (!first_name || !email) throw new Error("Name and Email required");
    await sql`
      INSERT INTO leads (Name, Email, clinic_name, page_slug, Participants, Date)
      VALUES (${first_name}, ${email}, ${clinic_name}, ${page_slug}, ${participants}, ${dateCreation})
      ON CONFLICT (Email) DO NOTHING;
    `;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
