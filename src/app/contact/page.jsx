"use client";

import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-32 pb-24">
      <section className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-medium tracking-widest uppercase mb-6 inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-gradient-pink uppercase mb-6">
            Contact Us
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or need expert digital advice? Reach out to us today and let&apos;s build something extraordinary together.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-pink to-transparent mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Contact Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto relative rounded-3xl overflow-hidden glass-panel border-brand-cyan/20 shadow-[0_0_60px_rgba(14,165,233,0.15)] aspect-video mb-16 group"
        >
          <Image
            src="/assets/contact_visual.png"
            alt="Digital partnership and connection"
            fill
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Contact Form Container */}
        <div className="w-full max-w-2xl mx-auto mb-16">
          <ContactForm />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-md mx-auto mb-12">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-slate-500 text-xs uppercase tracking-widest">or reach us directly</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row w-full max-w-2xl mx-auto gap-4 sm:gap-6 items-center justify-center">
          {/* WhatsApp Button */}
          <a fill="true" target="_blank" rel="noopener noreferrer" href="https://wa.me/923295985714" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 font-bold text-white bg-green-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2 sm:gap-3">
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              <span className="text-base sm:text-xl md:text-2xl tracking-wide sm:tracking-wider whitespace-nowrap">+92 329 5985714</span>
            </div>
            <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
          </a>

          {/* Email Button */}
          <a href="mailto:ibtechnova@gmail.com" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 font-bold text-white bg-slate-800 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(225,29,116,0.4)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-pink to-brand-cyan opacity-20 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2 sm:gap-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              <span className="text-[15px] sm:text-xl md:text-2xl tracking-wide sm:tracking-wider whitespace-nowrap">ibtechnova@gmail.com</span>
            </div>
            <div className="absolute inset-0 border-2 border-brand-pink/50 rounded-full"></div>
          </a>
        </div>
      </section>
    </main>
  );
}
