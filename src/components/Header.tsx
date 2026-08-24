import React from 'react';
import { 
  Sparkles, 
  Mail, 
  Send, 
  Award, 
  FileText, 
  Users, 
  Palette, 
  Layout, 
  Compass, 
  FileCheck2, 
  Calculator, 
  Workflow, 
  Moon, 
  Sun,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CANDIDATE_PROFILE } from '../data/candidateData';
import { PortfolioTemplate } from '../types';
import { getMailtoUrl } from './ExecutiveInviteModal';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPrintModal: () => void;
  onQuickCopy: () => void;
  currentTemplate: PortfolioTemplate;
  setTemplate: (tmpl: PortfolioTemplate) => void;
  onTransmitOffer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenPrintModal,
  onQuickCopy,
  currentTemplate,
  setTemplate,
  onTransmitOffer
}) => {
  const handleConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.2 }
    });
    onQuickCopy();
  };

  const navItems = [
    { id: 'committee', label: 'Hiring Committee Memo', shortLabel: 'Committee Memo', icon: Users },
    { id: 'overview', label: 'Executive Overview', shortLabel: 'Overview', icon: Layout },
    { id: 'note', label: 'Application Letter', shortLabel: 'Application Note', icon: Send },
    { id: 'alignment', label: 'Strategic Alignment', shortLabel: 'Alignment', icon: Compass },
    { id: 'documents', label: 'Verified Exhibits (7)', shortLabel: '7 Exhibits', icon: FileCheck2 },
    { id: 'roadmap', label: '90-Day Blueprint', shortLabel: 'Roadmap', icon: Workflow },
    { id: 'simulator', label: 'Clinic Scaling Model', shortLabel: 'Scaling Model', icon: Calculator },
  ];

  const templates: { id: PortfolioTemplate; name: string; desc: string; iconColor: string }[] = [
    { id: 'editorial', name: 'Executive Editorial', desc: 'Serif display, warm ivory & refined consulting layout', iconColor: 'bg-amber-700' },
    { id: 'nordic', name: 'Nordic Modern', desc: 'Clean cards, smooth shadows & tech venture feel', iconColor: 'bg-blue-600' },
    { id: 'architectural', name: 'Architectural Grid', desc: 'Monochromatic high-contrast geometric borders', iconColor: 'bg-slate-900' },
    { id: 'midnight', name: 'Obsidian Midnight', desc: 'Dark luxury executive command center', iconColor: 'bg-purple-600' },
  ];

  const isDark = currentTemplate === 'midnight';

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 backdrop-blur-md border-b ${
      isDark 
        ? 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-lg'
        : currentTemplate === 'editorial'
        ? 'bg-[#FBFBF8]/95 border-stone-300/80 text-stone-900 shadow-xs'
        : currentTemplate === 'nordic'
        ? 'bg-white/95 border-slate-200 text-slate-900 shadow-xs'
        : 'bg-slate-50/95 border-slate-900 text-slate-900 shadow-xs'
    }`}>
      {/* Top Meta Strip / Candidate Availability Executive Banner */}
      <div className={`text-xs px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b transition-colors ${
        isDark 
          ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
          : currentTemplate === 'editorial'
          ? 'bg-[#1E293B] border-[#0F172A] text-stone-200'
          : 'bg-slate-900 border-slate-900 text-white'
      }`}>
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Glowing Slate-Blue Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/25 backdrop-blur-md rounded-full border border-[#3182ce]/30 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3182ce] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3182ce] shadow-[0_0_0_3px_rgba(49,130,206,0.2)]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-sky-200">
              CANDIDATE AVAILABILITY // IMMEDIATE IMPACT
            </span>
            <span className="text-[10px] text-stone-300 font-sans hidden sm:inline">
              · Active Candidate · Ready for Immediate Deployment &amp; Strategic Onboarding
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono">
          <button
            id="transmit-btn-header"
            type="button"
            onClick={() => {
              if (onTransmitOffer) {
                onTransmitOffer();
              } else {
                window.location.href = getMailtoUrl();
              }
            }}
            className="action-btn inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#d65528] hover:bg-[#c24525] active:scale-[0.98] text-white font-bold rounded-lg transition-all shadow-xs hover:shadow-md cursor-pointer border border-[#d65528]/40"
          >
            <Send className="w-3 h-3" />
            <span className="hidden md:inline">Transmit Formal Offer / Schedule Executive Interview</span>
            <span className="md:hidden">Schedule Interview</span>
          </button>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-3">
          {/* Candidate Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                currentTemplate === 'editorial' ? 'font-serif-display text-stone-900' : ''
              }`}>
                {CANDIDATE_PROFILE.fullName}
              </h1>
              <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full font-mono ${
                isDark 
                  ? 'bg-slate-800 text-slate-200 border border-slate-700'
                  : currentTemplate === 'editorial'
                  ? 'bg-stone-800 text-stone-100'
                  : currentTemplate === 'nordic'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                  : 'bg-slate-900 text-white'
              }`}>
                Chief of Staff Candidate
              </span>
            </div>
            <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Strategy & Operations Intern @ Oaklin Lane (CEO Chris Callander & TBD Investors)
            </p>
          </div>

          {/* Template Selector & Action Toolbar */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-center">
            {/* Live Template Switcher */}
            <div className={`flex items-center p-1 rounded-lg border text-xs ${
              isDark 
                ? 'bg-slate-900 border-slate-800' 
                : currentTemplate === 'editorial'
                ? 'bg-stone-200/70 border-stone-300'
                : 'bg-slate-100 border-slate-200'
            }`}>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 flex items-center gap-1 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <Palette className="w-3 h-3" /> Template:
              </span>
              <div className="flex items-center gap-1">
                {templates.map((t) => {
                  const isActive = currentTemplate === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTemplate(t.id)}
                      title={t.desc}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                        isActive
                          ? isDark 
                            ? 'bg-slate-800 text-white shadow-xs font-black'
                            : 'bg-white text-slate-900 shadow-xs font-black'
                          : isDark
                          ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      {t.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleConfetti}
                id="copy-app-note-btn"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wide rounded-md transition-all cursor-pointer shadow-xs ${
                  isDark
                    ? 'bg-purple-600 hover:bg-purple-500 text-white'
                    : currentTemplate === 'editorial'
                    ? 'bg-stone-900 hover:bg-stone-800 text-white'
                    : currentTemplate === 'nordic'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
                title="Copy tailored application note ready for email"
              >
                <Send className="w-3 h-3" />
                Copy Note
              </button>

              <button
                onClick={onOpenPrintModal}
                id="export-dossier-btn"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wide rounded-md border transition-all cursor-pointer shadow-xs ${
                  isDark
                    ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
                }`}
              >
                <FileText className="w-3 h-3 text-slate-500" />
                Print Dossier
              </button>
            </div>
          </div>
        </div>

        {/* Tabbed Navigation Bar */}
        <nav className={`flex space-x-1 sm:space-x-2 border-t pt-2 overflow-x-auto scrollbar-none ${
          isDark ? 'border-slate-800/80' : currentTemplate === 'editorial' ? 'border-stone-300/80' : 'border-slate-200'
        }`}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`pb-2.5 pt-1 px-3 text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border-b-2 rounded-t-sm ${
                  isActive
                    ? isDark
                      ? 'border-purple-400 text-purple-300 font-extrabold bg-slate-900/60'
                      : currentTemplate === 'editorial'
                      ? 'border-stone-900 text-stone-950 font-extrabold font-serif-display text-sm'
                      : currentTemplate === 'nordic'
                      ? 'border-blue-600 text-blue-700 font-extrabold bg-blue-50/50'
                      : 'border-slate-900 text-slate-900 font-black'
                    : isDark
                    ? 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? (isDark ? 'text-purple-400' : 'text-slate-900') : 'opacity-60'}`} />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.shortLabel}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
