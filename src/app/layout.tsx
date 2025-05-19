import React from "react";

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "انتخابات شورا صنفی دانشگاه علم و صنعت",
  description: "انتخابات شورا صنفی دانشگاه علم و صنعت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>{children}</body>
    </html>
  );
}
