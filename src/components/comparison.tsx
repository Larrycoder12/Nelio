const POINTS = [
  {
    index: "01",
    title: "Built into Jobber and Housecall Pro, not bolted on",
    body: "Nelio reads the job-completion event straight from Jobber and Housecall Pro. The trigger comes from your actual job records, not a workaround built on a generic webhook that breaks the moment the software updates its API.",
  },
  {
    index: "02",
    title: "Attribution goes to the tech, not just the business",
    body: "Most review tools stop at the business level. Nelio tags every review to the tech and job type that earned it, so you see exactly who's earning five stars, and who needs coaching before a bad review costs you a customer.",
  },
  {
    index: "03",
    title: "Built for the trades, not retrofitted from salon software",
    body: "The message copy, send timing, and job types are all modeled on HVAC, plumbing, and electrical work. None of it was adapted from a template built for coffee shops and nail salons.",
  },
];

export function Comparison() {
  return (
    <section id="why-nelio" className="border-b border-paper-line bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-moss-800">
              <span className="inline-block h-1.5 w-1.5 bg-brand-clay" />
              Why not NiceJob or RightResponse
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
              Good tools for any local business. Not built for yours.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              NiceJob and RightResponse work fine for a general local
              business. Here&apos;s what&apos;s different when the software
              is built around field service instead.
            </p>
          </div>

          <div className="border-t-2 border-moss-900">
            {POINTS.map((point) => (
              <div
                key={point.index}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-b-2 border-moss-900 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
              >
                <span className="font-display text-3xl font-extrabold text-brand-clay sm:text-4xl">
                  {point.index}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
