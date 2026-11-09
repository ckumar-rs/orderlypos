import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/site/site-frame";
import { SitePageHero } from "@/components/site/site-page-hero";
import { SiteRelated } from "@/components/site/site-related";
import { relatedCompany, relatedProduct } from "@/components/site/site-related-sets";
import { FEATURE_COUNTS, featureCountLine } from "@/components/site/screens";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/docs",
  "Restaurant POS guides",
  `Guides for OrderlyPOS: how to use, features (${featureCountLine}), Ask, pricing, API, accessibility, and India compliance.`,
);

const groups = [
  {
    title: "Product",
    guides: [
      {
        href: "/orderlyPOS/how-to-use",
        title: "How to use",
        description: "From seating the table to closing the drawer — one service day.",
      },
      {
        href: "/orderlyPOS/features",
        title: "Features",
        description: `${FEATURE_COUNTS.modules} modules, ${FEATURE_COUNTS.screens}+ staff screens, ${FEATURE_COUNTS.settings} settings areas, and ${FEATURE_COUNTS.guestChannels} order channels — with live captures.`,
      },
      {
        href: "/orderlyPOS/agent",
        title: "Agent",
        description: "Ask reads the open branch. Staff still ring the bill. Rules can notify every five minutes.",
      },
      {
        href: "/orderlyPOS/pricing",
        title: "Pricing",
        description: "Starter ₹2,999, Growth ₹4,999, Pro ₹6,999, Enterprise ₹12,999 a month per outlet. Yearly is 20% less.",
      },
    ],
  },
  {
    title: "Technical",
    guides: [
      {
        href: "/docs/api",
        title: "API and MCP",
        description: "REST for your website backend, or MCP for an AI client with the same staff permissions.",
      },
      {
        href: "/docs/accessibility",
        title: "Accessibility",
        description: "Keyboard, screen reader, and reduced-motion behaviour.",
      },
      {
        href: "/docs/compliance-india",
        title: "India compliance",
        description: "GST, receipts, and where guest and staff data sits when you run OrderlyPOS in India.",
      },
    ],
  },
  {
    title: "Legal",
    guides: [
      {
        href: "/orderlyPOS/terms",
        title: "Terms and conditions",
        description: "The plan, the install, and what the software will not pretend to do.",
      },
      {
        href: "/orderlyPOS/privacy",
        title: "Privacy policy",
        description: "What this site collects, and what stays on the restaurant host.",
      },
    ],
  },
];

export default function SiteDocsPage() {
  return (
    <SiteFrame page={{ path: "/orderlyPOS/docs", name: "Guides" }}>
      <SitePageHero
        eyebrow="Docs"
        title="Read the part you need."
        body={`${featureCountLine}. Short product guides live here. API, accessibility, and India receipt notes open in the technical docs.`}
        actions={[
          { href: "/orderlyPOS/features", label: "Features", primary: true },
          { href: "/orderlyPOS/how-to-use", label: "How to use" },
          { href: "/docs/api", label: "API and MCP" },
          { href: "/contact", label: "Ask Contrivya" },
        ]}
      />

      <section className="border-y border-border" aria-label="Feature counts">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: `${FEATURE_COUNTS.modules}`, label: "Core modules" },
            { n: `${FEATURE_COUNTS.screens}+`, label: "Staff screens" },
            { n: `${FEATURE_COUNTS.settings}`, label: "Settings areas" },
            { n: `${FEATURE_COUNTS.guestChannels}`, label: "Order channels" },
          ].map((item) => (
            <div
              key={item.label}
              className="border-b border-border px-5 py-8 sm:border-r sm:px-6 lg:border-b-0 lg:last:border-r-0"
            >
              <p className="text-3xl font-medium tracking-tight tabular-nums text-primary">{item.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        {groups.map((group) => (
          <div key={group.title} className="mt-10 first:mt-0">
            <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {group.title}
            </h2>
            <ul className="mt-4 grid border-t border-border md:grid-cols-2">
              {group.guides.map((guide) => (
                <li
                  key={guide.href}
                  className="border-b border-border md:border-r md:odd:pr-6 md:even:pl-6 md:[&:nth-child(2n)]:border-r-0"
                >
                  <Link href={guide.href} className="block py-5">
                    <h3 className="text-lg font-medium">{guide.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{guide.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <SiteRelated items={[...relatedProduct.slice(0, 2), relatedCompany[1]!]} />
    </SiteFrame>
  );
}
