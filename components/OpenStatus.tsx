"use client";

import { useEffect, useState } from "react";
import { formatTime, hours, shop } from "@/lib/shop";

type Status = { open: boolean; text: string; today: number };

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function getStatus(now = new Date()): Status {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: shop.timeZone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const wd = parts.find((p) => p.type === "weekday")!.value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd);
  const mins = Number(parts.find((p) => p.type === "hour")!.value) * 60 + Number(parts.find((p) => p.type === "minute")!.value);

  const t = hours[day];
  if (t.open && t.close && mins >= toMinutes(t.open) && mins < toMinutes(t.close)) {
    return { open: true, text: `Open now, until ${formatTime(t.close)}`, today: day };
  }
  if (t.open && mins < toMinutes(t.open)) {
    return { open: false, text: `Closed now, opens today at ${formatTime(t.open)}`, today: day };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const next = hours[d];
    if (next.open) {
      const when = i === 1 ? "tomorrow" : next.day;
      return { open: false, text: `Closed now, opens ${when} at ${formatTime(next.open)}`, today: day };
    }
  }
  return { open: false, text: "Closed", today: day };
}

export function useShopStatus() {
  const [status, setStatus] = useState<Status | null>(null);
  useEffect(() => {
    const tick = () => setStatus(getStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const status = useShopStatus();
  return (
    <p className={`inline-flex items-center gap-2 ${className}`} aria-live="polite">
      <span
        className={`size-2 rounded-full ${status?.open ? "bg-current" : "border border-current"}`}
        aria-hidden
      />
      <span className={status ? "" : "opacity-0"}>{status?.text ?? "Checking hours"}</span>
    </p>
  );
}
