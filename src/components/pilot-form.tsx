"use client";

import { useId, useState, type FormEvent } from "react";
import { IconArrowRight, IconCheck } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export function PilotForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/pilot-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: data.get("businessName"),
          email: data.get("email"),
          fsm: data.get("fsm"),
          website: data.get("website"),
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 border-2 border-navy-900 bg-white p-6"
      >
        <span className="flex h-8 w-8 flex-none items-center justify-center bg-accent text-accent-ink">
          <IconCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-lg font-bold text-ink">
            You&apos;re on the list.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            We&apos;ll reach out within one business day to connect your
            Jobber or Housecall Pro account and get your 30-day pilot
            running.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative border-2 border-navy-900 bg-white p-6 sm:p-7"
    >
      {/* honeypot — hidden from sighted and AT users, bots fill every field */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Leave this field blank</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor={`${formId}-businessName`}
            className="block text-xs font-bold uppercase tracking-wide text-ink"
          >
            Business name
          </label>
          <input
            id={`${formId}-businessName`}
            name="businessName"
            type="text"
            required
            maxLength={200}
            autoComplete="organization"
            className="mt-1.5 w-full border border-navy-900/30 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-navy-900"
          />
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="block text-xs font-bold uppercase tracking-wide text-ink"
          >
            Work email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full border border-navy-900/30 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-navy-900"
          />
        </div>

        <div>
          <label
            htmlFor={`${formId}-fsm`}
            className="block text-xs font-bold uppercase tracking-wide text-ink"
          >
            Field service software
          </label>
          <select
            id={`${formId}-fsm`}
            name="fsm"
            defaultValue="jobber"
            className="mt-1.5 w-full border border-navy-900/30 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-navy-900"
          >
            <option value="jobber">Jobber</option>
            <option value="housecall-pro">Housecall Pro</option>
            <option value="other">Something else</option>
            <option value="none">Not using one yet</option>
          </select>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-medium text-accent-dark">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex w-full items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-accent-ink transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Starting your pilot…" : "Start my free pilot"}
        {status !== "submitting" && <IconArrowRight className="h-4 w-4" />}
      </button>

      <p className="mt-3 text-xs leading-relaxed text-ink-muted">
        No credit card. No contract. Cancel any time during the pilot.
      </p>
    </form>
  );
}
