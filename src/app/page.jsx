"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareCode, Globe, Laptop, Database, Rocket, ChevronRight, PhoneCall, Mail } from "lucide-react";
import Image from "next/image";
import logoSrc from "@/assets/logo.png";
import ContactForm from "@/components/ContactForm";
import heroSrc from "@/assets/hero.png";

export default function Home() {
  const services = [
    { name: "Business Websites", icon: Globe, desc: "Professional, responsive websites built to establish a powerful brand presence online and capture leads effectively." },
    { name: "Landing Pages", icon: Rocket, desc: "High-converting, performance-optimized landing pages designed purely for marketing campaigns and sales funnels." },
    { name: "Custom Software", icon: Laptop, desc: "Scalable, bespoke software systems tailored precisely to match your business logic and operational needs." },
    { name: "Backend Development", icon: Database, desc: "Robust, secure, and blazing-fast server infrastructures with comprehensive API and database architectures." },
    { name: "Hosting & Deployment", icon: MessageSquareCode, desc: "Seamless deployment pipelines and reliable cloud hosting solutions to ensure maximum uptime and performance." },
  ];

  return (
    <main id="top" className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-24">


      {/* Navigation / Header Dummy Wrap */}
      <header className="w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mix-blend-screen items-center text-center"
        >
          {/* Logo Graphic */}
          <div className="flex items-center gap-3 sm:gap-4 justify-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src={logoSrc}
                alt="IBtech Nova Logo"
                priority
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center -translate-y-1">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tighter leading-none mb-0.5">
                <span className="text-gradient-pink">IB</span><span className="text-gradient-blue">tech</span>
              </h1>
              <div className="flex items-center gap-1.5 w-full pl-5">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-brand-cyan/60 rounded-full"></div>
                <span className="text-brand-cyan font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]">nova</span>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-brand-cyan/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-16 pb-12 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-sm font-medium tracking-wide uppercase mb-6 inline-block">
            Welcome to
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-pink">IB</span>
            <span className="text-gradient-blue">tech</span>
            <span className="mx-2"></span>
            <span className="text-gradient-blue">Nova</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We help businesses grow online with modern and professional <span className="text-brand-cyan font-semibold">digital solutions</span>.
          </p>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full relative rounded-3xl overflow-hidden glass-panel border-brand-cyan/20 shadow-[0_0_60px_rgba(14,165,233,0.15)] aspect-[16/9] md:aspect-[21/9]"
        >
          <Image
            src={heroSrc}
            alt="Futuristic software engineering environment"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover opacity-90 transition-opacity hover:opacity-100 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-wider text-gradient-pink uppercase">
            Our Services
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-pink to-transparent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-pink/50 to-brand-cyan/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full flex flex-col p-8 glass-panel glass-panel-hover rounded-2xl">
                  <div className="w-14 h-14 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center text-brand-pink mb-6 group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 tracking-wide">{service.name}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section id="contact" className="w-full max-w-4xl mx-auto px-6 pt-16 pb-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl font-light">
            Take your business to the next level with a <br className="hidden md:block" />
            <span className="text-gradient font-bold">strong online presence.</span>
          </p>

          <p className="text-lg text-slate-400 mb-8">
            Contact us today and get your website started!
          </p>

          {/* Contact Form */}
          <div className="w-full mb-12">
            <ContactForm />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-md mx-auto mb-10">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-slate-500 text-xs uppercase tracking-widest">or reach us directly</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 items-center justify-center">
            {/* WhatsApp Button */}
            <a fill="true" target="_blank" rel="noopener noreferrer" href="https://wa.me/923295985714" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-green-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <PhoneCall className="w-6 h-6 group-hover:animate-pulse" />
                <span className="text-xl md:text-2xl tracking-wider">+92 329 5985714</span>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
            </a>

            {/* Email Button */}
            <a href="mailto:ibtechnova@gmail.com" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-slate-800 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,29,116,0.4)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-pink to-brand-cyan opacity-20 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Mail className="w-6 h-6 group-hover:animate-pulse" />
                <span className="text-xl md:text-2xl tracking-wider">ibtechnova@gmail.com</span>
              </div>
              <div className="absolute inset-0 border-2 border-brand-pink/50 rounded-full"></div>
            </a>
          </div>

          {/* Subfooter */}
          <div className="text-sm md:text-base text-slate-500 max-w-lg mx-auto">
            <p className="font-medium text-slate-400 mb-1">Serving all types of businesses</p>
            <p>(Medical industries, Corporate firms, Educational institutions, etc.)</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
