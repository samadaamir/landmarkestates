import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-screen overflow-hidden flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}