"use client";

import { director } from "@/app/assests";

import { motion } from "framer-motion";
import { ChevronRight, Lightbulb, ShieldCheck, Users, Zap, PlayCircle, ArrowRight, HardHat, ClipboardCheck, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import ServiceIcon from "@/app/components/ServiceIcon";
import { services, BOOK_CALL_URL } from "@/app/data/services";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const STATS = [
  { value: "$52.5M+", label: "in construction estimates" },
  { value: "4,300+", label: "line items priced" },
  { value: "Bots live", label: "with multiple clients" },
  { value: "PK · UAE · KSA · UK · US", label: "clients served" },
];

const TOOLS = ["PlanSwift", "Bluebeam", "Excel", "VICIdial", "Asterisk", "Node.js", "Angular", "React", "Next.js", "MongoDB", "AWS"];

export default function Home() {
  return (
    <main id="top" className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-24">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-14 md:pt-20 pb-10 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs sm:text-sm font-medium tracking-wide uppercase mb-6 inline-block">
            <span className="text-gradient-pink font-bold">IB</span>
            <span className="font-bold">tech Nova</span> · Software, AI &amp; Estimating
          </span>
          <h1 className="text-[2.1rem] leading-[1.15] sm:text-5xl md:text-6xl font-bold mb-6 md:leading-[1.1] tracking-tight">
            <span className="text-gradient-pink">AI Calling Bots</span>, <span className="text-gradient-blue">Custom CRMs</span> &amp;{" "}
            <span className="text-white">US Construction Estimates</span>
            <span className="block text-slate-300 text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
              built and run by one team.
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From voice bots and dialers to HRMS, QA portals and same-day construction takeoffs, we build systems that run real businesses.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/construction-estimating"
              className="group relative px-8 py-3.5 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(225,29,116,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-cyan" />
              <div className="relative flex items-center justify-center gap-2">
                Get a Same-Day Estimate <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-bold text-slate-200 border border-white/15 hover:bg-white/5 transition-all duration-300"
            >
              Book a 15-min Call
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats strip */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-16 relative z-10" aria-label="Key numbers">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl border-white/5 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5 overflow-hidden"
        >
          {STATS.map((s) => (
            <div key={s.label} className="p-6 md:p-8 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-pink leading-tight">{s.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em]">What we do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-5">Six services. One team.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Pick what you need today. We can take on the rest when you&apos;re ready.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const pink = s.accent === "pink";
            return (
              <motion.div key={s.slug} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}>
                <Link
                  href={`/${s.slug}`}
                  className={`group h-full flex flex-col glass-panel p-7 rounded-2xl border-white/5 transition-all duration-300 hover:-translate-y-1 ${pink ? "hover:border-brand-pink/30" : "hover:border-brand-cyan/30"}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pink ? "bg-brand-pink/10 text-brand-pink" : "bg-brand-cyan/10 text-brand-cyan"}`}>
                    <ServiceIcon name={s.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{s.short}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.teaser}</p>
                  <span className={`mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${pink ? "text-brand-pink" : "text-brand-cyan"}`}>
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Estimating spotlight */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <motion.div {...fadeUp} className="glass-panel rounded-3xl border-brand-pink/20 overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
          <div className="p-6 sm:p-8 md:p-12">
            <span className="text-brand-pink text-xs font-bold uppercase tracking-[0.3em]">For US contractors</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 mb-4 leading-tight">Every bid you skip is a job someone else wins.</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Send us one set of plans. Get a takeoff and an Excel estimate broken down by CSI division, priced with your own rates, quoted the same day.
            </p>
            <ul className="list-disc pl-5 text-slate-300 text-sm space-y-2 mb-8 marker:text-brand-pink">
              <li>$24.56M municipal aquatic center, NJ: 9 bid packages</li>
              <li>116,011 SF assisted care community, CA</li>
              <li>Custom homes in NY &amp; Hawaii, priced down to the rebar</li>
            </ul>
            <Link href="/construction-estimating" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-brand-pink to-brand-cyan hover:scale-105 transition-transform">
              <PlayCircle className="w-4 h-4" /> Watch &amp; get a quote
            </Link>
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-br from-[#17102d] via-[#120d24] to-[#090d19] p-4 sm:p-6 md:p-10" aria-label="Recent estimating results">
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.24em] text-brand-pink">Recent estimates <span className="mx-1 text-slate-500">&middot;</span> real numbers</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {[
                { value: "$52.5M+", label: "in construction estimates delivered", Icon: HardHat, accent: "text-brand-pink" },
                { value: "4,360+", label: "line items priced, quantity by quantity", Icon: ClipboardCheck, accent: "text-brand-cyan" },
                { value: "4 states", label: "commercial, municipal & residential", Icon: Building2, accent: "text-violet-300" },
              ].map(({ value, label, Icon, accent }) => (
                <div key={value} className={`flex flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.045] p-3 sm:p-4 md:flex-row md:items-center md:gap-4 md:p-5 ${value === "4 states" ? "col-span-2 md:col-span-1" : ""}`}>
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06] md:h-12 md:w-12 ${accent}`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-2xl font-extrabold leading-none tracking-tight sm:text-3xl md:text-4xl ${accent}`}>{value}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:mt-2 sm:text-sm">{label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2" aria-label="States served">
              {["NY", "NJ", "CA", "HI"].map((state) => (
                <span key={state} className="rounded-lg border border-brand-pink/25 bg-brand-pink/10 px-3 py-1.5 text-xs font-bold text-slate-100">{state}</span>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">Sample estimates available on request</p>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us (kept) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em]">The IB Technova Difference</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-5">Why Choose Us</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to deliver solutions that actually drive business growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Expert Team", description: "Seasoned professionals dedicated to delivering top-tier digital experiences.", Icon: Users, pink: true },
            { title: "Innovation First", description: "Leveraging the latest technologies to build scalable and future-proof solutions.", Icon: Lightbulb },
            { title: "Lightning Fast", description: "Optimized performance ensuring your platforms load instantly and run smoothly.", Icon: Zap, pink: true },
            { title: "Secure & Reliable", description: "Enterprise-grade security and robust infrastructure you can trust.", Icon: ShieldCheck },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              className={`glass-panel p-6 rounded-2xl border-white/5 ${item.pink ? "hover:border-brand-pink/30" : "hover:border-brand-cyan/30"} transition-all duration-300 relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.pink ? "bg-brand-pink/5" : "bg-brand-cyan/5"} rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500`} />
              <div className={`w-12 h-12 rounded-xl ${item.pink ? "bg-brand-pink/10" : "bg-brand-cyan/10"} flex items-center justify-center mb-6`}>
                <item.Icon className={`w-6 h-6 ${item.pink ? "text-brand-pink" : "text-brand-cyan"}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10" aria-label="Tools and technologies we use">
        <motion.div {...fadeUp} className="text-center">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Tools &amp; technologies we use</span>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {TOOLS.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founder */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 relative z-10">
        <motion.div {...fadeUp} className="glass-panel rounded-3xl border-white/5 p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
          <div className="w-28 h-28 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-pink to-brand-cyan p-[3px]">
            <Image src={director} alt="Bilal Ahmad, founder of IBtech Nova" width={112} height={112} className="w-full h-full rounded-full object-cover" />
          </div>
          <div>
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em]">Meet the founder</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Bilal Ahmad</h2>
            <p className="text-slate-400 text-sm mb-3">Founder, IBtech Nova</p>
            <p className="text-slate-300 leading-relaxed mb-4">
              I lead every IBtech Nova project, from dialers and AI bots to CRMs, websites and construction estimates, and I&apos;m the person you talk to from first call to delivery.
            </p>
            <a
              href="https://www.linkedin.com/in/bilal-ahmad-605a0025a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-cyan text-sm font-bold hover:underline underline-offset-4"
            >
              Connect on LinkedIn <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em]">Ready to scale?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-5">Let&apos;s Build the Future Together</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tell us what you need and we&apos;ll get back to you quickly.
          </p>
        </motion.div>
        <ContactForm />
      </section>
    </main>
  );
}
