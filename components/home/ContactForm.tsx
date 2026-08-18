"use client";

import { useState, useRef } from "react";
import { validateContactForm, ContactFormData, ValidationErrors } from "@/lib/validation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const submittingRef = useRef(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submittingRef.current) return;

    const validation = validateContactForm(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    submittingRef.current = true;
    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", comments: "" });
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center px-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#171717] mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 max-w-sm">
          Thank you for reaching out. We&apos;ll be in touch with you shortly. For
          urgent service, please call us directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#ff7a00] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Name <span aria-hidden="true" className="text-[#ff7a00]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:border-transparent transition ${
            errors.name
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white"
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Email <span aria-hidden="true" className="text-[#ff7a00]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:border-transparent transition ${
            errors.email
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white"
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Phone <span aria-hidden="true" className="text-[#ff7a00]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:border-transparent transition ${
            errors.phone
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white"
          }`}
          placeholder="Your phone number"
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.phone}
          </p>
        )}
      </div>

      {/* Comments */}
      <div>
        <label
          htmlFor="comments"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          How can we help? <span aria-hidden="true" className="text-[#ff7a00]">*</span>
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={4}
          value={form.comments}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.comments}
          aria-describedby={errors.comments ? "comments-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:border-transparent transition resize-none ${
            errors.comments
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white"
          }`}
          placeholder="Describe the issue with your garage door..."
        />
        {errors.comments && (
          <p id="comments-error" role="alert" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.comments}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#ff7a00] text-white font-bold py-3.5 px-6 rounded-lg hover:bg-[#e06900] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
