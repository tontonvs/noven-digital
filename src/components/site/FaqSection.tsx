type FaqEntry = { question: string; answer: string };

export function FaqSection({ entries }: { entries: FaqEntry[] }) {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-4">
        <div className="rounded-[2.5rem] bg-card p-8 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.35)] sm:p-14">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] ink-soft">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold ink sm:text-4xl">
              Common questions
            </h2>

            <div className="mt-8 divide-y divide-foreground/10">
              {entries.map((entry) => (
                <details key={entry.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold ink">
                    {entry.question}
                    <span className="shrink-0 text-lg ink-soft transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[14px] leading-[1.8] ink-soft">{entry.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
