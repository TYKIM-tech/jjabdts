import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PwaRegister from "@/components/PwaRegister";
import GNB from "@/components/GNB";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDTS - Maritime Digital Telemedicine System",
  description: "Edge AI based Maritime Digital Telemedicine System",
  manifest: "/manifest.json",
  themeColor: "#2DD4BF",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-slate-100 selection:bg-teal-500/30 overflow-x-hidden">
        <GNB />
        <main className="flex-1 w-full flex flex-col relative">
          {children}
        </main>
        <PwaRegister />
      </body>
    </html>
  );
}
