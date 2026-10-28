import type { Metadata } from "next";
import Link from "next/link";
import { ScreenTour } from "@/components/site/screen-tour";
import { SiteFrame } from "@/components/site/site-frame";
import { capturedScreens, staffScreens } from "@/components/site/screens";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/features",
  "Restaurant POS features",
  "Till, kitchen display, tables, reservations, menu, guests, stock, books, reports, and a guest kiosk. Each screen is from this OrderlyPOS install.",
);

export default function FeaturesPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-4 sm:px-6 sm:pt-20">
        <p className="text-sm font-medium text-primary">Product</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">Every screen, and what it is for.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Staff screens come first: the dashboard, the till, orders, the kitchen, the floor,
          reservations, the menu, guests, stock, the books, reports, and Ask. The guest kiosk
          follows. The list under the pictures covers the rest of the signed-in product.
        </p>
      </section>
      <ScreenTour screens={capturedScreens} />
      <section className="mx-auto max-w-6xl px-5 pt-4 pb-20 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Staff screens</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          These open after sign-in. A gateway, a card terminal, Zomato, Swiggy, a fleet, and Tally stay quiet until Settings stores that address and secret.
        </p>
        <ul className="mt-6 border-t border-border">
          {staffScreens.map((screen) => (
            <li key={screen.name} className="grid gap-1 border-b border-border py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <h3 className="text-sm font-medium">{screen.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{screen.body}</p>
            </li>
          ))}
        </ul>
        <Link href="/orderlyPOS/agent" className="mt-8 inline-block text-sm font-medium text-accent-foreground">
          How the agent uses these screens
        </Link>
      </section>
    </SiteFrame>
  );
}
