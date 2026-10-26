import SEO from '../components/SEO'

// Privacy policy for the Sunny & Misty apps (iOS and Android). Linked from the apps and their
// store listings, deliberately not from the site's navigation or footer.
export default function SunnyMistyPrivacy() {
  return (
    <div className="px-8 pt-14 pb-20 narrow:px-5 narrow:pt-10 narrow:pb-16">
      <SEO
        title="Sunny & Misty Privacy Policy"
        description="How the Sunny & Misty weather apps for iPhone, iPad and Android handle your data."
        path="/weather"
      />
      <div className="legal-prose mx-auto max-w-3xl">
        <span className="fj-label">// sunny &amp; misty</span>
        <h1 className="mb-3 text-5xl leading-tight narrow:text-3xl">Sunny &amp; Misty Privacy Policy</h1>
        <p className="font-mono">Last updated: October 26, 2026</p>

        <h2>Summary</h2>
        <p>Sunny &amp; Misty is a weather app made by FangJet LLC ("we", "our", or "us") for iPhone, iPad and Android. It needs no account, shows no ads and does not track you across other apps or websites. We do not sell or rent your information.</p>
        <p>To show you the weather, the app sends the location you ask about to weather services. It also sends anonymous usage statistics, which you can turn off. This page explains exactly what is sent, to whom, and why.</p>

        <h2>Information kept on your device</h2>
        <ul>
          <li><strong>Saved cities and settings</strong>: the cities you add, your units choice and your other settings are stored only on your device.</li>
          <li><strong>Cached weather</strong>: the latest forecast for each city is stored on your device so the app opens instantly and works offline.</li>
          <li><strong>Notifications</strong>: the daily 9 AM, 1 PM and 7 PM weather updates are scheduled on your device.</li>
        </ul>
        <p>On Android, the system's Auto Backup may copy the app's settings and saved cities to your own Google account, as it does for most apps. You can turn this off in your device's backup settings. Deleting the app removes everything stored on the device.</p>

        <h2>Location</h2>
        <p>Location access is optional. If you allow it, the app reads your device's location to show the weather where you are. Without it, you can add any city by name.</p>
        <p>To fetch a forecast, the app sends the coordinates of the city you are viewing (your current location, if you chose it) to the weather services listed below. City names you type are sent to OpenWeather to find matching places. We do not run servers of our own, so your location is never sent to or stored by FangJet. The weather services receive it only to answer the request; their own privacy policies describe how long they keep request logs.</p>

        <h2>Usage statistics</h2>
        <p>The app uses Google Analytics for Firebase to count how its features are used, so we can improve it. It records four events: finishing onboarding, adding a city, opening Settings, and a weather request failing (with the type of error, such as "offline"). Firebase also records standard app events such as app opens, sessions and updates.</p>
        <p>With these, Firebase receives your device model, operating system version, app version, language, and an approximate region worked out from your IP address. Events are tied to a random identifier that Firebase creates for each installation of the app. They are not linked to your name, email, contacts or any account, and the app does not use your device's advertising identifier.</p>
        <p>Google keeps this data for 14 months. On iPhone and iPad in the European Union, the rest of the European Economic Area, the United Kingdom and Switzerland, usage statistics stay off until you turn them on. Wherever you are, you can turn them on or off at any time:</p>
        <ul>
          <li><strong>iPhone and iPad</strong>: Settings, then Privacy, then Share usage statistics.</li>
          <li><strong>Android</strong>: Settings, then About, then Share usage statistics.</li>
        </ul>
        <p>When it is off, the app stops sending analytics events, including Firebase's automatic ones.</p>

        <h2>Remote configuration</h2>
        <p>The app downloads settings from Firebase Remote Config, which lets us switch features such as the radar on or off and adjust the walk-time advice without an app update. To do this, Firebase receives your device's country and language codes, time zone, operating system version and app identifiers.</p>

        <h2>Crash reports (Android)</h2>
        <p>If the Android app crashes, Firebase Crashlytics sends a crash report containing the technical details of the error, your device model and operating system version, so we can fix the problem. Crash reports do not include your location or saved cities and are not linked to your identity.</p>

        <h2>Third-party services</h2>
        <p>The app talks to these services directly from your device. Like any website, each one also receives your IP address when the app contacts it.</p>
        <ul>
          <li><strong>OpenWeather</strong>: current conditions, forecasts and city search. <a href="https://openweather.co.uk/privacy-policy" target="_blank" rel="noopener noreferrer">OpenWeather privacy policy</a></li>
          <li><strong>Open-Meteo</strong>: hourly and 7-day forecasts. <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener noreferrer">Open-Meteo terms and privacy</a></li>
          <li><strong>RainViewer</strong>: radar images for the map area around your city. <a href="https://www.rainviewer.com/privacy.html" target="_blank" rel="noopener noreferrer">RainViewer privacy policy</a></li>
          <li><strong>OpenStreetMap</strong>: the base map under the radar, for the same map area. <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">OpenStreetMap Foundation privacy policy</a></li>
          <li><strong>Google Firebase</strong>: usage statistics, remote configuration and, on Android, crash reports. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Privacy and security in Firebase</a></li>
        </ul>

        <h2>Children</h2>
        <p>Sunny &amp; Misty is not directed at children under 13, and we do not knowingly collect personal information from them.</p>

        <h2>Your choices and rights</h2>
        <ul>
          <li>You can deny or revoke location and notification access in your device's settings at any time.</li>
          <li>You can turn off usage statistics in the app's Settings.</li>
          <li>Deleting the app removes all data it stored on your device.</li>
        </ul>
        <p>Depending on where you live, you may have the right to access or delete personal data held about you. Because the analytics data is not linked to your identity, we usually cannot find a specific person's data, but contact us and we will help where we can.</p>

        <h2>Changes to this policy</h2>
        <p>If we change how the app handles your data, we will update this page and the date at the top.</p>

        <h2>Contact</h2>
        <p>Questions about this policy or the app:</p>
        <p className="font-mono">FangJet LLC · <a href="mailto:colin@fangjet.com">colin@fangjet.com</a></p>
      </div>
    </div>
  )
}
