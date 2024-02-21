import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from '../lib/utils'
import "../styles/globals.css";
import { Header } from "@/components/index";

export const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Przemysław Zakrzewski ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-slate-950 font-sans antialiased",
        fontSans.variable
      )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
