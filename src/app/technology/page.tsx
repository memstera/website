// src/app/technology/page.tsx
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type Accent = "emerald" | "rose" | "amber" | "violet" | "cyan" | "lime";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />

      <main>
        <Hero />
        <BridgeCard />
        <BuildingBlocks />
        <TransformCards />
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
          All-Optical Integrated Memory Array (AIMA)
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
          Combining All-Optical Switching (AOS) research with integrated photonics for
          practical memory applications
        </p>
      </div>
    </section>
  );
}

function BridgeCard() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Bridging Research to Application
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-200 sm:text-lg">
                Our technology combines two key innovations: All-Optical Switching (AOS)
                phenomena and Photonic Integrated Circuits (PICs). AOS enables ultrafast
                photonic memory through light-driven magnetization switching, while PIC
                integration makes this technology practical and manufacturable. This
                combination transforms decades of fundamental research into a usable device
                that could address the von Neumann bottleneck in computing architectures.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/technology/bridge.jpg"
                  alt="Photonic memory illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-16 text-center text-3xl font-semibold text-white sm:text-4xl">
          How It Works: Building Blocks
        </h3>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
          Our technology progresses from fundamental physics to complete system integration
        </p>
      </div>
    </section>
  );
}

function BuildingBlocks() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl space-y-6 px-4 pb-16 sm:px-6">
        <GlowCard
          accent="cyan"
          icon="🧲"
          title="Core Mechanism: AOS"
          body="All-Optical Switching (AOS) uses femtosecond laser pulses to switch magnetization states in ferrimagnetic materials without electrical currents, achieving ultrafast switching through pure optical control."
          footer={
            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 px-5 py-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Metric label="Latency" value="~20 picoseconds" />
                <Metric label="Energy per Bit" value="<10 femtojoules" />
              </div>
            </div>
          }
          cta={
            <Link
              href="/science"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/15"
            >
              Explore the Science Behind AOS →
            </Link>
          }
        />

        <GlowCard
          accent="violet"
          icon="🔗"
          title="Fused with Integrated Photonics"
          body="AOS mechanisms are integrated into photonic integrated circuits (PICs), enabling optical control and readout of memory states through waveguide structures on a single chip. This integration provides pure optical control while maintaining high performance."
        />

        <GlowCard
          accent="amber"
          icon="🧩"
          title="Added on SiN Interposer"
          body="Memory chips are arranged on silicon nitride interposers to form memory blocks. Femtosecond laser pulses from external lasers route energy to the memory chips through waveguide structures, enabling high-density integration with minimal additional losses."
        />

        <GlowCard
          accent="rose"
          icon="🏗️"
          title="Arranged in a Rack"
          body="Multiple memory blocks are organized in rack-level configurations, with each memory block receiving its own laser input. A separate control unit combines femtosecond laser pulses with continuous wave light control, enabling scalable, composable computing architectures."
        />

        <GlowCard
          accent="emerald"
          icon="🌐"
          title="Interface with Optical IOs"
          body="Continuous wave control units provide seamless interface with optical I/Os, enabling high-bandwidth, low-latency communication with processing units through advanced optical routing and control systems."
          footer={
            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 px-5 py-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Metric label="Latency" value="<5 nanoseconds" />
                <Metric label="Energy per Bit" value="~100 femtojoules" />
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}

/**
 * AIMA-like card with subtle colored edge glow.
 * Implemented via:
 * - outer "ring" gradient (border illusion)
 * - inner card surface
 * - optional hover glow
 */
function GlowCard({
  accent,
  icon,
  title,
  body,
  footer,
  cta,
}: {
  accent: Accent;
  icon: string;
  title: string;
  body: string;
  footer?: React.ReactNode;
  cta?: React.ReactNode;
}) {
  const accents: Record<
    Accent,
    { bar: string; glow: string; iconBg: string }
  > = {
    emerald: {
      bar: "bg-emerald-500",
      glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]",
      iconBg: "bg-emerald-600/30",
    },
    cyan: {
      bar: "bg-cyan-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]",
      iconBg: "bg-cyan-500/25",
    },
    violet: {
      bar: "bg-violet-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(167,139,250,0.08)]",
      iconBg: "bg-violet-500/25",
    },
    amber: {
      bar: "bg-amber-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]",
      iconBg: "bg-amber-500/25",
    },
    rose: {
      bar: "bg-rose-400",
      glow: "group-hover:shadow-[0_0_40px_rgba(251,113,133,0.08)]",
      iconBg: "bg-rose-500/25",
    },
  };

  const s = accents[accent];

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition sm:p-10 hover:bg-white/7">
      
      {/* LEFT COLOR BAR */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl ${s.bar}`} />

      <div className={`transition duration-300 ${s.glow}`}>
        <div className="flex items-start gap-4">
          <div className={`grid h-12 w-12 place-items-center rounded-2xl ${s.iconBg}`}>
            <span className="text-2xl">{icon}</span>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-200">
              {body}
            </p>

            {footer}
            {cta}
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="text-sm text-zinc-300">{label}:</div>
      <div className="text-sm font-semibold text-emerald-300">{value}</div>
    </div>
  );
}

function TransformCards() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          How Natively Photonic Memory Transforms HPC &amp; AI
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
          Our AOS-based photonic memory, with 20 ps device latency and system latency of a few
          nanoseconds, transforms computation by addressing the Von Neumann bottleneck across
          three critical dimensions.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ImpactPillar
            icon="📈"
            title="Increased Throughput"
            accent="emerald"
            statLeft="Traditional DRAM: 100 ns"
            statRight="Photonic Memory: < 1 ns"
            body="CPUs no longer wait for slow memory. Up to 200× faster access eliminates stalls, allowing CPUs to operate at near-peak performance. Neural network computations can be reduced from hours to minutes."
            impact="Impact: Higher throughput enables faster processing of large datasets, critical for real-time HPC applications."
          />
          <ImpactPillar
            icon="💚"
            title="Improved Energy Efficiency"
            accent="lime"
            statLeft="Traditional HPC"
            statRight="Significant reduction"
            body="Sub-ns access time reduces stall durations, minimizing idle power. Optical IOs with lower energy per bit and AOS’s low-energy switching further cut power use."
            impact="Impact: Lower energy use reduces operational costs and thermal challenges, enabling sustainable HPC."
          />
          <ImpactPillar
            icon="🚀"
            title="Enhanced Scalability"
            accent="violet"
            statLeft="System Latency: ~5 ns"
            statRight="Optical IO: 100s of GB/s"
            body="In exascale systems, a few ns system latency minimizes synchronization overhead. Pooled memory enables dynamic resource allocation. Million-core systems can save seconds per task, enabling linear performance scaling."
            impact="Impact: Scalable systems handle growing data volumes efficiently, supporting exascale AI and simulations."
          />
        </div>
      </div>
    </section>
  );
}

function ImpactPillar({
  icon,
  title,
  accent,
  statLeft,
  statRight,
  body,
  impact,
}: {
  icon: string;
  title: string;
  accent: Accent;
  statLeft: string;
  statRight: string;
  body: string;
  impact: string;
}) {
  // reuse the glow palette, but keep it simple here
  const palette: Record<Accent, { iconBg: string; impactBg: string; ring: string }> = {
    emerald: {
      iconBg: "bg-emerald-600/35",
      impactBg: "bg-emerald-600/20",
      ring: "from-emerald-500/30 via-emerald-500/10 to-transparent",
    },
    lime: {
      iconBg: "bg-lime-500/30",
      impactBg: "bg-lime-500/20",
      ring: "from-lime-400/28 via-lime-400/10 to-transparent",
    },
    amber: {
      iconBg: "bg-amber-500/25",
      impactBg: "bg-amber-500/18",
      ring: "from-amber-400/28 via-amber-400/10 to-transparent",
    },
    violet: {
      iconBg: "bg-violet-500/25",
      impactBg: "bg-violet-500/18",
      ring: "from-violet-400/28 via-violet-400/10 to-transparent",
    },
    cyan: {
      iconBg: "bg-cyan-500/25",
      impactBg: "bg-cyan-500/18",
      ring: "from-cyan-400/28 via-cyan-400/10 to-transparent",
    },
  };

  const p = palette[accent];

  return (
    <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-white/10 to-transparent">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition group-hover:bg-white/7">
        <div className="flex items-start gap-4">
          <div className={["grid h-12 w-12 place-items-center rounded-2xl", p.iconBg].join(" ")}>
            <span className="text-2xl">{icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-200">
          <div className="flex items-center justify-between gap-6">
            <span className="text-zinc-300">{statLeft}</span>
            <span className="text-emerald-300">{statRight}</span>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-zinc-200">{body}</p>

        <div className={["mt-6 rounded-xl border border-white/10 px-5 py-4 text-sm text-zinc-100", p.impactBg].join(" ")}>
          {impact}
        </div>
      </div>
    </div>
  );
}

function BottomCTA() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Revolutionizing Memory Technology
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Our photonic memory technology could potentially transform computing by addressing
            the von Neumann bottleneck and enabling faster, more energy-efficient data
            processing.
          </p>
          <div className="mt-8">
            <Link
              href="/contacts"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-emerald-600 px-7 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}