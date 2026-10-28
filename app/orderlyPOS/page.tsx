import type { Metadata } from "next";
import Link from "next/link";
import { AgentTalk } from "@/components/site/agent-talk";
import { HeroLogo } from "@/components/site/hero-logo";
import { ProductFrame } from "@/components/site/product-frame";
import { ReachUs } from "@/components/site/reach-us";
import { SiteFrame } from "@/components/site/site-frame";
import { appUrl } from "@/lib/app-url";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS",
  "OrderlyPOS | Agentic restaurant POS",
  "OrderlyPOS runs the till, the kitchen, the tables, and a guest kiosk on a computer in the restaurant. Ask reads that service after close. Plans start at ₹499 a month.",
  false,
);

const index = [
  {
    title: "Floor",
    body: "Till, kitchen, tables, reservations, and the guest kiosk. Each screen is from this restaurant.",
    href: "/orderlyPOS/features",
    label: "Every screen",
  },
  {
    title: "Agent",
    body: "Ask reads the open branch. Every five minutes, a paid bill, low stock, or today’s book can notify the owner.",
    href: "/orderlyPOS/agent",
    label: "Round the clock",
  },
  {
    title: "Plans",
    body: "From ₹499 a month. Yearly billing is 20% less. Pro includes the self-order kiosk.",
    href: "/orderlyPOS/pricing",
    label: "See plans",
  },
];

export default function SitePage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-6 text-center sm:px-6 sm:pt-24">
        <HeroLogo size={56} />
        <p className="mt-8 text-sm font-medium text-primary">Agentic Restaurant POS</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
          Open for service. Still checking after close.
        </h1>
        <p className="mx-auto mt-4 text-sm font-medium">
          For a cafe or food truck, a dining room, a kiosk, or a group of branches.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Staff run the till and the kitchen. Ask reads that service. Every five minutes, a paid
          bill, low stock, or today’s reservations can still reach the owner when the screen is empty.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          <Link
            href={appUrl("/signup")}
            className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
            Try now OrderlyPOS
          </Link>
          <Link
            href="/orderlyPOS/features"
            className="inline-flex h-10 items-center px-4 text-sm font-medium"
          >
            See the floor
          </Link>
          <Link
            href="/orderlyPOS/agent"
            className="inline-flex h-10 items-center px-4 text-sm font-medium"
          >
            How the agent works
          </Link>
          <Link
            href="/orderlyPOS/pricing"
            className="inline-flex h-10 items-center px-4 text-sm font-medium text-muted-foreground"
          >
            Plans
          </Link>
        </div>
        <ReachUs className="mt-4 justify-center" />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-6">
        <div className="grid items-start gap-4 lg:grid-cols-2">
          <ProductFrame
            src="/site/admin-dashboard.png"
            alt="The service day opens on the dashboard"
            priority
            crop
          />
          <ProductFrame src="/site/admin-kds.png" alt="The kitchen works one station at a time" crop />
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Today’s revenue, orders, and occupied tables sit beside the kitchen pass. A late ticket is
          marked. The page refreshes when a bill or a ticket changes.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium text-primary">Service</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            The floor runs the night.
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
            A table opens the live menu. The kitchen splits tickets across Bar, Main Kitchen, and
            Tandoor, and a late ticket is marked on the pass. The guest kiosk sends the same order
            to the counter.
          </p>
          <Link href="/orderlyPOS/features" className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline">
            Every screen
          </Link>
        </div>
        <div className="mx-auto w-full max-w-md">
          <ProductFrame src="/site/admin-pos.png" alt="A table opens the live menu" crop />
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-xl lg:order-2">
            <AgentTalk embedded />
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Agent</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              Ask reads the books. It does not run the till.
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
              Staff ask about sales, open orders, late tickets, low stock, and today’s reservations.
              The reply uses only those figures. A rule can still speak to the owner when nobody is
              signed in.
            </p>
            <Link href="/orderlyPOS/agent" className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline">
              Round the clock
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium text-primary">After close</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            The same records, after the last table.
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
            The heat map counts paid bills by weekday and hour. The drawer, expenses, and journals
            stay on this computer. Tally posts only after that host is stored.
          </p>
          <Link href="/orderlyPOS/how-to-use" className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline">
            From the door to the drawer
          </Link>
        </div>
        <div className="mx-auto w-full max-w-md">
          <ProductFrame src="/site/admin-reports.png" alt="Reports show when the restaurant was busy" crop />
        </div>
      </section>

      <section className="border-t border-border" aria-label="Where to go next">
        <ul className="mx-auto grid max-w-6xl lg:grid-cols-3">
          {index.map((item) => (
            <li key={item.title} className="border-b border-border px-5 py-10 sm:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <Link href={item.href} className="mt-4 inline-flex text-sm font-medium underline-offset-4 hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-20 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Run service on the computer in the restaurant.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={appUrl("/login")}
              className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/orderlyPOS/pricing"
              className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium"
            >
              See plans
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
