import React from 'react';
import { X, Printer, Download, CheckCircle2, Award, Mail, GraduationCap } from 'lucide-react';
import { CANDIDATE_PROFILE, VERIFIED_DOCUMENTS, SAMPLE_LETTERS } from '../data/candidateData';

interface PrintableDossierProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableDossier: React.FC<PrintableDossierProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto print:p-0 print:bg-white font-sans">
      <div className="bg-white max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border-2 border-slate-900 overflow-hidden print:max-h-none print:shadow-none print:border-none">
        {/* Modal Action Header (hidden in print) */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest font-mono text-slate-400">
              CANDIDATE DOSSIER
            </span>
            <span className="text-xs text-slate-300 font-bold">• Ready for Review & Print</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-900 hover:bg-slate-200 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Document Content */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm print:p-0 print:text-black">
          {/* Header Block */}
          <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 uppercase tracking-tight">
                {CANDIDATE_PROFILE.fullName}
              </h1>
              <p className="text-sm font-bold text-slate-900 uppercase mt-0.5">
                Chief of Staff in Training Dossier • Oaklin Lane
              </p>
              <p className="text-xs text-slate-500 mt-1 font-mono">
                Email: {CANDIDATE_PROFILE.candidateEmail} • Submission Target: {CANDIDATE_PROFILE.email}
              </p>
            </div>
            <div className="text-right text-xs font-mono font-bold text-slate-700">
              <div>Georgetown SCS (2026)</div>
              <div>Harvard Ext (2025)</div>
              <div>Cal Poly Pomona BSBA</div>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
              Executive Candidate Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              {CANDIDATE_PROFILE.summary}
            </p>
          </div>

          {/* Tailored Note to Chris Callander */}
          <div className="space-y-2 bg-slate-50 p-5 border border-slate-300 print:bg-white print:border-slate-300">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900">
              Tailored Application Note (Target: CEO Chris Callander & TBD Investors)
            </h2>
            <div className="whitespace-pre-line text-xs text-slate-800 font-mono leading-relaxed mt-2">
              {SAMPLE_LETTERS.executive.body}
            </div>
          </div>

          {/* 7 Verified Document Endorsement Summaries */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
              7 Verified Credentials & Letters of Recommendation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {VERIFIED_DOCUMENTS.map((doc, idx) => (
                <div key={doc.id} className="border border-slate-200 p-3 text-xs space-y-1 bg-slate-50">
                  <div className="flex items-center justify-between font-bold text-slate-900 uppercase">
                    <span>{doc.title}</span>
                    <span className="text-[10px] font-mono text-slate-400">EX-0{idx + 1}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">{doc.issuer} • {doc.institution} ({doc.date})</div>
                  <div className="text-[11px] text-slate-700 font-serif italic">"{doc.highlightQuotes[0]}"</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competency Matrix */}
          <div className="pt-2 border-t border-slate-200 flex flex-wrap justify-between text-[10px] text-slate-600 font-mono font-bold uppercase tracking-wider">
            <span>• Strategic Management</span>
            <span>• Managerial Finance (FRL 3000)</span>
            <span>• B2B Revenue Operations</span>
            <span>• Unsupervised Execution</span>
            <span>• High Discretion & Integrity</span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end gap-2 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2 text-xs font-black uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
