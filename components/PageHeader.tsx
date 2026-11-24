import Image from "next/image";

type Props = {
  title: string[];
  intro: string;
  image: { src: string; alt: string; position?: string };
};

// Inner-page opener: the barber-pole stripe from the home page, then title + photo.
export default function PageHeader({ title, intro, image }: Props) {
  return (
    <section className="px-3 pt-3 sm:px-6 sm:pt-6 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="pole frame-in h-[10px] sm:h-[14px]" aria-hidden />
        <div className="grid border-x border-b border-ink md:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col justify-end px-5 pt-14 pb-10 sm:px-8 md:px-10 md:pt-24 md:pb-14 lg:px-14">
            <h1 className="font-display text-[clamp(2.8rem,4.9vw,4.4rem)] leading-[0.96] tracking-[-0.02em]">
              {title.map((t, i) => (
                <span key={t} className="line" style={{ "--i": i } as React.CSSProperties}>
                  <span>{t}</span>
                </span>
              ))}
            </h1>
            <p
              className="fade-in mt-7 max-w-[36rem] text-pretty text-lg leading-relaxed text-graphite md:text-[19px]"
              style={{ "--d": "0.9s" } as React.CSSProperties}
            >
              {intro}
            </p>
          </div>
          <div className="relative min-h-[320px] border-t border-ink md:min-h-[520px] md:border-t-0 md:border-l">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover"
              style={{ objectPosition: image.position ?? "50% 50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
