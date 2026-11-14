type Props = { className?: string; showWordmark?: boolean };

/** Simple and Sorted mark: a drawer tray with four compartments, one filled. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="28" height="28" rx="7" fill="#2F6B5E" />
      <rect x="7" y="7" width="8" height="8" rx="2" fill="#F7F5F1" />
      <rect x="17" y="7" width="8" height="8" rx="2" fill="#F7F5F1" opacity="0.55" />
      <rect x="7" y="17" width="8" height="8" rx="2" fill="#F7F5F1" opacity="0.55" />
      <rect x="17" y="17" width="8" height="8" rx="2" fill="#F7F5F1" opacity="0.55" />
    </svg>
  );
}

export function Logo({ className = "", showWordmark = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      {showWordmark && (
        <span className="font-display text-[1.15rem] font-semibold tracking-tight text-ink">
          Simple <span className="font-normal text-muted">and</span> Sorted
        </span>
      )}
    </span>
  );
}
