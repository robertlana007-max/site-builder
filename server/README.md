# Card support (PayMeGate) – setup

The website is static (GitHub Pages), so card payments go through a small Cloudflare Worker:

```
Support page  --(amount only)-->  Cloudflare Worker  --(X-API-Key, secret)-->  PayMeGate /v1/orders
      ^                                                                              |
      +---- thank-you.html  <----  PayMeGate hosted checkout  <---- checkout URL ----+
```

- `paymegate-worker.js` – the Worker. Keys live only in Cloudflare secrets, never in this repo.
- The Support page reads the Worker address from `config.json` → `card.checkoutApi`.
  While it is empty, the Card tab shows "Card payments are being set up…" and the Crypto tab works as before.
- Success / return URL: `https://gettoolnest.xyz/thank-you.html`
- Cancel URL: `https://gettoolnest.xyz/donate/`

## Steps

1. **PayMeGate** – create an API key, turn on card payments, and copy the exact API field names (prompt 1 below).
2. **Cloudflare** – create the Worker, paste `paymegate-worker.js`, add the secrets (prompt 2 below).
3. **Fix field names** – if the docs differ from `buildOrder()` / `readCheckoutUrl()` in the Worker, change only those two functions.
4. **Website** – put the Worker address plus `/checkout` in `config.json` → `card.checkoutApi`
   (for example `https://gettoolnest-pay.yourname.workers.dev/checkout`), run `node build.js`, commit and push.
5. **Test** – make a $1 payment in PayMeGate test mode; you should land on the thank-you page.

---

## Prompt 1 – paste into the Claude Chrome extension (PayMeGate dashboard)

```
I am logged in to my PayMeGate merchant dashboard (paymegate.com). Help me prepare it for
one-off card donations on my website gettoolnest.xyz. Do NOT show or read out any secret key
values on screen in your replies; just tell me where they are.

1. Open the developer docs (https://www.paymegate.com/developers/api, or the API / Developers
   link in the dashboard) and write down VERBATIM:
   a. The API base URL for live and for test mode.
   b. How requests are authenticated (header name, e.g. X-API-Key) and whether there is a
      separate secret key / webhook signing secret.
   c. For POST /v1/orders (create order): every request field name and type, especially:
      amount (dollars as a string like "10.00", or cents as an integer?), currency,
      externalId, description, payment methods (the exact value for CARD ONLY),
      success / return URL, cancel URL, webhook / callback URL, customer email.
   d. The response field that holds the hosted checkout URL, and the order id field.
   e. Webhooks: event name for a paid order, the signature header name, and exactly how the
      signature is computed (HMAC-SHA256 of the raw body? with which secret?).
   f. Minimum and maximum card amount in USD, and card fees.
2. In the dashboard, check that card payments are enabled for my account. If there is a
   setting to enable "Card" as a payment method, enable it. Tell me if my account needs
   verification first.
3. Create an API key (test mode first if available) named "gettoolnest-worker" with only the
   permission to create orders (and read orders if needed). Tell me where it is shown so I can
   copy it myself; I will paste it straight into Cloudflare.
4. If the dashboard has fields for a default Success / Return URL, set it to
   https://gettoolnest.xyz/thank-you.html and the Cancel URL to https://gettoolnest.xyz/donate/
5. If the dashboard has a Webhook URL field, leave it for now (I will add the Worker URL later)
   unless I give it to you.
6. Check the terms: are donations / voluntary tips for a free website allowed?

Finally give me a short summary of 1a–1f and 6 (field names exactly as written in the docs),
with no key values in it.
```

## Prompt 2 – paste into the Claude Chrome extension (Cloudflare dashboard)

```
I am logged in to dash.cloudflare.com. Help me create a Cloudflare Worker for card donations.
Never type or reveal secret values yourself; when a secret is needed, stop and let me paste it.

1. Go to Workers & Pages → Create → Create Worker. Name it "gettoolnest-pay" and deploy the
   default Hello World worker.
2. Click "Edit code", delete everything in the editor, and stop: I will paste my code
   (paymegate-worker.js). After I say "pasted", click Deploy.
3. Go to the worker's Settings → Variables and Secrets and add:
   - PAYMEGATE_API_BASE  (type: Text)   value: <I will tell you the base URL from PayMeGate docs>
   - PAYMEGATE_API_KEY   (type: Secret) – stop and let me paste the value
   - PAYMEGATE_SECRET_KEY (type: Secret) – stop and let me paste the value (only if PayMeGate
     gave me a webhook signing secret)
   Save and deploy.
4. Copy the worker's address (like https://gettoolnest-pay.<something>.workers.dev) and tell me.
5. Open https://<that address>/checkout in a new tab: it should say {"error":"Not found"}
   (that is expected because it only accepts POST from gettoolnest.xyz). Tell me what it shows.
```

## Prompt 3 – optional, after the Worker is live (PayMeGate webhook)

```
In my PayMeGate dashboard, open the webhook settings and set the webhook URL to
https://<my worker address>/webhook for the "order paid" event. Save it, send a test event if
there is a button for that, and tell me whether it was delivered (HTTP 200).
```
