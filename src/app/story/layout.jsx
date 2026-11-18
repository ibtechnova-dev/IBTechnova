import { og_image } from "@/app/assests";
export const metadata = {
  title: "Our Story",
  description: "How IBtech Nova started, our vision, mission and the values behind every system we build for clients in Pakistan, the GCC, the UK and the US.",
  alternates: { canonical: "/story" },
  openGraph: { title: "Our Story | IBtech Nova", description: "How IBtech Nova started, our vision, mission and the values behind every system we build for clients in Pakistan, the GCC, the UK and the US.", images: [og_image.src], url: "/story" },
  twitter: { card: "summary_large_image", images: [og_image.src], title: "Our Story | IBtech Nova", description: "How IBtech Nova started, our vision, mission and the values behind every system we build for clients in Pakistan, the GCC, the UK and the US." },
};

export default function Layout({ children }) {
  return children;
}
