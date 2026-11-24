import { shop } from "@/lib/shop";

export default function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-lather">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between md:py-20 lg:px-10">
        <div>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.25rem)] leading-[1] tracking-[-0.015em]">{title}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
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
      </div>
    </section>
  );
}
