import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Send,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  Mail,
  Linkedin,
  FileText,
  CheckCircle2,
  TrendingUp,
  Zap,
  Menu,
  X,
  Target,
  ArrowUpRight,
  Cpu,
  BarChart3,
  HeartHandshake,
  Camera,
  Phone,
  Layers,
  ArrowRight,
  Eye,
  Sliders,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Printer,
  ExternalLink,
  Clock,
  Network,
  HardDrive
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PhotoEmbedGallery } from './components/PhotoEmbedGallery';
import { ProfilePhotoModal } from './components/ProfilePhotoModal';
import { ExecutiveInviteModal, getMailtoUrl } from './components/ExecutiveInviteModal';
import { CandidateChatAssistant } from './components/CandidateChatAssistant';
import { StorageManagerModal } from './components/StorageManagerModal';
import { FacultyEndorsementsSection } from './components/FacultyEndorsementsSection';
import { DualMemorandumAccordions } from './components/DualMemorandumAccordions';
import { OperationalRoadmapSection } from './components/OperationalRoadmapSection';
import { DiagnosticIssueTree } from './components/DiagnosticIssueTree';
import { saveApplicationActivity } from './lib/firestoreService';
import { safeLocalStorageSet, safeLocalStorageGet } from './lib/storage';
import { isVideoMedia, persistMediaAsset, retrieveMediaAsset } from './lib/mediaUtils';
import {
  CANDIDATE,
  PERSPECTIVE_DATA,
  CASE_STUDIES,
  EXPERIENCES,
  EDUCATIONS,
  RESUME_SKILLS,
  RECOMMENDATIONS,
  CaseStudy
} from './data';

const DEFAULT_HERO_PHOTO = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
const DEFAULT_SIDEBAR_PHOTO = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80';
const DEFAULT_PROFILE_VIDEO = '/assets/profile-video.mp4';

export function App() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>('case-claimant-crm');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [copiedNote, setCopiedNote] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Separate distinct photos/looping videos for Hero Masthead vs Sidebar Dossier
  const [heroPhoto, setHeroPhoto] = useState<string | null>(DEFAULT_HERO_PHOTO);
  const [sidebarPhoto, setSidebarPhoto] = useState<string | null>(DEFAULT_SIDEBAR_PHOTO);
  const [photoModalTarget, setPhotoModalTarget] = useState<'hero' | 'sidebar'>('hero');
  const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState<boolean>(false);

  const [isChatAssistantOpen, setIsChatAssistantOpen] = useState<boolean>(false);
  const [isStorageModalOpen, setIsStorageModalOpen] = useState<boolean>(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState<boolean>(false);
  const [isDispatching, setIsDispatching] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  
  // Perspective selector: CEO, Investor
  const [selectedPerspective, setSelectedPerspective] = useState<'ceo' | 'investor'>('ceo');

  // Load saved profile headshots or looping videos on mount and log session start
  useEffect(() => {
    retrieveMediaAsset('donna_hero_photo').then((savedHero) => {
      if (savedHero) {
        setHeroPhoto(savedHero);
      }
    });

    retrieveMediaAsset('donna_sidebar_photo').then((savedSidebar) => {
      if (savedSidebar) {
        setSidebarPhoto(savedSidebar);
      }
    });

    // Record candidate application session activity in Firestore
    saveApplicationActivity({
      activityType: 'application_progress',
      action: 'Candidate Dossier Session Opened',
      sectionId: 'masthead',
      sectionName: 'Hero Executive Dossier',
      details: 'Reviewer accessed Donna Aseret Rivas Executive Candidate Dossier for Oaklin Lane / TBD Investors'
    });
  }, []);

  const handleSelectPerspective = (perspective: 'ceo' | 'investor') => {
    setSelectedPerspective(perspective);
    saveApplicationActivity({
      activityType: 'perspective_switch',
      action: `Perspective switched to ${perspective.toUpperCase()}`,
      sectionId: 'perspective-lens',
      sectionName: 'Perspective Filter',
      details: `Reviewer selected perspective filter: ${perspective}`
    });
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const handleTransmitOffer = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDispatching(true);
    setIsInviteModalOpen(true);
    triggerToast('✓ Executive Invitation Dispatch opened — Review or customize message');

    setTimeout(() => {
      setIsDispatching(false);
    }, 2000);
  };

  const handleSaveHeroPhoto = (photoDataUrl: string | null) => {
    setHeroPhoto(photoDataUrl);
    persistMediaAsset('donna_hero_photo', photoDataUrl);
  };

  const handleSaveSidebarPhoto = (photoDataUrl: string | null) => {
    setSidebarPhoto(photoDataUrl);
    persistMediaAsset('donna_sidebar_photo', photoDataUrl);
  };

  const openHeroPhotoModal = () => {
    setPhotoModalTarget('hero');
    setIsProfilePhotoModalOpen(true);
  };

  const openSidebarPhotoModal = () => {
    setPhotoModalTarget('sidebar');
    setIsProfilePhotoModalOpen(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE.email);
    setCopiedEmail(true);
    triggerToast('Email copied to clipboard!');
    saveApplicationActivity({
      activityType: 'contact_action',
      action: 'Candidate Email Copied',
      sectionId: 'contact-info',
      details: `Candidate email copied: ${CANDIDATE.email}`
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CANDIDATE.phone);
    setCopiedPhone(true);
    triggerToast('Phone number copied to clipboard!');
    saveApplicationActivity({
      activityType: 'contact_action',
      action: 'Candidate Phone Copied',
      sectionId: 'contact-info',
      details: `Candidate phone copied: ${CANDIDATE.phone}`
    });
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const applicationNoteFullText = `OFFICIAL CANDIDATE SUBMISSION
Executive Memorandum: Strategic Candidate Brief to Chris Callander & Oaklin Lane

TO: Chris Callander, CEO (Oaklin Lane / TBD Investors)
FROM: Donna Aseret Rivas (dar159@georgetown.edu | (424) 478-1969)
ROLE TARGET: Consulting & Strategy Intern (Oaklin Lane)
SUBMISSION CHANNEL: internship@tbdinvestors.com
SUBJECT: Candidate Brief: Consulting & Strategy Intern — Donna Aseret Rivas

Dear Chris and the Oaklin Lane Selection Committee,

I am writing to enthusiastically submit my candidate brief for the Consulting & Strategy Intern position with Oaklin Lane. Having analyzed the growth dynamics of pediatric therapy platforms backed by institutional search-fund sponsors, I recognize that scaling a multi-site clinical network requires rigorous consulting craftsmanship—uncovering granular operational truths, structuring unstructured qualitative and quantitative findings into MECE frameworks, and converting strategic hypotheses into client-ready, high-conviction deliverables.

FOUNDATIONAL PREPARATION & CONSULTING TOOLKIT
Combining statutory analysis and regulatory diligence from Pepperdine University Caruso School of Law with advanced executive strategy from my Professional Certificate at Georgetown University, management consulting frameworks from Harvard Extension School, and managerial finance from Cal Poly Pomona (BSBA, 4.0 GPA), I have forged an analytical toolkit engineered specifically for top-tier consulting execution.

Three core consulting pillars define my strategic value proposition for Oaklin Lane:

1. Diagnostic & Quantitative Research: Executing granular market mapping, provider density demographic evaluations, and clinic unit economic modeling to establish clear baseline benchmarks across regional hubs.
2. Strategy & Framework Formulation: Translating complex operational findings into structured MECE problem-solving frameworks, gap analyses, and prioritized strategic initiatives.
3. Operational Execution & Deliverables: Architecting institutional-quality slide decks (Pyramid Principle), executive memorandums, weekly business review cockpits, and codified playbooks that streamline workstreams.

I am prepared to immediately dedicate my analytical rigor, disciplined research methodology, and client-ready deliverable polish to support Oaklin Lane's strategic growth mandates.

Thank you for your time, consideration, and leadership. I look forward to discussing how I can deliver immediate impact to your strategic priorities.

Sincerely,
Donna Aseret Rivas
Candidate for Consulting & Strategy Intern · Oaklin Lane
dar159@georgetown.edu`;

  const handleCopyApplicationNote = () => {
    navigator.clipboard.writeText(applicationNoteFullText);
    setCopiedNote(true);
    triggerToast('Strategic Application Note copied to clipboard!');
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedNote(false), 3000);
  };

  const handleDownloadNoteTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([applicationNoteFullText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Donna_Aseret_Rivas_Application_Note_Oaklin_Lane.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    triggerToast('Downloaded Application Note text file!');
  };

  const handleDownloadBrief = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.25 }
    });
    window.print();
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentPerspective = PERSPECTIVE_DATA[selectedPerspective];

  return (
    <div className="min-h-screen bg-transparent text-stone-900 font-sans selection:bg-[#D9532F] selection:text-white relative overflow-x-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* LAYER 0: CONTINUOUS FIXED VIEWPORT ANIMATED AMBIENT AURORA    */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed-aurora-bg" aria-hidden="true">
        {/* Roasted Espresso Blob - 6s cycle */}
        <div className="aurora-orb orb-espresso" />
        
        {/* Warm Mocha/Umber Blob - 7.5s cycle */}
        <div className="aurora-orb orb-mocha" />
        
        {/* Burnt Terracotta/Rust Blob - 5.5s cycle */}
        <div className="aurora-orb orb-terracotta" />

        {/* Tactile 28% Noise/Film Grain Layer */}
        <div className="fixed-noise-layer" />
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1E140F] border border-[#D9532F]/50 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-mono text-xs animate-in slide-in-from-bottom-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D9532F] animate-pulse" />
          <span className="text-orange-200 font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Floating Strategic AI Assistant Trigger */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsChatAssistantOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#1E140F]/90 hover:bg-[#1E140F] text-white rounded-2xl shadow-xl border border-[#D9532F]/40 backdrop-blur-xl transition-all duration-200 hover:scale-105 cursor-pointer font-mono text-xs"
          title="Open Consulting & Strategy AI Assistant"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9532F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D9532F]"></span>
          </span>
          <Sparkles className="w-4 h-4 text-orange-400 group-hover:rotate-12 transition-transform" />
          <span className="font-bold hidden sm:inline">Strategy AI</span>
          <span className="font-bold sm:hidden">AI</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN DOSSIER LAYOUT                                        */}
      {/* ------------------------------------------------------------- */}
      <main id="dossier-top" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 space-y-8 w-full">

        {/* ============================================================ */}
        {/* UNIFIED HERO SECTION: IDENTITY, ACTIONS & CONTACT DOSSIER    */}
        {/* ============================================================ */}
        <section
          id="section-hero"
          className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl shadow-sm p-6 md:p-8 space-y-6 transition-all"
        >
          {/* TOP IDENTITY BLOCK: Side-by-Side Row Layout */}
          <div className="space-y-4">
            <div className="flex flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Circular Avatar (Static display, no edit/camera controls) */}
              <div className="relative shrink-0">
                <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full border-2 border-[#D9532F]/40 shadow-sm overflow-hidden bg-[#1E140F] flex items-center justify-center text-white">
                  {heroPhoto ? (
                    isVideoMedia(heroPhoto) ? (
                      <video
                        src={heroPhoto}
                        poster={DEFAULT_HERO_PHOTO}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        aria-label={`${CANDIDATE.fullName} Profile Video`}
                      >
                        <img
                          src={DEFAULT_HERO_PHOTO}
                          alt={CANDIDATE.fullName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </video>
                    ) : (
                      <img
                        src={heroPhoto}
                        alt={CANDIDATE.fullName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-orange-400 font-mono font-bold text-lg sm:text-xl tracking-wider">
                        {CANDIDATE.monogram}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right-Hand Column: Vertically Stacked Details */}
              <div className="space-y-1.5 min-w-0 flex-1">
                {/* 1. Primary Name Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E140F] tracking-tight font-sans">
                  Donna Aseret Rivas
                </h1>

                {/* 2. CONSULTING VERIFIED Pill Badge */}
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7] whitespace-nowrap">
                    <ShieldCheck className="w-3 h-3 text-[#D9532F]" />
                    CONSULTING VERIFIED
                  </span>
                </div>

                {/* 3. Role Designation */}
                <p className="text-xs sm:text-sm md:text-base text-[#D9532F] font-semibold font-sans leading-snug">
                  Consulting & Strategy Intern • Corporate Finance and Strategy Intern
                </p>

                {/* 4. Companies */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium leading-[1.4]">
                  Oaklin Lane | TBD Investors
                </p>
              </div>
            </div>

            {/* AI Co-Pilot Button Positioned Below the Avatar/Name Row */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsChatAssistantOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D9532F]/10 hover:bg-[#D9532F]/15 text-[#D9532F] border border-[#D9532F]/30 rounded-full text-xs font-semibold shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer active:scale-95"
                title="Launch AI Co-Pilot Assistant"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D9532F]" />
                <span>+ AI Co-Pilot</span>
              </button>
            </div>
          </div>

          {/* Hairline Divider */}
          <div className="border-t border-stone-200/80 my-5" />

          {/* BOTTOM CONTACT & METADATA GRID (4 COLUMNS WITH HAIRLINE DIVIDERS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80 gap-4 sm:gap-0">
            {/* Col 1: DIRECT EMAIL */}
            <div className="sm:px-4 first:sm:pl-0 space-y-1 py-1 sm:py-0">
              <span className="text-[10px] tracking-wider text-stone-500 font-semibold uppercase block">
                DIRECT EMAIL
              </span>
              <a
                href={`mailto:${CANDIDATE.email}`}
                className="text-xs sm:text-sm font-semibold text-[#1E140F] hover:text-[#D9532F] transition-colors truncate block"
                title="Send Email to Donna Aseret Rivas"
              >
                {CANDIDATE.email}
              </a>
            </div>

            {/* Col 2: DIRECT PHONE */}
            <div className="sm:px-4 space-y-1 py-1 sm:py-0">
              <span className="text-[10px] tracking-wider text-stone-500 font-semibold uppercase block">
                DIRECT PHONE
              </span>
              <a
                href="tel:4244781969"
                className="text-xs sm:text-sm font-semibold text-[#1E140F] hover:text-[#D9532F] transition-colors block font-mono"
              >
                (424) 478-1969
              </a>
            </div>

            {/* Col 3: EXECUTIVE PROFILE */}
            <div className="sm:px-4 space-y-1 py-1 sm:py-0">
              <span className="text-[10px] tracking-wider text-stone-500 font-semibold uppercase block">
                EXECUTIVE PROFILE
              </span>
              <a
                href={CANDIDATE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D9532F] hover:text-[#b83d1c] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Col 4: TARGET STAKEHOLDER */}
            <div className="sm:px-4 last:sm:pr-0 space-y-1.5 py-1 sm:py-0">
              <span className="text-[10px] tracking-wider text-stone-500 font-semibold uppercase block">
                TARGET STAKEHOLDER
              </span>
              <div className="text-xs font-semibold text-[#1E140F] space-y-1 leading-snug">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span>Chris Callander</span>
                  <span className="text-stone-400">•</span>
                  <span className="text-[#D9532F] font-semibold">Oaklin Lane</span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span>Dimitri Ivanov</span>
                  <span className="text-stone-400">•</span>
                  <span className="text-[#D9532F] font-semibold">TBD Investors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DUAL COLLAPSIBLE APPLICATION MEMORANDUMS                     */}
        {/* ============================================================ */}
        <DualMemorandumAccordions
          candidateEmail={CANDIDATE.email}
          onOpenBriefing={() => setIsChatAssistantOpen(true)}
          onOpenMatrix={() => {
            const el = document.getElementById('section-workstreams');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          defaultOaklinOpen={true}
          defaultTbdOpen={false}
        />

        {/* 2-Column Grid: Sticky Left Column & Scrollable Right Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: STICKY FROSTED GLASS SIDEBAR                */}
          {/* ======================================================== */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Panel 1: Candidate Identity & Core Profile Card */}
            <div>
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  DOSSIER: DONNA RIVAS
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 shadow-sm space-y-5">
                {/* Portrait + Core Name */}
                <div className="flex items-start gap-4">
                  <div className="w-18 h-18 rounded-2xl bg-slate-900 border border-white/60 shadow-md flex items-center justify-center text-orange-400 font-mono text-2xl font-bold overflow-hidden shrink-0 relative group">
                    {sidebarPhoto ? (
                      isVideoMedia(sidebarPhoto) ? (
                        <video
                          src={sidebarPhoto}
                          poster={DEFAULT_SIDEBAR_PHOTO}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          aria-label={`${CANDIDATE.fullName} Profile Video`}
                        >
                          <img
                            src={DEFAULT_SIDEBAR_PHOTO}
                            alt="Donna Rivas - Strategy & Operations"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </video>
                      ) : (
                        <img
                          src={sidebarPhoto}
                          alt="Donna Rivas - Strategy & Operations"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      )
                    ) : (
                      CANDIDATE.monogram
                    )}
                    <button
                      onClick={openSidebarPhotoModal}
                      className="absolute inset-0 bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono cursor-pointer font-bold"
                      title="Change Sidebar Credentials Media"
                    >
                      Edit Media
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h1 className="text-xl font-black text-slate-900 leading-tight">
                      {CANDIDATE.fullName}
                    </h1>
                    <p className="text-xs font-bold text-[#D9532F] font-mono leading-snug">
                      Consulting & Strategy Intern • Corporate Finance & Strategy Intern
                    </p>
                    <p className="text-[11px] font-mono text-slate-500">
                      Oaklin Lane | TBD Investors
                    </p>
                  </div>
                </div>

                {/* High-Impact Executive Candidate Availability Badge (Dark Duotone / Aurora Aesthetic) */}
                <div
                  className="relative overflow-hidden p-4 rounded-2xl border border-white/[0.08] shadow-xl space-y-3 font-mono text-xs"
                  style={{
                    background: 'linear-gradient(180deg, rgba(20, 13, 10, 0.95) 0%, #140d0a 100%)',
                  }}
                >
                  {/* Ambient Glow / Aurora Mesh */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(216, 90, 48, 0.15), transparent 70%)',
                    }}
                  />

                  {/* Header: Pill Status Tag & Location */}
                  <div className="relative z-10 flex items-center justify-between gap-1.5 flex-wrap">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] shadow-2xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d85a30] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d85a30] shadow-[0_0_8px_rgba(216,90,48,0.8)]"></span>
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e5e7eb]">
                        CANDIDATE AVAILABILITY // IMMEDIATE IMPACT
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[#a8a29e] bg-white/[0.06] border border-white/[0.08] px-2 py-0.5 rounded-full">
                      Location: Remote
                    </span>
                  </div>

                  {/* Candidate Name & Availability Status */}
                  <div className="relative z-10 space-y-1">
                    <div className="text-sm font-bold tracking-tight text-[#ffffff]">
                      {CANDIDATE.fullName}
                    </div>
                    <p className="text-xs text-[#a8a29e] font-sans leading-snug font-normal">
                      Active Candidate · Ready for Immediate Deployment &amp; Strategic Onboarding
                    </p>
                  </div>

                  {/* Transmit Formal Offer CTA Button */}
                  <button
                    id="transmit-btn"
                    type="button"
                    onClick={handleTransmitOffer}
                    className="action-btn relative z-10 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-bold uppercase tracking-wider text-[11px] text-[#ffffff] transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-[0_10px_25px_-5px_rgba(216,90,48,0.4)] active:scale-[0.98] border border-white/10"
                    style={{
                      background: 'linear-gradient(135deg, #e05e2b 0%, #c44e26 100%)',
                    }}
                  >
                    <Send className="w-3.5 h-3.5 shrink-0" />
                    <span>{isDispatching ? '✓ DISPATCH TRIGGERED' : 'TRANSMIT FORMAL OFFER / SCHEDULE EXECUTIVE INTERVIEW'}</span>
                  </button>
                </div>

                {/* Georgetown Strategic Foundation & Pedigree Matrix */}
                <div className="space-y-2.5 pt-1 border-t border-slate-200/60 font-mono text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Academic & Legal Foundations:
                  </span>

                  <div className="space-y-2">
                    <div className="glass-subpanel p-3 rounded-2xl border-[1.5px] border-[#f1ded7] hover:border-[#D9532F] transition-all">
                      <div className="flex items-center justify-between">
                        <strong className="text-slate-900 text-xs">Pepperdine Caruso Law</strong>
                        <span className="text-[10px] text-[#D9532F] font-bold">Legal Rigor</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans mt-0.5">Regulatory compliance, statutory analysis & dispute resolution.</p>
                    </div>

                    <div className="glass-subpanel p-3 rounded-2xl border-[1.5px] border-[#f1ded7] hover:border-[#D9532F] transition-all">
                      <div className="flex items-center justify-between">
                        <strong className="text-slate-900 text-xs">Georgetown University</strong>
                        <span className="text-[10px] text-[#D9532F] font-bold">Strategy Certificate</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans mt-0.5">Strategic Management Certificate (Conferred Feb 2026).</p>
                    </div>

                    <div className="glass-subpanel p-3 rounded-2xl border-[1.5px] border-[#f1ded7] hover:border-[#D9532F] transition-all">
                      <div className="flex items-center justify-between">
                        <strong className="text-slate-900 text-xs">Harvard Ext &amp; HBS Online</strong>
                        <span className="text-[10px] text-[#D9532F] font-bold">Language &amp; CORe</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans mt-0.5">French Language (Spring 2025) • HBS Online CORe (Oct 2026).</p>
                    </div>

                    <div className="glass-subpanel p-3 rounded-2xl border-[1.5px] border-[#f1ded7] hover:border-[#D9532F] transition-all">
                      <div className="flex items-center justify-between">
                        <strong className="text-slate-900 text-xs">Cal Poly Pomona (BSBA)</strong>
                        <span className="text-[10px] text-[#D9532F] font-bold">4.0 GPA</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans mt-0.5">Perfect 4.0 Major GPA • Managerial Finance & Marketing.</p>
                    </div>
                  </div>
                </div>

                {/* Fast Transmission Channels */}
                <div className="pt-2 border-t border-slate-200/60 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${CANDIDATE.email}`}
                      className="truncate text-[#D9532F] hover:underline font-bold text-xs"
                    >
                      {CANDIDATE.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 bg-white/80 hover:bg-white text-slate-700 text-[10px] font-bold border border-[#f1ded7] rounded-xl shadow-xs cursor-pointer hover:-translate-y-0.5 transition-all"
                    >
                      {copiedEmail ? 'COPIED' : 'COPY'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-700 font-medium">{CANDIDATE.phone}</span>
                    <button
                      onClick={handleCopyPhone}
                      className="px-2.5 py-1 bg-white/80 hover:bg-white text-slate-700 text-[10px] font-bold border border-[#f1ded7] rounded-xl shadow-xs cursor-pointer hover:-translate-y-0.5 transition-all"
                    >
                      {copiedPhone ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Interactive Perspective Selector Panel */}
            <div>
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  EXECUTIVE PERSPECTIVES
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold font-sans text-slate-900">
                    Strategic Lens Alignment
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Select a governance lens to evaluate role-specific operational leverage, financial modeling rigor, and clinical outcomes:
                  </p>
                </div>

                {/* Perspective Lens Selection Pills */}
                <div className="space-y-2.5 font-mono text-xs">
                  {/* Lens 01: CEO Lens */}
                  <button
                    onClick={() => handleSelectPerspective('ceo')}
                    className={`w-full p-3.5 text-left rounded-2xl transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                      selectedPerspective === 'ceo'
                        ? 'bg-slate-900 text-white font-bold shadow-md ring-2 ring-[#D9532F]/40'
                        : 'bg-white hover:bg-stone-50 text-slate-700 border border-[#f1ded7] shadow-2xs hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md ${
                          selectedPerspective === 'ceo'
                            ? 'bg-[#D9532F] text-white'
                            : 'bg-[#D9532F]/10 text-[#D9532F]'
                        }`}>
                          Lens 01
                        </span>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          selectedPerspective === 'ceo'
                            ? 'bg-white/15 text-amber-200'
                            : 'bg-[#eaf1f8] text-[#2c5282] border border-[#3c6382]/25'
                        }`}>
                          Consulting & Strategy Track
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-0.5">
                        <Target className={`w-4 h-4 shrink-0 ${selectedPerspective === 'ceo' ? 'text-amber-400' : 'text-[#D9532F]'}`} />
                        <span className="text-xs font-bold font-sans">CEO Lens (Chris Callander • Oaklin Lane)</span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center self-end sm:self-center">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        selectedPerspective === 'ceo'
                          ? 'bg-[#D9532F] text-white'
                          : 'bg-stone-100 text-slate-400 border border-stone-200'
                      }`}>
                        {selectedPerspective === 'ceo' ? 'Active' : 'Select'}
                      </span>
                    </div>
                  </button>

                  {/* Lens 02: Investor Lens */}
                  <button
                    onClick={() => handleSelectPerspective('investor')}
                    className={`w-full p-3.5 text-left rounded-2xl transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                      selectedPerspective === 'investor'
                        ? 'bg-slate-900 text-white font-bold shadow-md ring-2 ring-[#3182ce]/40'
                        : 'bg-white hover:bg-stone-50 text-slate-700 border border-[#f1ded7] shadow-2xs hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md ${
                          selectedPerspective === 'investor'
                            ? 'bg-[#2c5282] text-white'
                            : 'bg-[#eaf1f8] text-[#2c5282]'
                        }`}>
                          Lens 02
                        </span>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          selectedPerspective === 'investor'
                            ? 'bg-white/15 text-sky-200'
                            : 'bg-[#eaf1f8] text-[#2c5282] border border-[#3c6382]/25'
                        }`}>
                          Corporate Finance & Strategy Track
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-0.5">
                        <TrendingUp className={`w-4 h-4 shrink-0 ${selectedPerspective === 'investor' ? 'text-sky-300' : 'text-[#2c5282]'}`} />
                        <span className="text-xs font-bold font-sans">Investor & Portfolio Lens (Dimitri Ivanov • TBD Investors)</span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center self-end sm:self-center">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        selectedPerspective === 'investor'
                          ? 'bg-[#3182ce] text-white'
                          : 'bg-stone-100 text-slate-400 border border-stone-200'
                      }`}>
                        {selectedPerspective === 'investor' ? 'Active' : 'Select'}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Animated Dynamic Content Panel per Lens */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPerspective}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="glass-subpanel p-4 sm:p-5 rounded-2xl border-[1.5px] border-[#f1ded7] space-y-4 text-xs"
                  >
                    {/* Header & Subtitle */}
                    <div className="space-y-1 border-b border-[#f1ded7] pb-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9532F] bg-[#D9532F]/10 px-2.5 py-0.5 rounded-full border border-[#D9532F]/20">
                          {currentPerspective.badge} • {currentPerspective.track}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-medium">
                          {currentPerspective.target}
                        </span>
                      </div>
                      <h5 className="font-bold text-slate-900 font-sans text-xs sm:text-sm pt-1">
                        {currentPerspective.subtitle}
                      </h5>
                    </div>

                    {/* Executive Thesis */}
                    <div className="space-y-1.5 bg-stone-50/80 p-3 rounded-xl border border-[#f1ded7]">
                      <span className="text-[9px] font-mono uppercase font-bold text-slate-500 tracking-wider block">
                        Executive Thesis:
                      </span>
                      <p className="text-slate-700 leading-relaxed font-sans text-xs">
                        {currentPerspective.executiveThesis}
                      </p>
                    </div>

                    {/* 3 Metric Cards */}
                    <div className="space-y-2 pt-0.5">
                      <span className="text-[9px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
                        Quantified Perspective Outcomes:
                      </span>
                      <div className="grid grid-cols-1 gap-2 font-mono">
                        {currentPerspective.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3 rounded-xl border border-[#f1ded7] flex items-center justify-between text-xs shadow-2xs hover:border-[#D9532F]/40 transition-colors"
                          >
                            <div className="min-w-0 pr-2">
                              <span className="text-slate-800 font-bold block text-xs truncate font-sans">
                                {m.label}
                              </span>
                              <span className="text-[10px] text-slate-500 font-normal block truncate font-sans">
                                {m.desc}
                              </span>
                            </div>
                            <span className="font-black text-[#D9532F] text-sm shrink-0 px-2 py-0.5 rounded-lg bg-[#D9532F]/10 border border-[#D9532F]/20">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Panel 3: Operational Screening Dials */}
            <div>
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  OPERATIONAL METRICS
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 shadow-sm space-y-3 font-mono text-xs">
                <div className="space-y-2">
                  <div className="p-2.5 bg-white border border-[#f1ded7] rounded-xl flex items-center justify-between shadow-2xs">
                    <span className="text-slate-600">Candidate Fit Index</span>
                    <span className="font-bold text-slate-900">99.4% (Tier 1)</span>
                  </div>
                  <div className="p-2.5 bg-white border border-[#f1ded7] rounded-xl flex items-center justify-between shadow-2xs">
                    <span className="text-slate-600">Scholastic Rigor</span>
                    <span className="font-bold text-slate-900">4.0 Major GPA</span>
                  </div>
                  <div className="p-2.5 bg-white border border-[#f1ded7] rounded-xl flex items-center justify-between shadow-2xs">
                    <span className="text-slate-600">Demonstrated Revenue</span>
                    <span className="font-bold text-[#D9532F]">+$470K Capture</span>
                  </div>
                  <div className="p-2.5 bg-white border border-[#f1ded7] rounded-xl flex items-center justify-between shadow-2xs">
                    <span className="text-slate-600">CEO Bandwidth Factor</span>
                    <span className="font-bold text-[#D9532F]">4.5x Multiplier</span>
                  </div>
                </div>
              </div>
            </div>

          </aside>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: SCROLLABLE DOSSIER SECTIONS                 */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* ------------------------------------------------------ */}
            {/* INTERACTIVE MECE DIAGNOSTIC ISSUE TREE                  */}
            {/* ------------------------------------------------------ */}
            <section id="section-workstreams">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Network className="w-3 h-3" />
                  MECE DIAGNOSTIC ISSUE TREE
                </span>
              </div>

              <DiagnosticIssueTree initialTrack="oaklin" />
            </section>

            {/* ------------------------------------------------------ */}
            {/* CASE STUDIES & DELIVERABLES                            */}
            {/* ------------------------------------------------------ */}
            <section id="section-case-studies">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Briefcase className="w-3 h-3" />
                  CASE STUDIES & DELIVERABLES
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 shadow-sm space-y-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {CASE_STUDIES.map((cs) => {
                    const isExpanded = expandedCaseId === cs.id;
                    return (
                      <div
                        key={cs.id}
                        className="p-6 rounded-2xl bg-white border-[1.5px] border-[#f1ded7] space-y-4 transition-all hover:border-[#D9532F]/40 shadow-2xs flex flex-col justify-between h-full"
                      >
                        {/* Case Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/60 pb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-mono text-[#D9532F] font-bold bg-[#D9532F]/10 px-3 py-1 rounded-full border border-[#D9532F]/20 w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                              {cs.blueprintCode}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold border border-slate-200 w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                              {cs.specTag}
                            </span>
                            {cs.timeframe && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-[#C2410C] text-[10px] font-mono font-bold border border-orange-200/80 w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                                <Clock className="w-2.5 h-2.5 shrink-0" />
                                <span>{cs.timeframe}</span>
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-slate-500 shrink-0">{cs.category}</span>
                        </div>

                        {/* Title & Context */}
                        <div className="space-y-1">
                          <h4 className="text-base font-bold text-slate-900 font-mono break-words">
                            {cs.title}
                          </h4>
                          <p className="text-xs font-mono text-[#D9532F] font-semibold break-words">
                            {cs.context}
                          </p>
                        </div>

                        {/* Summary */}
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans break-words">
                          {cs.summary}
                        </p>

                        {/* Live Deployments / Deliverables Links */}
                        {cs.liveDeployments && cs.liveDeployments.length > 0 && (
                          <div className="p-4 rounded-2xl bg-amber-50/70 border border-[#f1ded7] space-y-2">
                            <span className="text-[10px] uppercase font-bold text-amber-900 block font-mono tracking-tight flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#3182ce] animate-pulse"></span>
                              Live Deployments & Deliverables:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {cs.liveDeployments.map((link, lIdx) => (
                                <a
                                  key={lIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-stone-50 text-slate-800 hover:text-[#D9532F] text-xs font-mono font-bold border border-[#f1ded7] shadow-2xs transition-all group/link max-w-full whitespace-normal break-words"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F] shrink-0"></span>
                                  <span className="break-words">{link.label}</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-[#D9532F] transition-colors shrink-0" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Quantitative Highlights */}
                        <div className="glass-subpanel p-4 rounded-2xl border-[1.5px] border-[#f1ded7] space-y-1.5 font-mono text-xs">
                          <span className="text-[10px] uppercase font-bold text-slate-500 block">
                            Measurable Metrics:
                          </span>
                          <ul className="space-y-1 text-[11px] text-slate-700">
                            {cs.keyMetrics.map((km, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#D9532F] font-bold shrink-0">•</span>
                                <span className="break-words">{km}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expandable Technical Briefing Drawer */}
                        {isExpanded && (
                          <div className="pt-3 border-t border-stone-200/60 space-y-3 font-mono text-xs animate-in fade-in duration-200">
                            <div className="p-4 bg-white border border-[#f1ded7] rounded-2xl space-y-1 shadow-2xs">
                              <span className="text-[10px] uppercase font-bold text-slate-500 block">Strategy & Architecture:</span>
                              <p className="text-slate-700 font-sans leading-relaxed text-xs break-words">{cs.strategy}</p>
                            </div>

                            <div className="p-4 bg-[#D9532F]/10 border border-[#D9532F]/25 rounded-2xl space-y-1 backdrop-blur-md">
                              <span className="text-[10px] uppercase font-bold text-[#1E140F] block">Measurable Impact & Outcome:</span>
                              <p className="text-stone-900 font-sans leading-relaxed text-xs font-semibold break-words">{cs.measurableImpact}</p>
                            </div>
                          </div>
                        )}

                        {/* Action Bar */}
                        <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between font-mono text-xs mt-auto">
                          <button
                            onClick={() => setExpandedCaseId(isExpanded ? null : cs.id)}
                            className="text-slate-700 hover:text-[#D9532F] font-bold flex items-center gap-1.5 cursor-pointer"
                          >
                            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                            <span>{isExpanded ? 'Collapse Briefing' : 'Expand Briefing'}</span>
                          </button>

                          <button
                            onClick={() => setSelectedCase(cs)}
                            className="text-[#D9532F] hover:text-[#b83d1c] font-bold flex items-center gap-1.5 cursor-pointer group"
                          >
                            <span>Full Case Brief</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* OPERATIONAL CAPABILITIES & FIRST 90 DAYS BLUEPRINT      */}
            {/* ------------------------------------------------------ */}
            <OperationalRoadmapSection />

            {/* ------------------------------------------------------ */}
            {/* ACADEMIC & PROFESSIONAL CREDENTIALS                    */}
            {/* ------------------------------------------------------ */}
            <section id="section-experience">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Award className="w-3 h-3" />
                  ACADEMIC & PROFESSIONAL CREDENTIALS
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Experiences List */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-700 block pl-1">
                      Operational Experience
                    </span>
                    {EXPERIENCES.map((exp) => (
                      <div key={exp.id} className="p-6 rounded-2xl bg-white border-[1.5px] border-[#f1ded7] space-y-2 font-mono text-xs hover:-translate-y-0.5 transition-all shadow-2xs hover:shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-[#D9532F] font-bold">{exp.blueprintCode}</span>
                          <span className="text-[10px] text-slate-500">{exp.timeframe}</span>
                        </div>
                        <h5 className="font-bold text-slate-900 text-xs">{exp.role}</h5>
                        <p className="text-[11px] text-slate-600 font-medium">{exp.organization} • {exp.location}</p>
                        <ul className="space-y-1 pt-1 text-[11px] text-slate-700 font-sans">
                          {exp.highlights.slice(0, 2).map((h, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#D9532F] font-bold">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Academic Qualifications List */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-700 block pl-1">
                      Academic Qualifications
                    </span>
                    {EDUCATIONS.map((edu) => (
                      <div key={edu.id} className="p-6 rounded-2xl bg-white border-[1.5px] border-[#f1ded7] space-y-2 font-mono text-xs hover:-translate-y-0.5 transition-all shadow-2xs hover:shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-[#D9532F] font-bold">{edu.blueprintCode}</span>
                          <span className="text-[10px] text-slate-500">{edu.conferred}</span>
                        </div>
                        <h5 className="font-bold text-slate-900 text-xs">{edu.credential}</h5>
                        <p className="text-[11px] text-slate-600 font-medium">{edu.institution}</p>
                        <p className="text-[11px] text-slate-700 font-sans leading-relaxed pt-0.5">{edu.details}</p>
                        {edu.honors && (
                          <div className="text-[10px] text-[#C2410C] font-bold bg-[#D9532F]/10 p-2 rounded-xl border border-[#D9532F]/25">
                            {edu.honors}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* TECHNICAL TOOLKIT & METHODOLOGIES                      */}
            {/* ------------------------------------------------------ */}
            <section id="section-toolkit">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Zap className="w-3 h-3" />
                  TECHNICAL TOOLKIT & METHODOLOGIES
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 shadow-sm space-y-6">
                {/* Header Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-50/80 via-white to-orange-50/80 border border-[#f1ded7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-tight">
                      Dual-Track Capabilities & Strategic Execution Toolkit
                    </h3>
                    <p className="text-xs text-stone-600 font-sans mt-0.5">
                      Synthesizing High-Leverage Software & Data Architecture with Rigorous Strategy & Finance Methodologies
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap shrink-0">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white text-[#D9532F] border border-[#f1ded7] shadow-2xs">
                      Oaklin Lane: Consulting & Strategy Intern
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#D9532F]/10 text-[#C2410C] border border-[#f1ded7]">
                      TBD Investors: Finance & Strategy
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Column 1: Software & Data Stack */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-orange-50/10 to-white border-[1.5px] border-[#f1ded7] space-y-4 shadow-2xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#f1ded7]">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9532F] block">
                          01 // SOFTWARE & DATA STACK
                        </span>
                        <span className="text-[11px] font-sans text-stone-500">
                          Quantitative Modeling, Relational Querying & Systems Architecture
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      {RESUME_SKILLS.technical.map((t, idx) => (
                        <div key={idx} className="p-4 sm:p-5 bg-white border border-[#f1ded7] rounded-xl space-y-2.5 shadow-2xs hover:border-[#df5837]/50 transition-all duration-200">
                          <div className="flex items-start sm:items-center justify-between gap-2 flex-wrap">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-serif break-words">
                              {t.name}
                            </h4>
                            <span className="text-[10px] text-[#C2410C] font-mono font-bold bg-[#D9532F]/10 px-3 py-1 rounded-full border border-[#f1ded7] w-fit max-w-full whitespace-normal leading-[1.4] break-words shrink-0">
                              {t.category}
                            </span>
                          </div>
                          
                          {t.dualTrackScope && (
                            <div className="p-3 rounded-lg bg-orange-50/40 border border-[#f1ded7]/80 space-y-1">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9532F] block">
                                Dual-Track Scope:
                              </span>
                              <p className="text-[11px] text-stone-700 font-sans leading-relaxed break-words">
                                {t.dualTrackScope}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Strategic Methodologies */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-orange-50/10 to-white border-[1.5px] border-[#f1ded7] space-y-4 shadow-2xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#f1ded7] gap-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9532F] block">
                          02 // STRATEGIC METHODOLOGIES
                        </span>
                        <span className="text-[11px] font-sans text-stone-500">
                          Bridging Operational Throughput + Corporate Finance Governance
                        </span>
                      </div>
                      <div className="shrink-0 min-w-[64px] aspect-square rounded-full p-2 bg-white text-stone-700 border border-[#f1ded7] shadow-2xs flex items-center justify-center text-center font-mono font-bold text-[10px] leading-tight">
                        6 Frameworks
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      {RESUME_SKILLS.analysis.map((a, idx) => (
                        <div key={idx} className="p-4 sm:p-5 bg-white border border-[#f1ded7] rounded-xl space-y-2.5 shadow-2xs hover:border-[#df5837]/50 transition-all duration-200">
                          <div className="flex items-start sm:items-center justify-between gap-2 flex-wrap">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-serif break-words">
                              {a.name}
                            </h4>
                            <span className="text-[10px] text-[#C2410C] font-mono font-bold bg-[#D9532F]/10 px-3 py-1 rounded-full border border-[#f1ded7] w-fit max-w-full whitespace-normal leading-[1.4] break-words shrink-0">
                              {a.tag || a.code}
                            </span>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-stone-50/90 border border-[#f1ded7]/80">
                            <p className="text-[11px] text-stone-700 font-sans leading-relaxed break-words">
                              {a.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* CREDENTIALS                                            */}
            {/* ------------------------------------------------------ */}
            <section id="media-gallery">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Layers className="w-3 h-3" />
                  CREDENTIALS
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 shadow-sm">
                <PhotoEmbedGallery onNotify={triggerToast} />
              </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* FACULTY & EXECUTIVE ENDORSEMENTS                       */}
            {/* ------------------------------------------------------ */}
            <section id="section-endorsements">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <CheckCircle2 className="w-3 h-3" />
                  FACULTY & EXECUTIVE ENDORSEMENTS
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 shadow-sm">
                <FacultyEndorsementsSection onNotify={triggerToast} />
              </div>
            </section>

            {/* ------------------------------------------------------ */}
            {/* DIRECT TRANSMISSION // CANDIDATE AVAILABILITY          */}
            {/* ------------------------------------------------------ */}
            <section id="section-contact">
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#D9532F] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  <Send className="w-3 h-3" />
                  CANDIDATE AVAILABILITY // IMMEDIATE IMPACT
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border-[1.5px] border-[#f1ded7] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                
                {/* Executive Status Banner */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-stone-900 via-slate-900 to-stone-950 text-white space-y-6 font-mono text-xs border border-stone-800 shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-white/10 pb-5">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2c5282]/30 border border-[#3182ce]/40 rounded-full">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3182ce] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3182ce] shadow-[0_0_0_3px_rgba(49,130,206,0.2)]"></span>
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200">
                          CANDIDATE AVAILABILITY // IMMEDIATE IMPACT
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        Donna Aseret Rivas
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                        Active Candidate · Ready for Immediate Deployment &amp; Strategic Onboarding (Remote / Multi-State Operations)
                      </p>
                    </div>

                    <button
                      id="transmit-btn-footer"
                      type="button"
                      onClick={handleTransmitOffer}
                      className="action-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#d65528] hover:bg-[#c24525] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-[0_4px_20px_rgba(214,85,40,0.35)] self-start lg:self-auto cursor-pointer border border-[#d65528]/50 shrink-0 hover:scale-[1.02]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isDispatching ? '✓ Dispatch Triggered' : 'Transmit Formal Offer / Schedule Executive Interview'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
                    <div className="p-3.5 bg-slate-900/80 border border-white/10 rounded-2xl space-y-1">
                      <span className="text-slate-400 uppercase block">Direct Candidate Email</span>
                      <a href={`mailto:${CANDIDATE.email}`} className="text-orange-300 hover:underline font-bold block">
                        {CANDIDATE.email}
                      </a>
                    </div>

                    <div className="p-3.5 bg-slate-900/80 border border-white/10 rounded-2xl space-y-1">
                      <span className="text-slate-400 uppercase block">Direct Phone</span>
                      <a href={`tel:${CANDIDATE.phone.replace(/[^0-9]/g, '')}`} className="text-orange-300 hover:underline font-bold block">
                        {CANDIDATE.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#f1ded7] bg-white/90 backdrop-blur-xl py-10 text-xs text-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top CTA Section */}
          <div className="text-center space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight">
              Ready to Discuss the Consulting & Strategy or Corporate Finance Roles?
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a
                href={`mailto:${CANDIDATE.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D9532F] hover:bg-[#C2410C] text-white font-mono text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                title={`Send direct email to ${CANDIDATE.email}`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get in Touch: {CANDIDATE.email}</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-stone-200/80" />

          {/* 3-Column Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-1 font-sans">
            
            {/* Column 1: Candidate & Legal Credentials */}
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                {CANDIDATE.fullName}
              </h4>
              <p className="text-xs text-stone-600 font-medium">
                Master of Legal Studies
              </p>
              <p className="text-xs text-stone-500 font-medium">
                Pepperdine Caruso Law
              </p>
            </div>

            {/* Column 2: Target Track Memorandums */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                Target Track Memorandums
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPerspective('ceo');
                      scrollToSection('section-hero');
                    }}
                    className="hover:text-[#D9532F] transition-colors cursor-pointer text-left inline-flex items-center gap-1.5 font-medium"
                  >
                    <span className="text-[#D9532F]">•</span>
                    <span>Consulting & Strategy Track</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPerspective('investor');
                      scrollToSection('section-hero');
                    }}
                    className="hover:text-[#D9532F] transition-colors cursor-pointer text-left inline-flex items-center gap-1.5 font-medium"
                  >
                    <span className="text-[#D9532F]">•</span>
                    <span>Corp. Finance & Strategy</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Navigation */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                Quick Navigation
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('dossier-top')}
                    className="hover:text-[#D9532F] transition-colors cursor-pointer text-left inline-flex items-center gap-1.5 font-medium"
                  >
                    <span className="text-[#D9532F]">•</span>
                    <span>Top of Page</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('dossier-top')}
                    className="hover:text-[#D9532F] transition-colors cursor-pointer text-left inline-flex items-center gap-1.5 font-medium"
                  >
                    <span className="text-[#D9532F]">•</span>
                    <span>Portfolio Home</span>
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-stone-200/80" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-stone-500">
            <span>© 2026 Donna Aseret Rivas. All rights reserved.</span>
            <span className="text-stone-500 font-medium">Designed for Executive Review</span>
          </div>

        </div>
      </footer>

      {/* CASE STUDY SYSTEM SPEC MODAL WITH CRISP HIGH-CONTRAST CONTAINER */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 max-w-3xl w-full rounded-3xl shadow-2xl p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto font-mono text-xs my-8">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="space-y-1.5 pr-8 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="glass-badge-dark text-[10px]">
                  {selectedCase.blueprintCode}
                </span>
                <span className="text-slate-500 font-semibold">{selectedCase.context}</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {selectedCase.title}
              </h3>
            </div>

            {/* 3 Structured Sections */}
            <div className="space-y-3 font-sans">
              <div className="glass-subpanel p-4 rounded-2xl space-y-1 font-mono">
                <span className="text-[10px] uppercase font-bold text-[#D9532F] block">
                  1. Context / Objective:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                  {selectedCase.objective}
                </p>
              </div>

              <div className="glass-subpanel p-4 rounded-2xl space-y-1 font-mono">
                <span className="text-[10px] uppercase font-bold text-[#D9532F] block">
                  2. Execution / Strategy:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                  {selectedCase.strategy}
                </p>
              </div>

              <div className="bg-orange-50/80 border border-[#D9532F]/25 rounded-2xl p-4 space-y-1 font-mono">
                <span className="text-[10px] uppercase font-bold text-[#1E140F] block">
                  3. Measurable Impact:
                </span>
                <p className="text-xs sm:text-sm text-stone-900 font-sans font-semibold leading-relaxed">
                  {selectedCase.measurableImpact}
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-slate-500 block font-mono">
                Quantifiable Highlights:
              </span>
              <ul className="space-y-1.5 text-[11px] text-slate-700 font-mono">
                {selectedCase.keyMetrics.map((km, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D9532F] font-bold">•</span>
                    <span>{km}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Deployments if available */}
            {selectedCase.liveDeployments && selectedCase.liveDeployments.length > 0 && (
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2 font-mono">
                <span className="text-[10px] uppercase font-bold text-amber-900 block tracking-tight flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3182ce] animate-pulse"></span>
                  Live Deployments & Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.liveDeployments.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 text-slate-800 hover:text-[#D9532F] text-xs font-bold border border-amber-300 shadow-2xs transition-all group/modal-link"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F]"></span>
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/modal-link:text-[#D9532F] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-600">
                Framework: <strong className="text-[#D9532F]">{selectedCase.consultingFramework}</strong>
              </span>
              <button
                onClick={() => setSelectedCase(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase rounded-xl cursor-pointer transition-all shadow-sm"
              >
                Close Case Brief
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Headshot Modal */}
      <ProfilePhotoModal
        isOpen={isProfilePhotoModalOpen}
        onClose={() => setIsProfilePhotoModalOpen(false)}
        currentPhoto={photoModalTarget === 'hero' ? heroPhoto : sidebarPhoto}
        targetTitle={photoModalTarget === 'hero' ? 'Hero Masthead Portrait' : 'Candidate Dossier Portrait'}
        onSavePhoto={(url) => {
          if (photoModalTarget === 'hero') {
            handleSaveHeroPhoto(url);
          } else {
            handleSaveSidebarPhoto(url);
          }
        }}
        onNotify={triggerToast}
      />

      {/* Executive Invitation Dispatch Modal */}
      <ExecutiveInviteModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        onNotify={triggerToast}
      />

      {/* Consulting & Strategy AI Assistant with Aurora & Glassmorphism */}
      <CandidateChatAssistant
        isOpen={isChatAssistantOpen}
        onClose={() => setIsChatAssistantOpen(false)}
        onNavigateSection={scrollToSection}
      />

      {/* Local IndexedDB Document Storage Vault Manager */}
      <StorageManagerModal
        isOpen={isStorageModalOpen}
        onClose={() => setIsStorageModalOpen(false)}
        onNotify={triggerToast}
      />
    </div>
  );
}

export default App;
