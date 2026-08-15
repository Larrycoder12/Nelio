import { Fragment } from "react";
import { IconArrowRight, IconMessage, IconTag, IconWrench } from "./icons";

const STEPS = [
  {
    index: "01",
    icon: IconWrench,
    title: "Job marked complete",
    description:
      "A tech closes out the job in Jobber or Housecall Pro — the same step they already take every day.",
  },
  {
    index: "02",
    icon: IconMessage,
    title: "Request sent automatically",
    description:
      "Nelio fires an SMS or email review request within minutes. No manual follow-up, no spreadsheet of who to text.",
  },
  {
    index: "03",
    icon: IconTag,
    title: "Review attributed to the tech",
    description:
      "The review comes back tagged to the specific tech and job type — so you know exactly who earned it.",
  },
];

function Connector() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center py-1 md:flex-1 md:py-0"
    >
      <div className="relative h-10 w-px bg-navy-400/50 md:h-px md:w-full md:min-w-8">
        <span className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-90 items-center justify-center bg-paper text-navy-600 md:rotate-0">
          <IconArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-navy-800 bg-navy-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
          <span className="inline-block h-1.5 w-1.5 bg-brand" />
          How it works
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
          One trigger. No extra steps for your techs.
        </h2>

        <div className="mt-12 flex flex-col md:flex-row md:items-stretch">
          {STEPS.map((step, i) => (
            <Fragment key={step.title}>
              <div className="border-2 border-navy-700 bg-navy-900 md:flex-1">
                <div className="h-1 bg-brand" />
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-3xl font-extrabold text-brand">
                      {step.index}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-navy-600 text-navy-200">
                      <step.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
              {i < STEPS.length - 1 && <Connector />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
