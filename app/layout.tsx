import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <Header /> */}
        <TopBar />
        <Navbar />
        <Suspense fallback={<p>Lädt...</p>}>
          {children}
        </Suspense>
        <Footer />
        <Toaster />

      </body>
    </html>
  );
}
