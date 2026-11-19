# Notes

Open ideas, decisions and loose ends for fangjet.com. Dates are when the item came up (2026).
Finished items move to Done at the bottom. `CLAUDE.md` holds the standing rules (stack, design
tokens, deploy steps, working agreements).

Created 11-02, seeded from the cross-project `StudioProjects/NOTES.md` and from the "Outside the
apps" section of `cats-dogs/NOTES.md`. Each item was re-checked on the way in.

## Do soon

- [ ] **The old WordPress install may still sit in the IONOS webspace.** fangjet.com stopped
      being served from it on 10-30, but its files and MySQL database were never removed. Back
      them up and delete them — carefully: Rolo lives in its own `/crm` folder in the same
      webspace and `rolo/docs/PROJECT_NOTES.md` warns never to write into
      `/clickandbuilds/FANGJET`. Leave Rolo alone. (10-24)
- [ ] **`/ai` is in the sitemap but not in the navigation.** Confirmed 11-02:
      `public/sitemap.xml` lists `/`, `/ai`, `/projects`, `/contact`, while the nav links `/`,
      `/projects`, `/contact`, `/privacy-policy`. So `/ai` is reachable and indexed but
      unlinked, and `/privacy-policy` is linked but unlisted. Decide whether `/ai` is public
      (put it back in the nav) or retired (drop it from the sitemap); the current state is
      neither. Rechecked 11-06: still nothing in `src/` links `/ai`. Leaning public (footer
      or home link), since AI-assisted work is a selling point in Android interviews.
      (10-24, rechecked 11-02, 11-06)
- [ ] **`/ai` page rework, remaining items.** Agreed 11-06: new terminal transcript (DST
      reminder bug: find, failing test, fix) and rewritten Architecture exploration / Test
      generation cards. Still to do:
  - **Local and on-device models section.** The strongest Android tie-in (privacy, latency,
    battery, model size). Candidates: Gemini Nano via ML Kit GenAI, MediaPipe LLM Inference,
    llama.cpp on Android, Ollama / LM Studio for keeping private code local, Hark's offline
    wake-word detection. Needs Colin's actual experience before any copy is written: he is
    setting up a local model on his Mac mini first (11-17).
  - **Closing.** Add one line on limits (e.g. "I don't ship code I can't explain") and links
    to Projects and Contact.
  - **SEO.** Description now mentions agents and `lastmod` is bumped (11-17); add local
    models to the description when that section lands.
  - **Terminal is illustrative.** The DST transcript is a plausible example, not a quote from
    a real session. Swap in a real Elsie or Hark bug if one fits.
- [ ] **Résumé PDF still links the old repo.** (10-26)
- [ ] **Tidy the Tailwind one-off values.** `CLAUDE.md` says arbitrary values are kept only
      where a comment explains why (the CRT geometry, the cursor height, two grid templates);
      anything beyond that list should become a token. (10-24)

## Keep honest

- Test-count claims, recounted 11-07 by `@Test` / PHPUnit method:
  - Elsie card: 550+ unit tests (555) plus 25 Compose UI tests. The card said 260+, a figure
    from the site's launch commit on 10-24 that the codebase had doubled since.
  - Sunny & Misty card: 520+ unit tests (527) and 29 Compose UI tests in `weather-android`,
    550+ XCTest tests (557, in 39 files) on iOS. The iOS count is Colin's; that repo is not on
    this machine.
  - Rolo: 110+ on the home page and the card (115, the same in `rolo-showcase`, which the card
    links to).
  - The home page no longer carries an Elsie count; it lives on the card. Both cards' "GitHub
    Actions CI" claims were checked 11-07: CI runs and passes on `weather-android` and `elsie`.
  Recount when a project's tests change materially, and keep the numbers rounded down. (10-27,
  recounted 11-07)

## Done

- [x] **Search engines set up** (11-14 to 11-19). Google Search Console has a Domain property
      for `fangjet.com` (covers www and http), verified by the `google-site-verification` TXT
      record in Cloudflare DNS: keep that record. Owned by Colin's second Google account (the
      one at `/u/1/` in his browser). Bing Webmaster Tools imported it from Search Console, so it
      needs no record of its own. IndexNow pings Bing and the others after each deploy
      (`npm run indexnow`, see `CLAUDE.md`). Bing's first report flagged duplicate titles and
      descriptions; the only live duplicate was the 404 page reusing the home description,
      fixed 11-19. It also flagged few inbound links: Colin to link fangjet.com from GitHub,
      LinkedIn, the Play listing's developer site and the Elsie site footer.
- [x] **`/ai` agents section** (11-17): project rules (linking this repo's `CLAUDE.md`),
      memory, the Rolo MCP server, connected tools, and the Diagnostic as AI in a client
      product. The MCP card moved out of "how I use it", replaced by Debugging.
- [x] **Hark is on the projects page.** Verified live 11-02: `src/pages/Projects.jsx` carries
      "Hark: Offline Wake Word Detection" linking `tuckercr/wakewordapp`, and fangjet.com/projects
      serves it. The cross-project note still had this as outstanding; it was stale.
      (10-24, done by 11-02)
