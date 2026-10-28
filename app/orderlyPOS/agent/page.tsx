import type { Metadata } from "next";
import Link from "next/link";
import { AgentTalk } from "@/components/site/agent-talk";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/agent",
  "Agentic restaurant POS",
  "Ask reads sales, open orders, late tickets, low stock, and today's reservations. It does not take a payment. A rule can notify the owner every five minutes.",
);

const day = [
  {
    mark: "Service",
    title: "Staff ask. The floor still rings the bill.",
    body: "The branch agent answers the open branch: sales today and this month, open orders, late kitchen tickets, low stock, and today’s reservations. The restaurant agent is for people who can open reports. It reads the restaurant’s active branches, and only the topics that login can already see. Phone, email, address, and allergy notes stay out.",
  },
  {
    mark: "5 min",
    title: "A pass runs whether anyone is signed in.",
    body: "Every five minutes an active rule looks for a new paid bill, stock at or below its reorder level, or reservations still on today’s book. It can notify the owner, send email, send SMS or WhatsApp once that provider is stored, post a webhook, and open a task.",
  },
  {
    mark: "After close",
    title: "The night does not turn the check off.",
    body: "A paid bill is reported when one lands since the last pass. Low stock waits twelve hours before it speaks again. Today’s reservations are reported once that day. One rule can start the next. The chain stops after three further steps.",
  },
];

const steps = [
  {
    title: "One set of records",
    body: "Bills, tickets, stock, reservations, and the books are what the till writes. Ask reads those records for the question in front of it. It does not keep a second restaurant in the chat, and it does not read payroll.",
  },
  {
    title: "A model may phrase the answer",
    body: "When a model URL, model id, and token are stored, it can word the records. A number that is not already in those records is dropped, and the raw records are shown. Weekday forecasts run from past sales with no model when AI is off. Anomaly checks are a local score and never call a model.",
  },
  {
    title: "Ask does not run the till",
    body: "The chat does not take a payment, change a price, edit stock, or send a message. The floor still rings the bill.",
  },
  {
    title: "An outside assistant can act as that person",
    body: "MCP exposes 40 tools. Connected with a staff login, an assistant can open, cancel, and refund orders, assign a driver, update a delivery, clock that person in or out, create a reservation, and edit the menu, the floors, and the tables. Each tool uses the same permission the screen uses.",
  },
];

export default function AgentPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-6 sm:pt-20">
        <p className="text-sm font-medium text-primary">Agentic Restaurant POS</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          The floor closes. The books keep being checked.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          OrderlyPOS is the system on the till, the kitchen, and the kiosk. Ask is how staff
          read it during service. Around the clock, the same books are checked every five
          minutes, with no one standing at the screen.
        </p>
        <AgentTalk />

        <ol className="mt-10 border-t border-border" aria-label="A day on the books">
          {day.map((beat) => (
            <li
              key={beat.mark}
              className="grid gap-2 border-b border-border py-6 sm:grid-cols-[7rem_1fr] sm:gap-8"
            >
              <p className="text-sm font-medium tabular-nums text-primary">{beat.mark}</p>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{beat.title}</h2>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">{beat.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 text-2xl font-semibold tracking-tight">How that is built</h2>
        <ol className="mt-4 border-t border-border">
          {steps.map((step, index) => (
            <li key={step.title} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <p className="text-sm tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/orderlyPOS/features" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Screens
          </Link>
          <Link href="/docs/api" className="rounded-md border border-border px-4 py-2 text-sm font-medium">
            API and MCP
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
