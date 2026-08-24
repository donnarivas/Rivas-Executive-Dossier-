import React, { useState } from 'react';
import { 
  FileText, 
  Briefcase, 
  Send, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Building2, 
  TrendingUp, 
  LineChart, 
  BarChart3, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  HeartHandshake
} from 'lucide-react';

interface DualMemorandumAccordionsProps {
  onOpenBriefing?: () => void;
  onOpenMatrix?: () => void;
  candidateEmail?: string;
  defaultOaklinOpen?: boolean;
  defaultTbdOpen?: boolean;
}

interface StrategicCardProps {
  number: string;
  title: string;
  tagline: string;
  scope: string;
  executiveLeverage: string;
  icon: React.ElementType;
  highlights: string[];
}

const TBD_STRATEGIC_CARDS: StrategicCardProps[] = [
  {
    number: "01",
    title: "FINANCIAL MODELING & UNIT ECONOMICS",
    tagline: "Quantitative Rigor & Platform Economics",
    scope: "Budgeting, multi-scenario forecasting, variance tracking, margin optimization, and labor/pricing sensitivity analysis.",
    executiveLeverage: "Delivering rapid, institutional-grade models to assess platform profitability, bolt-on acquisitions, and regional expansions across multi-state platforms (AZ, CT, FL, GA, IL, MI, NJ, NY, PA, TX).",
    icon: LineChart,
    highlights: [
      "Multi-State Regional Sensitivity (10 Target Markets)",
      "Variance Tracking & Gross Margin Optimization",
      "Scenario & Sensitivity Analysis for Bolt-On M&A"
    ]
  },
  {
    number: "02",
    title: "OPERATIONAL CADENCE & KPI ARCHITECTURE",
    tagline: "Board-Level Governance & Site Discipline",
    scope: "Architecting monthly KPI dashboards, executive review decks, and lender/board reporting materials.",
    executiveLeverage: "Converting complex multi-site operating metrics into actionable insights to improve reporting cadences and internal operating discipline.",
    icon: BarChart3,
    highlights: [
      "Executive & Lender-Ready Reporting Packages",
      "Multi-Clinic / Multi-Facility Operating Scorecards",
      "Early-Warning Bottleneck & Variance Diagnostics"
    ]
  },
  {
    number: "03",
    title: "VALUE CREATION & MARKET EXPANSION",
    tagline: "Post-Close Execution & Special Initiatives",
    scope: "Growth initiative evaluations, add-on acquisition assessments, competitive intelligence, and hands-on special projects.",
    executiveLeverage: "Synthesizing legal, operational, and financial frameworks to identify high-conviction growth channels and execute post-close strategic initiatives.",
    icon: Compass,
    highlights: [
      "Add-On Target Pipeline & Commercial DD Synthesis",
      "De Novo vs. Bolt-On Capital Allocation Playbooks",
      "Cross-Functional Operational Special Projects"
    ]
  }
];

export const DualMemorandumAccordions: React.FC<DualMemorandumAccordionsProps> = ({
  onOpenBriefing,
  onOpenMatrix,
  candidateEmail = "dar159@georgetown.edu",
  defaultOaklinOpen = true,
  defaultTbdOpen = false
}) => {
  const [isOaklinOpen, setIsOaklinOpen] = useState(defaultOaklinOpen);
  const [isTbdOpen, setIsTbdOpen] = useState(defaultTbdOpen);
  const [isTbdQualificationsOpen, setIsTbdQualificationsOpen] = useState(true);
  const [activeTbdCard, setActiveTbdCard] = useState<number | null>(null);

  return (
    <div className="space-y-5" id="section-application-accordions">
      {/* ============================================================ */}
      {/* TOGGLE 1: OAKLIN LANE MEMORANDUM ACCORDION                   */}
      {/* ============================================================ */}
      <div 
        id="section-application-note"
        className="rounded-2xl border-[1.5px] border-[#f1ded7] bg-gradient-to-b from-white via-orange-50/20 to-white shadow-sm overflow-hidden transition-all duration-300"
      >
        {/* Accordion 1 Header Button */}
        <button
          type="button"
          onClick={() => setIsOaklinOpen(prev => !prev)}
          className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-orange-50/40 transition-colors cursor-pointer border-b border-[#f1ded7]"
          aria-expanded={isOaklinOpen}
        >
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-[#D9532F]/10 border border-[#D9532F]/30 flex items-center justify-center text-[#D9532F] shrink-0 shadow-2xs">
              <FileText className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#D9532F]">
                  MEMORANDUM 01 // OAKLIN LANE: CONSULTING & STRATEGY INTERN BRIEF
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7]">
                  Analytical Rigor · Structured Synthesis · Client-Ready Deliverables
                </span>
              </div>
              <p className="text-xs text-stone-600 font-sans truncate">
                Strategic Consulting Brief for Chris Callander & Selection Committee
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <span className="text-xs font-mono font-bold text-[#D9532F] bg-white px-3 py-1 rounded-full border border-[#f1ded7] shadow-2xs">
              {isOaklinOpen ? 'Collapse Memo' : 'Expand Memo'}
            </span>
            <div className="w-8 h-8 rounded-full bg-white border border-[#f1ded7] flex items-center justify-center text-[#D9532F]">
              {isOaklinOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </div>
        </button>

        {/* Accordion 1 Body Content */}
        {isOaklinOpen && (
          <div className="p-6 sm:p-8 space-y-6 font-sans text-stone-800 animate-in fade-in duration-200">
            {/* Memo Body Content */}
            <div className="space-y-5">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 tracking-tight">
                Dear Chris and the Oaklin Lane Selection Committee,
              </h2>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                I am writing to enthusiastically submit my candidate brief for the <strong>Consulting & Strategy Intern</strong> position with <strong>Oaklin Lane</strong>. Having analyzed the growth dynamics of pediatric therapy platforms backed by institutional search-fund sponsors, I recognize that scaling a multi-site clinical network requires rigorous consulting craftsmanship—uncovering granular operational truths, structuring unstructured qualitative and quantitative findings into MECE frameworks, and converting strategic hypotheses into client-ready, high-conviction deliverables.
              </p>

              {/* Foundational Preparation & Academic Rigor */}
              <div className="p-6 bg-[#D9532F]/8 backdrop-blur-md border border-[#f1ded7] rounded-2xl space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] tracking-wider text-stone-600 font-bold uppercase font-mono">
                    FOUNDATIONAL PREPARATION & CONSULTING TOOLKIT
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#D9532F] bg-white/80 px-2.5 py-0.5 rounded-full border border-[#f1ded7]">
                    LEGAL + STRATEGIC + FINANCIAL SYNTHESIS
                  </span>
                </div>
                <p className="text-stone-800 leading-relaxed font-sans text-xs sm:text-sm">
                  Combining statutory analysis and regulatory diligence from <strong>Pepperdine University Caruso School of Law</strong> with advanced executive strategy from my Professional Certificate at <strong>Georgetown University</strong>, management consulting frameworks from <strong>Harvard Extension School</strong>, and managerial finance from <strong>Cal Poly Pomona</strong> (BSBA, 4.0 GPA), I have forged an analytical toolkit engineered specifically for top-tier consulting execution.
                </p>
              </div>

              {/* Three Strategic Pillars */}
              <div className="space-y-2 pt-1">
                <p className="font-bold text-stone-900 text-xs sm:text-sm">
                  Three core consulting pillars define my strategic value proposition for Oaklin Lane:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  <div className="p-6 bg-white border border-[#f1ded7] rounded-2xl space-y-2 shadow-2xs hover:border-[#D9532F]/40 transition-colors">
                    <span className="text-[10px] tracking-wider text-[#D9532F] font-bold uppercase font-mono block">
                      1. DIAGNOSTIC & QUANTITATIVE RESEARCH
                    </span>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      Executing granular market mapping, provider density demographic evaluations, and clinic unit economic modeling. I rapidly ingest disaggregated operational and clinical data to establish clear baseline benchmarks across regional hubs.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-[#f1ded7] rounded-2xl space-y-2 shadow-2xs hover:border-[#D9532F]/40 transition-colors">
                    <span className="text-[10px] tracking-wider text-[#D9532F] font-bold uppercase font-mono block">
                      2. STRATEGY & FRAMEWORK FORMULATION
                    </span>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      Translating complex operational findings into structured MECE problem-solving frameworks, gap analyses, and prioritized strategic initiatives that provide executive decision-makers with crisp, data-backed clarity.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-[#f1ded7] rounded-2xl space-y-2 shadow-2xs hover:border-[#D9532F]/40 transition-colors">
                    <span className="text-[10px] tracking-wider text-[#D9532F] font-bold uppercase font-mono block">
                      3. OPERATIONAL EXECUTION & DELIVERABLES
                    </span>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      Architecting institutional-quality slide decks (Pyramid Principle), executive memorandums, weekly business review cockpits, and codified playbooks that streamline workstreams and elevate deliverable standards across all engagements.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-2">
                I am prepared to immediately dedicate my analytical rigor, disciplined research methodology, and client-ready deliverable polish to support Oaklin Lane's strategic growth mandates and ensure every deliverable reflects top-tier management consulting excellence.
              </p>

              {/* Closing & Signature */}
              <div className="pt-5 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs">
                <div className="space-y-0.5">
                  <p className="text-stone-500 text-xs font-mono">Sincerely,</p>
                  <p className="text-base font-bold text-stone-900 font-serif">Donna Aseret Rivas</p>
                  <p className="text-[#D9532F] text-xs font-semibold">Candidate for Consulting & Strategy Intern · Oaklin Lane</p>
                  <p className="text-stone-500 text-xs font-mono">{candidateEmail} • (424) 478-1969</p>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href={`mailto:${candidateEmail}?subject=Oaklin%20Lane%20Consulting%20%26%20Strategy%20Conversation%20-%20Donna%20Rivas`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9532F] hover:bg-[#b83d1c] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer border border-[#D9532F]/40"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Invitation</span>
                  </a>
                  <button
                    type="button"
                    onClick={onOpenBriefing}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-xl border border-stone-200 transition-all cursor-pointer shadow-2xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D9532F]" />
                    <span>Open Interactive Briefing</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* TOGGLE 2: TBD INVESTORS MEMORANDUM ACCORDION                 */}
      {/* ============================================================ */}
      <div 
        id="section-tbd-memorandum"
        className="rounded-2xl border-[1.5px] border-[#f1ded7] bg-gradient-to-b from-white via-orange-50/20 to-white shadow-sm overflow-hidden transition-all duration-300 text-stone-800"
      >
        {/* Accordion 2 Header Button */}
        <button
          type="button"
          onClick={() => setIsTbdOpen(prev => !prev)}
          className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-orange-50/40 transition-colors cursor-pointer border-b border-[#f1ded7]"
          aria-expanded={isTbdOpen}
        >
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-[#D9532F]/10 border border-[#D9532F]/30 flex items-center justify-center text-[#D9532F] shrink-0 shadow-2xs">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#D9532F]">
                  MEMORANDUM 02 // TBD INVESTORS: CORPORATE FINANCE & PORTFOLIO STRATEGY
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7]">
                  Investment Partnership · Multi-State Platforms · Sponsor Velocity
                </span>
              </div>
              <p className="text-xs text-stone-600 font-sans truncate">
                Executive Portfolio Operations Briefing for Search Fund CEOs & Sponsors
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <span className="text-xs font-mono font-bold text-[#D9532F] bg-white px-3 py-1 rounded-full border border-[#f1ded7] shadow-2xs">
              {isTbdOpen ? 'Collapse Memo' : 'Expand Memo'}
            </span>
            <div className="w-8 h-8 rounded-full bg-white border border-[#f1ded7] flex items-center justify-center text-[#D9532F]">
              {isTbdOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </div>
        </button>

        {/* Accordion 2 Body Content */}
        {isTbdOpen && (
          <div className="p-6 sm:p-8 space-y-6 font-sans text-stone-800 animate-in fade-in duration-200">
            {/* Metadata Badges */}
            <div className="flex items-center gap-1.5 flex-wrap font-mono text-[10px]">
              <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 border border-stone-300/80 font-semibold flex items-center gap-1">
                <Building2 className="w-3 h-3 text-[#D9532F]" />
                Investment Partnership & Family Office
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7] font-semibold flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#D9532F]" />
                Multi-State Platform Operations
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#eaf1f8] text-[#2c5282] border border-[#3c6382]/25 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#2c5282]" />
                Post-Acquisition Value Creation
              </span>
            </div>

            {/* Executive Value Proposition (Top Callout Card) */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50/70 via-stone-50/80 to-orange-50/70 border border-[#f1ded7] p-6 shadow-inner">
              <div className="relative space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#D9532F] uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#D9532F]" />
                    EXECUTIVE VALUE PROPOSITION // CORPORATE FINANCE & STRATEGY
                  </span>
                  <span className="text-[10px] font-mono text-stone-600 bg-white/80 px-2.5 py-0.5 rounded-full border border-stone-200">
                    Direct Portfolio CEO & Sponsor Leverage
                  </span>
                </div>

                <p className="text-xs sm:text-base font-sans text-stone-900 leading-relaxed font-medium">
                  "Dedicated to driving post-acquisition operating velocity and disciplined financial architecture across TBD Investors’ portfolio companies. Engineered to sit at the intersection of quantitative modeling, board-level reporting, and operational execution alongside search fund CEOs and investment partners."
                </p>

                {/* Capability Tags */}
                <div className="flex items-center gap-4 pt-1 font-mono text-xs text-stone-600 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D9532F]"></div>
                    <span>Institutional-Grade Modeling</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3182ce]"></div>
                    <span>Monthly Board Cadence</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                    <span>M&A Commercial Diligence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Three-Column Strategic Alignment Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#D9532F]" />
                  STRATEGIC ALIGNMENT ARCHITECTURE
                </h3>
                <span className="text-[10px] font-mono text-stone-500">
                  Interactive Execution Pillars
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {TBD_STRATEGIC_CARDS.map((card, idx) => {
                  const IconComponent = card.icon;
                  const isHovered = activeTbdCard === idx;

                  return (
                    <div
                      key={card.number}
                      onMouseEnter={() => setActiveTbdCard(idx)}
                      onMouseLeave={() => setActiveTbdCard(null)}
                      className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                        isHovered 
                          ? 'bg-white border-[#df5837] shadow-md -translate-y-1' 
                          : 'bg-white border-[#f1ded7] shadow-2xs hover:border-[#df5837]/40'
                      }`}
                    >
                      <div className="space-y-3">
                        {/* Card Header */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#D9532F] px-2 py-0.5 rounded bg-[#D9532F]/10 border border-[#D9532F]/20">
                            {card.number}
                          </span>
                          <div className="w-8 h-8 rounded-xl bg-orange-50 border border-[#f1ded7] flex items-center justify-center text-[#D9532F]">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-sm text-stone-900 font-mono tracking-tight">
                            {card.title}
                          </h4>
                          <p className="text-[11px] font-mono text-stone-500 mt-0.5">
                            {card.tagline}
                          </p>
                        </div>

                        {/* Scope Block */}
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-[#f1ded7] space-y-1">
                          <span className="text-[10px] font-mono uppercase font-bold text-stone-600 block">
                            Functional Scope:
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed font-sans">
                            {card.scope}
                          </p>
                        </div>

                        {/* Executive Leverage Block */}
                        <div className="p-3.5 rounded-xl bg-[#D9532F]/8 border border-[#f1ded7] space-y-1">
                          <span className="text-[10px] font-mono uppercase font-bold text-[#C2410C] block">
                            Executive Leverage:
                          </span>
                          <p className="text-xs text-stone-800 leading-relaxed font-sans">
                            {card.executiveLeverage}
                          </p>
                        </div>
                      </div>

                      {/* Highlights Pill List */}
                      <div className="pt-2 border-t border-stone-200 space-y-1.5">
                        {card.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-[11px] text-stone-700 font-sans">
                            <CheckCircle2 className="w-3 h-3 text-[#D9532F] shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Qualifications Drawer */}
            <div className="rounded-2xl border border-[#f1ded7] bg-white overflow-hidden transition-all shadow-2xs">
              <button
                type="button"
                onClick={() => setIsTbdQualificationsOpen(prev => !prev)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-orange-50/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#D9532F]/10 border border-[#D9532F]/30 flex items-center justify-center text-[#D9532F] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 block">
                      APPLICANT QUALIFICATIONS & CROSS-FUNCTIONAL SYNTHESIS
                    </span>
                    <span className="text-[11px] font-sans text-stone-600">
                      Dual Legal & Quantitative Background Engineered for Sponsor Velocity
                    </span>
                  </div>
                </div>

                <div className="text-stone-600 flex items-center gap-1 font-mono text-xs">
                  <span>{isTbdQualificationsOpen ? 'Collapse Details' : 'Expand Details'}</span>
                  {isTbdQualificationsOpen ? <ChevronUp className="w-4 h-4 text-[#D9532F]" /> : <ChevronDown className="w-4 h-4 text-[#D9532F]" />}
                </div>
              </button>

              {isTbdQualificationsOpen && (
                <div className="p-6 pt-0 space-y-4 font-sans text-xs text-stone-700 border-t border-[#f1ded7] animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {/* Background Alignment Box */}
                    <div className="p-4 rounded-xl bg-stone-50 border border-[#f1ded7] space-y-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#D9532F] tracking-wider block">
                        Background Alignment:
                      </span>
                      <p className="text-xs text-stone-800 leading-relaxed">
                        <strong>Legal analysis & statutory problem-solving</strong> (Pepperdine Caruso Law) + <strong>Strategic intelligence</strong> (Georgetown University) + <strong>Management consulting</strong> (Harvard Extension) + <strong>Managerial finance</strong> (Cal Poly Pomona, BSBA 4.0 GPA).
                      </p>
                    </div>

                    {/* Execution Posture Box */}
                    <div className="p-4 rounded-xl bg-[#D9532F]/8 border border-[#f1ded7] space-y-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#C2410C] tracking-wider block">
                        Execution Posture:
                      </span>
                      <p className="text-xs text-stone-800 leading-relaxed">
                        Prepared to operate as an analytical and operational force multiplier across searchers, portfolio CEOs, and investment leads—translating thesis hypotheses into scalable systems, financial transparency, and measurable operating momentum.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Footer & Signoff */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-base text-stone-900 font-serif">Donna Aseret Rivas</span>
                  <span className="text-[10px] font-mono bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7] px-2 py-0.5 rounded-full font-bold">
                    TBD Portfolio Track
                  </span>
                </div>
                <p className="text-[#D9532F] text-xs font-semibold">
                  Corporate Finance & Strategy Intern // TBD Investors Portfolio Operations
                </p>
                <p className="text-stone-500 text-xs font-mono">
                  {candidateEmail} • (424) 478-1969
                </p>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  onClick={onOpenMatrix}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9532F] hover:bg-[#b83d1c] active:bg-[#993317] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer border border-[#D9532F]/40 group"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-white/90 group-hover:scale-110 transition-transform" />
                  <span>Launch MECE Diagnostic Tree</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href={`mailto:${candidateEmail}?subject=TBD%20Investors%20Corporate%20Finance%20%26%20Strategy%20Inquiry%20-%20Donna%20Rivas`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-xl border border-stone-200 transition-all cursor-pointer shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#D9532F]" />
                  <span>Contact Candidate</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DualMemorandumAccordions;
