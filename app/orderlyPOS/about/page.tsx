import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/reach-us";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/about",
  "About",
  "OrderlyPOS is an agentic restaurant POS made by Contrivya. It runs on a computer in the restaurant. Plans start at ₹499 a month.",
);

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Made by Contrivya. Runs in your restaurant.
          </h1>
          <p className="mt-4 text-muted-foreground">
            OrderlyPOS is an Agentic Restaurant POS for the till, the kitchen, the floor, and the books.
            The floor runs service. The same books are checked every five minutes after close.
            Contrivya builds it. Plans start at ₹499 a month. The company site is www.contrivya.com.
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
          <li className="px-6 py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Plans</p>
            <a href="/orderlyPOS/pricing" className="mt-2 block text-lg font-medium underline-offset-4 hover:underline">
              From ₹499 a month
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted-foreground lg:col-span-2">
          Yearly billing is 20% less. The full list is on the{" "}
          <Link href="/orderlyPOS/pricing" className="font-medium text-foreground underline-offset-4 hover:underline">
            pricing
          </Link>{" "}
          page.
        </p>
      </section>
    </SiteFrame>
  );
}
