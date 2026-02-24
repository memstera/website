// src/app/science/page.tsx
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  citation?: string;
};

type ReviewPaper = {
  tag: string;
  year: string;
  title: string;
  authors: string;
  description: string;
  href?: string;
};

const timeline: TimelineItem[] = [
  {
    year: "1996",
    title: "Discovery of Ultrafast Demagnetization",
    description:
      "First observation of ultrafast demagnetization triggered by femtosecond laser pulses, opening the door to ultrafast optical control of magnetism.",
    citation: "Beaurepaire et al., Phys. Rev. Lett. 76, 4250 (1996)",
  },
  {
    year: "2007",
    title: "Helicity-dependent Switching",
    description:
      "First demonstration of helicity-dependent all-optical switching in GdFeCo using circularly polarized laser pulses, enabling deterministic control of magnetization.",
    citation: "Stanciu et al., Phys. Rev. Lett. 99, 047601 (2007)",
  },
  {
    year: "2012",
    title: "Toggle Switching",
    description:
      "Helicity-independent toggle switching achieved in GdFeCo: single pulses can flip magnetization regardless of polarization, simplifying AOS for memory concepts.",
    citation: "Radu et al., Nature 472, 205–208 (2011)",
  },
  {
    year: "2019",
    title: "Integrated Photonic Racetrack Memory",
    description:
      "Integration concepts linking all-optical switching mechanisms with device architectures, bridging ultrafast physics and scalable memory structures.",
    citation: "Lalieu et al., Nat. Communications 10, 110 (2019)",
  },
  {
    year: "2022",
    title: "Nanofabricated Islands with Electrical Readout",
    description:
      "Experimental exploration of femtosecond laser-assisted switching in nanoscale devices combined with direct electrical readout approaches.",
    citation: "Wang et al., Sci. China Inf. Sci. 65, 142403 (2022)",
  },
  {
    year: "2024",
    title: "Ultrafast Toggle Switching Without Heat",
    description:
      "Demonstrated ultrafast toggle switching via a mechanism not relying on heat, strengthening prospects for energy-efficient ultrafast magnetic control.",
    citation: "Zalewski et al., Nat. Communications 15, 4451 (2024)",
  },
];

const reviews: ReviewPaper[] = [
  {
    tag: "Rev. Mod. Phys.",
    year: "2016",
    title: "Ultrafast optical manipulation of magnetic order",
    authors: "Kirilyuk, A. et al., Rev. Mod. Phys. 82, 2731 (2010/2016)",
    description:
      "A broad review of ultrafast optical control of magnetism: mechanisms, timescales, and the role of light polarization and absorption.",
    href: "#",
  },
  {
    tag: "JMMM",
    year: "2022",
    title:
      "Helicity-independent all-optical switching of magnetization in ferrimagnetic alloys",
    authors:
      "Davies, C.S. et al., Journal of Magnetism and Magnetic Materials 563, 169851 (2022)",
    description:
      "Review of helicity-independent single-shot AOS: conditions, material considerations, and practical perspectives for devices.",
    href: "#",
  },
];

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />

      <main>
        <Hero />
        <Foundation />
        <TimelineSection />
        <ReviewPapers />
        <BottomCTA />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          All-optical magnetization switching (AOS)
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
          Exploring the frontiers of photonic memory technology through decades of research
          and innovation.
        </p>
      </div>
    </section>
  );
}

function Foundation() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <div className="flex items-center justify-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-600/30">
              <span className="text-2xl">🔬</span>
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Scientific Foundation
            </h2>
          </div>

          <p className="mt-8 text-base leading-relaxed text-zinc-200 sm:text-lg">
            All-optical magnetization switching (AOS) uses ultrafast laser pulses to control
            magnetic bits, storing data as 0s or 1s, analogous to magnetic storage. By
            leveraging light to change magnetization without electrical delays, AOS can
            enable ultrafast switching and potentially sub-nanosecond memory access.
          </p>

          <p className="mt-6 text-base leading-relaxed text-zinc-200 sm:text-lg">
            Integrated into photonic memory systems, AOS offers a pathway toward rapid,
            energy-efficient data storage for high-performance computing workloads, including
            AI and large-scale simulations.
          </p>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="bg-zinc-950 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Research History &amp; Evolution
        </h2>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-emerald-500/40" />

          <div className="space-y-16">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.year + item.title} className="relative flex items-center">
                  {/* Left */}
                  <div className={`w-1/2 ${isLeft ? "pr-10 text-right" : "pr-10 opacity-0"}`}>
                    {isLeft && <TimelineCard item={item} align="right" />}
                  </div>

                  {/* Center bubble */}
                  <div className="relative z-10 w-0">
                    <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      {item.year}
                    </div>
                  </div>

                  {/* Right */}
                  <div className={`w-1/2 ${!isLeft ? "pl-10" : "pl-10 opacity-0"}`}>
                    {!isLeft && <TimelineCard item={item} align="left" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, align }: { item: TimelineItem; align: "left" | "right" }) {
  return (
    <div className="relative inline-block max-w-md text-left">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/7">
        {/* slim left bar like AIMA */}
        <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-emerald-500/70" />

        <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>

        {item.citation && (
          <p className="mt-4 text-xs text-emerald-400">{item.citation}</p>
        )}
      </div>

      {/* small connector line toward center */}
      <div
        className={[
          "pointer-events-none absolute top-1/2 h-[2px] w-10 -translate-y-1/2 bg-emerald-500/40",
          align === "right" ? "right-[-40px]" : "left-[-40px]",
        ].join(" ")}
      />
    </div>
  );
}

function ReviewPapers() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Review Papers
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-md bg-emerald-600/25 px-3 py-1 text-xs font-semibold text-emerald-200">
                  {p.tag}
                </span>
                <span className="text-sm text-zinc-300">{p.year}</span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">“{p.title}”</h3>
              <p className="mt-3 text-sm text-zinc-300">{p.authors}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-200">{p.description}</p>

              {p.href && (
                <Link
                  href={p.href}
                  className="mt-6 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  Read Publication →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Advancing Photonic Memory Science
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Our research builds upon decades of scientific discovery to create the next
            generation of memory technology for the optical computing era.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/technology"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Learn About Our Technology
            </Link>

            <Link
              href="/contacts"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-6 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/15"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}