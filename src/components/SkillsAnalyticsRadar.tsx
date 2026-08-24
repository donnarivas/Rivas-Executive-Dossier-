import React from 'react';
import { ShieldCheck, Brain } from 'lucide-react';

export const SkillsAnalyticsRadar: React.FC = () => {
  const skillCategories = [
    {
      category: 'Strategic Foresight & Corporate Structuring',
      score: 96,
      source: 'Georgetown University SCS (Certificate, Feb 2026)',
      evidence: 'Evaluated complex corporate governance and industry leader case studies under Prof. Gary Steinberg.'
    },
    {
      category: 'Actionable Business Intelligence & Data Synthesis',
      score: 95,
      source: 'Georgetown SCS & AmEx Capstone',
      evidence: 'Trained in distilling high-level multi-variable datasets into crisp executive briefings for leadership.'
    },
    {
      category: 'Managerial Finance & Unit Economics',
      score: 93,
      source: 'Cal Poly Pomona (Dr. Paul Sarmas)',
      evidence: 'Managerial Finance FRL 3000 mastery; modeling clinic contribution margins and financial tooling.'
    },
    {
      category: 'B2B Revenue Tactics & Partner Outreach',
      score: 94,
      source: 'Cal Poly Pomona (Dr. Megan Good)',
      evidence: 'Projected organizational decision outcomes in B2B sales; sales operations at Sierra Chevrolet & Daniel\'s.'
    },
    {
      category: 'Consulting Polish, Discretion & Integrity',
      score: 98,
      source: 'Harvard Extension School (Anne Taieb)',
      evidence: 'Exemplifies self-assurance, discretion, active listening, and high-trust leadership traits.'
    },
    {
      category: 'Unsupervised Execution & Tenacity Under Pressure',
      score: 97,
      source: 'Cal Poly Pomona & Mentors',
      evidence: 'Proactively tackles complex problems, initiates exceeding requirements, and delivers under tight deadlines.'
    }
  ];

  return (
    <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-1">
            Readiness Analytics
          </h2>
          <h3 className="text-lg font-bold text-slate-900 uppercase">
            Core Competency & Analytical Readiness Index
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Validated across official academic transcripts and faculty letters of recommendation
          </p>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900 text-white px-3 py-1 self-start sm:self-auto">
          Verified Competency Index
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-4 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-slate-900">{item.category}</span>
              <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2 py-0.5 border border-slate-300">
                {item.score}%
              </span>
            </div>

            {/* Visual Bar */}
            <div className="w-full bg-slate-200 h-2 overflow-hidden">
              <div
                className="bg-slate-900 h-full transition-all duration-500"
                style={{ width: `${item.score}%` }}
              />
            </div>

            <div className="text-[11px] text-slate-600 leading-tight">
              <span className="font-bold text-slate-900">{item.source}:</span> {item.evidence}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
