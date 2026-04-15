import type { Metadata } from "next";
import { StyledComponentsRegistry } from "./registry";

export const metadata: Metadata = {
  title: "Mouse Cursors — All CSS Cursors in One Place",
  description:
    "Visual reference of every CSS cursor property value. Hover each tile to preview the cursor style in your browser.",
  keywords: [
    "css cursor",
    "css cursors",
    "mouse cursor",
    "mouse cursors",
    "cursor property",
    "css cursor list",
    "cursor styles",
    "cursor pointer",
    "cursor values",
    "web cursors",
  ],
  metadataBase: new URL("https://mousecursors.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mouse Cursors — All CSS Cursors in One Place",
    description:
      "Visual reference of every CSS cursor property value. Hover each tile to preview the cursor style.",
    url: "https://mousecursors.dev",
    siteName: "mousecursors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouse Cursors — All CSS Cursors in One Place",
    description:
      "Visual reference of every CSS cursor property value. Hover to preview.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
