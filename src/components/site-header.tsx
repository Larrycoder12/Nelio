"use client";

import { useState } from "react";
import Link from "next/link";
import { IconClose, IconMenu } from "./icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-nelio", label: "Why Nelio" },
  { href: "#waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-moss-700 bg-moss-950">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-bold uppercase tracking-tight text-white"
        >
          <span className="inline-block h-2.5 w-2.5 bg-brand" aria-hidden="true" />
          Nelio
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-moss-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#waitlist"
            className={cn(
              buttonVariants({ variant: "brand" }),
              "h-auto px-4 py-2 text-sm font-semibold normal-case tracking-normal",
            )}
          >
            Join waitlist
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-moss-700 bg-moss-950 px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-moss-800">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-moss-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: "brand" }),
              "mt-4 h-auto px-4 py-3 text-sm font-semibold normal-case tracking-normal",
            )}
          >
            Join waitlist
          </a>
        </nav>
      )}
    </header>
  );
}
