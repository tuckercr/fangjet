// Phosphor text glow, and the dimmer and brighter variants of it.
const dim = 'text-[#1a6a1a] [text-shadow:none]'
const bright = 'font-semibold text-[#66ff66] [text-shadow:0_0_10px_rgba(102,255,102,0.85)]'

// The bezel geometry (380px wide, 14px corners, 3px frame, and the 11px scanline corners in .crt::after)
// is the drawing itself, so it stays exact rather than snapped to the scale.
export default function CRTWidget() {
  return (
    <div className="crt relative w-[380px] shrink-0 overflow-hidden rounded-[14px] border-3 border-[#1c1c1c] bg-[#080f08]" aria-hidden="true">
      <div className="border-b-2 border-[#060f06] bg-[#111] px-4 py-2">
        <span className="font-mono text-xs tracking-widest text-[#2a5a2a] uppercase">FANGJET DEV SYSTEM &nbsp;///&nbsp; MODEL 1</span>
      </div>
      <div className="bg-[#020f02] px-5 pt-4 pb-6 font-mono text-xs leading-relaxed text-[#33cc33] [text-shadow:0_0_6px_rgba(51,204,51,0.65)]">
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
