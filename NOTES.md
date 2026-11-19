# Notes

Open ideas, decisions and loose ends for fangjet.com. Dates are when the item came up (2026).
Finished items move to Done at the bottom. `CLAUDE.md` holds the standing rules (stack, design
tokens, deploy steps, working agreements).

Created 11-02, seeded from the cross-project `StudioProjects/NOTES.md` and from the "Outside the
apps" section of `cats-dogs/NOTES.md`. Each item was re-checked on the way in.

## Do soon

- [ ] **`/ai` page rework, remaining items.** Agreed 11-06: new terminal transcript (DST
      reminder bug: find, failing test, fix) and rewritten Architecture exploration / Test
      generation cards. Still to do:
  - **Closing.** Add one line on limits (e.g. "I don't ship code I can't explain") and links
    to Projects and Contact.
  - **SEO.** Description now mentions agents and `lastmod` is bumped (11-17); add local
    models to the description when that section lands.
  - **Terminal is illustrative.** The DST transcript is a plausible example, not a quote from
    a real session. Its stated cause was itself wrong until 11-19 ("stored as local time, not
    UTC"), the same mistake both local models made; it now names a fixed UTC instant. Swap in
    a real Elsie or Hark bug if one fits.
  - **On-device models on Android** (optional, later): Gemini Nano via ML Kit GenAI or
    MediaPipe LLM Inference in a small test app, if Colin wants that angle on the page.
- [ ] **A detail page per project** (idea, 11-19), e.g. `/projects/elsie`. One page per
      project gives searches like "Elsie launcher Android" somewhere to land and doubles as
      interview material. The GitHub READMEs already carry most of the technical detail
      (Sunny & Misty's run to 700+ lines), so a page should add what a README does not:
      the problem and who it is for, the decisions and trade-offs, screenshots, results, and
      a link to the repo for the rest. Elsie and the Diagnostic have no public repo, so they
      gain the most. Add each page to the sitemap and link it from its card on `/projects`.
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

- [x] **`/ai` linked from the site** (11-19): a line in the home page's about section and an
      "ai" link in the header, after projects. (A footer link went live briefly, then moved to the header.) It had been in the sitemap but unlinked since
      10-24. `/` and `/ai` lastmod bumped, IndexNow pinged.
- [x] **`/ai` local models section** (11-19), from Colin's own setup: Ollama on his Mac mini
      (M4, 16 GB), Qwen 3.5 4B (MLX) at about 27 tokens/s in 4 GB, Gemma 4 12B at 16 to 22
      tokens/s in 8 GB. Both, and Gemma with thinking on, answered that alarms belong in UTC
      "regardless of daylight saving", backwards for a daily local-time reminder. The numbers
      live in `LOCAL_RESULTS` in `AI.jsx`; re-measure if the models or the machine change.
- [x] **Résumé updated** (11-19) in the Google Doc "Colin Tucker - Resume" (Colin's Drive),
      then exported to `public/colin-tucker-resume.pdf`: weather links moved from `cats-dogs` to
      `weather-android`/`weather-iOS`, Sunny & Misty shipped on both stores, recounted test
      counts, the Rolo Slack bot, and fangjet.com in the contact line. Edit the doc, then
      re-export; the PDF is not the source.
- [x] **Old WordPress install removed from IONOS** (11-19): Colin deleted its files and its
      MySQL database. fangjet.com had not been served from it since 10-30.
- [x] **Search engines set up** (11-14 to 11-19). Google Search Console has a Domain property
      for `fangjet.com` (covers www and http), verified by the `google-site-verification` TXT
      record in Cloudflare DNS: keep that record. Owned by Colin's second Google account (the
      one at `/u/1/` in his browser). Bing Webmaster Tools imported it from Search Console, so it
      needs no record of its own. IndexNow pings Bing and the others after each deploy
      (`npm run indexnow`, see `CLAUDE.md`). Bing's first report flagged duplicate titles and
      descriptions; the only live duplicate was the 404 page reusing the home description,
      fixed 11-19. It also flagged few inbound links. Done by 11-19: LinkedIn, the GitHub
      profile's website field and README, and the elsiefamily.com footer. Search Console showed
      `/` and `/ai` indexed on 11-19.
- [x] **`/ai` agents section** (11-17): project rules (linking this repo's `CLAUDE.md`),
      memory, the Rolo MCP server, connected tools, and the Diagnostic as AI in a client
      product. The MCP card moved out of "how I use it", replaced by Debugging.
- [x] **Hark is on the projects page.** Verified live 11-02: `src/pages/Projects.jsx` carries
      "Hark: Offline Wake Word Detection" linking `tuckercr/wakewordapp`, and fangjet.com/projects
      serves it. The cross-project note still had this as outstanding; it was stale.
      (10-24, done by 11-02)
