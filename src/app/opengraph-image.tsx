import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Mouse Cursors — All CSS Cursors in One Place";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const buf = await readFile(join(process.cwd(), "src/app/cursor.png"));
  const base64 = buf.toString("base64");
  const src = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #68B7E8 0%, #4373B8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={src} width={60} height={87} style={{ objectFit: "contain" }} />
      </div>
    ),
    { ...size }
  );
}
