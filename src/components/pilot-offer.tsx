import { IconClock, IconShield } from "./icons";
import { PilotForm } from "./pilot-form";

export function PilotOffer() {
  return (
    <section id="waitlist" className="border-b border-moss-800 bg-moss-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
              <span className="inline-block h-1.5 w-1.5 bg-brand" />
              Join the waitlist
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
              Be first in line for a free 30-day pilot.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-moss-200 sm:text-lg">
              Nelio hasn&apos;t launched yet. Join the waitlist now and
              you&apos;ll be first in line when we do: 30 days free, with a
              review request sent for every completed job, automatically,
              from day one.
            </p>

            <div className="mt-8 border border-dashed border-moss-600 bg-moss-900 p-6">
              <div className="flex items-start gap-3">
                <IconShield className="mt-0.5 h-6 w-6 flex-none text-brand" />
                <div>
                  <p className="font-display text-lg font-bold text-white">
                    Nelio will never gate reviews.
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-moss-200">
                    Every completed job gets a request — Nelio won&apos;t
                    filter or delay one based on an expected star rating.
                    That&apos;s the compliance standard we&apos;re building to.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-moss-700 pt-5">
                <IconClock className="h-5 w-5 flex-none text-moss-400" />
                <p className="text-sm text-moss-200">
                  Free for 30 days from your first connected job, once we
                  launch. No credit card, ever.
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
