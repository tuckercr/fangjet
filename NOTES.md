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
      neither. (10-24, rechecked 11-02)
- [ ] **Résumé PDF still links the old repo.** (10-26)
- [ ] **Tidy the Tailwind one-off values.** `CLAUDE.md` says arbitrary values are kept only
      where a comment explains why (the CRT geometry, the cursor height, two grid templates);
      anything beyond that list should become a token. (10-24)

## Keep honest

- The home page's test-count claims (500+ on Elsie, 110+ on Rolo) were corrected and deployed
  10-27. Revisit if either count changes materially. (10-27)

## Done

- [x] **Hark is on the projects page.** Verified live 11-02: `src/pages/Projects.jsx` carries
      "Hark: Offline Wake Word Detection" linking `tuckercr/wakewordapp`, and fangjet.com/projects
      serves it. The cross-project note still had this as outstanding; it was stale.
      (10-24, done by 11-02)
