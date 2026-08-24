import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  Zap, 
  Building2, 
  FileText, 
  Users, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { CHIEF_OF_STAFF_ROADMAP } from '../data/candidateData';

export const ChiefOfStaffRoadmap: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = CHIEF_OF_STAFF_ROADMAP[activePhaseIndex];

  return (
    <div className="space-y-6 font-sans">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border-[1.5px] border-[#f1ded7] p-6 shadow-sm">
        <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#df5837] mb-2 font-mono">
          Operational Roadmap
        </h2>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-serif">
          Consulting & Strategy 90-Day Action Plan
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed font-sans">
          Proactive execution roadmap demonstrating how Donna Rivas will provide analytical rigor, structured synthesis, and high-leverage consulting support to CEO Chris Callander in scaling Oaklin Lane's pediatric therapy network.
        </p>
      </div>

      {/* Phase Timeline Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CHIEF_OF_STAFF_ROADMAP.map((item, index) => {
          const isActive = activePhaseIndex === index;
          return (
            <button
              key={index}
              onClick={() => setActivePhaseIndex(index)}
              className={`p-6 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#df5837] text-white border-[#df5837] shadow-md'
                  : 'bg-white text-slate-700 border-[#f1ded7] hover:border-[#df5837]/40 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-orange-50 text-[#df5837]'
                }`}>
                  PHASE 0{index + 1}
                </span>
                <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-orange-100' : 'text-slate-500'}`}>
                  {item.timeframe}
                </span>
              </div>
              <h4 className={`text-sm font-bold uppercase mt-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                {item.focusArea}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Phase Detailed Breakdown Card */}
      <div className="bg-white rounded-2xl border-[1.5px] border-[#f1ded7] shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#f1ded7]">
          <div>
            <span className="text-[10px] font-bold text-[#df5837] uppercase tracking-widest font-mono">
              {activePhase.phase} • {activePhase.timeframe}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 font-serif">
              {activePhase.focusArea}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-[#df5837]/10 text-[#df5837] px-3 py-1 rounded-full border border-[#f1ded7]">
              High-Leverage Execution
            </span>
          </div>
        </div>

        {/* 3 Columns: Initiatives, Concrete Deliverables, Target KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Key Strategic Initiatives */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-widest pb-2 border-b-2 border-[#df5837] font-mono">
              Strategic Initiatives
            </div>
            <ul className="space-y-3">
              {activePhase.initiatives.map((init, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-[#f1ded7]">
                  <div className="w-1.5 h-1.5 bg-[#df5837] rounded-full mt-1.5 shrink-0" />
                  <span>{init}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Concrete Executive Deliverables */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-widest pb-2 border-b-2 border-[#df5837] font-mono">
              Concrete Deliverables
            </div>
            <ul className="space-y-3">
              {activePhase.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-900 leading-relaxed bg-stone-50 p-4 rounded-xl border border-[#f1ded7] font-medium">
                  <div className="w-1.5 h-1.5 bg-[#df5837] rounded-full mt-1.5 shrink-0" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Target KPIs */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-widest pb-2 border-b-2 border-[#df5837] font-mono">
              Success Metrics & KPIs
            </div>
            <ul className="space-y-3">
              {activePhase.kpis.map((kpi, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-900 leading-relaxed bg-stone-50 p-4 rounded-xl border border-[#f1ded7] font-bold">
                  <div className="w-1.5 h-1.5 bg-[#df5837] rounded-full mt-1.5 shrink-0" />
                  <span>{kpi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strategic Justification Box */}
        <div className="bg-gradient-to-r from-orange-50 to-white text-stone-800 p-5 rounded-xl border border-[#f1ded7] text-xs flex items-start gap-3">
          <div className="w-5 h-5 bg-[#df5837] text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-mono">
            ✓
          </div>
          <div className="leading-relaxed">
            <strong className="text-[#df5837] uppercase tracking-wider text-[11px] block mb-0.5 font-mono">Execution Validation:</strong> 
            Backed by Prof. Steinberg's endorsement in business intelligence, Dr. Corso's endorsement in executive capstone delivery, and Dr. Megan Good's validation of unsupervised problem-solving in high-stakes environments.
          </div>
        </div>
      </div>
    </div>
  );
};
