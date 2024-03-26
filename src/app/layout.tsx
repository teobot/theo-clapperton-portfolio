// css
import "./globals.css";

// next
import type { Metadata } from "next";

// web analytics
import { GoogleAnalytics } from '@next/third-parties/google'

// font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
