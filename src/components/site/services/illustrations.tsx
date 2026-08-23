export function ServerDbIllustration() {
  return (
    <svg viewBox="0 0 240 220" className="w-full max-w-[280px]" fill="none">
      {/* Server rack */}
      <rect x="20" y="20" width="100" height="140" rx="12" className="fill-card" stroke="currentColor" strokeOpacity="0.15" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="34" y={38 + i * 40} width="72" height="24" rx="6" className="fill-secondary" />
          <circle cx="46" cy={50 + i * 40} r="3" className="fill-primary pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />
          <rect x="58" y={47 + i * 40} width="34" height="6" rx="3" className="fill-muted-foreground/30" />
        </g>
      ))}

      {/* Database cylinder */}
      <g transform="translate(150,30)">
        <ellipse cx="45" cy="15" rx="45" ry="15" className="fill-primary/20" stroke="currentColor" strokeOpacity="0.2" />
        <path d="M0 15 V100 A45 15 0 0 0 90 100 V15" className="fill-card" stroke="currentColor" strokeOpacity="0.15" />
        <ellipse cx="45" cy="50" rx="45" ry="15" className="fill-none" stroke="currentColor" strokeOpacity="0.15" />
        <ellipse cx="45" cy="85" rx="45" ry="15" className="fill-none" stroke="currentColor" strokeOpacity="0.15" />
      </g>

      {/* Connecting sync line */}
      <path
        d="M120 90 C 140 90, 140 90, 150 90"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="dash-flow text-primary"
      />
    </svg>
  );
}

export function AutomationIllustration() {
  return (
    <svg viewBox="0 0 260 140" className="w-full max-w-[320px]" fill="none">
      {/* three nodes connected in a pipeline, gently pulsing */}
      {[
        { x: 30, label: "Input" },
        { x: 130, label: "AI Agent" },
        { x: 230, label: "Action" },
      ].map((n, i) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy={60}
            r="26"
            className={i === 1 ? "fill-primary/20" : "fill-secondary"}
            stroke="currentColor"
            strokeOpacity="0.15"
          />
          {i === 1 && (
            <circle cx={n.x} cy={60} r="26" className="fill-none stroke-primary spin-slow origin-center" strokeWidth="2" strokeDasharray="10 8" />
          )}
          <circle cx={n.x} cy={60} r="6" className="fill-primary pulse-dot" style={{ animationDelay: `${i * 0.4}s` }} />
        </g>
      ))}
      <path d="M56 60 H104" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="4 4" className="dash-flow text-primary" />
      <path d="M156 60 H204" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="4 4" className="dash-flow text-primary" />
    </svg>
  );
}
