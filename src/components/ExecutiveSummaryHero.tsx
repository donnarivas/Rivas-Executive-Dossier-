import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Mail
} from 'lucide-react';
import { CANDIDATE_PROFILE, VERIFIED_DOCUMENTS } from '../data/candidateData';

interface ExecutiveSummaryHeroProps {
  onNavigate: (tab: string) => void;
}

export const ExecutiveSummaryHero: React.FC<ExecutiveSummaryHeroProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 font-sans">
      {/* Main Hero Geometric Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Profile Card & Contact Block (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Professional Profile Card */}
          <div className="bg-white border border-slate-200 p-6 shadow-xs flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-4">
                Professional Profile
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 mb-6">
                Analytical strategist with advanced credentials in Strategic Management from Georgetown University, 
                consulting communication coursework at Harvard Extension School, and rigorous foundations in Managerial Finance 
                and B2B sales operations from Cal Poly Pomona. Focused on scaling clinic operations and expanding access to high-quality pediatric therapy.
              </p>

              <div className="space-y-5 border-t border-slate-100 pt-5">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    Academic Pedigree
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 mt-1">Georgetown University (SCS)</p>
                  <p className="text-xs text-slate-500 font-medium">Certificate in Strategic Management (2026)</p>
                  <p className="text-xs text-slate-500 font-medium">Harvard Extension School (2025) • Cal Poly Pomona (BSBA)</p>
                </div>

                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    Key Competencies
                  </h3>
                  <ul className="text-xs space-y-1.5 mt-2 text-slate-600 list-disc pl-4 font-medium">
                    <li>Corporate Structure & Strategic Foresight</li>
                    <li>Managerial Finance (FRL 3000) & Unit Economics</li>
                    <li>B2B Sales Operations & Referral Engines</li>
                    <li>Unsupervised Problem-Solving Under Pressure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
              <span>Candidate Match</span>
              <span className="text-slate-900">TBD Investors Ref</span>
            </div>
          </div>

          {/* Contact Inquiry Dark Box */}
          <div className="bg-slate-900 text-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-2">
                Application Submission
              </h2>
              <p className="text-sm font-bold text-white font-mono">internship@tbdinvestors.com</p>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Ref: Consulting & Strategy Opportunity / Oaklin Lane Consulting & Strategy Intern
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => onNavigate('note')}
                className="w-full py-2 px-3 bg-white text-slate-900 text-xs font-black uppercase tracking-wider hover:bg-slate-200 transition-colors cursor-pointer text-center"
              >
                Review Note & Pitch
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Mission Alignment, CEO Partnership & Exhibit Highlights (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Top Row: Mission Alignment & CEO Partnership (2 cols with bold border-l-4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 p-6 border-l-4 border-slate-900 shadow-xs flex flex-col justify-center">
              <h2 className="text-base font-black uppercase tracking-tight text-slate-900 mb-2">
                Mission Alignment
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Driven by Oaklin Lane’s goal to expand access to high-quality pediatric therapy for children and families. 
                My background in finance and strategic frameworks enables me to quantify social impact, optimize clinic throughput, 
                and ensure no child is left behind during rapid regional and national scaling.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 border-l-4 border-slate-900 shadow-xs flex flex-col justify-center">
              <h2 className="text-base font-black uppercase tracking-tight text-slate-900 mb-2">
                CEO Multiplier
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ready to serve as a high-leverage multiplier for Chris Callander. 
                Leveraging shared Georgetown and Harvard academic grounding and a deep appreciation for McKinsey-standard analytical rigor 
                to own executive priorities, synthesize data, and drive operational health.
              </p>
            </div>
          </div>

          {/* Select Exhibits & Strategic Highlights Card */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-xs flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">
                  Select Exhibits: Analytical Background
                </h2>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  7 Verified Documents
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Exhibit 01 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">
                      01
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Corporate Structuring & Intelligence
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluated complex corporate structures and synthesized multi-variable data into actionable business intelligence under Prof. Gary Steinberg (Georgetown SCS).
                  </p>
                  <div className="h-2 w-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-slate-900 w-[95%]"></div>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-tight font-bold">
                    Strategic Foresight Index: 95.0%
                  </p>
                </div>

                {/* Exhibit 02 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">
                      02
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Managerial Finance & Sales Grit
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Command of Managerial Finance (FRL 3000, Dr. Paul Sarmas) combined with B2B selling frameworks (Dr. Megan Good) and real-world sales operations.
                  </p>
                  <div className="grid grid-cols-4 gap-1 h-2">
                    <div className="bg-slate-900"></div>
                    <div className="bg-slate-900"></div>
                    <div className="bg-slate-900"></div>
                    <div className="bg-slate-300"></div>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-tight font-bold">
                    Commercial Execution Readiness: 94.0%
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center text-slate-400 text-[10px] uppercase font-bold tracking-widest gap-2">
              <span className="italic">Analytical Rigor & Operational Agility</span>
              <button
                onClick={() => onNavigate('alignment')}
                className="text-slate-900 hover:text-slate-600 inline-flex items-center gap-1 cursor-pointer font-black"
              >
                View Fit Matrix <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Document Quick Strip */}
      <div className="bg-white border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-900">
              Verified Credential Exhibits
            </span>
          </div>
          <button
            onClick={() => onNavigate('documents')}
            className="text-xs text-slate-900 hover:text-slate-600 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            View All 7 Exhibits <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {VERIFIED_DOCUMENTS.map((doc, idx) => (
            <div
              key={doc.id}
              onClick={() => onNavigate('documents')}
              className="border border-slate-200 p-3 hover:border-slate-900 transition-all cursor-pointer flex flex-col justify-between bg-slate-50 hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-black tracking-widest uppercase text-slate-400">
                    EX-0{idx + 1}
                  </span>
                </div>
                <p className="text-[11px] font-bold text-slate-900 line-clamp-2 leading-tight">
                  {doc.title}
                </p>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-mono truncate">
                {doc.institution.split(',')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
