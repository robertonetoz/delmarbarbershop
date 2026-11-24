import { reviews, shop } from "@/lib/shop";
import { Stars } from "./icons";

export default function Reviews() {
  const [featured, ...rest] = reviews;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-paper">
      <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="reviews-title" className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.015em]">
              What people say after the cut
            </h2>
            <div className="mt-10 flex items-end gap-5">
              <p className="font-display text-[6.5rem] leading-[0.8] tabular-nums">{shop.rating.score}</p>
              <div className="pb-1">
                <Stars score={shop.rating.score} className="text-2xl" />
                <p className="mt-1 text-graphite">{shop.rating.count} reviews on Google</p>
              </div>
            </div>
            <a
              href={shop.googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              Read every review on Google
            </a>
          </div>

          <figure className="border-l-2 border-ink pl-6 sm:pl-10">
            <blockquote className="font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.18] tracking-[-0.01em]">
              “{featured.text}”
            </blockquote>
            <figcaption className="mt-6 text-graphite">
              <span className="font-semibold text-ink">{featured.name}</span>, {featured.when}
            </figcaption>
          </figure>
        </div>

        <ul className="mt-16 grid gap-px bg-ink/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-5">
          {rest.map((r) => (
            <li key={r.name} className="flex flex-col justify-between gap-6 bg-paper py-6 sm:p-6 lg:first:pl-0">
              <blockquote className="text-[17px] leading-relaxed">“{r.text}”</blockquote>
              <p className="text-sm text-graphite">
                <span className="font-semibold text-ink">{r.name}</span>
                <br />
                {r.when}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
