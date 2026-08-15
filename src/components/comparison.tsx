const POINTS = [
  {
    index: "01",
    title: "Fires from the job record itself",
    body: "A job marked complete in Jobber or Housecall Pro is the trigger — no delayed sync, no webhook workaround to maintain every time either platform updates.",
  },
  {
    index: "02",
    title: "Attribution reaches the tech",
    body: "Every review gets tagged to the specific tech and job type that earned it, so you can see who's driving your rating and who needs coaching.",
  },
  {
    index: "03",
    title: "Copy and timing built around the trades",
    body: "Message copy, send timing, and job types are modeled on how HVAC, plumbing, and electrical crews actually work, not lifted from a template built for salons and coffee shops.",
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
              Versus NiceJob &amp; RightResponse
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
              They&apos;re general-purpose review tools. Nelio speaks field service.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              NiceJob and RightResponse serve any local business well. Here&apos;s
              what changes when the software is built around HVAC, plumbing,
              and electrical work specifically.
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
