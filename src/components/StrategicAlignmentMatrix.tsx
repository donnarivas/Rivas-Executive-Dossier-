import React, { useState } from 'react';
import { 
  GraduationCap, 
  TrendingUp, 
  DollarSign, 
  HeartHandshake, 
  CheckCircle2, 
  Building2, 
  Layers, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { STRATEGIC_ALIGNMENT_PILLARS } from '../data/candidateData';

export const StrategicAlignmentMatrix: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>(STRATEGIC_ALIGNMENT_PILLARS[0].id);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4" />;
      case 'DollarSign':
        return <DollarSign className="w-4 h-4" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const activePillarData = STRATEGIC_ALIGNMENT_PILLARS.find(p => p.id === selectedPillar) || STRATEGIC_ALIGNMENT_PILLARS[0];

  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 p-6 shadow-xs">
        <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-2">
          Executive Compatibility Matrix
        </h2>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
          Chris Callander & Oaklin Lane ↔ Donna Rivas
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Side-by-side architectural analysis demonstrating how Donna’s academic preparation, financial training, and commercial grit directly mirror and multiply Chris Callander’s executive bandwidth at Oaklin Lane.
        </p>
      </div>

      {/* Side-by-Side Comparison Profile Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chris Callander Card */}
        <div className="bg-slate-900 text-white p-6 shadow-xs border border-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
                  Chief Executive Officer
                </span>
                <h3 className="text-xl font-bold text-white mt-1 uppercase">Chris Callander</h3>
                <p className="text-xs text-slate-400 font-mono">Oaklin Lane (TBD Investors Portfolio)</p>
              </div>
              <div className="w-10 h-10 bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-white font-mono">
                CC
              </div>
            </div>

            <div className="mt-5 space-y-4 text-xs text-slate-300">
              <div className="border-l-2 border-slate-700 pl-3">
                <span className="font-bold text-white uppercase text-[11px] block">Academic Pedigree</span>
                <p className="text-slate-400 mt-0.5">Georgetown University & Harvard Business School (HBS President, Entrepreneurship Club).</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-3">
                <span className="font-bold text-white uppercase text-[11px] block">Consulting Toolkit</span>
                <p className="text-slate-400 mt-0.5">Ex-McKinsey & Company management consultant, structured problem solver, strategic operator.</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-3">
                <span className="font-bold text-white uppercase text-[11px] block">Mission & National Scale</span>
                <p className="text-slate-400 mt-0.5">Building the national leader in pediatric therapy; expanding clinical access for children and families.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            Principal Leadership
          </div>
        </div>

        {/* Donna Rivas Card */}
        <div className="bg-white text-slate-900 p-6 shadow-xs border-2 border-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
                  Chief of Staff Candidate
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 uppercase">Donna Aseret Rivas</h3>
                <p className="text-xs text-slate-600 font-mono">Georgetown SCS • Harvard Ext • Cal Poly Pomona</p>
              </div>
              <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                DR
              </div>
            </div>

            <div className="mt-5 space-y-4 text-xs text-slate-700">
              <div className="border-l-2 border-slate-900 pl-3">
                <span className="font-bold text-slate-900 uppercase text-[11px] block">Institutional DNA Match</span>
                <p className="text-slate-600 mt-0.5">Georgetown SCS Certificate in Strategic Mgmt (2026) & Harvard Extension School coursework (2025).</p>
              </div>
              <div className="border-l-2 border-slate-900 pl-3">
                <span className="font-bold text-slate-900 uppercase text-[11px] block">Strategic & Data Synthesis</span>
                <p className="text-slate-600 mt-0.5">Trained in corporate structure diagnosis, AmEx capstone presentation, and actionable business intelligence.</p>
              </div>
              <div className="border-l-2 border-slate-900 pl-3">
                <span className="font-bold text-slate-900 uppercase text-[11px] block">Commercial & Financial Grit</span>
                <p className="text-slate-600 mt-0.5">Managerial Finance (FRL 3000) + B2B Sales + Frontline commercial grit (Sierra Chevrolet, Daniel's).</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] uppercase font-bold tracking-widest text-slate-400">
            Immediate CoS Leverage
          </div>
        </div>
      </div>

      {/* Interactive Pillar Selector & Deep-Dive */}
      <div className="bg-white border border-slate-200 shadow-xs">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">
            Synergy Focus Dimensions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {STRATEGIC_ALIGNMENT_PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`p-4 text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {getPillarIcon(pillar.iconName)}
                    <span className="text-xs font-black uppercase tracking-wider">{pillar.pillarTitle.split(' ')[0]}</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-60">0{idx + 1}</span>
                </div>
                <span className="text-xs line-clamp-2 opacity-90">
                  {pillar.pillarTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Breakdown */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-slate-900 text-white">
              {getPillarIcon(activePillarData.iconName)}
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 uppercase">
                {activePillarData.pillarTitle}
              </h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Strategic Synergy & Operational Value</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-5 bg-slate-50">
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-2">
                Chris Callander / Oaklin Lane Context
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {activePillarData.chrisBackground}
              </p>
            </div>

            <div className="border-2 border-slate-900 p-5 bg-white">
              <span className="text-[10px] font-black tracking-widest text-slate-900 uppercase block mb-2">
                Donna Rivas Direct Capability
              </span>
              <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                {activePillarData.donnaCapability}
              </p>
            </div>
          </div>

          <div className="bg-[#1E140F] text-white p-5 rounded-2xl">
            <div className="text-xs font-black uppercase tracking-wider text-[#D9532F] mb-1 flex items-center gap-1.5 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#D9532F]" />
              Executive Synergy & Operational Leverage:
            </div>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              {activePillarData.synergyImpact}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span><strong>Verified Document Reference:</strong> {activePillarData.supportingEvidence}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
