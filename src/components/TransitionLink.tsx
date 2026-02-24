// src/components/TransitionLink.tsx
"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

type Props = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    className?: string;
  };

export default function TransitionLink({
  href,
  onClick,
  children,
  ...rest
}: Props) {
  const router = useRouter();

  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;

        // Let normal browser behavior happen for new tab, external, etc.
        if (
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          (rest.target && rest.target !== "_self")
        ) {
          return;
        }

        // Only intercept same-origin navigation
        e.preventDefault();

        const url = String(href);

        // View Transitions API (Chrome/Edge/Safari TP; if unsupported -> normal push)
       
        const startVT = typeof document !== "undefined" && document.startViewTransition;

        if (startVT) {
          document.startViewTransition(() => {
            router.push(url);
          });
        } else {
          router.push(url);
        }
      }}
    >
      {children}
    </Link>
  );
}