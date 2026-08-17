import { IconArrowRight, IconDoodleUnderline } from "./icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="bg-moss-950 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
          Stop chasing reviews{" "}
          <span className="relative inline-block">
            manually
            <IconDoodleUnderline className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand sm:-bottom-1.5 sm:h-3" />
          </span>
          .
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-moss-200 sm:text-lg">
          Join the waitlist now and be first in line for a free 30-day pilot
          when Nelio launches. No credit card, no contract.
        </p>
        <div className="mt-8">
          <a
            href="#waitlist"
            className={cn(buttonVariants({ variant: "brand" }), "h-auto gap-2 px-7 py-4 text-sm")}
          >
            Join the waitlist
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
