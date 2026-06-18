"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex min-h-[76px] items-center justify-between gap-4 py-3">
        <Logo priority />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold text-brand-ink transition-colors hover:text-brand-blue",
                pathname === item.href && "text-brand-blue"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-brand-line text-brand-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "grid border-t border-brand-line bg-white transition-[grid-template-rows] duration-200 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="container pb-5 pt-3">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded px-3 py-3 text-base font-semibold text-brand-ink hover:bg-brand-gray hover:text-brand-blue",
                    pathname === item.href && "bg-brand-gray text-brand-blue"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="mt-4 w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
