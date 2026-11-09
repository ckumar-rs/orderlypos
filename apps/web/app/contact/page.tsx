import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import {
  emailAddress,
  phoneHref,
  WhatsAppIcon,
  whatsappHref,
  whatsappNumber,
} from "@/components/site/reach-us";
import { SiteFaq } from "@/components/site/site-faq";
import { SiteFrame } from "@/components/site/site-frame";
import { SitePageHero } from "@/components/site/site-page-hero";
import { SiteRelated } from "@/components/site/site-related";
import { relatedCompany, relatedProduct } from "@/components/site/site-related-sets";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/contact",
  "Contact",
  "WhatsApp and phone +91-9346342691. Email info@contrivya.com. OrderlyPOS is made by Contrivya.",
);

const faqs = [
  {
    q: "Is there a call centre?",
    a: "No. A message reaches the people who build OrderlyPOS at Contrivya.",
  },
  {
    q: "Should I create an account first?",
    a: "Not required. WhatsApp, phone, or email works before signup. Creating an account does not charge a card.",
  },
  {
    q: "Enterprise pricing?",
    a: "Write to info@contrivya.com with “OrderlyPOS Enterprise” in the subject, or use the pricing page plan finder.",
  },
];

export default function ContactPage() {
  return (
    <SiteFrame page={{ path: "/contact", name: "Contact" }}>
      <SitePageHero
        eyebrow="Contact"
        title="Write to the people who build it."
        body="OrderlyPOS does not run a call centre. A message reaches Contrivya — WhatsApp, phone, or email."
        actions={[
          { href: whatsappHref, label: "WhatsApp", primary: true },
          { href: `mailto:${emailAddress}`, label: "Email" },
          { href: "/signup", label: "Try now OrderlyPOS" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6">
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          <li className="px-6 py-6">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              WhatsApp or phone
            </p>
            <p className="mt-2 text-lg font-medium">{whatsappNumber}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium">
              <a
                href={whatsappHref}
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp
              </a>
              <a href={phoneHref} className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                <Phone className="size-5 shrink-0" aria-hidden="true" />
                Call
              </a>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Same number for a message or a call. Useful when you would rather not create an account
              first.
            </p>
          </li>
          <li className="px-6 py-6">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Email</p>
            <a
              href={`mailto:${emailAddress}`}
              className="mt-2 inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline"
            >
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              {emailAddress}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Setup help, a bug, or a request from the floor. A reply usually goes out within a
              business day.
            </p>
          </li>
          <li className="px-6 py-6">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Company</p>
            <a
              href="https://www.contrivya.com"
              className="mt-2 inline-flex text-lg font-medium underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contrivya
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Plans start at ₹2,999 a month. The company site is www.contrivya.com.
            </p>
          </li>
        </ul>
      </section>

      <SiteFaq title="Before you write" items={faqs} />
      <SiteRelated items={[relatedProduct[2]!, relatedCompany[0]!, relatedProduct[0]!]} />
    </SiteFrame>
  );
}
