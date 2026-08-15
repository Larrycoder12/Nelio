import { IconClock, IconShield } from "./icons";
import { PilotForm } from "./pilot-form";

export function PilotOffer() {
  return (
    <section id="pilot" className="border-b border-navy-800 bg-navy-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
              <span className="inline-block h-1.5 w-1.5 bg-brand" />
              The pilot offer
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
              30 days, free. A process guarantee, not a star-rating one.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-200 sm:text-lg">
              We&apos;ll send a review request for every completed job,
              automatically, for 30 days — free. That&apos;s the guarantee:
              volume and process, not stars.
            </p>

            <div className="mt-8 border border-dashed border-navy-600 bg-navy-900 p-6">
              <div className="flex items-start gap-3">
                <IconShield className="mt-0.5 h-6 w-6 flex-none text-brand" />
                <div>
                  <p className="font-display text-lg font-bold text-white">
                    No review gating. Ever.
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-200">
                    Every completed job gets a request — Nelio never filters
                    or delays requests based on an expected star rating.
                    It&apos;s a compliance line we don&apos;t cross, not a
                    marketing claim.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-navy-700 pt-5">
                <IconClock className="h-5 w-5 flex-none text-navy-400" />
                <p className="text-sm text-navy-200">
                  30 days from your first connected job. No credit card
                  required to start.
                </p>
              </div>
            </div>
          </div>

          <div>
            <PilotForm />
          </div>
        </div>
      </div>
    </section>
  );
}
