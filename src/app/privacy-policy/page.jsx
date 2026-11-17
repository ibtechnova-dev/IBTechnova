import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How IBtech Nova collects, uses and protects the information you share with us through our website, forms and project files.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "1. Information we collect",
    body: [
      "Contact details you give us through our forms, email, WhatsApp or social media, such as your name, company, email address and phone number.",
      "Project information and files you send us, such as requirements, construction plans and drawings, documents and data needed to deliver the work.",
      "Basic technical data when you visit the website, such as browser type, pages viewed and approximate location, collected through standard server logs and, where enabled, analytics tools.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "To reply to your enquiry, prepare quotes and estimates, deliver the services you request, and send invoices and project updates.",
      "To improve our website and services. We do not sell your personal information.",
    ],
  },
  {
    heading: "3. Your project files and confidentiality",
    body: [
      "Plans, drawings, estimates, source code and business data you share are treated as confidential. They are used only to deliver your project and are shared only with team members who work on it.",
      "We are happy to sign a non-disclosure agreement (NDA) before you share sensitive files.",
    ],
  },
  {
    heading: "4. Sharing with third parties",
    body: [
      "We use trusted service providers to run our business, for example email, cloud storage, hosting and payment platforms. They only process data as needed to provide their service to us.",
      "We may disclose information if required by law.",
    ],
  },
  {
    heading: "5. Cookies and analytics",
    body: [
      "Our website may use cookies and analytics or advertising tools (such as Google Analytics or Meta Pixel) to understand how visitors use the site. You can block or delete cookies in your browser settings.",
    ],
  },
  {
    heading: "6. Data retention and security",
    body: [
      "We keep your information only as long as needed for the purposes above or as required by law, and we use reasonable technical and organisational measures to protect it.",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "You can ask us to access, correct or delete the personal information we hold about you by emailing ibtechnova@gmail.com.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "IBtech Nova, Islamabad, Pakistan. Email: ibtechnova@gmail.com. WhatsApp: +92 329 5985714.",
      "We may update this policy from time to time. The latest version will always be on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="November 17, 2026"
      intro="IBtech Nova (“we”, “us”) provides software development, AI automation, websites, cloud services and construction estimating services to clients in Pakistan, the GCC, the UK, the US and elsewhere. This policy explains what information we collect and how we use it."
      sections={sections}
    />
  );
}
