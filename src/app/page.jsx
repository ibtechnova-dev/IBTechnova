"use client";

import { motion } from "framer-motion";
import { ChevronRight, Globe, MessageSquareCode, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main id="top" className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-24">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-pink">IB</span>
            <span className="text-gradient-blue">tech</span>
            <span className="mx-2"></span>
            <span className="text-gradient-blue">Nova</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We help businesses grow online with modern and professional <span className="text-brand-cyan font-semibold">digital solutions</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/services" className="group relative px-8 py-3.5 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(225,29,116,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-cyan" />
              <div className="relative flex items-center gap-2">
                Get Started <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="/contact" className="px-8 py-3.5 rounded-full font-bold text-slate-300 border border-white/10 hover:bg-white/5 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full relative rounded-3xl overflow-hidden glass-panel border-brand-cyan/20 shadow-[0_0_60px_rgba(14,165,233,0.15)] aspect-[16/9] md:aspect-[21/9]"
        >
          <Image
            src="/hero.png"
            alt="Futuristic software engineering environment"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover opacity-90 transition-opacity hover:opacity-100 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Feature Teasers */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border-white/5 hover:border-brand-pink/20 transition-all group overflow-hidden"
          >
            <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/5">
              <Image 
                src="/assets/services_visual.png" 
                alt="Web Solutions" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-pink/10 group-hover:bg-transparent transition-all" />
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Web Solutions</h3>
            <p className="text-slate-400 text-sm mb-4">Professional websites and high-converting landing pages.</p>
            <Link href="/services" className="text-brand-pink text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">Learn More &rarr;</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl border-white/5 hover:border-brand-cyan/20 transition-all group overflow-hidden"
          >
            <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/5">
              <Image 
                src="/assets/story_visual.png" 
                alt="Success stories" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-cyan/10 group-hover:bg-transparent transition-all" />
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Success Stories</h3>
            <p className="text-slate-400 text-sm mb-4">See how we&apos;ve helped other businesses succeed.</p>
            <Link href="/story" className="text-brand-cyan text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">Read Stories &rarr;</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl border-white/5 hover:border-brand-pink/20 transition-all group overflow-hidden"
          >
            <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/5">
              <Image 
                src="/assets/contact_visual.png" 
                alt="Get Started" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-pink/10 group-hover:bg-transparent transition-all" />
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-6">
              <MessageSquareCode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Get Started</h3>
            <p className="text-slate-400 text-sm mb-4">Ready to build your next project with us?</p>
            <Link href="/contact" className="text-brand-pink text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">Contact Now &rarr;</Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em]">Ready to scale?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Let&apos;s Build the Future Together</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore the possibilities, our team is ready to help you navigate the digital landscape.
            </p>
          </motion.div>
        </div>

        <ContactForm />
      </section>

    </main>
  );
}
