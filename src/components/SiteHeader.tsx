// src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/challenge", label: "Challenge" },
  { href: "/technology", label: "Technology" },
  { href: "/science", label: "Science" },
  { href: "/contacts", label: "Contacts" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center">
          <div className="relative h-25 w-25 scale-[3]">
            <Image
              src="/Logo on grey.png"
              alt="Memstera logo"
              fill
              className="object-contain"
              priority
            />
          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  active
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}

                {/* Active underline */}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-emerald-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contacts"
          className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500 md:inline-flex"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}