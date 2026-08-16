import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="border-b border-paper-line bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-clay">
          <span className="inline-block h-1.5 w-1.5 bg-brand-clay" />
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
          This job order doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
          The page you&apos;re looking for was moved, renamed, or never
          completed. Let&apos;s get you back on the job.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "brand" }), "h-auto gap-2 px-6 py-3.5 text-sm")}
          >
            Back to homepage
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center gap-2 border border-moss-600 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-moss-900 hover:bg-paper-dim"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
