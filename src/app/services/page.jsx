"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  Laptop,
  Database,
  Settings,
  Cloud,
  Cpu,
  CheckCircle2,
  PhoneCall,
  Mail,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LinkedinIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ServicesPage() {
  const services = [
    {
      name: "Digital Solutions",
      icon: Rocket,
      desc: "Unlock new possibilities with advanced digital solutions designed to propel your business forward."
    },
    {
      name: "Customized Software",
      icon: Settings,
      desc: "Get bespoke software development that matches your specific business logic and operational needs."
    },
    {
      name: "Cloud Services",
      icon: Cloud,
      desc: "Secure and scalable cloud infrastructures to ensure your data is always accessible and protected."
    },
    {
      name: "AI-based Automation",
      icon: Cpu,
      desc: "Leverage AI-based automation and smart insights to optimize your workflows and decision-making."
    },
    {
      name: "High-performance Websites",
      icon: Globe,
      desc: "Deploy high-performance websites that drive conversion and represent your brand with excellence."
    },
    {
      name: "Business Representation",
      icon: Laptop,
      desc: "Full working, high-quality websites that professionally represent your unique business identity."
    },
    {
      name: "Hosting & Deployment",
      icon: Database,
      desc: "Fast, secure, and reliable hosting & deployment services to keep your digital assets online 24/7."
    },
  ];

  const whyChooseUs = [
    "Custom Solutions by Experts",
    "Scalable & Future-Ready Technology",
    "All-Inclusive Support"
  ];

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-32 pb-24">
      <section className="w-full max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/10 text-brand-pink text-xs font-medium tracking-widest uppercase mb-6 inline-block">
            Innovating Today
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-gradient-pink uppercase mb-6">
            Our Services
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Transform your business with <span className="text-white font-semibold">smart technology</span>. We offer end-to-end IT solutions tailored for a smarter tomorrow.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-pink to-transparent mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden glass-panel border-brand-cyan/20 shadow-[0_0_60px_rgba(14,165,233,0.15)] aspect-[16/9] mb-20 group"
        >
          <Image
            src="/assets/services_visual.png"
            alt="Futuristic software and AI visualization"
            fill
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-pink/40 to-brand-cyan/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full flex flex-col p-8 glass-panel glass-panel-hover rounded-2xl border-white/5">
                  <div className="w-14 h-14 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center text-brand-pink mb-6 group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-100 mb-3 tracking-wide">{service.name}</h2>
                  <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto mb-32 p-10 glass-panel rounded-3xl border-brand-cyan/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center uppercase tracking-widest">
            Why <span className="text-gradient-blue">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink border border-brand-pink/20 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-slate-200 font-semibold text-sm tracking-wide">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Journey Section */}
        <section className="w-full max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white italic">
              Start Your Digital <span className="text-brand-pink">Journey</span> Today!
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl px-4">
              <a href="https://ibtechnova.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">ibtechnova.com</span>
              </a>

              <a href="https://wa.me/923295985714" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">+92 329 5985714</span>
              </a>

              <a href="https://www.linkedin.com/company/ibtechnova" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">IB Tech NOVA</span>
              </a>

              <a href="mailto:ibtechnova@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">ibtechnova@gmail.com</span>
              </a>
            </div>

            <p className="text-slate-500 italic mt-8 font-medium">
              Innovating <span className="text-brand-pink">Today</span> for a <span className="text-brand-cyan">Smarter Tomorrow</span>
            </p>
          </motion.div>
        </section>
      </section>
    </main>
  );
}
