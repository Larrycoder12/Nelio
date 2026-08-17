import { cn } from "@/lib/utils";
import { IconMessage, IconTag, IconWrench } from "./icons";

const STEPS = [
  {
    index: "01",
    icon: IconWrench,
    title: "Job marked complete",
    description: "A tech closes out the job in Jobber or Housecall Pro.",
  },
  {
    index: "02",
    icon: IconMessage,
    title: "Request sent automatically",
    description: "Nelio texts or emails a review request within minutes.",
  },
  {
    index: "03",
    icon: IconTag,
    title: "Review attributed to the tech",
    description: "The review comes back tagged to the tech who earned it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-moss-800 bg-moss-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          <span className="inline-block h-1.5 w-1.5 bg-brand" />
          How it works
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
          One trigger, and no extra steps for your techs.
        </h2>

        <div className="mt-12 border-2 border-moss-700 bg-moss-900 shadow-[7px_7px_0_0_rgba(0,0,0,0.3)]">
          <div className="h-1 bg-brand" />
          <div className="flex flex-col md:flex-row">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className={cn(
                  "flex-1 p-6 sm:p-7",
                  i > 0 && "border-t-2 border-moss-700 md:border-t-0 md:border-l-2",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-brand">
                    {step.index}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-moss-700" />
                  <step.icon className="h-5 w-5 flex-none text-moss-200" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-moss-200 sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
