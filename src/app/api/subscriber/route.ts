import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { format } from "date-fns";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("userName");
  const email = searchParams.get("userEmail");
  const dateCreation = format(new Date(), "MMM d, y");

  try {
    if (!name || !email) throw new Error("Name and Email required");
    await sql`INSERT INTO subscribers (Name, Email, Date) VALUES (${name}, ${email}, ${dateCreation});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const subscribers = await sql`SELECT * FROM subscribers;`;
  return NextResponse.json({ subscribers }, { status: 200 });
}
