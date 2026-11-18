import { og_image } from "@/app/assests";
export const metadata = {
  title: "Services",
  description: "Custom software, AI-based automation, cloud services, high-performance websites, hosting and digital solutions from IBtech Nova.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | IBtech Nova", description: "Custom software, AI-based automation, cloud services, high-performance websites, hosting and digital solutions from IBtech Nova.", images: [og_image.src], url: "/services" },
  twitter: { card: "summary_large_image", images: [og_image.src], title: "Services | IBtech Nova", description: "Custom software, AI-based automation, cloud services, high-performance websites, hosting and digital solutions from IBtech Nova." },
};

export default function Layout({ children }) {
  return children;
}
