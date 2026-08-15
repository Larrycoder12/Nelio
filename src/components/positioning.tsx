import { IconCheck, IconMinus } from "./icons";

const ROWS = [
  {
    label: "Trigger",
    generic: "A generic checkout, visit, or manual send trigger.",
    nelio: "Fires the second a job is marked complete in Jobber or Housecall Pro.",
  },
  {
    label: "Attribution",
    generic: "Reviews tied to the business as a whole.",
    nelio: "Reviews tied to the specific tech and job type that earned them.",
  },
  {
    label: "Built for",
    generic: "Any local business: salons, restaurants, retail.",
    nelio: "HVAC, plumbing, and electrical contractors, specifically.",
  },
];

export function Positioning() {
  return (
    <section className="border-b border-paper-line bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-moss-800">
          <span className="inline-block h-1.5 w-1.5 bg-brand-clay" />
          The difference
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
          Built for the trades, from the ground up.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Most review software is one-size-fits-all: the same setup for a
          nail salon and an HVAC crew. Nelio runs on your field service
          software&apos;s actual job-completion event, not a generic form.
        </p>

        <div className="mt-10 overflow-hidden border border-moss-900 sm:mt-14">
          <div className="grid grid-cols-2 divide-x divide-moss-900 bg-moss-900 text-white">
            <div className="px-5 py-4 sm:px-8">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-moss-400 sm:text-xl">
                Generic review software
              </span>
            </div>
            <div className="bg-brand px-5 py-4 sm:px-8">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-brand-ink sm:text-xl">
                Nelio
              </span>
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div key={row.label} className={i > 0 ? "border-t border-paper-line" : ""}>
              <span className="block bg-paper px-5 pt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted sm:px-8">
                {row.label}
              </span>
              <div className="grid grid-cols-2 divide-x divide-paper-line">
                <div className="flex items-start gap-3 bg-paper-dim px-5 py-5 sm:px-8">
                  <IconMinus className="mt-0.5 h-4 w-4 flex-none text-ink-muted" />
                  <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                    {row.generic}
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white px-5 py-5 sm:px-8">
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-brand-clay" />
                  <p className="text-sm font-medium leading-relaxed text-ink sm:text-base">
                    {row.nelio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
