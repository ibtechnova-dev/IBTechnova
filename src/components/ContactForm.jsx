"use client";

import { useState } from "react";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { serviceOptions, WHATSAPP_URL } from "@/data/services";
import { trackLead } from "@/components/Analytics";

// Google Apps Script endpoint (writes to the leads sheet). It expects
// multipart/form-data with name, email, phone, remarks and replies "Success".
// Extra fields are sent as well, and are ALSO folded into "remarks" so they
// arrive even if the script only stores the original four columns.
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwsujCDQ1wJTfJqWvW87zE19JafVGd6O4oqwEiUIRdTN-OgIoyyn4-_2XXBckgmQhR1Eg/exec";

const phoneRule = Yup.string()
  .trim()
  .matches(/^[\+]?[\d\s\-\(\)\.]{7,20}$/, "Please enter a valid phone number (e.g. +1 555 123 4567).")
  .required("Contact number is required.");

const contactSchema = Yup.object({
  name: Yup.string().trim().required("Name is required."),
  email: Yup.string().trim().email("Please enter a valid email address.").required("Email is required."),
  phone: phoneRule,
  service: Yup.string().trim(),
  budget: Yup.string().trim(),
  remarks: Yup.string().trim(),
});

const estimateSchema = Yup.object({
  name: Yup.string().trim().required("Name is required."),
  company: Yup.string().trim(),
  email: Yup.string().trim().email("Please enter a valid email address.").required("Email is required."),
  phone: phoneRule,
  projectType: Yup.string().trim().required("Please choose a project type."),
  trades: Yup.string().trim(),
  dueDate: Yup.string().trim(),
  plansLink: Yup.string().trim().url("Please paste a full link starting with https://"),
  remarks: Yup.string().trim(),
});

const PROJECT_TYPES = ["Residential", "Commercial", "Municipal", "Other"];
const BUDGETS = ["Not sure yet", "Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+"];

const inputCls = (hasError) =>
  [
    "w-full bg-white/5 border rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm outline-none transition-all duration-300",
    "hover:border-white/20",
    hasError
      ? "border-brand-pink/60 focus:border-brand-pink focus:shadow-[0_0_0_3px_rgba(225,29,116,0.18)]"
      : "border-white/10 focus:border-brand-cyan/60 focus:bg-brand-cyan/5 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.12)]",
  ].join(" ");

const selectCls = (hasError) => `${inputCls(hasError)} appearance-none [&>option]:bg-[#0a0f1d]`;

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

function Field({ id, label, optional, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
        {label}
        {optional && <span className="normal-case tracking-normal font-normal text-slate-500"> (optional)</span>}
      </label>
      {children}
      <FieldError msg={error} />
    </div>
  );
}

export default function ContactForm({ variant = "contact", defaultService = "" }) {
  const isEstimate = variant === "estimate";
  const EMPTY = isEstimate
    ? { name: "", company: "", email: "", phone: "", projectType: "", trades: "", dueDate: "", plansLink: "", remarks: "" }
    : { name: "", email: "", phone: "", service: defaultService, budget: "", remarks: "" };
  const schema = isEstimate ? estimateSchema : contactSchema;

  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const buildRemarks = () => {
    const lines = [];
    if (isEstimate) {
      lines.push("[ESTIMATE REQUEST]");
      if (form.company) lines.push(`Company: ${form.company}`);
      lines.push(`Project type: ${form.projectType}`);
      if (form.trades) lines.push(`Trades: ${form.trades}`);
      if (form.dueDate) lines.push(`Bid due: ${form.dueDate}`);
      if (form.plansLink) lines.push(`Plans: ${form.plansLink}`);
    } else {
      if (form.service) lines.push(`Service: ${form.service}`);
      if (form.budget) lines.push(`Budget: ${form.budget}`);
    }
    if (form.remarks) lines.push(lines.length ? `Notes: ${form.remarks}` : form.remarks);
    return lines.join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = await runValidation(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("remarks", buildRemarks());
      Object.entries(form).forEach(([k, v]) => {
        if (!["name", "email", "phone", "remarks"].includes(k) && v) fd.append(k, v);
      });
      fd.append("source", typeof window !== "undefined" ? window.location.pathname : "");

      const res = await fetch(SCRIPT_URL, { method: "POST", body: fd });
      const text = await res.text();

      if (text === "Success") {
        trackLead(isEstimate ? "Construction Estimating & Takeoffs" : form.service || "General");
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
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-pink/40 via-brand-cyan/20 to-brand-pink/10 opacity-60 blur-sm group-hover/card:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative glass-panel rounded-2xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
                role="status"
              >
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{isEstimate ? "Plans received!" : "Message Sent!"}</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  {isEstimate
                    ? "Thanks! We'll review your project and quote it the same day."
                    : "Thanks for reaching out. We'll get back to you as soon as possible."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-brand-cyan text-sm font-medium hover:underline underline-offset-4 transition"
                >
                  Send another {isEstimate ? "project" : "message"}
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
                <div className={isEstimate ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : "contents"}>
                  <Field id={`${variant}-name`} label="Name" error={errors.name}>
                    <input id={`${variant}-name`} name="name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={handleChange} className={inputCls(!!errors.name)} />
                  </Field>
                  {isEstimate && (
                    <Field id="estimate-company" label="Company" optional error={errors.company}>
                      <input id="estimate-company" name="company" type="text" autoComplete="organization" placeholder="Your company" value={form.company} onChange={handleChange} className={inputCls(!!errors.company)} />
                    </Field>
                  )}
                </div>

                <div className={isEstimate ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : "contents"}>
                  <Field id={`${variant}-email`} label="Email" error={errors.email}>
                    <input id={`${variant}-email`} name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputCls(!!errors.email)} />
                  </Field>
                  <Field id={`${variant}-phone`} label="Contact Number" error={errors.phone}>
                    <input id={`${variant}-phone`} name="phone" type="tel" autoComplete="tel" placeholder={isEstimate ? "+1 555 123 4567" : "+92 300 0000000"} value={form.phone} onChange={handleChange} className={inputCls(!!errors.phone)} />
                  </Field>
                </div>

                {isEstimate ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field id="estimate-type" label="Project type" error={errors.projectType}>
                        <select id="estimate-type" name="projectType" value={form.projectType} onChange={handleChange} className={selectCls(!!errors.projectType)}>
                          <option value="">Choose one…</option>
                          {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </Field>
                      <Field id="estimate-due" label="Bid due date" optional error={errors.dueDate}>
                        <input id="estimate-due" name="dueDate" type="date" value={form.dueDate} onChange={handleChange} className={`${inputCls(!!errors.dueDate)} [color-scheme:dark]`} />
                      </Field>
                    </div>
                    <Field id="estimate-trades" label="Trades needed" optional error={errors.trades}>
                      <input id="estimate-trades" name="trades" type="text" placeholder="e.g. Full estimate, or concrete + framing + drywall" value={form.trades} onChange={handleChange} className={inputCls(!!errors.trades)} />
                    </Field>
                    <Field id="estimate-plans" label="Plans link (Dropbox / Google Drive)" optional error={errors.plansLink}>
                      <input id="estimate-plans" name="plansLink" type="url" inputMode="url" placeholder="https://drive.google.com/…" value={form.plansLink} onChange={handleChange} className={inputCls(!!errors.plansLink)} />
                      <p className="text-xs text-slate-500">
                        No link? Send the PDFs on{" "}
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">WhatsApp</a>{" "}
                        or to <a href="mailto:info@ibtechnova.com" className="text-brand-cyan hover:underline">info@ibtechnova.com</a>.
                      </p>
                    </Field>
                  </>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field id="contact-service" label="Service" optional error={errors.service}>
                      <select id="contact-service" name="service" value={form.service} onChange={handleChange} className={selectCls(!!errors.service)}>
                        <option value="">Choose a service…</option>
                        {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                        <option value="Something else">Something else</option>
                      </select>
                    </Field>
                    <Field id="contact-budget" label="Budget" optional error={errors.budget}>
                      <select id="contact-budget" name="budget" value={form.budget} onChange={handleChange} className={selectCls(!!errors.budget)}>
                        <option value="">Select…</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>
                )}

                <Field id={`${variant}-remarks`} label={isEstimate ? "Notes" : "Remarks"} optional={isEstimate} error={errors.remarks}>
                  <textarea
                    id={`${variant}-remarks`}
                    name="remarks"
                    rows={isEstimate ? 3 : 5}
                    placeholder={isEstimate ? "Anything we should know: scope, specs, your rates…" : "Tell us about your project or inquiry…"}
                    value={form.remarks}
                    onChange={handleChange}
                    className={`${inputCls(!!errors.remarks)} resize-none`}
                  />
                </Field>

                {status === "error" && (
                  <p className="flex items-center gap-2 text-brand-pink text-sm bg-brand-pink/10 border border-brand-pink/20 rounded-lg px-4 py-3" role="alert">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or message us on WhatsApp.
                  </p>
                )}

                <button
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
                        {isEstimate ? "Get My Quote" : "Send Message"}
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
