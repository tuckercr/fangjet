// Tells IndexNow (Bing, Yandex and the others that share it) that the site's pages
// have changed, so they re-crawl within minutes instead of on their own schedule.
// Run after a deploy: npm run indexnow. It sends every URL in public/sitemap.xml;
// IndexNow ignores pages it finds unchanged.
//
// The key proves the site owns this request: public/9b35d047462463909b9f7c662cb55e84.txt serves it.
// To rotate it, generate a new 32-character hex key, rename that file and change KEY.
import { readFileSync } from 'node:fs'

const HOST = 'fangjet.com'
const KEY = '9b35d047462463909b9f7c662cb55e84'

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
})

// 200 and 202 both mean accepted (202: the key is still being checked).
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`)
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text())
  process.exit(1)
}
