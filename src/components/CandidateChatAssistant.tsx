import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  Compass, 
  Award, 
  ShieldCheck, 
  Calendar, 
  TrendingUp, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/candidateData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  tags?: string[];
}

interface CandidateChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome-1',
    sender: 'ai',
    text: `Greetings! I am Donna Aseret Rivas's Chief of Staff Strategic AI Assistant. I have indexed Donna's full academic credentials (Pepperdine Caruso Law, Georgetown Strategic Management, Harvard Extension School, Cal Poly Pomona 4.0 GPA), multi-site clinic operational blueprints, and 90-day onboarding strategy for Oaklin Lane. How can I assist your evaluation today?`,
    timestamp: 'Just now',
    tags: ['Overview', 'Credentials', 'Oaklin Lane Fit']
  }
];

const SUGGESTED_PROMPTS = [
  "What makes Donna ideal for Oaklin Lane's Chief of Staff role?",
  "How does legal training from Pepperdine enhance operational execution?",
  "Summarize the 90-Day Clinic Expansion Roadmap",
  "What is Donna's experience with financial modeling & KPIs?"
];

export const CandidateChatAssistant: React.FC<CandidateChatAssistantProps> = ({
  isOpen,
  onClose,
  onNavigateSection
}) => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateResponse = (query: string): { text: string; tags?: string[] } => {
    const q = query.toLowerCase();

    if (q.includes('oaklin') || q.includes('why') || q.includes('ideal') || q.includes('fit') || q.includes('hire')) {
      return {
        text: `Donna is uniquely tailored for Oaklin Lane's Chief of Staff in Training role because of her cross-disciplinary mastery:
1. Executive Force Multiplier: Trained to relieve CEO/Partner bandwidth by transforming high-level strategic objectives into standardized operating playbooks.
2. Pediatric Multi-Site Scaling Focus: Passionate about resolving operational bottlenecks in speech, occupational, and physical therapy to directly expand early-intervention clinical capacity.
3. Legal, Financial & Strategic Synthesis: Combining regulatory compliance from Pepperdine Caruso Law with financial modeling from Cal Poly Pomona (4.0 GPA) and strategic management from Georgetown.`,
        tags: ['Oaklin Lane Fit', 'Strategic Alignment', 'CEO Leverage']
      };
    }

    if (q.includes('law') || q.includes('pepperdine') || q.includes('legal') || q.includes('compliance')) {
      return {
        text: `At Pepperdine University Caruso School of Law, Donna mastered statutory interpretation, healthcare compliance diligence, risk containment frameworks, and contract negotiation. In a high-growth multi-site pediatric healthcare setting, this enables her to review provider credentialing standards, safeguard patient privacy protocols, and accelerate commercial leases without incurring external legal latency.`,
        tags: ['Pepperdine Law', 'Compliance', 'Risk Mitigation']
      };
    }

    if (q.includes('90') || q.includes('roadmap') || q.includes('onboard') || q.includes('plan') || q.includes('timeline')) {
      return {
        text: `Donna's 90-Day Chief of Staff Execution Blueprint is organized into three distinct phases:
• Days 1–30 (Diagnosis & Alignment): Shadow executive leadership, audit clinic utilization rates, map therapist onboarding friction, and establish weekly executive OKRs.
• Days 31–60 (Standardization & Playbooks): Publish the De Novo Clinic Opening Playbook, streamline intake pipelines, and implement KPI dashboard rhythms.
• Days 61–90 (Velocity & Optimization): Institute automated provider scheduling, pilot expansion feasibility models, and deliver the Board-ready Quarterly Strategic Review.`,
        tags: ['90-Day Roadmap', 'Execution Playbook', 'Clinic Scaling']
      };
    }

    if (q.includes('finance') || q.includes('model') || q.includes('kpi') || q.includes('math') || q.includes('data') || q.includes('calculator')) {
      return {
        text: `Donna graduated with a 4.0 GPA on the Dean's Honor List in Business Administration with coursework in managerial finance and corporate strategy, supplemented by Harvard Extension School advanced analytics. She builds unit-economic financial models evaluating therapist billing utilization, clinic de novo payback periods, clinician ramp-up schedules, and EBITDA margins under varying payer mixes.`,
        tags: ['Financial Modeling', 'Unit Economics', '4.0 GPA']
      };
    }

    if (q.includes('education') || q.includes('credential') || q.includes('harvard') || q.includes('georgetown')) {
      return {
        text: `Donna's academic foundation represents top-tier strategic and operational preparation:
• Pepperdine University Caruso School of Law: Legal analysis, regulatory compliance, statutory problem-solving.
• Georgetown University: Professional Certificate in Strategic Management & Corporate Planning.
• Harvard Extension School: Advanced management consulting methodologies & ethical executive leadership coursework.
• Cal Poly Pomona: B.S. in Business Administration (4.0 GPA, Dean's Honor List).`,
        tags: ['Academics', 'Credentials', 'Ivy & Law']
      };
    }

    return {
      text: `Donna Aseret Rivas brings a relentless work ethic, intellectual rigor, and disciplined operational cadence. Her focus is building repeatable systems that allow Oaklin Lane to scale quality pediatric therapy across new markets seamlessly. Would you like to review her 90-Day Roadmap, verified exhibit credentials, or the de novo clinic scaling model?`,
      tags: ['Executive Synthesis', 'Immediate Impact']
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(query);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        timestamp: 'Just now',
        tags: response.tags
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Exact Chat Aurora Canvas with Keyframe-Animated Drifting Mesh & Noise */}
      <div className="chat-aurora-canvas shadow-2xl ring-1 ring-white/10 relative">
        
        {/* Floating / Drifting Glowing Color Orbs (Keyframe animations) */}
        <div className="aurora-mesh">
          <div className="aurora-orb orb-1" />
          <div className="aurora-orb orb-2" />
          <div className="aurora-orb orb-3" />
        </div>

        {/* Tactile Film Grain / Noise Overlay (>25% intensity with SVG feTurbulence) */}
        <div className="noise-texture-layer" />

        {/* Frosted Glassmorphism UI Layers */}
        <div className="glass-chat-container">
          
          {/* Frosted Glass Header */}
          <div className="glass-chat-header">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D9532F]/20 border border-[#D9532F]/40 flex items-center justify-center text-orange-400 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-white tracking-wide font-mono">
                    CHIEF OF STAFF AI
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-[#D9532F] animate-pulse" />
                </div>
                <p className="text-[10px] text-stone-300 font-mono">
                  Donna Aseret Rivas • Strategic Briefing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 text-stone-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                title="Close assistant"
                className="p-1.5 text-stone-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Message Scroll Area */}
          <div className="glass-chat-messages custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={msg.sender === 'user' ? 'glass-user-bubble' : 'glass-ai-bubble'}
                >
                  <div className="whitespace-pre-line font-sans">
                    {msg.text}
                  </div>

                  {msg.tags && msg.tags.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-white/15 flex flex-wrap gap-1">
                      {msg.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/10 text-orange-200 border border-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-mono text-stone-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-3 glass-ai-bubble w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F] animate-bounce" style={{ animationDelay: '300ms' }} />
                <span className="text-[10px] font-mono text-orange-200 ml-1">Analyzing candidate records...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-3 py-2 bg-stone-950/40 border-t border-white/10 flex gap-1.5 overflow-x-auto custom-scrollbar">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="text-[10px] font-mono text-stone-200 bg-white/10 hover:bg-white/20 border border-white/15 px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer shrink-0 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Frosted Glass Input Bar */}
          <div className="glass-chat-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Donna's fit for Oaklin Lane..."
                className="glass-input font-mono"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-2.5 bg-[#D9532F] hover:bg-[#b83d1c] disabled:opacity-40 text-white rounded-xl transition-all cursor-pointer shrink-0 shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
