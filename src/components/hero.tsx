import { HeroDeviceMock } from "./hero-device-mock";
import { IconArrowRight } from "./icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-navy-800 bg-navy-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--color-navy-200) 0, var(--color-navy-200) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, var(--color-navy-200) 0, var(--color-navy-200) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:pb-24 lg:pt-24">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
            <span className="inline-block h-1.5 w-1.5 bg-brand" />
            Built for HVAC &amp; home services
          </p>

          <h1 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Reviews on autopilot — the moment the job&apos;s done.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-200 sm:text-lg">
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
              className="inline-flex items-center justify-center gap-2 border border-navy-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-navy-400 hover:bg-navy-900"
            >
              See how it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-navy-400">
              Works with
            </span>
            <span className="border border-navy-600 px-3 py-1 text-sm font-semibold text-navy-200">
              Jobber
            </span>
            <span className="border border-navy-600 px-3 py-1 text-sm font-semibold text-navy-200">
              Housecall Pro
            </span>
          </div>
        </div>

        <HeroDeviceMock />
      </div>
    </section>
  );
}
