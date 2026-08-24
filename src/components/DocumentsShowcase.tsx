import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  Quote, 
  GraduationCap, 
  Building, 
  Copy, 
  Check, 
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { VERIFIED_DOCUMENTS } from '../data/candidateData';
import { EndorsementDocument } from '../types';

export const DocumentsShowcase: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDoc, setSelectedDoc] = useState<EndorsementDocument | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredDocs = VERIFIED_DOCUMENTS.filter(doc => {
    const matchesFilter = 
      filterType === 'all' ? true :
      filterType === 'georgetown' ? doc.institution.toLowerCase().includes('georgetown') :
      filterType === 'harvard' ? doc.institution.toLowerCase().includes('harvard') :
      filterType === 'calpoly' ? doc.institution.toLowerCase().includes('pomona') || doc.institution.toLowerCase().includes('cal poly') :
      filterType === 'award' ? doc.type === 'award' || doc.type === 'certificate' : true;

    const matchesSearch = 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.keyTakeaway.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.skillsHighlighted.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const handleCopyQuote = (quote: string, id: string) => {
    navigator.clipboard.writeText(`"${quote}" — ${VERIFIED_DOCUMENTS.find(d => d.id === id)?.issuer}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-2">
              Verified Credential Archive
            </h2>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
              Exhibits, Recommendations & Transcripts (7 Documents)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Official letters of recommendation, formal academic certificates, and presidential awards supporting Donna Rivas's strategic management and operational background.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-900 px-3 py-1.5 border border-slate-300">
              100% Authentic Verification
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Exhibits (7)' },
              { id: 'georgetown', label: 'Georgetown SCS (3)' },
              { id: 'harvard', label: 'Harvard Ext (1)' },
              { id: 'calpoly', label: 'Cal Poly Pomona (2)' },
              { id: 'award', label: 'Certificates (2)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer border ${
                  filterType === tab.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search exhibits by keyword or prof..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-slate-900 outline-hidden font-mono"
            />
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map((doc, idx) => (
          <div
            key={doc.id}
            className="bg-white border border-slate-200 shadow-xs hover:border-slate-900 transition-all flex flex-col justify-between group"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="text-[10px] font-black tracking-widest uppercase bg-slate-900 text-white px-2 py-0.5 font-mono">
                  EX-0{idx + 1}
                </span>
                <span className="text-[10px] text-slate-500 font-mono font-bold uppercase">
                  {doc.date}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-700 transition-colors uppercase leading-tight">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {doc.issuer} • <span className="text-slate-800">{doc.institution}</span>
                </p>
              </div>

              <div className="bg-slate-50 p-4 border border-slate-200 text-xs text-slate-700 leading-relaxed font-serif italic border-l-2 border-l-slate-900">
                "{doc.highlightQuotes[0]}"
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                  Consulting & Strategy Alignment
                </span>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {doc.relevanceToRole}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {doc.skillsHighlighted.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-800 font-mono font-semibold uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => handleCopyQuote(doc.highlightQuotes[0], doc.id)}
                className="text-xs text-slate-600 hover:text-slate-900 font-bold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copiedId === doc.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D9532F]" />
                    <span className="text-[#C2410C]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Quote</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setSelectedDoc(doc)}
                className="text-xs text-slate-900 hover:text-slate-600 font-black uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
              >
                Read Exhibit <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Document Reader Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-slate-900 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">
                  {selectedDoc.badge}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 uppercase">
                  {selectedDoc.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 font-mono">
                  {selectedDoc.issuer} • {selectedDoc.institution} ({selectedDoc.date})
                </p>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-800 leading-relaxed bg-slate-50">
              <div className="bg-white p-5 border border-slate-200 shadow-2xs font-sans text-xs space-y-2">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-slate-900" />
                  Key Takeaway for Oaklin Lane:
                </div>
                <p className="text-slate-700 italic font-serif text-sm">
                  "{selectedDoc.keyTakeaway}"
                </p>
                {selectedDoc.contactInfo && (
                  <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-100">
                    Verification Source: {selectedDoc.contactInfo}
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-3">
                  Document Transcript & Official Record
                </h4>
                <div className="whitespace-pre-line text-slate-800 bg-white p-6 border border-slate-300 font-serif text-xs sm:text-sm leading-relaxed">
                  {selectedDoc.fullText}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-white p-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium font-mono">
                Signatory: {selectedDoc.signatoryTitle}
              </span>
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Exhibit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
