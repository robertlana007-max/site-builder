# Card support (PayMeGate) – setup

The website is static (GitHub Pages), so card payments go through a small Cloudflare Worker:

```
Support page --(amount, email)--> Cloudflare Worker --(X-API-Key)--> api.paymegate.com/v1/orders
     ^                                                                        |
     +--- thank-you.html?ref=…  <--- PayMeGate hosted checkout  <--- checkoutUrl
```

- `paymegate-worker.js` – the Worker. The API key lives only in Cloudflare secrets, never in this repo.
- The Support page reads the Worker address from `config.json` → `card.checkoutApi`.
  While it is empty, the Card tab says "Card payments are being set up…" and Crypto works as before.
- PayMeGate has a single `backUrl` (no separate cancel URL), so people who close the checkout also land on
  `thank-you.html`. The page then shows a small "Closed the payment page without paying? Nothing was charged" note.
- Minimum $2 (Stripe on PayMeGate). Google Pay / Apple Pay need $10+. Fees: 1% PayMeGate + provider fee. Payouts in USDC.

## Status

- [x] PayMeGate: sandbox API key `gettoolnest-worker` created, Back URL set to https://gettoolnest.xyz/thank-you.html
- [ ] PayMeGate: add a payout wallet (EVM 0x address from a wallet you control, not an exchange)
- [x] Cloudflare Worker `gettoolnest-pay` created and code deployed (https://gettoolnest-pay.robertlana007.workers.dev)
- [ ] `PAYMEGATE_API_KEY` added, but as Text: change its type to Secret
- [x] `config.json` → `card.checkoutApi` set, site rebuilt and pushed
- [ ] Sandbox test payment → lands on thank-you page
- [ ] Switch to a live key in Cloudflare

## Worker variables

| Name | Type | Value |
|---|---|---|
| `PAYMEGATE_API_KEY` | Secret | the `pmg_test_…` key now, the live key later |
| `PAYMEGATE_METHODS` | Text (optional) | card method keys, e.g. `stripe`. Empty = all methods. Open `https://<worker>/methods` to see your keys. |
| `PAYMEGATE_SECRET_KEY` | Secret (optional) | webhook `signingSecret`, only if you add a webhook |

---

## Prompt – Claude Chrome extension (Cloudflare dashboard)

```
I am logged in to dash.cloudflare.com (create a free account first if I am not).
Help me create a Cloudflare Worker for card donations. Never type or reveal secret values
yourself; when a secret is needed, stop and let me paste it.

1. Go to Workers & Pages → Create → Create Worker (Start with Hello World). Name it
   "gettoolnest-pay" and click Deploy.
2. Click "Edit code", select everything in the editor and delete it, then STOP: I will paste
   my code (paymegate-worker.js). When I say "pasted", click Deploy.
3. Go to the worker → Settings → Variables and Secrets → Add:
   - PAYMEGATE_API_KEY, type Secret: STOP and let me paste the value.
   Click Deploy / Save.
4. Tell me the worker's address (like https://gettoolnest-pay.<something>.workers.dev).
5. Open https://<that address>/methods in a new tab. It lists my PayMeGate payment methods.
   Tell me every method "key" (or id) and its name, and which of them are card / Stripe /
   Google Pay / Apple Pay. Do not copy anything that looks like a secret.
6. Open https://<that address>/checkout in a new tab. It should say {"error":"Not found"}
   (expected: it only accepts POST from gettoolnest.xyz). Tell me what it shows.
```

## Prompt – Claude Chrome extension (PayMeGate payout wallet)

```
In my PayMeGate dashboard, open Get Started (step 1) or the wallet settings. I will tell you
the EVM (0x…) address of a wallet I control myself. Paste it exactly, double-check every
character against what I gave you, save it, and tell me which network/token payouts use (USDC on
which chain). Do not change anything else.
```

## Later: going live

1. In PayMeGate, turn the Sandbox switch off and create a live key named `gettoolnest-worker-live`
   (same single basic permission).
2. In Cloudflare, replace the `PAYMEGATE_API_KEY` secret with the live key and deploy.
