import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-moss-800 bg-moss-950">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-2xl font-bold uppercase tracking-tight text-white"
            >
              <span className="inline-block h-2.5 w-2.5 bg-brand" aria-hidden="true" />
              Nelio
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-moss-400">
              Review requests that fire the moment the job&apos;s done — built
              for HVAC and home services.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-moss-400">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#how-it-works" className="text-moss-200 hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#why-nelio" className="text-moss-200 hover:text-white">
                  Why Nelio
                </a>
              </li>
              <li>
                <a href="#pilot" className="text-moss-200 hover:text-white">
                  The pilot
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-moss-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@nelioapp.com"
                  className="text-moss-200 hover:text-white"
                >
                  hello@nelioapp.com
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-moss-200 hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-moss-200 hover:text-white">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-moss-800 pt-6 text-xs text-moss-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nelio. All rights reserved.</p>
          <p>nelioapp.com</p>
        </div>
      </div>
    </footer>
  );
}
