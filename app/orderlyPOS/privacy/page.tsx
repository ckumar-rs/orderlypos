import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/site/site-frame";
import { publicMeta } from "@/lib/seo";

export const metadata: Metadata = publicMeta(
  "/orderlyPOS/privacy",
  "Privacy policy",
  "What the OrderlyPOS public site stores, what stays on the restaurant computer, and how to ask Contrivya about a message you sent.",
);

const sections = [
  {
    title: "Two different places",
    body: "This policy covers the public OrderlyPOS site and the software a restaurant installs. They are not the same store of data. The public pages describe the product. The till, the kitchen, the kiosk, and the books run on a computer the restaurant controls. For guest and staff records on that computer, the restaurant is the data fiduciary under the Digital Personal Data Protection Act, 2023. Contrivya does not receive that database.",
  },
  {
    title: "The public site",
    body: "Reading the site does not require an account. The contact page opens your own email program to info@contrivya.com. That message is not stored by this site. If you create an account, the restaurant name, the first branch name, your email, and a password hash are saved on this install. The password is hashed. It is not kept in a form that can be read back.",
  },
  {
    title: "What a restaurant’s install stores",
    body: "When staff use the product, the install stores what the service needs: orders and payments recorded at the till, kitchen tickets, table and reservation details, menu and stock, loyalty activity, and accounting entries. A guest record can include a name, phone, email, address, and allergy notes when staff or the guest enter them. Role permissions decide which signed-in person can open those fields. Ask leaves phone, email, address, and allergy notes out of its answers.",
  },
  {
    title: "Sign-in, cookies, and the device",
    body: "After sign-in, the session is an httpOnly cookie on this site. It is not a marketing tracker. The browser may also keep a device token, the chosen branch, the language, a muted kitchen chime, and a short offline copy of the menu or kitchen board so the counter can keep working. The kiosk does not use the staff session cookie. A phone number a guest types for a receipt stays in that browser until it is cleared.",
  },
  {
    title: "Messages and connectors",
    body: "Email, SMS, and WhatsApp leave the restaurant’s computer only when a rule or a person sends them, and only after that provider’s address and secret are stored in Settings. A model phrases an Ask answer only when the restaurant has stored a model URL, a model id, and a token. The records sent for phrasing are the ones already printed for that question. A payment gateway, a delivery platform, or Tally is contacted only after its address and secret are stored.",
  },
  {
    title: "How long it is kept",
    body: "On a self-hosted install, the restaurant chooses how long to keep guest and staff records. OrderlyPOS does not delete them on a timer. Staff with permission to manage customers can correct or delete a guest record. Backups the restaurant downloads are the restaurant’s copies.",
  },
  {
    title: "Asking about your data",
    body: "A guest or a staff member asks the restaurant that served them. That restaurant holds the record. A question about this public site, or about an email you sent to Contrivya, goes to info@contrivya.com. Contrivya will reply about the site and about messages it actually received. It cannot open a guest book that lives only on a restaurant’s computer.",
  },
  {
    title: "Children",
    body: "OrderlyPOS is a tool for a restaurant’s service. It is not directed at children. A restaurant that takes a child’s details does so under its own notice to that household.",
  },
  {
    title: "Changes",
    body: "Contrivya may update this policy. The date on this page is the date of the current text. The India compliance notes explain the same split in more detail for a restaurant deploying the software.",
  },
];

export default function PrivacyPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-5xl px-4 pt-12 pb-16">
        <p className="text-sm text-muted-foreground">27 October 2026</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">Privacy policy</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Contrivya builds OrderlyPOS. This policy says what the public site collects, and what stays
          on the restaurant’s own computer. Write to{" "}
          <a href="mailto:info@contrivya.com" className="font-medium text-foreground underline-offset-4 hover:underline">
            info@contrivya.com
          </a>{" "}
          about this page.
        </p>
        <ol className="mt-10 border-t border-border">
          {sections.map((section, index) => (
            <li key={section.title} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <p className="text-sm tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">{section.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted-foreground">
          The commercial terms are on the{" "}
          <Link href="/orderlyPOS/terms" className="font-medium text-foreground underline-offset-4 hover:underline">
            terms and conditions
          </Link>{" "}
          page. Deployment notes are in{" "}
          <Link href="/docs/compliance-india" className="font-medium text-foreground underline-offset-4 hover:underline">
            India compliance
          </Link>
          .
        </p>
      </section>
    </SiteFrame>
  );
}
