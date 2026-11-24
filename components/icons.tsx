type P = { className?: string };

export const PhoneIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
    <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5Z" strokeLinejoin="round" />
  </svg>
);

export const InstagramIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3Z" />
  </svg>
);

export const PinIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const Star = ({ className, fill = 1 }: P & { fill?: number }) => {
  const id = `s${Math.round(fill * 100)}`;
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="currentColor" />
          <stop offset={`${fill * 100}%`} stopColor="currentColor" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="m10 1.8 2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8l-4.3-4 5.8-.7L10 1.8Z"
      />
    </svg>
  );
};

export function Stars({ score, className }: { score: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className ?? ""}`} role="img" aria-label={`${score} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-[1em]" fill={Math.max(0, Math.min(1, score - i))} />
      ))}
    </span>
  );
}

export const CloseIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
    <path d="m5 5 14 14M19 5 5 19" strokeLinecap="round" />
  </svg>
);

export const ChevronIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
    <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
