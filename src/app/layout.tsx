import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "DevForge - Design & Code Platform",
  description: "Collaborative design with Figma and AI-powered code generation with Vibe",
  icons: [{ rel: "icon", url: "/figma-logo.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import AOSProvider from "~/components/landing/AOSProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className}`}>
      <body>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
