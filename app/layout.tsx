import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ThemePreview } from "@/components/site/ThemePreview";

export const metadata: Metadata = {
  title: {
    default: "LumkoMDX | Sovereign Health Data Infrastructure",
    template: "%s | LumkoMDX"
  },
  description:
    "LumkoMDX lets healthcare systems use data while patient identity never enters the platform."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var p=new URLSearchParams(location.search);if(p.get('theme')==='classic'){document.documentElement.dataset.theme='classic'}else{delete document.documentElement.dataset.theme}}catch(e){}"
          }}
        />
        <link rel="stylesheet" href="/lumko.css" />
      </head>
      <body suppressHydrationWarning>
        <ThemePreview />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
