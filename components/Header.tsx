"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { shop } from "@/lib/shop";
import { nav } from "@/lib/nav";
import { CloseIcon, PhoneIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-paper transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--color-ink)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-6 px-4 sm:px-6 md:h-[72px] lg:px-10">
        <Link href="/" className="shrink-0" aria-label="Del Mar Barber Shop, home">
          <Image src="/images/logo-ink.png" alt="" width={862} height={464} priority className="h-11 w-auto md:h-12" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] xl:gap-8">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 whitespace-nowrap after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      active ? "after:scale-x-100" : "after:scale-x-0"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href={shop.phoneHref} className="hidden items-center gap-2 text-[15px] tabular-nums md:inline-flex lg:hidden xl:inline-flex">
            <PhoneIcon className="size-4" />
            {shop.phone}
          </a>
          <a
            href={shop.bookingUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex h-10 items-center bg-ink px-4 text-[15px] font-medium whitespace-nowrap text-paper transition-colors hover:bg-ink-soft sm:px-5"
          >
            Book now
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon className="size-6" />
            ) : (
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink text-paper transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col justify-between gap-10 px-6 pt-8 pb-10">
          <ul className="space-y-1">
            {nav.map((n, i) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === n.href ? "page" : undefined}
                  className="block py-2 font-display text-4xl transition-transform duration-500 aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms", transform: open ? "none" : "translateY(8px)" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-steel">
            <div className="pole pole-thin h-2" aria-hidden />
            <p>
              {shop.street}
              <br />
              {shop.cityLine}
            </p>
            <a href={shop.phoneHref} className="block text-2xl text-paper tabular-nums">
              {shop.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
