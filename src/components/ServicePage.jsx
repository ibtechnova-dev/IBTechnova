"use client";

import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, ExternalLink, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ServiceIcon from "@/components/ServiceIcon";
import { serviceBySlug, services, BOOK_CALL_URL } from "@/data/services";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

function SectionTitle({ eyebrow, title, note, pink }) {
  return (
    <motion.div {...fadeUp} className="text-center mb-12">
      {eyebrow && (
        <span className={`${pink ? "text-brand-pink" : "text-brand-cyan"} text-xs font-bold uppercase tracking-[0.3em]`}>{eyebrow}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{title}</h2>
      {note && <p className="text-slate-500 text-sm mt-3">{note}</p>}
    </motion.div>
  );
}

function CtaButton({ cta }) {
  const href = cta.href === "BOOK" ? BOOK_CALL_URL : cta.href;
  const external = href.startsWith("http");
  const cls =
    "group relative inline-flex px-8 py-3.5 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(225,29,116,0.3)]";
  const inner = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-cyan" />
      <span className="relative flex items-center gap-2">
        {cta.label} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}

export default function ServicePage({ slug }) {
  const s = serviceBySlug[slug];
  const pink = s.accent === "pink";
  const others = services.filter((x) => x.slug !== slug);

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-28 md:pt-32 pb-20">
      {/* Hero */}
      <section className={`w-full max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 ${s.video ? "lg:grid-cols-[1.25fr_1fr]" : ""} gap-12 items-center mb-16`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={s.video ? "text-center lg:text-left" : "text-center max-w-3xl mx-auto"}
        >
          <span className={`px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase mb-6 inline-flex items-center gap-2 ${pink ? "border-brand-pink/30 bg-brand-pink/10 text-brand-pink" : "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan"}`}>
            <ServiceIcon name={s.icon} className="w-3.5 h-3.5" /> {s.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-5">{s.title}</h1>
          <p className="text-xl md:text-2xl font-semibold text-gradient-pink mb-5">{s.hook}</p>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">{s.intro}</p>
          <div className={`flex flex-col sm:flex-row gap-4 ${s.video ? "justify-center lg:justify-start" : "justify-center"}`}>
            <CtaButton cta={s.primaryCta} />
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full font-bold text-slate-200 border border-white/15 hover:bg-white/5 transition-all duration-300">
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {s.video && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[260px] sm:w-[300px] rounded-[2.5rem] p-2.5 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 shadow-[0_0_80px_rgba(225,29,116,0.25)]">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-black/60 z-10" />
              <video
                className="w-full aspect-[9/16] rounded-[2rem] bg-black object-cover"
                src={s.video.src}
                poster={s.video.poster}
                controls
                playsInline
                muted
                preload="none"
                aria-label={s.video.label}
              />
            </div>
            <p className="text-slate-500 text-xs mt-4">{s.video.label} · tap to play</p>
          </motion.div>
        )}
      </section>

      {/* Stats */}
      {s.stats && (
        <section className="w-full max-w-6xl mx-auto px-6 mb-20 relative z-10" aria-label="Key numbers">
          <motion.div {...fadeUp} className="glass-panel rounded-3xl border-white/5 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5 overflow-hidden">
            {s.stats.map((st) => (
              <div key={st.label} className="p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-pink leading-tight">{st.value}</div>
                <div className="text-slate-400 text-xs sm:text-sm mt-2">{st.label}</div>
              </div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Projects */}
      {s.projects && (
        <section className="w-full max-w-6xl mx-auto px-6 mb-20 relative z-10">
          <SectionTitle eyebrow="Proof" title={s.projectsTitle} note={s.projectsNote} pink />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {s.projects.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="glass-panel rounded-2xl p-7 border-white/5 hover:border-brand-pink/30 transition-all">
                <span className="text-brand-pink text-[11px] font-bold uppercase tracking-widest">{p.tag}</span>
                <h3 className="text-lg font-bold text-slate-100 mt-2">{p.title}</h3>
                <p className="text-slate-500 text-sm">{p.location}</p>
                <div className="text-3xl font-bold text-gradient-pink my-4">{p.figure}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{p.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Images */}
      {s.images && (
        <section className="w-full max-w-6xl mx-auto px-6 mb-20 relative z-10">
          <div className={`grid grid-cols-1 ${s.images.length > 1 ? "md:grid-cols-2" : "max-w-3xl mx-auto"} gap-6`}>
            {s.images.map((img) => (
              <motion.div key={img.src} {...fadeUp} className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-panel border-white/10">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Highlights */}
      {s.highlights && (
        <section className="w-full max-w-6xl mx-auto px-6 mb-20 relative z-10">
          <SectionTitle eyebrow={s.eyebrow} title={s.highlightsTitle} pink={pink} />
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${s.highlights.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6`}>
            {s.highlights.map((h, i) => (
              <motion.div key={h.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }} className="glass-panel rounded-2xl p-6 border-white/5">
                <CheckCircle2 className={`w-6 h-6 mb-4 ${pink ? "text-brand-pink" : "text-brand-cyan"}`} aria-hidden="true" />
                <h3 className="text-base font-bold text-slate-100 mb-2">{h.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Portfolio */}
      {s.portfolio && (
        <section className="w-full max-w-6xl mx-auto px-6 mb-20 relative z-10">
          <SectionTitle eyebrow="Portfolio" title={s.portfolioTitle} pink={pink} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.portfolio.map((w, i) => (
              <motion.a
                key={w.url}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.06 }}
                className="group glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-brand-pink/30 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={w.img} alt={`${w.name} website`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-bold text-slate-100">{w.name}</h3>
                    <p className="text-slate-500 text-xs">{w.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-pink transition-colors" aria-hidden="true" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      )}

      {/* Pricing */}
      {s.pricing && (
        <section className="w-full max-w-5xl mx-auto px-6 mb-20 relative z-10">
          <SectionTitle eyebrow="Pricing" title="Simple starting prices" note={s.pricing.note} pink />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {s.pricing.tiers.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className={`relative glass-panel rounded-2xl p-7 text-center ${t.featured ? "border-brand-pink/50 shadow-[0_0_40px_rgba(225,29,116,0.2)]" : "border-white/5"}`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-pink to-brand-cyan text-white text-[10px] font-bold uppercase tracking-widest">
                    Most popular
                  </span>
                )}
                <h3 className="text-slate-300 font-bold uppercase tracking-widest text-sm">{t.name}</h3>
                <div className="text-4xl font-bold text-white my-4">
                  <span className="text-slate-500 text-base font-medium mr-1">from</span>
                  {t.price}
                </div>
                <p className="text-slate-400 text-sm">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Form */}
      <section id="quote" className="w-full max-w-4xl mx-auto px-6 mb-20 relative z-10 scroll-mt-28">
        <SectionTitle
          eyebrow={s.form === "estimate" ? "Same-day quote" : "Get in touch"}
          title={s.form === "estimate" ? "Send your project. We'll quote it the same day." : `Talk to us about ${s.short.toLowerCase()}`}
          pink={pink}
        />
        <ContactForm variant={s.form === "estimate" ? "estimate" : "contact"} defaultService={s.form === "estimate" ? "" : s.short} />
      </section>

      {/* FAQ */}
      {s.faqs && (
        <section className="w-full max-w-3xl mx-auto px-6 mb-20 relative z-10">
          <SectionTitle eyebrow="FAQ" title="Common questions" pink={pink} />
          <div className="flex flex-col gap-3">
            {s.faqs.map((f) => (
              <details key={f.q} className="group glass-panel rounded-xl border-white/5 open:border-white/15 transition-colors">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-semibold text-slate-100 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="w-4 h-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 -mt-1 text-slate-400 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="Other services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/${o.slug}`} className="glass-panel rounded-xl p-5 border-white/5 hover:border-brand-cyan/30 transition-all flex items-center gap-3">
              <ServiceIcon name={o.icon} className={`w-5 h-5 flex-shrink-0 ${o.accent === "pink" ? "text-brand-pink" : "text-brand-cyan"}`} />
              <span className="text-sm font-semibold text-slate-200">{o.short}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
