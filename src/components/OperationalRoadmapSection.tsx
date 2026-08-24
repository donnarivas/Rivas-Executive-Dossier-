import React, { useState } from 'react';
import { 
  TrendingUp, 
  Layers, 
  Building2, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Activity, 
  Briefcase 
} from 'lucide-react';

export interface SprintPhase {
  tabLabel: string;
  daysRange: string;
  sprintNum: string;
  title: string;
  focus: string;
  summary: string;
  deliverables: string[];
  executiveLeverage: string;
}

export const OAKLIN_ROADMAP_SPRINTS: SprintPhase[] = [
  {
    tabLabel: "Sprint 01: Days 01–30",
    daysRange: "Days 01–30",
    sprintNum: "Sprint 01",
    title: "Absorb & Structure",
    focus: "Diagnostic, Research Frameworks & Cadence Setup",
    summary: "Audit Oaklin Lane project archives, master internal research frameworks, establish rigorous communication cadences with engagement leads, and support ongoing qualitative/quantitative data gathering across active engagements.",
    deliverables: [
      "Audit Oaklin Lane project archives, engagement deliverables, and operational benchmarks across clinic locations",
      "Master internal research frameworks and synthesize baseline metrics for ongoing clinical workstreams",
      "Establish daily/weekly operating cadence with engagement leads and CEO Chris Callander",
      "Support quantitative data gathering across clinic intake funnels, clinician utilization, and partner referral dynamics"
    ],
    executiveLeverage: "Accelerates onboarding velocity and structures project archives, saving 8–10 hours/week of senior team time."
  },
  {
    tabLabel: "Sprint 02: Days 31–60",
    daysRange: "Days 31–60",
    sprintNum: "Sprint 02",
    title: "Analyze & Synthesize",
    focus: "Analytical Modeling, Slide Decks & Gap Analysis",
    summary: "Build independent analytical models, draft structured slides and executive memos for active client engagements, and identify operational bottlenecks to formulate high-impact strategic recommendations.",
    deliverables: [
      "Build independent financial and operational models assessing clinic unit economics and capacity utilization",
      "Draft structured, client-ready slide decks and strategic memorandums for active leadership and sponsor reviews",
      "Identify operational and administrative bottlenecks across clinic onboarding and patient intake workflows",
      "Synthesize multi-variable research into structured MECE problem-solving frameworks and decision briefs"
    ],
    executiveLeverage: "Translates complex datasets into executive-ready deliverables with institutional consulting rigor."
  },
  {
    tabLabel: "Sprint 03: Days 61–90",
    daysRange: "Days 61–90",
    sprintNum: "Sprint 03",
    title: "Own & Deliver",
    focus: "Workstream Modules, Client Presentations & Consulting Toolkits",
    summary: "Lead discrete workstream modules with complete analytical ownership, deliver polished client-ready presentations, and codify reusable consulting toolkits and playbooks for future intern cohorts.",
    deliverables: [
      "Lead discrete strategic workstream modules with end-to-end analytical autonomy and quality control",
      "Deliver polished, client-ready presentations and executive reporting packages for Oaklin Lane and TBD Investors",
      "Codify reusable consulting toolkits, standard operating procedures, and onboarding playbooks for future intern cohorts",
      "Formalize quarterly strategic review deck and 12-month national growth roadmap recommendations"
    ],
    executiveLeverage: "Establishes institutional consulting toolkits and autonomously drives core deliverables to completion."
  }
];

export const TBD_ROADMAP_SPRINTS: SprintPhase[] = [
  {
    tabLabel: "Sprint 01: Days 01–30",
    daysRange: "Days 01–30",
    sprintNum: "Sprint 01",
    title: "Deep Financial Immersion & Reporting Baseline",
    focus: "Baseline Audit, Data Harmonization & Sponsor Rhythm",
    summary: "Establish direct operational connectivity with TBD Investors leads, portfolio company CEOs, and finance teams across key operating states (AZ, CT, FL, GA, IL, MI, NJ, NY, PA, TX). Audit current accounting pipelines, consolidate historical financials, and map variance drivers across multi-site operating entities.",
    deliverables: [
      "Establish operational cadence with TBD Investors leads, portfolio CEOs, and platform finance teams",
      "Audit monthly close schedules, KPI dashboards, and existing lender/board reporting materials",
      "Map variance drivers across labor costs, clinical pricing models, and site-level gross margins",
      "Deliver initial portfolio-wide KPI diagnostic highlighting immediate unit-economic optimization targets"
    ],
    executiveLeverage: "Harmonizes multi-state data workflows, saving 8–10 hrs/month during close cycles."
  },
  {
    tabLabel: "Sprint 02: Days 31–60",
    daysRange: "Days 31–60",
    sprintNum: "Sprint 02",
    title: "Standardized Financial Modeling & Board Reporting",
    focus: "Predictive Modeling, Budget Variance & Governance Packs",
    summary: "Architect dynamic, multi-scenario financial models and standardized monthly reporting decks. Build rigorous variance tracking systems that translate messy site-level numbers into high-conviction insights for board members and lenders.",
    deliverables: [
      "Construct dynamic three-statement operating models with built-in labor/pricing sensitivity analysis",
      "Implement standardized Monthly Management & Board Review Packages across affiliated portfolio companies",
      "Build automated variance tracking matrices comparing site-level actuals vs. underwriting forecasts",
      "Create multi-location unit-economic benchmarks to evaluate platform profitability across operating states"
    ],
    executiveLeverage: "Provides searcher CEOs and sponsors with real-time margin visibility."
  },
  {
    tabLabel: "Sprint 03: Days 61–90",
    daysRange: "Days 61–90",
    sprintNum: "Sprint 03",
    title: "Strategic M&A Diligence & Value Creation Playbooks",
    focus: "Add-On Acquisition Modeling, Market Expansion & Scalable Playbooks",
    summary: "Transition into proactive strategic growth and commercial evaluation. Partner with searcher CEOs to model bolt-on acquisitions, analyze de novo expansion feasibility, and institute enduring financial discipline across the platform.",
    deliverables: [
      "Build financial and pro forma synergy models for add-on acquisition target pipelines and debt capacity",
      "Conduct competitive intelligence and market feasibility studies for regional de novo expansion",
      "Codify the \"Post-Acquisition Financial & Operational Integration Playbook\" for future portfolio investments",
      "Finalize annual budgeting models and multi-year growth sensitivity frameworks for sponsor review"
    ],
    executiveLeverage: "Transforms corporate finance into a repeatable platform value-creation engine."
  }
];

export const OperationalRoadmapSection: React.FC = () => {
  const [activeOaklinSprint, setActiveOaklinSprint] = useState<number>(0);
  const [activeTbdSprint, setActiveTbdSprint] = useState<number>(0);

  const currentOaklin = OAKLIN_ROADMAP_SPRINTS[activeOaklinSprint];
  const currentTbd = TBD_ROADMAP_SPRINTS[activeTbdSprint];

  return (
    <section id="section-timeline" className="space-y-4">
      {/* Floating Badge Header */}
      <div>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
          <TrendingUp className="w-3.5 h-3.5" />
          OPERATIONAL ROADMAP // 30-60-90 DAY EXECUTION FRAMEWORK
        </span>
      </div>

      {/* Main Section Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50/80 via-white to-orange-50/80 border-[1.5px] border-[#f1ded7] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
        <div>
          <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-tight">
            Dual Track 30-60-90 Day Execution Roadmaps
          </h3>
          <p className="text-xs text-stone-600 font-sans mt-0.5">
            Post-Acquisition Integration · Financial Architecture · Sponsor Reporting Cadence
          </p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#D9532F] font-bold shrink-0 bg-white px-3 py-1 rounded-full border border-[#f1ded7] shadow-2xs">
          <Clock className="w-3.5 h-3.5" />
          <span>Interactive Sprint Switchers</span>
        </div>
      </div>

      {/* 2-Column Grid: Card 1 (Oaklin Lane) & Card 2 (TBD Investors) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        
        {/* ============================================================ */}
        {/* CARD 1: OAKLIN LANE // CONSULTING & STRATEGY INTERN          */}
        {/* ============================================================ */}
        <div className="rounded-2xl border-[1.5px] border-[#f1ded7] bg-gradient-to-b from-white via-orange-50/15 to-white backdrop-blur-xl p-6 shadow-sm space-y-5 flex flex-col justify-between">
          
          {/* Card 1 Header */}
          <div className="space-y-2 pb-3 border-b border-stone-200/80">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#D9532F]/10 border border-[#D9532F]/30 flex items-center justify-center text-[#D9532F] shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D9532F] block">
                    OAKLIN LANE STRATEGIC DELIVERABLES
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 font-mono">
                    OAKLIN LANE // CONSULTING & STRATEGY
                  </h4>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7] w-fit max-w-full whitespace-normal leading-[1.4] break-words shrink-0">
                Consulting & Strategy Intern
              </span>
            </div>
            
            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              Analytical Rigor & Client-Ready Deliverables for CEO Chris Callander (Ex-McKinsey / HBS / Georgetown) · Multi-Site Pediatric Clinic Expansion
            </p>
          </div>

          {/* Card 1 Interactive Tab Switcher */}
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            {OAKLIN_ROADMAP_SPRINTS.map((sprint, idx) => {
              const isActive = activeOaklinSprint === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveOaklinSprint(idx)}
                  className={`p-2.5 sm:p-3 text-left rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-[#df5837] text-white font-bold border-[#df5837] shadow-md ring-2 ring-[#df5837]/30 scale-[1.01]'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-[#f1ded7] shadow-2xs hover:border-[#df5837]/40'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <span className={`text-[9px] font-bold uppercase tracking-wider block ${
                    isActive ? 'text-orange-100' : 'text-[#D9532F]'
                  }`}>
                    {sprint.sprintNum}
                  </span>
                  <span className={`text-[11px] font-bold leading-tight mt-0.5 truncate ${
                    isActive ? 'text-white' : 'text-stone-900'
                  }`}>
                    {sprint.daysRange}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Card 1 Active Sprint Content */}
          {currentOaklin && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Sprint Focus Header */}
              <div className="p-4 bg-white rounded-2xl border border-[#f1ded7] shadow-2xs space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold text-[#D9532F]">
                    {currentOaklin.daysRange}: {currentOaklin.title}
                  </span>
                  <span className="text-[10px] font-mono font-semibold bg-[#D9532F]/10 text-[#C2410C] px-3 py-1 rounded-full border border-[#D9532F]/20 w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                    Focus: {currentOaklin.focus}
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {currentOaklin.summary}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="bg-white p-6 rounded-2xl border border-[#f1ded7] shadow-2xs space-y-2.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#df5837] tracking-wider block">
                  Key Sprint Deliverables:
                </span>
                <ul className="space-y-2 text-xs text-stone-800 font-sans">
                  {currentOaklin.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#df5837] font-bold text-base leading-none select-none shrink-0 mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Executive Leverage Callout */}
              <div className="bg-gradient-to-br from-orange-50/90 via-white to-orange-50/60 p-4 rounded-2xl border border-[#f1ded7] shadow-2xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold text-[#C2410C]">
                  <Sparkles className="w-3.5 h-3.5 text-[#df5837]" />
                  <span>Executive Leverage:</span>
                </div>
                <p className="text-xs text-stone-800 leading-relaxed font-sans font-medium">
                  "{currentOaklin.executiveLeverage}"
                </p>
              </div>

            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* CARD 2: TBD INVESTORS // CORPORATE FINANCE & STRATEGY         */}
        {/* ============================================================ */}
        <div className="rounded-2xl border-[1.5px] border-[#f1ded7] bg-gradient-to-b from-white via-orange-50/15 to-white backdrop-blur-xl p-6 shadow-sm space-y-5 flex flex-col justify-between">
          
          {/* Card 2 Header */}
          <div className="space-y-2 pb-3 border-b border-stone-200/80">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#D9532F]/10 border border-[#D9532F]/30 flex items-center justify-center text-[#D9532F] shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D9532F] block">
                    TBD INVESTORS EXECUTION BLUEPRINT
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 font-mono">
                    TBD INVESTORS // PORTFOLIO CORPORATE FINANCE & FP&A
                  </h4>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7] w-fit max-w-full whitespace-normal leading-[1.4] break-words shrink-0">
                Corporate Finance & Strategy
              </span>
            </div>
            
            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              Sponsor-Level Value Creation · Multi-State Platform Operations (10 Target States) · Financial Architecture
            </p>
          </div>

          {/* Card 2 Interactive Tab Switcher */}
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            {TBD_ROADMAP_SPRINTS.map((sprint, idx) => {
              const isActive = activeTbdSprint === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTbdSprint(idx)}
                  className={`p-2.5 sm:p-3 text-left rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-[#df5837] text-white font-bold border-[#df5837] shadow-md ring-2 ring-[#df5837]/30 scale-[1.01]'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-[#f1ded7] shadow-2xs hover:border-[#df5837]/40'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <span className={`text-[9px] font-bold uppercase tracking-wider block ${
                    isActive ? 'text-orange-100' : 'text-[#D9532F]'
                  }`}>
                    {sprint.sprintNum}
                  </span>
                  <span className={`text-[11px] font-bold leading-tight mt-0.5 truncate ${
                    isActive ? 'text-white' : 'text-stone-900'
                  }`}>
                    {sprint.daysRange}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Card 2 Active Sprint Content */}
          {currentTbd && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Sprint Focus Header */}
              <div className="p-4 bg-white rounded-2xl border border-[#f1ded7] shadow-2xs space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold text-[#D9532F]">
                    {currentTbd.daysRange}: {currentTbd.title}
                  </span>
                  <span className="text-[10px] font-mono font-semibold bg-[#D9532F]/10 text-[#C2410C] px-3 py-1 rounded-full border border-[#D9532F]/20 w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                    Focus: {currentTbd.focus}
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {currentTbd.summary}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="bg-white p-6 rounded-2xl border border-[#f1ded7] shadow-2xs space-y-2.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#df5837] tracking-wider block">
                  Key Sprint Deliverables:
                </span>
                <ul className="space-y-2 text-xs text-stone-800 font-sans">
                  {currentTbd.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#df5837] font-bold text-base leading-none select-none shrink-0 mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Executive Leverage Callout */}
              <div className="bg-gradient-to-br from-orange-50/90 via-white to-orange-50/60 p-4 rounded-2xl border border-[#f1ded7] shadow-2xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold text-[#C2410C]">
                  <Sparkles className="w-3.5 h-3.5 text-[#df5837]" />
                  <span>Executive Leverage:</span>
                </div>
                <p className="text-xs text-stone-800 leading-relaxed font-sans font-medium">
                  "{currentTbd.executiveLeverage}"
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default OperationalRoadmapSection;

