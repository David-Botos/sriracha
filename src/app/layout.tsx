import type { Metadata } from "next";
import { Sriracha } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const sriracha = Sriracha({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sriracha",
});
const suse = localFont({
  src: [
    {
      path: "../../public/fonts/SUSE-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUSE-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUSE-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-suse",
});

export const metadata: Metadata = {
  title: "David Botos",
  description: "Design and Engineering informed with Business Strategy",
  openGraph: {
    images: [
      {
        url: 'https://davidbotos.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sriracha.className} ${suse.variable}`}>
      <body className="suse-font text-brownSriracha">{children}</body>
    </html>
  );
}
