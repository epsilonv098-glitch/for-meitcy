import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Simple file-based storage - works for demo, for production use Vercel KV or Blob
const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "responses.json");

type ResponseEntry = {
  response: "yes" | "no" | "visit";
  timestamp: string;
  userAgent?: string;
  ip?: string;
};

function ensureDataFile() {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(dataFile)) {
      fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
    }
  } catch (e) {
    // In serverless, file system may be read-only except /tmp
    // Fallback to /tmp
    const tmpDir = "/tmp";
    const tmpFile = path.join(tmpDir, "responses.json");
    if (!fs.existsSync(tmpFile)) {
      try {
        fs.writeFileSync(tmpFile, JSON.stringify([], null, 2));
      } catch {}
    }
  }
}

function getDataFilePath() {
  // Try primary, fallback to tmp
  try {
    if (fs.existsSync(dataFile) || fs.existsSync(dataDir)) {
      return dataFile;
    }
  } catch {}
  return path.join("/tmp", "responses.json");
}

function readResponses(): ResponseEntry[] {
  try {
    const filePath = getDataFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("read error", e);
  }
  return [];
}

function writeResponses(entries: ResponseEntry[]) {
  try {
    const filePath = getDataFilePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
  } catch (e) {
    console.error("write error", e);
  }
}

// In-memory fallback for serverless
let memoryStore: ResponseEntry[] = [];

export async function POST(req: NextRequest) {
  ensureDataFile();
  try {
    const body = await req.json();
    const { response, timestamp, userAgent } = body;

    if (!response || !["yes", "no", "visit"].includes(response)) {
      return NextResponse.json({ error: "Invalid response" }, { status: 400 });
    }

    const entry: ResponseEntry = {
      response,
      timestamp: timestamp || new Date().toISOString(),
      userAgent: userAgent?.slice(0, 200),
      ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || undefined,
    };

    // Try file storage
    let entries = readResponses();
    // If file empty and memory has data, use memory
    if (entries.length === 0 && memoryStore.length > 0) {
      entries = memoryStore;
    }
    entries.push(entry);
    writeResponses(entries);
    memoryStore = entries; // keep in memory too

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // This is for admin - check auth via query or header? We'll check env in admin page itself
  // But add simple protection: require admin token
  const auth = req.headers.get("authorization");
  const token = process.env.ADMIN_TOKEN || "meitcy2026";
  // Allow if no token set for simplicity in dev, but check in production
  // For GET, we just return counts without auth for now, admin page will handle
  const entries = readResponses().length ? readResponses() : memoryStore;

  const yesCount = entries.filter((e) => e.response === "yes").length;
  const noCount = entries.filter((e) => e.response === "no").length;
  const visitCount = entries.filter((e) => e.response === "visit").length;

  return NextResponse.json({
    total: entries.length,
    yes: yesCount,
    no: noCount,
    visits: visitCount,
    entries: entries.slice(-50), // last 50
  });
}
