import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { emailAddress, phoneHref, WhatsAppIcon, whatsappHref, whatsappNumber } from "@/components/site/reach-us";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/contact",
  "Contact",
  "WhatsApp and phone +91-9346342691. Email info@contrivya.com. OrderlyPOS is made by Contrivya.",
);

const paths = [
  {
    label: "WhatsApp",
    value: whatsappNumber,
    href: whatsappHref,
    note: "A message to the people who build OrderlyPOS. Useful when you would rather not create an account first.",
  },
  {
    label: "Phone",
    value: whatsappNumber,
    href: phoneHref,
    note: "Call the same number.",
  },
  {
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    note: "Setup help, a bug, or a request from the floor. A reply usually goes out within a business day.",
  },
  {
    label: "Company",
    value: "Contrivya",
    href: "https://www.contrivya.com",
    note: "Plans start at ₹499 a month. The company site is www.contrivya.com.",
  },
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm text-muted-foreground">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Write to the people who build it.
          </h1>
          <p className="mt-4 text-muted-foreground">
            OrderlyPOS does not run a call centre. A message reaches the
            company that maintains the software.
          </p>
          <Link href="/orderlyPOS" className="mt-8 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline">
            Back to the site
          </Link>
        </div>
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {paths.map((path) => (
            <li key={path.label} className="px-6 py-6">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {path.label}
              </p>
              <a
                href={path.href}
                className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-foreground underline-offset-4 hover:underline"
                {...(path.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {path.label === "WhatsApp" ? <WhatsAppIcon className="size-5" /> : null}
                {path.label === "Phone" ? <Phone className="size-5 shrink-0" aria-hidden="true" /> : null}
                {path.label === "Email" ? <Mail className="size-5 shrink-0" aria-hidden="true" /> : null}
                {path.value}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">{path.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </SiteFrame>
  );
}
