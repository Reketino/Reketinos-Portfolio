import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    const backgroundsDir = path.join(process.cwd(), "public", "backgrounds");

    try { 
        const files = fs.readdirSync(backgroundsDir);

        const images = files
        .filter((file) => 
       file.match(/\.(jpg|jpeg|png|webp|gif)$/i) 
     )
    .map((file) => `/backgrounds/${file}`);
    
    return NextResponse.json({ images });
} catch (error) {
    console.error("Error reading background folder:", error);
    return NextResponse.json({ images: [] });
}
}