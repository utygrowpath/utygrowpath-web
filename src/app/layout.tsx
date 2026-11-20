import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      <body suppressHydrationWarning className="flex min-h-full flex-col bg-[#fff9f0] overscroll-y-none">
        <Script id="splash-pre-hydration-lock" strategy="beforeInteractive">
          {`(function(){var path=location.pathname;if(path==='/peserta'||path==='/tentang-kami'||path==='/_not-found'){return;}try{if(sessionStorage.getItem('uty_growpath_splash_viewed')){return;}}catch(e){}document.documentElement.classList.add('splash-active');})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
