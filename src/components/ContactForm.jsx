"use client";

import { useState } from "react";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// ---------------------------------------------------------------------------
// Yup validation schema – all fields required
// ---------------------------------------------------------------------------
const schema = Yup.object({
  name: Yup.string()
    .trim()
    // .min(2, "Name must be at least 2 characters.")
    .required("Name is required."),

  email: Yup.string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Email is required."),

  phone: Yup.string()
    .trim()
    .matches(
      /^[\+]?[\d\s\-\(\)]{7,15}$/,
      "Please enter a valid phone number (e.g. +92 300 0000000)."
    )
    .required("Contact number is required."),

  remarks: Yup.string().trim(),
});

// ---------------------------------------------------------------------------
// Shared input class
// ---------------------------------------------------------------------------
const inputCls = (hasError) =>
  [
    "w-full bg-white/5 border rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm outline-none transition-all duration-300",
    "hover:border-white/20",
    hasError
      ? "border-brand-pink/60 focus:border-brand-pink focus:shadow-[0_0_0_3px_rgba(225,29,116,0.18)]"
      : "border-white/10 focus:border-brand-cyan/60 focus:bg-brand-cyan/5 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.12)]",
  ].join(" ");

// ---------------------------------------------------------------------------
// Reusable error message
// ---------------------------------------------------------------------------
function FieldError({ msg }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          key={msg}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1 text-xs font-medium text-brand-pink drop-shadow-[0_0_6px_rgba(225,29,116,0.7)]"
        >
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function ContactForm() {
  const EMPTY = { name: "", email: "", phone: "", remarks: "" };
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // Validate with Yup and return a flat errors object
  const runValidation = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });
      return {};
    } catch (err) {
      return err.inner.reduce((acc, e) => {
        if (e.path && !acc[e.path]) acc[e.path] = e.message;
        return acc;
      }, {});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = await runValidation(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    // Google Apps Script requires multipart/form-data (no JSON header)
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwsujCDQ1wJTfJqWvW87zE19JafVGd6O4oqwEiUIRdTN-OgIoyyn4-_2XXBckgmQhR1Eg/exec";

    try {
      const fd = new FormData();
      fd.append("name",    form.name);
      fd.append("email",   form.email);
      fd.append("phone",   form.phone);
      fd.append("remarks", form.remarks);

      const res = await fetch(SCRIPT_URL, { method: "POST", body: fd });
      const text = await res.text();

      if (text === "Success") {
        setStatus("success");
        setForm(EMPTY);
        setErrors({});
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
        {/* Animated glow border */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-pink/40 via-brand-cyan/20 to-brand-pink/10 opacity-60 blur-sm group-hover/card:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative glass-panel rounded-2xl p-8">
          <AnimatePresence mode="wait">

            {/* ── Success state ── */}
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
              /* ── Form ── */
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
                    className={inputCls(!!errors.name)}
                  />
                  <FieldError msg={errors.name} />
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
                    className={inputCls(!!errors.email)}
                  />
                  <FieldError msg={errors.email} />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                    Contact Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+92 300 0000000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputCls(!!errors.phone)}
                  />
                  <FieldError msg={errors.phone} />
                </div>

                {/* Remarks */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-remarks" className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                    Remarks
                  </label>
                  <textarea
                    id="contact-remarks"
                    name="remarks"
                    rows={5}
                    placeholder="Tell us about your project or inquiry…"
                    value={form.remarks}
                    onChange={handleChange}
                    className={`${inputCls(!!errors.remarks)} resize-none`}
                  />
                  <FieldError msg={errors.remarks} />
                </div>

                {/* Server error banner */}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-brand-pink text-sm bg-brand-pink/10 border border-brand-pink/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or contact us directly.
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
