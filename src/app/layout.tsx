// css
import "./globals.css";

// next
import type { Metadata } from "next";

// web analytics
import { GoogleAnalytics } from "@next/third-parties/google";

// data
import {
  FIRST_NAME,
  LAST_NAME,
  JOB_TITLE,
  SUB_HEADER,
} from "@/data/details.json";

// font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${FIRST_NAME} ${LAST_NAME} | ${JOB_TITLE}`,
  description: SUB_HEADER,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
      <GoogleAnalytics gaId="G-CJBYKZ71HQ" />
    </html>
  );
}
