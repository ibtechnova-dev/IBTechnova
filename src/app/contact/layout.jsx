import { og_image } from "@/app/assests";
export const metadata = {
  title: "Contact Us",
  description: "Talk to IBtech Nova about your project. WhatsApp +92 329 5985714 or send us a message and we will get back to you quickly.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us | IBtech Nova", description: "Talk to IBtech Nova about your project. WhatsApp +92 329 5985714 or send us a message and we will get back to you quickly.", images: [og_image.src], url: "/contact" },
  twitter: { card: "summary_large_image", images: [og_image.src], title: "Contact Us | IBtech Nova", description: "Talk to IBtech Nova about your project. WhatsApp +92 329 5985714 or send us a message and we will get back to you quickly." },
};

export default function Layout({ children }) {
  return children;
}
