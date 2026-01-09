import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["500"], 
  display: "swap",
});

export const metadata: Metadata = {
    title: "Minimal UI Kit",
  description: "Dashboard - Minimal UI",
  icons: {
    icon: "/assets/logo.svg",          
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} bg-gray-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
