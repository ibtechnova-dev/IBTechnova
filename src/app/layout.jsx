import { Outfit } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "IB Technova - Software and Web Services",
  description: "We help businesses grow online with modern and professional digital solutions. Business web, landing pages, and custom software.",
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
