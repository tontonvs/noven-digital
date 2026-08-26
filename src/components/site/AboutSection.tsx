import { MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-4">
        <div className="rounded-[2.5rem] bg-card p-8 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.35)] sm:p-14">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] ink">Who we are</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] ink">
              About the studio
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] ink">
              Our approach
            </p>

            <p className="mt-6 text-[15px] leading-[1.8] ink-soft">
              We blend methodical engineering with considered design, treating the two as one
              discipline rather than separate handoffs. AI is part of how we build now too, woven
              into our latest projects to move faster without cutting corners on quality.
            </p>

            <p className="mt-8 flex items-center gap-1.5 text-xs ink-soft opacity-70">
              <MapPin size={13} />
              Based in Accra, Ghana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
