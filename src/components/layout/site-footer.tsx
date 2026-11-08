import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dcc9a8]/60 bg-[#fffdf8] px-5 py-7 text-center sm:py-9">
      <p className="text-sm text-[#2b4869]">
        Copyright © {siteConfig.year} UTY Growpath Expo Season 4
      </p>
    </footer>
  );
}
