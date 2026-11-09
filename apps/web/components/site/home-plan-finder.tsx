"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Shape = "cafe" | "dining" | "branches";
type Need = "basic" | "kiosk" | "full";

const shapes: { id: Shape; label: string; hint: string }[] = [
  { id: "cafe", label: "Cafe or truck", hint: "Short menu, fast counter" },
  { id: "dining", label: "Dining room", hint: "Tables and the pass" },
  { id: "branches", label: "Several branches", hint: "Central view later" },
];

const needs: { id: Need; label: string; hint: string }[] = [
  { id: "basic", label: "Billing and kitchen basics", hint: "Growth fits most rooms" },
  { id: "kiosk", label: "Self-order kiosk", hint: "Pro adds the kiosk" },
  { id: "full", label: "Inventory and loyalty too", hint: "Pro covers stock and rewards" },
];

function recommend(shape: Shape | null, need: Need | null) {
  if (!shape || !need) return null;
  if (shape === "branches") {
    return {
      name: "Enterprise",
      price: "₹12,999",
      why: "Every branch, a central dashboard, and a named contact. Ask Contrivya for the quote path.",
      href: "mailto:info@contrivya.com?subject=OrderlyPOS%20Enterprise",
      cta: "Email Contrivya",
    };
  }
  if (need === "basic" && shape === "cafe") {
    return {
      name: "Starter or Growth",
      price: "₹2,999–₹4,999",
      why: "Starter for a trial or truck. Growth when you want full billing and kitchen basics.",
      href: "/orderlyPOS/pricing",
      cta: "See both plans",
    };
  }
  if (need === "basic") {
    return {
      name: "Growth",
      price: "₹4,999",
      why: "Full billing, basic reports, and kitchen display — the plan most small restaurants start on.",
      href: "/signup",
      cta: "Try now OrderlyPOS",
    };
  }
  return {
    name: "Pro",
    price: "₹6,999",
    why: "Kiosk ordering, inventory, and loyalty on top of Growth.",
    href: "/signup",
    cta: "Try now OrderlyPOS",
  };
}

/** Shopify-style “which plan” picker — short, not a long form. */
export function HomePlanFinder() {
  const [shape, setShape] = useState<Shape | null>(null);
  const [need, setNeed] = useState<Need | null>(null);
  const result = useMemo(() => recommend(shape, need), [shape, need]);

  return (
    <section className="border-y border-border" aria-labelledby="home-finder-title" id="plan-finder">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-primary">Plan finder</p>
        <h2
          id="home-finder-title"
          className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
        >
          Which plan fits this outlet?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Two choices. Creating an account still does not charge a card.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <fieldset>
            <legend className="text-sm font-medium">What kind of service?</legend>
            <div className="mt-3 flex flex-col gap-2">
              {shapes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setShape(item.id)}
                  className={cn(
                    "rounded-md border px-4 py-3 text-left transition-colors",
                    shape === item.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-secondary",
                  )}
                >
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{item.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium">What do you need on day one?</legend>
            <div className="mt-3 flex flex-col gap-2">
              {needs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setNeed(item.id)}
                  className={cn(
                    "rounded-md border px-4 py-3 text-left transition-colors",
                    need === item.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-secondary",
                  )}
                >
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{item.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {result ? (
          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">Suggested</p>
            <h3 className="mt-2 text-2xl font-medium tracking-tight">
              {result.name}{" "}
              <span className="text-base font-normal text-muted-foreground">{result.price}/mo</span>
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{result.why}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={result.href}
                className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
              >
                {result.cta}
              </Link>
              <Link
                href="/orderlyPOS/pricing"
                className="inline-flex h-10 items-center px-4 text-sm font-medium underline-offset-4 hover:underline"
              >
                Full comparison
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
