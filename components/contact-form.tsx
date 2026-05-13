"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Jane Client" },
  { id: "email", label: "Email", type: "email", placeholder: "jane@company.com" }
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    window.setTimeout(() => {
      setIsSubmitting(false);
      setMessage("Thanks — your project details are ready to send. Connect this form to your preferred email or CRM endpoint before launch.");
    }, 900);
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-6 sm:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} htmlFor={field.id} className="group block text-sm font-medium text-slate-200">
            {field.label}
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required
              className="mt-2 w-full rounded-2xl border border-line bg-white/[0.04] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-300 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(56,189,248,0.12)]"
            />
          </label>
        ))}
      </div>

      <label htmlFor="project" className="mt-5 block text-sm font-medium text-slate-200">
        Project brief
        <textarea
          id="project"
          name="project"
          rows={5}
          placeholder="Tell me what you want to build, the business goal, timeline, and any systems that need to connect."
          required
          className="mt-2 w-full resize-none rounded-2xl border border-line bg-white/[0.04] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-300 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(56,189,248,0.12)]"
        />
      </label>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-sky-300 px-6 py-4 font-semibold text-slate-950 shadow-glow transition hover:bg-sky-200 disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
        whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" /> : null}
        {isSubmitting ? "Preparing message..." : "Send Project Inquiry"}
      </motion.button>

      {message ? <p className="mt-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm text-emerald-200">{message}</p> : null}
    </form>
  );
}
