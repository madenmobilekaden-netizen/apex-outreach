import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Apex Outreach — Your Website. 3 Days. Guaranteed.",
  description:
    "We build professional websites for small businesses in 3 days flat. $799 flat rate. Money back if we miss the deadline.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} font-sans bg-white text-[#111111] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
