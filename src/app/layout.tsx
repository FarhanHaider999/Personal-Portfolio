import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans'});
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400']});

export const metadata: Metadata = {
  title: "Portfolio | Farhan Haider",
  description: "Created By Farhan Haider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-neutral-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}




// emrald-900

//neutral-900