# OrderlyPOS website

Public site for OrderlyPOS. Host it on Vercel.

Set these before the Vercel build:

- `NEXT_PUBLIC_SITE_URL` — `https://orderlypos-eight.vercel.app`
- `NEXT_PUBLIC_APP_URL` — `https://orderlypos-ui.vercel.app`. Try now and Sign in open that origin. `vercel.json` already sets it.

The till, the kiosk, and the API are not in this repository. After this site is deployed, these addresses open the admin app:

- Kiosk: `https://orderlypos-ui.vercel.app/kiosk/<token>`
- Guest phone page: `https://orderlypos-ui.vercel.app/guest/<token>`
- Customer display: `https://orderlypos-ui.vercel.app/customer-display`

The token is created in the admin app under Settings. The customer display must stay on the same host as the till, because the two browser windows share that screen.
