# Feature Checklist

Cross-referenced against the actual codebase (`apps/backend`, `apps/web`,
`apps/backend/prisma/schema.prisma`) as of 2026-11-02. Rows that
changed after the 2026-08-14 pass are noted with that date. This is the
exhaustive taxonomy version of `ROADMAP.md` (which tracks the same ground
phase-by-phase, engineering-oriented) — organized here by product category
for public/roadmap use. Where a feature is partially built, the note says
what's missing.

## 🧾 Core POS / Billing

| Feature | Status | Note |
|---|---|---|
| Fast touch-friendly billing screen | Shipped | POS page, product grid + cart |
| Product/category grid | Shipped | Category tabs + search |
| Product search | Shipped | |
| Barcode scanning | Shipped | Dish barcode plus a POS scan box for a USB wedge scanner (2026-10-26). No camera scanner |
| SKU support | Shipped | The dish form stores SKU. Menu → SKU searches by name or code and saves it. POS accepts a barcode or a SKU |
| Variants/sizes | Shipped | Each dish can store named sizes with their own price |
| Add-ons/modifiers | Shipped | Modifier groups + modifiers, min/max, defaults |
| Combo/bundle products | Shipped | `ComboComponent`, combo builder UI |
| Item notes | Shipped | Per-line kitchen note on the cart, the ticket, and the KDS |
| Special cooking instructions | Shipped | Same per-line kitchen note |
| Quantity adjustment | Shipped | Cart qty stepper |
| Hold/resume order | Shipped | Hold keeps the bill off the kitchen until Resume |
| Save draft orders | Shipped | Same hold. Resume sends the ticket |
| Open orders | Shipped | Order status OPEN, visible on table/dashboard |
| Split bill | Shipped | Set a guest number on a line, then Separate bill per guest. The equal-split calculator is still there |
| Merge bills | Shipped | `mergeOrders()` |
| Transfer items between bills | Shipped | Edit bill moves chosen lines onto another open bill |
| Transfer table | Shipped | Move an open bill to a free table from Edit bill; both tables' status updated, tickets kept |
| Merge tables | Shipped | Bill-merge across tables |
| Reorder previous items | Shipped | Orders → Repeat lists the last paid bill. The cashier ticks dishes, or repeats the whole bill |
| Repeat last order | Shipped | Orders → Repeat opens a new bill from the guest's last paid order |
| Cancel item | Shipped | Remove a line (reason required, audited) or lower its quantity on an open bill while the kitchen has not started it |
| Void order | Shipped | Pre-payment: Cancel order (reason, audited, releases table + KDS tickets; `orders.cancel`). Post-payment: Refund |
| Edit bill | Shipped | Open bills only (quantities, lines, table, guest/note); paid bills are never edited in place - refund instead |
| Refund | Shipped | Capped at refundable remainder |
| Partial refund | Shipped | |
| Exchange | Shipped | An open line is replaced and the kitchen ticket is updated. A paid line returns its amount to the guest wallet and opens a new order |
| Complimentary items | Shipped | The line is not charged. Stock still moves when the bill is paid |
| Discount by item | Shipped | A cashier can take a percent off one line, and a category can carry its own percent |
| Discount by order | Shipped | %/flat |
| Percentage discount | Shipped | |
| Fixed discount | Shipped | |
| Coupon codes | Shipped | Order-level coupon at checkout |
| Tax calculation | Shipped | GST/VAT backed out of inclusive price, server-authoritative. India splits that tax into CGST+SGST, CGST+UTGST, or IGST |
| Service charge | Shipped | Branch percent, added on the discounted food total |
| Tips | Shipped | Added on discounted subtotal, not taxed |
| Rounding | Shipped | `round2` discipline throughout |
| Multiple payment methods | Shipped | Cash/card/UPI/wallet/bank transfer |
| Split payment | Shipped | More than one method on one bill, including cash plus UPI |
| Cash + card / Cash + UPI / Card + UPI | Shipped | Same split-tender checkout |
| Multiple currencies | Shipped | Configuration required. Settings → Currencies stores a rate. Checkout converts that tender into the restaurant currency. The bill stays in the restaurant currency |
| Customer-facing display | Shipped | `/customer-display` mirrors the POS cart |
| Receipt printing | Shipped | Self-printing HTML receipt via browser dialog |
| Digital receipt | Shipped | Paid-bill WhatsApp Cloud / SMS send plus the existing wa.me and mailto buttons |
| WhatsApp / SMS / Email receipt | Shipped | wa.me / mailto stay as click-to-open. Cloud API and SMS send from the stored Operations URLs. Email still needs restaurant SMTP |

## 🪑 Restaurant Table Management

| Feature | Status | Note |
|---|---|---|
| Restaurant floor map | Shipped | Spatial tile layout (posX/posY) |
| Multiple floors | Shipped | `Floor` model |
| Multiple sections | Shipped | Each floor is Indoor, Outdoor, or Covered on Tables → Indoor and outdoor areas |
| Indoor/outdoor seating | Shipped | Each floor is Indoor, Outdoor, or Covered |
| Table shapes | Shipped | square/round/rect, now rendered as real shape-aware SVG icons (2026-08-14) |
| Table capacity | Shipped | |
| Table status (Available/Occupied/Reserved/Cleaning/Out of service) | Shipped | Full enum, color-coded |
| Table timer | Shipped | An occupied table tile shows how long the party has been seated |
| Guest count | Shipped | Via reservation/waitlist party size |
| Server assignment | Shipped | `assignedWaiterId` on Table |
| Table merge | Shipped | |
| Table split | Shipped | Tables → Split a table moves chosen dishes onto a new bill at a free table. Guest-number split still keeps both bills on the same table |
| Table transfer | Shipped | Tables → Move a party moves the open bill onto a free table |
| Move customer | Shipped | Tables → Move a party moves the open bill onto a free table and can attach a customer |
| Table reservation | Shipped | Full status lifecycle |
| Waitlist | Shipped | Panel on Tables page |
| Estimated waiting time | Shipped | Quoted wait field |
| Table history | Shipped | Tables → History lists each bill with guests, minutes, and amount |
| Table QR code | Shipped | Rotatable opaque token |
| QR ordering | Shipped | Guests order from the table QR |
| Table-specific orders | Shipped | |
| Drag-and-drop floor designer | Shipped | Edit floor plan: drag, resize, and snap to the floor grid |
| Multiple restaurant areas | Shipped | Each floor is Indoor, Outdoor, or Covered |
| Color-coded table states | Shipped | |
| Live kitchen/order status | Shipped | Via KDS Socket.IO |
| Table revenue | Shipped | Per-table paid revenue on the analytics card |
| Average table time | Shipped | From order createdAt to billedAt |
| Table turnover | Shipped | Per-table turnover, average dining minutes, and revenue per seat from paid bills |
| Revenue per seat | Shipped | Paid revenue divided by seats |

## 🍽️ Menu Management

| Feature | Status | Note |
|---|---|---|
| Categories / Subcategories | Shipped | A category can sit under a parent. The menu list indents children, and choosing a parent includes its dishes |
| Products | Shipped | |
| Variants | Shipped | Named sizes on the dish, each with its own price |
| Add-ons / Modifier groups | Shipped | With price adjustment |
| Modifier pricing | Shipped | |
| Combo meals / Meal deals | Shipped | |
| Recipe mapping | Shipped | `RecipeIngredient` |
| Product images | Shipped | Photo upload on menu items |
| Product descriptions | Shipped | |
| Ingredients | Shipped | |
| Allergens | Shipped | `allergens String[]` on MenuItem |
| Dietary tags (Veg/Vegan/Jain/Gluten-free) | Shipped | Veg, vegan, Jain, gluten-free, and spice are on the dish form and on the guest menu payload |
| Spicy level | Shipped | |
| Preparation time | Shipped | The dish stores prep minutes. Kitchen Display uses the longest prep on the ticket as the due time, marks it late after that, and sorts by the soonest due ticket |
| Printer routing / Kitchen station routing | Shipped | `KitchenStation`, KOT split by station |
| Time-based menu (breakfast/lunch/etc.) | Shipped | Menu sets name Breakfast, Lunch, Dinner, or Late Night and show those dishes in the clock window. A dish daily window is also enforced |
| Seasonal / holiday menu | Shipped | Menu → Seasonal menus publishes a named set between two dates, and can hide one dish outside its season |
| Happy hour | Shipped | Marketing happy hour discounts the bill. Menu → Scheduled prices changes the dish price itself during a window |
| Menu availability | Shipped | Per-item time window + toggle |
| Location-specific menu | Shipped | Menu items belong to a branch. A branch can be given a copy of another branch's menu |
| Channel-specific pricing | Shipped | A channel can carry dine-in, takeaway, delivery, kiosk, or QR. POS selects the channel for the current order type. An item price overrides the markup |
| Dynamic pricing | Shipped | Menu → Stock and demand prices adjusts the menu price when an ingredient is low or recent paid sales pass a count |

## 👨‍🍳 KDS — Kitchen Display System

| Feature | Status | Note |
|---|---|---|
| Kitchen order screen | Shipped | |
| Order queue / status columns (New/Preparing/Ready/Completed/Cancelled) | Shipped | Status board stays on Kitchen Display. Kitchen Display → Stations is one column per station |
| Priority orders | Shipped | Star toggle |
| Order timers / prep timers | Shipped | Elapsed-time, warning ring past 15 min |
| Color-coded urgency | Shipped | |
| Sound notifications | Shipped | Chime + toast on every new ticket, muted per-device from Settings > Notifications |
| Item-level status | Shipped | Each KOT line can be marked ready or delayed; the ticket rolls up from its lines |
| Order-level status | Shipped | |
| Kitchen stations | Shipped | |
| Bump order | Shipped | Status-advance button |
| Recall order | Shipped | A ready or served ticket, and each of its lines, can be sent back to Preparing |
| Delay reason / item unavailable | Shipped | A kitchen line can record why it is delayed. Marking a dish unavailable is the existing 86 |
| Kitchen notes | Shipped | Per-KOT |
| Auto-routing by station | Shipped | |
| Parallel preparation | Shipped | Independent per-station KOTs |
| Course management / fire-hold | Shipped | A course can wait by default. Kitchen Display → Expo fires every held ticket of that course |
| Expediter screen | Shipped | Kitchen Display → Expo fires a course, assembles when every station is ready, then passes the order to the floor |
| Average preparation time | Shipped | Today’s average stays on the status board. Kitchen Display → Station report adds delay rate, tickets per hour, and the share that met the dish prep target |
| Station workload | Shipped | Kitchen Display shows open tickets per station |
| SLA / late-order alerts | Shipped | A ticket rings late after its prep target (15 minutes when the dish has none). Once a minute, kitchen staff get one push for that ticket. The station report still counts how many ready tickets met the target |
| Rush mode / order throttling | Shipped | Kitchen Display can pause table QR, kiosk, and WhatsApp orders, and shows open tickets per station |

## 🖥️ Self-Service Kiosk

| Feature | Status | Note |
|---|---|---|
| Customer-facing kiosk route (`/kiosk/<token>`) | Shipped | Public, token-gated, English menu. See [`docs/KIOSK-AND-KDS.md`](./docs/KIOSK-AND-KDS.md) |
| Order flow: start → eat here / take away → menu & search → options → basket → review → submit once → order number | Shipped | Server recomputes prices/modifiers/tax; idempotent submit; no personal data collected |
| Kitchen display per station + kiosk orders in realtime | Shipped | KDS station picker (remembered per device) |
| Kiosk payment | Shipped | The kiosk shows the UPI QR when a UPI id is stored and tells the guest to pay at the counter. Demo mode can mark that order paid. A stored gateway webhook can settle the bill. A scan of the QR does not mark it paid |
| 80 mm ticket / QR scanner | Shipped | The receipt and kitchen ticket use an 80 mm page, and a USB scanner types into the scan box. A physical printer and scanner were not attached for this check |
| Offline / queued kiosk orders | Shipped | If the server is down, the kiosk keeps the basket and sends it once when the server returns. The same request is applied once |

## 📱 QR / Table Ordering

| Feature | Status | Note |
|---|---|---|
| Table QR / scan & order | Shipped | Guests order from the table QR |
| Digital menu (customer view) | Shipped | `/order/[qrToken]` public route |
| Customer ordering, add modifiers, pay, split, tip via QR | Shipped | The guest scans the table QR, sees the menu, adds modifiers, and sends the order onto that table's open tab. They can call a waiter or request the bill. Split, tip, and the UPI QR are taken by the cashier on the till. The phone does not settle the bill |
| Call waiter / request bill/water/assistance | Shipped | Waiter and bill requests show on Tables and as notifications |
| Reorder | Shipped | The table QR asks for a phone, then offers the last dishes and suggestions. Adding one uses the live menu price |
| No-app ordering | Shipped | Table QR, kiosk, and `/guest/<token>` for membership on a phone. No native app |
| WhatsApp ordering | Shipped | Two paths. Orders → WhatsApp creates a secret, and a message that names a dish becomes a takeaway waiting to be accepted. That intake does not send anything to Meta. Settings → WhatsApp catalog is the Meta cart path in the India section |
| QR-specific / table-specific / dynamic QR | Shipped | Per-table opaque token, rotatable |
| Personalized recommendations | Shipped | A customer page lists dishes they order often, then dishes usually ordered with a favorite. The table QR shows the same list |

## 📦 Inventory Management

| Feature | Status | Note |
|---|---|---|
| Stock tracking (ingredient + product) | Shipped | Ingredient-based. `purchaseToBase` still converts a receipt. Inventory → Units adds kilogram/gram, litre/millilitre, and dozen/piece, plus a branch pack or box size. A weighed dish deducts its kilograms |
| Stock adjustment | Shipped | Ledgered |
| Stock transfer (branch-to-branch) | Shipped | FIFO out of the source, new batch at the destination (2026-10-11) |
| Stock count / stocktake | Shipped | Physical count document (draft → post) plus the existing single-line adjustment |
| Low-stock alerts | Shipped | Inventory → Alerts pushes inventory staff, emails them the next day when mail is configured and Demo mode is off, and escalates to managers after two days. The 9:00 check and Check now both run it |
| Out-of-stock alerts | Shipped | Configuration required. Set a reorder level. Inventory → Alerts uses the same push, email, and escalation when stock is at or below that level, including zero |
| Expiry tracking | Shipped | Batch date. Stock expiring within 7 days uses the same push, email, and escalation path as low stock. Checkout skips a batch dated before today. When every remaining batch of that ingredient is expired, the sale is refused. A count below the reorder point still sells |
| Batch/lot tracking | Shipped | |
| Waste / spoilage / damaged stock tracking | Shipped | Reason-coded, FIFO-priced |
| Stock consumption | Shipped | Via recipe deduction. A paid sale skips expired batches. A short count can go negative for the next stocktake |
| Recipe-based inventory deduction | Shipped | FIFO, auto on checkout, combos expand one level |
| Theoretical vs actual consumption | Shipped | Yield report: recipe CONSUMPTION vs opening + receipts − closing |
| Yield calculation | Shipped | Yield % and unexplained (theft / unlogged waste / yield loss) on the same report |
| Wastage % | Shipped | Waste qty / cost / % on the yield report; raw waste log still there |
| Food cost | Shipped | Live recipe costing |
| Portion control | Shipped | A dish can require a portion step. A half portion consumes half a serving. The recipe batch is divided by its serving count |
| Production batches / prep inventory | Shipped | User-named prep recipes; batch consumes raw FIFO and receipts the finished stock item |

## 🧪 Recipe / Food Cost Management

| Feature | Status | Note |
|---|---|---|
| Recipe builder (ingredients, quantities, units) | Shipped | |
| Yield / portion size | Shipped | Inventory → Recipes stores servings, finished yield, and instructions. Cost is shown per serving and per yield unit |
| Recipe cost / ingredient cost | Shipped | Weighted-average, recomputed on every GRN |
| Food cost % / gross margin | Shipped | Inventory → Food cost uses the per-serving cost. Inventory → Engineering shows margin and contribution |
| Recipe versioning / history | Shipped | Saving a recipe snapshots the ingredient list, quantities, units, yield, servings, and instructions on the dish history |
| Automatic food-cost calculation | Shipped | Snapshotted onto MenuItem.costPrice |
| Menu engineering / contribution margin | Shipped | Inventory → Engineering splits dishes into star, plowhorse, puzzle, and dog by median popularity and margin, and shows contribution |
| Recommended selling price | Shipped | Inventory → Food cost suggests a price from the target food-cost percent and applies it only when you press Apply. History is on the dish |

## 🛒 Purchasing & Suppliers

| Feature | Status | Note |
|---|---|---|
| Supplier management | Shipped | |
| Purchase orders | Shipped | Draft→sent→partially received→received/cancelled |
| Purchase invoices | Shipped | Vendor invoices, linkable to a PO/GRN, own status lifecycle (2026-08-14) |
| Goods received (GRN) | Shipped | Linked or unlinked to PO |
| Purchase returns | Shipped | Stock is reduced. The supplier is emailed only when Demo mode is off and SMTP is set |
| Supplier payments/credits | Shipped | Partial payments, overpayment guard, auto UNPAID→PARTIALLY_PAID→PAID (2026-08-14) |
| Supplier price history | Shipped | Quotations plus min/max/avg GRN price per supplier on Price variance |
| Purchase history | Shipped | Via PO records |
| Reorder levels | Shipped | Per-ingredient |
| Automatic reorder suggestions | Shipped | A paid bill at or below the reorder level adds a draft purchase request with a refill quantity. Settings → How agents run chooses the rest. A person sends the purchase order, or the agent emails it and marks it sent when that restaurant is set to let agents send the change. Demo mode keeps the order a draft |
| Vendor quotations | Shipped | Multi-supplier quotes + a cheapest-first comparison endpoint (2026-08-14) |
| Purchase requests | Shipped | Staff-raised, DRAFT→PENDING_APPROVAL→APPROVED/REJECTED (2026-08-14) |
| Supplier performance | Shipped | On-time delivery rate, avg lead time, total spend — computed on demand (2026-08-14) |
| Price variance | Shipped | GRN actual vs PO and vs latest RECEIVED/ACCEPTED quote for that supplier |

## 🚚 Delivery Management

| Feature | Status | Note |
|---|---|---|
| Everything in this category | Shipped | Zones by pincode, fee, minimum, ETA, driver assignment, status flow, the latest GPS point, and a stored ping trail with a public tracking token (2026-10-26). Zomato and Swiggy intake and outbound menu/store/stock stay off until a URL and key are stored. Rapido, Dunzo, and Shadowfax dispatch stay off until each fleet URL and key are stored |

## 📦 Takeaway / Pickup

| Feature | Status | Note |
|---|---|---|
| Takeaway order type | Shipped | POS supports dine-in + takeaway |
| Scheduled pickup, pickup time, notifications, curbside | Shipped | A time at least 10 minutes ahead holds the kitchen ticket until about 25 minutes before, then kitchen staff are notified. Orders → Curbside stores the vehicle |

## 👤 Customer CRM

| Feature | Status | Note |
|---|---|---|
| Customer profiles (name/phone/email/birthday/etc.) | Shipped | Plus address/anniversary/allergies/notes |
| Order history | Shipped | Per-customer profile page |
| Favorite products / avg order value / visit frequency | Shipped | The profile lists the dishes ordered most often, plus visits, average order value, and days between visits. Customers → Analytics lists every guest |
| Customer notes | Shipped | |
| Loyalty points | Shipped | Restaurant earn rate and point value remain the fallback. Customers → Loyalty rules can set a branch rate, point value, earn and redeem caps, expiry, and eligible dishes |
| Memberships / tiered loyalty / VIP | Shipped | Tiers by points, with an earn multiplier. The rate applies once the balance already qualifies |
| Rewards / cashback | Shipped | Cashback is a separate balance from points and store credit. Customers → Rewards is the catalog. Redeeming a reward spends points, cashback, or both. Points can still come off a bill |
| Coupons | Shipped | Usage limits, caps, and windows |
| Referral program | Shipped | The referrer earns points on the referred guest's first paid bill |
| Birthday offers | Shipped | Restaurant percent off during the birthday month, once each year |
| Customer segmentation / RFM / churn / CLV | Shipped | Existing segments stay. RFM quintiles and CLV are computed from paid bills; campaigns can target an RFM label |
| Automated campaigns | Shipped | Email through restaurant SMTP. SMS and WhatsApp use the stored Cloud API / SMS gateway, and still fire `campaign.message` |

## 🎟️ Discounts & Promotions

| Feature | Status | Note |
|---|---|---|
| Percentage / flat discount | Shipped | Order-level |
| Item / category discount | Shipped | A percent on the line, plus Marketing → Category discounts for every dish in a category |
| Coupons / promo codes | Shipped | Checkout accepts a coupon code |
| Buy 1 Get 1 / Buy 2 Get 1 | Shipped | Marketing → Buy and get. The free units are the cheapest in each group. Happy hour can still limit the same rule to a clock window |
| Happy hour / happy-day pricing | Shipped | Promotions with a time window |
| First-order / loyalty / employee / membership discount | Shipped | Configuration required for a staff policy. Referral points apply on the first paid bill, and a tier changes the earn rate. Customers → Staff discounts sets a percent and a bill cap. The restaurant percent still applies when Employee discount is checked and no staff policy matches |
| Time-based / weather-based / customer-specific promotions | Shipped | Configuration required for weather. Happy hour is the clock. Marketing → Conditions can require one customer, or a word in the weather feed. Weather stays off until Settings stores a weather URL |
| Automated campaigns | Shipped | Email through restaurant SMTP. SMS and WhatsApp use the stored Cloud API / SMS gateway, and still fire `campaign.message` |
| Minimum-spend / bundle / conditional discounts | Shipped | Marketing → Conditions can require a minimum spend or another dish on the bill |

## 💳 Payments

| Feature | Status | Note |
|---|---|---|
| Cash / Card / UPI / Wallet / Bank transfer | Shipped | `PaymentMethod` enum |
| QR payment | Shipped | Configuration required for a gateway. Checkout shows a UPI QR for the amount due. The cashier confirms it, Demo mode can mark it paid, or a stored gateway webhook settles the bill |
| Payment gateway integration | Shipped | Razorpay, PhonePe, Paytm, and Stripe are provider names. Each stays off until Settings stores a URL, key, and webhook secret |
| Card terminal integration | Shipped | Pine Labs, Mosambee, Mswipe, and PAX stay off until a terminal URL and secret are stored |
| Split payment / partial / advance payment | Shipped | Checkout splits a bill across tenders. House accounts hold advances and charges, including a reservation deposit, separate from store credit |
| Refund / payment reversal | Shipped | |
| Payment reconciliation | Shipped | Money out still matches expenses. Money in matches a payment when the bank reference equals the payment reference or UTR |
| Automatic payment confirmation | Shipped | Configuration required. A verified gateway or terminal webhook checks the bill out. An unconfigured UPI QR waits for the cashier |

## 👨‍💼 Staff Management

| Feature | Status | Note |
|---|---|---|
| Staff accounts | Shipped | |
| Roles (Owner/Manager/Cashier/Waiter/Kitchen/etc.) | Shipped | 11 seeded roles |
| Permissions | Shipped | Granular, individually toggleable per role |
| PIN login | Shipped | `POST /auth/pin-login` |
| Password login | Shipped | |
| Biometric login | Shipped | Settings → Security registers a passkey. The login page signs in with it and still asks for the authenticator code when 2FA is on |
| Role-based / permission-level access | Shipped | |
| Manager approval (void/discount/refund) | Shipped | Configuration required. Off until Approvals → Rules sets a discount percent or the void and refund switches. An approved request is used once |
| Login/logout tracking | Shipped | A password, PIN, or passkey sign-in, and logout, are written to Settings → Audit Log |
| Shift tracking, sales/orders/discounts/voids/refunds per employee | Shipped | Team page: shifts, leave, pay rates, payroll, and a performance report |

## 💰 Cash Drawer Management

| Feature | Status | Note |
|---|---|---|
| Everything in this category | Shipped | Daily cash close with variance, a cash-drawer pulse on USB cash receipts, and a separate shift till (open float, expected cash, counted close) |

## 📊 Analytics & Reports

| Feature | Status | Note |
|---|---|---|
| Daily sales, today's revenue/orders | Shipped | Dashboard `GET /dashboard/summary`, `/trends` |
| Sales by hour/day/category/product/employee/payment method | Shipped | Reports catalog, plus a weekday-and-hour sales heat map (2026-10-26) |
| Restaurant KPIs (AOV, covers, table turnover, food cost %, etc.) | Shipped | Reports → Floor shows covers, turns, and sales. Inventory → Food cost shows food-cost percent. Average order value stays in the sales reports |
| Full reports catalog, exports (CSV/PDF/Excel), scheduled email | Shipped | Needs `SMTP_URL` and `SMTP_FROM` for the scheduled email |
| Sales forecasting / AI recommendations / anomaly detection | Shipped | Configuration required for a chat model. Weekday velocity and Inventory → Anomalies run without a key. A stored model URL and token can refine the forecast |

## 📈 Owner Dashboard

| Feature | Status | Note |
|---|---|---|
| One-screen sales/orders summary | Shipped | Dashboard v1: revenue, orders, table status, kitchen queue, recent transactions |
| "What needs attention" alert feed | Shipped | Reports → Attention lists open bills older than 45 minutes, delayed kitchen items, stock at the reorder level, and reservations in the next two hours |
| Real-time refresh | Shipped | The staff shell uses the same live socket as the kitchen and the tables. Orders, the dashboard, reports, and the attention list refresh when a bill or ticket changes. A one-minute refresh remains if the socket is down |

## 🏪 Multi-Outlet Management

| Feature | Status | Note |
|---|---|---|
| Multiple restaurants / branches (schema) | Shipped | `Restaurant` → `Branch`, already multi-tenant by design |
| Branch switcher (UI) | Shipped | Sidebar branch switcher |
| Central dashboard / consolidated reports across branches | Shipped | Accounting has a branch overview: sales, open orders, low stock, inventory value |
| Branch-specific menus/pricing | Shipped | A dish belongs to one branch, and that branch sets its prices |
| Central inventory / stock transfers | Shipped | Branch-to-branch transfers (2026-10-11) |
| Franchise management, HQ controls, benchmarking | Shipped | Franchise shows this month’s orders, sales, covers, and no-shows per branch. Head office can lock menu prices. The owner and an administrator can still change them |

## 🖨️ Hardware / Device Management

| Feature | Status | Note |
|---|---|---|
| Receipt printer (browser print) | Shipped | HTML receipt via print dialog |
| Direct USB/ESC-POS printer | Shipped | Ported from nodedr-pos (kernel usblp + libusb fallback), diagnostics + test-print in Settings (2026-08-14). Not verified on real hardware |
| Network (TCP/9100) ESC/POS printer | Shipped | Per-branch address; verified against a local TCP listener only, not a physical printer. Server must be able to reach the printer |
| Kitchen ticket thermal print | Shipped | Per ticket, once-only (409 on repeat), REPRINT-stamped copies, test ticket; see docs/PERMISSIONS-STOCK-PRINTING.md |
| Label printers, weighing scales, payment terminals | Shipped | Configuration required for a terminal. The label is a 50 mm × 30 mm browser print. Weight is typed, or read from a serial scale at 9600 baud when the browser allows it. A card terminal stays off until Settings → Card terminals stores a URL and a secret |
| Barcode scanners | Shipped | USB wedge scanner into the POS scan box. The dish stores the barcode (2026-10-26) |
| Customer displays, kiosks, tablets as POS terminals | Shipped | Customer display, kiosk, and the touch POS |
| Device registration/health/remote config | Shipped | The POS registers itself. Settings → Devices shows who answered in the last two minutes and stores a message the register displays |

## 🌐 Offline-First POS

| Feature | Status | Note |
|---|---|---|
| Single-branch runs fully on local LAN with zero internet dependency | Shipped | Full Docker Compose stack (Postgres+backend+web) on one server, by construction |
| Client continues working while disconnected from its own local server (true offline writer + conflict resolution) | Shipped | The register keeps the menu it last loaded and queues the bill. Table QR and kiosk do the same. When the server returns, the same request is applied once. A changed basket is kept as a conflict and the saved order is not overwritten |
| Offline payments, local printing, offline KDS/kiosk | Shipped | A recorded payment and a kitchen status stay on the device and send once when the server returns. The browser prints the bill or ticket from that copy. A card-gateway charge and a USB or network thermal printer still need the server. The register, table QR, and kiosk already queue a bill. |
| Sync status / connection indicator | Shipped | The staff shell shows when head office last accepted a sync, how many events are waiting, and the last error. This is separate from the kitchen display’s live connection badge |

## 🔄 Sync Engine

| Feature | Status | Note |
|---|---|---|
| Branch-level sync agent to a central aggregation instance | Shipped | Orders, stock, and payments leave for head office when its address and token are stored. A payload that disagrees with one already stored is recorded as a conflict and the stored copy stays |
| Local-first data, retry queue, conflict resolution, idempotency | Shipped | Queued bills retry with the same request id. Orders → Conflicts lists a disagreement and a manager marks it resolved. The saved copy is the one that stays |

## 🔐 Security

| Feature | Status | Note |
|---|---|---|
| RBAC | Shipped | Granular per-permission, per-role |
| PIN authentication | Shipped | |
| 2FA | Shipped | TOTP plus recovery codes. PIN login is off for those accounts. An admin can reset it |
| Session timeout | Shipped | JWT expiry |
| Audit logs | Shipped | `AuditLog` model exists and is written to |
| Device authorization / IP restrictions / login history | Shipped | Settings → Network can require a registered device and can allow only listed addresses. Both start off, and that page stays reachable so a bad list cannot lock the owner out. Login history is still the audit log |
| Data encryption at rest | Shipped | Customer email, address, notes, and allergies are sealed in the app. The phone stays readable so search, house accounts, and reservations still match it. Older rows that were never sealed still open. The database file itself is left to Postgres |
| Backup / restore / export / delete policies | Shipped | Backup and restore from Settings |

## 📋 Reservations & Waitlist

| Feature | Status | Note |
|---|---|---|
| Table reservations (full lifecycle) | Shipped | reserved→confirmed→arrived→completed/cancelled/no_show |
| Guest count, notes, confirmation, cancellation, no-show | Shipped | |
| Waitlist + estimated wait | Shipped | |
| SMS/WhatsApp notification | Shipped | WhatsApp queues when the Cloud API is on. SMS sends through the configured provider on a new booking, from the booking dialog, on today's follow-up, and as a reminder in the two hours before the booking. It refuses when SMS is off |
| Table assignment | Shipped | Staff can still pick a table. A blank table, Best table, or waitlist Best table picks the smallest free table for the party, the time, and the floor area |
| Reservation deposit | Shipped | Collect records cash, card, UPI, or house credit as an advance, or debits store credit. Reservations → Deposits refunds a held deposit, forfeits it, and lists the ledger lines |
| No-show fee / automatic table allocation / forecasting | Shipped | Marking no-show forfeits a held deposit, then store credit, then the house account, and frees the table. Reservations → Forecast is the weekday average of covers, the no-show share of open bookings, and tables needed. Card and UPI are recorded tenders, not a new gateway charge |

## 📣 Marketing

| Feature | Status | Note |
|---|---|---|
| Everything in this category | Shipped | Coupons, happy hour, campaigns, referral points, birthday-month discount, RFM labels, and CLV |

## 🧾 Accounting

| Feature | Status | Note |
|---|---|---|
| Everything in this category | Shipped | Configuration required for the books. Expenses, petty cash, cash close, profit and loss, GST summary, balance sheet, budgets, and bank matching are in. GST billing lists each paid bill as a tax invoice or bill of supply, with CGST, SGST, UTGST, IGST, HSN totals, and the tax share of a refund. Accounting → Journals posts a balanced voucher for a paid bill and an approved expense once cash, sales, and the payment method are mapped. A Tally post runs when the host and port are stored. India payroll estimates PF, ESI, and TDS. These books are not a filing to a tax authority |

## 🇮🇳 India-Specific Features

| Feature | Status | Note |
|---|---|---|
| GST-inclusive pricing (CGST/SGST backed out correctly) | Shipped | Tax is backed out of the inclusive price on each line. The same state is CGST+SGST. Chandigarh, Ladakh, Andaman and Nicobar, Lakshadweep, and Dadra and Nagar Haveli and Daman and Diu use CGST+UTGST. A guest in another state is IGST. A blank guest state stays intra-state. The branch state comes from the saved code, or from the first two digits of the GSTIN |
| UPI as a payment method | Shipped | Recorded on the bill. Checkout can show a UPI QR. Confirmation is the cashier, or Demo mode |
| Indian currency (INR) | Shipped | Default currency |
| Dynamic UPI QR, IGST, HSN/SAC, FSSAI, WhatsApp receipts/ordering, Tally/Razorpay/PhonePe/BharatPe, Swiggy/Zomato integration | Shipped | Configuration required for live calls. UPI QR, a WhatsApp receipt, HSN/SAC, FSSAI, and the CGST, SGST, UTGST, and IGST split are in. The printed receipt and the WhatsApp PDF use that split. BharatPe is not a separate provider. Zomato, Swiggy, Razorpay, PhonePe, Paytm, Stripe, Tally, and the fleets stay off until Settings stores a URL and a secret. GSTR-1, GSTR-3B, GSTR-2B, and e-way bills stay with the CA |
| WhatsApp product catalog | Shipped | Configuration required. Settings → WhatsApp catalog stores a sealed Meta token, syncs dishes with items_batch, and turns a Cloud API cart into one takeaway through the existing order service. A voice note is matched to those dishes when speech is turned on. Staff accept it before the kitchen starts. The guest receives the same UPI QR the till uses. After the cashier confirms payment, WhatsApp sends the paid receipt as a PDF. Scanning that QR does not mark the bill paid. A live number needs the Meta app secret, the access token, and a public image URL stored for that branch |

## 🤖 AI Features

| Feature | Status | Note |
|---|---|---|
| Demand forecasting | Shipped | Paid-sales weekday velocity, optional Hugging Face or NVIDIA chat model stored in Settings, optional weather URL |
| Smart reorder predictions | Shipped | Qty = velocity × (measured/stored lead time + horizon) − on-hand; model may refine; Apply writes a purchase request. Rule-based auto-reorder is unchanged |
| AI recommendations / anomaly detection | Shipped | Configuration required for a chat model. Inventory → Anomalies compares a day with the previous 13. Recommendations stay on the forecast page. A stored model URL and token can refine that forecast |
| Branch and restaurant ask agent | Shipped | Ask reads sales, open orders, late kitchen tickets, low stock, reservations, and the monthly branch comparison. A branch chat stays on the open branch. The restaurant chat needs reports access and reads every branch, still only the areas that login can open. Phone, email, address, and allergy notes are left out. A stored model may phrase the records and is dropped if it adds a number. The chat does not take a payment, change a price, edit stock, or send a message |

## 🔥 Advanced "Enterprise POS" Features

| Feature | Status | Note |
|---|---|---|
| Multi-location (schema-level) | Shipped | `Restaurant`→`Branch` from day one, not bolted on |
| Multi-brand, multi-language, multi-currency | Shipped | Configuration required. Settings → Brands assigns a branch to a brand. Menus stay on the branch. The language switcher is in the app. A stored rate converts the tender. The bill stays in the restaurant currency |
| API / Swagger docs | Shipped | Versioned REST (`/api/v1`), Swagger at `/api/docs` |
| Webhooks, developer portal, app marketplace | Shipped | Signed webhooks retry. Settings → Developer lists the routes. Settings → Catalog opens each connector in this product. An enabled app with a URL and a secret receives the same events. There is no store of outside apps |
| Advanced audit logs | Shipped | Settings → Audit Log filters the trail by entity and date |
| GraphQL | Shipped | Settings → Developer runs a query for the menu, open orders, one customer, the franchise scoreboard, and devices, and can recall a ticket. The rest of the API stays on REST |
| Custom reports/workflows/fields, automation engine, BI dashboards | Shipped | Reports → Saved runs a named report. Reports → BI charts the last 14 days. Settings → Fields defines a field for a customer, order, menu item, reservation, supplier, employee, or table, and that record’s screen saves the value. Settings → Automation fires on a paid bill, low stock, or today’s reservations. A rule can notify the owner and open a task. Settings → How agents run chooses whether email, SMS, WhatsApp, and a webhook wait for a person or go out on their own. A chain stops after three further steps and cannot loop |

---

## Summary

The August 2026 line counts (~100 Shipped, ~29 Partial, ~176 Planned) were
not re-tallied on 2026-10-26. The rows above are the status to trust.
What moved since that count:

**Now in the product, with the limits named on the row:** delivery,
kiosk ordering, table QR ordering, the reports catalog and sales heat map,
accounting (including petty cash, expense approval, and a Tally file),
India PF/ESI/TDS, campaigns, coupons, 2FA, backup, branch stock transfers,
split tender, per-item kitchen notes, UPI QR, barcode scan, sold-by-weight,
and a browser label page. SQLite is a second install (`docker-compose.sqlite.yml`
on port 1996), not the database this demo runs on. Service pages added on
2026-10-26 live on their own routes: repeat, line transfer, table sessions,
WhatsApp intake, curbside, floor areas, food cost, floor KPIs, attention,
shift till, approvals, reservation follow-up, currencies, brands, and apps.

**Guest ordering, in the product:** a guest orders from the table QR, from the kiosk, or from the WhatsApp catalog. The table QR adds to that table's tab and the cashier takes payment. The kiosk sends the ticket to the kitchen and shows the UPI QR for payment at the counter. The WhatsApp catalog becomes one takeaway after staff accept it, then the cashier confirms the UPI payment and the guest gets a PDF receipt.

**Still open for a live restaurant:**
1. Gateway, terminal, fleet, aggregator, and WhatsApp catalog secrets. The calls stay off until Settings stores them. Cash, UPI QR, and the cashier confirmation still work.
2. GST billing is in the app. The CA files GSTR-1, GSTR-3B, GSTR-2B, and any e-way bill. A Tally post runs when Settings stores the host and port. BharatPe is not a separate provider.
3. Installers beyond the existing MSIX workflow. GraphQL covers the menu, open orders, one customer, the scoreboard, devices, and recalling a ticket. The till, kitchen, and reports stay on REST. A USB receipt printer and cash drawer have not been checked on real hardware.
