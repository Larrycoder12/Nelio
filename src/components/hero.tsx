import { HeroDeviceMock } from "./hero-device-mock";
import { IconArrowRight } from "./icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-moss-800 bg-moss-950">
      {/* oversized wordmark, cropped by the section — a print/letterpress
          watermark instead of a flat digital grid or gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-6 select-none font-display text-[13rem] font-extrabold uppercase leading-none text-moss-200/[0.05] sm:-bottom-24 sm:-right-10 sm:text-[19rem] lg:-bottom-32 lg:text-[22rem]"
      >
        Nelio
      </div>

      {/* registration crop-marks framing the content, like a printed work order */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-6 hidden sm:block sm:inset-8">
        <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-moss-700" />
        <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-moss-700" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-moss-700" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-moss-700" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
            <span className="inline-block h-1.5 w-1.5 bg-brand" />
            Built for HVAC &amp; home services
          </p>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Reviews on autopilot — the moment the job&apos;s done.
          </h1>
        </div>

        <div className="relative mt-10 grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-10 lg:mt-14">
          <div className="max-w-lg">
            <p className="text-base leading-relaxed text-moss-200 sm:text-lg">
              The instant a tech marks a job complete in Jobber or Housecall
              Pro, Nelio sends the review request. Every review that comes
              back is attributed to the tech and job type that earned it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pilot"
                className={cn(buttonVariants({ variant: "brand" }), "h-auto gap-2 px-6 py-3.5 text-sm")}
              >
                Start your free 30-day pilot
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-moss-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-moss-400 hover:bg-moss-900"
              >
                See how it works
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-moss-400">
                Works with
              </span>
              <span className="border border-moss-600 px-3 py-1 text-sm font-semibold text-moss-200">
                Jobber
              </span>
              <span className="border border-moss-600 px-3 py-1 text-sm font-semibold text-moss-200">
                Housecall Pro
              </span>
            </div>
          </div>

          <div className="relative">
            <HeroDeviceMock />

            {/* rotated stamp, pinned across the seam between the two columns */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 bottom-16 z-30 hidden w-32 -rotate-6 border-2 border-dashed border-brand/70 bg-moss-950 px-3 py-2 text-center lg:block"
            >
              <span className="block font-display text-[11px] font-bold uppercase tracking-widest text-brand">
                30-day pilot
              </span>
              <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-wide text-moss-200">
                No card required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
