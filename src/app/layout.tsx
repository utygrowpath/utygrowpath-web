import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "utygrowpathS4",
    template: `%s · utygrowpathS4`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-[#fff9f0] antialiased overscroll-y-none`}
    >
      <head>
        {/* Pre-hydration lock script: executed synchronously before any DOM paint to eliminate flash of home content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!sessionStorage.getItem('uty_growpath_splash_viewed')){document.documentElement.classList.add('splash-active');}}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="flex min-h-full flex-col bg-[#fff9f0] overscroll-y-none">
        {children}
      </body>
    </html>
  );
}
