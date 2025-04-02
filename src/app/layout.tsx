// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lora } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "Ollie Woods FTCL | Session Drummer",
  description: "Professional session drummer based in London with over 10 years of experience. Specializing in jazz, funk, and rock styles with studio and touring capabilities.",
  keywords: ["drummer", "session musician", "Ollie Woods", "FTCL", "London drummer", "professional drummer", "studio recording", "live performance"],
  authors: [{ name: "Ollie Woods" }],
  creator: "Ollie Woods",
  publisher: "Ollie Woods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} `}>
        <div className="min-h-screen">
          <Navbar />
          <main className="flex-grow px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}