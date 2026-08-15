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
        className="overflow-hidden border-b border-paper-line bg-navy-900 py-3"
      >
        <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
          {[...marqueeItems, ...marqueeItems].map((trade, i) => (
            <span
              key={i}
              className="text-xs font-bold uppercase tracking-[0.2em] text-navy-400"
            >
              {trade} <span className="text-brand">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-navy-800">
          <span className="inline-block h-1.5 w-1.5 bg-brand" />
          Social proof
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
          Join the first pilot contractors.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Nelio is in early pilot with HVAC and home-service contractors on
          Jobber and Housecall Pro. Real results and reviews will show up
          here as pilot contractors go live.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {SLOTS.map((slot) => (
            <div
              key={slot.trade}
              className="border border-dashed border-navy-400/50 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                  {slot.trade}
                </span>
                <span className="border border-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-dark">
                  Pilot open
                </span>
              </div>
              <div className="mt-5 space-y-2" aria-hidden="true">
                <div className="h-2 w-full bg-paper-line" />
                <div className="h-2 w-4/5 bg-paper-line" />
                <div className="h-2 w-3/5 bg-paper-line" />
              </div>
              <p className="mt-5 text-xs text-ink-muted">
                Reserved for a pilot contractor
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
