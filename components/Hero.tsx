import Image from "next/image";
import { shop } from "@/lib/shop";
import OpenStatus from "./OpenStatus";
import { Stars } from "./icons";

function SignBand({ items }: { items: string[] }) {
  return (
    <p className="flex items-center justify-center gap-3 px-3 py-3 text-center font-display text-[13px] tracking-[0.14em] uppercase sm:gap-5 sm:text-lg md:py-4 md:text-xl">
      {items.map((t, i) => (
        <span key={t} className="contents">
          {i > 0 && <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-ink" />}
          <span className="whitespace-nowrap">{t}</span>
        </span>
      ))}
    </p>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="px-3 pt-3 pb-10 sm:px-6 sm:pt-6 md:pb-16 lg:px-10">
      {/* The shop window, rebuilt: a barber-pole frame around the sign */}
      <div className="pole frame-in mx-auto max-w-[1320px] p-[10px] sm:p-[14px]">
        <div className="bg-paper">
          <SignBand items={["Haircuts", "Kids cuts", "Shaves"]} />
          <div className="h-px bg-ink" />

          <div className="grid items-stretch md:grid-cols-[1.08fr_1fr]">
            <div className="flex flex-col justify-between gap-10 px-5 pt-10 pb-8 sm:px-8 md:px-10 md:pt-12 md:pb-10 lg:px-14 lg:pt-14">
              <div>
                <OpenStatus className="fade-in mb-6 text-[15px] text-graphite" />
                <h1
                  id="hero-title"
                  className="font-display text-[clamp(2.9rem,8.6vw,4rem)] leading-[0.95] tracking-[-0.02em] md:text-[clamp(3rem,5.5vw,5.4rem)]"
                >
                  <span className="line" style={{ "--i": 0 } as React.CSSProperties}>
                    <span>Sharp cuts,</span>
                  </span>
                  <span className="line" style={{ "--i": 1 } as React.CSSProperties}>
                    <span>close shaves,</span>
                  </span>
                  <span className="line" style={{ "--i": 2 } as React.CSSProperties}>
                    <span>North Laredo.</span>
                  </span>
                </h1>
                <p className="fade-in mt-7 max-w-[34rem] text-pretty text-lg leading-relaxed text-graphite md:text-[19px]" style={{ "--d": "1s" } as React.CSSProperties}>
                  Fades, business cuts, high-and-tights and straight-razor shaves on East Del Mar Boulevard. Book online,
                  or call and we’ll get you in.
                </p>
              </div>

              <div className="fade-in space-y-7" style={{ "--d": "1.15s" } as React.CSSProperties}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={shop.bookingUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-14 items-center justify-center bg-ink px-8 text-[17px] font-medium text-paper transition-colors hover:bg-ink-soft"
                  >
                    Book an appointment
                  </a>
                  <a
                    href={shop.phoneHref}
                    className="inline-flex h-14 items-center justify-center border border-ink px-8 text-[17px] tabular-nums transition-colors hover:bg-ink hover:text-paper"
                  >
                    Call {shop.phone}
                  </a>
                </div>
                <a href="#reviews" className="group inline-flex items-center gap-3 text-[15px]">
                  <Stars score={shop.rating.score} className="text-lg" />
                  <span>
                    <strong className="font-semibold">{shop.rating.score}</strong> on Google, from{" "}
                    <span className="underline decoration-1 underline-offset-4 group-hover:decoration-2">
                      {shop.rating.count} reviews
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] border-t border-ink md:min-h-[580px] md:border-t-0 md:border-l">
              <Image
                src="/images/window-sign.jpg"
                alt="The Del Mar Barber Shop window sign with a barber pole, on the shop’s red facade"
                fill
                priority
                sizes="(min-width: 768px) 48vw, 100vw"
                className="object-cover object-[50%_45%]"
              />
            </div>
          </div>

          <div className="h-px bg-ink" />
          <SignBand items={["Fades", "Hot towels", "Facials"]} />
        </div>
      </div>
    </section>
  );
}
