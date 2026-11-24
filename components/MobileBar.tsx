import { shop } from "@/lib/shop";
import { PhoneIcon } from "./icons";

// Thumb-reach actions on phones: call or book.
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-ink bg-paper pb-[env(safe-area-inset-bottom)] md:hidden">
      <a href={shop.phoneHref} className="flex h-14 items-center justify-center gap-2 text-[16px]">
        <PhoneIcon className="size-5" />
        Call
      </a>
      <a
        href={shop.bookingUrl}
        target="_blank"
        rel="noopener"
        className="flex h-14 items-center justify-center bg-ink text-[16px] font-medium text-paper"
      >
        Book now
      </a>
    </div>
  );
}
