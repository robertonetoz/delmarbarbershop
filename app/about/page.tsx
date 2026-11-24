import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Del Mar Barber Shop is a locally owned, family-operated barbershop in North Laredo, TX. Quality cuts, straight-razor shaves and real attention for every client.",
};

const principles = [
  {
    title: "Room to breathe",
    text: "We chose a small team and a big room. The shop never feels crowded, and if you book ahead you walk straight to the chair.",
  },
  {
    title: "We take our time",
    text: "Nobody gets rushed out the door. Your barber asks what you want, checks the details and finishes the job properly.",
  },
  {
    title: "Clean, every client",
    text: "Chairs are disinfected with hospital-grade disinfectant before each client, and the shop is kept clean all day.",
  },
  {
    title: "Kids welcome, parents too",
    text: "Parents can always stay in the shop while their child gets a cut. Kids 10 and under are $20.",
  },
];

const cuts = ["Business cut", "High and tight", "Fades and tapers", "Beard trim & line-up", "Straight-razor shave", "The style you have in mind"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={["A family-run", "barbershop on", "Del Mar Blvd."]}
        intro="Del Mar Barber Shop is locally owned and family operated. We cut hair in North Laredo for one reason: every person who sits in our chair should leave with a quality cut and the feeling that someone paid attention."
        image={{
          src: "/images/storefront.jpg",
          alt: "The red three-story facade of Del Mar Barber Shop with its oval sign and barber poles",
          position: "50% 78%",
        }}
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="bg-paper">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <h2 id="story-title" className="font-display text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.015em]">
            How the shop started
          </h2>
          <div className="max-w-[40rem]">
            <p className="font-display text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.3]">
              We opened our doors during the pandemic, so we planned every part of the shop with care: who we hired, how
              many people would be inside, and how we’d keep everyone healthy.
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite">
              <p>
                The first decision was to keep the team small. It doesn’t always make financial sense, but a crowded shop
                was never what we wanted. A roomy shop with a few people in it is calmer for you and better for the cut.
              </p>
              <p>
                That idea stuck. Today we still believe in quality service and a quality haircut for each person who walks
                in, whether you need a sharp business cut before a meeting or a fresh fade on a Saturday morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section aria-label="Inside the shop" className="bg-paper">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 md:grid-cols-[1fr_1.35fr_1fr] lg:px-10">
          <figure className="relative col-span-1 aspect-[3/4] overflow-hidden">
            <Image src="/images/shop-shelf.jpg" alt="Product shelves and the front counter inside the shop" fill sizes="(min-width: 768px) 28vw, 48vw" className="object-cover" />
          </figure>
          <figure className="relative col-span-1 aspect-[3/4] overflow-hidden md:aspect-auto">
            <Image src="/images/tools.jpg" alt="Clippers and trimmers laid out on the station mat" fill sizes="(min-width: 768px) 38vw, 48vw" className="object-cover" />
          </figure>
          <figure className="relative col-span-2 aspect-[16/10] overflow-hidden md:col-span-1 md:aspect-[3/4]">
            <Image src="/images/work/hot-towel-shave.jpg" alt="A client under a hot towel before a straight-razor shave" fill sizes="(min-width: 768px) 28vw, 100vw" className="object-cover object-[50%_35%]" />
          </figure>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
          <h2 id="principles-title" className="max-w-2xl font-display text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.015em]">
            What you can expect in our chair
          </h2>
          <ul className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {principles.map((p) => (
              <li key={p.title} className="border-t-2 border-ink pt-6">
                <h3 className="font-display text-[1.85rem] leading-tight">{p.title}</h3>
                <p className="mt-3 max-w-[30rem] text-lg leading-relaxed text-graphite">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we cut + quote */}
      <section aria-labelledby="cuts-title" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-24 lg:px-10">
          <div>
            <h2 id="cuts-title" className="font-display text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.015em]">
              Tell us what you want
            </h2>
            <ul className="mt-10 border-t border-ink-line">
              {cuts.map((c) => (
                <li key={c} className="border-b border-ink-line py-4 font-board text-2xl font-semibold">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <figure className="flex flex-col justify-end">
            <div className="pole pole-thin mb-10 h-2 w-24" aria-hidden />
            <blockquote className="font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.2] tracking-[-0.01em]">
              “Jorge is extremely professional and really takes his time and wants to get it right for you. Establishment is
              extremely clean and inviting.”
            </blockquote>
            <figcaption className="mt-6 text-steel">
              <span className="font-semibold text-paper">JT B.</span>, Local Guide, Google review
            </figcaption>
          </figure>
        </div>
      </section>

      <CtaBand title="Come in for a cut" text="Book online in a minute. If you don’t see a time that works, call the shop and we’ll get you in." />
    </>
  );
}
