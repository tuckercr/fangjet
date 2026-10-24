import './CRTWidget.css'

export default function CRTWidget() {
  return (
    <div className="crt" aria-hidden="true">
      <div className="crt-bezel">
        <span className="crt-brand">FANGJET DEV SYSTEM &nbsp;///&nbsp; MODEL 1</span>
      </div>
      <div className="crt-screen">
        <div className="crt-dim">  ┌─────────────────────────────┐</div>
        <div className="crt-dim">  │  PROJECT: my-app  v1.0.0   │</div>
        <div className="crt-dim">  └─────────────────────────────┘</div>
        <div className="crt-blank">&nbsp;</div>
        <div>  /workspace/my-app/</div>
        <div>  ├── app/</div>
        <div>  │   └── src/main/</div>
        <div>  │       ├── AndroidManifest.xml</div>
        <div>  │       ├── kotlin/com/myapp/</div>
        <div>  │       │   ├── <span className="crt-bright">MainActivity.kt</span></div>
        <div>  │       │   ├── ui/</div>
        <div>  │       │   └── data/</div>
        <div>  │       └── res/</div>
        <div>  ├── build.gradle.kts</div>
        <div>  └── .github/workflows/</div>
        <div className="crt-blank">&nbsp;</div>
        <div className="crt-dim">  ─────────────────────────────</div>
        <div>  BUILD  <span className="crt-bright">READY</span></div>
        <div>  TESTS  <span className="crt-bright">47 PASSING</span></div>
        <div>  CI     <span className="crt-bright">ACTIVE</span></div>
        <div className="crt-dim">  ─────────────────────────────</div>
        <div className="crt-blank">&nbsp;</div>
        <div>  &gt; <span className="crt-cursor">█</span></div>
      </div>
    </div>
  )
}
