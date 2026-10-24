import SEO from '../components/SEO'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <div className="privacy">
      <SEO
        title="Privacy Policy"
        description="How fangjet.com handles visitor data."
        path="/privacy-policy"
      />
      <div className="privacy-inner">
        <span className="fj-label">// legal</span>
        <h1>Privacy Policy</h1>
        <p className="privacy-date">Last updated: October 23, 2026</p>

        <h2>Overview</h2>
        <p>This policy covers fangjet.com, the portfolio website of Colin Tucker (FangJet LLC). It does not cover any app or product that is linked from the site; those have their own policies.</p>
        <p>The site does not use cookies, analytics, advertising, or tracking of any kind, and does not ask you to create an account.</p>

        <h2>Contact Form</h2>
        <p>If you send a message through the contact form, the name, email address, and message you enter are sent to Formspree, the service that delivers form submissions to me by email. I use that information only to read and reply to your message. I do not sell it or share it with anyone else.</p>
        <p>You can also email me directly at the address below instead of using the form.</p>

        <h2>Server Logs</h2>
        <p>The site is hosted on Google Firebase Hosting. Like most web hosts, it may record standard request information such as IP address, browser type, and the pages requested, for security and operation of the service. I do not use this data to identify or profile visitors.</p>

        <h2>Third-Party Services</h2>
        <p>Pages load fonts from Google Fonts, which means your browser requests them from Google's servers and Google receives your IP address as part of that request. These services have their own privacy policies:</p>
        <ul>
          <li><strong>Formspree</strong> (contact form): <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">formspree.io/legal/privacy-policy</a></li>
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
        <p className="privacy-contact">FangJet LLC · <a href="mailto:colin@fangjet.com">colin@fangjet.com</a></p>
      </div>
    </div>
  )
}
