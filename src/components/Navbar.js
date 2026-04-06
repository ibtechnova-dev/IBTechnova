"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="glass-panel px-8 py-3 rounded-full flex items-center gap-6 sm:gap-10 pointer-events-auto border-white/10 bg-[#0a0f1d]/60 shadow-lg">

        {/* Minimal Nav Logo */}
        <Link href="#top" className="flex items-center gap-2 group mr-2 sm:mr-4">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/sphere_logo.png"
              alt="IBtech Nova Logo"
              priority
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-white leading-none">
            <span className="text-gradient-pink">IB</span><span className="text-gradient-blue text-sm">tech</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative group text-sm font-medium tracking-wide text-slate-300 hover:text-white transition-colors duration-300 px-1 py-1">
              {link.name}
              {/* Pixako style underline/dot hover */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-pink rounded-full transition-all duration-300 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
            </Link>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}
