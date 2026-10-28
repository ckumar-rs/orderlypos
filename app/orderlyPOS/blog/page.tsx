import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/blog",
  "Restaurant POS notes",
  "How an order survives a dead line, why a kitchen ticket moves one step at a time, and why printing the bill is not the same as taking the money.",
);

const posts = [
  {
    date: "27 October 2026",
    title: "The order should survive a dead internet line",
    body: "A hosted till stops when the shop’s connection stops. OrderlyPOS keeps the database on a computer in the restaurant, so the floor and the kitchen can finish the tables already open. The website order and the webhooks wait until the line is back. That split is the point of self-hosting: service first, the outside world second.",
  },
  {
    date: "27 October 2026",
    title: "A ticket should move one step at a time",
    body: "The pass is a busy screen. A second tap, or a tablet that woke up late, should not jump a dish from new to served. OrderlyPOS accepts, prepares, marks ready, then serves, and it refuses a step that is not the next one. A reprint is stamped so the station does not cook the same ticket again.",
  },
  {
    date: "27 October 2026",
    title: "Printing the bill is not the same as taking the money",
    body: "Guests ask for the bill, then split it, then pay part in cash and part on UPI. If the print closed the table, the floor would be stuck. OrderlyPOS prints a bill that does not charge anything. The table frees when the payments cover the total. The change due is on the screen before the drawer opens.",
  },
];

export default function BlogPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Notes from the build.</h1>
        <p className="mt-4 text-muted-foreground">
          Short writing from Contrivya about how OrderlyPOS behaves in service. Product changes ship with the software, not as a separate newsroom.
        </p>
        <div className="mt-10 flex flex-col gap-6">
          {posts.map((post) => (
            <article key={post.title} className="border-b border-border py-6">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{post.date}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Questions about a note go to{" "}
          <Link href="/contact" className="font-medium text-foreground underline-offset-4 hover:underline">
            contact
          </Link>
          .
        </p>
      </section>
    </SiteFrame>
  );
}
