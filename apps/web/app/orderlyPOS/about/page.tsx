import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { HomePromises } from "@/components/site/home-promises";
import { WhatsAppIcon } from "@/components/site/reach-us";
import { SiteFrame } from "@/components/site/site-frame";
import { SitePageHero } from "@/components/site/site-page-hero";
import { SiteRelated } from "@/components/site/site-related";
import { relatedLearn, relatedProduct } from "@/components/site/site-related-sets";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/about",
  "About",
  "OrderlyPOS is an agentic restaurant POS made by Contrivya. It runs on a computer in the restaurant. Plans start at ₹2,999 a month.",
);

const pillars = [
  {
    title: "Runs in the restaurant",
    body: "The till, kitchen, floor, and books stay on the computer you control. Connectors wait until Settings stores that host.",
  },
  {
    title: "Ask is read only",
    body: "Staff ask about sales, tickets, and stock. The floor still rings the bill. Rules can notify after close.",
  },
  {
    title: "Built by Contrivya",
    body: "No call centre. WhatsApp, phone, or email reaches the people who build OrderlyPOS.",
  },
];

export default function AboutPage() {
  return (
    <SiteFrame
      page={{ path: "/orderlyPOS/about", name: "About" }}
      ctaTitle="Try now OrderlyPOS."
      ctaBody="Creating an account does not charge a card. Plans start at ₹2,999 a month."
    >
      <SitePageHero
        eyebrow="About"
        title="Made by Contrivya. Runs in your restaurant."
        body="OrderlyPOS is an Agentic Restaurant POS for the till, the kitchen, the floor, and the books. The floor runs service. The same books are checked every five minutes after close. Plans start at ₹2,999 a month."
        actions={[
          { href: "/signup", label: "Try now OrderlyPOS", primary: true },
          { href: "/orderlyPOS/pricing", label: "See plans" },
          { href: "/contact", label: "Contact" },
        ]}
      />
      <HomePromises />
      <section className="border-y border-border">
        <ul className="mx-auto grid max-w-6xl lg:grid-cols-3">
          {pillars.map((item) => (
            <li
              key={item.title}
              className="border-b border-border px-5 py-10 sm:px-6 lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">Reach Contrivya</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Yearly billing is 20% less. The full list is on the{" "}
            <Link href="/orderlyPOS/pricing" className="font-medium text-foreground underline-offset-4 hover:underline">
              pricing
            </Link>{" "}
            page. The company site is www.contrivya.com.
          </p>
        </div>
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          <li className="px-6 py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Company</p>
            <a href="https://www.contrivya.com" className="mt-2 block text-lg font-medium underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
              www.contrivya.com
            </a>
          </li>
          <li className="px-6 py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">WhatsApp</p>
            <a href="https://wa.me/919346342691" className="mt-2 inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          </li>
          <li className="px-6 py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Phone</p>
            <a href="tel:+919346342691" className="mt-2 inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline">
              <Phone className="size-5 shrink-0" aria-hidden="true" />
              +91-9346342691
            </a>
          </li>
          <li className="px-6 py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Email</p>
            <a href="mailto:info@contrivya.com" className="mt-2 inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline">
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              info@contrivya.com
            </a>
          </li>
        </ul>
      </section>
      <SiteRelated items={[...relatedProduct.slice(0, 2), relatedLearn[0]!]} />
    </SiteFrame>
  );
}
