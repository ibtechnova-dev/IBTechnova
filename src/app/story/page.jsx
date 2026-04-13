"use client";

import { motion } from "framer-motion";
import { Quote, Target, Eye, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";

export default function StoryPage() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "CEO at RetailHub",
      message: "IB Technova transformed our online presence. The custom software they built is seamless and has significantly improved our workflow.",
      initials: "AK",
      color: "from-brand-pink to-brand-cyan"
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing Director at HealthFirst",
      message: "The landing pages created by IB Technova are high-converting and look stunning. Their attention to detail is unmatched.",
      initials: "SJ",
      color: "from-brand-cyan to-brand-pink"
    },
    {
      name: "Michael Chen",
      role: "Founder of TechFlow",
      message: "Robust backend development and reliable hosting. IB Technova is our go-to partner for all things digital. Highly recommended!",
      initials: "MC",
      color: "from-brand-pink to-brand-cyan"
    },
  ];

  const values = [
    { name: "Innovation", icon: Target, desc: "Pushing the boundaries of what's possible in the digital space." },
    { name: "Quality", icon: ShieldCheck, desc: "Delivering excellence through rigorous testing and clean code." },
    { name: "Client First", icon: Heart, desc: "Our success is measured by the growth and success of our partners." },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center neon-grid pt-32 pb-24">
      {/* Our Story Header */}
      <section className="w-full max-w-6xl mx-auto px-6 relative z-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/10 text-brand-pink text-xs font-medium tracking-widest uppercase mb-6 inline-block">
            Our Identity
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-gradient-pink uppercase mb-6">
            Our Story
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Founded with a passion for innovation, IB Technova has grown into a dynamic digital partner, dedicated to helping businesses navigate the complexities of the modern online world.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-pink to-transparent mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-pink/20 transition-all duration-500" />
            <div className="w-14 h-14 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the most trusted global partner for digital transformation, where innovation meets elegance, and every project we build sets a new standard for quality and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-cyan/20 transition-all duration-500" />
            <div className="w-14 h-14 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              Empowering businesses of all sizes with scalable, secure, and high-impact digital solutions that solve real-world problems and drive measurable growth in a competitive landscape.
            </p>
          </motion.div>
        </div>

        {/* Story Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden glass-panel border-brand-cyan/20 shadow-[0_0_60px_rgba(14,165,233,0.15)] aspect-[16/9] mb-20 group"
        >
          <Image
            src="/assets/story_visual.png"
            alt="Visionary digital workspace"
            fill
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 mx-auto mb-4 border border-white/10 group-hover:border-brand-pink/30 transition-all">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{v.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section (Integrated) */}
      <section className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 w-full flex items-center justify-center gap-2 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-cyan/30" />
            <Quote className="w-8 h-8 text-brand-cyan/40" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-cyan/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-gradient-blue uppercase mb-6">
            Trusted by Leaders
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our work speaks for itself, but here&apos;s what our clients have to say about their experience with IB Technova.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-pink/30 to-brand-cyan/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full flex flex-col p-8 glass-panel rounded-2xl border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-slate-100 font-bold tracking-wide">{t.name}</h3>
                    <p className="text-slate-400 text-xs font-medium">{t.role}</p>
                  </div>
                </div>

                <p className="text-slate-300 italic leading-relaxed text-sm">
                  &quot;{t.message}&quot;
                </p>
                
                <div className="mt-auto pt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-brand-cyan/30 blur-[1px]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
