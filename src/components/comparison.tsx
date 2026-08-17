export function Comparison() {
  return (
    <section id="why-nelio" className="border-b border-paper-line bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-moss-800">
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

          <div className="border-2 border-moss-900 bg-moss-900 p-7 shadow-[7px_7px_0_0_rgba(71,72,67,0.3)] sm:p-9">
            <p className="leading-relaxed text-moss-200 sm:text-lg">
              <span className="font-display text-lg font-bold text-brand sm:text-xl">
                The trigger
              </span>{" "}
              is the job record itself: a job marked complete in Jobber or
              Housecall Pro sets it off, with no delayed sync and no webhook
              workaround to maintain every time either platform updates.{" "}
              <span className="font-display text-lg font-bold text-brand sm:text-xl">
                The attribution
              </span>{" "}
              reaches the tech: every review gets tagged to the specific tech
              and job type that earned it, so you can see who&apos;s driving
              your rating and who needs coaching.{" "}
              <span className="font-display text-lg font-bold text-brand sm:text-xl">
                The copy
              </span>{" "}
              is built around the trades: message timing and job types are
              modeled on how HVAC, plumbing, and electrical crews actually
              work, not lifted from a template built for salons and coffee
              shops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
