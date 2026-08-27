export function FooterSection() {
  return (
    <footer id="contact" className="relative">
      <div className="rounded-t-[2.5rem] bg-muted sm:mx-4">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-[calc(4rem+1cm)] md:pb-16 md:pl-28 md:pr-10">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] ink-soft">Say hello</p>
              <h2 className="mt-4 font-display text-4xl font-bold ink sm:text-5xl">Let's talk</h2>
              <p className="mt-4 max-w-sm text-sm leading-[1.7] ink-soft">
                Tell us about your project and we'll get back to you.
              </p>
            </div>

            <div className="grid gap-1.5 text-sm ink-soft sm:justify-items-end sm:text-right">
              <p className="font-semibold ink">Accra, Ghana</p>
              <p>mensahkbiz@gmail.com</p>
              <p>+233 548 456 600</p>
              <p>github.com/tontonvs</p>
              <p>linkedin.com/in/tonton-mensah</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-foreground/10 pt-6 text-xs ink-soft sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Noven. All rights reserved.</p>
            <p>Designed &amp; built by Noven.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
