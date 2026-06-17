"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons";

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@company.com" }
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
      setMessage("Message prepared. Connect this form to your email service, CRM, or API route before launch.");
    }, 850);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-premium backdrop-blur-xl sm:p-8" aria-label="Contact form">
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
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-300/70 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(125,211,252,0.12)]"
            />
          </label>
        ))}
      </div>

      <label htmlFor="message" className="mt-5 block text-sm font-medium text-slate-200">
        Message
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me what you want to build, the user problem, timeline, and what success looks like."
          required
          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-300/70 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(125,211,252,0.12)]"
        />
      </label>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-slate-950 shadow-glow transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
        whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" /> : <Icon name="mail" className="h-4 w-4" />}
        {isSubmitting ? "Preparing message..." : "Send Project Inquiry"}
      </motion.button>

      {message ? <p className="mt-4 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm text-emerald-100">{message}</p> : null}
    </form>
  );
}
