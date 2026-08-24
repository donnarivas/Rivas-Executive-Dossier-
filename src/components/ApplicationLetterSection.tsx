import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Mail, 
  Download, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Building, 
  HeartHandshake, 
  TrendingUp, 
  RotateCcw,
  Sliders
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_LETTERS, CANDIDATE_PROFILE, VERIFIED_DOCUMENTS } from '../data/candidateData';

export const ApplicationLetterSection: React.FC = () => {
  const [selectedTone, setSelectedTone] = useState<'executive' | 'comprehensive' | 'operational' | 'mission_focused'>('executive');
  const [customSubject, setCustomSubject] = useState(SAMPLE_LETTERS.executive.subject);
  const [customBody, setCustomBody] = useState(SAMPLE_LETTERS.executive.body);
  const [isCopied, setIsCopied] = useState(false);
  const [highlightKeyPhrases, setHighlightKeyPhrases] = useState(true);

  const handleToneChange = (tone: 'executive' | 'comprehensive' | 'operational' | 'mission_focused') => {
    setSelectedTone(tone);
    setCustomSubject(SAMPLE_LETTERS[tone].subject);
    setCustomBody(SAMPLE_LETTERS[tone].body);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${customSubject}\n\n${customBody}`);
    setIsCopied(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleReset = () => {
    setCustomSubject(SAMPLE_LETTERS[selectedTone].subject);
    setCustomBody(SAMPLE_LETTERS[selectedTone].body);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([`Subject: ${customSubject}\n\n${customBody}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Donna_Rivas_Application_Note_Oaklin_Lane_${selectedTone}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const mailtoUrl = `mailto:${CANDIDATE_PROFILE.email}?subject=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(customBody)}`;

  const wordCount = customBody.trim().split(/\s+/).filter(Boolean).length;
  const estimatedReadTime = Math.ceil(wordCount / 200);

  return (
    <div className="space-y-8 font-sans">
      {/* Section Header */}
      <div className="bg-white border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 mb-2">
              Submission Statement
            </h2>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
              Application Note for Chris Callander & TBD Investors
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Tailored specifically for <strong>internship@tbdinvestors.com</strong>. Articulates why the Oaklin Lane Chief of Staff in Training role appeals to Donna and connects all 7 verified documentation credentials to prove immediate strategic contribution.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-mono font-bold bg-slate-100 px-2.5 py-1 border border-slate-200">
              {wordCount} WORDS • ~{estimatedReadTime} MIN READ
            </span>
          </div>
        </div>

        {/* Tone Selector Tabs */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1">
              Version:
            </span>
            
            <button
              onClick={() => handleToneChange('executive')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTone === 'executive'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
              }`}
            >
              Executive (Recommended)
            </button>

            <button
              onClick={() => handleToneChange('comprehensive')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTone === 'comprehensive'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
              }`}
            >
              Comprehensive Deep-Dive
            </button>

            <button
              onClick={() => handleToneChange('operational')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTone === 'operational'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
              }`}
            >
              Scaling & Financial Focus
            </button>

            <button
              onClick={() => handleToneChange('mission_focused')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                selectedTone === 'mission_focused'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
              }`}
            >
              Pediatric Care Mission
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={highlightKeyPhrases}
                onChange={(e) => setHighlightKeyPhrases(e.target.checked)}
                className="text-slate-900 focus:ring-slate-900 h-4 w-4"
              />
              Show Document Linkages
            </label>
          </div>
        </div>
      </div>

      {/* Main Email Composition Container */}
      <div className="bg-white border border-slate-200 shadow-xs">
        {/* Email Header Bar */}
        <div className="bg-slate-50 p-5 border-b border-slate-200 space-y-3 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-500 uppercase w-20">TO:</span>
              <span className="bg-white px-2 py-1 border border-slate-300 text-slate-900 font-bold">
                internship@tbdinvestors.com
              </span>
              <span className="text-slate-400 font-sans text-xs">(TBD Investors & Oaklin Lane)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-sans text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400 font-mono">RECIPIENT:</span>
              <span className="font-bold text-slate-800">Chris Callander (CEO, Oaklin Lane)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-500 uppercase w-20">SUBJECT:</span>
            <input
              type="text"
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
              className="flex-1 bg-white px-3 py-1.5 border border-slate-300 text-slate-900 font-bold focus:border-slate-900 outline-hidden text-xs"
            />
          </div>
        </div>

        {/* Email Body Editor / Viewer */}
        <div className="p-6 sm:p-8">
          <textarea
            value={customBody}
            onChange={(e) => setCustomBody(e.target.value)}
            rows={18}
            className="w-full text-slate-800 font-mono text-xs sm:text-sm leading-relaxed p-4 border border-slate-200 focus:border-slate-900 outline-hidden resize-y bg-slate-50/50"
            placeholder="Edit your application note here..."
          />
        </div>

        {/* Bottom Action Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Download className="w-3 h-3" />
              Download .txt
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                isCopied
                  ? 'bg-[#D9532F] text-white border-[#D9532F]'
                  : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900'
              }`}
            >
              {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {isCopied ? 'Copied to Clipboard' : 'Copy Application Note'}
            </button>

            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-slate-700" />
              Send Email
            </a>
          </div>
        </div>
      </div>

      {/* Integrated Documentation Evidence Matrix */}
      {highlightKeyPhrases && (
        <div className="bg-white border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">
                Evidence Mapping
              </h3>
              <h4 className="text-base font-bold text-slate-900 uppercase">
                How All 7 Documents Back This Submission
              </h4>
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">
              100% Credential Linkage
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                <span>Georgetown SCS Certificate</span>
                <span className="text-[10px] font-mono text-slate-400">EX-01</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                <strong>Strategic Mastery:</strong> Validates mastery in strategic management frameworks, corporate structure evaluation, and executive intelligence.
              </p>
            </div>

            <div className="border border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                <span>Prof. Gary Steinberg (Georgetown)</span>
                <span className="text-[10px] font-mono text-slate-400">EX-02</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                <strong>Business Intelligence:</strong> Endorses Donna's ability to "synthesize high-level data into actionable business intelligence" and drive operational excellence.
              </p>
            </div>

            <div className="border border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                <span>Dr. John Corso (Georgetown SCS)</span>
                <span className="text-[10px] font-mono text-slate-400">EX-03</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                <strong>Executive Communication:</strong> Commends persuasive analytical presentations (American Express capstone) and high personal responsibility.
              </p>
            </div>

            <div className="border border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                <span>Anne Taieb (Harvard Extension)</span>
                <span className="text-[10px] font-mono text-slate-400">EX-04</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                <strong>Consulting Polish:</strong> Confirms self-assurance, discretion, active listening, and high-trust interpersonal traits essential for management consultancy.
              </p>
            </div>

            <div className="border border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                <span>Dr. Megan Good (Cal Poly Pomona)</span>
                <span className="text-[10px] font-mono text-slate-400">EX-05</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                <strong>Unsupervised Execution:</strong> Highlights strategic revenue generation, B2B sales decision frameworks, and proven tenacity under high pressure.
              </p>
            </div>

            <div className="border border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                <span>Dr. Paul Sarmas (Finance) & Commercial Ops</span>
                <span className="text-[10px] font-mono text-slate-400">EX-06 / 07</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                <strong>Financial Rigor & Grit:</strong> Highlights Managerial Finance (FRL 3000) and commercial sales track record at Sierra Chevrolet and Daniel's Jewelers.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
