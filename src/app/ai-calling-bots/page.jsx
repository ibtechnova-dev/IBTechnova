import { og_image, estimating_thumb } from "@/app/assests";
import ServicePage from "@/app/components/ServicePage";
import JsonLd from "@/app/components/JsonLd";
import { serviceBySlug } from "@/app/data/services";

const s = serviceBySlug["ai-calling-bots"];

export const metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: { canonical: "/ai-calling-bots" },
  openGraph: {
    title: `${s.metaTitle} | IBtech Nova`,
    description: s.metaDescription,
    url: "/ai-calling-bots",
    images: [s.video ? estimating_thumb.src : og_image.src],
  },
  twitter: { card: "summary_large_image", title: `${s.metaTitle} | IBtech Nova`, description: s.metaDescription, images: [og_image.src] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.metaTitle,
  serviceType: s.short,
  description: s.metaDescription,
  url: "https://www.ibtechnova.com/ai-calling-bots",
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
      <ServicePage slug="ai-calling-bots" />
    </>
  );
}
