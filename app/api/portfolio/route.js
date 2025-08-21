import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "portfolioData.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const portfolioData = JSON.parse(fileContents);

    return NextResponse.json(portfolioData);
  } catch (error) {
    console.error("Error reading portfolio data:", error);
    return NextResponse.json(
      { error: "Failed to load portfolio data" },
      { status: 500 }
    );
  }
}
