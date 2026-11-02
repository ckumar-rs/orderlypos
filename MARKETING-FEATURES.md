# OrderlyPOS features

OrderlyPOS is the restaurant system for the till, the kitchen, the floor, and the guest. A guest orders in three ways. Staff run the rest from one sign-in.

## Three ways a guest orders

- **Table QR.** The guest scans the code on the table, sees the menu, adds modifiers, and sends the order onto that table. A later scan adds to the same bill. They can call a waiter or request the bill. The cashier takes payment, including UPI.
- **Kiosk.** The guest orders on the restaurant screen: eat here or take away, menu, options, basket, and an order number. The ticket goes to the kitchen. The screen shows the UPI QR. Payment is confirmed at the counter. Demo mode can mark a trial order paid.
- **WhatsApp catalog.** The guest sends a cart from the Meta catalog. It becomes one takeaway. Staff accept it before the kitchen starts. The guest receives the UPI QR. After the cashier confirms payment, WhatsApp sends the paid receipt as a PDF. A voice note can match dishes when speech is turned on.

## Agentic AI

OrderlyPOS is a multi-agent system. The agents share one set of books: the bills, tickets, stock, and reservations the till already wrote. Some agents answer when staff ask. Others run in the background, on a timer, with no one standing at the screen. None of them keep a second restaurant in the chat, and none of them read payroll.

Settings → Restaurant → How agents run is the owner’s choice. Both models stay in the product.

- **A person approves each change.** This is the starting choice. The inventory agent writes the draft quantity and waits. A branch rule notifies the owner and opens a task; email, SMS, WhatsApp, and a webhook wait until a person sends them. A person sends the reservation reminder.
- **Agents send the change.** The inventory agent also raises the purchase order. Outside demo mode it emails the supplier and marks the order sent. A branch rule sends the email, SMS, WhatsApp message, or webhook on its own. The reservation reminder texts the guest when SMS is on.

- **Branch agent.** This agent stays on the branch that is open. Staff can ask it for today’s sales, this month’s sales, open orders, late kitchen tickets, low stock, and today’s reservations. Every five minutes it can also run on its own: a new paid bill, stock at or below the reorder level, or reservations still on today’s book. It notifies the owner and can open a task. With a person in the loop, email, SMS, WhatsApp, and a webhook wait as a task. With agents sending the change, those go out on their own. One rule can start the next. The chain stops after three further steps. Low stock waits twelve hours before it speaks again. Today’s reservations are reported once that day.
- **Restaurant agent.** Someone with reports access can ask across branches. The answer stays inside the branches that login can already open. It compares orders, sales, average order value, covers, and no-shows.
- A question only opens the records that login is allowed to see. Phone, email, address, and allergy notes stay out.
- A stored chat model can phrase the answer. A number that is not already in those records is dropped, and the raw records are shown.
- The chat agents do not take a payment, change a price, edit stock, or send a message. The floor still rings the bill.
- **Inventory agent, in the background.** When a paid bill leaves an ingredient at or below its reorder level, this agent writes a draft purchase request for that ingredient. The quantity is enough to refill past the reorder point: twice the reorder level, minus what is still on hand, and never less than the reorder level. The same lines go onto one draft, so a second sale does not ask twice for the same ingredient. With a person in the loop, that person sends the purchase order. With agents sending the change, the same quantity becomes a purchase order. Outside demo mode it is emailed and marked sent. A separate pass at 9:00 in the branch timezone tells staff about low stock and expiry.
- **Kitchen agent, in the background.** Once a minute it checks open tickets. When a ticket passes its prep time, kitchen staff get one alert for that ticket.
- **Reservation agent, in the background.** It keeps a forecast: the weekday average of covers, the no-show share, and how many tables that needs. With agents sending the change, every 15 minutes it texts a guest whose booking is inside the next two hours, when SMS is on. With a person in the loop, staff send that reminder from the booking. Confirming, seating, or marking a no-show stays with a person either way.
- **Demand forecast** from paid sales by weekday. It runs with no model. A Hugging Face or NVIDIA model stored in Settings can refine it. A weather address can be stored with it.
- **Reorder prediction** from sales velocity, lead time, and what is on hand. Apply writes a purchase request. The inventory agent’s reorder still runs on its own when stock crosses the line.
- **Anomaly check** compares a day with the previous 13. That score stays on the machine and does not call a model.
- **Recommendations** stay on the forecast page.
- **MCP.** An outside assistant, connected with a staff login, gets 40 tools. It can list locations, read the dashboard, open and read an order, create an order, cancel an order, and refund an order. It can list deliveries, assign a driver, and update delivery status. It can read shifts, leave, attendance, and staff performance, and clock that person in or out. It can read profit and loss, the GST report, expenses, coupons, promotions, and equipment. It can list and create reservations. It can create and edit categories, dishes, floors, and tables. Each tool uses the same permission as the screen.

## Till and billing

- Touch billing screen with a product grid, categories, and search
- Barcode and SKU on the dish, and a scan box for a USB wedge scanner
- Sizes, add-ons, modifiers, and combo meals
- Line notes and cooking instructions
- Quantity changes, hold and resume, and open bills
- Split a bill by guest, merge bills, and move lines between open bills
- Move a party to a free table
- Repeat a previous bill, or the dishes the cashier picks
- Cancel a line, void an open order, and edit an open bill
- Refund, partial refund, and exchange
- Complimentary items
- Discounts by line, by order, by percent, by amount, and by coupon
- Tax backed out of the menu price, service charge, tips, and rounding
- Cash, card, UPI, wallet, and bank transfer, including a split tender
- A stored rate converts a foreign tender. The bill stays in the restaurant currency
- Customer display that mirrors the cart
- Printed receipt, WhatsApp receipt, SMS receipt, and email receipt when mail is set up

## Floor and tables

- Floor map with more than one floor, indoor, outdoor, and covered areas
- Table shape, capacity, and status: available, occupied, reserved, cleaning, out of service
- Seated timer, guest count, and the waiter assigned to the table
- Merge, split, and transfer tables, and move the guest onto another bill
- Drag-and-drop floor plan
- Live kitchen status on the floor
- Table history, revenue, time at the table, turnover, and revenue per seat
- A rotatable QR code on each table

## Menu

- Categories and subcategories
- Dishes, sizes, modifier groups, and modifier prices
- Combos and meal deals
- Photos, descriptions, ingredients, and allergens
- Veg, vegan, Jain, gluten-free, and spice level
- Prep time, used by the kitchen as the due time
- Routing to the right kitchen station and printer
- Breakfast, lunch, dinner, and late-night windows
- Seasonal menus and a daily availability window
- Happy hour and scheduled prices
- A menu per branch, and a copy from another branch
- Prices by channel: dine-in, takeaway, delivery, kiosk, or QR
- Price changes when an ingredient is low or sales pass a count

## Kitchen display

- Status board: New, Accepted, Preparing, Ready
- One column per kitchen station, plus an expo pass
- Priority tickets, timers, and color for a late ticket
- Sound on a new ticket, muted per screen
- Status on the ticket and on each line
- Bump a ticket forward, and recall it to Preparing
- Delay reason, and mark a dish unavailable
- Kitchen notes
- Tickets routed to the station on the dish
- Courses that can wait, then fire from the expo screen
- Prep-time report, tickets per hour, and station workload
- A late-ticket alert to kitchen staff
- Rush mode pauses table QR, kiosk, and WhatsApp orders

## Inventory, recipes, and purchasing

- Ingredient and product stock, with unit conversion
- Adjustments, branch-to-branch transfers, and a stocktake
- Low-stock and out-of-stock alerts, by push and by email when mail is on
- Batch and lot numbers, and an expiry date
- A batch dated before today is left on the shelf. When every remaining batch is expired, that dish cannot be sold
- A count below the reorder point still sells, and the shortage shows on the next stocktake
- Waste, spoilage, and damaged stock, priced from the oldest batch
- Recipes deduct stock when the bill is paid. Combos expand into their dishes
- Yield, wastage percent, and theoretical versus actual use
- Food cost, portion control, and prep batches
- Recipe builder with yield, servings, cost per serving, and margin
- Recipe history, a suggested selling price, and menu engineering
- Suppliers, quotations, purchase requests, and purchase orders
- Goods receipt, purchase invoices, returns, and supplier payments
- Price history, reorder levels, reorder suggestions, and supplier performance
- Price variance on what was ordered versus what was received

## Guests

- Name, phone, email, birthday, notes, and visit history
- Favorites, average order value, and how often they visit
- Loyalty points, tiers, rewards, and memberships
- Coupons, referral points, and a birthday-month discount
- Segments, including guests who are due to return
- Campaigns by email, SMS, and WhatsApp when those are connected

## Reservations

- Book, confirm, arrive, complete, cancel, and mark a no-show
- Party size, notes, and the table
- Waitlist with an estimated wait
- SMS and WhatsApp when those are connected
- The smallest free table for the party, the time, and the area
- A deposit by cash, card, UPI, or house credit
- A no-show can forfeit the deposit
- A forecast of covers and tables needed

## Takeaway and delivery

- Takeaway on the till
- A pickup time, a kitchen hold until it is time to cook, and curbside with the vehicle
- Delivery zones by pincode, with a fee, a minimum, an ETA, and a driver
- A public tracking link and the latest location when the driver sends it
- Swiggy, Zomato, Rapido, Dunzo, and Shadowfax connect when Settings stores that address and key

## Payments and the cash drawer

- Cash, card, UPI, wallet, and bank transfer
- A UPI QR for the amount due. The cashier confirms it. Scanning the QR does not mark the bill paid
- A card gateway or a card terminal settles the bill when Settings stores that address and secret
- Split payment, a partial payment, and an advance
- Refunds and a reversal
- Payment reconciliation
- Daily cash close with the expected amount and the counted amount
- A shift till with an opening float
- A cash-drawer pulse on a USB receipt for a cash payment

## India

- Menu prices include GST. The tax is backed out of the price
- Same state: CGST and SGST
- Chandigarh, Ladakh, Andaman and Nicobar, Lakshadweep, and Dadra and Nagar Haveli and Daman and Diu: CGST and UTGST
- A guest in another state: IGST
- The branch state comes from the saved code, or from the GSTIN
- GST billing lists each paid bill, the HSN totals, and the tax share of a refund
- The CA files GSTR-1, GSTR-3B, GSTR-2B, and any e-way bill
- UPI and Indian rupees
- HSN, SAC, and FSSAI on the bill
- A Tally voucher file, and a live post when the Tally host is stored
- Razorpay, PhonePe, Paytm, and Stripe when Settings stores that address and secret

## Staff, security, and more than one branch

- Staff accounts and roles: owner, manager, cashier, waiter, kitchen, and the rest
- Each permission can be turned on or off
- Password, PIN, and passkey sign-in
- Two-factor sign-in with recovery codes
- A manager approves a void, a discount, or a refund when that rule is on
- Login and logout on the audit log
- Sales, discounts, voids, and refunds per person
- Shifts, attendance, leave, and a payroll estimate that includes PF, ESI, and TDS
- English, Spanish, and French
- More than one brand and more than one branch
- A branch switcher, a group dashboard, and a comparison across branches
- Menus and prices can differ by branch
- Stock can move from one branch to another
- Each restaurant’s data stays on its own account

## Reports and the owner’s screen

- Today’s sales and orders
- Sales by hour, day, category, dish, person, and payment method
- A weekday-and-hour heat map
- Covers, table turns, average order value, and food-cost percent
- Saved reports and a chart of the last 14 days
- Export to CSV, PDF, and Excel
- A morning report by email when mail is set up
- The forecast, the anomaly check, and Ask are in Agentic AI above
- An attention list: old open bills, delayed kitchen items, low stock, and reservations due soon
- The dashboard, orders, and reports refresh when a bill or ticket changes

## Hardware and working offline

- A receipt and a kitchen ticket from the browser print dialog, on an 80 mm page
- A USB receipt printer and a network receipt printer
- A label page from the browser
- A serial scale for a dish sold by weight, in a browser that exposes that port
- A barcode scanner that types into the scan box
- The customer display, the kiosk, and the till on a tablet
- Devices registered for that branch, with a health check
- The branch can run on the local network
- The till, the table QR, and the kiosk keep the last menu and send the bill when the server returns
- The same request is applied once. A conflict is kept instead of overwriting the saved order
- Head office can receive a sync from each branch, with a queue and a visible status

## Books

- Expenses, petty cash, and cash close
- Profit and loss, balance sheet, and budgets
- Bank matching
- A journal entry for a paid bill and for an approved expense, once the accounts are mapped
- These books are the restaurant’s record. They are not a filing to a tax authority

## For a developer

- A versioned REST API and Swagger docs
- Signed webhooks that retry
- A developer page for the routes already in the product
- A small GraphQL query for the menu, open orders, one customer, the franchise scoreboard, devices, and recalling a ticket
- The till, the kitchen, and the reports stay on REST
- Custom fields on a customer, an order, a dish, a reservation, a supplier, an employee, or a table
- The branch, restaurant, inventory, kitchen, and reservation agents, and the 40 assistant tools, are in Agentic AI above
- An audit log filtered by record and date

## What a live restaurant turns on in Settings

The product includes the screens above. These calls run after Settings stores the address and the secret:

- Card gateway and card terminal
- Razorpay, PhonePe, Paytm, and Stripe
- Swiggy, Zomato, Rapido, Dunzo, and Shadowfax
- A live Tally post
- WhatsApp catalog: Meta app secret, access token, and a public image address
- Email: the restaurant’s mail server, for receipts, campaigns, purchase mail, and the morning report
- Speech on WhatsApp: an OpenAI key, so a voice note can match the menu
- Ask phrasing: a model address, a model id, and a token. Forecasts and the anomaly check still run when that model is off
