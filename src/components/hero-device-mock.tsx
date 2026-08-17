import { IconStar } from "./icons";

/*
  Custom illustrated mock of the product loop — not stock photography.
  Marked aria-hidden: the same information is already conveyed in the
  hero's headline/subhead as accessible prose.
*/
export function HeroDeviceMock() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-sm select-none pt-6 pb-10 sm:max-w-md"
    >
      {/* dispatch ticket, peeking out top-left, framed like an app window */}
      <div className="absolute -top-2 left-0 z-10 w-56 -rotate-6 border-2 border-moss-900 bg-paper px-4 py-3 shadow-[7px_7px_0_0_rgba(71,72,67,0.4)] sm:left-2">
        <div className="flex items-center justify-between border-b border-dashed border-paper-line pb-2">
          <div className="flex items-center gap-2">
            <span className="flex gap-1" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-clay/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-clay/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-clay/60" />
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-wide text-ink">
              Job #4412
            </span>
          </div>
          <span className="bg-moss-900 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Complete
          </span>
        </div>
        <dl className="mt-2 space-y-1 text-[11px] text-ink-muted">
          <div className="flex justify-between gap-2">
            <dt>Tech</dt>
            <dd className="font-semibold text-ink">M. Alvarez</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>Type</dt>
            <dd className="font-semibold text-ink">AC Repair</dd>
          </div>
        </dl>
      </div>

      {/* phone frame */}
      <div className="relative z-20 ml-auto w-64 rotate-2 border-[3px] border-moss-700 bg-moss-900 p-2 shadow-[10px_12px_0_0_rgba(0,0,0,0.35)] sm:w-72">
        <div className="flex items-center justify-between px-2 pb-2 pt-1">
          <span className="text-[10px] font-semibold text-moss-200">9:41</span>
          <span className="text-[10px] font-semibold text-moss-200">
            Messages
          </span>
        </div>

        <div className="space-y-2 bg-moss-950 p-3">
          <div className="max-w-[85%] rounded-md rounded-tl-sm bg-moss-800 px-3 py-2 text-[11px] leading-snug text-white">
            Thanks for choosing us today! Mind leaving Mike a quick review
            for the AC repair?
          </div>

          <div className="max-w-[90%] rounded-md rounded-tl-sm border border-moss-700 bg-white p-3">
            <div className="flex items-center gap-1 text-brand-clay">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-3 w-3" />
              ))}
            </div>
            <p className="mt-1 text-[11px] font-semibold text-ink">
              Rate your service
            </p>
            <span className="mt-2 inline-block bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-ink">
              Leave a review
            </span>
          </div>
        </div>
      </div>

      {/* attribution tag */}
      <div className="relative z-20 mt-3 ml-auto w-fit -translate-x-2 border-2 border-brand bg-moss-950 px-3 py-1.5 sm:-translate-x-4">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-brand">
          Attributed → Mike A. · AC Repair
        </span>
      </div>
    </div>
  );
}
