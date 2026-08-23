/** Simple server + database illustration for the "Backend & data" block. */
export function ServerStackIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 260" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="24" width="180" height="52" rx="12" fill="#0b1220" />
      <circle cx="40" cy="50" r="5" fill="#5eead4" />
      <rect x="58" y="45" width="90" height="6" rx="3" fill="#3a4152" />
      <rect x="18" y="86" width="180" height="52" rx="12" fill="#12192b" />
      <circle cx="40" cy="112" r="5" fill="#f0b34c" />
      <rect x="58" y="107" width="70" height="6" rx="3" fill="#3a4152" />
      <rect x="18" y="148" width="180" height="52" rx="12" fill="#0b1220" />
      <circle cx="40" cy="174" r="5" fill="#5eead4" />
      <rect x="58" y="169" width="100" height="6" rx="3" fill="#3a4152" />

      <ellipse cx="248" cy="66" rx="52" ry="20" fill="#0b1220" />
      <path
        d="M196 66v88c0 11 23 20 52 20s52-9 52-20V66"
        fill="none"
        stroke="#0b1220"
        strokeWidth="8"
      />
      <ellipse cx="248" cy="110" rx="52" ry="20" fill="none" stroke="#0b1220" strokeWidth="8" />
      <ellipse cx="248" cy="154" rx="52" ry="20" fill="none" stroke="#0b1220" strokeWidth="8" />

      <path
        d="M148 60 C 176 60, 176 66, 204 66"
        stroke="#c9871f"
        strokeWidth="3"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <path
        d="M148 112 C 176 112, 176 108, 204 108"
        stroke="#c9871f"
        strokeWidth="3"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Node / workflow illustration for the "AI-assisted development" block. */
export function AIWorkflowIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="24" width="86" height="46" rx="14" fill="#0b1220" />
      <text x="63" y="52" textAnchor="middle" fontSize="12" fill="white" fontFamily="ui-sans-serif">
        Input
      </text>

      <rect x="20" y="150" width="86" height="46" rx="14" fill="#0b1220" />
      <text
        x="63"
        y="178"
        textAnchor="middle"
        fontSize="12"
        fill="white"
        fontFamily="ui-sans-serif"
      >
        Trigger
      </text>

      <rect x="120" y="87" width="90" height="52" rx="16" fill="#c9871f" />
      <circle cx="141" cy="113" r="4" fill="white" />
      <circle cx="157" cy="113" r="4" fill="white" />
      <circle cx="173" cy="113" r="4" fill="white" />
      <circle cx="189" cy="113" r="4" fill="white" />

      <rect
        x="234"
        y="60"
        width="70"
        height="40"
        rx="12"
        fill="none"
        stroke="#0b1220"
        strokeWidth="3"
      />
      <rect
        x="234"
        y="126"
        width="70"
        height="40"
        rx="12"
        fill="none"
        stroke="#0b1220"
        strokeWidth="3"
      />

      <path d="M106 47h14M106 173h14" stroke="#0b1220" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M63 70v20a23 23 0 0 0 23 23h20"
        fill="none"
        stroke="#0b1220"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M63 150v-20a23 23 0 0 1 23-23h20"
        fill="none"
        stroke="#0b1220"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M210 100l24-20M210 126l24 20"
        stroke="#0b1220"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Two curved arrows forming a refresh loop, for the Support & growth footnote. */
export function UpdateArrows({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 28a20 20 0 0 1 34.6-13.4"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 8l7 5-3 8"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M52 36a20 20 0 0 1-34.6 13.4"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 56l-7-5 3-8"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
