import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Target, 
  TrendingUp, 
  DollarSign, 
  HeartHandshake, 
  ShieldCheck, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Zap, 
  Copy, 
  Check, 
  ArrowRight,
  BrainCircuit,
  Activity,
  FileCheck
} from 'lucide-react';
import { 
  HIRING_COMMITTEE_KEY_EXPERIENCES, 
  MISSION_CONNECTION_STATEMENT, 
  ANALYTICAL_FRAMEWORKS_AND_METHODOLOGIES,
  CANDIDATE_PROFILE 
} from '../data/candidateData';
import { PortfolioTemplate } from '../types';

interface HiringCommitteeBriefProps {
  currentTemplate?: PortfolioTemplate;
}

export const HiringCommitteeBrief: React.FC<HiringCommitteeBriefProps> = ({ currentTemplate = 'editorial' }) => {
  const [activeSection, setActiveSection] = useState<'experiences' | 'mission' | 'frameworks'>('experiences');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>(ANALYTICAL_FRAMEWORKS_AND_METHODOLOGIES[0].id);
  const [copiedMission, setCopiedMission] = useState<boolean>(false);

  const selectedFramework = ANALYTICAL_FRAMEWORKS_AND_METHODOLOGIES.find(f => f.id === selectedFrameworkId) || ANALYTICAL_FRAMEWORKS_AND_METHODOLOGIES[0];
  const isDark = currentTemplate === 'midnight';
  const isEditorial = currentTemplate === 'editorial';
  const isNordic = currentTemplate === 'nordic';

  const handleCopyMission = () => {
    navigator.clipboard.writeText(MISSION_CONNECTION_STATEMENT.missionStatement);
    setCopiedMission(true);
    setTimeout(() => setCopiedMission(false), 2500);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner Tailored to Hiring Committee */}
      <div className={`p-6 sm:p-8 transition-colors duration-200 ${
        isDark
          ? 'bg-slate-900 border border-slate-800 text-white shadow-lg rounded-xl'
          : isEditorial
          ? 'bg-[#1E293B] border border-stone-800 text-stone-100 shadow-md rounded-lg'
          : isNordic
          ? 'bg-gradient-to-r from-slate-900 to-blue-950 border border-slate-800 text-white shadow-sm rounded-2xl'
          : 'bg-slate-900 text-white border border-slate-900 shadow-xs'
      }`}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold tracking-widest uppercase text-slate-300 font-mono flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                Hiring Committee Evaluation Memo
              </span>
              <span className="text-slate-500 font-mono">•</span>
              <span className="text-[11px] font-mono font-medium text-slate-300">
                TBD Investors & Oaklin Lane (CEO Chris Callander)
              </span>
            </div>
            <h1 className={`text-xl sm:text-3xl font-bold tracking-tight text-white ${
              isEditorial ? 'font-serif-display' : ''
            }`}>
              Strategic Candidate Evaluation & Value Contribution Memo
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Targeted analysis prepared for the TBD Investors Selection Committee & CEO Chris Callander: articulating Donna Aseret Rivas's strategic capabilities, mission alignment in pediatric therapy, and analytical frameworks for scaling clinic operations.
            </p>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 self-start">
            <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 border rounded-md ${
              isDark 
                ? 'bg-purple-950/60 text-purple-300 border-purple-800'
                : 'bg-slate-800/90 text-slate-200 border-slate-700'
            }`}>
              Role: Consulting & Strategy Intern
            </span>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="mt-7 pt-5 border-t border-slate-700/70 flex flex-wrap gap-2">
          {[
            { id: 'experiences', label: '1. Key Experiences & Strategic Contributions (5 Pillars)' },
            { id: 'mission', label: '2. Mission Alignment & Personal Values' },
            { id: 'frameworks', label: '3. Analytical Scaling Methodologies (5 Frameworks)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer rounded-md ${
                activeSection === tab.id
                  ? isDark
                    ? 'bg-purple-600 text-white shadow-xs font-extrabold'
                    : isEditorial
                    ? 'bg-white text-slate-900 shadow-xs font-extrabold'
                    : isNordic
                    ? 'bg-blue-600 text-white shadow-xs font-extrabold'
                    : 'bg-white text-slate-900 font-extrabold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section 1: 3-5 Key Experiences & Direct Contributions to CEO Chris Callander */}
      {activeSection === 'experiences' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className={`p-6 transition-colors ${
            isDark
              ? 'bg-slate-900 border border-slate-800 text-white rounded-xl'
              : isEditorial
              ? 'bg-white border border-stone-200 shadow-xs rounded-lg'
              : isNordic
              ? 'bg-white border border-slate-200 shadow-xs rounded-2xl'
              : 'bg-white border border-slate-200 p-6 shadow-xs'
          }`}>
            <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1 font-mono">
              Candidate Competency Assessment
            </h2>
            <h3 className={`text-lg sm:text-xl font-bold ${isEditorial ? 'font-serif-display text-stone-900' : isDark ? 'text-white' : 'text-slate-900'}`}>
              5 Core Experiences Mapped to Consulting & Strategy Intern Responsibilities
            </h3>
            <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Synthesizing Donna's academic training from Georgetown University and Harvard Extension with her commercial finance and sales operations experience—framed as direct, high-leverage value drivers for CEO Chris Callander.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {HIRING_COMMITTEE_KEY_EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className={`p-6 transition-all space-y-4 ${
                  isDark
                    ? 'bg-slate-900/90 border border-slate-800 hover:border-purple-500 rounded-xl text-slate-200'
                    : isEditorial
                    ? 'bg-white border border-stone-200 hover:border-stone-400 shadow-xs rounded-lg text-stone-900'
                    : isNordic
                    ? 'bg-white border border-slate-200 hover:border-blue-500 shadow-xs rounded-2xl text-slate-900'
                    : 'bg-white border border-slate-200 shadow-xs hover:border-slate-900'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-sm ${
                      isDark ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-slate-900 text-white'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                        {exp.category}
                      </span>
                      <h4 className={`text-base font-bold mt-0.5 ${
                        isEditorial ? 'font-serif-display text-stone-900' : isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.title}
                      </h4>
                    </div>
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 border font-semibold self-start sm:self-auto rounded-sm ${
                    isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {exp.academicOrRealWorldSource}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1">
                  {/* Candidate Experience */}
                  <div className="lg:col-span-5 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Candidate Background & Validation
                    </span>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {exp.candidateExperience}
                    </p>
                    <div className={`p-3.5 border text-xs italic leading-relaxed mt-2 border-l-2 rounded-r-sm ${
                      isDark
                        ? 'bg-slate-950/60 border-slate-800 border-l-purple-500 text-slate-300'
                        : 'bg-stone-50 border-stone-200 border-l-stone-900 text-stone-800'
                    }`}>
                      "{exp.endorsementCitation}"
                    </div>
                  </div>

                  {/* Direct Contribution to CEO Chris Callander */}
                  <div className={`lg:col-span-7 space-y-3 p-5 border rounded-lg ${
                    isDark
                      ? 'bg-slate-950 border-slate-800 text-slate-200'
                      : isEditorial
                      ? 'bg-[#F9F9F6] border-stone-200 text-stone-900'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}>
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider font-mono block mb-1.5 flex items-center gap-1.5 ${
                        isDark ? 'text-purple-300' : isEditorial ? 'text-amber-800' : 'text-slate-900'
                      }`}>
                        <Zap className="w-3.5 h-3.5" />
                        Direct Contribution to Chris Callander & Oaklin Lane
                      </span>
                      <p className="text-xs leading-relaxed font-medium">
                        {exp.directContributionToCEO}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2">
                      <span className="font-mono text-[11px] opacity-70 font-semibold uppercase">Expected Output:</span>
                      <span className={`font-mono font-bold px-2 py-0.5 border text-[11px] rounded-sm ${
                        isDark ? 'bg-slate-900 text-purple-200 border-purple-900' : 'bg-white text-slate-900 border-slate-300'
                      }`}>
                        {exp.measurableImpact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 2: Mission Connection Statement & Values Alignment */}
      {activeSection === 'mission' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className={`p-6 transition-colors ${
            isDark
              ? 'bg-slate-900 border border-slate-800 text-white rounded-xl'
              : isEditorial
              ? 'bg-white border border-stone-200 shadow-xs rounded-lg'
              : isNordic
              ? 'bg-white border border-slate-200 shadow-xs rounded-2xl'
              : 'bg-white border border-slate-200 shadow-xs'
          }`}>
            <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1 font-mono">
              Mission Statement & Personal Values Alignment
            </h2>
            <h3 className={`text-lg sm:text-xl font-bold ${isEditorial ? 'font-serif-display text-stone-900' : isDark ? 'text-white' : 'text-slate-900'}`}>
              Expanding Access to High-Quality Pediatric Therapy
            </h3>
            <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Expressing genuine enthusiasm for Oaklin Lane's core purpose, and demonstrating how scaling pediatric healthcare access connects directly to Donna's career objectives and ethical values.
            </p>
          </div>

          {/* Mission Statement Box */}
          <div className={`p-6 sm:p-8 space-y-4 border ${
            isDark
              ? 'bg-slate-900 border-slate-800 text-white rounded-xl shadow-lg'
              : isEditorial
              ? 'bg-[#1E293B] border-stone-800 text-stone-100 rounded-lg shadow-md'
              : 'bg-slate-900 text-white border-slate-900 shadow-xs'
          }`}>
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                Official Application Note Paragraph
              </span>
              <button
                onClick={handleCopyMission}
                className="text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 border border-slate-700 flex items-center gap-1.5 cursor-pointer font-mono rounded-md"
              >
                {copiedMission ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-orange-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Mission Paragraph</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-100 font-serif leading-relaxed italic p-2">
              "{MISSION_CONNECTION_STATEMENT.missionStatement}"
            </p>

            <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300 font-mono">
              <span>Candidate: {CANDIDATE_PROFILE.fullName}</span>
              <span>Target: Oaklin Lane (CEO Chris Callander)</span>
            </div>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSION_CONNECTION_STATEMENT.personalValuesAlignment.map((val, idx) => (
              <div key={idx} className={`p-6 space-y-2 border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 rounded-xl text-slate-200'
                  : isEditorial
                  ? 'bg-white border-stone-200 rounded-lg text-stone-900 shadow-xs'
                  : isNordic
                  ? 'bg-white border-slate-200 rounded-2xl text-slate-900 shadow-xs'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                  Value Pillar 0{idx + 1}
                </span>
                <h4 className={`text-sm font-bold ${isEditorial ? 'font-serif-display text-stone-900' : 'text-slate-900 dark:text-white'}`}>
                  {val.value}
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 3: Analytical Frameworks & Methodologies */}
      {activeSection === 'frameworks' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className={`p-6 transition-colors ${
            isDark
              ? 'bg-slate-900 border border-slate-800 text-white rounded-xl'
              : isEditorial
              ? 'bg-white border border-stone-200 shadow-xs rounded-lg'
              : isNordic
              ? 'bg-white border border-slate-200 shadow-xs rounded-2xl'
              : 'bg-white border border-slate-200 shadow-xs'
          }`}>
            <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1 font-mono">
              Analytical Rigor & Scaling Methodologies
            </h2>
            <h3 className={`text-lg sm:text-xl font-bold ${isEditorial ? 'font-serif-display text-stone-900' : isDark ? 'text-white' : 'text-slate-900'}`}>
              5 Problem-Solving Frameworks Applied to Pediatric Healthcare Scaling
            </h3>
            <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Demonstrating how academic coursework in Strategic Management (Georgetown), Managerial Finance (Cal Poly Pomona), and B2B Revenue Strategy equips Donna to tackle real-world operational bottlenecks at Oaklin Lane.
            </p>
          </div>

          {/* Interactive Framework Selector & Deep-Dive */}
          <div className={`border overflow-hidden ${
            isDark
              ? 'bg-slate-900 border-slate-800 rounded-xl'
              : isEditorial
              ? 'bg-white border-stone-200 rounded-lg shadow-xs'
              : isNordic
              ? 'bg-white border-slate-200 rounded-2xl shadow-xs'
              : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-5 border-b border-slate-200 dark:border-slate-800 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
              {ANALYTICAL_FRAMEWORKS_AND_METHODOLOGIES.map((fw, idx) => {
                const isSelected = selectedFrameworkId === fw.id;
                return (
                  <button
                    key={fw.id}
                    onClick={() => setSelectedFrameworkId(fw.id)}
                    className={`p-4 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? isDark
                          ? 'bg-purple-900/60 text-white font-bold border-b-2 md:border-b-0 md:border-t-2 border-purple-400'
                          : isEditorial
                          ? 'bg-stone-900 text-white font-bold'
                          : 'bg-slate-900 text-white font-bold'
                        : isDark
                        ? 'bg-slate-900/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                        : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase opacity-70">FW 0{idx + 1}</span>
                      <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-xs ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {fw.tags[0]}
                      </span>
                    </div>
                    <span className="text-xs uppercase line-clamp-2 leading-tight">
                      {fw.frameworkName.split('&')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Framework Detail */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Academic Origin: {selectedFramework.academicOrigin}
                  </span>
                  <h4 className={`text-base sm:text-lg font-bold mt-1 ${
                    isEditorial ? 'font-serif-display text-stone-900' : isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {selectedFramework.frameworkName}
                  </h4>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {selectedFramework.tags.map((t, idx) => (
                    <span key={idx} className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 border rounded-xs ${
                      isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-200'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-5 border space-y-2 rounded-lg ${
                  isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                    Core Analytical Methodology
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed font-sans">
                    {selectedFramework.coreMethodology}
                  </p>
                </div>

                <div className={`p-5 border-2 space-y-2 rounded-lg ${
                  isDark ? 'bg-slate-900 border-purple-500 text-slate-100' : 'bg-white border-slate-900 text-slate-900'
                }`}>
                  <span className={`text-[10px] font-bold uppercase tracking-wider font-mono block ${
                    isDark ? 'text-purple-300' : 'text-slate-900'
                  }`}>
                    Oaklin Lane Pediatric Scaling Application
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed font-medium">
                    {selectedFramework.pediatricScalingApplication}
                  </p>
                </div>
              </div>

              {/* Expected Measurable Outcome */}
              <div className={`p-5 flex items-start gap-3 rounded-lg ${
                isDark ? 'bg-purple-950/80 border border-purple-900 text-purple-100' : 'bg-slate-900 text-white'
              }`}>
                <div className="w-5 h-5 bg-white text-slate-900 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 rounded-xs">
                  ✓
                </div>
                <div className="text-xs leading-relaxed">
                  <strong className="uppercase tracking-wider text-[11px] block mb-0.5">
                    Measurable Operational Impact:
                  </strong>
                  {selectedFramework.expectedOutcome}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
