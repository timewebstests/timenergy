import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Providers from '@/app/providers';

export const metadata: Metadata = {
  title: "Time Energy",
  description: "Cerca la migliore soluzione in tutti i campi con time energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}
