"use client"

export function CloudPulseIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden style={{ shapeRendering: "geometricPrecision" }}>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="var(--brand-blue)" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>

        {/* softer edge for cloud stroke only */}
        <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* separate halo glow to keep a perfectly round ring */}
        <filter id="haloGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" result="hblur" />
          <feMerge>
            <feMergeNode in="hblur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cloud shape with subtle glow */}
      <g
        fill="none"
        stroke="url(#g1)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow1)"
      >
        <path d="M9 31a7 7 0 0 1 4-13 10 10 0 0 1 20 2 6 6 0 0 1 1 .1 6 6 0 0 1 0 11.9H14" />
      </g>

      {/* Clean halo ring (no fill), softly glowing and pulsing radius */}
      <circle
        cx="24"
        cy="24"
        r="13.5"
        fill="none"
        stroke="url(#g1)"
        strokeWidth="2"
        opacity="0.45"
        filter="url(#haloGlow)"
      >
        <animate attributeName="r" values="12.5;14.5;12.5" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.35;0.7;0.35" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* Neat orbit ring separated from glow to keep edges crisp */}
      <g fill="none" stroke="url(#g1)" strokeWidth="1.25" strokeLinecap="round">
        <circle cx="24" cy="24" r="16.5" strokeDasharray="3 11" opacity="0.55">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 24 24"
            to="360 24 24"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Small pulse node for interest; kept crisp */}
      <circle cx="34" cy="17" r="2.5" fill="url(#g1)" opacity="0.9">
        <animate attributeName="r" values="2.5;3.6;2.5" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function ShieldPulseIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="var(--brand-blue)" />
        </linearGradient>
        <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" filter="url(#glow2)">
        <path d="M24 6l14 6v10c0 10-8 16-14 20-6-4-14-10-14-20V12l14-6z" />
        <path d="M18 24l4 4 8-8" strokeDasharray="4 6">
          <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2.4s" repeatCount="indefinite" />
        </path>
        <path d="M24 6l14 6v10c0 10-8 16-14 20-6-4-14-10-14-20V12l14-6z" opacity="0.5">
          <animate attributeName="opacity" values="0.25;0.9;0.25" dur="2.8s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  )
}

export function CompassPulseIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="g3" x1="0" x2="1">
          <stop offset="0" stopColor="#f59e0b" />
          <stop offset="1" stopColor="var(--brand-blue)" />
        </linearGradient>
        <filter id="glow3" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" filter="url(#glow3)">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="18" strokeDasharray="5 7" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 24 24"
            to="-360 24 24"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>
        <path d="M20 28l3-11 11-3-3 11z" fill="url(#g3)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 24 24"
            to="360 24 24"
            dur="5.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  )
}

export function GearsPulseIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="g4" x1="0" x2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <filter id="glow4" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" stroke="url(#g4)" strokeWidth="2" strokeLinecap="round" filter="url(#glow4)">
        <circle cx="18" cy="30" r="6">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 30"
            to="-360 18 30"
            dur="4.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="30" cy="18" r="5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 30 18"
            to="360 30 18"
            dur="4.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="18" cy="30" r="1.5" fill="#60a5fa">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M18,30 m-9,0 a9,9 0 1,1 18,0 a9,9 0 1,1 -18,0" />
        </circle>
      </g>
    </svg>
  )
}
