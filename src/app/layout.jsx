import { Outfit } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const SITE_URL = "https://www.ibtechnova.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IBtech Nova | AI Calling Bots, Custom CRMs & US Construction Estimates",
    template: "%s | IBtech Nova",
  },
  description:
    "IBtech Nova builds AI calling bots and dialers, custom CRM/HRMS and QA portals, websites, and delivers same-day US construction estimates and quantity takeoffs.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "IBtech Nova",
    url: SITE_URL,
    title: "IBtech Nova | AI Calling Bots, Custom CRMs & US Construction Estimates",
    description:
      "AI calling bots, custom CRMs and same-day US construction estimates, built and run by one team.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IBtech Nova" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IbTechnova51426",
    title: "IBtech Nova | AI Calling Bots, Custom CRMs & US Construction Estimates",
    description:
      "AI calling bots, custom CRMs and same-day US construction estimates, built and run by one team.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased dark`}
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-[#0a0f1d] text-slate-100 selection:bg-pink-500 selection:text-white">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
