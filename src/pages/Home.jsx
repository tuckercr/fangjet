import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Home.css'

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
    <div className="home">
      <SEO path="/" jsonLd={JSON_LD} />

      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-text">
            <span className="fj-label">// senior android engineer</span>
            <h1 className="home-headline">Colin Tucker</h1>
            <p className="home-subhead">
              10+ years shipping production Android. Former Staff Engineer and Android team lead,
              then senior at Digital Turbine on carrier apps used by millions of people daily.
            </p>
            <div className="home-cta-row">
              <a href="/colin-tucker-resume.pdf" target="_blank" rel="noopener noreferrer" className="fj-btn fj-btn-primary">Download resume ↓</a>
              <Link to="/projects" className="fj-btn fj-btn-secondary">See my work</Link>
              <Link to="/contact" className="fj-btn fj-btn-secondary">Get in touch</Link>
            </div>
          </div>
          <div className="home-hero-photo">
            <img src="/headshot.webp" alt="Colin Tucker" width="431" height="440" className="home-headshot" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="home-about">
        <div className="home-about-inner">
          <span className="fj-label">// about me</span>
          <p className="home-about-lead">
            Based in Knoxville, TN. I've been building Android apps since the early days of the platform,
            shipping across accessibility tools, weather apps, audio processing, computer vision, and CRM.
            Open to senior and staff mobile roles.
          </p>
          <p className="home-about-detail">
            I care about clean architecture, tests that catch real bugs, CI that fails fast, and code the next
            person can actually work with. I write Kotlin and Swift natively. A significant portion of my work
            is contract work that never makes it onto a public GitHub profile: a whiteboard camera app,
            a relationship CRM with 400+ unit tests, and an AI-assisted diagnostic platform.
          </p>
        </div>
      </section>

      {/* Value cards */}
      <section className="home-cards">
        {CARDS.map(({ title, body }) => (
          <div key={title} className="home-card">
            <span className="home-card-icon">&gt;_</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </section>

      {/* Stack */}
      <section className="home-stack">
        <span className="home-stack-label fj-label">// tech stack</span>
        <div className="home-stack-groups">
          {STACK.map(({ group, tags }) => (
            <div key={group} className="home-stack-row">
              <span className="home-stack-group">{group}</span>
              <div className="home-tags">
                {tags.map(t => <span key={t} className="home-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
