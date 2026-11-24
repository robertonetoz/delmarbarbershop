"use client";

import { formatTime, hours, shop } from "@/lib/shop";
import { useShopStatus } from "./OpenStatus";
import { PhoneIcon, PinIcon } from "./icons";

// Monday-first order reads more naturally on a shop door.
const order = [1, 2, 3, 4, 5, 6, 0];

export default function Visit() {
  const status = useShopStatus();

  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-paper">
      <div className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
        <div className="grid border border-ink lg:grid-cols-[1fr_1.1fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <h2 id="visit-title" className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.015em]">
              Hours and location
            </h2>

            <p className="mt-5 inline-flex items-center gap-2 text-graphite" aria-live="polite">
              <span className={`size-2 rounded-full ${status?.open ? "bg-ink" : "border border-ink"}`} aria-hidden />
              <span className={status ? "" : "opacity-0"}>{status?.text ?? "Checking hours"}</span>
            </p>

            <table className="mt-8 w-full max-w-md text-[17px]">
              <caption className="sr-only">Opening hours</caption>
              <tbody>
                {order.map((d) => {
                  const h = hours[d];
                  const isToday = status?.today === d;
                  return (
                    <tr key={h.day} className={`border-b border-ink/15 ${isToday ? "font-semibold" : ""}`}>
                      <th scope="row" className="py-3 text-left font-[inherit]">
                        {h.day}
                        {isToday && <span className="ml-2 text-sm font-normal text-graphite">today</span>}
                      </th>
                      <td className="py-3 text-right tabular-nums">
                        {h.open && h.close ? `${formatTime(h.open)} – ${formatTime(h.close)}` : "Closed"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="mt-4 max-w-md text-sm text-graphite">Holiday hours can change. Call ahead around holidays.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-[auto_auto] sm:justify-start sm:gap-x-12">
              <a href={shop.directionsUrl} target="_blank" rel="noopener" className="group flex gap-3">
                <PinIcon className="mt-0.5 size-5 shrink-0" />
                <span>
                  {shop.street}
                  <br />
                  {shop.cityLine}
                  <span className="mt-1 block text-sm underline underline-offset-4 group-hover:decoration-2">Get directions</span>
                </span>
              </a>
              <a href={shop.phoneHref} className="group flex gap-3">
                <PhoneIcon className="mt-0.5 size-5 shrink-0" />
                <span>
                  <span className="tabular-nums">{shop.phone}</span>
                  <span className="mt-1 block text-sm underline underline-offset-4 group-hover:decoration-2">Call the shop</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] border-t border-ink lg:border-t-0 lg:border-l">
            <iframe
              title="Map showing Del Mar Barber Shop at 1713 E Del Mar Blvd, Laredo"
              src={shop.mapEmbedUrl}
              className="map-mono absolute inset-0 size-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
