import type { Metadata } from "next";
import { Sriracha } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Head from "next/head";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sriracha.className} ${suse.variable}`}>
      <Head>
        <Head>
          <meta
            property="og:image"
            content="https://davidbotos.com/images/og-image.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      </Head>
      <body className="suse-font text-brownSriracha">{children}</body>
    </html>
  );
}
