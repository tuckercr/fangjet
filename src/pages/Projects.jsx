import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import { PERSON_ID } from '../schema'

const PROJECTS = [
  {
    id: 'elsie-family',
    // Structured data only (JSON-LD below); not shown on the page.
    schema: { type: 'SoftwareApplication', os: 'Android', category: 'UtilitiesApplication', summary: 'Accessibility-focused Android launcher for older adults, with a paired caregiver companion app.' },
    title: 'Elsie Family',
    statusTag: 'Live on Play Store; caregiver app in active development',
    links: [
      { label: 'Website', href: 'https://www.elsiefamily.com' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.fangjet.launcher' },
    ],
    description:
      'An Android launcher for older adults and people with low vision, paired with a caregiver app that configures it remotely. Both apps live in one multi-module Kotlin codebase with shared contracts, pair with a 6-digit code, and use Firestore security rules to enforce which side owns what. The launcher stays simple and legible: large color-coded buttons, medication reminders, voice commands, a magnifier, and photo speed dial.',
    tags: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'Firebase', 'MVVM'],
    note: '550+ unit tests + Compose UI tests · multi-module · GitHub Actions CI',
  },
  {
    id: 'sunny-and-misty',
    // Structured data only (JSON-LD below); not shown on the page.
    schema: { type: 'SoftwareApplication', os: 'Android, iOS', category: 'WeatherApplication', summary: 'A pet weather app built natively for Android (Kotlin, Compose) and iOS (Swift, SwiftUI).' },
    title: 'Sunny & Misty',
    links: [
      { label: 'Android', href: 'https://github.com/tuckercr/weather-android' },
      { label: 'iOS', href: 'https://github.com/tuckercr/weather-iOS' },
    ],
    description:
      'A weather app where Sunny the dog and Misty the cat act out the forecast and suggest the best time for a walk. Native on both platforms: Kotlin/Compose for Android, Swift/SwiftUI for iOS. Features include multiple saved cities, multi-day forecasts, animated radar, and scheduled daily weather briefings. Offline-first: per-city caching paints instantly and refreshes in the background. Feature switches and walk-safety thresholds are tunable from Remote Config without shipping a build.',
    tags: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'WorkManager', 'DataStore', 'Firebase'],
    note: '520+ unit tests + Compose UI tests on Android · 550+ XCTest tests on iOS · GitHub Actions CI',
  },
  {
    id: 'rolo-crm',
    // Structured data only (JSON-LD below); not shown on the page.
    schema: { type: 'WebApplication', os: 'Web', category: 'BusinessApplication', summary: 'A relationship-first CRM with a follow-up rules engine, an MCP server for AI assistants, and a Slack bot that runs the daily follow-up routine, built for Data Story Strategy.' },
    title: 'Rolo CRM',
    statusTag: 'Contract work',
    links: [{ label: 'GitHub', href: 'https://github.com/tuckercr/rolo-showcase' }],
    description:
      'A relationship-first CRM built for Data Story Strategy, a commercial translation firm for diagnostic and biotech companies, in production since July 2026. A configurable rules engine schedules each contact\'s next follow-up, and a dashboard and daily email surface what\'s overdue. An MCP server lets AI assistants read contacts and propose changes, with every agent write gated on human approval. A Slack bot runs the daily routine: a 5 PM debrief asks about each contact due that day, buttons and a modal log the answers through the same approval pipeline, and slash commands answer contact lookups without opening the app. All of it on plain PHP 8.4 and MariaDB, server-rendered with no build step and no resident process.',
    tags: ['PHP 8.4', 'MariaDB', 'PHPUnit', 'MCP', 'Slack API'],
    note: '140+ PHPUnit tests, including integration tests against a real MariaDB',
  },
  {
    id: 'hark',
    // Structured data only (JSON-LD below); not shown on the page.
    schema: { type: 'SoftwareApplication', os: 'Android', category: 'UtilitiesApplication', summary: 'Fully on-device wake word speech recognition for Android, powered by PocketSphinx.' },
    title: 'Hark: Offline Wake Word Detection',
    links: [{ label: 'GitHub', href: 'https://github.com/tuckercr/wakewordapp' }],
    description:
      'Fully on-device wake word speech recognition for Android, powered by PocketSphinx: no cloud and no network dependency. Designed to help hearing-impaired users notice when they\'re being addressed. Runs as a microphone foreground service that handles Android 14\'s background and boot restrictions, with multi-word phrases, tunable sensitivity, and custom alert sound and duration. My most starred and forked repo.',
    tags: ['Kotlin', 'Jetpack Compose', 'PocketSphinx', 'Hilt', 'DataStore'],
  },
  {
    id: 'whiteboard-camera',
    // Structured data only (JSON-LD below); not shown on the page.
    schema: { type: 'SoftwareApplication', os: 'Android', category: 'MultimediaApplication', summary: 'Android prototype that removes the presenter from a whiteboard video feed in real time using OpenCV and the NDK.' },
    title: 'Whiteboard Camera',
    statusTag: 'Contract work',
    description:
      'Android prototype that removes the presenter from the shot entirely, isolating whiteboard content in real time using OpenCV and the NDK, then streaming the enhanced feed to conferencing platforms. The result looks like text appearing on the board with no one in front of it.',
    tags: ['Kotlin', 'OpenCV', 'Android NDK', 'Camera2', 'WebRTC', 'RTMP'],
  },
  {
    id: 'commercial-translation-diagnostic',
    // Structured data only (JSON-LD below); not shown on the page.
    schema: { type: 'WebApplication', os: 'Web', category: 'BusinessApplication', summary: 'An AI-assisted diagnostic platform that drafts findings reports with Claude for consultant review, built for Data Story Strategy.' },
    title: 'Commercial Translation Diagnostic',
    statusTag: 'Contract work',
    description:
      'An AI-assisted diagnostic platform built for Data Story Strategy, a commercial translation firm. A client completes a structured intake and uploads a deck and supporting documents; the system also reads their website, then drafts a findings report with Claude. A consultant reviews and edits every report in an admin console (with Word export) before the client can see it. Also includes Stripe checkout, invitation links for sponsored engagements, Google Sign-In for admins, and automatic retry and alerting when generation fails.',
    tags: ['PHP 8.4', 'Stripe', 'PHPUnit', 'Claude API'],
  },
  {
    id: 'fangjet',
    // Structured data only (JSON-LD below); not shown on the page.
    schema: { type: 'WebApplication', url: 'https://fangjet.com/', os: 'Web', category: 'DeveloperApplication', summary: 'This portfolio site: React and Vite, prerendered to static HTML, served from Firebase Hosting.' },
    title: 'fangjet.com',
    links: [{ label: 'GitHub', href: 'https://github.com/tuckercr/fangjet' }],
    description:
      "You're looking at it :) Originally a WordPress site, rebuilt using React and Vite, with every page prerendered to plain HTML at build time for speed and SEO. Served from Firebase Hosting, with Cloudflare running the DNS. The source is open on GitHub under the MIT license.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'SEO', 'Firebase Hosting', 'Cloudflare DNS'],
  },
]

// Built from PROJECTS so the structured data always lists every card, in page order.
// Each item links to schema.url, else its first public link, else its card's anchor.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: PROJECTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': p.schema.type,
      name: p.title,
      url: p.schema.url ?? p.links?.[0]?.href ?? `https://fangjet.com/projects#${p.id}`,
      description: p.schema.summary,
      operatingSystem: p.schema.os,
      applicationCategory: p.schema.category,
      author: { '@type': 'Person', '@id': PERSON_ID, name: 'Colin Tucker', url: 'https://fangjet.com/' },
    },
  })),
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-page px-8 pb-20 narrow:px-5 narrow:pb-16">
      <SEO
        title="Projects"
        description="Android and iOS apps by Colin Tucker: Elsie accessibility launcher, Sunny & Misty, Hark wake word detection, Rolo CRM, and more."
        path="/projects"
        jsonLd={JSON_LD}
      />
      <div className="mb-12 border-b border-border pt-12 pb-10 narrow:pt-8 narrow:pb-7">
        <span className="fj-label">// public projects &amp; private contract work</span>
        <h1 className="mt-2.5 mb-4 text-5xl leading-tight narrow:text-4xl">Projects</h1>
        <p className="m-0 max-w-3xl text-lg leading-relaxed text-pretty text-muted">Shipped apps, open source projects and client work, built with clear architecture, tests and CI. Contract work is marked as such, and public repos are linked.</p>
      </div>

      {/* Two columns while each card can be at least 440px wide, then one; no utility sizes auto-fill tracks. */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(440px,1fr))] gap-6 narrow:grid-cols-1">
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  )
}
