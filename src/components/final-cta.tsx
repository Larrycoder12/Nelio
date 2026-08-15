import { IconArrowRight } from "./icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
          Stop chasing reviews manually.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
          Connect Jobber or Housecall Pro and start your free 30-day pilot
          today. No credit card, no contract.
        </p>
        <div className="mt-8">
          <a
            href="#pilot"
            className={cn(buttonVariants({ variant: "brand" }), "h-auto gap-2 px-7 py-4 text-sm")}
          >
            Start your free 30-day pilot
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
