import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitBranch, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Target, 
  Layers, 
  Activity, 
  BarChart3, 
  CheckCircle2, 
  Sparkles,
  Maximize2,
  Minimize2,
  Network
} from 'lucide-react';

export type TrackType = 'oaklin' | 'tbd';

interface SubNode {
  id: string;
  title: string;
  desc: string;
  outcome: string;
  outcomeMetric: string;
  methodology: string;
}

interface PrimaryBranch {
  id: string;
  code: string;
  title: string;
  domain: string;
  description: string;
  subNodes: SubNode[];
}

interface TrackData {
  id: TrackType;
  trackLabel: string;
  roleTitle: string;
  company: string;
  rootObjective: string;
  rootSubtitle: string;
  strategicFocus: string;
  branches: PrimaryBranch[];
}

const ISSUE_TREE_DATA: Record<TrackType, TrackData> = {
  oaklin: {
    id: 'oaklin',
    trackLabel: 'Track A: Consulting & Strategy Intern',
    roleTitle: 'Consulting & Strategy Intern (Oaklin Lane)',
    company: 'Oaklin Lane',
    rootObjective: 'Oaklin Lane Consulting Value Creation & Strategic Rigor',
    rootSubtitle: 'Primary Strategic Objective // Institutional Consulting Rigor, Strategic Synthesis & High-Leverage Deliverables',
    strategicFocus: 'Driving analytical rigor, synthesizing multi-source qualitative and quantitative data into client-ready deliverables, and structuring operational execution for Oaklin Lane.',
    branches: [
      {
        id: 'oaklin-b1',
        code: 'BRANCH 01',
        title: 'Diagnostic & Quantitative Research',
        domain: 'Market Mapping, Financial Modeling & Benchmark Analysis',
        description: 'Conducting rigorous quantitative diagnostics, multi-market geographic sizing, clinic unit economic modeling, and operational benchmark analysis across pediatric therapy platforms.',
        subNodes: [
          {
            id: 'o-b1-s1',
            title: 'Market Mapping & Geographic Sizing',
            desc: 'Granular geographic demographic analysis, pediatric provider density mapping, and regional therapy demand estimation.',
            outcome: 'Market Opportunity Precision',
            outcomeMetric: '10+ Regional Hubs Mapped',
            methodology: 'Zip-code level demographic clustering & provider capacity benchmarks'
          },
          {
            id: 'o-b1-s2',
            title: 'Financial & Unit Economic Modeling',
            desc: 'Dynamic clinic-level contribution models, therapist caseload utilization curves, and multi-scenario sensitivity analyses.',
            outcome: 'Contribution Margin Optimization',
            outcomeMetric: '+450 bps EBITDA Precision',
            methodology: 'FRL 3000 managerial finance rigor & dynamic sensitivity matrices'
          },
          {
            id: 'o-b1-s3',
            title: 'Operational Benchmark Analysis',
            desc: 'Benchmarking clinic throughput, patient intake latency, and clinician onboarding cycles against top-tier institutional standards.',
            outcome: 'Throughput Gap Identification',
            outcomeMetric: '-35% Intake Latency',
            methodology: 'Theory of Constraints (TOC) & multi-clinic baseline audits'
          }
        ]
      },
      {
        id: 'oaklin-b2',
        code: 'BRANCH 02',
        title: 'Strategy & Framework Formulation',
        domain: 'Gap Analysis, Hypothesis Testing & Actionable Recommendations',
        description: 'Translating unstructured operational diagnostics into structured MECE problem-solving frameworks, gap analyses, and high-conviction client recommendations.',
        subNodes: [
          {
            id: 'o-b2-s1',
            title: 'Operational Gap Analysis',
            desc: 'Isolating operational bottlenecks across provider recruitment, clinical onboarding, and payer pre-authorization workflows.',
            outcome: 'Root-Cause Resolution',
            outcomeMetric: '100% MECE Isolation',
            methodology: 'Hypothesis-driven issue trees & Pareto 80/20 root-cause analysis'
          },
          {
            id: 'o-b2-s2',
            title: 'Strategic Recommendation Synthesis',
            desc: 'Synthesizing complex multi-variable clinical and operational findings into decisive, actionable strategic initiatives.',
            outcome: 'Executive Decision Readiness',
            outcomeMetric: 'Zero-Ambiguity Briefs',
            methodology: 'Georgetown Strategic Management synthesis & executive trade-off matrices'
          },
          {
            id: 'o-b2-s3',
            title: 'Expansion Prioritization Matrix',
            desc: 'Evaluating de novo clinic rollouts vs. partner acquisitions across capital requirements, regulatory timelines, and clinical feasibility.',
            outcome: 'De-risked Growth Sequence',
            outcomeMetric: 'Optimized Capital Deployment',
            methodology: 'Multi-criteria decision analysis & strategic scoring rubrics'
          }
        ]
      },
      {
        id: 'oaklin-b3',
        code: 'BRANCH 03',
        title: 'Operational Execution & Deliverables',
        domain: 'Slide Deck Architecture, Stakeholder Reporting & Workstream Execution',
        description: 'Architecting institutional-grade client slide decks, executive board materials, standardized workflow playbooks, and managing cross-functional workstreams.',
        subNodes: [
          {
            id: 'o-b3-s1',
            title: 'Executive Slide Deck Architecture',
            desc: 'Structuring high-impact visual presentations, storyline pyramids, and client-ready deliverables meeting top-tier McKinsey standards.',
            outcome: 'Institutional Deliverable Polish',
            outcomeMetric: '100% Client-Ready',
            methodology: 'Pyramid Principle storyline structuring & executive visual design'
          },
          {
            id: 'o-b3-s2',
            title: 'Stakeholder Reporting & WBR Dashboards',
            desc: 'Designing weekly business review dashboards, KPI reporting packages, and sponsor progress memos for leadership and TBD Investors.',
            outcome: 'Reporting Cadence Transparency',
            outcomeMetric: '100% Weekly Cadence',
            methodology: 'Executive KPI cockpit design & multi-variable data synthesis'
          },
          {
            id: 'o-b3-s3',
            title: 'Process Workflows & SOP Codification',
            desc: 'Developing standardized operational playbooks, clinician onboarding SOPs, and reusable consulting toolkits for future intern cohorts.',
            outcome: 'Institutional Memory & Scale',
            outcomeMetric: '-25% Onboarding Ramp',
            methodology: 'Standardized operating protocols & digital knowledge hubs'
          }
        ]
      }
    ]
  },
  tbd: {
    id: 'tbd',
    trackLabel: 'Track B: Corporate Finance & Strategy Intern',
    roleTitle: 'Corporate Finance & Strategy Intern (TBD Investors)',
    company: 'TBD Investors',
    rootObjective: 'TBD Portfolio Value Creation & Strategic Governance',
    rootSubtitle: 'Primary Strategic Objective // Investment Thesis Underwriting & Portfolio Value Creation',
    strategicFocus: 'Executing institutional unit economic modeling, strategic market due diligence, and high-cadence board governance for portfolio companies.',
    branches: [
      {
        id: 'tbd-b1',
        code: 'BRANCH 01',
        title: 'Portfolio Financial Modeling & Unit Economics',
        domain: 'Financial Engineering & Unit Economics',
        description: 'Building dynamic 3-statement models, clinic-level EBITDA bridges, and granular capital expenditure schedules for rapid multi-site rollouts.',
        subNodes: [
          {
            id: 't-b1-s1',
            title: 'Clinic-Level EBITDA Decomposition',
            desc: 'Isolating fixed vs. variable clinic overhead, therapist billable utilization curves, and commercial payer mix margins.',
            outcome: 'Margin Optimization',
            outcomeMetric: '+450 bps EBITDA',
            methodology: 'Contribution margin waterfalls & therapist utilization sensitivity tables'
          },
          {
            id: 't-b1-s2',
            title: 'Capex Scaling Projections',
            desc: 'Rigorous multi-site buildout capex, leasehold improvement amortizations, and dynamic working capital cycle modeling.',
            outcome: 'Capital Allocation Precision',
            outcomeMetric: 'Precision IRR Engine',
            methodology: 'Multi-scenario DCF valuations & lease payback milestone matrices'
          }
        ]
      },
      {
        id: 'tbd-b2',
        code: 'BRANCH 02',
        title: 'Strategic Due Diligence & Market Analysis',
        domain: 'Market Expansion & Competitive Intelligence',
        description: 'Mapping demographic density of pediatric care needs, evaluating payer reimbursement dynamics, and isolating defensible operational moats.',
        subNodes: [
          {
            id: 't-b2-s1',
            title: 'TAM/SAM Sizing for Pediatric Care Hubs',
            desc: 'Granular epidemiological demographic mapping isolating high-need, underserved pediatric therapy MSA clusters.',
            outcome: 'Expansion Roadmap',
            outcomeMetric: 'Validated Target Hubs',
            methodology: 'Geographic cluster spatial analysis & patient-to-provider ratio scoring'
          },
          {
            id: 't-b2-s2',
            title: 'Competitor Operating Benchmarks',
            desc: 'Comprehensive benchmarking of competitor clinician turnover rates, compensation models, and reimbursement contracts.',
            outcome: 'Defensible Moat Identification',
            outcomeMetric: 'Moat Validation',
            methodology: 'Primary competitor market teardown & operational cost structure comps'
          }
        ]
      },
      {
        id: 'tbd-b3',
        code: 'BRANCH 03',
        title: 'Executive Leverage & Board Reporting',
        domain: 'Executive Cadence & Board Governance',
        description: 'Synthesizing portfolio clinical, operational, and financial KPIs into institutional monthly board packs with actionable variance analysis.',
        subNodes: [
          {
            id: 't-b3-s1',
            title: 'Automated Monthly KPI Dashboards',
            desc: 'Automated roll-up of clinic throughput, therapist capacity utilization, and cash conversion cycles for leadership.',
            outcome: 'Decisive Leadership Governance',
            outcomeMetric: 'Zero-Lag Decision Cadence',
            methodology: 'Automated variance tracking & executive flash report generation'
          }
        ]
      }
    ]
  }
};

interface DiagnosticIssueTreeProps {
  initialTrack?: TrackType;
}

export const DiagnosticIssueTree: React.FC<DiagnosticIssueTreeProps> = ({ 
  initialTrack = 'oaklin' 
}) => {
  const [activeTrack, setActiveTrack] = useState<TrackType>(initialTrack);
  const [expandedBranchIds, setExpandedBranchIds] = useState<Record<string, boolean>>({
    'oaklin-b1': true,
    'oaklin-b2': true,
    'oaklin-b3': true,
    'tbd-b1': true,
    'tbd-b2': true,
    'tbd-b3': true,
  });
  const [selectedSubNodeId, setSelectedSubNodeId] = useState<string | null>(null);

  const currentTrackData = ISSUE_TREE_DATA[activeTrack];

  const toggleBranch = (branchId: string) => {
    setExpandedBranchIds(prev => ({
      ...prev,
      [branchId]: !prev[branchId]
    }));
  };

  const handleExpandAll = () => {
    const nextState: Record<string, boolean> = {};
    currentTrackData.branches.forEach(b => {
      nextState[b.id] = true;
    });
    setExpandedBranchIds(prev => ({ ...prev, ...nextState }));
  };

  const handleCollapseAll = () => {
    const nextState: Record<string, boolean> = {};
    currentTrackData.branches.forEach(b => {
      nextState[b.id] = false;
    });
    setExpandedBranchIds(prev => ({ ...prev, ...nextState }));
  };

  const allExpanded = currentTrackData.branches.every(b => expandedBranchIds[b.id]);

  return (
    <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-3xl p-5 sm:p-7 shadow-sm space-y-7">
      
      {/* ---------------------------------------------------------------- */}
      {/* 1. SECTION HEADER & DUAL-TRACK SEGMENTED SWITCHER                */}
      {/* ---------------------------------------------------------------- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#f1ded7] pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D9532F] bg-[#D9532F]/10 px-2.5 py-0.5 rounded-full border border-[#D9532F]/20 flex items-center gap-1">
              <Network className="w-3 h-3 text-[#D9532F]" />
              MECE ISSUE TREE // DIAGNOSTIC ARCHITECTURE
            </span>
            <span className="text-[10px] font-mono font-medium text-slate-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
              Mutually Exclusive, Collectively Exhaustive
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight">
            Strategic Diagnostic Issue Tree
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl">
            Interactive branching framework translating high-level executive objectives into concrete workstreams, sub-deliverables, and quantified outcomes.
          </p>
        </div>

        {/* Global Expand / Collapse Control */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={allExpanded ? handleCollapseAll : handleExpandAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-700 bg-stone-100 hover:bg-stone-200 border border-stone-300/80 transition-colors cursor-pointer shadow-2xs"
            title={allExpanded ? "Collapse all branch nodes" : "Expand all branch nodes"}
          >
            {allExpanded ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-slate-600" />
                <span>Collapse All</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-[#D9532F]" />
                <span>Expand All</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 2. DUAL-TRACK ROLE SWITCHER TABS                                 */}
      {/* ---------------------------------------------------------------- */}
      <div className="space-y-2.5">
        <span className="text-[11px] font-mono uppercase font-bold text-slate-500 tracking-wider block">
          Select Strategic Track to Diagnose:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-stone-100/90 rounded-2xl border border-[#f1ded7]">
          {/* Track A Button */}
          <button
            onClick={() => {
              setActiveTrack('oaklin');
              setSelectedSubNodeId(null);
            }}
            className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
              activeTrack === 'oaklin'
                ? 'bg-slate-900 text-white shadow-md ring-2 ring-[#D9532F]/40'
                : 'bg-white hover:bg-stone-50 text-slate-700 border border-stone-200/70'
            }`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md ${
                  activeTrack === 'oaklin'
                    ? 'bg-[#D9532F] text-white'
                    : 'bg-[#D9532F]/10 text-[#D9532F]'
                }`}>
                  Track A
                </span>
                <span className={`text-xs font-mono font-bold ${
                  activeTrack === 'oaklin' ? 'text-amber-300' : 'text-slate-500'
                }`}>
                  Oaklin Lane
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold font-sans truncate">
                Consulting & Strategy Intern
              </h4>
            </div>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
              activeTrack === 'oaklin'
                ? 'bg-[#D9532F] text-white'
                : 'bg-stone-200 text-slate-400'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Track B Button */}
          <button
            onClick={() => {
              setActiveTrack('tbd');
              setSelectedSubNodeId(null);
            }}
            className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
              activeTrack === 'tbd'
                ? 'bg-slate-900 text-white shadow-md ring-2 ring-[#3182ce]/40'
                : 'bg-white hover:bg-stone-50 text-slate-700 border border-stone-200/70'
            }`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md ${
                  activeTrack === 'tbd'
                    ? 'bg-[#2c5282] text-white'
                    : 'bg-[#eaf1f8] text-[#2c5282]'
                }`}>
                  Track B
                </span>
                <span className={`text-xs font-mono font-bold ${
                  activeTrack === 'tbd' ? 'text-sky-300' : 'text-slate-500'
                }`}>
                  TBD Investors
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold font-sans truncate">
                Corporate Finance & Strategy Intern
              </h4>
            </div>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
              activeTrack === 'tbd'
                ? 'bg-[#3182ce] text-white'
                : 'bg-stone-200 text-slate-400'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 3. INTERACTIVE BRANCHING ISSUE TREE CONTAINER                    */}
      {/* ---------------------------------------------------------------- */}
      <div className="space-y-6 pt-2">
        
        {/* ============================================================== */}
        {/* ROOT NODE: PRIMARY STRATEGIC OBJECTIVE                         */}
        {/* ============================================================== */}
        <div className="relative">
          {/* Main Root Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-stone-900 via-slate-900 to-stone-950 text-white border border-stone-800 shadow-lg relative overflow-hidden">
            {/* Background Texture Ambient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D9532F]/15 via-[#3182ce]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-stone-200 font-mono text-[10px] font-bold uppercase tracking-wider border border-white/15">
                  <Target className="w-3.5 h-3.5 text-[#D9532F]" />
                  ROOT OBJECTIVE // LEVEL 0
                </span>
                <span className="text-[11px] font-mono text-stone-400 font-medium">
                  {currentTrackData.company}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-lg sm:text-2xl font-black font-sans text-white tracking-tight">
                  {currentTrackData.rootObjective}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  {currentTrackData.strategicFocus}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-stone-400 border-t border-white/10 flex-wrap">
                <span className="flex items-center gap-1 text-[#D9532F] font-bold">
                  <Activity className="w-3.5 h-3.5" />
                  {currentTrackData.branches.length} MECE Diagnostic Branches
                </span>
                <span>•</span>
                <span className="text-stone-300">
                  {currentTrackData.branches.reduce((acc, b) => acc + b.subNodes.length, 0)} Total Sub-Deliverable Nodes
                </span>
                <span>•</span>
                <span className="text-sky-300 font-semibold">100% Quantified Outcomes</span>
              </div>
            </div>
          </div>

          {/* Central Stem Line Connecting Root to Branches */}
          <div className="flex justify-center items-center h-8">
            <div className="w-0.5 h-full bg-gradient-to-b from-stone-900 to-[#D9532F]/60"></div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PRIMARY BRANCHES (LEVEL 1)                                     */}
        {/* ============================================================== */}
        <div className="space-y-5">
          {currentTrackData.branches.map((branch, branchIndex) => {
            const isExpanded = !!expandedBranchIds[branch.id];

            return (
              <div 
                key={branch.id} 
                className="relative rounded-2xl border-[1.5px] border-[#f1ded7] bg-white shadow-2xs hover:border-[#D9532F]/50 transition-all duration-200 overflow-hidden"
              >
                {/* Branch Header Row (Clickable Accordion Trigger) */}
                <button
                  onClick={() => toggleBranch(branch.id)}
                  className={`w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-4 transition-colors cursor-pointer ${
                    isExpanded ? 'bg-stone-50/80 border-b border-[#f1ded7]' : 'bg-white hover:bg-stone-50/50'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                    {/* Branch Index Pill */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs border border-stone-700">
                      0{branchIndex + 1}
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9532F]">
                          {branch.code}
                        </span>
                        <span className="text-stone-300">•</span>
                        <span className="text-[11px] font-mono text-slate-500 font-semibold truncate">
                          {branch.domain}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 font-sans tracking-tight">
                        {branch.title}
                      </h4>
                    </div>
                  </div>

                  {/* Branch Right Controls & Status */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#eaf1f8] text-[#2c5282] border border-[#3c6382]/25 text-[10px] font-mono font-bold">
                      <GitBranch className="w-3 h-3 text-[#2c5282]" />
                      {branch.subNodes.length} Sub-Nodes
                    </span>
                    <div className={`p-1.5 rounded-lg border transition-all ${
                      isExpanded 
                        ? 'bg-[#D9532F] text-white border-[#D9532F]' 
                        : 'bg-stone-100 text-slate-500 border-stone-300 hover:text-slate-800'
                    }`}>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Branch Expanded Content with Sub-Deliverable Nodes */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="p-4 sm:p-6 space-y-5 bg-gradient-to-b from-stone-50/40 to-white">
                        
                        {/* Branch Scope Summary */}
                        <div className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed pl-2 border-l-2 border-[#D9532F]/40">
                          {branch.description}
                        </div>

                        {/* Sub-Deliverable Nodes Tree (Level 2) */}
                        <div className="space-y-3.5 pt-1">
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
                            Sub-Deliverable Nodes &amp; Quantified Outcomes:
                          </span>

                          <div className="space-y-3 relative pl-4 sm:pl-6 border-l-2 border-dashed border-[#D9532F]/30 ml-2 sm:ml-3">
                            {branch.subNodes.map((subNode, subIdx) => {
                              const isSelected = selectedSubNodeId === subNode.id;

                              return (
                                <div 
                                  key={subNode.id} 
                                  className="relative group"
                                >
                                  {/* Branching Connector Horizontal Line */}
                                  <div className="absolute -left-4 sm:-left-6 top-5 w-4 sm:w-6 h-0.5 bg-[#D9532F]/30 group-hover:bg-[#D9532F] transition-colors" />

                                  {/* Sub-Node Card */}
                                  <div 
                                    onClick={() => setSelectedSubNodeId(isSelected ? null : subNode.id)}
                                    className={`p-4 sm:p-4.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                                      isSelected
                                        ? 'bg-amber-50/90 border-[#D9532F] shadow-sm ring-1 ring-[#D9532F]/30'
                                        : 'bg-white hover:bg-stone-50/90 border-[#f1ded7] shadow-2xs hover:border-[#D9532F]/40'
                                    }`}
                                  >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                                      
                                      {/* Left: Sub-Deliverable Title & Description */}
                                      <div className="space-y-1.5 flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          {/* Slate-Blue Sub-Deliverable Tag */}
                                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaf1f8] text-[#2c5282] text-[10px] font-mono font-bold border border-[#3c6382]/25 shadow-2xs w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#3182ce] shrink-0" />
                                            <span>{subNode.title}</span>
                                          </span>
                                          <span className="text-[10px] font-mono text-slate-400">
                                            Node 0{branchIndex + 1}.{subIdx + 1}
                                          </span>
                                        </div>

                                        <p className="text-xs text-slate-700 font-sans leading-relaxed">
                                          {subNode.desc}
                                        </p>
                                      </div>

                                      {/* Right: Quantified Outcome Terracotta Badge */}
                                      <div className="flex items-center gap-2.5 shrink-0 self-start lg:self-center">
                                        <div className="flex flex-col sm:items-end">
                                          <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
                                            Quantified Impact
                                          </span>
                                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#D9532F]/10 text-[#D9532F] font-mono font-bold text-xs border border-[#D9532F]/30 shadow-2xs">
                                            <Sparkles className="w-3 h-3 text-[#D9532F]" />
                                            <span>{subNode.outcome}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Expandable Methodology / Tooling Deep Dive on click */}
                                    {isSelected && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-3 pt-3 border-t border-[#f1ded7] text-xs font-mono text-slate-600 space-y-1.5"
                                      >
                                        <div className="flex items-center gap-1.5 text-[#1E140F] font-bold">
                                          <ArrowRight className="w-3.5 h-3.5 text-[#D9532F]" />
                                          <span>Execution Methodology &amp; Implementation:</span>
                                        </div>
                                        <p className="text-[11px] text-slate-700 font-sans leading-relaxed pl-5 bg-white/80 p-2.5 rounded-lg border border-[#f1ded7]">
                                          {subNode.methodology}
                                        </p>
                                      </motion.div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 4. FOOTER METHODOLOGY NOTICE                                     */}
      {/* ---------------------------------------------------------------- */}
      <div className="pt-3 border-t border-[#f1ded7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3182ce] animate-pulse"></span>
          <span>Diagnostic Issue Tree Architecture • Fully MECE Validated</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-slate-400">Target Alignment:</span>
          <span className="text-[#D9532F] font-bold">
            {activeTrack === 'oaklin' ? 'Oaklin Lane (Consulting & Strategy Intern)' : 'TBD Investors (Corporate Finance)'}
          </span>
        </div>
      </div>

    </div>
  );
};
export default DiagnosticIssueTree;
