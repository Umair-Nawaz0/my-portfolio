"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${form.get("name")}`
    );
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={submit}
      className="glass-card rounded-3xl p-6 sm:p-8"
      aria-label="Contact inquiry form"
    >
      <h2 className="text-xl font-semibold text-zinc-100">Send a Message</h2>
      <p className="mt-1 text-sm text-zinc-400">
        Directly sends an email via your mail client to {profile.email}.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-300">
            Full name
          </label>
          <input
            id="contact-name"
            required
            name="name"
            className="theme-input mt-1.5 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-violet-400/60"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-300">
            Email address
          </label>
          <input
            id="contact-email"
            required
            type="email"
            name="email"
            className="theme-input mt-1.5 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-violet-400/60"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-300">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            name="message"
            rows={5}
            className="theme-input mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-violet-400/60"
            placeholder="Describe your technical inquiry, project scope, or opportunity..."
          />
        </div>
      </div>

      <button
        className="primary-button mt-6 w-full"
        type="submit"
      >
        {sent ? (
          <>
            <CheckCircle2 size={16} />
            Email Client Opened
          </>
        ) : (
          <>
            Send Message
            <Send size={15} />
          </>
        )}
      </button>

      {sent && (
        <p className="mt-3 text-center text-xs text-violet-300">
          Your mail application has been opened with the pre-filled message.
        </p>
      )}
    </form>
  );
}

