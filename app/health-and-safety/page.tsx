import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import { shop } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Health & safety",
  description:
    "How Del Mar Barber Shop keeps the shop clean and safe: chairs disinfected before every client, hand sanitizer at the door, fresh air and an uncrowded shop.",
};

const practices = [
  {
    title: "A disinfected chair for every client",
    text: "Barber chairs are wiped down with hospital-grade disinfectant before each client sits down.",
  },
  {
    title: "Hand sanitizer at the door",
    text: "We ask everyone to sanitize their hands as they come in. It’s right by the entrance.",
  },
  {
    title: "Fresh air through the day",
    text: "We open the doors often to bring outdoor air into the shop.",
  },
  {
    title: "Appointments keep it uncrowded",
    text: "Booking ahead means no packed waiting area and no unnecessary wait. You come in, you sit down.",
  },
  {
    title: "Plenty of room",
    text: "The shop is large for the few people inside, so there’s always space between you and the next person.",
  },
  {
    title: "Parents can always stay",
    text: "If your child is getting a cut, you’re welcome to stay in the shop the whole time.",
  },
];

export default function HealthAndSafetyPage() {
  return (
    <>
      <PageHeader
        title={["A clean chair", "for every client."]}
        intro="We opened during the pandemic, and the habits we built then never left. Here’s how we keep the shop clean and comfortable for you, your kids and our team."
        image={{
          src: "/images/sanitation-station.jpg",
          alt: "Hand sanitizer, Barbicide disinfectant, clipper spray and disinfecting wipes on the station counter",
          position: "40% 50%",
        }}
      />

      {/* Statement */}
      <section aria-labelledby="why-title" className="bg-paper">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <h2 id="why-title" className="font-display text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.015em]">
            Why we take it seriously
          </h2>
          <div className="max-w-[40rem]">
            <p className="font-display text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.3]">
              We’re a family business. We care about the health of our family, our customers and their families, so
              safety is part of how the shop runs every day.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-graphite">
              From the start we kept the team small and the shop uncrowded, even when a fuller shop would have made more
              money. A calm, clean shop is better for everyone in it.
            </p>
          </div>
        </div>
      </section>

      {/* The notice on the door */}
      <section aria-labelledby="practices-title" className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
          <div className="pole p-[10px] sm:p-[14px]">
            <div className="bg-paper px-5 py-12 sm:px-10 md:px-14 md:py-16">
              <div className="flex flex-col justify-between gap-4 border-b-2 border-ink pb-8 md:flex-row md:items-end">
                <h2 id="practices-title" className="font-display text-[clamp(2.25rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.015em]">
                  What we do in the shop
                </h2>
                <p className="max-w-sm text-graphite md:text-right">These are the standards we keep for every client, every day.</p>
              </div>
              <ul className="grid md:grid-cols-2">
                {practices.map((p) => (
                  <li
                    key={p.title}
                    className="flex gap-5 border-b border-ink/15 py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10 md:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <span className="mt-2.5 size-2.5 shrink-0 bg-ink" aria-hidden />
                    <div>
                      <h3 className="font-board text-[1.6rem] leading-tight font-semibold">{p.title}</h3>
                      <p className="mt-2 max-w-[28rem] text-lg leading-relaxed text-graphite">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-lg text-graphite">
            Questions about how we keep the shop safe? Call us at{" "}
            <a href={shop.phoneHref} className="text-ink underline underline-offset-4 tabular-nums hover:decoration-2">
              {shop.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Book ahead, skip the wait"
        text="Appointments keep the shop calm. Pick a time online, or call and we’ll find you a chair."
      />
    </>
  );
}
