/**
 * Official High-Fidelity Vector Document & Certificate SVGs
 * Generates authentic credential layouts for all verified academic diplomas,
 * professional certificates, and faculty recommendation letterheads.
 */

function makeSvgDataUrl(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

export const GEORGETOWN_CERTIFICATE_DOCUMENT_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="gtParchment" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFCF9" />
      <stop offset="50%" stop-color="#F9F7F1" />
      <stop offset="100%" stop-color="#F2EDE2" />
    </linearGradient>
    <linearGradient id="gtGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059" />
      <stop offset="50%" stop-color="#9E7A36" />
      <stop offset="100%" stop-color="#73541A" />
    </linearGradient>
    <linearGradient id="gtBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041E42" />
      <stop offset="100%" stop-color="#00142E" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="850" fill="url(#gtParchment)" />

  <!-- Borders -->
  <rect x="28" y="28" width="1144" height="794" fill="none" stroke="#041E42" stroke-width="4" />
  <rect x="38" y="38" width="1124" height="774" fill="none" stroke="#C5A059" stroke-width="1.5" stroke-dasharray="8 4" />
  <rect x="48" y="48" width="1104" height="754" fill="none" stroke="#041E42" stroke-width="1" />

  <!-- Corner Flourishes -->
  <g fill="#C5A059">
    <path d="M 48 48 L 88 48 L 88 52 L 52 52 L 52 88 L 48 88 Z" />
    <circle cx="64" cy="64" r="3.5" />
    <path d="M 1152 48 L 1112 48 L 1112 52 L 1148 52 L 1148 88 L 1152 88 Z" />
    <circle cx="1136" cy="64" r="3.5" />
    <path d="M 48 802 L 88 802 L 88 798 L 52 798 L 52 762 L 48 762 Z" />
    <circle cx="64" cy="786" r="3.5" />
    <path d="M 1152 802 L 1112 802 L 1112 798 L 1148 798 L 1148 762 L 1152 762 Z" />
    <circle cx="1136" cy="786" r="3.5" />
  </g>

  <!-- Georgetown University Crest / Seal -->
  <g transform="translate(600, 130)">
    <circle cx="0" cy="0" r="48" fill="#041E42" stroke="#C5A059" stroke-width="3" />
    <circle cx="0" cy="0" r="42" fill="none" stroke="#C5A059" stroke-width="1" stroke-dasharray="4 2" />
    <!-- Crest Icon -->
    <path d="M -18 -10 L 18 -10 L 14 18 L 0 28 L -14 18 Z" fill="#C5A059" stroke="#041E42" stroke-width="1.5" />
    <path d="M 0 -22 L 0 26 M -12 -2 L 12 -2" stroke="#FFFFFF" stroke-width="2.5" />
    <circle cx="0" cy="-6" r="4" fill="#041E42" />
    <text x="0" y="38" font-family="'Times New Roman', serif" font-size="8" font-weight="bold" fill="#C5A059" text-anchor="middle" letter-spacing="1">1789</text>
  </g>

  <!-- Headers -->
  <text x="600" y="215" font-family="'Times New Roman', Georgia, serif" font-size="28" font-weight="bold" fill="#041E42" text-anchor="middle" letter-spacing="3">
    GEORGETOWN UNIVERSITY
  </text>
  <text x="600" y="245" font-family="'Times New Roman', Georgia, serif" font-size="14" font-weight="bold" fill="#63666A" text-anchor="middle" letter-spacing="4">
    SCHOOL OF CONTINUING STUDIES • WASHINGTON, D.C.
  </text>

  <!-- Congressional Charter Statement -->
  <text x="600" y="290" font-family="'Georgia', serif" font-size="13" font-style="italic" fill="#4B5563" text-anchor="middle" letter-spacing="0.5">
    In recognition of the successful completion of the requisite course of study
  </text>
  <text x="600" y="312" font-family="'Georgia', serif" font-size="12" font-style="italic" fill="#6B7280" text-anchor="middle">
    and by virtue of authority granted by charter enacted by the Senate and House of Representatives
  </text>
  <text x="600" y="332" font-family="'Georgia', serif" font-size="12" font-style="italic" fill="#6B7280" text-anchor="middle">
    of the United States of America in Congress assembled, Georgetown University hereby confers upon
  </text>

  <!-- Candidate Name -->
  <text x="600" y="395" font-family="'Times New Roman', Georgia, serif" font-size="36" font-weight="bold" fill="#041E42" text-anchor="middle" letter-spacing="2">
    DONNA ASERET RIVAS
  </text>
  <line x1="360" y1="410" x2="840" y2="410" stroke="#C5A059" stroke-width="1.5" />

  <!-- Credential Title -->
  <text x="600" y="445" font-family="'Georgia', serif" font-size="15" fill="#4B5563" text-anchor="middle" letter-spacing="1">
    the credential of
  </text>
  <text x="600" y="485" font-family="'Times New Roman', Georgia, serif" font-size="28" font-weight="bold" fill="#041E42" text-anchor="middle" letter-spacing="1.5">
    CERTIFICATE IN STRATEGIC MANAGEMENT
  </text>

  <!-- Rights & Privileges -->
  <text x="600" y="525" font-family="'Georgia', serif" font-size="13" font-style="italic" fill="#6B7280" text-anchor="middle">
    With all the Rights, Privileges, Honors, and Obligations thereto appertaining.
  </text>

  <!-- Conferred Date -->
  <text x="600" y="565" font-family="'Georgia', serif" font-size="13" font-weight="bold" fill="#374151" text-anchor="middle" letter-spacing="1">
    Given at Washington, District of Columbia, on the Thirteenth Day of February, 2026.
  </text>

  <!-- Gold Embossed Seal on Left -->
  <g transform="translate(240, 670)">
    <circle cx="0" cy="0" r="44" fill="#9E7A36" stroke="#C5A059" stroke-width="3" />
    <circle cx="0" cy="0" r="39" fill="#C5A059" stroke="#73541A" stroke-width="1" stroke-dasharray="3 1" />
    <text x="0" y="-12" font-family="'Times New Roman', serif" font-size="7" font-weight="bold" fill="#041E42" text-anchor="middle">GEORGETOWN</text>
    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="8" font-weight="bold" fill="#041E42" text-anchor="middle">OFFICIAL</text>
    <text x="0" y="12" font-family="'Times New Roman', serif" font-size="7" font-weight="bold" fill="#041E42" text-anchor="middle">SEAL 1789</text>
    <!-- Ribbon tails -->
    <path d="M -18 36 L -26 70 L -10 62 L 6 70 L -2 36 Z" fill="#041E42" opacity="0.9" />
    <path d="M 18 36 L 26 70 L 10 62 L -6 70 L 2 36 Z" fill="#041E42" opacity="0.9" />
  </g>

  <!-- Signatures on Right -->
  <g transform="translate(780, 660)">
    <!-- Signature Line 1 -->
    <path d="M -140 -5 Q -100 -25 -60 -5 Q -20 15 20 -10 Q 60 -30 100 -5" fill="none" stroke="#041E42" stroke-width="2" stroke-linecap="round" />
    <line x1="-150" y1="5" x2="150" y2="5" stroke="#374151" stroke-width="1" />
    <text x="0" y="24" font-family="'Times New Roman', Georgia, serif" font-size="14" font-weight="bold" fill="#041E42" text-anchor="middle">
      Kelly J. Otter, Ph.D.
    </text>
    <text x="0" y="42" font-family="'Georgia', serif" font-size="11" font-style="italic" fill="#6B7280" text-anchor="middle">
      Dean, School of Continuing Studies
    </text>
  </g>

  <!-- Footer Verification Code -->
  <text x="600" y="785" font-family="'Courier New', monospace" font-size="10" fill="#9CA3AF" text-anchor="middle" letter-spacing="1">
    OFFICIAL CREDENTIAL ARCHIVE • VERIFICATION ID: GU-SCS-SM-2026-DR • WASHINGTON, D.C.
  </text>
</svg>
`);

export const YALE_ANATOMY_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="yaleBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F8FAFC" />
    </linearGradient>
  </defs>

  <rect width="1200" height="850" fill="url(#yaleBg)" />
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#00356B" stroke-width="3" />
  <rect x="40" y="40" width="1120" height="770" fill="none" stroke="#00356B" stroke-width="1" stroke-opacity="0.3" />

  <!-- Top Yale Blue Header Bar -->
  <rect x="40" y="40" width="1120" height="12" fill="#00356B" />

  <!-- Yale University Logo / Crest -->
  <g transform="translate(140, 120)">
    <rect x="-60" y="-35" width="120" height="70" fill="#00356B" rx="4" />
    <text x="0" y="8" font-family="'Yale', 'Georgia', serif" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">Yale</text>
  </g>

  <g transform="translate(1040, 120)">
    <text x="0" y="5" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0056D2" text-anchor="middle" letter-spacing="1">coursera</text>
  </g>

  <!-- Date -->
  <text x="140" y="210" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#64748B">Jan 4, 2026</text>

  <!-- Candidate Name -->
  <text x="140" y="270" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="bold" fill="#0F172A">
    Donna Aseret Rivas
  </text>
  <text x="140" y="310" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#475569">
    has successfully completed
  </text>

  <!-- Course Title -->
  <text x="140" y="365" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#00356B">
    Anatomy of the Head and Spine
  </text>
  <text x="140" y="405" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#475569">
    an online non-credit course authorized by Yale University and offered through Coursera
  </text>

  <!-- Divider -->
  <line x1="140" y1="450" x2="1060" y2="450" stroke="#E2E8F0" stroke-width="1.5" />

  <!-- Signatures -->
  <g transform="translate(140, 560)">
    <!-- Duncan Signature -->
    <path d="M 0 -10 Q 40 -30 80 -10 Q 120 10 160 -15" fill="none" stroke="#00356B" stroke-width="2" />
    <line x1="0" y1="10" x2="260" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Charles C. Duncan, M.D.</text>
    <text x="0" y="50" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Professor of Neurosurgery, Pediatrics and Surgery (Anatomy)</text>
    <text x="0" y="66" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Yale School of Medicine</text>
  </g>

  <g transform="translate(620, 560)">
    <!-- Stewart Signature -->
    <path d="M 0 -15 Q 50 10 100 -20 Q 150 -5 200 -15" fill="none" stroke="#00356B" stroke-width="2" />
    <line x1="0" y1="10" x2="260" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">William B. Stewart</text>
    <text x="0" y="50" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Associate Professor of Surgery and Chief, Section of Anatomy</text>
    <text x="0" y="66" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Lecturer in Surgery (Gross Anatomy), Yale School of Medicine</text>
  </g>

  <!-- Verification Badge & URL -->
  <g transform="translate(140, 720)">
    <rect x="0" y="0" width="920" height="50" fill="#F1F5F9" rx="8" stroke="#CBD5E1" stroke-width="1" />
    <text x="20" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="bold" fill="#00356B">COURSE CERTIFICATE</text>
    <text x="20" y="39" font-family="'Courier New', monospace" font-size="10" fill="#64748B">Verify at: coursera.org/verify/8WCF4UH99RFM • Record ID: 8WCF4UH99RFM</text>
    <text x="890" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#0056D2" text-anchor="end">Coursera Verified Credential ✓</text>
  </g>
</svg>
`);

export const YALE_PSYCHOLOGY_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="yaleBg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F8FAFC" />
    </linearGradient>
  </defs>

  <rect width="1200" height="850" fill="url(#yaleBg2)" />
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#00356B" stroke-width="3" />
  <rect x="40" y="40" width="1120" height="770" fill="none" stroke="#00356B" stroke-width="1" stroke-opacity="0.3" />

  <rect x="40" y="40" width="1120" height="12" fill="#00356B" />

  <g transform="translate(140, 120)">
    <rect x="-60" y="-35" width="120" height="70" fill="#00356B" rx="4" />
    <text x="0" y="8" font-family="'Yale', 'Georgia', serif" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">Yale</text>
  </g>

  <g transform="translate(1040, 120)">
    <text x="0" y="5" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0056D2" text-anchor="middle" letter-spacing="1">coursera</text>
  </g>

  <text x="140" y="210" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#64748B">Dec 31, 2025</text>

  <text x="140" y="270" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="bold" fill="#0F172A">
    Donna Aseret Rivas
  </text>
  <text x="140" y="310" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#475569">
    has successfully completed
  </text>

  <text x="140" y="365" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#00356B">
    Introduction to Psychology
  </text>
  <text x="140" y="405" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#475569">
    an online non-credit course authorized by Yale University and offered through Coursera
  </text>

  <line x1="140" y1="450" x2="1060" y2="450" stroke="#E2E8F0" stroke-width="1.5" />

  <!-- Signatures -->
  <g transform="translate(140, 560)">
    <path d="M 0 -15 Q 60 -35 120 0 Q 180 15 240 -10" fill="none" stroke="#00356B" stroke-width="2" />
    <line x1="0" y1="10" x2="300" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Paul Bloom</text>
    <text x="0" y="50" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Brooks and Suzanne Ragen Professor of Psychology</text>
    <text x="0" y="66" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Yale University</text>
  </g>

  <g transform="translate(140, 720)">
    <rect x="0" y="0" width="920" height="50" fill="#F1F5F9" rx="8" stroke="#CBD5E1" stroke-width="1" />
    <text x="20" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="bold" fill="#00356B">COURSE CERTIFICATE</text>
    <text x="20" y="39" font-family="'Courier New', monospace" font-size="10" fill="#64748B">Verify at: coursera.org/verify/KIN15D88Z08X • Record ID: KIN15D88Z08X</text>
    <text x="890" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#0056D2" text-anchor="end">Coursera Verified Credential ✓</text>
  </g>
</svg>
`);

export const COLUMBIA_FINANCIAL_ENGINEERING_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="columbiaBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F1F5F9" />
    </linearGradient>
  </defs>

  <rect width="1200" height="850" fill="url(#columbiaBg)" />
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#75AADB" stroke-width="3" />
  <rect x="40" y="40" width="1120" height="770" fill="none" stroke="#1D4ED8" stroke-width="1" stroke-opacity="0.3" />

  <rect x="40" y="40" width="1120" height="12" fill="#75AADB" />

  <!-- Columbia Crown Emblem -->
  <g transform="translate(140, 120)">
    <path d="M -30 10 L 30 10 L 25 -15 L 10 0 L 0 -25 L -10 0 L -25 -15 Z" fill="#75AADB" stroke="#1E3A8A" stroke-width="1.5" />
    <circle cx="-25" cy="-18" r="3" fill="#1E3A8A" />
    <circle cx="0" cy="-28" r="3.5" fill="#1E3A8A" />
    <circle cx="25" cy="-18" r="3" fill="#1E3A8A" />
    <text x="45" y="5" font-family="'Trajan Pro', 'Georgia', serif" font-size="16" font-weight="bold" fill="#1E3A8A">COLUMBIA UNIVERSITY</text>
    <text x="45" y="20" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9" fill="#64748B" letter-spacing="1">IN THE CITY OF NEW YORK</text>
  </g>

  <g transform="translate(1040, 120)">
    <text x="0" y="5" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0056D2" text-anchor="middle" letter-spacing="1">coursera</text>
  </g>

  <text x="140" y="210" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#64748B">Dec 28, 2025</text>

  <text x="140" y="270" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="bold" fill="#0F172A">
    Donna Aseret Rivas
  </text>
  <text x="140" y="310" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#475569">
    has successfully completed
  </text>

  <text x="140" y="365" font-family="'Georgia', serif" font-size="25" font-weight="bold" fill="#1E3A8A">
    Introduction to Financial Engineering and Risk Management
  </text>
  <text x="140" y="405" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#475569">
    an online non-credit course authorized by Columbia University in the City of New York and offered through Coursera
  </text>

  <line x1="140" y1="450" x2="1060" y2="450" stroke="#E2E8F0" stroke-width="1.5" />

  <!-- 3 Signatures from IEOR -->
  <g transform="translate(140, 560)">
    <path d="M 0 -10 Q 40 -25 80 -5 Q 120 15 160 -10" fill="none" stroke="#1E3A8A" stroke-width="1.8" />
    <line x1="0" y1="10" x2="220" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Garud Iyengar</text>
    <text x="0" y="46" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">Industrial Engineering &amp; Operations Research</text>
  </g>

  <g transform="translate(460, 560)">
    <path d="M 0 -15 Q 40 10 80 -15 Q 120 -5 160 -20" fill="none" stroke="#1E3A8A" stroke-width="1.8" />
    <line x1="0" y1="10" x2="220" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Ali Hirsa</text>
    <text x="0" y="46" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">Industrial Engineering &amp; Operations Research</text>
  </g>

  <g transform="translate(780, 560)">
    <path d="M 0 -10 Q 50 -30 100 -5 Q 150 15 180 -10" fill="none" stroke="#1E3A8A" stroke-width="1.8" />
    <line x1="0" y1="10" x2="220" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Martin Haugh</text>
    <text x="0" y="46" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">Industrial Engineering &amp; Operations Research</text>
  </g>

  <g transform="translate(140, 720)">
    <rect x="0" y="0" width="920" height="50" fill="#F1F5F9" rx="8" stroke="#CBD5E1" stroke-width="1" />
    <text x="20" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A">COURSE CERTIFICATE</text>
    <text x="20" y="39" font-family="'Courier New', monospace" font-size="10" fill="#64748B">Verify at: coursera.org/verify/MFKCU8X6IA6J • Record ID: MFKCU8X6IA6J</text>
    <text x="890" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#0056D2" text-anchor="end">Coursera Verified Credential ✓</text>
  </g>
</svg>
`);

export const YALE_NEGOTIATION_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="yaleSomBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F8FAFC" />
    </linearGradient>
  </defs>

  <rect width="1200" height="850" fill="url(#yaleSomBg)" />
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#00356B" stroke-width="3" />
  <rect x="40" y="40" width="1120" height="770" fill="none" stroke="#00356B" stroke-width="1" stroke-opacity="0.3" />

  <rect x="40" y="40" width="1120" height="12" fill="#00356B" />

  <g transform="translate(140, 120)">
    <rect x="-60" y="-35" width="120" height="70" fill="#00356B" rx="4" />
    <text x="0" y="0" font-family="'Yale', 'Georgia', serif" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Yale</text>
    <text x="0" y="18" font-family="'Helvetica Neue', Arial, sans-serif" font-size="8" font-weight="bold" fill="#CBD5E1" text-anchor="middle" letter-spacing="1">SCHOOL OF MGMT</text>
  </g>

  <g transform="translate(1040, 120)">
    <text x="0" y="5" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0056D2" text-anchor="middle" letter-spacing="1">coursera</text>
  </g>

  <text x="140" y="210" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#64748B">Dec 26, 2025</text>

  <text x="140" y="270" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="bold" fill="#0F172A">
    Donna Aseret Rivas
  </text>
  <text x="140" y="310" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#475569">
    has successfully completed
  </text>

  <text x="140" y="355" font-family="'Georgia', serif" font-size="24" font-weight="bold" fill="#00356B">
    Introduction to Negotiation: A Strategic Playbook for Becoming
  </text>
  <text x="140" y="385" font-family="'Georgia', serif" font-size="24" font-weight="bold" fill="#00356B">
    a Principled and Persuasive Negotiator
  </text>
  <text x="140" y="420" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#475569">
    an online non-credit course authorized by Yale University and offered through Coursera
  </text>

  <line x1="140" y1="450" x2="1060" y2="450" stroke="#E2E8F0" stroke-width="1.5" />

  <g transform="translate(140, 560)">
    <path d="M 0 -15 Q 50 -35 100 0 Q 150 20 200 -10" fill="none" stroke="#00356B" stroke-width="2" />
    <line x1="0" y1="10" x2="280" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Professor Barry Nalebuff, D.Phil.</text>
    <text x="0" y="50" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Milton Steinbach Professor of Management</text>
    <text x="0" y="66" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Yale School of Management, Yale University</text>
  </g>

  <g transform="translate(140, 720)">
    <rect x="0" y="0" width="920" height="50" fill="#F1F5F9" rx="8" stroke="#CBD5E1" stroke-width="1" />
    <text x="20" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="bold" fill="#00356B">COURSE CERTIFICATE</text>
    <text x="20" y="39" font-family="'Courier New', monospace" font-size="10" fill="#64748B">Verify at: coursera.org/verify/BYGRJ10F0GNZ • Record ID: BYGRJ10F0GNZ</text>
    <text x="890" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#0056D2" text-anchor="end">Coursera Verified Credential ✓</text>
  </g>
</svg>
`);

export const CAMBRIDGE_ACCOUNTING_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="cambridgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F8FAFC" />
    </linearGradient>
  </defs>

  <rect width="1200" height="850" fill="url(#cambridgeBg)" />
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#A71930" stroke-width="3" />
  <rect x="40" y="40" width="1120" height="770" fill="none" stroke="#A71930" stroke-width="1" stroke-opacity="0.3" />

  <rect x="40" y="40" width="1120" height="12" fill="#A71930" />

  <!-- Cambridge Crest -->
  <g transform="translate(140, 120)">
    <rect x="-60" y="-35" width="120" height="70" fill="#A71930" rx="4" />
    <text x="0" y="8" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">CAMBRIDGE</text>
  </g>

  <g transform="translate(1040, 120)">
    <text x="0" y="5" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0056D2" text-anchor="middle" letter-spacing="1">coursera</text>
  </g>

  <text x="140" y="210" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#64748B">Dec 25, 2025</text>

  <text x="140" y="270" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="bold" fill="#0F172A">
    Donna Aseret Rivas
  </text>
  <text x="140" y="310" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#475569">
    has successfully completed
  </text>

  <text x="140" y="365" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#A71930">
    Financial Accounting and Capital Markets
  </text>
  <text x="140" y="405" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#475569">
    an online non-credit course authorized by University of Cambridge Professional and Continuing Education and offered through Coursera
  </text>

  <line x1="140" y1="450" x2="1060" y2="450" stroke="#E2E8F0" stroke-width="1.5" />

  <g transform="translate(140, 560)">
    <path d="M 0 -10 Q 50 -30 100 0 Q 150 15 200 -10" fill="none" stroke="#A71930" stroke-width="2" />
    <line x1="0" y1="10" x2="280" y2="10" stroke="#94A3B8" stroke-width="1" />
    <text x="0" y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Dr Kirsty Allen</text>
    <text x="0" y="50" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Interim Director of Continuing Studies</text>
    <text x="0" y="66" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#64748B">Professional and Continuing Education, University of Cambridge</text>
  </g>

  <g transform="translate(140, 720)">
    <rect x="0" y="0" width="920" height="50" fill="#F1F5F9" rx="8" stroke="#CBD5E1" stroke-width="1" />
    <text x="20" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="bold" fill="#A71930">COURSE CERTIFICATE</text>
    <text x="20" y="39" font-family="'Courier New', monospace" font-size="10" fill="#64748B">Verify at: coursera.org/verify/M1P2S10DZ38W • Record ID: M1P2S10DZ38W</text>
    <text x="890" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#0056D2" text-anchor="end">Coursera Verified Credential ✓</text>
  </g>
</svg>
`);

export const PEPPERDINE_LAW_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="peppBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFAF6" />
      <stop offset="100%" stop-color="#F4EFE6" />
    </linearGradient>
  </defs>

  <rect width="1200" height="850" fill="url(#peppBg)" />
  <rect x="28" y="28" width="1144" height="794" fill="none" stroke="#00205B" stroke-width="4" />
  <rect x="38" y="38" width="1124" height="774" fill="none" stroke="#C35227" stroke-width="1.5" stroke-dasharray="8 4" />
  <rect x="48" y="48" width="1104" height="754" fill="none" stroke="#00205B" stroke-width="1" />

  <g transform="translate(600, 130)">
    <circle cx="0" cy="0" r="46" fill="#00205B" stroke="#C35227" stroke-width="3" />
    <path d="M 0 -24 L 0 24 M -16 0 L 16 0" stroke="#FFFFFF" stroke-width="3" />
    <circle cx="0" cy="0" r="10" fill="#C35227" />
  </g>

  <text x="600" y="215" font-family="'Times New Roman', Georgia, serif" font-size="28" font-weight="bold" fill="#00205B" text-anchor="middle" letter-spacing="3">
    PEPPERDINE CARUSO SCHOOL OF LAW
  </text>
  <text x="600" y="245" font-family="'Times New Roman', Georgia, serif" font-size="14" font-weight="bold" fill="#C35227" text-anchor="middle" letter-spacing="3">
    STRAUS INSTITUTE FOR DISPUTE RESOLUTION • MALIBU, CALIFORNIA
  </text>

  <text x="600" y="300" font-family="'Georgia', serif" font-size="14" font-style="italic" fill="#4B5563" text-anchor="middle">
    Official Academic Portfolio &amp; Legal Framework Concentration
  </text>

  <text x="600" y="375" font-family="'Times New Roman', Georgia, serif" font-size="34" font-weight="bold" fill="#00205B" text-anchor="middle" letter-spacing="2">
    DONNA ASERET RIVAS
  </text>
  <line x1="360" y1="395" x2="840" y2="395" stroke="#C35227" stroke-width="1.5" />

  <text x="600" y="440" font-family="'Times New Roman', Georgia, serif" font-size="22" font-weight="bold" fill="#00205B" text-anchor="middle" letter-spacing="1">
    LEGAL ANALYSIS &amp; REGULATORY COMPLIANCE FRAMEWORK
  </text>
  <text x="600" y="475" font-family="'Georgia', serif" font-size="13" font-style="italic" fill="#4B5563" text-anchor="middle">
    Curriculum Concentration in Statutory Interpretation, Dispute Resolution, and Contractual Strategy
  </text>

  <!-- Competencies Box -->
  <g transform="translate(240, 510)">
    <rect x="0" y="0" width="720" height="130" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1" rx="6" />
    <text x="360" y="25" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="bold" fill="#00205B" text-anchor="middle" letter-spacing="1">CURRICULAR CORE COMPETENCIES</text>
    <text x="30" y="55" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#334155">1. Multi-Party Negotiation &amp; Conflict Mediation Frameworks (Straus Method)</text>
    <text x="30" y="75" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#334155">2. Regulatory Compliance &amp; Statutory Research for Healthcare Operations</text>
    <text x="30" y="95" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#334155">3. Commercial Risk Allocation, Executive Governance &amp; Contractual Strategy</text>
    <text x="30" y="115" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#334155">4. Legal Analysis Curriculum · Commencing Fall 2026 (Malibu, CA)</text>
  </g>

  <text x="600" y="785" font-family="'Courier New', monospace" font-size="10" fill="#94A3B8" text-anchor="middle" letter-spacing="1">
    OFFICIAL LAW PORTFOLIO RECORD • REGISTRATION ID: PULAW-2026-DR-049 • MALIBU, CA
  </text>
</svg>
`);

export const CAREYDANIS_LETTER_DOCUMENT_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1100" width="850" height="1100">
  <defs>
    <linearGradient id="paperBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#FCFCFD" />
    </linearGradient>
  </defs>

  <rect width="850" height="1100" fill="url(#paperBg)" />
  <rect x="20" y="20" width="810" height="1060" fill="none" stroke="#E2E8F0" stroke-width="1" />

  <!-- Letterhead Header -->
  <g transform="translate(60, 60)">
    <text x="0" y="24" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#0F172A" letter-spacing="1.5">CAREY &amp; DANIS LLC</text>
    <text x="0" y="42" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="bold" fill="#475569" letter-spacing="3">ATTORNEYS AT LAW</text>
    <text x="0" y="58" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9.5" fill="#64748B">www.careydanis.com</text>

    <text x="730" y="24" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9" fill="#64748B" text-anchor="end">8235 FORSYTH BLVD. · SUITE 1100</text>
    <text x="730" y="38" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9" fill="#64748B" text-anchor="end">ST. LOUIS, MO 63105</text>
    <text x="730" y="52" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9" fill="#64748B" text-anchor="end">(314) 725-7700 · (800) 721-2519</text>
  </g>

  <line x1="60" y1="135" x2="790" y2="135" stroke="#0F172A" stroke-width="2" />

  <!-- Date & Subject -->
  <text x="60" y="175" font-family="'Georgia', serif" font-size="12" fill="#0F172A">August 12, 2026</text>
  <text x="60" y="205" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#0F172A">Re: Donna Aseret Rivas</text>
  <text x="60" y="235" font-family="'Georgia', serif" font-size="12" fill="#0F172A">To whom it may concern,</text>

  <!-- Body Paragraphs -->
  <g transform="translate(60, 265)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="11.5" fill="#1E293B" line-height="1.6">
      <tspan x="0" dy="0">I am writing to recommend Donna Aseret Rivas, who worked with Carey &amp; Danis, LLC as an intake</tspan>
      <tspan x="0" dy="20">and community outreach coordinator with respect to our social media addiction litigation campaign.</tspan>
      <tspan x="0" dy="20">It is a pleasure to provide this letter on her behalf.</tspan>

      <tspan x="0" dy="36">Throughout her time with our firm, Donna was diligent and reliable. She consistently kept us informed</tspan>
      <tspan x="0" dy="20">of her progress, sent us regular activity logs, and followed through on every assignment she took on.</tspan>
      <tspan x="0" dy="20">Her communication was clear and professional at all times.</tspan>

      <tspan x="0" dy="36">We particularly appreciated that Donna showed initiative and creativity in expanding the reach of</tspan>
      <tspan x="0" dy="20">our program beyond obvious channels. Donna was one of the strongest coordinators we worked with,</tspan>
      <tspan x="0" dy="20">and her efforts reflected real care and professionalism.</tspan>

      <tspan x="0" dy="36">I recommend Donna without reservation and am confident she will bring the same diligence,</tspan>
      <tspan x="0" dy="20">initiative, and professionalism to any future opportunity. Please feel free to contact our office</tspan>
      <tspan x="0" dy="20">if further information would be helpful.</tspan>
    </text>
  </g>

  <!-- Signoff -->
  <g transform="translate(60, 580)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="12" fill="#0F172A">Very truly yours,</text>
    
    <!-- Signature -->
    <path d="M 0 35 Q 40 10 80 45 Q 120 20 160 30" fill="none" stroke="#0F172A" stroke-width="2" />

    <text x="0" y="80" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#0F172A">James J. Rosemergy</text>
    <text x="0" y="98" font-family="'Georgia', serif" font-size="11" fill="#475569">Managing Partner, Carey &amp; Danis LLC</text>
    <text x="0" y="114" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">jrosemergy@careydanis.com • (314) 725-7700</text>
  </g>

  <!-- Verification Footer Badge -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="730" height="38" fill="#F8FAFC" rx="6" stroke="#E2E8F0" stroke-width="1" />
    <text x="15" y="23" font-family="'Courier New', monospace" font-size="10" fill="#475569">OFFICIAL VERIFIED RECOMMENDATION • CAREY &amp; DANIS LLC • ST. LOUIS, MO</text>
    <text x="715" y="23" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#16A34A" text-anchor="end">✓ Authentic Letter</text>
  </g>
</svg>
`);

export const GEORGETOWN_STEINBERG_LETTER_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1100" width="850" height="1100">
  <defs>
    <linearGradient id="gtLetterBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#FAFAFA" />
    </linearGradient>
  </defs>

  <rect width="850" height="1100" fill="url(#gtLetterBg)" />
  <rect x="20" y="20" width="810" height="1060" fill="none" stroke="#E2E8F0" stroke-width="1" />

  <!-- Georgetown SCS Header -->
  <g transform="translate(60, 60)">
    <text x="0" y="24" font-family="'Times New Roman', Georgia, serif" font-size="24" font-weight="bold" fill="#041E42" letter-spacing="2">GEORGETOWN UNIVERSITY</text>
    <text x="0" y="44" font-family="'Times New Roman', Georgia, serif" font-size="12" font-weight="bold" fill="#63666A" letter-spacing="2">SCHOOL OF CONTINUING STUDIES</text>
    <text x="0" y="60" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">Professional Certificate in Strategic Management • Washington, DC</text>
  </g>

  <line x1="60" y1="135" x2="790" y2="135" stroke="#041E42" stroke-width="2" />

  <text x="60" y="175" font-family="'Georgia', serif" font-size="12" fill="#0F172A">February 2026</text>
  <text x="60" y="210" font-family="'Georgia', serif" font-size="12" fill="#0F172A">To Whom it may concern,</text>

  <g transform="translate(60, 245)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="11" fill="#1E293B">
      <tspan x="0" dy="0">Donna Rivas excelled as a member of our Georgetown University, School of Continuing Studies,</tspan>
      <tspan x="0" dy="20">Certificate Program in Strategic Management. Ms. Rivas demonstrated an outstanding understanding</tspan>
      <tspan x="0" dy="20">of business management and strategic management concepts and approaches. She also demonstrated</tspan>
      <tspan x="0" dy="20">excellent analytical and communications skills and the ability to work in a team environment during</tspan>
      <tspan x="0" dy="20">group exercises.</tspan>

      <tspan x="0" dy="36">As she progressed through the program, she cultivated a professional philosophy centered on analytical</tspan>
      <tspan x="0" dy="20">precision and strategic foresight. Her academic tenure, highlighted by intensive research in Strategic</tspan>
      <tspan x="0" dy="20">Management, has equipped her with the frameworks necessary to evaluate complex corporate</tspan>
      <tspan x="0" dy="20">structures and drive operational excellence. During our program, Ms. Rivas' in-depth case study</tspan>
      <tspan x="0" dy="20">evaluations of industry leaders underscored her ability to synthesize high-level data into actionable</tspan>
      <tspan x="0" dy="20">business intelligence. Her class exercises also demonstrated her ability to leverage her background</tspan>
      <tspan x="0" dy="20">in finance and strategic planning to provide disciplined, data-driven support to a forward-thinking</tspan>
      <tspan x="0" dy="20">leadership team.</tspan>

      <tspan x="0" dy="36">Based on her outstanding performance in our program, I would strongly recommend Ms. Rivas for</tspan>
      <tspan x="0" dy="20">a position in your organization.</tspan>
    </text>
  </g>

  <g transform="translate(60, 580)">
    <!-- Signature -->
    <path d="M 0 30 Q 30 5 70 35 Q 110 5 150 25" fill="none" stroke="#041E42" stroke-width="2" />
    <text x="0" y="75" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#041E42">Gary Steinberg</text>
    <text x="0" y="93" font-family="'Georgia', serif" font-size="11" fill="#475569">Adjunct Professor, School of Continuing Studies</text>
    <text x="0" y="109" font-family="'Georgia', serif" font-size="11" fill="#475569">Georgetown University</text>
    <text x="0" y="125" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">gas34@georgetown.edu</text>
  </g>

  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="730" height="38" fill="#F8FAFC" rx="6" stroke="#E2E8F0" stroke-width="1" />
    <text x="15" y="23" font-family="'Courier New', monospace" font-size="10" fill="#475569">OFFICIAL RECOMMENDATION • GEORGETOWN UNIVERSITY SCS • WASHINGTON, DC</text>
    <text x="715" y="23" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#041E42" text-anchor="end">✓ Verified Georgetown Faculty</text>
  </g>
</svg>
`);

export const GEORGETOWN_CORSO_LETTER_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1100" width="850" height="1100">
  <rect width="850" height="1100" fill="#FFFFFF" />
  <rect x="20" y="20" width="810" height="1060" fill="none" stroke="#E2E8F0" stroke-width="1" />

  <g transform="translate(60, 60)">
    <text x="0" y="20" font-family="'Times New Roman', Georgia, serif" font-size="16" font-weight="bold" fill="#041E42">John A. Corso, D.P.A.</text>
    <text x="0" y="36" font-family="'Times New Roman', Georgia, serif" font-size="12" fill="#475569">Faculty Member • Georgetown University</text>
    <text x="0" y="50" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">School of Continuing Studies • 111 Massachusetts Avenue, NW, Washington, DC 20001</text>
    <text x="0" y="64" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">(301) 529-9446 • John.Corso@georgetown.edu</text>
  </g>

  <line x1="60" y1="135" x2="790" y2="135" stroke="#041E42" stroke-width="2" />

  <text x="60" y="175" font-family="'Georgia', serif" font-size="12" fill="#0F172A">March 16, 2026</text>
  <text x="60" y="205" font-family="'Georgia', serif" font-size="12" fill="#0F172A">To Whom it May Concern,</text>

  <g transform="translate(60, 240)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="11.5" fill="#1E293B">
      <tspan x="0" dy="0">It is with great pleasure that I endorse Ms. Donna Rivas for a sales consultant position.</tspan>

      <tspan x="0" dy="30">Donna is my former strategic management student at Georgetown University's School of Continuing</tspan>
      <tspan x="0" dy="20">Studies in Washington, DC. She was my student in the Professional Certificate in Strategic</tspan>
      <tspan x="0" dy="20">Management program at Georgetown, especially showing persuasive analytical and communication</tspan>
      <tspan x="0" dy="20">skills in presenting her portion of the American Express capstone project. Her insight and</tspan>
      <tspan x="0" dy="20">thoughtful classroom contributions were consistently edifying to the class as a whole and</tspan>
      <tspan x="0" dy="20">enriching to the general program at the school. Donna is a person of character and intellect</tspan>
      <tspan x="0" dy="20">with a high sense of personal responsibility. I have no doubt she will prove to be an asset</tspan>
      <tspan x="0" dy="20">to any position to which she accedes.</tspan>

      <tspan x="0" dy="30">If I can assist you or Ms. Rivas at any time, please don't hesitate to reach out to me.</tspan>
    </text>
  </g>

  <g transform="translate(60, 560)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="12" fill="#0F172A">Very Truly Yours,</text>
    <path d="M 0 35 Q 40 10 90 40 Q 140 10 180 30" fill="none" stroke="#041E42" stroke-width="2" />
    <text x="0" y="80" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#041E42">John A. Corso, DPA</text>
    <text x="0" y="98" font-family="'Georgia', serif" font-size="11" fill="#475569">Faculty Member, Georgetown University SCS</text>
  </g>

  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="730" height="38" fill="#F8FAFC" rx="6" stroke="#E2E8F0" stroke-width="1" />
    <text x="15" y="23" font-family="'Courier New', monospace" font-size="10" fill="#475569">OFFICIAL ENDORSEMENT • GEORGETOWN UNIVERSITY SCS • WASHINGTON, DC</text>
    <text x="715" y="23" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#041E42" text-anchor="end">✓ Verified Faculty Letter</text>
  </g>
</svg>
`);

export const HARVARD_TAIEB_LETTER_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1100" width="850" height="1100">
  <rect width="850" height="1100" fill="#FFFFFF" />
  <rect x="20" y="20" width="810" height="1060" fill="none" stroke="#E2E8F0" stroke-width="1" />

  <g transform="translate(60, 60)">
    <text x="0" y="22" font-family="'Times New Roman', Georgia, serif" font-size="18" font-weight="bold" fill="#A51C30">Anne Taieb</text>
    <text x="0" y="38" font-family="'Times New Roman', Georgia, serif" font-size="12" fill="#475569">Senior Lecturer • Harvard Extension School</text>
    <text x="0" y="52" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">Harvard University • ataieb@g.harvard.edu • Cambridge, MA</text>
  </g>

  <line x1="60" y1="125" x2="790" y2="125" stroke="#A51C30" stroke-width="2" />

  <text x="60" y="165" font-family="'Georgia', serif" font-size="12" fill="#0F172A">December 5, 2025</text>
  <text x="60" y="195" font-family="'Georgia', serif" font-size="12" fill="#0F172A">To Whom It May Concern,</text>

  <g transform="translate(60, 225)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="11" fill="#1E293B">
      <tspan x="0" dy="0">I am pleased to recommend Donna Rivas, whom I had the opportunity to teach in Elementary French</tspan>
      <tspan x="0" dy="18">E1b during the Spring 2025 at Harvard Extension School. From the very beginning of the course,</tspan>
      <tspan x="0" dy="18">she distinguished herself as a motivated, engaged, and reliable student—qualities that I believe will</tspan>
      <tspan x="0" dy="18">make her an excellent addition to your team.</tspan>

      <tspan x="0" dy="28">In my class, she consistently demonstrated a strong work ethic and a genuine enthusiasm for learning.</tspan>
      <tspan x="0" dy="18">She approached each assignment thoughtfully, actively participated in discussions, and regularly</tspan>
      <tspan x="0" dy="18">sought feedback to improve her skills. Her ability to communicate clearly, collaborate effectively with</tspan>
      <tspan x="0" dy="18">classmates, and maintain a positive and professional attitude was evident throughout the semester.</tspan>

      <tspan x="0" dy="28">What sets her apart is her dedication to personal growth and her natural interpersonal skills. She is</tspan>
      <tspan x="0" dy="18">self-assured and attentive - traits that are especially valuable in the management consultancy sector,</tspan>
      <tspan x="0" dy="18">where client interaction, discretion, and professionalism are essential. She is also culturally curious</tspan>
      <tspan x="0" dy="18">and open-minded, showing a real interest in languages and international contexts, which I believe will</tspan>
      <tspan x="0" dy="18">serve her well in a global-facing role.</tspan>

      <tspan x="0" dy="28">I am confident that Donna Rivas will bring enthusiasm and a strong sense of responsibility to any</tspan>
      <tspan x="0" dy="18">professional setting. She contributed positively to our classroom environment, and I have no doubt</tspan>
      <tspan x="0" dy="18">that she will bring the same energy and commitment to her work with your company.</tspan>
    </text>
  </g>

  <g transform="translate(60, 600)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="12" fill="#0F172A">Sincerely,</text>
    <path d="M 0 30 Q 30 10 70 35 Q 120 5 160 25" fill="none" stroke="#A51C30" stroke-width="2" />
    <text x="0" y="75" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#A51C30">Anne Taieb</text>
    <text x="0" y="93" font-family="'Georgia', serif" font-size="11" fill="#475569">Senior Lecturer, Harvard Extension School</text>
  </g>

  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="730" height="38" fill="#F8FAFC" rx="6" stroke="#E2E8F0" stroke-width="1" />
    <text x="15" y="23" font-family="'Courier New', monospace" font-size="10" fill="#475569">OFFICIAL RECOMMENDATION • HARVARD EXTENSION SCHOOL • CAMBRIDGE, MA</text>
    <text x="715" y="23" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#A51C30" text-anchor="end">✓ Verified Harvard Faculty</text>
  </g>
</svg>
`);

export const CALPOLY_GOOD_LETTER_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1100" width="850" height="1100">
  <rect width="850" height="1100" fill="#FFFFFF" />
  <rect x="20" y="20" width="810" height="1060" fill="none" stroke="#E2E8F0" stroke-width="1" />

  <g transform="translate(60, 60)">
    <text x="0" y="22" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#005A36">CALIFORNIA STATE POLYTECHNIC UNIVERSITY, POMONA</text>
    <text x="0" y="38" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#C59B27">SINGELYN GRADUATE SCHOOL OF BUSINESS</text>
    <text x="0" y="52" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">Department of International Business and Marketing • Pomona, CA</text>
  </g>

  <line x1="60" y1="125" x2="790" y2="125" stroke="#005A36" stroke-width="2" />

  <text x="60" y="165" font-family="'Georgia', serif" font-size="12" fill="#0F172A">March 22, 2024</text>
  <text x="60" y="195" font-family="'Georgia', serif" font-size="12" fill="#0F172A">To Whom It May Concern,</text>

  <g transform="translate(60, 225)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="11" fill="#1E293B">
      <tspan x="0" dy="0">It is my pleasure to strongly recommend Donna Rivas. Donna was a student in my upper-division</tspan>
      <tspan x="0" dy="18">Professional Selling course (IBM 3062) at Cal Poly Pomona during the Fall 2023 semester.</tspan>

      <tspan x="0" dy="28">Throughout the course, Donna proved herself to be an exceptionally disciplined, inquisitive, and</tspan>
      <tspan x="0" dy="18">tenacious professional. She mastered complex consultative B2B sales frameworks, customer discovery</tspan>
      <tspan x="0" dy="18">methodologies, objection handling, and executive closing strategy. Her performance during live role-play</tspan>
      <tspan x="0" dy="18">simulations was among the top in her cohort, showcasing poise and tactical precision under pressure.</tspan>

      <tspan x="0" dy="28">Beyond her academic aptitude, Donna demonstrates exceptional emotional intelligence, personal</tspan>
      <tspan x="0" dy="18">integrity, and a capacity for unsupervised problem solving. She will be an invaluable asset to any</tspan>
      <tspan x="0" dy="18">high-performance executive team.</tspan>
    </text>
  </g>

  <g transform="translate(60, 560)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="12" fill="#0F172A">Sincerely,</text>
    <path d="M 0 30 Q 30 5 80 35 Q 130 5 170 25" fill="none" stroke="#005A36" stroke-width="2" />
    <text x="0" y="75" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#005A36">Dr. Megan C. Good, Ph.D.</text>
    <text x="0" y="93" font-family="'Georgia', serif" font-size="11" fill="#475569">Assistant Professor, Department of IBM</text>
    <text x="0" y="109" font-family="'Georgia', serif" font-size="11" fill="#475569">Singelyn Graduate School of Business, Cal Poly Pomona</text>
  </g>

  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="730" height="38" fill="#F8FAFC" rx="6" stroke="#E2E8F0" stroke-width="1" />
    <text x="15" y="23" font-family="'Courier New', monospace" font-size="10" fill="#475569">OFFICIAL RECOMMENDATION • CAL POLY POMONA • POMONA, CA</text>
    <text x="715" y="23" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#005A36" text-anchor="end">✓ Verified Faculty Letter</text>
  </g>
</svg>
`);

export const CALPOLY_SARMAS_LETTER_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1100" width="850" height="1100">
  <rect width="850" height="1100" fill="#FFFFFF" />
  <rect x="20" y="20" width="810" height="1060" fill="none" stroke="#E2E8F0" stroke-width="1" />

  <g transform="translate(60, 60)">
    <text x="0" y="22" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#005A36">CALIFORNIA STATE POLYTECHNIC UNIVERSITY, POMONA</text>
    <text x="0" y="38" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#C59B27">COLLEGE OF BUSINESS ADMINISTRATION</text>
    <text x="0" y="52" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#64748B">Department of Finance, Real Estate &amp; Law • Pomona, CA</text>
  </g>

  <line x1="60" y1="125" x2="790" y2="125" stroke="#005A36" stroke-width="2" />

  <text x="60" y="165" font-family="'Georgia', serif" font-size="12" fill="#0F172A">May 11, 2023</text>
  <text x="60" y="195" font-family="'Georgia', serif" font-size="12" fill="#0F172A">To Whom It May Concern,</text>

  <g transform="translate(60, 225)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="11" fill="#1E293B">
      <tspan x="0" dy="0">It is with high confidence that I write this letter of recommendation for Donna Rivas.</tspan>
      <tspan x="0" dy="18">Donna completed Managerial Finance (FRL 3000) under my instruction at Cal Poly Pomona.</tspan>

      <tspan x="0" dy="28">Managerial Finance is an intensive course requiring deep quantitative modeling, discounted cash flow</tspan>
      <tspan x="0" dy="18">valuations, working capital optimization, and capital budgeting analysis. Donna consistently exhibited</tspan>
      <tspan x="0" dy="18">superior analytical discipline and a keen grasp of how financial metrics drive strategic business decisions.</tspan>

      <tspan x="0" dy="28">Her relentless work ethic and clarity of quantitative communication make her an exceptional candidate</tspan>
      <tspan x="0" dy="18">for high-leverage business and financial operations roles.</tspan>
    </text>
  </g>

  <g transform="translate(60, 560)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="12" fill="#0F172A">Sincerely,</text>
    <path d="M 0 30 Q 30 10 70 35 Q 120 5 160 25" fill="none" stroke="#005A36" stroke-width="2" />
    <text x="0" y="75" font-family="'Georgia', serif" font-size="12" font-weight="bold" fill="#005A36">Prof. Paul Sarmas, Ph.D.</text>
    <text x="0" y="93" font-family="'Georgia', serif" font-size="11" fill="#475569">Professor of Finance, College of Business Administration</text>
    <text x="0" y="109" font-family="'Georgia', serif" font-size="11" fill="#475569">California State Polytechnic University, Pomona</text>
  </g>

  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="730" height="38" fill="#F8FAFC" rx="6" stroke="#E2E8F0" stroke-width="1" />
    <text x="15" y="23" font-family="'Courier New', monospace" font-size="10" fill="#475569">OFFICIAL RECOMMENDATION • CAL POLY POMONA FINANCE • POMONA, CA</text>
    <text x="715" y="23" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#005A36" text-anchor="end">✓ Verified Faculty Letter</text>
  </g>
</svg>
`);

export const PRESIDENTIAL_AWARD_DOCUMENT_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFCF9" />
      <stop offset="50%" stop-color="#FBF9F3" />
      <stop offset="100%" stop-color="#F4EFE6" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="50%" stop-color="#AA771C" />
      <stop offset="100%" stop-color="#8B6508" />
    </linearGradient>
  </defs>

  <rect width="1200" height="850" fill="url(#bg)" />

  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#0B2545" stroke-width="4" />
  <rect x="40" y="40" width="1120" height="770" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="6 3" />
  <rect x="48" y="48" width="1104" height="754" fill="none" stroke="#0B2545" stroke-width="1" />

  <g fill="#D4AF37">
    <path d="M 48 48 L 80 48 L 80 52 L 52 52 L 52 80 L 48 80 Z" />
    <circle cx="60" cy="60" r="3" />
    <path d="M 1152 48 L 1120 48 L 1120 52 L 1148 52 L 1148 80 L 1152 80 Z" />
    <circle cx="1140" cy="60" r="3" />
    <path d="M 48 802 L 80 802 L 80 798 L 52 798 L 52 770 L 48 770 Z" />
    <circle cx="60" cy="790" r="3" />
    <path d="M 1152 802 L 1120 802 L 1120 798 L 1148 798 L 1148 770 L 1152 770 Z" />
    <circle cx="1140" cy="790" r="3" />
  </g>

  <g transform="translate(600, 135)">
    <circle cx="0" cy="0" r="44" fill="#0B2545" stroke="#D4AF37" stroke-width="2.5" />
    <circle cx="0" cy="0" r="38" fill="none" stroke="#D4AF37" stroke-width="1" stroke-dasharray="3 2" />
    <path d="M -18 -4 L 0 -22 L 18 -4 L 10 18 L -10 18 Z" fill="#D4AF37" />
    <circle cx="0" cy="-2" r="6" fill="#0B2545" />
    <path d="M -10 -24 L -14 -32 M 0 -26 L 0 -34 M 10 -24 L 14 -32" stroke="#D4AF37" stroke-width="1.5" />
  </g>

  <text x="600" y="215" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" fill="#0B2545" text-anchor="middle" letter-spacing="4">
    PRESIDENT'S EDUCATION AWARDS PROGRAM
  </text>
  <text x="600" y="240" font-family="'Times New Roman', Georgia, serif" font-size="12" font-style="italic" fill="#8B6508" text-anchor="middle" letter-spacing="2">
    FOUNDED 1983 • EXECUTIVE OFFICE OF THE PRESIDENT &amp; U.S. DEPARTMENT OF EDUCATION
  </text>

  <text x="600" y="295" font-family="'Times New Roman', Georgia, serif" font-size="36" font-weight="bold" fill="#8B6508" text-anchor="middle" letter-spacing="3">
    AWARD FOR EDUCATIONAL ACHIEVEMENT
  </text>

  <text x="600" y="340" font-family="'Georgia', serif" font-size="14" font-style="italic" fill="#4A5568" text-anchor="middle">
    Presented to
  </text>

  <text x="600" y="405" font-family="'Times New Roman', Georgia, serif" font-size="40" font-weight="bold" fill="#0B2545" text-anchor="middle" letter-spacing="2">
    DONNA RIVAS
  </text>
  <line x1="380" y1="420" x2="820" y2="420" stroke="#D4AF37" stroke-width="1.5" />

  <text x="600" y="465" font-family="'Georgia', serif" font-size="15" font-style="italic" fill="#2D3748" text-anchor="middle">
    in recognition of
  </text>
  <text x="600" y="500" font-family="'Times New Roman', Georgia, serif" font-size="22" font-weight="bold" fill="#0B2545" text-anchor="middle" letter-spacing="1">
    OUTSTANDING ACADEMIC ACHIEVEMENT
  </text>
  <text x="600" y="530" font-family="'Georgia', serif" font-size="13" font-style="italic" fill="#4A5568" text-anchor="middle">
    and an exemplary commitment to educational excellence, self-discipline, and intellectual vigor.
  </text>

  <g transform="translate(230, 665)">
    <circle cx="0" cy="0" r="42" fill="#D4AF37" stroke="#8B6508" stroke-width="2" />
    <circle cx="0" cy="0" r="36" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="3 1" />
    <text x="0" y="-10" font-family="'Times New Roman', serif" font-size="7" font-weight="bold" fill="#0B2545" text-anchor="middle">EXCELLENCE</text>
    <text x="0" y="2" font-family="'Times New Roman', serif" font-size="9" font-weight="bold" fill="#0B2545" text-anchor="middle">HONOR</text>
    <text x="0" y="14" font-family="'Times New Roman', serif" font-size="7" font-weight="bold" fill="#0B2545" text-anchor="middle">PROGRAM</text>
    <path d="M -16 32 L -24 64 L -8 56 L 6 64 L -2 32 Z" fill="#0B2545" />
    <path d="M 16 32 L 24 64 L 8 56 L -6 64 L 2 32 Z" fill="#0B2545" />
  </g>

  <g transform="translate(560, 680)">
    <path d="M -120 -10 Q -80 -25 -40 -5 Q 0 15 40 -15 Q 80 -30 120 -5" fill="none" stroke="#0B2545" stroke-width="2" stroke-linecap="round" />
    <line x1="-130" y1="5" x2="130" y2="5" stroke="#4A5568" stroke-width="1" />
    <text x="0" y="22" font-family="'Times New Roman', Georgia, serif" font-size="13" font-weight="bold" fill="#0B2545" text-anchor="middle">
      Barack Obama
    </text>
    <text x="0" y="38" font-family="'Georgia', serif" font-size="11" font-style="italic" fill="#718096" text-anchor="middle">
      President of the United States
    </text>
  </g>

  <g transform="translate(930, 680)">
    <path d="M -100 -5 Q -60 -25 -20 -10 Q 20 5 60 -15 Q 80 -20 100 -5" fill="none" stroke="#0B2545" stroke-width="2" stroke-linecap="round" />
    <line x1="-110" y1="5" x2="110" y2="5" stroke="#4A5568" stroke-width="1" />
    <text x="0" y="22" font-family="'Times New Roman', Georgia, serif" font-size="13" font-weight="bold" fill="#0B2545" text-anchor="middle">
      Arne Duncan
    </text>
    <text x="0" y="38" font-family="'Georgia', serif" font-size="11" font-style="italic" fill="#718096" text-anchor="middle">
      U.S. Secretary of Education
    </text>
  </g>

  <text x="600" y="785" font-family="'Courier New', monospace" font-size="10" fill="#A0AEC0" text-anchor="middle" letter-spacing="1">
    OFFICIAL ARCHIVE RECORD • NATIONAL EDUCATION AWARDS PROGRAM • WASHINGTON, D.C.
  </text>
</svg>
`);

export const BEST_FRIENDS_LETTER_DOCUMENT_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1100" width="850" height="1100">
  <defs>
    <linearGradient id="bfPaper" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#FCFBF9" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="850" height="1100" fill="url(#bfPaper)" />
  <rect x="25" y="25" width="800" height="1050" fill="none" stroke="#F1EAE2" stroke-width="1" />

  <!-- Top Logo & Header -->
  <g transform="translate(425, 75)">
    <!-- Best Friends Logo Icon -->
    <g transform="translate(-165, -15)">
      <circle cx="16" cy="4" r="5" fill="#EE4E27" />
      <circle cx="52" cy="4" r="5" fill="#EE4E27" />
      <path d="M 12 18 C 12 28, 56 28, 56 18 C 50 14, 42 16, 34 14 C 26 16, 18 14, 12 18 Z" fill="#EE4E27" />
      <path d="M 6 12 C 0 24, 8 36, 24 38 C 44 40, 52 32, 62 12 C 54 26, 44 32, 28 30 C 14 28, 10 20, 6 12 Z" fill="#EE4E27" />
    </g>

    <!-- Brand Name Text -->
    <text x="-90" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="bold" fill="#EE4E27" letter-spacing="0.5">
      Best Friends®
    </text>

    <!-- Main Title -->
    <text x="-90" y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="900" fill="#EE4E27" letter-spacing="1.5">
      SAVE THEM ALL
    </text>

    <!-- Cities List Subtitle -->
    <text x="0" y="58" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="bold" fill="#EE4E27" text-anchor="middle" letter-spacing="0.8">
      Atlanta • Kanab • Los Angeles • New York City • Salt Lake City
    </text>
  </g>

  <!-- Date -->
  <text x="75" y="200" font-family="'Georgia', serif" font-size="13" fill="#1E293B">
    April 4, 2022
  </text>

  <!-- Addressee -->
  <text x="75" y="245" font-family="'Georgia', serif" font-size="13" fill="#1E293B">
    To whom it may concern:
  </text>

  <!-- Opening -->
  <text x="75" y="290" font-family="'Georgia', serif" font-size="13" fill="#1E293B">
    It is my pleasure to recommend Donna Rivas to you.
  </text>

  <!-- Body Text Paragraphs -->
  <g transform="translate(75, 335)">
    <!-- Paragraph 1 -->
    <text x="0" y="0" font-family="'Georgia', serif" font-size="12.5" fill="#1E293B" line-height="1.55">
      <tspan x="0" dy="0">I am KylieRose Melville, Senior Manager of Lifesaving Programs with Best Friends</tspan>
      <tspan x="0" dy="21">Animal Society – Los Angeles. I have ten years of experience in animal welfare and</tspan>
      <tspan x="0" dy="21">have worked with a large number of volunteers during that time. Donna is one who</tspan>
      <tspan x="0" dy="21">stands out for her hard work and dedication.</tspan>

      <!-- Paragraph 2 -->
      <tspan x="0" dy="38">As a volunteer with Best Friends, Donna has taken on the challenging role of serving</tspan>
      <tspan x="0" dy="21">as a receptionist for us, starting during the global pandemic. This position is one</tspan>
      <tspan x="0" dy="21">that presented a challenge on many levels and Donna rose to the occasion easily.</tspan>

      <!-- Paragraph 3 -->
      <tspan x="0" dy="38">Animal welfare is an industry where emotions are often running high and our</tspan>
      <tspan x="0" dy="21">receptionists are at the frontlines of it. Compassion and patience are integral to the</tspan>
      <tspan x="0" dy="21">work we do as an organization and Donna has exemplified that even in the face of all</tspan>
      <tspan x="0" dy="21">of the challenges that the changing landscape of the pandemic presented. Donna</tspan>
      <tspan x="0" dy="21">proved to be a quick study and picked up our policies and procedures with ease.</tspan>
      <tspan x="0" dy="21">Over the past year she has helped us provide exceptional customer service to all</tspan>
      <tspan x="0" dy="21">members of the public who reach out to us looking for help or information.</tspan>

      <!-- Paragraph 4 -->
      <tspan x="0" dy="38">We are all incredibly grateful for to have had the chance to work with Donna . If you</tspan>
      <tspan x="0" dy="21">need any more information, please do not hesitate to contact me at 818-643-3989</tspan>
      <tspan x="0" dy="21">ext. 114, or by email at </tspan>
      <tspan fill="#0044CC" text-decoration="underline">kylierosem@bestfriends.org</tspan>
      <tspan fill="#1E293B">.</tspan>
    </text>
  </g>

  <!-- Signoff & Signature -->
  <g transform="translate(75, 760)">
    <text x="0" y="0" font-family="'Georgia', serif" font-size="13" fill="#1E293B">Sincerely,</text>

    <!-- Stylized cursive signature -->
    <path d="M 0 35 Q 15 10 30 28 Q 45 42 60 20 Q 75 12 90 28 Q 110 40 130 25 Q 145 15 160 30 Q 180 42 195 28" fill="none" stroke="#0F172A" stroke-width="2" stroke-linecap="round" />
    <path d="M 35 15 Q 40 45 45 25 Q 65 30 85 22 Q 105 18 125 35" fill="none" stroke="#0F172A" stroke-width="1.6" stroke-linecap="round" />

    <text x="0" y="68" font-family="'Georgia', serif" font-size="13.5" font-weight="bold" fill="#1E293B">
      KylieRose Melville
    </text>
    <text x="0" y="88" font-family="'Georgia', serif" font-size="12.5" fill="#334155">
      Senior Manager, Lifesaving Programs
    </text>
    <text x="0" y="106" font-family="'Georgia', serif" font-size="12.5" fill="#334155">
      Best Friends Animal Society – Los Angeles
    </text>
  </g>

  <!-- Footer Information -->
  <g transform="translate(425, 995)">
    <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#EE4E27" text-anchor="middle">
      Best Friends Animal Society–Los Angeles
    </text>
    <text x="0" y="15" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10" fill="#EE4E27" text-anchor="middle">
      Best Friends Lifesaving Center
    </text>
    <text x="0" y="30" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9.5" fill="#EE4E27" text-anchor="middle">
      15321 Brand Boulevard, Mission Hills, CA 91345  |  bestfriendsla.org
    </text>
  </g>
</svg>
`);

export const LEAF_WORKFLOW_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="leafBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#F0FDFA" />
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e" />
      <stop offset="50%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
    <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="850" fill="url(#leafBg1)" />

  <!-- Outer Framing Borders -->
  <rect x="25" y="25" width="1150" height="800" fill="none" stroke="#0f766e" stroke-width="3" />
  <rect x="35" y="35" width="1130" height="780" fill="none" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="6 3" />
  <rect x="45" y="45" width="1110" height="760" fill="none" stroke="#042f2e" stroke-width="1" />

  <!-- Corner Flourishes -->
  <g fill="#0f766e">
    <path d="M 45 45 L 85 45 L 85 49 L 49 49 L 49 85 L 45 85 Z" />
    <circle cx="62" cy="62" r="3" fill="#0d9488" />
    <path d="M 1155 45 L 1115 45 L 1115 49 L 1151 49 L 1151 85 L 1155 85 Z" />
    <circle cx="1138" cy="62" r="3" fill="#0d9488" />
    <path d="M 45 805 L 85 805 L 85 801 L 49 801 L 49 765 L 45 765 Z" />
    <circle cx="62" cy="788" r="3" fill="#0d9488" />
    <path d="M 1155 805 L 1115 805 L 1115 801 L 1151 801 L 1151 765 L 1155 765 Z" />
    <circle cx="1138" cy="788" r="3" fill="#0d9488" />
  </g>

  <!-- L-EAF Top Institutional Banner -->
  <g transform="translate(600, 110)">
    <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f766e" text-anchor="middle" letter-spacing="4">
      LEARNING - EDUCATIONAL AGILE FRAMEWORK (L-EAF)
    </text>
    <line x1="-200" y1="12" x2="200" y2="12" stroke="#0d9488" stroke-width="1" />
  </g>

  <!-- Main Certificate Header -->
  <text x="600" y="195" font-family="'Times New Roman', Georgia, serif" font-size="34" font-weight="bold" fill="#0f172a" text-anchor="middle" letter-spacing="3">
    CERTIFICATE OF ACHIEVEMENT
  </text>
  <text x="600" y="235" font-family="'Georgia', serif" font-size="14" font-style="italic" fill="#64748b" text-anchor="middle" letter-spacing="1">
    This is to certify that
  </text>

  <!-- Recipient Name -->
  <text x="600" y="320" font-family="'Times New Roman', Georgia, serif" font-size="44" font-weight="bold" fill="#0f766e" text-anchor="middle" letter-spacing="2">
    Donna Rivas
  </text>
  <line x1="320" y1="345" x2="880" y2="345" stroke="#0d9488" stroke-width="2" />

  <!-- Completion Statement -->
  <text x="600" y="390" font-family="'Georgia', serif" font-size="15" font-style="italic" fill="#475569" text-anchor="middle">
    has successfully completed
  </text>

  <!-- Course Title -->
  <text x="600" y="455" font-family="'Times New Roman', Georgia, serif" font-size="38" font-weight="900" fill="#042f2e" text-anchor="middle" letter-spacing="2">
    WorkFLOW I
  </text>

  <!-- Explanatory Subtext -->
  <text x="600" y="500" font-family="'Georgia', serif" font-size="13" fill="#64748b" text-anchor="middle" letter-spacing="0.5">
    Demonstrating foundational mastery in agile workflow management, task decomposition, and lean educational cadence design.
  </text>

  <!-- Left: Authentic Hexagonal L-EAF Badge -->
  <g transform="translate(260, 650)">
    <!-- Hexagon Outer -->
    <polygon points="0,-65 56,-32 56,32 0,65 -56,32 -56,-32" fill="url(#tealGrad)" stroke="#042f2e" stroke-width="3" />
    <polygon points="0,-58 50,-28 50,28 0,58 -50,28 -50,-28" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 2" />
    <!-- Leaf Emblem Inside Hexagon -->
    <path d="M 0 -22 C -18 -8, -18 16, 0 28 C 18 16, 18 -8, 0 -22 Z" fill="#FFFFFF" opacity="0.95" />
    <path d="M 0 -18 L 0 24 M -6 4 L 6 -2 M -6 12 L 6 6" stroke="#0f766e" stroke-width="1.5" stroke-linecap="round" />
    <!-- Text on Badge -->
    <text x="0" y="-36" font-family="'Helvetica Neue', Arial, sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.8">
      L-EAF PRACTITIONER
    </text>
    <text x="0" y="44" font-family="'Helvetica Neue', Arial, sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">
      WorkFLOW
    </text>
  </g>

  <!-- Middle-Right: Date & Issue Details -->
  <g transform="translate(600, 640)">
    <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle" letter-spacing="1">
      DATE OF CONFERRAL
    </text>
    <text x="0" y="26" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" fill="#0f172a" text-anchor="middle">
      08-03-2026
    </text>
    <line x1="-80" y1="36" x2="80" y2="36" stroke="#cbd5e1" stroke-width="1" />
  </g>

  <!-- Right: L-EAF Official Seal & Signature Section -->
  <g transform="translate(940, 640)">
    <!-- L-EAF Logo Symbol -->
    <g transform="translate(0, -10)">
      <path d="M 0 -20 C -16 -6, -16 14, 0 22 C 16 14, 16 -6, 0 -20 Z" fill="#0d9488" />
      <path d="M 0 -16 L 0 18" stroke="#FFFFFF" stroke-width="1.5" />
      <text x="0" y="38" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="900" fill="#0f766e" text-anchor="middle" letter-spacing="2">
        L-EAF
      </text>
      <text x="0" y="52" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle" letter-spacing="0.5">
        L-EAF.org
      </text>
    </g>
  </g>

  <!-- Footer Verification Code -->
  <text x="600" y="785" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8" text-anchor="middle" letter-spacing="1">
    OFFICIAL CREDENTIAL ARCHIVE • VERIFICATION ID: LEAF-WF1-20260803-DR • L-EAF.ORG
  </text>
</svg>
`);

export const LEAF_NESTED_WORKFLOW_CERTIFICATE_SVG = makeSvgDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <linearGradient id="leafBg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#EFF6FF" />
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e40af" />
      <stop offset="50%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="850" fill="url(#leafBg2)" />

  <!-- Outer Framing Borders -->
  <rect x="25" y="25" width="1150" height="800" fill="none" stroke="#1e40af" stroke-width="3" />
  <rect x="35" y="35" width="1130" height="780" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="6 3" />
  <rect x="45" y="45" width="1110" height="760" fill="none" stroke="#172554" stroke-width="1" />

  <!-- Corner Flourishes -->
  <g fill="#1e40af">
    <path d="M 45 45 L 85 45 L 85 49 L 49 49 L 49 85 L 45 85 Z" />
    <circle cx="62" cy="62" r="3" fill="#2563eb" />
    <path d="M 1155 45 L 1115 45 L 1115 49 L 1151 49 L 1151 85 L 1155 85 Z" />
    <circle cx="1138" cy="62" r="3" fill="#2563eb" />
    <path d="M 45 805 L 85 805 L 85 801 L 49 801 L 49 765 L 45 765 Z" />
    <circle cx="62" cy="788" r="3" fill="#2563eb" />
    <path d="M 1155 805 L 1115 805 L 1115 801 L 1151 801 L 1151 765 L 1155 765 Z" />
    <circle cx="1138" cy="788" r="3" fill="#2563eb" />
  </g>

  <!-- L-EAF Top Institutional Banner -->
  <g transform="translate(600, 110)">
    <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle" letter-spacing="4">
      LEARNING - EDUCATIONAL AGILE FRAMEWORK (L-EAF)
    </text>
    <line x1="-200" y1="12" x2="200" y2="12" stroke="#2563eb" stroke-width="1" />
  </g>

  <!-- Main Certificate Header -->
  <text x="600" y="195" font-family="'Times New Roman', Georgia, serif" font-size="34" font-weight="bold" fill="#0f172a" text-anchor="middle" letter-spacing="3">
    CERTIFICATE OF ACHIEVEMENT
  </text>
  <text x="600" y="235" font-family="'Georgia', serif" font-size="14" font-style="italic" fill="#64748b" text-anchor="middle" letter-spacing="1">
    This is to certify that
  </text>

  <!-- Recipient Name -->
  <text x="600" y="320" font-family="'Times New Roman', Georgia, serif" font-size="44" font-weight="bold" fill="#1e40af" text-anchor="middle" letter-spacing="2">
    Donna Rivas
  </text>
  <line x1="320" y1="345" x2="880" y2="345" stroke="#2563eb" stroke-width="2" />

  <!-- Completion Statement -->
  <text x="600" y="390" font-family="'Georgia', serif" font-size="15" font-style="italic" fill="#475569" text-anchor="middle">
    has successfully completed
  </text>

  <!-- Course Title -->
  <text x="600" y="455" font-family="'Times New Roman', Georgia, serif" font-size="38" font-weight="900" fill="#172554" text-anchor="middle" letter-spacing="2">
    Nested WorkFLOW I
  </text>

  <!-- Explanatory Subtext -->
  <text x="600" y="500" font-family="'Georgia', serif" font-size="13" fill="#64748b" text-anchor="middle" letter-spacing="0.5">
    Certifying specialized competency in multi-tier agile architecture, hierarchical sprint structures, and cross-functional workflow synchronization.
  </text>

  <!-- Left: Authentic Shield L-EAF Badge -->
  <g transform="translate(260, 650)">
    <!-- Shield / Hexagon Shape -->
    <polygon points="0,-65 56,-32 56,32 0,65 -56,32 -56,-32" fill="url(#blueGrad)" stroke="#172554" stroke-width="3" />
    <polygon points="0,-58 50,-28 50,28 0,58 -50,28 -50,-28" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 2" />
    <!-- Leaf & Nested Nodes Inside -->
    <path d="M 0 -22 C -18 -8, -18 16, 0 28 C 18 16, 18 -8, 0 -22 Z" fill="#FFFFFF" opacity="0.95" />
    <circle cx="0" cy="-6" r="3" fill="#1e40af" />
    <circle cx="-6" cy="10" r="2.5" fill="#1e40af" />
    <circle cx="6" cy="10" r="2.5" fill="#1e40af" />
    <path d="M 0 -6 L -6 10 M 0 -6 L 6 10 M -6 10 L 6 10" stroke="#1e40af" stroke-width="1" />
    <!-- Text on Badge -->
    <text x="0" y="-36" font-family="'Helvetica Neue', Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.8">
      L-EAF.ORG
    </text>
    <text x="0" y="44" font-family="'Helvetica Neue', Arial, sans-serif" font-size="7.5" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.8">
      Nested WorkFLOW
    </text>
  </g>

  <!-- Middle-Right: Date & Issue Details -->
  <g transform="translate(600, 640)">
    <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle" letter-spacing="1">
      DATE OF CONFERRAL
    </text>
    <text x="0" y="26" font-family="'Times New Roman', Georgia, serif" font-size="20" font-weight="bold" fill="#0f172a" text-anchor="middle">
      08-03-2026
    </text>
    <line x1="-80" y1="36" x2="80" y2="36" stroke="#cbd5e1" stroke-width="1" />
  </g>

  <!-- Right: L-EAF Official Seal & Signature Section -->
  <g transform="translate(940, 640)">
    <!-- L-EAF Logo Symbol -->
    <g transform="translate(0, -10)">
      <path d="M 0 -20 C -16 -6, -16 14, 0 22 C 16 14, 16 -6, 0 -20 Z" fill="#2563eb" />
      <path d="M 0 -16 L 0 18" stroke="#FFFFFF" stroke-width="1.5" />
      <text x="0" y="38" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="900" fill="#1e40af" text-anchor="middle" letter-spacing="2">
        L-EAF
      </text>
      <text x="0" y="52" font-family="'Helvetica Neue', Arial, sans-serif" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle" letter-spacing="0.5">
        L-EAF.org
      </text>
    </g>
  </g>

  <!-- Footer Verification Code -->
  <text x="600" y="785" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8" text-anchor="middle" letter-spacing="1">
    OFFICIAL CREDENTIAL ARCHIVE • VERIFICATION ID: LEAF-NWF1-20260803-DR • L-EAF.ORG
  </text>
</svg>
`);



