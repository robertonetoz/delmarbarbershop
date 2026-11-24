import Image from "next/image";
import Link from "next/link";
import { shop } from "@/lib/shop";
import { nav } from "@/lib/nav";
import { FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="pole pole-thin h-3" aria-hidden />
      <div className="mx-auto max-w-[1320px] px-4 pt-20 pb-28 sm:px-6 md:pt-24 md:pb-14 lg:px-10">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <Image src="/images/logo-white.png" alt="Del Mar Barber Shop, Shave & Haircut" width={862} height={464} className="h-auto w-full max-w-[420px]" />
          </div>
          <div className="flex flex-col gap-8 md:items-end md:text-right">
            <p className="font-display text-3xl leading-tight sm:text-4xl">Ready for a fresh cut?</p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={shop.bookingUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex h-12 items-center bg-paper px-6 font-medium text-ink transition-colors hover:bg-lather"
              >
                Book an appointment
              </a>
              <a href={shop.phoneHref} className="inline-flex h-12 items-center border border-paper/40 px-6 tabular-nums transition-colors hover:border-paper">
                {shop.phone}
              </a>
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="mt-16 border-t border-ink-line pt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:underline hover:underline-offset-4">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-6 text-sm text-steel md:flex-row md:items-center md:justify-between">
          <p>
            {shop.street}, {shop.cityLine}
            <br />
            <a href={`mailto:${shop.email}`} className="hover:text-paper">
              {shop.email}
            </a>
          </p>
          <div className="flex items-center gap-2">
            <a href={shop.instagram} target="_blank" rel="noopener" aria-label="Del Mar Barber Shop on Instagram" className="inline-flex size-11 items-center justify-center hover:text-paper">
              <InstagramIcon className="size-6" />
            </a>
            <a href={shop.facebook} target="_blank" rel="noopener" aria-label="Del Mar Barber Shop on Facebook" className="inline-flex size-11 items-center justify-center hover:text-paper">
              <FacebookIcon className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
