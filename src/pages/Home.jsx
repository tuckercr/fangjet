import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const CARDS = [
  {
    title: 'Engineered',
    body: 'Clean architecture, dependency injection, and real CI/CD. Multi-module Kotlin, Hilt, and MVVM written for the engineer who inherits it.',
  },
  {
    title: 'Tested',
    body: 'Unit tests on business logic, not just smoke tests. 260+ on Elsie, 400+ on Rolo CRM. I write tests because bugs in production are expensive.',
  },
  {
    title: 'Shipped',
    body: 'Play Store submissions, release signing, crash reporting, and remote config rollout. At Digital Turbine, the carrier apps I built features for reached millions of daily users across AT&T, Cricket, and U.S. Cellular.',
  },
]

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://fangjet.com/#website',
      url: 'https://fangjet.com/',
      name: 'Colin Tucker',
      description: 'Portfolio of Colin Tucker, senior Android engineer.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      url: 'https://fangjet.com/',
      isPartOf: { '@id': 'https://fangjet.com/#website' },
      mainEntity: {
        '@type': 'Person',
        name: 'Colin Tucker',
        jobTitle: 'Senior Android Engineer',
        knowsAbout: ['Android', 'Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'Firebase'],
        sameAs: ['https://github.com/tuckercr', 'https://www.linkedin.com/in/colin-r-tucker/'],
      },
    },
  ],
}

const STACK = [
  {
    group: 'android',
    tags: [
      'Kotlin', 'Java', 'Jetpack Compose', 'Coroutines / Flow', 'Hilt', 'Room',
      'WorkManager', 'Retrofit / OkHttp', 'Accessibility', 'Android NDK / JNI',
      'MVVM / Clean Architecture', 'Multi-Module Architecture', 'SDK / API Design', 'Performance Profiling',
      'JUnit / MockK', 'Compose UI Testing', 'Gradle / Kotlin DSL',
      'CI/CD (GitHub Actions, GitLab)', 'Firebase (Crashlytics, Analytics, Remote Config, FCM)',
    ],
  },
  {
    group: 'ios',
    tags: ['Swift', 'SwiftUI', 'Observation', 'URLSession / Codable', 'CoreLocation', 'BackgroundTasks', 'XCTest'],
  },
  {
    group: 'web',
    tags: [
      'React', 'Vite', 'JavaScript', 'HTML / CSS', 'PHP', 'WordPress', 'MariaDB',
      'PHPUnit', 'Stripe', 'Firebase Hosting', 'MCP', 'Claude API',
    ],
  },
]

export default function Home() {
  return (
    <div>
      <SEO path="/" jsonLd={JSON_LD} />

      {/* Hero */}
      <section className="hero-gradient border-b border-border px-8 pb-14 narrow:px-5 narrow:pb-12">
        <div className="mx-auto flex max-w-page items-center gap-16 pt-14 narrow:flex-col-reverse narrow:gap-8 narrow:pt-9">
          <div className="flex-1">
            <span className="fj-label">// senior android engineer</span>
            <h1 className="mt-4 mb-5 text-7xl font-bold narrow:text-5xl text-text">Colin Tucker</h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted narrow:max-w-full">
              10+ years shipping production Android. Former Staff Engineer and Android team lead,
              then senior at Digital Turbine on carrier apps used by millions of people daily.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="/colin-tucker-resume.pdf" target="_blank" rel="noopener noreferrer" className="fj-btn fj-btn-primary">Download resume ↓</a>
              <Link to="/projects" className="fj-btn fj-btn-secondary">See my work</Link>
              <Link to="/contact" className="fj-btn fj-btn-secondary">Get in touch</Link>
            </div>
          </div>
          <div className="shrink-0">
            <img
              src="/headshot.webp"
              alt="Colin Tucker"
              width="431"
              height="440"
              className="block size-56 rounded-full border-2 border-border object-cover object-top grayscale-10 narrow:size-40"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-border px-8 py-14 narrow:px-5">
        <div className="mx-auto max-w-page">
          <span className="fj-label">// about me</span>
          <p className="mb-5 max-w-3xl text-xl leading-relaxed font-normal text-text">
            Based near Knoxville, TN. I've been building Android apps since the early days of the platform,
            shipping across accessibility tools, weather apps, audio processing, computer vision, and CRM.
            Open to senior and staff mobile roles.
          </p>
          <p className="mb-4 max-w-3xl text-lg leading-relaxed text-muted">
            I care about clean architecture, tests that catch real bugs, CI that fails fast, and code the next
            person can actually work with. I write Kotlin and Swift natively. A significant portion of my work
            is contract work that never makes it onto a public GitHub profile: a whiteboard camera app,
            a relationship CRM with 400+ unit tests, and an AI-assisted diagnostic platform.
          </p>
        </div>
      </section>

      {/* Value cards */}
      <section className="mx-auto flex max-w-page gap-5 border-b border-border px-8 py-14 narrow:flex-col narrow:px-5 narrow:py-10">
        {CARDS.map(({ title, body }) => (
          <div
            key={title}
            className="min-w-48 flex-1 rounded-lg border border-border bg-surface px-6 py-7 transition-colors duration-200 hover:border-accent-hover"
          >
            <span className="mb-3.5 block font-mono text-xl leading-relaxed font-bold text-accent-hover">&gt;_</span>
            <h3 className="mb-2.5 text-lg leading-tight text-text">{title}</h3>
            <p className="m-0 text-base leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </section>

      {/* Stack. The fixed 90px label column lines the three tag lists up; grid tracks have no scale step. */}
      <section className="mx-auto max-w-page px-8 pt-12 pb-16 narrow:px-5">
        <span className="fj-label">// tech stack</span>
        <div className="mt-5 flex flex-col gap-5">
          {STACK.map(({ group, tags }) => (
            <div key={group} className="grid grid-cols-[90px_1fr] items-baseline gap-4 narrow:grid-cols-1 narrow:gap-2.5">
              <span className="font-mono text-sm leading-relaxed text-accent-hover before:content-['//_']">{group}</span>
              <div className="flex flex-wrap gap-2.5">
                {tags.map(t => (
                  <span
                    key={t}
                    className="rounded-sm border border-border bg-surface px-3.5 py-1.5 font-mono text-sm leading-relaxed text-muted transition-colors duration-150 hover:border-accent-hover hover:text-accent-hover"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
