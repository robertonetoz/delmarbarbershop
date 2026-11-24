import Image from "next/image";

const cuts = ["Business cut", "High and tight", "Fades and tapers", "The style you bring in"];

export default function Shop() {
  return (
    <section aria-labelledby="shop-title" className="bg-lather">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:gap-20 lg:px-10">
        <div className="relative grid grid-cols-[1.25fr_1fr] items-end gap-3 sm:gap-4">
          <figure className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/storefront.jpg"
              alt="The red three-story facade of Del Mar Barber Shop with its oval sign and barber poles"
              fill
              sizes="(min-width: 768px) 28vw, 56vw"
              className="object-cover object-bottom"
            />
          </figure>
          <figure className="relative mb-10 aspect-[3/4] overflow-hidden">
            <Image
              src="/images/storefront-angle.jpg"
              alt="Barber pole light and window sign beside the shop’s front door"
              fill
              sizes="(min-width: 768px) 22vw, 44vw"
              className="object-cover"
            />
          </figure>
        </div>

        <div>
          <h2 id="shop-title" className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.015em]">
            Look for the red building on Del Mar.
          </h2>
          <div className="mt-7 max-w-xl space-y-5 text-lg leading-relaxed text-graphite">
            <p>
              Del Mar Barber Shop is a neighborhood shop in North Laredo, built on one idea: every person who sits in
              the chair gets a quality cut and real attention.
            </p>
            <p>Our barbers take their time, and the shop stays clean and easy to relax in. Tell us what you want:</p>
          </div>
          <ul className="mt-8 grid max-w-xl grid-cols-1 border-t border-ink sm:grid-cols-2">
            {cuts.map((c) => (
              <li key={c} className="border-b border-ink/15 py-4 font-board text-xl font-semibold sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
