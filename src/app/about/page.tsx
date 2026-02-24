// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />

      <main>
        <Hero />
        <AboutIntro />
        <MissionVision />
        <Commitment />
        <LearnMore />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          End-to-End Innovation Team
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
          From fundamental research to commercial deployment, our team covers the complete
          innovation journey in photonic memory technology
        </p>
      </div>
    </section>
  );
}

function AboutIntro() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          About Memstera
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-relaxed text-zinc-200 sm:text-lg">
          Founded by experts in all-optical switching, light-matter interaction, laser physics,
          and photonic integration. Our team brings together expertise from leading research
          institutions and semiconductor companies, with backgrounds spanning physics,
          engineering, and materials science. We hold PhDs in these specialized fields, with
          experience across research, nanofabrication, and semiconductor packaging. We focus
          on collaborative research and development, working with academic and industry
          partners to advance photonic memory technology.
        </p>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard
            title="Our Mission"
            imageSrc="/about/mission.jpg"
            imageAlt="Mission illustration"
            body="To fuse integrated photonics with all-optical magnetic switching to deliver first-in-class non-volatile photonic Random Access Memory (pRAM)."
          />
          <InfoCard
            title="Our Vision"
            imageSrc="/about/vision.jpg"
            imageAlt="Vision illustration"
            body="To become the core memory technology for the optical computing era — enabling ultrafast, energy-efficient data storage through light-driven magnetism."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  imageSrc,
  imageAlt,
  body,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        </div>
      </div>

      <h3 className="mt-6 text-center text-2xl font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-4 max-w-md text-center text-base leading-relaxed text-zinc-200">
        {body}
      </p>
    </div>
  );
}

function Commitment() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-semibold text-white">Our Commitment</h3>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            We are committed to responsible innovation and sustainable growth. Our approach
            focuses on developing practical solutions through rigorous research, strategic
            partnerships, and market-driven development. We prioritize long-term value
            creation for all stakeholders while maintaining the highest standards of
            scientific integrity and business ethics.
          </p>
        </div>
      </div>
    </section>
  );
}

function LearnMore() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">
            Interested in Learning More?
          </h3>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            Get in touch with our team to discuss potential collaboration opportunities and
            learn more about our photonic memory technology development.
          </p>

          <div className="mt-12">
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