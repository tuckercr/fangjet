import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <div className="px-8 pt-14 pb-20 narrow:px-5 narrow:pt-10 narrow:pb-16">
      <SEO
        title="Privacy Policy"
        description="How fangjet.com handles visitor data."
        path="/privacy-policy"
      />
      <div className="legal-prose mx-auto max-w-3xl">
        <span className="fj-label">// legal</span>
        <h1 className="mb-3 text-5xl leading-tight narrow:text-3xl">Privacy Policy</h1>
        <p className="font-mono">Last updated: October 24, 2026</p>

        <h2>Overview</h2>
        <p>This policy covers fangjet.com, the portfolio website of Colin Tucker (FangJet LLC). It does not cover any app or product that is linked from the site; those have their own policies.</p>
        <p>The site does not use cookies, advertising, or cross-site tracking, and does not ask you to create an account. It does use privacy-friendly analytics to count visits (see Analytics below).</p>

        <h2>Contact Form</h2>
        <p>If you send a message through the contact form, the name, email address, and message you enter are sent to Formspree, the service that delivers form submissions to me by email. I use that information only to read and reply to your message. I do not sell it or share it with anyone else.</p>
        <p>You can also email me directly at the address below instead of using the form.</p>

        <h2>Analytics</h2>
        <p>The site uses Cloudflare Web Analytics to count visits and see which pages are read, where visitors come from, and what kinds of devices they use. It does not use cookies or local storage, does not build a profile of you, and does not follow you across other sites. Cloudflare processes your IP address to produce these aggregate statistics but does not use it to track individuals.</p>

        <h2>Server Logs</h2>
        <p>The site is hosted on Google Firebase Hosting. Like most web hosts, it may record standard request information such as IP address, browser type, and the pages requested, for security and operation of the service. I do not use this data to identify or profile visitors.</p>

        <h2>Third-Party Services</h2>
        <p>Pages load fonts from Google Fonts, which means your browser requests them from Google's servers and Google receives your IP address as part of that request. These services have their own privacy policies:</p>
        <ul>
          <li><strong>Formspree</strong> (contact form): <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">formspree.io/legal/privacy-policy</a></li>
          <li><strong>Cloudflare Web Analytics</strong> (visit statistics): <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">cloudflare.com/privacypolicy</a></li>
          <li><strong>Google Firebase Hosting and Google Fonts</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
        </ul>

        <h2>Your Rights</h2>
        <p>Depending on where you live, you may have the right to ask what personal information I hold about you, or to have it corrected or deleted. If you have sent a message through the form or by email, contact me and I will help.</p>

        <h2>Children</h2>
        <p>This site is not directed at children under 13, and I do not knowingly collect their personal information.</p>

        <h2>Changes to This Policy</h2>
        <p>If this policy changes, I will update the "last updated" date at the top of this page.</p>

        <h2>Contact</h2>
        <p>Questions about this policy:</p>
        <p className="font-mono">FangJet LLC · <a href="mailto:colin@fangjet.com">colin@fangjet.com</a></p>
      </div>
    </div>
  )
}
