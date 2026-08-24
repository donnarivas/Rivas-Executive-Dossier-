import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Copy, 
  Check, 
  X, 
  Mail, 
  Sparkles, 
  UserCheck, 
  FileText,
  RotateCcw,
  Briefcase,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  Phone,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

declare global {
  interface Window {
    emailjs?: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, unknown>,
        publicKey?: string
      ) => Promise<unknown>;
    };
  }
}

interface ExecutiveInviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify?: (msg: string) => void;
}

export const EMAIL_RECIPIENT = 'dar159@georgetown.edu';

export const TRACK_OPTIONS = [
  'Dual Track: Consulting & Strategy & Corporate Finance',
  'Consulting & Strategy Intern (Oaklin Lane)',
  'Corporate Finance & Strategy Intern (TBD Investors)',
  'Custom / Other Strategic Role'
] as const;

export const DEFAULT_TRACK = 'Dual Track: Consulting & Strategy & Corporate Finance';

export const getSubjectForTrack = (track: string) => {
  if (track === 'Dual Track: Consulting & Strategy & Corporate Finance') {
    return 'Executive Interview Invitation / Strategic Onboarding — Donna Aseret Rivas';
  }
  return `Executive Interview Invitation / Strategic Onboarding [${track}] — Donna Aseret Rivas`;
};

export const getBodyForTrack = (track: string) => {
  let trackPhrase = 'the Consulting & Strategy & Corporate Finance track';
  let orgStakeholder = 'Oaklin Lane / TBD Investors';
  
  if (track === 'Consulting & Strategy Intern (Oaklin Lane)') {
    trackPhrase = 'the Consulting & Strategy Intern track';
    orgStakeholder = 'Oaklin Lane';
  } else if (track === 'Corporate Finance & Strategy Intern (TBD Investors)') {
    trackPhrase = 'the Corporate Finance & Strategy Intern track';
    orgStakeholder = 'TBD Investors';
  } else if (track === 'Dual Track: Consulting & Strategy & Corporate Finance') {
    trackPhrase = 'the Consulting & Strategy & Corporate Finance track';
    orgStakeholder = 'Oaklin Lane / TBD Investors';
  } else {
    trackPhrase = track && track !== 'Custom / Other Strategic Role' ? `the ${track} track` : 'the strategic executive track';
    orgStakeholder = '[Organization / Stakeholder Name]';
  }

  return `Dear Donna,

We reviewed your executive dossier and would like to schedule an executive interview / discuss next steps for ${trackPhrase}.

Organization / Stakeholder: ${orgStakeholder}
Proposed Date & Time: [Insert Available Time Slot]
Format (Virtual / In-Person): Virtual (Zoom / Google Meet)

Best regards,`;
};

export const getMailtoUrl = (customSubject?: string, customBody?: string) => {
  const subject = customSubject || getSubjectForTrack(DEFAULT_TRACK);
  const body = customBody || getBodyForTrack(DEFAULT_TRACK);
  return `mailto:${EMAIL_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const ExecutiveInviteModal: React.FC<ExecutiveInviteModalProps> = ({
  isOpen,
  onClose,
  onNotify
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedTrack, setSelectedTrack] = useState<string>(DEFAULT_TRACK);
  const [customTrackText, setCustomTrackText] = useState<string>('');
  
  // Sender Details
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [senderPhone, setSenderPhone] = useState<string>('');
  const [senderOrg, setSenderOrg] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const [subject, setSubject] = useState<string>(() => getSubjectForTrack(DEFAULT_TRACK));
  const [bodyText, setBodyText] = useState<string>(() => getBodyForTrack(DEFAULT_TRACK));
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'transmitting' | 'dispatched' | 'error'>('idle');
  const [showSuccessBanner, setShowSuccessBanner] = useState<boolean>(false);

  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setCopied(false);
      setDispatchStatus('idle');
      setShowSuccessBanner(false);
      setStatusMessage('');
      setEmailError(false);
      setSelectedTrack(DEFAULT_TRACK);
      setCustomTrackText('');
      setSubject(getSubjectForTrack(DEFAULT_TRACK));
      setBodyText(getBodyForTrack(DEFAULT_TRACK));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentTrackValue = selectedTrack === 'Custom / Other Strategic Role' && customTrackText ? customTrackText : selectedTrack;

  const handleTrackChange = (newTrack: string) => {
    setSelectedTrack(newTrack);
    const effectiveTrack = newTrack === 'Custom / Other Strategic Role' && customTrackText ? customTrackText : newTrack;
    setSubject(getSubjectForTrack(effectiveTrack));
    setBodyText(getBodyForTrack(effectiveTrack));
  };

  const handleCustomTrackTextChange = (text: string) => {
    setCustomTrackText(text);
    const effectiveTrack = text.trim() ? text.trim() : 'Custom Strategic Role';
    setSubject(getSubjectForTrack(effectiveTrack));
    setBodyText(getBodyForTrack(effectiveTrack));
  };

  const handleResetDefaults = () => {
    setSelectedTrack(DEFAULT_TRACK);
    setCustomTrackText('');
    setSenderName('');
    setSenderEmail('');
    setSenderPhone('');
    setSenderOrg('');
    setEmailError(false);
    setSubject(getSubjectForTrack(DEFAULT_TRACK));
    setBodyText(getBodyForTrack(DEFAULT_TRACK));
    setDispatchStatus('idle');
    setShowSuccessBanner(false);
    setStatusMessage('');
  };

  const triggerConfettiAnimation = () => {
    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.5 },
        zIndex: 9999
      });
    } catch {
      // Safe fallback
    }
  };

  const handleSendInvitation = async (e: React.FormEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (dispatchStatus === 'transmitting') return;

    // 1. Extract dynamic values
    const senderNameVal = (document.getElementById('sender-name-input') as HTMLInputElement)?.value || senderName || 'Hiring Stakeholder';
    const senderEmailVal = (document.getElementById('sender-email-input') as HTMLInputElement)?.value || senderEmail || '';
    const senderPhoneVal = (document.getElementById('sender-phone-input') as HTMLInputElement)?.value || senderPhone || 'Not provided';
    const senderOrgVal = (document.getElementById('sender-org-input') as HTMLInputElement)?.value || senderOrg || 'Not provided';
    const currentSubject = (document.getElementById('subject-input') as HTMLInputElement)?.value || subject || 'Executive Interview Invitation — Donna Aseret Rivas';
    const currentBody = (document.getElementById('message-textarea') as HTMLTextAreaElement)?.value || bodyText || '';
    const currentTrack = (document.getElementById('track-select') as HTMLSelectElement)?.value || currentTrackValue || 'Consulting & Strategy';

    // 2. Validation
    if (!senderEmailVal.trim() || !senderEmailVal.includes('@')) {
      setEmailError(true);
      setDispatchStatus('error');
      setStatusMessage('Please enter a valid work email address before sending.');
      setShowSuccessBanner(true);
      document.getElementById('sender-email-input')?.focus();
      if (onNotify) {
        onNotify('Please enter your work email to send the invitation.');
      }
      return;
    }
    setEmailError(false);

    // 3. Set In-Flight State
    setDispatchStatus('transmitting');
    setShowSuccessBanner(false);
    setStatusMessage('');

    // 4. Structured payload for Web3Forms
    const payload = {
      access_key: "3be006e5-eab3-40c9-8951-1f03026e4870",
      name: `${senderNameVal} (${senderOrgVal})`,
      email: senderEmailVal,
      phone: senderPhoneVal,
      organization: senderOrgVal,
      from_name: `${senderNameVal} via Executive Dossier`,
      subject: currentSubject,
      track_target: currentTrack,
      message: currentBody
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        // Trigger celebratory confetti
        triggerConfettiAnimation();
        setDispatchStatus('dispatched');
        setStatusMessage('Delivered instantly from this webpage to dar159@georgetown.edu. No email client or app required.');
        setShowSuccessBanner(true);
        if (onNotify) {
          onNotify('✓ Confirmed: Sent directly to dar159@georgetown.edu');
        }
      } else {
        console.warn("Web3Forms response:", data);
        setDispatchStatus('error');
        setStatusMessage(data.message || 'Verification required on Web3Forms key.');
        setShowSuccessBanner(true);
        if (onNotify) {
          onNotify(data.message || 'Dispatch notice: Please verify your email with Web3Forms.');
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setDispatchStatus('error');
      setStatusMessage('Network connection error. Tap to retry or use the template copy below.');
      setShowSuccessBanner(true);
    }
  };

  const handleCopyClipboard = async () => {
    const fullText = `To: ${EMAIL_RECIPIENT}\nSubject: ${subject}\nTrack: ${currentTrackValue}\nSender: ${senderName || 'Hiring Stakeholder'} (${senderOrg || 'Organization'})\nEmail: ${senderEmail || 'N/A'}\nPhone: ${senderPhone || 'N/A'}\n\n${bodyText}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      if (onNotify) {
        onNotify('✓ Copied to Clipboard!');
      }
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = fullText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      if (onNotify) {
        onNotify('✓ Copied to Clipboard!');
      }
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Decorative Header */}
          <div className="bg-gradient-to-r from-stone-900 via-slate-900 to-stone-950 text-white p-5 sm:p-6 border-b border-white/10 relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d65528]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d65528]/20 border border-[#d65528]/40 text-orange-200 text-xs font-mono font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-orange-300" />
                  Executive Invitation Dispatch
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-white">
                  Schedule Executive Interview
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-sans">
                  Direct in-app asynchronous dispatch to candidate Donna Aseret Rivas
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-orange-50 border-b border-orange-200/80 px-6 py-2.5 flex items-center justify-between gap-3 text-xs font-mono shrink-0">
            <div className="flex items-center gap-2 text-stone-700 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d65528] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d65528]"></span>
              </span>
              <span className="truncate text-xs">
                Direct route to <strong className="text-[#d65528] font-bold">{EMAIL_RECIPIENT}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-white text-[10px] font-bold text-stone-600 border border-stone-200">
                Direct Async Protocol
              </span>
              <button
                type="button"
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100/80 hover:bg-orange-200 text-[#d65528] text-[10px] font-bold transition-colors cursor-pointer"
                title="Reset to default template text"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Modal Body & Editable Message Composer */}
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
            {/* Signatory & Delivery Protocol Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-2">
                <span className="text-stone-400 text-[10px] uppercase font-bold">Signatory Status:</span>
                <span className="font-bold text-[#2c5282] flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" />
                  Active Candidate · Ready
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-2">
                <span className="text-stone-400 text-[10px] uppercase font-bold">Delivery Protocol:</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  In-App Asynchronous
                </span>
              </div>
            </div>

            {/* Interactive Track Target Selector */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100/80 border border-stone-200/90 shadow-2xs space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label 
                  htmlFor="track-select" 
                  className="text-stone-700 text-[11px] uppercase font-bold tracking-wider font-mono flex items-center gap-1.5"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#d65528]" />
                  <span>TRACK TARGET</span>
                </label>
                <span className="text-[10px] font-mono font-bold text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
                  Two-Way Template Sync
                </span>
              </div>

              <div className="relative">
                <select
                  id="track-select"
                  value={selectedTrack}
                  onChange={(e) => handleTrackChange(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white/95 backdrop-blur-xs text-stone-900 font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#d65528]/40 focus:border-[#d65528] transition-all shadow-2xs cursor-pointer font-semibold"
                  style={{ fontSize: '0.85rem', fontWeight: 600 }}
                >
                  <option value="Dual Track: Consulting & Strategy & Corporate Finance">
                    Dual Track: Consulting & Strategy &amp; Corporate Finance
                  </option>
                  <option value="Consulting & Strategy Intern (Oaklin Lane)">
                    Consulting & Strategy Intern (Oaklin Lane)
                  </option>
                  <option value="Corporate Finance & Strategy Intern (TBD Investors)">
                    Corporate Finance &amp; Strategy Intern (TBD Investors)
                  </option>
                  <option value="Custom / Other Strategic Role">
                    Custom / Other Strategic Role
                  </option>
                </select>
              </div>

              {selectedTrack === 'Custom / Other Strategic Role' && (
                <div className="pt-1">
                  <input
                    type="text"
                    value={customTrackText}
                    onChange={(e) => handleCustomTrackTextChange(e.target.value)}
                    placeholder="Type custom role or committee title (e.g., Strategic Operations Associate)..."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-stone-900 bg-white text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#d65528]/40 focus:border-[#d65528] shadow-2xs"
                  />
                </div>
              )}
            </div>

            {/* Sender Contact Details Section */}
            <div className="p-3.5 rounded-2xl bg-stone-50/90 border border-stone-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#d65528]" />
                  <span>Sender &amp; Stakeholder Contact</span>
                </span>
                <span className="text-[10px] font-mono text-stone-400">
                  Direct Response Routing
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Sender Name */}
                <div>
                  <label 
                    htmlFor="sender-name-input"
                    className="block text-[10px] font-bold text-stone-600 uppercase font-mono mb-1"
                  >
                    Sender Name / Title <span className="text-[#d65528]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-stone-400">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      id="sender-name-input"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g., Chris Callander / Hiring Committee"
                      required
                      className="w-full pl-8 pr-3 py-2 rounded-xl border border-stone-300 text-slate-900 bg-white font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#d65528]/40 focus:border-[#d65528] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label 
                    htmlFor="sender-org-input"
                    className="block text-[10px] font-bold text-stone-600 uppercase font-mono mb-1"
                  >
                    Organization
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-stone-400">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      id="sender-org-input"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      placeholder="e.g., Oaklin Lane / TBD Investors"
                      className="w-full pl-8 pr-3 py-2 rounded-xl border border-stone-300 text-slate-900 bg-white font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#d65528]/40 focus:border-[#d65528] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Sender Work Email */}
                <div>
                  <label 
                    htmlFor="sender-email-input"
                    className="block text-[10px] font-bold text-stone-600 uppercase font-mono mb-1"
                  >
                    Sender Work Email <span className="text-[#d65528]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-stone-400">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="email"
                      id="sender-email-input"
                      value={senderEmail}
                      onChange={(e) => {
                        setSenderEmail(e.target.value);
                        if (emailError) setEmailError(false);
                      }}
                      placeholder="e.g., ccallander@oaklinlane.com"
                      required
                      className={`w-full pl-8 pr-3 py-2 rounded-xl border text-slate-900 bg-white font-sans text-xs focus:outline-none focus:ring-2 transition-all shadow-2xs ${
                        emailError 
                          ? 'border-red-400 ring-2 ring-red-400/40 bg-red-50/30' 
                          : 'border-stone-300 focus:ring-[#d65528]/40 focus:border-[#d65528]'
                      }`}
                    />
                  </div>
                </div>

                {/* Sender Direct Phone */}
                <div>
                  <label 
                    htmlFor="sender-phone-input"
                    className="block text-[10px] font-bold text-stone-600 uppercase font-mono mb-1"
                  >
                    Sender Direct Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-stone-400">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="tel"
                      id="sender-phone-input"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="e.g., (555) 019-2834"
                      className="w-full pl-8 pr-3 py-2 rounded-xl border border-stone-300 text-slate-900 bg-white font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#d65528]/40 focus:border-[#d65528] transition-all shadow-2xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Form Fields: Recipient, Subject, Message */}
            <div className="space-y-3.5">
              {/* Field 1: Recipient (Disabled / Read-only) */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider font-mono mb-1">
                  Recipient (Read-only)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    disabled
                    readOnly
                    value={EMAIL_RECIPIENT}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 bg-stone-100 text-stone-600 font-mono text-xs font-semibold cursor-not-allowed select-all"
                  />
                </div>
              </div>

              {/* Field 2: Subject Line (Editable text input) */}
              <div>
                <label 
                  htmlFor="subject-input"
                  className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider font-mono mb-1"
                >
                  Subject Line
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <input
                    id="subject-input"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter interview invitation subject line..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 text-slate-900 bg-white font-sans text-xs focus:outline-none focus:ring-2 focus:ring-[#d65528]/40 focus:border-[#d65528] transition-all"
                  />
                </div>
              </div>

              {/* Field 3: Message Body (Multi-line editable textarea) */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label 
                    htmlFor="message-textarea"
                    className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider font-mono"
                  >
                    Message Body (Editable)
                  </label>
                  <span className="text-[10px] font-mono text-stone-400">
                    {bodyText.length} characters
                  </span>
                </div>
                <textarea
                  id="message-textarea"
                  rows={6}
                  value={bodyText}
                  onChange={(e) => setBodyText(e.target.value)}
                  placeholder="Compose your invitation message to Donna..."
                  className="w-full p-3.5 rounded-2xl border border-stone-300 text-slate-900 bg-white font-mono text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#d65528]/40 focus:border-[#d65528] transition-all shadow-2xs resize-y min-h-[140px]"
                />
              </div>
            </div>
          </div>

          {/* Action Footer - Ordered Top to Bottom */}
          <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-col gap-2.5 shrink-0">
            {/* Inline Dispatch Status Banner */}
            {showSuccessBanner && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                id="dispatch-status-banner"
                className={`p-3 rounded-xl border text-xs font-mono flex items-start gap-2.5 shadow-2xs status-banner ${
                  dispatchStatus === 'dispatched'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900 success'
                    : 'bg-amber-50 border-amber-300 text-amber-900 error'
                }`}
              >
                {dispatchStatus === 'dispatched' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-0.5">
                  <span className="font-bold block">
                    {dispatchStatus === 'dispatched'
                      ? `✓ Confirmed: Sent directly to ${EMAIL_RECIPIENT}`
                      : 'Notice Regarding Direct Transmission'}
                  </span>
                  <p className="text-[11px] leading-snug opacity-90">
                    {statusMessage || (
                      dispatchStatus === 'dispatched'
                        ? `Delivered instantly from this webpage to ${EMAIL_RECIPIENT}. No email client or app required.`
                        : 'Please check your connection or tap to retry.'
                    )}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Button 1 (Top Primary): Send Email Invitation */}
            <button
              type="button"
              id="send-invitation-btn"
              disabled={dispatchStatus === 'transmitting'}
              onClick={handleSendInvitation}
              className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono font-bold text-xs shadow-md transition-all cursor-pointer border ${
                dispatchStatus === 'dispatched'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700/40'
                  : dispatchStatus === 'error'
                  ? 'bg-amber-700 hover:bg-amber-800 active:scale-[0.98] text-white border-amber-800/40'
                  : 'bg-[#d65528] hover:bg-[#c24525] active:scale-[0.98] text-white border-[#d65528]/40 hover:shadow-lg'
              } disabled:opacity-80 disabled:cursor-not-allowed`}
            >
              {dispatchStatus === 'transmitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting to Inbox...</span>
                </>
              ) : dispatchStatus === 'dispatched' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>✓ Confirmed: Sent directly to {EMAIL_RECIPIENT}</span>
                </>
              ) : dispatchStatus === 'error' ? (
                <>
                  <AlertCircle className="w-4 h-4 text-white" />
                  <span>Dispatch Failed — Tap to Retry</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Email Invitation</span>
                </>
              )}
            </button>

            {/* Button 2 (Middle Secondary): Copy Direct Contact & Template */}
            <button
              type="button"
              onClick={handleCopyClipboard}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 font-mono font-bold text-xs shadow-2xs transition-all cursor-pointer active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">✓ Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-500" />
                  <span>Copy Direct Contact & Template</span>
                </>
              )}
            </button>

            {/* Button 3 (Bottom Dismiss): Close / Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 rounded-xl border border-transparent hover:border-stone-200 text-stone-600 hover:text-stone-800 hover:bg-stone-200/70 font-mono font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              Close / Cancel
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

