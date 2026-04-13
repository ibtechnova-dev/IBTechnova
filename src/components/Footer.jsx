"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16H20l-11.733-16z" />
    <path d="M4 20l6.768-6.768m2.464-2.464L20 4" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full footer-animated-bg border-t border-white/5 pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Branding Section */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 group mb-6">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="IBtech Nova Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight leading-none mb-1">
                <span className="text-gradient-pink">IB</span><span className="text-gradient-blue">tech</span>
              </span>
              <div className="flex items-center gap-1 w-full pl-3.5">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-brand-cyan/60 rounded-full"></div>
                <span className="text-brand-cyan font-bold tracking-[0.3em] text-[7.5px] uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]">nova</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-brand-cyan/60 rounded-full"></div>
              </div>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Innovating Today for a Smarter Tomorrow. We provide premium software solutions to help your business scale globally.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ibtechnova/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand-pink hover:bg-white/10 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ib-technova-04b27a401/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:bg-white/10 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/IbTechnova51426"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-black hover:bg-slate-100 transition-all font-bold"
            >
              <XIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home</Link></li>
            <li><Link href="/story" className="text-slate-400 hover:text-white text-sm transition-colors">Our Story</Link></li>
            <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Services</Link></li>
            <li><Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h3>
          <ul className="space-y-4">
            <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Web Solutions</Link></li>
            <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Custom Software</Link></li>
            <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">AI Automation</Link></li>
            <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Cloud Services</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand-cyan mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter mb-0.5">WhatsApp</span>
                <a href="https://wa.me/923295985714" className="text-slate-400 hover:text-white text-sm">+92 329 5985714</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-brand-pink mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter mb-0.5">Email</span>
                <a href="mailto:ibtechnova@gmail.com" className="text-slate-400 hover:text-white text-sm">ibtechnova@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Available for Projects</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">
          &copy; {currentYear} IB Technova. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-slate-500 hover:text-slate-300 text-[10px] uppercase font-bold tracking-widest transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-slate-500 hover:text-slate-300 text-[10px] uppercase font-bold tracking-widest transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
