import { cn } from "@/lib/utils";

const TRADES = ["HVAC", "PLUMBING", "ELECTRICAL"];

const SLOTS = [
  { trade: "HVAC" },
  { trade: "Plumbing" },
  { trade: "Electrical" },
];

export function SocialProof() {
  const marqueeItems = [...TRADES, ...TRADES, ...TRADES, ...TRADES];

  return (
    <section className="border-b border-paper-line bg-paper">
      <div
        aria-hidden="true"
        className="overflow-hidden border-b border-paper-line bg-moss-900 py-3"
      >
        <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
          {[...marqueeItems, ...marqueeItems].map((trade, i) => (
            <span
              key={i}
              className="text-xs font-bold uppercase tracking-[0.2em] text-moss-400"
            >
              {trade} <span className="text-brand">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-moss-800">
          <span className="inline-block h-1.5 w-1.5 bg-brand-clay" />
          Social proof
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
          Be one of the first names on this page.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Nelio hasn&apos;t launched yet. Join the waitlist now and you&apos;ll
          be one of the first HVAC, plumbing, and electrical contractors we
          bring on when we do. Real results and reviews will show up here
          as pilot contractors go live.
        </p>

        <div className="mt-10 border-2 border-dashed border-moss-400/60 bg-white shadow-[6px_6px_0_0_rgba(71,72,67,0.2)] sm:mt-14">
          <div className="flex items-center justify-between gap-4 border-b border-dashed border-moss-400/60 px-5 py-2.5 sm:px-6">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Trade roster
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Status
            </span>
          </div>
          {SLOTS.map((slot, i) => (
            <div
              key={slot.trade}
              className={cn(
                "flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6",
                i > 0 && "border-t border-dashed border-moss-400/60",
              )}
            >
              <span className="font-display text-lg font-bold uppercase tracking-wide text-ink sm:w-40 sm:flex-none">
                {slot.trade}
              </span>
              <div className="flex-1 space-y-2" aria-hidden="true">
                <div className="h-2 w-full bg-paper-line" />
                <div className="h-2 w-4/5 bg-paper-line" />
              </div>
              <div className="flex items-center justify-between gap-3 sm:flex-none sm:justify-end sm:gap-6">
                <p className="text-xs text-ink-muted">
                  Reserved for a waitlisted contractor
                </p>
                <span className="flex-none border border-moss-600 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink">
                  Open
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
