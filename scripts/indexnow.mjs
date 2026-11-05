#!/usr/bin/env node
// Tells Bing, Yandex and other IndexNow search engines that pages changed, so new pages are
// crawled within minutes (Bing results also feed ChatGPT search, Copilot and DuckDuckGo).
// Reads the live sitemap and submits every URL. Run after a deploy: node scripts/indexnow.mjs
// Uses curl so it also works behind HTTPS proxies, and follows redirects (e.g. apex -> www).
import fs from "fs";
import { execFileSync } from "child_process";

const KEY = fs.readFileSync(new URL("./indexnow-key.txt", import.meta.url), "utf8").trim();
const START = (process.env.SITE_URL || "https://waatechnologies.com").replace(/\/$/, "");
const curl = (args) => execFileSync("curl", ["-sL", "-m", "30", "-A", "Mozilla/5.0 (IndexNow submitter)", ...args], { encoding: "utf8" });

// Resolve the real site origin after redirects.
const finalUrl = curl(["-o", "/dev/null", "-w", "%{url_effective}", `${START}/`]).trim();
const SITE = new URL(finalUrl).origin;
const host = new URL(SITE).host;

if (curl([`${SITE}/${KEY}.txt`]).trim() !== KEY) {
  console.error(`Key file ${SITE}/${KEY}.txt is not live yet; skipping.`);
  process.exit(0);
}

const xml = curl([`${SITE}/sitemap.xml`]);
const urlList = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()))]
  .map((u) => { const x = new URL(u); return `${SITE}${x.pathname}${x.search}`; })
  .slice(0, 10000);
if (!urlList.length) {
  console.error("No URLs found in sitemap; skipping.");
  process.exit(0);
}

const body = JSON.stringify({ host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList });
const status = curl(["-o", "/dev/null", "-w", "%{http_code}", "-X", "POST", "https://api.indexnow.org/indexnow",
  "-H", "Content-Type: application/json; charset=utf-8", "--data-binary", body]).trim();
console.log(`IndexNow: submitted ${urlList.length} URLs for ${host} → HTTP ${status}`);
