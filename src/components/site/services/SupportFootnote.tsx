export function SupportFootnote() {
  return (
    <div className="mt-20 flex flex-col items-center gap-4 border-t border-border pt-10 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
      <div className="relative size-12 shrink-0">
        <svg viewBox="0 0 48 48" className="size-full" fill="none">
          <path
            d="M8 24a16 16 0 0 1 27-11.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="spin-slow origin-center text-primary"
          />
          <path d="M28 8 L35 12.5 L29.5 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="spin-slow origin-center text-primary" />
          <path
            d="M40 24a16 16 0 0 1-27 11.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="spin-slow-reverse origin-center text-accent"
          />
          <path d="M20 40 L13 35.5 L18.5 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="spin-slow-reverse origin-center text-accent" />
        </svg>
      </div>
      <p className="max-w-2xl text-sm leading-[1.7] text-muted-foreground">
        <span className="font-semibold text-foreground">Support does not stop at launch.</span> We
        check in and ship small improvements on a regular monthly cadence. But if something urgent
        breaks, like a payment provider changing their API overnight, we do not wait for the next
        cycle. We fix it immediately.
      </p>
    </div>
  );
}
