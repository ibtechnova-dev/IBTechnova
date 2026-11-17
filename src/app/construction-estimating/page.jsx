import ServicePage from "@/components/ServicePage";
import JsonLd from "@/components/JsonLd";
import { serviceBySlug } from "@/data/services";

const s = serviceBySlug["construction-estimating"];

export const metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: { canonical: "/construction-estimating" },
  openGraph: {
    title: `${s.metaTitle} | IBtech Nova`,
    description: s.metaDescription,
    url: "/construction-estimating",
    images: [s.video ? "/videos/estimating-thumb.jpg" : "/og-image.png"],
  },
  twitter: { card: "summary_large_image", title: `${s.metaTitle} | IBtech Nova`, description: s.metaDescription, images: ["/og-image.png"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.metaTitle,
  serviceType: s.short,
  description: s.metaDescription,
  url: "https://www.ibtechnova.com/construction-estimating",
  provider: { "@type": "Organization", name: "IBtech Nova", url: "https://www.ibtechnova.com" },
  areaServed: ["US", "GB", "AE", "SA", "PK"],
};

const faqLd = s.faqs && {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <ServicePage slug="construction-estimating" />
    </>
  );
}
