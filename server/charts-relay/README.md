# Charts relay (Twelve Data) – setup

Gives **every** visitor live spot gold (XAU/USD), more forex pairs and US stocks on the Live Charts page, without anyone typing a key.

Why it is needed: one Twelve Data key can hold only a few live connections. Tested with six connections on one key: five were closed. So the page cannot use the key directly for everyone. This Worker holds one connection and shares it.

**Not tested.** The code was written without a Cloudflare account to run it on. After deploying, open the chart and check XAU / USD before relying on it.

## Deploy (about 5 minutes, on a computer with Node.js)

```
cd server/charts-relay
npx wrangler login
npx wrangler deploy
npx wrangler secret put TWELVE_DATA_KEY     # paste the Twelve Data key when asked
```

`wrangler deploy` prints the address, for example `https://gettoolnest-charts.<your-name>.workers.dev`.

## Turn it on in the website

Put that address in `config.json`:

```
"chartsApi": "https://gettoolnest-charts.<your-name>.workers.dev"
```

Then run `node build.js` and publish. While `chartsApi` is empty the page behaves as before.

## Limits

- The free Twelve Data plan streams only a few symbols at once, so the relay passes on at most 8 different symbols across all visitors.
- Candle history uses API credits (8 per minute, 800 per day on the free plan). The relay caches it: recent candles for 20 seconds to 1 hour depending on the interval, older candles for a day.
- Only requests from gettoolnest.xyz are accepted for the live stream.
