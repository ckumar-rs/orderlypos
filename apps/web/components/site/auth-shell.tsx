"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HeroLogo } from "@/components/site/hero-logo";
import { ReachUs } from "@/components/site/reach-us";

const points = [
  {
    title: "Till, kitchen, and floor",
    body: "One sign-in for service. Guests order from QR, kiosk, or WhatsApp.",
  },
  {
    title: "Ask reads the books",
    body: "Staff ask about sales and tickets. Ask does not take a payment.",
  },
  {
    title: "Runs in the restaurant",
    body: "The books stay on your computer. Connectors wait until Settings stores that host.",
  },
];

/** Shopify-style auth layout: brand panel + form. */
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex min-h-full flex-1 bg-background text-foreground">
      <aside className="relative hidden w-[44%] flex-col justify-between overflow-hidden border-r border-border bg-secondary/30 px-10 py-10 lg:flex xl:px-14">
        <div>
          <Link href="/orderlyPOS" aria-label="OrderlyPOS home">
            <HeroLogo size={40} />
          </Link>
          <p className="mt-10 text-sm font-medium text-primary">Agentic Restaurant POS</p>
          <h2 className="mt-3 max-w-md text-3xl font-medium tracking-tight text-balance xl:text-4xl">
            Open for service. Still checking after close.
          </h2>
          <ul className="mt-10 max-w-md border-t border-border">
            {points.map((point) => (
              <li key={point.title} className="border-b border-border py-5">
                <p className="text-sm font-medium">{point.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <p className="text-sm text-muted-foreground">
            Plans from ₹2,999 a month.{" "}
            <Link href="/orderlyPOS/pricing" className="font-medium text-foreground underline-offset-4 hover:underline">
              See plans
            </Link>
          </p>
          <ReachUs className="mt-4" />
        </div>
      </aside>

      <main className="relative flex flex-1 flex-col">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(50%_40%_at_50%_0%,color-mix(in_oklch,var(--primary),transparent_88%),transparent)]"
        />
        <header className="flex items-center justify-between px-5 py-4 sm:px-8 lg:justify-end">
          <Link href="/orderlyPOS" className="lg:hidden" aria-label="OrderlyPOS home">
            <HeroLogo size={32} />
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/orderlyPOS" className="hidden text-muted-foreground hover:text-foreground sm:inline">
              Product
            </Link>
            <Link href="/orderlyPOS/pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </header>

        <div className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-sm"
          >
            <div className="mb-8">
              <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h1>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
            </div>
            {children}
            {footer ? <div className="mt-8">{footer}</div> : null}
          </motion.div>
        </div>

        <footer className="border-t border-border px-5 py-4 text-center text-xs text-muted-foreground sm:px-8 sm:text-left">
          OrderlyPOS by Contrivya.{" "}
          <Link href="/orderlyPOS/terms" className="underline-offset-4 hover:underline">
            Terms
          </Link>
          {" · "}
          <Link href="/orderlyPOS/privacy" className="underline-offset-4 hover:underline">
            Privacy
          </Link>
        </footer>
      </main>
    </div>
  );
}
