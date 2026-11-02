import type { Metadata } from "next";
import { PricePlans } from "@/components/site/price-plans";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/pricing",
  "Restaurant POS pricing",
  "Starter ₹2,999 or $36, Growth ₹4,999 or $60, Pro ₹6,999 or $84, and Enterprise ₹12,999 or $156 a month per outlet. Switch INR or USD. Yearly billing is 20% less.",
);

export default function PricingPage() {
  return (
    <SiteFrame page={{ path: "/orderlyPOS/pricing", name: "Pricing" }}>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-6xl">Pricing</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Starter is ₹2,999 or $36, Growth is ₹4,999 or $60, Pro is ₹6,999 or $84, and Enterprise is ₹12,999 or $156 a month per outlet. Switch INR or USD on the page. Yearly billing is 20% less. Growth is the plan most small restaurants start on. Pro adds the self-order kiosk.
        </p>
        <div className="mt-8">
          <PricePlans />
        </div>
      </section>
    </SiteFrame>
  );
}
