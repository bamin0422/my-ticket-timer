import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my ticket timer",
  description: "Book your ticket at the exact time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="size-full" lang="en">
      <body className={clsx(inter.className, "size-full")}>
        <main className="size-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
