"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/story" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -20 },
    open: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center sticky-nav-wrapper pt-4 md:pt-6 px-4 pointer-events-none"
      >
        <div className="glass-panel w-full md:w-auto px-6 py-3 rounded-[2rem] md:rounded-full flex items-center justify-between md:justify-start gap-6 sm:gap-10 pointer-events-auto border-white/10 bg-[#0a0f1d]/60 shadow-lg relative transition-all duration-300">
          
          {/* Minimal Nav Logo */}
          <Link href="/" className="flex items-center gap-2 group md:mr-4">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="IBtech Nova Logo"
                priority
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center -translate-y-0.5">
              <span className="text-lg sm:text-xl font-black tracking-tighter leading-none mb-0.5">
                <span className="text-gradient-pink">IB</span><span className="text-gradient-blue">tech</span>
              </span>
              <div className="flex items-center gap-1 w-full pl-3.5">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-brand-cyan/60 rounded-full"></div>
                <span className="text-brand-cyan font-bold tracking-[0.3em] text-[7px] sm:text-[7.5px] uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]">nova</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-brand-cyan/60 rounded-full"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group text-sm font-medium tracking-wide text-slate-300 hover:text-white transition-colors duration-300 px-1 py-1">
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-pink rounded-full transition-all duration-300 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>
          
          {/* Contact Info - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:flex items-center gap-6 border-l border-white/10 pl-6 ml-2">
            <a 
              href="https://wa.me/923295985714" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 group/contact transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover/contact:bg-brand-cyan group-hover/contact:text-white transition-all duration-300">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 group-hover/contact:text-brand-cyan transition-colors">
                +92 329 5985714
              </span>
            </a>

            <a 
              href="mailto:ibtechnova@gmail.com" 
              className="flex items-center gap-2 group/contact transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink group-hover/contact:bg-brand-pink group-hover/contact:text-white transition-all duration-300">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 group-hover/contact:text-brand-pink transition-colors">
                ibtechnova@gmail.com
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all ml-2 md:ml-0"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[90] flex items-center justify-center px-6 pt-24 pb-12 pointer-events-none"
          >
            <div className="w-full max-w-sm glass-panel p-8 rounded-[2rem] border-white/10 bg-[#0a0f1d]/90 shadow-2xl pointer-events-auto backdrop-blur-xl">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500 pl-1">Menu</span>
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-bold text-slate-200 hover:text-brand-cyan transition-colors py-2 border-b border-white/5 last:border-0"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500 pl-1">Get in touch</span>
                  <div className="flex flex-col gap-4">
                    <a href="https://wa.me/923295985714" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">WhatsApp</span>
                        <span className="text-sm font-medium text-slate-300">+92 329 5985714</span>
                      </div>
                    </a>
                    <a href="mailto:ibtechnova@gmail.com" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Email</span>
                        <span className="text-sm font-medium text-slate-300">ibtechnova@gmail.com</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Backdrop click close */}
            <div 
              className="absolute inset-0 -z-10 bg-brand-background/40 backdrop-blur-sm pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
