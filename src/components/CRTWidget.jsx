// Phosphor text glow, and the dimmer and brighter variants of it.
const dim = 'text-[#1a6a1a] [text-shadow:none]'
const bright = 'font-semibold text-[#66ff66] [text-shadow:0_0_10px_rgba(102,255,102,0.85)]'

export default function CRTWidget() {
  return (
    <div className="crt relative w-[380px] shrink-0 overflow-hidden rounded-[14px] border-3 border-[#1c1c1c] bg-[#080f08]" aria-hidden="true">
      <div className="border-b-2 border-[#060f06] bg-[#111] px-4 py-2">
        <span className="font-mono text-[0.65rem] tracking-[0.12em] text-[#2a5a2a] uppercase">FANGJET DEV SYSTEM &nbsp;///&nbsp; MODEL 1</span>
      </div>
      <div className="bg-[#020f02] px-5 pt-4.5 pb-5.5 font-mono text-[0.78rem] leading-[1.7] text-[#33cc33] [text-shadow:0_0_6px_rgba(51,204,51,0.65)]">
        <div className={dim}>  ┌─────────────────────────────┐</div>
        <div className={dim}>  │  PROJECT: my-app  v1.0.0   │</div>
        <div className={dim}>  └─────────────────────────────┘</div>
        <div className="select-none">&nbsp;</div>
        <div>  /workspace/my-app/</div>
        <div>  ├── app/</div>
        <div>  │   └── src/main/</div>
        <div>  │       ├── AndroidManifest.xml</div>
        <div>  │       ├── kotlin/com/myapp/</div>
        <div>  │       │   ├── <span className={bright}>MainActivity.kt</span></div>
        <div>  │       │   ├── ui/</div>
        <div>  │       │   └── data/</div>
        <div>  │       └── res/</div>
        <div>  ├── build.gradle.kts</div>
        <div>  └── .github/workflows/</div>
        <div className="select-none">&nbsp;</div>
        <div className={dim}>  ─────────────────────────────</div>
        <div>  BUILD  <span className={bright}>READY</span></div>
        <div>  TESTS  <span className={bright}>47 PASSING</span></div>
        <div>  CI     <span className={bright}>ACTIVE</span></div>
        <div className={dim}>  ─────────────────────────────</div>
        <div className="select-none">&nbsp;</div>
        <div>  &gt; <span className="inline-block animate-crt-blink">█</span></div>
      </div>
    </div>
  )
}
