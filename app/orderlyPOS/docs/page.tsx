import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/docs",
  "Restaurant POS guides",
  "How to use OrderlyPOS, what each screen is for, how Ask works, the API, accessibility, and notes for restaurants in India.",
);

const guides = [
  {
    href: "/orderlyPOS/how-to-use",
    title: "How to use",
    description: "A service from seating the table to closing the drawer.",
  },
  {
    href: "/orderlyPOS/features",
    title: "Features",
    description: "What the till, kitchen, stock room, books, and agent can do.",
  },
  {
    href: "/orderlyPOS/agent",
    title: "Agent",
    description: "How staff ask the live service, and how an assistant acts through MCP.",
  },
  {
    href: "/docs/api",
    title: "API and MCP",
    description: "Use OrderlyPOS as the backend for a website, or connect an AI client.",
  },
  {
    href: "/docs/accessibility",
    title: "Accessibility",
    description: "Keyboard, screen reader, and reduced-motion behaviour.",
  },
  {
    href: "/docs/compliance-india",
    title: "India compliance",
    description: "GST, receipts, and where the data sits when you run OrderlyPOS in India.",
  },
  {
    href: "/orderlyPOS/terms",
    title: "Terms and conditions",
    description: "The plan, the install on the restaurant’s computer, and what the software will not pretend to do.",
  },
  {
    href: "/orderlyPOS/privacy",
    title: "Privacy policy",
    description: "What this site collects, and what stays on the restaurant’s own computer.",
  },
];

export default function SiteDocsPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">Docs</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Read the part you need.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Short guides live on this site. The API, accessibility, and India receipt notes
          open in the documentation that ships with the install.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link href={guide.href} className="block border-b border-border py-4">
                <h2 className="text-lg font-semibold">{guide.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteFrame>
  );
}
