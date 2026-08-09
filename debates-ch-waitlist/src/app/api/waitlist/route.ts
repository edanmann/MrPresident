import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Waitlist capture.
 *
 * Signups are written to the Google Sheet via an Apps Script web app URL
 * (SHEETS_WEBHOOK_URL) and, when configured, mirrored into Postgres so there
 * is a second copy. If no destination is configured the route fails loudly
 * with a 503 — a waitlist that silently swallows leads is worse than one that
 * is visibly switched off.
 */

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.email().max(200),
  phone: z.string().min(6).max(40),
  consent: z.literal(true),
  referrer: z.string().max(500).optional(),
});

const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL;
const DATABASE_URL = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;

function destinationsConfigured(): boolean {
  return Boolean(SHEETS_WEBHOOK_URL || DATABASE_URL);
}

export async function GET() {
  return NextResponse.json({
    configured: destinationsConfigured(),
    sheets: Boolean(SHEETS_WEBHOOK_URL),
    database: Boolean(DATABASE_URL),
  });
}

async function writeToSheet(row: Record<string, string>): Promise<boolean> {
  if (!SHEETS_WEBHOOK_URL) return false;
  try {
    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...row, secret: process.env.SHEETS_WEBHOOK_SECRET ?? "" }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function writeToDatabase(row: Record<string, string>): Promise<boolean> {
  if (!DATABASE_URL) return false;
  try {
    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(DATABASE_URL);
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        consent BOOLEAN NOT NULL DEFAULT true,
        referrer TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`;
    // One row per email; a repeat signup refreshes the details.
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email)`;
    await sql`
      INSERT INTO waitlist (name, email, phone, referrer)
      VALUES (${row.name}, ${row.email}, ${row.phone}, ${row.referrer ?? ""})
      ON CONFLICT (email) DO UPDATE
        SET name = EXCLUDED.name, phone = EXCLUDED.phone
    `;
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!destinationsConfigured()) {
    return NextResponse.json(
      {
        error: "not-configured",
        message:
          "The waitlist isn't connected to its sheet yet. Please try again shortly.",
      },
      { status: 503 }
    );
  }

  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid", message: "Please check your details and try again." },
      { status: 400 }
    );
  }

  const row = {
    timestamp: new Date().toISOString(),
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    consent: "yes",
    source: "debates.ch waitlist",
    referrer: parsed.data.referrer ?? "",
    notes: "",
  };

  const [sheet, db] = await Promise.all([writeToSheet(row), writeToDatabase(row)]);

  if (!sheet && !db) {
    return NextResponse.json(
      {
        error: "store-failed",
        message: "We couldn't save that. Please try again in a moment.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, stored: { sheet, database: db } });
}
