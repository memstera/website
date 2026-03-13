// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />

      <main>
        <Hero />
        <ExecutiveSummary />
        <Vision />
        <BusinessImpact />
        <FinalCTA />
      </main>

      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400 sm:px-6">
          © {new Date().getFullYear()} Memstera. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image (одна, без повторов) */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg" // public/hero.jpg
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* затемнение для читаемости */}
        <div className="absolute inset-0 bg-zinc-950/20" />
        {/* мягкая виньетка */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_75%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* Tech grid/glow поверх картинки */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-zinc-950/30 to-zinc-950/80" />
      </div>

      {/* Content (центр по вертикали) */}
      <div className="relative mx-auto flex min-h-[50svh] max-w-6xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6">
        <div className="flex item-center text-5xl font-semibold text-white/80">
          <span className="tracking-[0.35em]">mem</span>
          
          <span className="relative mx-[0.18em] inline-block h-[2em] w-[1.1em] translate-y-[-1.15em] -translate-x-[0.16em]">
            <Image
              src="/Logo small.png"
              alt="Memstera logo small"
              fill
              className="object-contain"
            />
            </span>
          
          <span className="tracking-[0.35em]">tera</span>
        </div>

        <h1 className="mt-50 max-w-5xl text-[36px] leading-[0.98] font-semibold tracking-tight text-white sm:text-[56px] lg:text-[72px]">
          Reinventing memory for the data-intensive era
        </h1>

        <div className="mx-auto mt-70 max-w-4xl rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-center text-sm text-zinc-100 backdrop-blur-xl sm:text-base">
          Our photonic memory technology can address the fundamental performance gap
          between processors and memory, potentially enabling faster, more efficient
          computing for AI and high-performance applications.
        </div>


      </div>
    </section>
  );
}

function ExecutiveSummary() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Executive Summary
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-zinc-200 sm:text-lg">
          <p>
            Modern computing faces a fundamental challenge: processors are waiting for
            memory. This bottleneck limits AI performance, increases energy costs, and
            constrains scalability across the industry.
          </p>
          <p>
            How can we overcome these electrical limitations? What if memory could
            operate at the speed of light?
          </p>
          <p>
            We&apos;re developing photonic memory technology based on All-Optical
            Magnetization Switching (AOS), building on decades of research in this field.
            Our approach uses ultrafast laser pulses to control magnetic bits, potentially
            achieving sub-nanosecond data access—hundreds of times faster than conventional
            memory.
          </p>
          <p>
            Currently in development, we work with industry partners and research
            institutions to advance this technology toward practical implementation.
          </p>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Our Vision
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-zinc-200 sm:text-xl">
          A new memory class that bridges electronics and photonics — enabling the next
          generation of high-performance, sustainable computing through innovative photonic
          memory solutions.
        </p>
      </div>
    </section>
  );
}

function BusinessImpact() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Business Impact
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ImpactCard
            title="Without Our Solution"
            icon="⚠️"
            items={[
              "Long AI training and inference times",
              "High energy and cooling costs",
              "Limited ability to scale workloads",
              "Over-provisioning of memory resources",
              "Performance bottlenecks in HPC applications",
            ]}
          />
          <ImpactCard
            title="With Our Solution"
            icon="🚀"
            items={[
              "Faster AI training and inference through latency reduction",
              "Lower energy costs through decomposed architecture",
              "Superior scalability for future demands",
              "Optimized resource utilization",
              "Enhanced HPC performance",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ImpactCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="text-lg font-semibold text-white">{title}</div>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-zinc-200 sm:text-base">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500/80" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to Learn More?
          </h2>
          <p className="mt-4 text-base text-zinc-200 sm:text-lg">
            Discover how our photonic memory technology could address your computing
            challenges.
          </p>

          <div className="mt-8">
            <Link
              href="/contacts"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-emerald-600 px-6 text-lg font-semibold text-white transition hover:bg-emerald-500"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}