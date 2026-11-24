"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { shop, work } from "@/lib/shop";
import { ChevronIcon, CloseIcon, InstagramIcon } from "./icons";

export default function Work() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + work.length) % work.length)), []);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (!dlg.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    window.addEventListener("keydown", onKey);
    dlg.addEventListener("close", onClose);
    return () => {
      window.removeEventListener("keydown", onKey);
      dlg.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : work[index];

  return (
    <section id="work" aria-labelledby="work-title" className="bg-paper">
      <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="work-title" className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.015em]">
              Fresh from the chair
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-graphite">
              Recent cuts, fades and shaves from our Instagram. Tap a photo to see it larger.
            </p>
          </div>
          <a
            href={shop.instagram}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 shrink-0 items-center gap-2.5 self-start border border-ink px-5 transition-colors hover:bg-ink hover:text-paper md:self-auto"
          >
            <InstagramIcon className="size-5" />
            Follow {shop.instagramHandle}
          </a>
        </div>

        <ul className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {work.map((w, i) => (
            <li key={w.src} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => open(i)}
                className="group relative block w-full overflow-hidden bg-lather"
                aria-label={`View larger: ${w.alt}`}
              >
                <Image
                  src={w.src}
                  alt={w.alt}
                  width={w.w}
                  height={w.h}
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 48vw"
                  className="h-auto w-full grayscale-[0.15] transition-[transform,filter] duration-700 ease-[var(--ease-razor)] group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current && (
          <div className="flex h-full flex-col text-paper" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm text-steel tabular-nums">
                {index! + 1} of {work.length}
              </p>
              <button type="button" onClick={close} className="inline-flex size-11 items-center justify-center" aria-label="Close photo viewer">
                <CloseIcon className="size-7" />
              </button>
            </div>
            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-14 sm:px-24"
              onClick={(e) => e.target === e.currentTarget && close()}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                sizes="90vw"
                className="lb-img max-h-full w-auto object-contain"
                style={{ maxHeight: "calc(100dvh - 10rem)" }}
              />
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute top-1/2 left-1 inline-flex size-12 -translate-y-1/2 items-center justify-center sm:left-6"
                aria-label="Previous photo"
              >
                <ChevronIcon className="size-8 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute top-1/2 right-1 inline-flex size-12 -translate-y-1/2 items-center justify-center sm:right-6"
                aria-label="Next photo"
              >
                <ChevronIcon className="size-8" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-1 px-4 py-5 text-center">
              <p className="font-display text-xl">{current.alt}</p>
              {current.post && (
                <a href={current.post} target="_blank" rel="noopener" className="text-sm text-steel underline underline-offset-4 hover:text-paper">
                  See the post on Instagram
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
