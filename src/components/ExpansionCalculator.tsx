import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Building2, 
  DollarSign, 
  Sparkles, 
  Sliders
} from 'lucide-react';

export const ExpansionCalculator: React.FC = () => {
  const [numClinics, setNumClinics] = useState<number>(5);
  const [therapistsPerClinic, setTherapistsPerClinic] = useState<number>(6);
  const [sessionsPerWeekPerTherapist, setSessionsPerWeekPerTherapist] = useState<number>(26);
  const [ratePerSession, setRatePerSession] = useState<number>(145);
  const [monthlyClinicOverhead, setMonthlyClinicOverhead] = useState<number>(22000);
  const [therapistSalaryAnnual, setTherapistSalaryAnnual] = useState<number>(92000);

  // Calculations
  const totalTherapists = numClinics * therapistsPerClinic;
  const weeklySessionsTotal = totalTherapists * sessionsPerWeekPerTherapist;
  const monthlySessionsTotal = weeklySessionsTotal * 4.33;
  const annualSessionsTotal = weeklySessionsTotal * 50; // assuming 50 working weeks

  const annualGrossRevenue = annualSessionsTotal * ratePerSession;
  const annualTherapistCostTotal = totalTherapists * therapistSalaryAnnual;
  const annualClinicOverheadTotal = numClinics * monthlyClinicOverhead * 12;
  const annualTotalCosts = annualTherapistCostTotal + annualClinicOverheadTotal;
  const annualOperatingProfit = annualGrossRevenue - annualTotalCosts;
  const operatingMarginPercent = annualGrossRevenue > 0 ? ((annualOperatingProfit / annualGrossRevenue) * 100) : 0;

  // Approximate unique children served assuming 1.5 sessions/week per child
  const estimatedChildrenServedMonthly = Math.round(monthlySessionsTotal / 6);

  const applyPreset = (preset: 'early' | 'regional' | 'national') => {
    if (preset === 'early') {
      setNumClinics(3);
      setTherapistsPerClinic(4);
      setSessionsPerWeekPerTherapist(24);
      setRatePerSession(140);
      setMonthlyClinicOverhead(18000);
    } else if (preset === 'regional') {
      setNumClinics(8);
      setTherapistsPerClinic(6);
      setSessionsPerWeekPerTherapist(26);
      setRatePerSession(150);
      setMonthlyClinicOverhead(22000);
    } else if (preset === 'national') {
      setNumClinics(25);
      setTherapistsPerClinic(8);
      setSessionsPerWeekPerTherapist(28);
      setRatePerSession(155);
      setMonthlyClinicOverhead(26000);
    }
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-2">
              Financial Simulation & Unit Economics
            </h2>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
              Pediatric Therapy Clinic Unit Economics & Scaling Sandbox
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Demonstrating Donna’s quantitative modeling capabilities in Managerial Finance (FRL 3000) and Strategic Management—evaluating clinic throughput, patient access metrics, and operational contribution margins for Oaklin Lane.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1">Presets:</span>
            <button
              onClick={() => applyPreset('early')}
              className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 cursor-pointer"
            >
              Seed (3)
            </button>
            <button
              onClick={() => applyPreset('regional')}
              className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 cursor-pointer"
            >
              Regional (8)
            </button>
            <button
              onClick={() => applyPreset('national')}
              className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider border border-slate-900 bg-slate-900 text-white cursor-pointer"
            >
              National (25)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Controls vs Output Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Inputs (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 p-6 shadow-xs space-y-5">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest pb-3 border-b border-slate-100 flex items-center justify-between">
            <span>Operational & Financial Levers</span>
            <span className="text-[10px] font-mono text-slate-400">INPUT MATRIX</span>
          </h3>

          <div className="space-y-4 font-mono">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5 font-sans uppercase">
                <span>Active Clinics:</span>
                <span className="font-mono text-slate-900 font-bold">{numClinics} Clinics</span>
              </div>
              <input
                type="range"
                min={1}
                max={40}
                value={numClinics}
                onChange={e => setNumClinics(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5 font-sans uppercase">
                <span>Therapists / Clinic (OT/PT/SLP):</span>
                <span className="font-mono text-slate-900 font-bold">{therapistsPerClinic} Clinicians</span>
              </div>
              <input
                type="range"
                min={2}
                max={15}
                value={therapistsPerClinic}
                onChange={e => setTherapistsPerClinic(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5 font-sans uppercase">
                <span>Sessions / Week / Clinician:</span>
                <span className="font-mono text-slate-900 font-bold">{sessionsPerWeekPerTherapist} sessions</span>
              </div>
              <input
                type="range"
                min={15}
                max={35}
                value={sessionsPerWeekPerTherapist}
                onChange={e => setSessionsPerWeekPerTherapist(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5 font-sans uppercase">
                <span>Reimbursement Rate / Session:</span>
                <span className="font-mono text-slate-900 font-bold">${ratePerSession}</span>
              </div>
              <input
                type="range"
                min={90}
                max={220}
                step={5}
                value={ratePerSession}
                onChange={e => setRatePerSession(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5 font-sans uppercase">
                <span>Monthly Clinic Fixed Overhead:</span>
                <span className="font-mono text-slate-900 font-bold">${monthlyClinicOverhead.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={10000}
                max={45000}
                step={1000}
                value={monthlyClinicOverhead}
                onChange={e => setMonthlyClinicOverhead(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5 font-sans uppercase">
                <span>Clinician Compensation (Base+Ben):</span>
                <span className="font-mono text-slate-900 font-bold">${therapistSalaryAnnual.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={75000}
                max={125000}
                step={1000}
                value={therapistSalaryAnnual}
                onChange={e => setTherapistSalaryAnnual(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 uppercase tracking-wider font-mono">
            *Modeled with 50 operating weeks/year & standard pediatric insurance reimbursement benchmarks.
          </div>
        </div>

        {/* Right Column: Key Access & Financial KPIs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Access & Patient Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900 text-white p-6 shadow-xs border border-slate-900">
              <div className="flex items-center justify-between text-slate-400 text-xs font-black uppercase tracking-widest mb-2 font-mono">
                <span>Patients Reached</span>
                <Users className="w-4 h-4 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
                ~{estimatedChildrenServedMonthly.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-2">
                Monthly active pediatric patients receiving care
              </div>
            </div>

            <div className="bg-white border-2 border-slate-900 text-slate-900 p-6 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs font-black uppercase tracking-widest mb-2 font-mono">
                <span>Annual Sessions</span>
                <TrendingUp className="w-4 h-4 text-slate-900" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
                {annualSessionsTotal.toLocaleString()}
              </div>
              <div className="text-xs text-slate-600 mt-2">
                Across {totalTherapists} clinicians in {numClinics} clinics
              </div>
            </div>
          </div>

          {/* Financial Unit Economics Card */}
          <div className="bg-white border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">
                Financial Economics Summary
              </h3>
              <span className={`text-xs font-mono font-bold px-2.5 py-0.5 border ${
                operatingMarginPercent >= 20 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}>
                MARGIN: {operatingMarginPercent.toFixed(1)}%
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-50 p-4 border border-slate-200">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">Gross Revenue</span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-mono block mt-1">
                  ${(annualGrossRevenue / 1000000).toFixed(2)}M
                </span>
                <span className="text-[9px] text-slate-400 uppercase font-mono block mt-1">Annual Run-Rate</span>
              </div>

              <div className="bg-slate-50 p-4 border border-slate-200">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">Total Cost Base</span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-mono block mt-1">
                  ${(annualTotalCosts / 1000000).toFixed(2)}M
                </span>
                <span className="text-[9px] text-slate-400 uppercase font-mono block mt-1">Labor + Leases</span>
              </div>

              <div className="bg-slate-900 text-white p-4 border border-slate-900">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">Contribution</span>
                <span className="text-lg sm:text-xl font-bold text-white font-mono block mt-1">
                  ${(annualOperatingProfit / 1000000).toFixed(2)}M
                </span>
                <span className="text-[9px] text-slate-400 uppercase font-mono block mt-1">EBITDA Proxy</span>
              </div>
            </div>

            {/* Strategic Commentary */}
            <div className="bg-slate-50 p-4 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 uppercase tracking-wider text-[11px] block mb-0.5">Chief of Staff Operational Oversight:</strong> 
                As Oaklin Lane opens new locations, Donna will maintain live clinic economics models, track clinician ramp curves, and pinpoint regional referral bottlenecks to protect contribution margins as care expands.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
