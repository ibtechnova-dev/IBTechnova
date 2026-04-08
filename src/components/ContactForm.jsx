"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const INPUT_BASE =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm outline-none transition-all duration-300 focus:border-brand-cyan/60 focus:bg-brand-cyan/5 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.12)] hover:border-white/20";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    else if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on edit
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      // -----------------------------------------------------------------
      // Replace the URL below with your Formspree endpoint, e.g.:
      //   https://formspree.io/f/YOUR_FORM_ID
      // Sign up free at https://formspree.io to get an endpoint.
      // -----------------------------------------------------------------
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="relative group/card">
        {/* Glow border */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-pink/40 via-brand-cyan/20 to-brand-pink/10 opacity-60 blur-sm group-hover/card:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative glass-panel rounded-2xl p-8">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-brand-cyan" />
                </div>
                <h4 className="text-xl font-bold text-slate-100">Message Sent!</h4>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-brand-cyan text-sm font-medium hover:underline underline-offset-4 transition"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5 text-left"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={`${INPUT_BASE} ${errors.name ? "border-brand-pink/60 focus:border-brand-pink/80 focus:shadow-[0_0_0_3px_rgba(225,29,116,0.12)]" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-brand-pink text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${INPUT_BASE} ${errors.email ? "border-brand-pink/60 focus:border-brand-pink/80 focus:shadow-[0_0_0_3px_rgba(225,29,116,0.12)]" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-brand-pink text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project or inquiry…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${INPUT_BASE} resize-none ${errors.message ? "border-brand-pink/60 focus:border-brand-pink/80 focus:shadow-[0_0_0_3px_rgba(225,29,116,0.12)]" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-brand-pink text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {status === "error" && (
                  <p className="text-brand-pink text-sm flex items-center gap-2 bg-brand-pink/10 border border-brand-pink/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative mt-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(225,29,116,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-cyan" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2 text-sm tracking-wider uppercase">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
