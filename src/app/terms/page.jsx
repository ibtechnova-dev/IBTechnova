import LegalPage from "@/app/components/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you use the IBtech Nova website or hire IBtech Nova for software, automation, website or construction estimating services.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Services",
    body: [
      "IBtech Nova provides software development, AI automation and calling systems, CRM/HRMS and portals, websites and hosting, cloud and networking, and construction cost estimating and quantity takeoff services.",
      "The exact scope, price, timeline and deliverables for each project are agreed in writing (proposal, quote, email or platform order) before work starts.",
    ],
  },
  {
    heading: "2. Quotes and payment",
    body: [
      "Quotes are valid for 14 days unless stated otherwise. Prices on the website are starting prices; the final price depends on the scope after we review your requirements or plans.",
      "Unless agreed otherwise, larger projects require an advance payment before work begins, with the balance due on delivery or by milestone. Work ordered through a marketplace (such as Upwork or Fiverr) follows that platform’s payment terms.",
    ],
  },
  {
    heading: "3. Client responsibilities",
    body: [
      "You agree to provide accurate information, files and access needed for the work, and to review deliverables within a reasonable time.",
      "Delays caused by missing information or late feedback may move the delivery date.",
    ],
  },
  {
    heading: "4. Revisions",
    body: [
      "Reasonable revisions within the agreed scope are included. Changes outside the agreed scope are quoted separately.",
    ],
  },
  {
    heading: "5. Construction estimates",
    body: [
      "Estimates and takeoffs are prepared from the plans, specifications and pricing information provided and are intended to support your bidding and planning. They are not a guarantee of final construction cost.",
      "You remain responsible for verifying quantities, local pricing, codes and site conditions before submitting a bid or signing a contract.",
    ],
  },
  {
    heading: "6. Ownership",
    body: [
      "After full payment, you own the final deliverables created specifically for you. We may keep our general tools, libraries and know-how, and may reuse them in other work.",
      "We may show non-confidential work in our portfolio with client details removed, unless you ask us not to.",
    ],
  },
  {
    heading: "7. Confidentiality",
    body: [
      "We keep your files and business information confidential and use them only to deliver your project. We are happy to sign an NDA on request.",
    ],
  },
  {
    heading: "8. Limitation of liability",
    body: [
      "To the extent allowed by law, our total liability for any claim related to a project is limited to the amount you paid for that project. We are not liable for indirect or consequential losses such as lost profits or lost bids.",
    ],
  },
  {
    heading: "9. Website use",
    body: [
      "Content on this website is provided for general information. You may not copy or reuse our content, designs or code without permission.",
    ],
  },
  {
    heading: "10. Governing law and contact",
    body: [
      "These terms are governed by the laws of Pakistan unless a signed agreement says otherwise.",
      "Questions? Email info@ibtechnova.com or WhatsApp +92 329 5985714.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="November 17, 2026"
      intro="These terms apply when you use ibtechnova.com or hire IBtech Nova for any of our services. By using the website or placing an order, you agree to them."
      sections={sections}
    />
  );
}
