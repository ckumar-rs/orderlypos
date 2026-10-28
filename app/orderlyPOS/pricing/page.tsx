import type { Metadata } from "next";
import { PricePlans } from "@/components/site/price-plans";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/pricing",
  "Restaurant POS pricing",
  "Starter ₹499, Growth ₹999, and Pro ₹2,499 a month per outlet. Yearly billing is 20% less. The self-order kiosk is on Pro. Enterprise is a quote.",
);

export default function PricingPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-6xl">Pricing</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          A counter, a kiosk, or a group of branches. Growth is the plan most small restaurants start on. Pro adds the self-order kiosk.
        </p>
        <div className="mt-8">
          <PricePlans />
        </div>
      </section>
    </SiteFrame>
  );
}
