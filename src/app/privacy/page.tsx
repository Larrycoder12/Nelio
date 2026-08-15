import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nelio's privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-6 text-base leading-relaxed text-ink-muted">
        We&apos;re finalizing Nelio&apos;s full privacy policy alongside our
        legal review. It will be published here before general availability.
      </p>
      <p className="mt-4 text-base leading-relaxed text-ink-muted">
        Have a question about how we handle data in the meantime? Email{" "}
        <a href="mailto:hello@nelioapp.com" className="font-semibold text-navy-800 underline">
          hello@nelioapp.com
        </a>
        .
      </p>
    </section>
  );
}
