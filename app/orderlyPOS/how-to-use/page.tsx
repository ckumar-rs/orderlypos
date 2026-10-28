import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/how-to-use",
  "How to use a restaurant POS",
  "Sign in on the restaurant computer, seat a table or start a takeaway, ring the order, cook one step at a time, print the bill, then take the money.",
);

const steps = [
  {
    title: "Sign in on the restaurant computer",
    body: "Open the till in the browser on the machine that runs OrderlyPOS. Shared terminals can switch staff with a PIN. Managers can require an authenticator code.",
  },
  {
    title: "Seat the table, or start a takeaway",
    body: "The floor shows which tables are free, seated, or waiting on the bill. A reservation or a waitlist name can move onto a table. A guest at the table can also order from the QR or kiosk screen.",
  },
  {
    title: "Ring the order",
    body: "Add dishes, modifiers, and combos. A discount shows as a percentage and as money, and the tax follows. Send the ticket. The kitchen receives it on the station that cooks it.",
  },
  {
    title: "Cook one step at a time",
    body: "The pass accepts, prepares, marks ready, then serves. A ticket cannot skip a step. A reprint is marked so the line does not cook it twice. Online orders wait to be accepted before they join the pass.",
  },
  {
    title: "Print the bill, then take the money",
    body: "Printing the bill does not close the table. Take cash, card, UPI, or a mix, including a part payment. Change due is shown. The table frees when the bill is settled.",
  },
  {
    title: "Close the night on your own books",
    body: "Count the drawer. The cash close records the variance. Sales, tax, and stock for the shift stay on this computer. Reports can be printed or exported.",
  },
];

export default function HowToUsePage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-primary">How to use</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          One service, from the door to the drawer.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          This is the path a floor uses on a busy night. The longer reference for the API,
          accessibility, and India receipts is in the docs.
        </p>
        <ol className="mt-10 flex flex-col gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="grid gap-3 border-b border-border py-5 sm:grid-cols-[3rem_1fr]">
              <p className="text-sm tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link href="/orderlyPOS/docs" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Docs
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
