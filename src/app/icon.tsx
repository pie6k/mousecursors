import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  const buf = await readFile(join(process.cwd(), "src/app/cursor.png"));
  const base64 = buf.toString("base64");
  const src = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          borderRadius: 112,
          background: "linear-gradient(180deg, #68B7E8 0%, #4373B8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img src={src} width={240} height={348} style={{ objectFit: "contain" }} />
      </div>
    ),
    { ...size }
  );
}
