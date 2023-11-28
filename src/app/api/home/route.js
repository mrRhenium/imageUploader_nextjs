import fs from "fs/promises";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    //
    const body = await req.formData();
    const file = body.get("file");
    const name = body.get("name");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `public/${file.name}`;

    await fs.writeFile(path, buffer);

    return NextResponse.json({
      status: "success",
      name: name,
    });
    //
  } catch (error) {
    //
    console.log("ERROR" + error);
    return NextResponse.json({
      status: "error",
    });
    //
  }
}
