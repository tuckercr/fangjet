import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'

const PROJECTS = [
  {
    title: 'Elsie Family',
    statusTag: 'Live on Play Store; caregiver app in active development',
    links: [
      { label: 'Website', href: 'https://www.elsiefamily.com' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.fangjet.launcher' },
    ],
    description:
      'An Android launcher for older adults and people with low vision, paired with a caregiver app that configures it remotely. Both apps live in one multi-module Kotlin codebase with shared contracts, pair with a 6-digit code, and use Firestore security rules to enforce which side owns what. The launcher stays simple and legible: large color-coded buttons, medication reminders, voice commands, a magnifier, and photo speed dial.',
    tags: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'Firebase', 'MVVM'],
    note: '260+ unit tests · multi-module · GitHub Actions CI',
  },
  {
    title: 'Furcast Weather',
    links: [
      { label: 'Android', href: 'https://github.com/tuckercr/cats-dogs' },
      { label: 'iOS', href: 'https://github.com/tuckercr/cats-dogs-iOS' },
    ],
    description:
      'A weather app where a cat and dog act out the forecast and suggest the best time to walk the dog. Native on both platforms: Kotlin/Compose for Android, Swift/SwiftUI for iOS. Features include multiple saved cities, multi-day forecasts, animated radar, and daily briefings scheduled with WorkManager. Offline-first: per-city caching paints instantly and refreshes in the background. Feature switches and walk-safety thresholds are tunable from Remote Config without shipping a build.',
    tags: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'WorkManager', 'Room', 'Firebase'],
    note: 'Unit tests + Compose UI tests on Android · XCTest on iOS · GitHub Actions CI',
  },
  {
    title: 'Rolo CRM',
    statusTag: 'Contract work',
    links: [{ label: 'GitHub', href: 'https://github.com/tuckercr/rolo-showcase' }],
    description:
      'A relationship-first CRM built for Data Story Strategy, a commercial translation firm for diagnostic and biotech companies, in production since July 2026. A configurable rules engine schedules each contact\'s next follow-up, and a dashboard and daily email surface what\'s overdue. An MCP server lets AI assistants read contacts and propose changes, with every agent write gated on human approval. Plain PHP 8.4 and MariaDB, server-rendered with no build step.',
    tags: ['PHP 8.4', 'MariaDB', 'PHPUnit', 'MCP'],
    note: '400+ PHPUnit tests',
  },
  {
    title: 'Hark: Offline Wake Word Detection',
    links: [{ label: 'GitHub', href: 'https://github.com/tuckercr/wakewordapp' }],
    description:
      'Fully on-device wake word speech recognition for Android, powered by PocketSphinx: no cloud and no network dependency. Designed to help hearing-impaired users notice when they\'re being addressed. Runs as a microphone foreground service that handles Android 14\'s background and boot restrictions, with multi-word phrases, tunable sensitivity, and custom alert sound and duration. My most starred and forked repo.',
    tags: ['Kotlin', 'Jetpack Compose', 'PocketSphinx', 'Hilt', 'DataStore'],
  },
  {
    title: 'Whiteboard Camera',
    statusTag: 'Contract work',
    description:
      'Android prototype that removes the presenter from the shot entirely, isolating whiteboard content in real time using OpenCV and the NDK, then streaming the enhanced feed to conferencing platforms. The result looks like text appearing on the board with no one in front of it.',
    tags: ['Kotlin', 'OpenCV', 'Android NDK', 'Camera2', 'WebRTC', 'RTMP'],
  },
  {
    title: 'Commercial Translation Diagnostic',
    statusTag: 'Contract work',
    description:
      'An AI-assisted diagnostic platform built for Data Story Strategy, a commercial translation firm. A client completes a structured intake and uploads a deck and supporting documents; the system also reads their website, then drafts a findings report with Claude. A consultant reviews and edits every report in an admin console (with Word export) before the client can see it. Also includes Stripe checkout, invitation links for sponsored engagements, Google Sign-In for admins, and automatic retry and alerting when generation fails.',
    tags: ['PHP 8.4', 'Stripe', 'PHPUnit', 'Claude API'],
    note: '440+ PHPUnit tests',
  },
  {
    title: 'fangjet.com',
    links: [{ label: 'GitHub', href: 'https://github.com/tuckercr/fangjet' }],
    description:
      "You're looking at it :) Originally a WordPress site, rebuilt using React and Vite, with every page prerendered to plain HTML at build time for speed and SEO. Served from Firebase Hosting, with Cloudflare running the DNS. The source is open on GitHub under the MIT license.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'SEO', 'Firebase Hosting', 'Cloudflare DNS'],
  },
]

const app = (name, url, description, os, category) => ({
  '@type': 'SoftwareApplication',
  name,
  url,
  description,
  operatingSystem: os,
  applicationCategory: category,
  author: { '@type': 'Person', name: 'Colin Tucker', url: 'https://fangjet.com/' },
})

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    app('Elsie Family', 'https://www.elsiefamily.com',
      'Accessibility-focused Android launcher for older adults, with a paired caregiver companion app.',
      'Android', 'UtilitiesApplication'),
    app('Furcast Weather', 'https://github.com/tuckercr/cats-dogs',
      'A pet weather app built natively for Android (Kotlin, Compose) and iOS (Swift, SwiftUI).',
      'Android, iOS', 'WeatherApplication'),
    app('Hark', 'https://github.com/tuckercr/wakewordapp',
      'Fully on-device wake word speech recognition for Android, powered by PocketSphinx.',
      'Android', 'UtilitiesApplication'),
  ].map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })),
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-page px-8 pb-20 narrow:px-5 narrow:pb-16">
      <SEO
        title="Projects"
        description="Android and iOS apps by Colin Tucker: Elsie accessibility launcher, Furcast Weather, Hark wake word detection, Rolo CRM, and more."
        path="/projects"
        jsonLd={JSON_LD}
      />
      <div className="mb-12 border-b border-border pt-12 pb-10 narrow:pt-8 narrow:pb-7">
        <span className="fj-label">// public projects &amp; private contract work</span>
        <h1 className="mt-2.5 mb-4 text-5xl leading-tight narrow:text-4xl">Projects</h1>
        <p className="m-0 max-w-2xl text-lg leading-relaxed text-muted">Public projects and private contract work, built with the habits I bring to production: clear architecture, CI, honest error handling, and real users on the other end.</p>
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
