"use client";

import Script from "next/script";

// Set these in .env.local (local) or the server environment, then rebuild:
//   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
//   NEXT_PUBLIC_META_PIXEL_ID=123456789012345
// If they are empty, nothing is loaded.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function trackLead(service) {
  if (typeof window === "undefined") return;
  try {
    if (window.gtag) window.gtag("event", "generate_lead", { service });
    if (window.fbq) window.fbq("track", "Lead", { content_name: service });
  } catch {}
}

export function trackWhatsApp() {
  if (typeof window === "undefined") return;
  try {
    if (window.gtag) window.gtag("event", "whatsapp_click");
    if (window.fbq) window.fbq("track", "Contact");
  } catch {}
}

export default function Analytics() {
  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
