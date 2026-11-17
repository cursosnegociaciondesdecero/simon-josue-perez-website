import type { Metadata } from "next";
import { asset, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.simonjosueperez.com"),
  title: site.name,
  description: site.hero.subtitle,
  icons: { icon: asset("/favicon.ico") },
  openGraph: {
    title: site.name,
    description: site.hero.subtitle,
    images: [asset("/images/og.jpg")],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
