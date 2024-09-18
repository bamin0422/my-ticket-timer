import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
      </body>
    </html>
  );
}
