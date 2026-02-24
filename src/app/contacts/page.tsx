// src/app/contacts/page.tsx
"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      emailOk &&
      subject.trim().length > 0 &&
      message.trim().length > 0 &&
      agree
    );
  }, [firstName, lastName, email, subject, message, agree]);

  const mailTo = "a.dolgikh@memstera.com";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

    const lines = [
      `Name: ${fullName}`,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      `Subject: ${subject.trim()}`,
      "",
      message.trim(),
    ].filter(Boolean);

    const body = encodeURIComponent(lines.join("\n"));
    const subj = encodeURIComponent(`[Memstera] ${subject.trim()}`);

    window.location.href = `mailto:${mailTo}?subject=${subj}&body=${body}`;

    setTimeout(() => setStatus("sent"), 300);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h1 className="text-center text-3xl font-semibold text-white sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-center text-sm text-zinc-300 sm:text-base">
            Send us a message and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={onSubmit} className="mt-10 space-y-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="First Name"
                required
                value={firstName}
                onChange={setFirstName}
                placeholder="Enter your first name"
                autoComplete="given-name"
              />
              <Field
                label="Last Name"
                required
                value={lastName}
                onChange={setLastName}
                placeholder="Enter your last name"
                autoComplete="family-name"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="Email"
                required
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="your@email.com"
                autoComplete="email"
              />
              <Field
                label="Phone"
                value={phone}
                onChange={setPhone}
                placeholder="+31..."
                autoComplete="tel"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Subject <span className="text-emerald-400">*</span>
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="h-11 w-full rounded-lg border border-white/10 bg-zinc-900/60 px-4 text-sm text-zinc-100 outline-none transition focus:border-emerald-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Message <span className="text-emerald-400">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={7}
                placeholder="Tell us more about your request..."
                className="w-full resize-none rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-emerald-500/50"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-zinc-900/60 accent-emerald-600"
              />
              <label htmlFor="agree" className="text-sm text-zinc-300">
                I agree with the{" "}
                <a
                  href="#"
                  className="font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  privacy policy
                </a>
              </label>
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={!isValid || status === "sending"}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-lg px-8 text-sm font-semibold text-white transition",
                  isValid
                    ? "bg-emerald-600 hover:bg-emerald-500"
                    : "bg-emerald-600/40 cursor-not-allowed",
                  status === "sending" && "opacity-80"
                )}
              >
                {status === "sending"
                  ? "Preparing…"
                  : status === "sent"
                  ? "Message Ready"
                  : "Send Message"}
              </button>

              {status === "error" && (
                <p className="mt-3 text-sm text-rose-300">
                  Please fill required fields and accept the privacy policy.
                </p>
              )}
              {status === "sent" && (
                <p className="mt-3 text-sm text-zinc-300">
                  Your email client should open with a pre-filled message.
                </p>
              )}
            </div>
          </form>

          <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-zinc-300">
            Or email us directly at{" "}
            <a
              className="font-semibold text-emerald-300 hover:text-emerald-200"
              href="mailto:a.dolgikh@memstera.com"
            >
              a.dolgikh@memstera.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-white">
        {label}{" "}
        {required && <span className="text-emerald-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-lg border border-white/10 bg-zinc-900/60 px-4 text-sm text-zinc-100 outline-none transition focus:border-emerald-500/50"
      />
    </div>
  );
}