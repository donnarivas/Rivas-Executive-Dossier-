import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  Building,
  Mail,
  Phone,
  Calendar,
  Quote,
  FileText,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Maximize2,
  X,
  Sparkles,
  TrendingUp,
  Target,
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
  ExternalLink,
  Upload,
  Eye,
  Trash2,
  Plus,
  Download,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  FileCheck,
  Database,
  Lock
} from 'lucide-react';
import { 
  subscribeToEndorsements, 
  saveEndorsementToFirestore, 
  deleteEndorsementFromFirestore 
} from '../lib/firestoreService';
import { safeLocalStorageSet, safeLocalStorageGet } from '../lib/storage';
import {
  DossierStorage,
  validateDossierFile,
  downloadDossierAsset
} from '../lib/dossierStorage';
import {
  CAREYDANIS_LETTER_DOCUMENT_SVG,
  GEORGETOWN_CORSO_LETTER_SVG,
  GEORGETOWN_STEINBERG_LETTER_SVG,
  HARVARD_TAIEB_LETTER_SVG,
  CALPOLY_GOOD_LETTER_SVG,
  CALPOLY_SARMAS_LETTER_SVG,
  BEST_FRIENDS_LETTER_DOCUMENT_SVG
} from '../data/officialDocumentSvgs';

export interface EndorsementItem {
  id: string;
  recommenderName: string;
  recommenderTitle: string;
  department: string;
  institution: string;
  institutionCategory: 'executive' | 'georgetown' | 'harvard' | 'calpoly' | 'custom';
  date: string;
  email: string;
  phone?: string;
  badge: string;
  featuredQuote: string;
  strategicAnalysis: {
    cosLeverageSummary: string;
    oaklinLaneApplication: string;
    coreCompetenciesValidated: string[];
    roleAlignmentTag: string;
  };
  fullTranscript: string;
  isAttached?: boolean;
  attachedUrl?: string;
  attachedFileName?: string;
  attachedFileSize?: string;
  attachedFileType?: 'pdf' | 'image' | 'text';
  isCustom?: boolean;
}

const STORAGE_KEY = 'oaklin_lane_endorsements_data_v5';

export const INITIAL_ENDORSEMENTS_REGISTRY: EndorsementItem[] = [
  {
    id: 'rosemergy-careydanis-2026',
    recommenderName: 'James J. Rosemergy',
    recommenderTitle: 'Managing Partner / Attorney at Law',
    department: 'Litigation Operations & Intake Management',
    institution: 'Carey & Danis, LLC (Attorneys at Law)',
    institutionCategory: 'executive',
    date: 'August 12, 2026',
    email: 'jrosemergy@careydanis.com',
    phone: '(314) 725-7700',
    badge: 'Legal Operations & Outreach Leadership',
    featuredQuote: 'Throughout her time with our firm, Donna was diligent and reliable. She consistently kept us informed of her progress, sent us regular activity logs, and followed through on every assignment she took on. Her communication was clear and professional at all times. We particularly appreciated that Donna showed initiative and creativity in expanding the reach of our program beyond obvious channels. Donna was one of the strongest coordinators we worked with, and her efforts reflected real care and professionalism. I recommend Donna without reservation and am confident she will bring the same diligence, initiative, and professionalism to any future opportunity.',
    strategicAnalysis: {
      cosLeverageSummary: 'Directly validates executive-level operational diligence, transparent activity tracking cadences, proactive initiative, and high-trust communications in complex mass-tort claimant operations and high-stakes legal administration.',
      oaklinLaneApplication: 'Institutes rigorous operating cadences, transparent status reporting, and creative community outreach channels for multi-site Oaklin Lane clinic operations and cross-functional leadership updates.',
      coreCompetenciesValidated: ['Operational Diligence & Activity Logs', 'Legal Intake & Case Viability Tracking', 'Clear Executive Communication', 'Creative Outreach Channel Expansion', 'Unreserved Executive Recommendation'],
      roleAlignmentTag: 'Legal Operations & Outreach Leadership'
    },
    fullTranscript: `CAREY & DANIS LLC
ATTORNEYS AT LAW
www.careydanis.com
8235 FORSYTH BLVD. · SUITE 1100 · ST. LOUIS, MO 63105 · (314) 725-7700 · (800) 721-2519 · FAX: (314) 721-0965

August 12, 2026

Re: Donna Aseret Rivas

To whom it may concern,

I am writing to recommend Donna Aseret Rivas, who worked with Carey & Danis, LLC as an intake and community outreach coordinator with respect to our social media addiction litigation campaign. It is a pleasure to provide this letter on her behalf.

Throughout her time with our firm, Donna was diligent and reliable. She consistently kept us informed of her progress, sent us regular activity logs, and followed through on every assignment she took on. Her communication was clear and professional at all times.

We particularly appreciated that Donna showed initiative and creativity in expanding the reach of our program beyond obvious channels. Donna was one of the strongest coordinators we worked with, and her efforts reflected real care and professionalism.

I recommend Donna without reservation and am confident she will bring the same diligence, initiative, and professionalism to any future opportunity. Please feel free to contact our office if further information would be helpful.

Very truly yours,

James J. Rosemergy`,
    isAttached: true,
    attachedFileName: 'Carey_Danis_Recommendation_Donna_Rivas.pdf',
    attachedFileSize: '1.6 MB',
    attachedFileType: 'image',
    attachedUrl: CAREYDANIS_LETTER_DOCUMENT_SVG
  },
  {
    id: 'corso-georgetown-2026',
    recommenderName: 'John A. Corso, D.P.A.',
    recommenderTitle: 'Faculty Member',
    department: 'School of Continuing Studies',
    institution: 'Georgetown University',
    institutionCategory: 'georgetown',
    date: 'March 16, 2026',
    email: 'John.Corso@georgetown.edu',
    phone: '(301) 529-9446',
    badge: 'Georgetown SCS Capstone & Strategy',
    featuredQuote: 'Donna is my former strategic management student at Georgetown University’s School of Continuing Studies in Washington, DC. She was my student in the Professional Certificate in Strategic Management program at Georgetown, especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project. Her insight and thoughtful classroom contributions were consistently edifying to the class as a whole and enriching to the general program at the school. Donna is a person of character and intellect with a high sense of personal responsibility. I have no doubt she will prove to be an asset to any position to which she accedes.',
    strategicAnalysis: {
      cosLeverageSummary: 'Directly validates executive presentation poise and high-stakes problem synthesis on large-scale enterprise strategy challenges (American Express capstone).',
      oaklinLaneApplication: 'Synthesizes multifaceted clinic performance data, payor reimbursement trends, and expansion plans into crisp 1-page executive memos for CEO Chris Callander and TBD Investors.',
      coreCompetenciesValidated: ['Executive Presentation', 'American Express Capstone', 'Persuasive Communication', 'High Intellectual Rigor', 'Personal Responsibility'],
      roleAlignmentTag: 'Executive Presentation & Capstone Synthesis'
    },
    fullTranscript: `John A. Corso, D.P.A.
Faculty Member
Georgetown University
School of Continuing Studies
111 Massachusetts Avenue, NW
Washington, DC 20001
(301) 529-9446
John.Corso@georgetown.edu

March 16, 2026

To Whom it May Concern,

It is with great pleasure that I endorse Ms. Donna Rivas for a sales consultant position.

Donna is my former strategic management student at Georgetown University's School of Continuing Studies in Washington, DC. She was my student in the Professional Certificate in Strategic Management program at Georgetown, especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project. Her insight and thoughtful classroom contributions were consistently edifying to the class as a whole and enriching to the general program at the school. Donna is a person of character and intellect with a high sense of personal responsibility. I have no doubt she will prove to be an asset to any position to which she accedes.

If I can assist you or Ms. Rivas at any time, please don't hesitate to reach out to me.

Very Truly Yours,
John A. Corso, DPA`,
    isAttached: true,
    attachedFileName: 'Georgetown_SCS_John_Corso_Endorsement.pdf',
    attachedFileSize: '1.4 MB',
    attachedFileType: 'image',
    attachedUrl: GEORGETOWN_CORSO_LETTER_SVG
  },
  {
    id: 'steinberg-georgetown-2026',
    recommenderName: 'Gary Steinberg',
    recommenderTitle: 'Adjunct Professor',
    department: 'School of Continuing Studies',
    institution: 'Georgetown University',
    institutionCategory: 'georgetown',
    date: 'February 2026',
    email: 'gas34@georgetown.edu',
    badge: 'Strategic Foresight & Corporate Architecture',
    featuredQuote: 'Donna Rivas excelled as a member of our Georgetown University, School of Continuing Studies, Certificate Program in Strategic Management. Ms. Rivas demonstrated an outstanding understanding of business management and strategic management concepts and approaches. She also demonstrated excellent analytical and communications skills and the ability to work in a team environment during group exercises. As she progressed through the program, she cultivated a professional philosophy centered on analytical precision and strategic foresight. Her in-depth case study evaluations underscored her ability to synthesize high-level data into actionable business intelligence.',
    strategicAnalysis: {
      cosLeverageSummary: 'Certifies Donna’s formal mastery in strategic decision frameworks, corporate governance, operational excellence, and distilling complex operational ambiguity into actionable leadership intelligence.',
      oaklinLaneApplication: 'Applies Theory of Constraints and operational audit frameworks to diagnose clinic intake bottlenecks, optimize therapist capacity utilization, and prepare board-ready governance updates.',
      coreCompetenciesValidated: ['Analytical Precision', 'Strategic Foresight', 'Operational Excellence', 'Data-Driven Business Intelligence', 'Corporate Frameworks'],
      roleAlignmentTag: 'Strategic Governance & Business Intelligence'
    },
    fullTranscript: `Georgetown University
School of Continuing Studies

To Whom it may concern,

Donna Rivas excelled as a member of our Georgetown University, School of Continuing Studies, Certificate Program in Strategic Management. Ms. Rivas demonstrated an outstanding understanding of business management and strategic management concepts and approaches. She also demonstrated excellent analytical and communications skills and the ability to work in a team environment during group exercises.

As she progressed through the program, she cultivated a professional philosophy centered on analytical precision and strategic foresight. Her academic tenure, highlighted by intensive research in Strategic Management, has equipped her with the frameworks necessary to evaluate complex corporate structures and drive operational excellence. During our program, Ms. Rivas' in-depth case study evaluations of industry leaders, underscored her ability to synthesize high-level data into actionable business intelligence. Her class exercises also demonstrated her ability to leverage her background in finance and strategic planning to provide disciplined, data-driven support to a forward-thinking leadership team.

Based on her outstanding performance in our program, I would strongly recommend Ms. Rivas for a position in your organization.

Gary Steinberg
Adjunct Professor
Georgetown University
gas34@georgetown.edu`,
    isAttached: true,
    attachedFileName: 'Georgetown_SCS_Gary_Steinberg_Recommendation.pdf',
    attachedFileSize: '1.4 MB',
    attachedFileType: 'image',
    attachedUrl: GEORGETOWN_STEINBERG_LETTER_SVG
  },
  {
    id: 'taieb-harvard-2025',
    recommenderName: 'Anne Taieb',
    recommenderTitle: 'Senior Lecturer',
    department: 'Harvard Extension School',
    institution: 'Harvard University',
    institutionCategory: 'harvard',
    date: 'December 5, 2025',
    email: 'ataieb@g.harvard.edu',
    badge: 'Management Consulting Polish & Discretion',
    featuredQuote: 'What sets her apart is her dedication to personal growth and her natural interpersonal skills. She is self-assured and attentive - traits that are especially valuable in the management consultancy sector, where client interaction, discretion, and professionalism are essential. She is also culturally curious and open-minded, showing a real interest in languages and international contexts, which I believe will serve her well in a global-facing role.',
    strategicAnalysis: {
      cosLeverageSummary: 'Validates top-tier management consulting presence, confidential stakeholder management, cultural agility, and active listening—mirroring CEO Chris Callander’s Harvard & McKinsey executive standards.',
      oaklinLaneApplication: 'Acts as a high-trust surrogate for the Office of the CEO when liaising with TBD Investors, clinical directors, pediatric specialists, and regional health systems.',
      coreCompetenciesValidated: ['Management Consulting Discretion', 'High-Stakes Client Interaction', 'Active Listening', 'Interpersonal Poise', 'Global Mindset'],
      roleAlignmentTag: 'Consulting Polish & Executive Presence'
    },
    fullTranscript: `Anne Taieb
Senior Lecturer
Harvard Extension School
ataieb@g.harvard.edu

December 5, 2025

To Whom It May Concern,

I am pleased to recommend Donna Rivas, whom I had the opportunity to teach in Elementary French E1b during the Spring 2025 at Harvard Extension School. From the very beginning of the course, she distinguished herself as a motivated, engaged, and reliable student—qualities that I believe will make her an excellent addition to your team.

In my class, she consistently demonstrated a strong work ethic and a genuine enthusiasm for learning. She approached each assignment thoughtfully, actively participated in discussions, and regularly sought feedback to improve her skills. Her ability to communicate clearly, collaborate effectively with classmates, and maintain a positive and professional attitude was evident throughout the semester.

What sets her apart is her dedication to personal growth and her natural interpersonal skills. She is self-assured and attentive - traits that are especially valuable in the management consultancy sector, where client interaction, discretion, and professionalism are essential. She is also culturally curious and open-minded, showing a real interest in languages and international contexts, which I believe will serve her well in a global-facing role.

I am confident that Donna Rivas will bring enthusiasm and a strong sense of responsibility to any professional setting. She contributed positively to our classroom environment, and I have no doubt that she will bring the same energy and commitment to her work with your company.

Please feel free to contact me if you need any additional information.

Sincerely,
Anne Taieb
Senior Lecturer
Harvard Extension School`,
    isAttached: true,
    attachedFileName: 'Harvard_Extension_Anne_Taieb_Recommendation.pdf',
    attachedFileSize: '1.3 MB',
    attachedFileType: 'image',
    attachedUrl: HARVARD_TAIEB_LETTER_SVG
  },
  {
    id: 'good-calpoly-2024',
    recommenderName: 'Dr. Megan C. Good, Ph.D.',
    recommenderTitle: 'Assistant Professor',
    department: 'Singelyn Graduate School of Business / Dept. of International Business & Marketing',
    institution: 'California State Polytechnic University, Pomona',
    institutionCategory: 'calpoly',
    date: 'March 22, 2024',
    email: 'mcgood@cpp.edu',
    phone: '(909) 869-2400',
    badge: 'B2B Strategy, Problem-Solving & Tenacity',
    featuredQuote: 'Donna completed my Professional Selling course, which provided her a thorough introduction to various strategic revenue generating tactics... I supervised a rigorous real-world project and was impressed with her tenacity and ability to perform and communicate under pressure... Skills such as strategic critical thinking and unsupervised problem-solving were premium tools honed within this dynamic environment... she is a trustworthy person of the highest integrity and I highly recommend Donna Rivas.',
    strategicAnalysis: {
      cosLeverageSummary: 'Confirms Donna’s capacity for autonomous, unsupervised problem-solving, commercial tenacity, and exceptional performance under intense operational pressure.',
      oaklinLaneApplication: 'Architects community and institutional referral pipelines with pediatric clinics, pediatric neurologists, and school districts to build predictable patient acquisition funnels for new Oaklin Lane clinics.',
      coreCompetenciesValidated: ['Unsupervised Problem-Solving', 'Strategic Revenue Tactics', 'B2B Partner Pipelines', 'Performance Under Pressure', 'Highest Integrity'],
      roleAlignmentTag: 'B2B Growth & Unsupervised Execution'
    },
    fullTranscript: `CalPolyPomona | College of Business Administration | Singelyn Graduate School of Business

Date: March 22, 2024
From: Dr. Megan C. Good
Subject: Letter of Recommendation - Donna Rivas

This letter will serve as a recommendation for Donna Rivas. I have known Donna since 2022 while she pursued a Bachelor of Science in Business Administration (BSBA) degree at Cal Poly Pomona, with a major focus in Marketing Management.

Donna completed my Professional Selling course, which provided her a thorough introduction to various strategic revenue generating tactics that apply to her interests in business management and sales. I worked closely with her while I supervised a rigorous real-world project and was impressed with her tenacity and ability to perform and communicate under pressure.

Donna's class performance reflected a mature individual who was committed to learning and maximizing her classroom experience. While interacting with others, she was always prepared to discuss and share her ideas with those around her. These excellent communication skills not only indicated her strengths in effectively collaborating with others, but also reflected her strengths in her preparation (which I found to be excellent). Importantly, her peers were receptive to Donna's insights, and it is clear that they respected both her perspectives and her professional methods of delivery in and out of the classroom.

Moreover, many of the assignments and exams required extensive critical thinking and the ability to project outcomes that individuals and /or organizations would experience based on decisions made in the framework of professional business-to-business sales. As a result, skills such as strategic critical thinking and unsupervised problem-solving were premium tools honed within this dynamic environment. Donna performed very well in these areas and will be a great fit for the Investment Banking Analyst position with your organization, to which she applied.

As a final point, Donna demonstrated the quality of her character every day on campus and in professional environments, with a high degree of accountability to her learning and a strong work ethic in her responsibilities.

In conclusion, I have confidence she is a trustworthy person of the highest integrity and I highly recommend Donna Rivas. If you have any questions, feel free to contact me.

Megan C. Good, PhD
Assistant Professor
Dept. of International Business & Marketing
College of Business Administration
Singelyn Graduate School of Business
California State Polytechnic University, Pomona
mcgood@cpp.edu`,
    isAttached: true,
    attachedFileName: 'Cal_Poly_Pomona_Dr_Megan_Good_Recommendation.pdf',
    attachedFileSize: '1.5 MB',
    attachedFileType: 'image',
    attachedUrl: CALPOLY_GOOD_LETTER_SVG
  },
  {
    id: 'sarmas-calpoly-2023',
    recommenderName: 'Paul Sarmas, Ph.D.',
    recommenderTitle: 'Professor of Finance',
    department: 'Finance, Real Estate and Law / College of Business Administration',
    institution: 'California State Polytechnic University, Pomona',
    institutionCategory: 'calpoly',
    date: 'May 11, 2023',
    email: 'psarmas@cpp.edu',
    phone: '(909) 869-2405',
    badge: 'Managerial Finance & Commercial Work Ethic',
    featuredQuote: 'Miss Donna Rivas has been my student and advisee for about a year. Miss Rivas’s performance in the managerial Finance (FRL 3000) course has been good. I find her to be a good student with strong abilities and academic aptitude. She has the initiative and motivation that exceeds most requirements... Donna’s sales experience at Daniel’s Jewelers and Sierra Chevrolet is evidence of her dedication and work ethic. Donna’s ability to manage projects, handle responsibility, and dedicate time and energy distinguishes her.',
    strategicAnalysis: {
      cosLeverageSummary: 'Combines rigorous quantitative discipline in managerial finance with ground-level commercial grit, project management stamina, and demonstrated work ethic.',
      oaklinLaneApplication: 'Builds parametric clinic contribution margin calculators, therapist caseload utilization schedules, and financial breakeven models for upcoming clinic locations.',
      coreCompetenciesValidated: ['Managerial Finance (FRL 3000)', 'Financial Modeling Tools', 'Project Management', 'Commercial Operations Grit', 'Exemplary Work Ethic'],
      roleAlignmentTag: 'Managerial Finance & Unit Economics'
    },
    fullTranscript: `California State Polytechnic University, Pomona
Finance, Real Estate and Law
College of Business Administration
3801 West Temple Avenue
Pomona, California 91768

May 11, 2023

Dear General Manager:

Miss Donna Rivas has been my student and advisee for about a year. Miss Rivas’s performance in the managerial Finance (FRL 3000) course has been good. I find her to be a good student with strong abilities and academic aptitude. She has the initiative and motivation that exceeds most requirements.

Miss Rivas is often a leader in class discussions, and her comments are insightful and well-thought-out. Donna has shown great enthusiasm and willingness to learn new concepts in the field of finance. Even though her primary academic focus is marketing, she continuously seeks to explore the use of financial tools in marketing management.

Miss Rivas has proved to be diligent, conscientious, and very personable. Donna’s sales experience at Daniel’s Jewelers and Sierra Chevrolet is evidence of her dedication and work ethic. Donna’s ability to manage projects, handle responsibility, and dedicate time and energy to the assignments at hand distinguishes her from other young candidates. She will add diversity and will be a valuable asset to your operation.

Taking into consideration her dedication, determination, and motivation, I have no reservations concerning her success in the field of finance. I believe that Miss Donna Rivas will be a successful member of your team. I hope you will seriously consider her employment application. If I can be of further assistance, please do not hesitate to contact me by mail, by telephone at (909) 869-2405, or by e-mail at psarmas@cpp.edu.

Respectfully,

Paul Sarmas
Paul Sarmas, Ph.D.
Professor of Finance`,
    isAttached: true,
    attachedFileName: 'Cal_Poly_Pomona_Dr_Paul_Sarmas_Recommendation.pdf',
    attachedFileSize: '1.4 MB',
    attachedFileType: 'image',
    attachedUrl: CALPOLY_SARMAS_LETTER_SVG
  },
  {
    id: 'melville-bestfriends-2022',
    recommenderName: 'KylieRose Melville',
    recommenderTitle: 'Senior Manager, Lifesaving Programs',
    department: 'Lifesaving Programs & Volunteer Operations',
    institution: 'Best Friends Animal Society – Los Angeles',
    institutionCategory: 'executive',
    date: 'April 4, 2022',
    email: 'kylierosem@bestfriends.org',
    phone: '(818) 643-3989 ext. 114',
    badge: 'Frontline Crisis Operations & Stakeholder Empathy',
    featuredQuote: 'I have ten years of experience in animal welfare and have worked with a large number of volunteers during that time. Donna is one who stands out for her hard work and dedication. As a volunteer with Best Friends, Donna has taken on the challenging role of serving as a receptionist for us, starting during the global pandemic. This position is one that presented a challenge on many levels and Donna rose to the occasion easily... Compassion and patience are integral to the work we do as an organization and Donna has exemplified that even in the face of all of the challenges that the changing landscape of the pandemic presented. Donna proved to be a quick study and picked up our policies and procedures with ease. Over the past year she has helped us provide exceptional customer service to all members of the public who reach out to us looking for help or information. We are all incredibly grateful for to have had the chance to work with Donna.',
    strategicAnalysis: {
      cosLeverageSummary: 'Directly validates frontline crisis resilience, rapid operational onboarding, and compassionate stakeholder de-escalation in high-emotion, high-urgency public-facing environments.',
      oaklinLaneApplication: 'Anchors high-empathy customer service, compassionate front-desk triage, and disciplined adherence to clinic operating procedures across Oaklin Lane patient and family touchpoints.',
      coreCompetenciesValidated: ['High-Emotion Frontline Reception & Triage', 'Pandemic Crisis Adaptability', 'Rapid Operating Policy Mastery', 'Compassionate Public Communications', 'Exceptional Stakeholder Support'],
      roleAlignmentTag: 'Frontline Operations & Stakeholder Empathy'
    },
    fullTranscript: `April 4, 2022

To whom it may concern:

It is my pleasure to recommend Donna Rivas to you.

I am KylieRose Melville, Senior Manager of Lifesaving Programs with Best Friends Animal Society – Los Angeles. I have ten years of experience in animal welfare and have worked with a large number of volunteers during that time. Donna is one who stands out for her hard work and dedication.

As a volunteer with Best Friends, Donna has taken on the challenging role of serving as a receptionist for us, starting during the global pandemic. This position is one that presented a challenge on many levels and Donna rose to the occasion easily.

Animal welfare is an industry where emotions are often running high and our receptionists are at the frontlines of it. Compassion and patience are integral to the work we do as an organization and Donna has exemplified that even in the face of all of the challenges that the changing landscape of the pandemic presented. Donna proved to be a quick study and picked up our policies and procedures with ease. Over the past year she has helped us provide exceptional customer service to all members of the public who reach out to us looking for help or information.

We are all incredibly grateful for to have had the chance to work with Donna . If you need any more information, please do not hesitate to contact me at 818-643-3989 ext. 114, or by email at kylierosem@bestfriends.org.

Sincerely,

KylieRose Melville
Senior Manager, Lifesaving Programs
Best Friends Animal Society – Los Angeles

Best Friends Animal Society–Los Angeles
Best Friends Lifesaving Center
15321 Brand Boulevard, Mission Hills, CA 91345 | bestfriendsla.org`,
    isAttached: true,
    attachedFileName: 'Best_Friends_Animal_Society_KylieRose_Melville_Recommendation.pdf',
    attachedFileSize: '1.4 MB',
    attachedFileType: 'image',
    attachedUrl: BEST_FRIENDS_LETTER_DOCUMENT_SVG
  }
];

export const FacultyEndorsementsSection: React.FC<{
  onNotify?: (msg: string) => void;
}> = ({ onNotify }) => {
  const [endorsements, setEndorsements] = useState<EndorsementItem[]>(INITIAL_ENDORSEMENTS_REGISTRY);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'executive' | 'georgetown' | 'harvard' | 'calpoly' | 'custom'>('all');
  const [expandedDocId, setExpandedDocId] = useState<string | null>('steinberg-georgetown-2026');
  const [activeModalDoc, setActiveModalDoc] = useState<EndorsementItem | null>(null);
  const [modalViewMode, setModalViewMode] = useState<'transcript' | 'preview'>('transcript');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null);
  const [openInlineCardDocIds, setOpenInlineCardDocIds] = useState<Record<string, boolean>>({});

  const getCardAnchorId = (id: string) => {
    if (id.includes('rosemergy')) return 'card-rosemergy';
    if (id.includes('melville') || id.includes('bestfriends')) return 'card-melville';
    if (id.includes('steinberg')) return 'card-steinberg';
    if (id.includes('corso')) return 'card-corso';
    if (id.includes('taieb')) return 'card-taieb';
    if (id.includes('good')) return 'card-good';
    if (id.includes('sarmas')) return 'card-sarmas';
    return `card-${id}`;
  };

  const handleScrollToCard = (targetAnchorId: string) => {
    // If filtered by category, reset to 'all' so card is guaranteed visible in DOM
    setSelectedCategory('all');
    setHighlightedCardId(targetAnchorId);

    // Smooth scroll with offset alignment
    setTimeout(() => {
      const el = document.getElementById(targetAnchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 60);

    // Auto-clear highlight animation after duration
    setTimeout(() => {
      setHighlightedCardId((prev) => (prev === targetAnchorId ? null : prev));
    }, 3000);
  };

  const toggleInlineCardDoc = (id: string) => {
    setOpenInlineCardDocIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Embed New Endorsement Modal State
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);
  const [newRecommender, setNewRecommender] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newInstitution, setNewInstitution] = useState('');
  const [newDepartment, setNewDepartment] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newBadge, setNewBadge] = useState('Executive Endorsement');
  const [newQuote, setNewQuote] = useState('');
  const [newAnalysis, setNewAnalysis] = useState('');
  const [newFullTranscript, setNewFullTranscript] = useState('');
  const [newFileUrl, setNewFileUrl] = useState('');
  const [newFileName, setNewFileName] = useState('');
  const [newFileSize, setNewFileSize] = useState('');
  const [newFileType, setNewFileType] = useState<'pdf' | 'image' | 'text'>('pdf');
  const [newSelectedFile, setNewSelectedFile] = useState<File | null>(null);
  const [securingCardId, setSecuringCardId] = useState<string | null>(null);
  const [isSecuringEmbed, setIsSecuringEmbed] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isFirestoreConnected, setIsFirestoreConnected] = useState<boolean>(true);

  const normalizeEndorsement = (item: EndorsementItem): EndorsementItem => {
    const defaultMatch = INITIAL_ENDORSEMENTS_REGISTRY.find(d => d.id === item.id);
    if (defaultMatch) {
      // Check if item has a valid user attachment or persistent document url
      const hasCustomUpload = Boolean(
        item.isAttached &&
        item.attachedUrl && (
          item.attachedUrl.startsWith('data:') ||
          item.attachedUrl.startsWith('blob:') ||
          (item.attachedFileName && item.attachedFileName !== defaultMatch.attachedFileName && item.attachedFileName !== 'IMG_0702.jpeg')
        )
      );

      // Preserve isAttached if explicitly set in item, or fallback to default
      const resolvedIsAttached = item.isAttached !== undefined ? item.isAttached : defaultMatch.isAttached;

      return {
        ...defaultMatch,
        ...item,
        attachedUrl: hasCustomUpload
          ? item.attachedUrl
          : (item.attachedUrl || defaultMatch.attachedUrl),
        attachedFileName: hasCustomUpload
          ? item.attachedFileName
          : (item.attachedFileName || defaultMatch.attachedFileName),
        attachedFileType: item.attachedFileType || defaultMatch.attachedFileType,
        attachedFileSize: item.attachedFileSize || defaultMatch.attachedFileSize,
        isAttached: resolvedIsAttached
      };
    }
    return item;
  };

  // Helper to rehydrate attachments from IndexedDB assets array onto an endorsement list
  const rehydrateFromAssets = (list: EndorsementItem[], assets: any[]): EndorsementItem[] => {
    if (!assets || assets.length === 0) return list;
    return list.map((item) => {
      const matchingAsset = assets.find(
        (a) => a.id === `rec-${item.id}` || a.id === item.id || a.metadata?.endorsementId === item.id
      );
      if (matchingAsset && matchingAsset.base64Data) {
        return {
          ...item,
          isAttached: true,
          attachedUrl: matchingAsset.base64Data,
          attachedFileName: matchingAsset.fileName || item.attachedFileName,
          attachedFileSize: matchingAsset.fileSize || item.attachedFileSize,
          attachedFileType: matchingAsset.fileType === 'pdf' ? 'pdf' : 'image'
        };
      }
      return item;
    });
  };

  // Load from IndexedDB Vault & Firestore with LocalStorage fallback
  useEffect(() => {
    // 1. Initial load from LocalStorage for immediate instant paint
    try {
      const saved = safeLocalStorageGet(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const merged = INITIAL_ENDORSEMENTS_REGISTRY.map(defaultItem => {
            const match = parsed.find((p: EndorsementItem) => p.id === defaultItem.id);
            return match ? normalizeEndorsement({ ...defaultItem, ...match }) : defaultItem;
          });
          const customItems = parsed.filter((p: EndorsementItem) => p.isCustom).map(normalizeEndorsement);
          setEndorsements([...merged, ...customItems]);
        }
      }
    } catch (err) {
      console.warn('LocalStorage load notice:', err);
    }

    // 2. Auto-rehydrate high-capacity attachments from IndexedDB DossierStorage
    DossierStorage.getAllAssets().then((assets) => {
      if (assets && assets.length > 0) {
        setEndorsements((current) => rehydrateFromAssets(current, assets));
      }
    }).catch((e) => console.warn('IndexedDB auto-rehydration notice:', e));

    // 3. Listen to local storage engine events (e.g. Storage Manager uploads or other tabs)
    const unsubscribeStorage = DossierStorage.subscribe(async (event) => {
      if (event.type === 'saved' && event.asset) {
        const asset = event.asset;
        const targetId = asset.metadata?.endorsementId || (asset.id.startsWith('rec-') ? asset.id.replace('rec-', '') : null);
        if (targetId) {
          setEndorsements((current) =>
            current.map((item) => {
              if (item.id === targetId) {
                return {
                  ...item,
                  isAttached: true,
                  attachedUrl: asset.base64Data,
                  attachedFileName: asset.fileName,
                  attachedFileSize: asset.fileSize,
                  attachedFileType: asset.fileType === 'pdf' ? 'pdf' : 'image'
                };
              }
              return item;
            })
          );
        }
      } else if (event.type === 'purged') {
        setEndorsements(INITIAL_ENDORSEMENTS_REGISTRY);
      }
    });

    // 4. Subscribe to Firebase Firestore real-time updates without discarding IndexedDB attachments
    const unsubscribeFirestore = subscribeToEndorsements(
      async (firestoreItems) => {
        setIsFirestoreConnected(true);
        if (firestoreItems && firestoreItems.length > 0) {
          // Merge defaults with firestore items
          const merged = INITIAL_ENDORSEMENTS_REGISTRY.map(defaultItem => {
            const match = firestoreItems.find((p: EndorsementItem) => p.id === defaultItem.id);
            return match ? normalizeEndorsement({ ...defaultItem, ...match }) : defaultItem;
          });
          const customItems = firestoreItems.filter((p: EndorsementItem) => p.isCustom && !INITIAL_ENDORSEMENTS_REGISTRY.some(d => d.id === p.id)).map(normalizeEndorsement);
          let allCombined = [...merged, ...customItems];

          // Rehydrate with any high-capacity binary files stored in IndexedDB so Firestore payload size limits don't wipe them
          try {
            const assets = await DossierStorage.getAllAssets();
            allCombined = rehydrateFromAssets(allCombined, assets);
          } catch (e) {
            console.warn('IndexedDB assets re-check notice:', e);
          }

          setEndorsements(allCombined);
          safeLocalStorageSet(STORAGE_KEY, JSON.stringify(allCombined));
        }
      },
      () => {
        setIsFirestoreConnected(false);
      }
    );

    return () => {
      unsubscribeStorage();
      unsubscribeFirestore();
    };
  }, []);

  // Save to LocalStorage, IndexedDB Vault, and Firebase Firestore
  const persistEndorsements = (updated: EndorsementItem[], itemToSync?: EndorsementItem) => {
    setEndorsements(updated);
    safeLocalStorageSet(STORAGE_KEY, JSON.stringify(updated));
    
    // Sync to Firestore in background
    if (itemToSync) {
      saveEndorsementToFirestore(itemToSync).catch(e => console.warn('Firestore sync failed:', e));
    } else {
      updated.forEach(item => {
        if (item.isCustom || item.isAttached) {
          saveEndorsementToFirestore(item).catch(e => console.warn('Firestore background save failed:', e));
        }
      });
    }
  };

  // Inline Upload Handler for Specific Card using DossierStorage (25MB Limit)
  const handleCardInlineUpload = async (id: string, file: File) => {
    const validation = validateDossierFile(file);
    if (!validation.isValid) {
      if (onNotify) onNotify(validation.error || 'Invalid file format.');
      return;
    }

    setSecuringCardId(id);
    try {
      const asset = await DossierStorage.ingestAndStoreFile(file, {
        id: `rec-${id}`,
        category: 'recommendations',
        metadata: { endorsementId: id, fileName: file.name }
      });

      let targetItem: EndorsementItem | null = null;
      const updated = endorsements.map(item => {
        if (item.id === id) {
          targetItem = {
            ...item,
            isAttached: true,
            attachedUrl: asset.base64Data,
            attachedFileName: asset.fileName,
            attachedFileSize: asset.fileSize,
            attachedFileType: asset.fileType === 'pdf' ? 'pdf' : 'image'
          };
          return targetItem;
        }
        return item;
      });

      persistEndorsements(updated, targetItem || undefined);
      if (onNotify) {
        onNotify(`✓ Document "${file.name}" successfully saved & stored under Faculty Endorsements!`);
      }
    } catch (err: any) {
      if (onNotify) onNotify(err.message || 'Failed to ingest file.');
    } finally {
      setSecuringCardId(null);
    }
  };

  // Remove Attached File from Card & IndexedDB
  const handleDetachFile = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await DossierStorage.deleteAsset(`rec-${id}`);
    } catch {
      // Non-blocking
    }
    let detachedItem: EndorsementItem | null = null;
    const updated = endorsements.map(item => {
      if (item.id === id) {
        const { isAttached, attachedUrl, attachedFileName, attachedFileSize, attachedFileType, ...rest } = item;
        detachedItem = {
          ...rest,
          isAttached: false
        };
        return detachedItem;
      }
      return item;
    });
    persistEndorsements(updated, detachedItem || undefined);
    if (onNotify) {
      onNotify('Document detachment complete & removed from local storage.');
    }
  };

  // Delete Custom Endorsement
  const handleDeleteCustomEndorsement = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await DossierStorage.deleteAsset(`rec-${id}`);
      await DossierStorage.deleteAsset(id);
    } catch {
      // Non-blocking
    }
    const updated = endorsements.filter(item => item.id !== id);
    persistEndorsements(updated);
    deleteEndorsementFromFirestore(id).catch(err => console.warn('Firestore delete failed:', err));
    if (activeModalDoc?.id === id) {
      setActiveModalDoc(null);
    }
    if (onNotify) {
      onNotify('Custom endorsement wiped from storage vault.');
    }
  };

  // Submit New Custom Endorsement
  const handleEmbedSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRecommender.trim() || !newInstitution.trim()) {
      alert('Please provide Recommender Name and Institution.');
      return;
    }

    setIsSecuringEmbed(true);
    const newId = `custom-endorsement-${Date.now()}`;
    let finalAttachedUrl = newFileUrl;
    let finalFileName = newFileName;
    let finalFileSize = newFileSize;
    let finalFileType = newFileType;

    if (newSelectedFile) {
      try {
        const asset = await DossierStorage.ingestAndStoreFile(newSelectedFile, {
          id: `rec-${newId}`,
          category: 'recommendations',
          metadata: { endorsementId: newId, recommenderName: newRecommender.trim() }
        });
        finalAttachedUrl = asset.base64Data;
        finalFileName = asset.fileName;
        finalFileSize = asset.fileSize;
        finalFileType = asset.fileType === 'pdf' ? 'pdf' : 'image';
      } catch (err: any) {
        console.warn('File ingestion notice:', err);
      }
    }

    const newItem: EndorsementItem = {
      id: newId,
      recommenderName: newRecommender.trim(),
      recommenderTitle: newTitle.trim() || 'Senior Executive / Faculty',
      department: newDepartment.trim() || 'Executive Leadership',
      institution: newInstitution.trim(),
      institutionCategory: 'custom' as any,
      date: newDate.trim() || '2026',
      email: newEmail.trim() || 'inquiry@oaklinlane.com',
      badge: newBadge.trim() || 'Executive Endorsement',
      featuredQuote: newQuote.trim() || 'Donna represents an exceptional standard of strategic execution and high-trust leadership.',
      strategicAnalysis: {
        cosLeverageSummary: newAnalysis.trim() || 'Provides high-caliber executive force multiplication across complex strategic operations.',
        oaklinLaneApplication: 'Scales clinical and financial operations with high fidelity across expanding clinic networks.',
        coreCompetenciesValidated: ['Executive Force Multiplication', 'Strategic Decision Support', 'High-Trust Confidentiality'],
        roleAlignmentTag: 'Custom Executive Endorsement'
      },
      fullTranscript: newFullTranscript.trim() || (newQuote.trim() ? `To Whom It May Concern,\n\n${newQuote.trim()}\n\nSincerely,\n${newRecommender.trim()}\n${newTitle.trim()}\n${newInstitution.trim()}` : ''),
      isAttached: Boolean(finalAttachedUrl),
      attachedUrl: finalAttachedUrl || undefined,
      attachedFileName: finalFileName || undefined,
      attachedFileSize: finalFileSize || undefined,
      attachedFileType: finalFileType,
      isCustom: true
    };

    persistEndorsements([...endorsements, newItem], newItem);
    setIsSecuringEmbed(false);
    setIsEmbedModalOpen(false);
    // Reset Form
    setNewRecommender('');
    setNewTitle('');
    setNewInstitution('');
    setNewDepartment('');
    setNewEmail('');
    setNewDate('');
    setNewQuote('');
    setNewAnalysis('');
    setNewFullTranscript('');
    setNewFileUrl('');
    setNewFileName('');
    setNewFileSize('');
    setNewSelectedFile(null);

    if (onNotify) {
      onNotify(`✓ Embedded endorsement from ${newItem.recommenderName} and stored locally!`);
    }
  };

  const handleNewFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validation = validateDossierFile(file);
    if (!validation.isValid) {
      if (onNotify) onNotify(validation.error || 'Invalid file format.');
      return;
    }

    setNewSelectedFile(file);
    setNewFileType(validation.fileType === 'pdf' ? 'pdf' : 'image');
    setNewFileName(file.name);
    setNewFileSize(`${(file.size / (1024 * 1024) > 1 ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' : (file.size / 1024).toFixed(0) + ' KB')}`);

    const reader = new FileReader();
    reader.onload = (event) => {
      setNewFileUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const filteredEndorsements = endorsements.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'custom') return item.isCustom;
    return item.institutionCategory === selectedCategory;
  });

  const handleCopyQuote = (item: EndorsementItem) => {
    const textToCopy = `"${item.featuredQuote}"\n\n— ${item.recommenderName}, ${item.recommenderTitle}, ${item.institution} (${item.date})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    if (onNotify) {
      onNotify(`Copied endorsement quote from ${item.recommenderName}!`);
    }
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Section Header & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200/80 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-mono">
              Faculty & Executive Endorsements
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-[#eaf1f8] text-[#2c5282] text-[10px] font-mono font-bold border border-[#3c6382]/25">
              {endorsements.length} Verified Endorsements
            </span>
            <span 
              title="Persistent cloud storage enabled with real-time Firebase Firestore synchronization"
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border transition-colors ${
                isFirestoreConnected 
                  ? 'bg-amber-50 text-amber-900 border-amber-200' 
                  : 'bg-stone-100 text-stone-600 border-stone-200'
              }`}
            >
              <Database className="w-3 h-3 text-[#D9532F]" />
              <span>Firestore Synced</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3182ce] animate-pulse" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl font-sans leading-relaxed">
            Verifiable academic evaluations and executive character recommendations with interactive document embedding, verified transcription, and CEO force multiplication analysis.
          </p>
        </div>

        {/* Institution Filter Tabs */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Pills */}
          <div className="flex items-center gap-1 flex-wrap">
            {[
              { id: 'all', label: `All (${endorsements.length})` },
              { id: 'executive', label: `Executive / Legal (${endorsements.filter(e => e.institutionCategory === 'executive').length})` },
              { id: 'georgetown', label: `Georgetown (${endorsements.filter(e => e.institutionCategory === 'georgetown').length})` },
              { id: 'harvard', label: `Harvard (${endorsements.filter(e => e.institutionCategory === 'harvard').length})` },
              { id: 'calpoly', label: `Cal Poly (${endorsements.filter(e => e.institutionCategory === 'calpoly').length})` },
              ...(endorsements.some(e => e.isCustom) ? [{ id: 'custom', label: 'Custom Embeds' }] : [])
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                  selectedCategory === tab.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-stone-100/90 text-stone-700 hover:bg-stone-200/90 border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-Cutting Executive Synthesis Matrix */}
      <div className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-stone-200/80 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#df5837]" />
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-[#df5837]">
              Hiring Committee Synthesis • 7-Pillar Endorsement Convergence
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-700 font-medium">
            Direct Alignment with CEO Chris Callander's Strategic Requirements
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-3 font-mono text-xs">
          {/* Pillar 01: James J. Rosemergy */}
          <button
            type="button"
            onClick={() => handleScrollToCard('card-rosemergy')}
            className="p-3.5 text-left rounded-xl bg-white/90 border border-stone-200/80 shadow-2xs space-y-1.5 hover:-translate-y-1 hover:border-[#df5837] hover:shadow-md hover:bg-orange-50/30 active:scale-[0.98] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold text-[#df5837] uppercase block group-hover:underline">
                  1. Legal Ops & Diligence
                </span>
                <ArrowRight className="w-3 h-3 text-[#df5837] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <strong className="text-slate-900 block text-xs font-sans">James J. Rosemergy</strong>
              <p className="text-[10px] text-slate-600 font-sans leading-tight">
                Carey & Danis: Diligent activity logs, intake coordination & channel expansion.
              </p>
            </div>
            <span className="text-[9px] font-mono text-stone-400 group-hover:text-[#df5837] pt-1 block">
              Jump to Card ↓
            </span>
          </button>

          {/* Pillar 02: Dr. John A. Corso */}
          <button
            type="button"
            onClick={() => handleScrollToCard('card-corso')}
            className="p-3.5 text-left rounded-xl bg-white/90 border border-stone-200/80 shadow-2xs space-y-1.5 hover:-translate-y-1 hover:border-[#df5837] hover:shadow-md hover:bg-orange-50/30 active:scale-[0.98] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold text-[#df5837] uppercase block group-hover:underline">
                  2. Capstone Synthesis
                </span>
                <ArrowRight className="w-3 h-3 text-[#df5837] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <strong className="text-slate-900 block text-xs font-sans">Dr. John A. Corso</strong>
              <p className="text-[10px] text-slate-600 font-sans leading-tight">
                Georgetown SCS: American Express capstone, persuasive communication & character.
              </p>
            </div>
            <span className="text-[9px] font-mono text-stone-400 group-hover:text-[#df5837] pt-1 block">
              Jump to Card ↓
            </span>
          </button>

          {/* Pillar 03: Prof. Gary Steinberg */}
          <button
            type="button"
            onClick={() => handleScrollToCard('card-steinberg')}
            className="p-3.5 text-left rounded-xl bg-white/90 border border-stone-200/80 shadow-2xs space-y-1.5 hover:-translate-y-1 hover:border-[#df5837] hover:shadow-md hover:bg-orange-50/30 active:scale-[0.98] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold text-[#df5837] uppercase block group-hover:underline">
                  3. Strategic Foresight
                </span>
                <ArrowRight className="w-3 h-3 text-[#df5837] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <strong className="text-slate-900 block text-xs font-sans pb-0.5 leading-normal overflow-visible">Prof. Gary Steinberg</strong>
              <p className="text-[10px] text-slate-600 font-sans leading-tight">
                Georgetown SCS: Corporate frameworks, case studies & business intelligence.
              </p>
            </div>
            <span className="text-[9px] font-mono text-stone-400 group-hover:text-[#df5837] pt-1 block">
              Jump to Card ↓
            </span>
          </button>

          {/* Pillar 04: Anne Taieb */}
          <button
            type="button"
            onClick={() => handleScrollToCard('card-taieb')}
            className="p-3.5 text-left rounded-xl bg-white/90 border border-stone-200/80 shadow-2xs space-y-1.5 hover:-translate-y-1 hover:border-[#df5837] hover:shadow-md hover:bg-orange-50/30 active:scale-[0.98] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold text-[#df5837] uppercase block group-hover:underline">
                  4. Consulting Polish
                </span>
                <ArrowRight className="w-3 h-3 text-[#df5837] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <strong className="text-slate-900 block text-xs font-sans">Anne Taieb</strong>
              <p className="text-[10px] text-slate-600 font-sans leading-tight">
                Harvard Extension: Client discretion, interpersonal poise & global adaptability.
              </p>
            </div>
            <span className="text-[9px] font-mono text-stone-400 group-hover:text-[#df5837] pt-1 block">
              Jump to Card ↓
            </span>
          </button>

          {/* Pillar 05: Dr. Megan C. Good */}
          <button
            type="button"
            onClick={() => handleScrollToCard('card-good')}
            className="p-3.5 text-left rounded-xl bg-white/90 border border-stone-200/80 shadow-2xs space-y-1.5 hover:-translate-y-1 hover:border-[#df5837] hover:shadow-md hover:bg-orange-50/30 active:scale-[0.98] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold text-[#df5837] uppercase block group-hover:underline">
                  5. Problem-Solving
                </span>
                <ArrowRight className="w-3 h-3 text-[#df5837] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <strong className="text-slate-900 block text-xs font-sans">Dr. Megan C. Good</strong>
              <p className="text-[10px] text-slate-600 font-sans leading-tight">
                Cal Poly: Unsupervised problem-solving, B2B sales & tenacity under pressure.
              </p>
            </div>
            <span className="text-[9px] font-mono text-stone-400 group-hover:text-[#df5837] pt-1 block">
              Jump to Card ↓
            </span>
          </button>

          {/* Pillar 06: Dr. Paul Sarmas */}
          <button
            type="button"
            onClick={() => handleScrollToCard('card-sarmas')}
            className="p-3.5 text-left rounded-xl bg-white/90 border border-stone-200/80 shadow-2xs space-y-1.5 hover:-translate-y-1 hover:border-[#df5837] hover:shadow-md hover:bg-orange-50/30 active:scale-[0.98] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold text-[#df5837] uppercase block group-hover:underline">
                  6. Managerial Finance
                </span>
                <ArrowRight className="w-3 h-3 text-[#df5837] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <strong className="text-slate-900 block text-xs font-sans">Dr. Paul Sarmas</strong>
              <p className="text-[10px] text-slate-600 font-sans leading-tight">
                Cal Poly: FRL 3000 finance modeling, project management & work ethic.
              </p>
            </div>
            <span className="text-[9px] font-mono text-stone-400 group-hover:text-[#df5837] pt-1 block">
              Jump to Card ↓
            </span>
          </button>

          {/* Pillar 07: KylieRose Melville */}
          <button
            type="button"
            onClick={() => handleScrollToCard('card-melville')}
            className="p-3.5 text-left rounded-xl bg-white/90 border border-stone-200/80 shadow-2xs space-y-1.5 hover:-translate-y-1 hover:border-[#df5837] hover:shadow-md hover:bg-orange-50/30 active:scale-[0.98] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold text-[#df5837] uppercase block group-hover:underline">
                  7. Frontline Operations
                </span>
                <ArrowRight className="w-3 h-3 text-[#df5837] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <strong className="text-slate-900 block text-xs font-sans">KylieRose Melville</strong>
              <p className="text-[10px] text-slate-600 font-sans leading-tight">
                Best Friends: High-emotion triage, pandemic resilience & customer service.
              </p>
            </div>
            <span className="text-[9px] font-mono text-stone-400 group-hover:text-[#df5837] pt-1 block">
              Jump to Card ↓
            </span>
          </button>
        </div>
      </div>

      {/* Main Endorsements Grid & Deep Dive Cards */}
      <div className="space-y-6">
        {filteredEndorsements.map((item) => {
          const isExpanded = expandedDocId === item.id;
          const cardAnchorId = getCardAnchorId(item.id);
          const isHighlighted = highlightedCardId === cardAnchorId;

          return (
            <div
              key={item.id}
              id={cardAnchorId}
              className={`recommendation-card rounded-2xl transition-all duration-300 overflow-visible shadow-2xs ${
                isHighlighted
                  ? 'border-2 border-[#D9532F] ring-4 ring-[#D9532F]/40 shadow-xl scale-[1.008] bg-orange-50/15'
                  : 'border-[1.5px] border-[#f1ded7] bg-white hover:shadow-xs'
              }`}
            >
              {/* Highlight Flash Banner */}
              {isHighlighted && (
                <div className="bg-[#D9532F] text-white text-[11px] font-mono font-bold px-4 py-1.5 flex items-center justify-between animate-pulse rounded-t-2xl">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Selected 6-Pillar Endorsement Record
                  </span>
                  <span className="text-[10px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                    Active Focus
                  </span>
                </div>
              )}
              {/* Hidden File Input for Card-Level Upload */}
              <input
                type="file"
                id={`endorsement-upload-${item.id}`}
                accept=".pdf,.png,.jpg,.jpeg"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleCardInlineUpload(item.id, file);
                  }
                  e.target.value = '';
                }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Card Header & Recommender Meta */}
              <div className="p-6 border-b border-[#f1ded7]/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-stone-50/40 w-full">
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#D9532F] shrink-0 font-serif font-black text-lg shadow-2xs">
                    {item.recommenderName.charAt(0)}
                  </div>

                  <div className="space-y-2 min-w-0 flex-1">
                    <div>
                      <h3 className="prof-name text-base sm:text-lg font-black text-slate-900 tracking-tight break-words pb-1 leading-[1.45] overflow-visible">
                        {item.recommenderName}
                      </h3>
                      <div className="text-xs sm:text-[13px] font-semibold text-slate-800 font-mono mt-0.5 break-words">
                        {item.recommenderTitle}
                      </div>
                    </div>

                    {/* Standardized 2-Line Bulleted Metadata Block */}
                    <div className="space-y-0.5 text-xs text-stone-500 font-mono leading-[1.45]">
                      <div className="flex items-start gap-1.5">
                        <span className="text-stone-400 select-none shrink-0">•</span>
                        <span className="break-words text-stone-600">{item.department}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-stone-400 select-none shrink-0">•</span>
                        <span className="flex items-center gap-1 text-stone-500 shrink-0">
                          <Calendar className="w-3 h-3 text-stone-400 shrink-0" />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Category / Institution Pill Tags */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-[10px] font-mono font-bold border border-stone-200 w-fit max-w-full whitespace-normal leading-[1.4] break-words shadow-2xs">
                        <Building className="w-2.5 h-2.5 text-[#D9532F] shrink-0" />
                        <span>{item.institution}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-[#D9532F] text-[10px] font-mono font-bold border border-[#f1ded7] w-fit max-w-full whitespace-normal leading-[1.4] break-words shadow-2xs">
                        {item.badge}
                      </span>
                      {item.isCustom && (
                        <span className="px-3 py-1 rounded-full bg-[#D9532F] text-white text-[10px] font-mono font-bold shadow-xs w-fit max-w-full whitespace-normal leading-[1.4] break-words shrink-0">
                          Custom Entry
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Links & Quick Actions */}
                <div className="flex items-center gap-2 self-end lg:self-center flex-wrap">
                  <a
                    href={`mailto:${item.email}?subject=Verification%20Inquiry%20regarding%20Donna%20Rivas`}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 transition-colors"
                    title={`Contact ${item.recommenderName}`}
                  >
                    <Mail className="w-3 h-3 text-stone-500" />
                    <span>{item.email}</span>
                  </a>

                  {item.phone && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono text-stone-600 bg-stone-50 border border-stone-200">
                      <Phone className="w-3 h-3 text-stone-400" />
                      <span>{item.phone}</span>
                    </span>
                  )}

                  {/* Remove Button for Custom Items */}
                  {item.isCustom && (
                    <button
                      onClick={(e) => handleDeleteCustomEndorsement(item.id, e)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors cursor-pointer"
                      title="Remove this custom endorsement"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Core Quote Box */}
              <div className="p-6 bg-amber-50/30 border-b border-[#f1ded7]/70">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#D9532F] shrink-0 mt-0.5 opacity-80" />
                  <blockquote className="text-sm sm:text-base font-serif italic text-slate-800 leading-relaxed">
                    "{item.featuredQuote}"
                  </blockquote>
                </div>

                {/* In-Place Document Attachment Card */}
                {(() => {
                  const isInlineDocOpen = !!openInlineCardDocIds[item.id];
                  const docThumbnailUrl = item.attachedUrl || 'IMG_0702.jpeg';

                  return (
                    <div className="mt-4 p-4 sm:p-5 rounded-2xl border border-[#f1ded7] bg-white/95 font-sans shadow-xs transition-all overflow-visible max-w-full">
                      {/* Main Row: Prominent Thumbnail + Signatory Info + View Action */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                        <div className="flex flex-row items-start gap-4 min-w-0 flex-1 w-full max-w-full flex-wrap xs:flex-nowrap">
                          {/* Large Document Thumbnail Preview */}
                          <div 
                            onClick={() => toggleInlineCardDoc(item.id)}
                            className="relative group cursor-pointer shrink-0 rounded-xl overflow-hidden border-2 border-white ring-1 ring-[#3c6382]/30 shadow-md bg-white hover:ring-[#2c5282] hover:shadow-lg transition-all duration-200"
                            title="Click to view full letterhead scan"
                            style={{ width: '80px', height: '104px', flexShrink: 0 }}
                          >
                            <img 
                              src={docThumbnailUrl} 
                              alt={`Document scan preview for ${item.recommenderName}`} 
                              className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-105"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'IMG_0702.jpeg';
                              }}
                            />
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                                <Eye className="w-3 h-3 text-[#df5837]" />
                                {isInlineDocOpen ? 'Close' : 'View'}
                              </span>
                            </div>
                          </div>

                          {/* Signatory Details & Official Record Badge */}
                          <div className="flex-1 min-w-0 flex flex-col justify-start text-left space-y-1.5 break-words">
                            <div>
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#eaf1f8] text-[#2c5282] border border-[#3c6382]/25 shadow-2xs">
                                <FileCheck className="w-3.5 h-3.5 text-[#2c5282] shrink-0" />
                                Official Record
                              </span>
                            </div>
                            <h4 className="prof-name font-bold text-slate-900 text-sm sm:text-base font-serif tracking-tight break-words pb-1 leading-[1.45] overflow-visible">
                              {item.recommenderName}
                            </h4>
                            <p className="text-xs text-stone-600 font-sans leading-relaxed break-words">
                              {item.recommenderTitle} • {item.department}
                            </p>
                            <p className="text-[11px] text-stone-500 font-mono break-words">
                              {item.institution} ({item.date})
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-center justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-[#f1ded7] flex-wrap xs:flex-nowrap">
                          <button 
                            type="button" 
                            onClick={() => toggleInlineCardDoc(item.id)}
                            className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#df5837] hover:bg-[#c94b2d] text-white text-center justify-center inline-flex items-center active:scale-95 transition cursor-pointer shadow-xs whitespace-nowrap"
                          >
                            {isInlineDocOpen ? 'Close Document' : 'View Attached Document'}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setActiveModalDoc(item);
                              setModalViewMode(item.isAttached && item.attachedUrl ? 'preview' : 'transcript');
                              setZoomLevel(1);
                            }}
                            className="px-3 py-2 text-xs font-semibold rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-[#f1ded7] transition cursor-pointer flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
                            title="Open in High-Resolution Modal"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-stone-500" />
                            <span className="hidden md:inline">Full Letterhead</span>
                          </button>
                        </div>
                      </div>

                      {/* Expandable Full-View Panel */}
                      {isInlineDocOpen && (
                        <div className="mt-4 pt-4 border-t border-dashed border-[#f1ded7]">
                          <div className="overflow-hidden rounded-2xl border border-[#f1ded7] bg-white p-4 shadow-xs space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-stone-600 pb-2 border-b border-stone-100 flex-wrap gap-2">
                              <span className="font-semibold text-slate-800 flex items-center gap-1.5 min-w-0">
                                <FileCheck className="w-4 h-4 text-[#2c5282] shrink-0" />
                                <span className="break-words">{item.recommenderName} • {item.institution}</span>
                              </span>
                              <span className="text-[11px] text-[#2c5282] font-bold bg-[#eaf1f8] px-2.5 py-0.5 rounded-full border border-[#3c6382]/25 shrink-0">
                                Verified Letterhead Scan
                              </span>
                            </div>

                            {item.attachedFileType === 'pdf' || (item.attachedUrl && (item.attachedUrl.startsWith('data:application/pdf') || item.attachedUrl.endsWith('.pdf'))) ? (
                              <div className="w-full h-[60vh] rounded-lg overflow-hidden border border-stone-200">
                                <iframe
                                  src={item.attachedUrl || 'IMG_0702.jpeg'}
                                  title={item.recommenderName}
                                  className="doc-viewer-frame w-full h-full border-0"
                                />
                              </div>
                            ) : (
                              <div className="w-full flex items-center justify-center p-2 bg-stone-900/5 rounded-lg border border-stone-200 overflow-auto max-h-[70vh]">
                                <img 
                                  src={docThumbnailUrl} 
                                  alt={`Letterhead Scan from ${item.recommenderName}`} 
                                  className="w-full max-h-[65vh] object-contain rounded shadow-xs"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'IMG_0702.jpeg';
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Strategic Analysis & Competency Matrix */}
              <div className="p-6 space-y-4 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D9532F]" />
                    <span className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Strategic Analysis: Chief of Staff & Oaklin Lane Relevance
                    </span>
                  </div>

                  <button
                    onClick={() => setExpandedDocId(isExpanded ? null : item.id)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#D9532F] hover:underline cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse Analysis' : 'Expand Full Strategic Breakdown'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Two-Column Operational Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <strong className="text-slate-900 font-mono text-[11px] uppercase tracking-wider block flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#D9532F]" />
                      Executive Leverage for CEO Chris Callander
                    </strong>
                    <p className="text-stone-700 leading-relaxed">
                      {item.strategicAnalysis.cosLeverageSummary}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-200/70 space-y-1.5">
                    <strong className="text-[#D9532F] font-mono text-[11px] uppercase tracking-wider block flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#D9532F]" />
                      Direct Oaklin Lane Pediatric Application
                    </strong>
                    <p className="text-stone-700 leading-relaxed">
                      {item.strategicAnalysis.oaklinLaneApplication}
                    </p>
                  </div>
                </div>

                {/* Validated Competency Pills */}
                <div className="pt-2 flex items-center gap-2 flex-wrap font-mono text-[11px]">
                  <span className="text-stone-500 font-semibold text-[10px] uppercase tracking-wider">
                    Validated Competencies:
                  </span>
                  {item.strategicAnalysis.coreCompetenciesValidated.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Modal for Official Transcribed Letter & Visual Document Preview */}
      {activeModalDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalDoc(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-50">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#D9532F]" />
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 flex-wrap">
                    <span>{activeModalDoc.recommenderName}</span>
                    <span className="text-xs font-mono font-normal text-stone-500">
                      • {activeModalDoc.institution} ({activeModalDoc.date})
                    </span>
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500 flex-wrap">
                    <span>{activeModalDoc.recommenderTitle}</span>
                    <span>•</span>
                    <span>{activeModalDoc.department}</span>
                    <span>•</span>
                    <span className="text-slate-700 font-bold">{activeModalDoc.email}</span>
                  </div>
                </div>
              </div>

              {/* Header Tabs & Actions */}
              <div className="flex items-center gap-2 flex-wrap">
                {activeModalDoc.isAttached && activeModalDoc.attachedUrl && (
                  <div className="flex items-center bg-stone-200/80 p-0.5 rounded-xl text-xs font-mono">
                    <button
                      onClick={() => setModalViewMode('preview')}
                      className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                        modalViewMode === 'preview'
                          ? 'bg-white text-slate-900 shadow-2xs'
                          : 'text-stone-600 hover:text-slate-900'
                      }`}
                    >
                      Document Preview
                    </button>
                    <button
                      onClick={() => setModalViewMode('transcript')}
                      className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                        modalViewMode === 'transcript'
                          ? 'bg-white text-slate-900 shadow-2xs'
                          : 'text-stone-600 hover:text-slate-900'
                      }`}
                    >
                      Verified Transcript
                    </button>
                  </div>
                )}

                <button
                  onClick={() => handleCopyQuote(activeModalDoc)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 transition-colors cursor-pointer"
                  title="Copy Citation"
                >
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Copy Citation</span>
                </button>

                {activeModalDoc.isAttached && activeModalDoc.attachedUrl && (
                  <a
                    href={activeModalDoc.attachedUrl}
                    download={activeModalDoc.attachedFileName || 'recommendation_letter.pdf'}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#D9532F] hover:bg-[#C2410C] text-white transition-colors cursor-pointer shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                )}

                <button
                  onClick={() => setActiveModalDoc(null)}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Fixed dimensions with responsive inner scroll (max-height: 70vh; overflow-y: auto;) */}
            <div 
              className="p-4 sm:p-8 overflow-y-auto flex-1 bg-stone-50/60 space-y-6"
              style={{ maxHeight: '70vh', overflowY: 'auto' }}
            >
              {modalViewMode === 'preview' && activeModalDoc.isAttached && activeModalDoc.attachedUrl ? (
                <div className="space-y-4">
                  {/* Zoom controls for image files */}
                  {activeModalDoc.attachedFileType === 'image' && (
                    <div className="flex items-center justify-between bg-white px-4 py-2 rounded-2xl border border-stone-200 text-xs font-mono">
                      <span>Image Zoom: {Math.round(zoomLevel * 100)}%</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))}
                          className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setZoomLevel(1)}
                          className="px-2 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                        >
                          Reset
                        </button>
                        <button
                          onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))}
                          className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Render based on file type using exact iframe or image */}
                  {activeModalDoc.attachedFileType === 'pdf' || activeModalDoc.attachedUrl.startsWith('data:application/pdf') || activeModalDoc.attachedUrl.endsWith('.pdf') ? (
                    <div className="w-full h-[65vh] bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
                      <iframe
                        src={activeModalDoc.attachedUrl}
                        title={activeModalDoc.recommenderName}
                        className="doc-viewer-frame w-full h-full border-0"
                      />
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-center p-4 bg-stone-900/5 rounded-2xl border border-stone-200 overflow-auto min-h-[50vh]">
                      <img
                        src={activeModalDoc.attachedUrl}
                        alt={`Endorsement from ${activeModalDoc.recommenderName}`}
                        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
                        className="max-w-full h-auto rounded-xl shadow-lg transition-transform duration-150"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
              ) : activeModalDoc.id === 'rosemergy-careydanis-2026' ? (
                /* Formal Carey & Danis LLC Legal Letterhead Layout */
                <div className="p-6 sm:p-12 bg-white border border-stone-300 rounded-2xl shadow-sm text-slate-900 space-y-6 relative max-w-3xl mx-auto">
                  {/* Official Carey & Danis Letterhead Header */}
                  <div className="text-center space-y-1.5 border-b border-stone-200 pb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-stone-900 text-stone-900 font-serif font-black text-2xl mb-1 tracking-tight">
                      (D)
                    </div>
                    <h2 className="font-serif font-bold text-lg sm:text-xl text-slate-900 tracking-widest uppercase">
                      Carey & Danis LLC
                    </h2>
                    <p className="font-sans text-[11px] font-semibold text-stone-600 tracking-widest uppercase">
                      Attorneys at Law
                    </p>
                    <p className="font-sans text-[11px] text-stone-500 hover:text-stone-700">
                      www.careydanis.com
                    </p>
                    <p className="font-sans text-[10px] text-stone-500 tracking-tight pt-1">
                      8235 FORSYTH BLVD. · SUITE 1100 · ST. LOUIS, MO 63105 · (314) 725-7700 · (800) 721-2519 · FAX: (314) 721-0965
                    </p>
                  </div>

                  {/* Letter Date & Subject */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-serif text-slate-800 gap-2">
                    <span className="font-semibold">August 12, 2026</span>
                    <span className="font-bold sm:text-right text-stone-900 text-sm">
                      Re: Donna Aseret Rivas
                    </span>
                  </div>

                  {/* Exact Letter Body Container */}
                  <pre className="letter-exact-body font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-slate-800 font-normal border-0 p-0 bg-transparent">
{`To whom it may concern,

I am writing to recommend Donna Aseret Rivas, who worked with Carey & Danis, LLC as an intake and community outreach coordinator with respect to our social media addiction litigation campaign. It is a pleasure to provide this letter on her behalf.

Throughout her time with our firm, Donna was diligent and reliable. She consistently kept us informed of her progress, sent us regular activity logs, and followed through on every assignment she took on. Her communication was clear and professional at all times.

We particularly appreciated that Donna showed initiative and creativity in expanding the reach of our program beyond obvious channels. Donna was one of the strongest coordinators we worked with, and her efforts reflected real care and professionalism.

I recommend Donna without reservation and am confident she will bring the same diligence, initiative, and professionalism to any future opportunity. Please feel free to contact our office if further information would be helpful.`}
                  </pre>

                  {/* Valediction & Signature Block */}
                  <div className="pt-4 space-y-2">
                    <p className="font-serif text-xs sm:text-sm text-slate-800">Very truly yours,</p>
                    
                    {/* Stylized Signature */}
                    <div className="pt-2 pb-1">
                      <div className="font-serif italic text-2xl text-slate-900 font-semibold tracking-wide" style={{ fontFamily: 'Georgia, serif', transform: 'rotate(-2deg)' }}>
                        James J. Rosemergy
                      </div>
                    </div>

                    <div className="pt-1 text-xs font-sans text-stone-700">
                      <strong className="block text-slate-900 font-serif">James J. Rosemergy</strong>
                      <span className="text-stone-500 font-mono text-[11px]">Managing Partner • Carey & Danis, LLC</span>
                      <span className="text-stone-400 font-mono text-[10px] block">jrosemergy@careydanis.com • (314) 725-7700</span>
                    </div>
                  </div>

                  {/* Document Verification Footer */}
                  <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-500 gap-2">
                    <span className="flex items-center gap-1.5 text-[#2c5282] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Official Executive Recommendation Document
                    </span>
                    <span className="text-[10px] text-stone-400">
                      Carey & Danis, LLC • Ref: CD-2026-DAR-0812
                    </span>
                  </div>
                </div>
              ) : activeModalDoc.id === 'taieb-harvard-2025' ? (
                /* Formal Harvard Extension School Letterhead Layout */
                <div className="p-6 sm:p-12 bg-white border border-stone-300 rounded-2xl shadow-sm text-slate-900 space-y-6 relative max-w-3xl mx-auto">
                  {/* Official Harvard Header */}
                  <div className="border-b-2 border-red-900 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="font-serif font-black text-xl sm:text-2xl text-red-950 tracking-wide">
                        HARVARD UNIVERSITY
                      </h2>
                      <p className="font-serif text-xs text-red-900 font-medium tracking-wider uppercase">
                        Harvard Extension School • Division of Continuing Education
                      </p>
                    </div>
                    <div className="sm:text-right text-xs font-mono text-stone-600">
                      <strong className="block text-slate-900 font-serif">Anne Taieb</strong>
                      <span>Senior Lecturer</span>
                      <span className="block text-stone-500 text-[11px]">ataieb@g.harvard.edu</span>
                    </div>
                  </div>

                  {/* Date & Subject */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-serif text-slate-800 gap-2">
                    <span className="font-semibold">December 5, 2025</span>
                    <span className="font-bold text-slate-900 text-sm">
                      Recommendation for Donna Rivas
                    </span>
                  </div>

                  {/* Exact Letter Body Container */}
                  <pre className="letter-exact-body font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-slate-800 font-normal border-0 p-0 bg-transparent">
{`To Whom It May Concern,

I am pleased to recommend Donna Rivas, whom I had the opportunity to teach in Elementary French E1b during the Spring 2025 at Harvard Extension School. From the very beginning of the course, she distinguished herself as a motivated, engaged, and reliable student—qualities that I believe will make her an excellent addition to your team.

In my class, she consistently demonstrated a strong work ethic and a genuine enthusiasm for learning. She approached each assignment thoughtfully, actively participated in discussions, and regularly sought feedback to improve her skills. Her ability to communicate clearly, collaborate effectively with classmates, and maintain a positive and professional attitude was evident throughout the semester.

What sets her apart is her dedication to personal growth and her natural interpersonal skills. She is self-assured and attentive - traits that are especially valuable in the management consultancy sector, where client interaction, discretion, and professionalism are essential. She is also culturally curious and open-minded, showing a real interest in languages and international contexts, which I believe will serve her well in a global-facing role.

I am confident that Donna Rivas will bring enthusiasm and a strong sense of responsibility to any professional setting. She contributed positively to our classroom environment, and I have no doubt that she will bring the same energy and commitment to her work with your company.

Please feel free to contact me if you need any additional information.`}
                  </pre>

                  {/* Valediction & Signature Block */}
                  <div className="pt-4 space-y-2">
                    <p className="font-serif text-xs sm:text-sm text-slate-800">Sincerely,</p>
                    
                    <div className="pt-2 pb-1">
                      <div className="font-serif italic text-2xl text-slate-900 font-semibold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                        Anne Taieb
                      </div>
                    </div>

                    <div className="pt-1 text-xs font-sans text-stone-700">
                      <strong className="block text-slate-900 font-serif">Anne Taieb</strong>
                      <span className="text-stone-500 font-mono text-[11px]">Senior Lecturer • Harvard Extension School</span>
                      <span className="text-stone-400 font-mono text-[10px] block">ataieb@g.harvard.edu • Cambridge, MA</span>
                    </div>
                  </div>

                  {/* Verification Footer */}
                  <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-500 gap-2">
                    <span className="flex items-center gap-1.5 text-[#2c5282] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Academic Recommendation • Harvard University
                    </span>
                    <span className="text-[10px] text-stone-400">
                      Harvard Extension School • Verified Record
                    </span>
                  </div>
                </div>
              ) : activeModalDoc.institutionCategory === 'georgetown' ? (
                /* Formal Georgetown University Letterhead Layout */
                <div className="p-6 sm:p-12 bg-white border border-stone-300 rounded-2xl shadow-sm text-slate-900 space-y-6 relative max-w-3xl mx-auto">
                  {/* Official Georgetown Header */}
                  <div className="border-b-2 border-[#041E42] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="font-serif font-black text-xl sm:text-2xl text-[#041E42] tracking-wide">
                        GEORGETOWN UNIVERSITY
                      </h2>
                      <p className="font-serif text-xs text-slate-700 font-medium tracking-wider uppercase">
                        School of Continuing Studies • Strategic Management
                      </p>
                    </div>
                    <div className="sm:text-right text-xs font-mono text-stone-600">
                      <strong className="block text-slate-900 font-serif">{activeModalDoc.recommenderName}</strong>
                      <span>{activeModalDoc.recommenderTitle}</span>
                      <span className="block text-stone-500 text-[11px]">{activeModalDoc.email}</span>
                    </div>
                  </div>

                  {/* Date & Subject */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-serif text-slate-800 gap-2">
                    <span className="font-semibold">{activeModalDoc.date}</span>
                    <span className="font-bold text-slate-900 text-sm">
                      Recommendation for Donna Rivas
                    </span>
                  </div>

                  {/* Exact Letter Body Container */}
                  <pre className="letter-exact-body font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-slate-800 font-normal border-0 p-0 bg-transparent">
                    {activeModalDoc.fullTranscript}
                  </pre>

                  {/* Verification Footer */}
                  <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-500 gap-2">
                    <span className="flex items-center gap-1.5 text-[#2c5282] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Academic Record • Georgetown University SCS
                    </span>
                    <span className="text-[10px] text-stone-400">
                      Signatory: {activeModalDoc.email}
                    </span>
                  </div>
                </div>
              ) : activeModalDoc.institutionCategory === 'calpoly' ? (
                /* Formal Cal Poly Pomona Letterhead Layout */
                <div className="p-6 sm:p-12 bg-white border border-stone-300 rounded-2xl shadow-sm text-slate-900 space-y-6 relative max-w-3xl mx-auto">
                  {/* Official Cal Poly Header */}
                  <div className="border-b-2 border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="font-serif font-black text-xl sm:text-2xl text-slate-900 tracking-wide">
                        CAL POLY POMONA
                      </h2>
                      <p className="font-serif text-xs text-slate-700 font-medium tracking-wider uppercase">
                        College of Business Administration • Singelyn Graduate School
                      </p>
                    </div>
                    <div className="sm:text-right text-xs font-mono text-stone-600">
                      <strong className="block text-slate-900 font-serif">{activeModalDoc.recommenderName}</strong>
                      <span>{activeModalDoc.recommenderTitle}</span>
                      <span className="block text-stone-500 text-[11px]">{activeModalDoc.email}</span>
                    </div>
                  </div>

                  {/* Date & Subject */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-serif text-slate-800 gap-2">
                    <span className="font-semibold">{activeModalDoc.date}</span>
                    <span className="font-bold text-slate-900 text-sm">
                      Recommendation for Donna Rivas
                    </span>
                  </div>

                  {/* Exact Letter Body Container */}
                  <pre className="letter-exact-body font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-slate-800 font-normal border-0 p-0 bg-transparent">
                    {activeModalDoc.fullTranscript}
                  </pre>

                  {/* Verification Footer */}
                  <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-500 gap-2">
                    <span className="flex items-center gap-1.5 text-[#2c5282] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Academic Record • California State Polytechnic University, Pomona
                    </span>
                    <span className="text-[10px] text-stone-400">
                      Signatory: {activeModalDoc.email}
                    </span>
                  </div>
                </div>
              ) : (
                /* Formal Transcribed Letterhead Body for other custom recommenders */
                <div className="p-6 sm:p-10 bg-white border border-stone-200/90 rounded-2xl shadow-xs font-serif text-slate-800 space-y-6 relative max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-4 text-xs font-mono text-stone-600 gap-2">
                    <div>
                      <strong className="text-slate-900 block text-sm font-sans">{activeModalDoc.institution}</strong>
                      <span>{activeModalDoc.department}</span>
                    </div>
                    <div className="sm:text-right">
                      <span className="block font-bold">{activeModalDoc.date}</span>
                      <span className="text-[#D9532F]">{activeModalDoc.badge}</span>
                    </div>
                  </div>

                  <pre className="letter-exact-body font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-wrap pt-2 font-normal text-stone-800 border-0 p-0 bg-transparent">
                    {activeModalDoc.fullTranscript}
                  </pre>

                  <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-500 gap-2">
                    <span>Official Email: {activeModalDoc.email}</span>
                    <span className="text-[#2c5282] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Executive Record
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer with locked metadata and dark Close View button */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-600">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#eaf1f8] text-[#2c5282] border border-[#3c6382]/25 text-[11px] font-bold">
                  <CheckCircle2 className="w-3 h-3 text-[#2c5282]" />
                  Verified Original Source
                </span>
                <span>Signatory Contact: <strong className="text-slate-900">{activeModalDoc.email}</strong></span>
              </div>
              <button
                onClick={() => setActiveModalDoc(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer shadow-xs self-end sm:self-auto"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embed New Recommendation Letter Modal */}
      {isEmbedModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
          onClick={() => setIsEmbedModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-stone-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2.5">
                <Upload className="w-5 h-5 text-[#D9532F]" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Embed Recommendation Letter / Endorsement
                  </h3>
                  <p className="text-xs font-mono text-stone-500">
                    Upload a scanned PDF / Image or transcribe an executive reference for Section 08
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsEmbedModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleEmbedSubmit} className="p-6 overflow-y-auto flex-1 space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono font-bold text-slate-700">Recommender / Signatory Name *</label>
                  <input
                    type="text"
                    required
                    value={newRecommender}
                    onChange={(e) => setNewRecommender(e.target.value)}
                    placeholder="e.g., Dr. Jane Doe, Ph.D."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono font-bold text-slate-700">Title / Role</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g., Senior Vice President / Professor"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono font-bold text-slate-700">Institution / Organization *</label>
                  <input
                    type="text"
                    required
                    value={newInstitution}
                    onChange={(e) => setNewInstitution(e.target.value)}
                    placeholder="e.g., Georgetown University / Healthcare Network"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono font-bold text-slate-700">Department / Division</label>
                  <input
                    type="text"
                    value={newDepartment}
                    onChange={(e) => setNewDepartment(e.target.value)}
                    placeholder="e.g., School of Continuing Studies"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="font-mono font-bold text-slate-700">Signatory Email</label>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="faculty@institution.edu"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono font-bold text-slate-700">Date</label>
                  <input
                    type="text"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    placeholder="e.g., March 2026"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono font-bold text-slate-700">Strategic Focus Badge</label>
                  <input
                    type="text"
                    value={newBadge}
                    onChange={(e) => setNewBadge(e.target.value)}
                    placeholder="e.g., Clinical Growth & Governance"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                  />
                </div>
              </div>

              {/* Upload File Section */}
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono font-bold text-slate-800 block text-xs">
                    Attach Official Document Scan / PDF (.pdf, .png, .jpg, .docx up to 25MB)
                  </label>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3" /> IndexedDB Vault
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf,.png,.jpg,.jpeg,.webp,.docx"
                    onChange={handleNewFileSelect}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-mono text-xs font-bold cursor-pointer transition-colors shadow-2xs"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#D9532F]" />
                    <span>Choose File</span>
                  </button>
                  <span className="text-xs font-mono text-stone-600 truncate">
                    {newFileName ? `${newFileName} (${newFileSize})` : 'No file chosen (optional)'}
                  </span>
                </div>
                <p className="text-[10px] text-stone-500">
                  🔒 Client-Side Encrypted Storage • Sandboxed Session (Files preserved locally)
                </p>
              </div>

              {/* Featured Quote */}
              <div className="space-y-1">
                <label className="font-mono font-bold text-slate-700">Key Endorsement Quote</label>
                <textarea
                  rows={2}
                  value={newQuote}
                  onChange={(e) => setNewQuote(e.target.value)}
                  placeholder="Paste the core quote or summary highlight from the letter..."
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-sans text-xs focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                />
              </div>

              {/* Full Letter Transcript */}
              <div className="space-y-1">
                <label className="font-mono font-bold text-slate-700">Full Transcribed Letter Text</label>
                <textarea
                  rows={4}
                  value={newFullTranscript}
                  onChange={(e) => setNewFullTranscript(e.target.value)}
                  placeholder="Paste the full verbatim text of the letter here for interactive transcript viewing..."
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white font-mono text-[11px] focus:ring-2 focus:ring-[#D9532F]/30 focus:border-[#D9532F] outline-hidden"
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-2">
                <div className="text-[11px] font-mono text-stone-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Persistent Local Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEmbedModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSecuringEmbed}
                    className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-[#D9532F] hover:bg-[#C2410C] text-white transition-colors cursor-pointer shadow-xs disabled:opacity-50 flex items-center gap-1.5"
                  >
                    {isSecuringEmbed && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                    <span>{isSecuringEmbed ? 'Securing in Vault...' : 'Embed Endorsement'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
