// src/app/challenge/page.tsx
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function ChallengePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />

      <main>
        <Hero />
        <CoreProblem />
        <ImpactCards />
        <PartialSolutions />
        <OurSolution />
        <Benefits />
        <SimpleCTA />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          The Von Neumann Bottleneck
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
          Understanding the fundamental limitation that constrains modern high-performance
          computing
        </p>
      </div>
    </section>
  );
}

function CoreProblem() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Core Problem</h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-200 sm:text-lg">
            The Von Neumann architecture, introduced in 1945, separates the processor (CPU)
            from memory, connected by a shared bus. This creates a bottleneck in
            high-performance computing (HPC) due to system latency, which includes memory
            device latency (10–100 ns for DRAM, 100–1000× slower than CPUs) and bus transfer
            delays (tens of ns due to limited bandwidth, ~100 GB/s for DDR5).
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/challenge/datacenter.jpg"
              alt="Datacenter racks"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactCards() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <MiniCard
            icon="⚡"
            title="The Speed Problem"
            body="CPUs are incredibly fast, but memory access is 100–1000× slower, causing processors to wait for data."
          />
          <MiniCard
            icon="🔋"
            title="Energy Waste"
            body="A large fraction of system power is consumed by data transfers, with CPUs often idling while waiting for memory."
          />
          <MiniCard
            icon="📈"
            title="Scaling Limits"
            body="As systems grow larger, the bottleneck becomes worse, limiting performance gains in AI and HPC."
          />
        </div>
      </div>
    </section>
  );
}

function MiniCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600/35">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-zinc-200">{body}</p>
    </div>
  );
}

function PartialSolutions() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Current Approaches: Partial Solutions
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
          Today&apos;s solutions like optical IOs and decomposed architectures improve network
          communication and resource efficiency, but they don&apos;t solve the fundamental
          problem: memory itself is still too slow.
        </p>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-emerald-500/30 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl border-white/10 bg-white/5">
              <span className="text-3xl">⚠️</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">The Core Issue Remains</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                While optical IOs can achieve 50–500 ns network latency, the memory device
                itself still takes 10–100 ns to respond. This fundamental memory latency
                cannot be reduced by better networking alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurSolution() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Our Solution: Native Photonic Memory
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-200 sm:text-lg">
                Memstera develops natively photonic memory using all-optical magnetization
                switching (AOS) to eliminate the Von Neumann bottleneck. By using light to
                switch memory states, we can potentially achieve sub-nanosecond latency —
                ~200× faster than traditional DRAM.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/challenge/solution.jpg"
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
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <MiniCard
            icon="⚡"
            title="Ultra-Fast Access"
            body="Sub-nanosecond memory access eliminates CPU stalls"
          />
          <MiniCard
            icon="💚"
            title="Energy Efficient"
            body="Eliminates CPU idle time, reducing power consumption"
          />
          <MiniCard
            icon="🚀"
            title="Scalable"
            body="Enables HPC clusters to scale efficiently without memory bottlenecks"
          />
        </div>
      </div>
    </section>
  );
}

/** Simple CTA (no huge green banner) */
function SimpleCTA() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to Learn More?
          </h2>
          <p className="mt-4 text-base text-zinc-300 sm:text-lg">
            Discover how our photonic memory technology could address your computing
            challenges.
          </p>

          <div className="mt-8">
            <Link
              href="/contacts"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}