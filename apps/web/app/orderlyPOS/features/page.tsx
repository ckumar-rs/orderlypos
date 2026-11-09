import type { Metadata } from "next";
import Link from "next/link";
import { HomeChannels } from "@/components/site/home-channels";
import { HomePromises } from "@/components/site/home-promises";
import { ScreenTour } from "@/components/site/screen-tour";
import { SiteFaq } from "@/components/site/site-faq";
import { SiteFrame } from "@/components/site/site-frame";
import { SitePageHero } from "@/components/site/site-page-hero";
import { SiteRelated } from "@/components/site/site-related";
import { relatedLearn, relatedProduct } from "@/components/site/site-related-sets";
import {
  FEATURE_COUNTS,
  capturedScreens,
  featureCountLine,
  staffScreens,
} from "@/components/site/screens";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/features",
  "Restaurant POS features — 21 modules, 100+ screens",
  `${featureCountLine}. Till, kitchen, floor, menu, stock, delivery, books, Ask, marketing, settings, table QR, kiosk, and WhatsApp.`,
);

const faqs = [
  {
    q: "How many features does OrderlyPOS include?",
    a: `${FEATURE_COUNTS.modules} modules in the signed-in sidebar, more than ${FEATURE_COUNTS.screens} staff screens and routes, ${FEATURE_COUNTS.settings} settings areas, and ${FEATURE_COUNTS.guestChannels} guest order channels (table QR, kiosk, WhatsApp catalog, and the counter till).`,
  },
  {
    q: "Are these the real screens?",
    a: "Yes. The tour uses captures from a live OrderlyPOS install — dashboard, till, kitchen, floor, delivery, marketing, books, Ask, settings, and the guest kiosk.",
  },
  {
    q: "What stays off until Settings is filled?",
    a: "A gateway, card terminal, Zomato, Swiggy, a delivery fleet, and Tally stay quiet until that address and secret are stored.",
  },
  {
    q: "Is the guest kiosk on every plan?",
    a: "The self-order kiosk is on Pro and Enterprise. Table QR and WhatsApp catalog ship with the product.",
  },
];

const detailSections = [
  {
    title: "Floor — run service tonight",
    body: "Dashboard, Till (Pass / Floor / Menu / Sales), Orders, Tables, Reservations, Kitchen Display, and Approvals. Staff see open tables, late tickets, and bills that still need a manager.",
  },
  {
    title: "Menu and guests",
    body: "Menu covers dishes, add-ons, channels, seasons, and prices. Customers covers profiles, loyalty, rewards, gift cards, and staff discounts. The same catalog feeds till, QR, kiosk, and WhatsApp.",
  },
  {
    title: "Stock and delivery",
    body: "Inventory spans ingredients through purchase orders, waste, recipes, and food cost. Delivery keeps a live map, zones, drivers, and trail replay while the order is out.",
  },
  {
    title: "Books, tax, and reports",
    body: "Accounting holds the drawer, expenses, journals, P&L, and Tally. GST billing builds invoices from paid orders. Reports add heat maps, floor attention, saved views, and franchise comparisons.",
  },
  {
    title: "Growth and the chain",
    body: "Marketing runs coupons, happy hour, campaigns, and buy-and-get. Franchise compares branches. Ask reads the open branch and does not take a payment. Team, Attendance, and Operations cover people and the floor’s documents.",
  },
  {
    title: "Settings — every preference in the UI",
    body: `${FEATURE_COUNTS.settings} settings areas: payments, devices, roles, automation, food platforms, WhatsApp catalog, backups, network, and more. Nothing important is hardcoded — staff turn it on or off from Settings.`,
  },
];

export default function FeaturesPage() {
  return (
    <SiteFrame page={{ path: "/orderlyPOS/features", name: "Features" }}>
      <SitePageHero
        eyebrow="Product"
        title="21 modules. 100+ screens. One sign-in."
        body={`${featureCountLine}. Phone, tablet, kiosk, or till — the books stay on the restaurant host.`}
        actions={[
          { href: "/signup", label: "Try now OrderlyPOS", primary: true },
          { href: "/orderlyPOS/agent", label: "How Ask uses these screens" },
          { href: "/orderlyPOS/pricing", label: "Plans" },
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

      <HomePromises />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">What OrderlyPOS covers</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          OrderlyPOS is the restaurant system for the till, the kitchen, the floor, and the guest. A
          guest orders from a table QR, a kiosk, or a WhatsApp catalog. Staff run the rest from one
          sign-in. Ask reads that service and does not take a payment.
        </p>
        <div className="mt-10 grid gap-8 border-t border-border pt-10 lg:grid-cols-2">
          {detailSections.map((section) => (
            <article key={section.title}>
              <h3 className="text-base font-medium">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ScreenTour screens={capturedScreens} />
      <HomeChannels />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <h2 className="text-2xl font-medium tracking-tight">All {FEATURE_COUNTS.modules} staff modules</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every item in the signed-in sidebar. Connectors stay off until Settings stores that host.
        </p>
        <ul className="mt-6 border-t border-border">
          {staffScreens.map((screen) => (
            <li
              key={screen.name}
              className="grid gap-1 border-b border-border py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <h3 className="text-sm font-medium">{screen.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{screen.body}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/orderlyPOS/agent"
          className="mt-8 inline-flex text-sm font-medium underline-offset-4 hover:underline"
        >
          How the agent uses these screens
        </Link>
      </section>

      <SiteFaq title="About the product screens" items={faqs} />
      <SiteRelated
        items={[
          ...relatedProduct.filter((i) => i.href !== "/orderlyPOS/features"),
          ...relatedLearn.slice(0, 2),
        ]}
      />
    </SiteFrame>
  );
}
