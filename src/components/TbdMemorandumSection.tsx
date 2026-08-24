import React, { useState } from 'react';
import { 
  Briefcase, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  Building2, 
  FileCheck2, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Compass,
  LineChart
} from 'lucide-react';

interface StrategicCardProps {
  number: string;
  title: string;
  tagline: string;
  scope: string;
  executiveLeverage: string;
  icon: React.ElementType;
  highlights: string[];
}

const STRATEGIC_CARDS: StrategicCardProps[] = [
  {
    number: "01",
    title: "FINANCIAL MODELING & UNIT ECONOMICS",
    tagline: "Quantitative Rigor & Platform Economics",
    scope: "Budgeting, multi-scenario forecasting, variance tracking, margin optimization, and labor/pricing sensitivity analysis.",
    executiveLeverage: "Delivering rapid, institutional-grade models to assess platform profitability, bolt-on acquisitions, and regional expansions across multi-state platforms (AZ, CT, FL, GA, IL, MI, NJ, NY, PA, TX).",
    icon: LineChart,
    highlights: [
      "Multi-State Regional Sensitivity (10 Target Markets)",
      "Variance Tracking & Platform Gross Margin Optimization",
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

export default function TbdMemorandumSection({ onOpenMatrix }: { onOpenMatrix?: () => void }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  return (
    <section id="section-tbd-memorandum" className="space-y-4">
      {/* Floating Section Badges */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-900 text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md border border-slate-700">
          <Briefcase className="w-3.5 h-3.5 text-sky-400" />
          <span>TBD INVESTORS // PORTFOLIO STRATEGY & CORPORATE FINANCE MEMORANDUM</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap font-mono text-[10px]">
          <span className="px-2.5 py-0.5 rounded-full bg-slate-800/90 text-slate-200 border border-slate-700 font-semibold flex items-center gap-1">
            <Building2 className="w-3 h-3 text-sky-400" />
            Investment Partnership & Family Office
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-sky-950/80 text-sky-200 border border-sky-800/60 font-semibold flex items-center gap-1">
            <Layers className="w-3 h-3 text-sky-400" />
            Multi-State Platform Operations
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#2c5282]/30 text-sky-200 border border-[#3182ce]/40 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-[#3182ce]" />
            Post-Acquisition Value Creation
          </span>
        </div>
      </div>

      {/* Executive Briefing Dashboard Container */}
      <div className="bg-slate-950/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-slate-100 space-y-6">
        
        {/* Executive Value Proposition (Top Callout Card) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700/80 p-5 sm:p-6 shadow-inner">
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="relative space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-sky-400" />
                EXECUTIVE VALUE PROPOSITION // CORPORATE FINANCE & STRATEGY
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                Direct Portfolio CEO & Sponsor Leverage
              </span>
            </div>

            <p className="text-sm sm:text-base font-sans text-slate-100 leading-relaxed font-medium">
              "Dedicated to driving post-acquisition operating velocity and disciplined financial architecture across TBD Investors’ portfolio companies. Engineered to sit at the intersection of quantitative modeling, board-level reporting, and operational execution alongside search fund CEOs and investment partners."
            </p>

            <div className="flex items-center gap-4 pt-1 font-mono text-xs text-slate-400 flex-wrap">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                <span>Institutional-Grade Modeling</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3182ce]"></div>
                <span>Monthly Board Cadence</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                <span>M&A Commercial Diligence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three-Column Strategic Alignment Grid (Interactive Dashboard Cards) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              STRATEGIC ALIGNMENT ARCHITECTURE
            </h3>
            <span className="text-[10px] font-mono text-slate-400">
              Interactive Execution Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {STRATEGIC_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              const isHovered = activeCardIndex === idx;

              return (
                <div
                  key={card.number}
                  onMouseEnter={() => setActiveCardIndex(idx)}
                  onMouseLeave={() => setActiveCardIndex(null)}
                  className={`rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                    isHovered 
                      ? 'bg-slate-900/90 border-sky-500/70 shadow-lg shadow-sky-950/50 -translate-y-1' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">
                        {card.number}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-slate-100 font-mono tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {card.tagline}
                      </p>
                    </div>

                    {/* Scope Block */}
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                        Functional Scope:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {card.scope}
                      </p>
                    </div>

                    {/* Executive Leverage Block */}
                    <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-900/40 space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-sky-300 block">
                        Executive Leverage:
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                        {card.executiveLeverage}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Pill List */}
                  <div className="pt-2 border-t border-slate-800/70 space-y-1.5">
                    {card.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-300 font-sans">
                        <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Applicant Qualifications & Synthesis Accordion */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-all">
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-850/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-sky-950/80 border border-sky-800/70 flex items-center justify-center text-sky-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 block">
                  APPLICANT QUALIFICATIONS & CROSS-FUNCTIONAL SYNTHESIS
                </span>
                <span className="text-[11px] font-sans text-slate-400">
                  Dual Legal & Quantitative Background Engineered for Sponsor Velocity
                </span>
              </div>
            </div>

            <div className="text-slate-400 flex items-center gap-1 font-mono text-xs">
              <span>{isAccordionOpen ? 'Collapse Details' : 'Expand Details'}</span>
              {isAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {isAccordionOpen && (
            <div className="p-5 sm:p-6 pt-0 space-y-4 font-sans text-xs text-slate-300 border-t border-slate-800/80 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {/* Background Alignment Box */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-sky-400 tracking-wider block">
                    Background Alignment:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong>Legal analysis & statutory problem-solving</strong> (Pepperdine Caruso Law) + <strong>Strategic intelligence</strong> (Georgetown University) + <strong>Management consulting</strong> (Harvard Extension) + <strong>Managerial finance</strong> (Cal Poly Pomona, BSBA 4.0 GPA).
                  </p>
                </div>

                {/* Strategic Profile Box */}
                <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-900/50 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-sky-400 tracking-wider block">
                    Strategic Profile & Execution Posture:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Prepared to operate as an analytical and operational force multiplier across searchers, portfolio CEOs, and investment leads—translating thesis hypotheses into scalable systems, financial transparency, and measurable operating momentum.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm text-slate-100 font-mono">Donna Aseret Rivas</span>
              <span className="text-[10px] font-mono bg-sky-950 text-sky-300 border border-sky-800/80 px-2 py-0.5 rounded-full font-bold">
                TBD Portfolio Track
              </span>
            </div>
            <p className="text-sky-300 text-xs font-mono font-medium">
              Corporate Finance & Strategy Intern // TBD Investors Portfolio Operations
            </p>
            <p className="text-slate-400 text-xs font-mono">
              dar159@georgetown.edu • (424) 478-1969
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={onOpenMatrix}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer border border-sky-400/40 group"
            >
              <BarChart3 className="w-3.5 h-3.5 text-sky-200 group-hover:scale-110 transition-transform" />
              <span>Launch Strategy & Finance Matrix</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="mailto:dar159@georgetown.edu?subject=TBD%20Investors%20Corporate%20Finance%20%26%20Strategy%20Inquiry%20-%20Donna%20Rivas"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white font-mono font-semibold text-xs rounded-xl border border-slate-700 transition-all cursor-pointer shadow-2xs"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>Contact Candidate</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
