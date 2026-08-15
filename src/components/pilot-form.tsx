"use client";

import { useId, useState, type FormEvent } from "react";
import { IconAlert, IconArrowRight, IconCheck } from "./icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Status = "idle" | "submitting" | "success" | "error";

const FSM_LABELS: Record<string, string> = {
  jobber: "Jobber",
  "housecall-pro": "Housecall Pro",
  other: "Something else",
  none: "Not using one yet",
};

const FIELD_CLASS =
  "mt-1.5 w-full rounded-none border-moss-900/30 bg-paper text-ink focus-visible:border-moss-900 focus-visible:ring-0";

export function PilotForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fsm, setFsm] = useState("jobber");
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
      setFsm("jobber");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 border-2 border-moss-900 bg-white p-6"
      >
        <span className="flex h-8 w-8 flex-none items-center justify-center bg-brand text-brand-ink">
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
      className="relative border-2 border-moss-900 bg-white p-6 sm:p-7"
    >
      {/* honeypot — hidden from sighted and AT users, bots fill every field */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <Label htmlFor={`${formId}-website`}>Leave this field blank</Label>
        <Input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-4">
        <div>
          <Label
            htmlFor={`${formId}-businessName`}
            className="text-xs font-bold uppercase tracking-wide text-ink"
          >
            Business name
          </Label>
          <Input
            id={`${formId}-businessName`}
            name="businessName"
            type="text"
            required
            maxLength={200}
            autoComplete="organization"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <Label
            htmlFor={`${formId}-email`}
            className="text-xs font-bold uppercase tracking-wide text-ink"
          >
            Work email
          </Label>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <Label
            htmlFor={`${formId}-fsm`}
            className="text-xs font-bold uppercase tracking-wide text-ink"
          >
            Field service software
          </Label>
          <Select
            name="fsm"
            value={fsm}
            onValueChange={(value) => setFsm(value ?? "jobber")}
          >
            <SelectTrigger id={`${formId}-fsm`} className={`${FIELD_CLASS} w-full`}>
              <SelectValue>{(value: string) => FSM_LABELS[value] ?? value}</SelectValue>
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectItem value="jobber">Jobber</SelectItem>
              <SelectItem value="housecall-pro">Housecall Pro</SelectItem>
              <SelectItem value="other">Something else</SelectItem>
              <SelectItem value="none">Not using one yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 flex items-start gap-2 text-sm font-medium text-ink">
          <IconAlert className="mt-0.5 h-4 w-4 flex-none text-brand-clay" />
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="brand"
        disabled={status === "submitting"}
        className="mt-6 h-auto w-full py-3.5 text-sm"
      >
        {status === "submitting" ? "Starting your pilot…" : "Start my free pilot"}
        {status !== "submitting" && <IconArrowRight className="h-4 w-4" />}
      </Button>

      <p className="mt-3 text-xs leading-relaxed text-ink-muted">
        No credit card. No contract. Cancel any time during the pilot.
      </p>
    </form>
  );
}
