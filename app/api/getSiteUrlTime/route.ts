import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const siteUrl = searchParams.get("siteUrl");

  if (typeof siteUrl !== "string") {
    return NextResponse.json({ error: "Invalid site URL" }, { status: 400 });
  }

  try {
    const response = await fetch(siteUrl);

    const date = response.headers.get("Date");

    if (date === null) {
      throw new Error("Not found");
    }

    return NextResponse.json({ date: new Date(date) });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ date: new Date() }, { status: 500 });
  }
}
