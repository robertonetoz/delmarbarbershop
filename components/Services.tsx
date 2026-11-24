import Image from "next/image";
import { extras, services, shop } from "@/lib/shop";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div className="flex flex-col">
          <h2 id="services-title" className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.015em]">
            Services
            <br />
            and prices
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">
            Every men’s cut finishes with a hot-lather neck shave. Don’t see a time that works online? Call the shop and
            we’ll find you a chair.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={shop.bookingUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center bg-paper px-6 font-medium text-ink transition-colors hover:bg-lather"
            >
              Book a service
            </a>
            <a
              href={shop.phoneHref}
              className="inline-flex h-12 items-center border border-paper/40 px-6 tabular-nums transition-colors hover:border-paper"
            >
              {shop.phone}
            </a>
          </div>

          <figure className="relative mt-14 hidden aspect-[4/3] overflow-hidden lg:mt-auto lg:block">
            <Image
              src="/images/tools.jpg"
              alt="Clippers and trimmers laid out on the station mat"
              fill
              sizes="(min-width: 1024px) 38vw, 0px"
              className="object-cover"
            />
          </figure>
        </div>

        <div>
          {/* The price board */}
          <div className="border border-ink-line p-2">
            <div className="border border-ink-line px-5 py-8 sm:px-10 sm:py-12">
              <ul className="divide-y divide-ink-line">
                {services.map((s) => (
                  <li key={s.name} className="py-7 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-board text-[clamp(1.45rem,3vw,2.15rem)] leading-tight font-semibold tracking-[0.005em]">
                        {s.name}
                      </h3>
                      <span className="leader" aria-hidden />
                      <p className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-none tabular-nums">
                        <span className="sr-only">Price: </span>
                        <span className="align-top text-[0.55em]">$</span>
                        {s.price}
                      </p>
                    </div>
                    <p className="mt-2 max-w-[34rem] text-[15px] leading-relaxed text-steel sm:text-base">{s.note}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t-2 border-dotted border-paper/35 pt-8">
                <h3 className="font-board text-xl font-semibold">Also at the chair</h3>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-steel">
                  {extras.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-steel">Ask the shop for pricing on these.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
