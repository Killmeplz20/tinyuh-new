import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TINYUH",
  description: "Generated by create next app",
};<link rel="icon" type="image/ico" href="tiny-icon.ico" />

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="bg-black min-h-screen font-helvetica">{children}</section>
      </body>
    </html>
  );
}
