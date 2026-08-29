import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oracle East - AI Oracle Homepage Prototype",
  description:
    "A high-end international AI Oracle homepage prototype blending Eastern mystic order and restrained luxury technology.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
