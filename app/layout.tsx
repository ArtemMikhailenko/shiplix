import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/app/components/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shiplix.dev"),
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${dmSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
