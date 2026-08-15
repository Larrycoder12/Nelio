import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://nelioapp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nelio: Review Requests That Fire the Moment the Job's Done",
    template: "%s | Nelio",
  },
  description:
    "Nelio is review management software built for HVAC, plumbing, and electrical contractors. Connect Jobber or Housecall Pro and every completed job automatically triggers a review request, attributed to the tech who earned it.",
  keywords: [
    "HVAC review software",
    "home services review management",
    "Jobber integration",
    "Housecall Pro integration",
    "contractor reputation management",
    "review request automation",
  ],
  authors: [{ name: "Nelio" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nelio",
    title: "The Job's Done. The Review Request Is Already Out.",
    description:
      "Built for HVAC and home services. Review requests fire automatically from Jobber or Housecall Pro, attributed to the tech who earned them.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Job's Done. The Review Request Is Already Out.",
    description:
      "Built for HVAC and home services. Review requests fire automatically from Jobber or Housecall Pro, attributed to the tech who earned them.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", barlowCondensed.variable, barlow.variable)}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:rounded-sm focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-ink focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
