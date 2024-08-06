import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const header = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-header",
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "-Your Website-",
  description: "-Your website description-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${header.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
