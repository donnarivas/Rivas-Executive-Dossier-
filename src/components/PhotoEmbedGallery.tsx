import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  File,
  Upload,
  Plus,
  Trash2,
  Maximize2,
  X,
  Link as LinkIcon,
  Check,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Filter,
  Eye,
  FileCheck,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Award,
  GraduationCap,
  Building,
  Copy,
  Search,
  BookOpen,
  CheckCircle2,
  FileCode,
  Image as ImageIcon,
  Printer,
  Database
} from 'lucide-react';
import {
  subscribeToCustomDocs,
  saveCustomDocToFirestore,
  deleteCustomDocFromFirestore
} from '../lib/firestoreService';
import { safeLocalStorageSet, safeLocalStorageGet, optimizeImageFile } from '../lib/storage';
import {
  GEORGETOWN_CERTIFICATE_DOCUMENT_SVG,
  YALE_ANATOMY_CERTIFICATE_SVG,
  YALE_PSYCHOLOGY_CERTIFICATE_SVG,
  COLUMBIA_FINANCIAL_ENGINEERING_CERTIFICATE_SVG,
  YALE_NEGOTIATION_CERTIFICATE_SVG,
  CAMBRIDGE_ACCOUNTING_CERTIFICATE_SVG,
  PRESIDENTIAL_AWARD_DOCUMENT_SVG,
  LEAF_WORKFLOW_CERTIFICATE_SVG,
  LEAF_NESTED_WORKFLOW_CERTIFICATE_SVG
} from '../data/officialDocumentSvgs';

export type DocumentCategory =
  | 'Certificates & Credentials'
  | 'Awards & Honors'
  | 'Strategic Blueprints'
  | 'Campus & Media'
  | 'Letters of Recommendation';

export type DocumentFileType = 'pdf' | 'image' | 'text_document' | 'web_link';

export interface EmbeddedDocument {
  id: string;
  title: string;
  category: DocumentCategory;
  fileType: DocumentFileType;
  documentUrl: string;
  fileName?: string;
  fileSize?: string;
  caption: string;
  institution?: string;
  issuer?: string;
  date?: string;
  isCustom?: boolean;
  isAttached?: boolean;
  attachedAt?: string;
  verifiedStatus?: string;
  fullDocumentText?: string;
  highlightQuotes?: string[];
  verificationCode?: string;
  verificationUrl?: string;
  certType?: 'coursera_yale' | 'coursera_columbia' | 'coursera_cambridge' | 'georgetown' | 'generic';
}

export const PRESIDENT_AWARD_DOCUMENT_SVG = PRESIDENTIAL_AWARD_DOCUMENT_SVG;

const DEFAULT_DOCUMENTS: EmbeddedDocument[] = [
  {
    id: 'doc-leaf-workflow',
    title: 'L-EAF: WorkFLOW I — Certificate of Achievement',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: LEAF_WORKFLOW_CERTIFICATE_SVG,
    fileName: 'LEAF_WorkFLOW_I_Certificate_Donna_Rivas.pdf',
    fileSize: '1.2 MB',
    caption: 'Official Certificate of Achievement in WorkFLOW I conferred by L-EAF (Learning - Educational Agile Framework), certifying mastery in agile workflow management, task decomposition, and lean educational cadence design.',
    institution: 'L-EAF (Learning - Educational Agile Framework)',
    issuer: 'L-EAF.org Certifying Board',
    date: 'August 3, 2026',
    verifiedStatus: 'Verified Practitioner',
    verificationCode: 'LEAF-WF1-20260803-DR',
    verificationUrl: 'https://l-eaf.org',
    certType: 'generic',
    highlightQuotes: [
      'This is to certify that Donna Rivas has successfully completed WorkFLOW I — L-EAF Practitioner.'
    ],
    fullDocumentText: `LEARNING - EDUCATIONAL AGILE FRAMEWORK (L-EAF)
CERTIFICATE OF ACHIEVEMENT
This is to certify that
DONNA RIVAS
has successfully completed
WorkFLOW I
Conferred: 08-03-2026
Authorized by: L-EAF.org
Credential: L-EAF Practitioner WorkFLOW I
Demonstrating foundational mastery in agile workflow management, task decomposition, and lean educational cadence design.`
  },
  {
    id: 'doc-leaf-nested-workflow',
    title: 'L-EAF: Nested WorkFLOW I — Certificate of Achievement',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: LEAF_NESTED_WORKFLOW_CERTIFICATE_SVG,
    fileName: 'LEAF_Nested_WorkFLOW_I_Certificate_Donna_Rivas.pdf',
    fileSize: '1.3 MB',
    caption: 'Official Certificate of Achievement in Nested WorkFLOW I conferred by L-EAF (Learning - Educational Agile Framework), certifying specialized competency in multi-tier agile architecture, hierarchical sprint structures, and cross-functional workflow synchronization.',
    institution: 'L-EAF (Learning - Educational Agile Framework)',
    issuer: 'L-EAF.org Certifying Board',
    date: 'August 3, 2026',
    verifiedStatus: 'Verified Specialist',
    verificationCode: 'LEAF-NWF1-20260803-DR',
    verificationUrl: 'https://l-eaf.org',
    certType: 'generic',
    highlightQuotes: [
      'This is to certify that Donna Rivas has successfully completed Nested WorkFLOW I — L-EAF.org.'
    ],
    fullDocumentText: `LEARNING - EDUCATIONAL AGILE FRAMEWORK (L-EAF)
CERTIFICATE OF ACHIEVEMENT
This is to certify that
DONNA RIVAS
has successfully completed
Nested WorkFLOW I
Conferred: 08-03-2026
Authorized by: L-EAF.org
Credential: Nested WorkFLOW I Specialist
Certifying specialized competency in multi-tier agile architecture, hierarchical sprint structures, and cross-functional workflow synchronization.`
  },
  {
    id: 'doc-georgetown-cert',
    title: 'Georgetown University SCS Certificate in Strategic Management',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: GEORGETOWN_CERTIFICATE_DOCUMENT_SVG,
    fileName: 'Georgetown_SCS_Strategic_Management_Certificate_Donna_Rivas.pdf',
    fileSize: '1.4 MB',
    caption: 'Official Georgetown University credential conferring mastery in strategic management, MECE issue tree decomposition, executive decision analysis, and governance under Dean Kelly J. Otter, Ph.D.',
    institution: 'Georgetown University, School of Continuing Studies',
    issuer: 'Kelly J. Otter, Ph.D., Dean',
    date: 'February 13, 2026',
    verifiedStatus: 'Verified Official',
    verificationCode: 'GU-SCS-SM-2026-DR',
    certType: 'georgetown',
    highlightQuotes: [
      'By virtue of authority granted by charter enacted by the Senate and House of Representatives of the United States of America in Congress assembled... confers the Certificate in Strategic Management.'
    ],
    fullDocumentText: `Georgetown University - School of Continuing Studies
In recognition of the successful completion of the requisite course of study and by virtue of authority granted by charter enacted by the Senate and House of Representatives of the United States of America in Congress assembled, Georgetown University hereby confers upon Donna Aseret Rivas the Certificate in Strategic Management. With all the Rights, Privileges, Honors, and Obligations thereto appertaining.

Conferred at Washington, D.C., February 13, 2026.
Dean Kelly J. Otter, Ph.D.`
  },
  {
    id: 'doc-coursera-yale-anatomy',
    title: 'Yale University: Anatomy of the Head and Spine',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: YALE_ANATOMY_CERTIFICATE_SVG,
    fileName: 'Yale_Anatomy_Head_and_Spine_Donna_Rivas.pdf',
    fileSize: '1.2 MB',
    caption: 'Official course certificate authorized by Yale University & Yale School of Medicine covering clinical neuroanatomy, cranial nerves, spinal biomechanics, and cerebrovascular supply.',
    institution: 'Yale University (Yale School of Medicine)',
    issuer: 'Charles C. Duncan, M.D. | William B. Stewart',
    date: 'Jan 4, 2026',
    verifiedStatus: 'Verified Official (Coursera)',
    verificationCode: '8WCF4UH99RFM',
    verificationUrl: 'https://coursera.org/verify/8WCF4UH99RFM',
    certType: 'coursera_yale',
    highlightQuotes: [
      'Course Certificate authorized by Yale University and offered through Coursera: Anatomy of the Head and Spine.',
      'Instructors: Charles C. Duncan, M.D. (Neurosurgery & Pediatrics) & William B. Stewart (Chief, Section of Anatomy).'
    ],
    fullDocumentText: `YALE UNIVERSITY — COURSE CERTIFICATE
Candidate: Donna Aseret Rivas
Course: Anatomy of the Head and Spine
Conferred: Jan 4, 2026
Authorized by: Yale University (offered through Coursera)

Signatories:
• Charles C. Duncan, M.D. | Professor of Neurosurgery, Pediatrics & Surgery (Anatomy), Yale School of Medicine
• William B. Stewart | Associate Professor of Surgery and Chief, Section of Anatomy | Lecturer in Surgery (Gross Anatomy), Yale School of Medicine

Verification URL: https://coursera.org/verify/8WCF4UH99RFM
Verification ID: 8WCF4UH99RFM
Coursera has confirmed the identity of this individual and their participation in the course.`
  },
  {
    id: 'doc-coursera-yale-psychology',
    title: 'Yale University: Introduction to Psychology',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: YALE_PSYCHOLOGY_CERTIFICATE_SVG,
    fileName: 'Yale_Introduction_to_Psychology_Donna_Rivas.pdf',
    fileSize: '1.1 MB',
    caption: 'Course certificate authorized by Yale University exploring developmental psychology, cognitive architecture, behavioral economics, memory systems, and clinical foundations under Professor Paul Bloom.',
    institution: 'Yale University',
    issuer: 'Paul Bloom (Brooks and Suzanne Ragen Professor of Psychology)',
    date: 'Dec 31, 2025',
    verifiedStatus: 'Verified Official (Coursera)',
    verificationCode: 'KIN15D88Z08X',
    verificationUrl: 'https://coursera.org/verify/KIN15D88Z08X',
    certType: 'coursera_yale',
    highlightQuotes: [
      'Course Certificate authorized by Yale University and offered through Coursera: Introduction to Psychology.',
      'Instructor: Paul Bloom, Brooks and Suzanne Ragen Professor of Psychology, Yale University.'
    ],
    fullDocumentText: `YALE UNIVERSITY — COURSE CERTIFICATE
Candidate: Donna Aseret Rivas
Course: Introduction to Psychology
Conferred: Dec 31, 2025
Authorized by: Yale University (offered through Coursera)

Signatory:
• Paul Bloom | Brooks and Suzanne Ragen Professor of Psychology, Yale University

Verification URL: https://coursera.org/verify/KIN15D88Z08X
Verification ID: KIN15D88Z08X
Coursera has confirmed the identity of this individual and their participation in the course.`
  },
  {
    id: 'doc-coursera-columbia-financial',
    title: 'Columbia University: Introduction to Financial Engineering and Risk Management',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: COLUMBIA_FINANCIAL_ENGINEERING_CERTIFICATE_SVG,
    fileName: 'Columbia_Financial_Engineering_Risk_Management_Donna_Rivas.pdf',
    fileSize: '1.3 MB',
    caption: 'Course certificate authorized by Columbia University Department of Industrial Engineering and Operations Research covering stochastic calculus, derivative valuation, hedging, and quantitative financial risk models.',
    institution: 'Columbia University in the City of New York',
    issuer: 'Garud Iyengar, Ali Hirsa, Martin Haugh (Dept of IEOR)',
    date: 'Dec 28, 2025',
    verifiedStatus: 'Verified Official (Coursera)',
    verificationCode: 'MFKCU8X6IA6J',
    verificationUrl: 'https://coursera.org/verify/MFKCU8X6IA6J',
    certType: 'coursera_columbia',
    highlightQuotes: [
      'An online non-credit course authorized by Columbia University in the City of New York and offered through Coursera.',
      'Department of Industrial Engineering and Operations Research: Garud Iyengar, Ali Hirsa, Martin Haugh.'
    ],
    fullDocumentText: `COLUMBIA UNIVERSITY IN THE CITY OF NEW YORK — COURSE CERTIFICATE
Candidate: Donna Aseret Rivas
Course: Introduction to Financial Engineering and Risk Management
Conferred: Dec 28, 2025
Authorized by: Columbia University in the City of New York (offered through Coursera)

Signatories:
• Garud Iyengar | Department of Industrial Engineering and Operations Research
• Ali Hirsa | Department of Industrial Engineering and Operations Research
• Martin Haugh | Department of Industrial Engineering and Operations Research

Verification URL: https://coursera.org/verify/MFKCU8X6IA6J
Verification ID: MFKCU8X6IA6J
Coursera has confirmed the identity of this individual and their participation in the course.`
  },
  {
    id: 'doc-coursera-yale-negotiation',
    title: 'Yale University: Introduction to Negotiation — A Strategic Playbook',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: YALE_NEGOTIATION_CERTIFICATE_SVG,
    fileName: 'Yale_Introduction_to_Negotiation_Donna_Rivas.pdf',
    fileSize: '1.2 MB',
    caption: 'Strategic negotiation certificate authorized by Yale School of Management covering game-theoretic bargaining, value creation pie framework, and principled dispute resolution under Professor Barry Nalebuff.',
    institution: 'Yale University (Yale School of Management)',
    issuer: 'Professor Barry Nalebuff, D.Phil. (Yale SOM)',
    date: 'Dec 26, 2025',
    verifiedStatus: 'Verified Official (Coursera)',
    verificationCode: 'BYGRJ10F0GNZ',
    verificationUrl: 'https://coursera.org/verify/BYGRJ10F0GNZ',
    certType: 'coursera_yale',
    highlightQuotes: [
      'Introduction to Negotiation: A Strategic Playbook for Becoming a Principled and Persuasive Negotiator.',
      'Instructor: Professor Barry Nalebuff, D.Phil. (Yale School of Management, Yale University).'
    ],
    fullDocumentText: `YALE UNIVERSITY — YALE SCHOOL OF MANAGEMENT
Course Certificate: Introduction to Negotiation: A Strategic Playbook for Becoming a Principled and Persuasive Negotiator
Candidate: Donna Aseret Rivas
Conferred: Dec 26, 2025
Authorized by: Yale University (offered through Coursera)

Signatory:
• Professor Barry Nalebuff, D.Phil. | Yale School of Management, Yale University

Verification URL: https://coursera.org/verify/BYGRJ10F0GNZ
Verification ID: BYGRJ10F0GNZ
Coursera has confirmed the identity of this individual and their participation in the course.`
  },
  {
    id: 'doc-coursera-cambridge-accounting',
    title: 'University of Cambridge: Financial Accounting and Capital Markets',
    category: 'Certificates & Credentials',
    fileType: 'image',
    documentUrl: CAMBRIDGE_ACCOUNTING_CERTIFICATE_SVG,
    fileName: 'Cambridge_Financial_Accounting_Capital_Markets_Donna_Rivas.pdf',
    fileSize: '1.4 MB',
    caption: 'Course certificate authorized by University of Cambridge Professional and Continuing Education conferring capital market mechanisms, corporate balance sheet analysis, cash flow dynamics, and financial statement integrity.',
    institution: 'University of Cambridge (Continuing Education)',
    issuer: 'Dr Kirsty Allen (Interim Director of Continuing Studies)',
    date: 'Dec 25, 2025',
    verifiedStatus: 'Verified Official (Coursera)',
    verificationCode: 'M1P2S10DZ38W',
    verificationUrl: 'https://coursera.org/verify/M1P2S10DZ38W',
    certType: 'coursera_cambridge',
    highlightQuotes: [
      'Authorized by University of Cambridge Professional and Continuing Education: Financial Accounting and Capital Markets.',
      'Signatory: Dr Kirsty Allen, Interim Director of Continuing Studies, University of Cambridge.'
    ],
    fullDocumentText: `UNIVERSITY OF CAMBRIDGE — PROFESSIONAL AND CONTINUING EDUCATION
Course Certificate: Financial Accounting and Capital Markets
Candidate: Donna Aseret Rivas
Conferred: Dec 25, 2025
Authorized by: University of Cambridge (offered through Coursera)

Signatory:
• Dr Kirsty Allen | Interim Director of Continuing Studies, Professional and Continuing Education, University of Cambridge

Verification URL: https://coursera.org/verify/M1P2S10DZ38W
Verification ID: M1P2S10DZ38W
Coursera has confirmed the identity of this individual and their participation in the course.`
  },
  {
    id: 'doc-presidential-award',
    title: 'President’s Education Award for Outstanding Academic Excellence',
    category: 'Awards & Honors',
    fileType: 'image',
    documentUrl: PRESIDENTIAL_AWARD_DOCUMENT_SVG,
    fileName: 'Presidents_Education_Award_Academic_Excellence.pdf',
    fileSize: '1.8 MB',
    caption: 'National academic honor signed by the President of the United States and the U.S. Secretary of Education recognizing sustained academic excellence.',
    institution: 'Executive Office of the President & U.S. Dept of Education',
    issuer: 'President of the United States & Secretary of Education',
    date: 'National Scholastic Honor',
    verifiedStatus: 'National Academic Honor',
    verificationCode: 'US-PEA-NATL-HONOR',
    highlightQuotes: [
      'Conferred in recognition of outstanding academic excellence and commitment to the highest standards of intellectual achievement.'
    ],
    fullDocumentText: `THE PRESIDENT'S EDUCATION AWARDS PROGRAM
Executive Office of the President of the United States & United States Department of Education
Washington, D.C.

PRESIDENT'S AWARD FOR EDUCATIONAL EXCELLENCE
Conferred upon: DONNA ASERET RIVAS

In recognition of outstanding academic excellence, exemplary intellectual achievement, and commitment to the highest standards of scholastic leadership and personal integrity.

Founded in 1983, the President's Education Awards Program honors graduating students who have met rigorous criteria and sustained academic excellence.

Signatures on Official Certificate:
• Arne Duncan, United States Secretary of Education
• Barack Obama, President of the United States

National Academic Distinction • Verification Code: US-PEA-NATL-HONOR`
  }
];

// List of deprecated or removed document IDs to permanently exclude
const DELETED_DOC_IDS = new Set(['doc-careydanis-letter', 'doc-pepperdine-law']);

// Helper to compute numerical timestamp for anti-chronological sorting (most recently attained first)
export function parseDocumentDateScore(doc: EmbeddedDocument): number {
  // 1. Explicit verified attainment dates for primary catalog
  if (doc.id === 'doc-leaf-workflow') return new Date('2026-08-03T12:00:00Z').getTime();
  if (doc.id === 'doc-leaf-nested-workflow') return new Date('2026-08-03T12:00:00Z').getTime();
  if (doc.id === 'doc-georgetown-cert') return new Date('2026-02-13T12:00:00Z').getTime();
  if (doc.id === 'doc-coursera-yale-anatomy') return new Date('2026-01-04T12:00:00Z').getTime();
  if (doc.id === 'doc-coursera-yale-psychology') return new Date('2025-12-31T12:00:00Z').getTime();
  if (doc.id === 'doc-coursera-columbia-financial') return new Date('2025-12-28T12:00:00Z').getTime();
  if (doc.id === 'doc-coursera-yale-negotiation') return new Date('2025-12-26T12:00:00Z').getTime();
  if (doc.id === 'doc-coursera-cambridge-accounting') return new Date('2025-12-25T12:00:00Z').getTime();
  if (doc.id === 'doc-presidential-award') return new Date('2023-01-01T12:00:00Z').getTime();

  // 2. Parse explicit document date string if provided
  if (doc.date) {
    const directParsed = Date.parse(doc.date);
    if (!isNaN(directParsed)) return directParsed;

    const matchYear = doc.date.match(/\b(19\d\d|20\d\d)\b/);
    if (matchYear) {
      const year = parseInt(matchYear[1], 10);
      const matchMonth = doc.date.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*/i);
      const matchDay = doc.date.match(/\b([1-9]|[12]\d|3[01])\b/);
      
      const monthMap: Record<string, number> = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
      };
      
      const month = matchMonth ? (monthMap[matchMonth[1].toLowerCase().slice(0, 3)] ?? 0) : 0;
      const day = matchDay ? parseInt(matchDay[1], 10) : 1;
      
      return new Date(Date.UTC(year, month, day, 12, 0, 0)).getTime();
    }
  }

  // 3. Fallback to attachment timestamp if no attainment date is found
  if (doc.attachedAt) {
    const t = Date.parse(doc.attachedAt);
    if (!isNaN(t)) return t;
  }

  return 0;
}

export function sortDocumentsAntiChronological(docs: EmbeddedDocument[]): EmbeddedDocument[] {
  return [...docs]
    .filter(d => !DELETED_DOC_IDS.has(d.id))
    .sort((a, b) => parseDocumentDateScore(b) - parseDocumentDateScore(a));
}

const STORAGE_KEY = 'donna_embedded_documents_v4';

interface PhotoEmbedGalleryProps {
  onNotify: (message: string) => void;
}

export const PhotoEmbedGallery: React.FC<PhotoEmbedGalleryProps> = ({ onNotify }) => {
  const [documents, setDocuments] = useState<EmbeddedDocument[]>(() => sortDocumentsAntiChronological(DEFAULT_DOCUMENTS));
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDoc, setSelectedDoc] = useState<EmbeddedDocument | null>(null);
  const [viewerTab, setViewerTab] = useState<'preview' | 'text' | 'details'>('preview');
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form State for embedding new document
  const [embedMethod, setEmbedMethod] = useState<'upload' | 'url' | 'text_statement'>('upload');
  const [docTitle, setDocTitle] = useState<string>('');
  const [docCategory, setDocCategory] = useState<DocumentCategory>('Certificates & Credentials');
  const [docFileType, setDocFileType] = useState<DocumentFileType>('pdf');
  const [docInstitution, setDocInstitution] = useState<string>('');
  const [docIssuer, setDocIssuer] = useState<string>('');
  const [docCaption, setDocCaption] = useState<string>('');
  const [docUrlInput, setDocUrlInput] = useState<string>('');
  const [docFullText, setDocFullText] = useState<string>('');
  const [docVerificationCode, setDocVerificationCode] = useState<string>('');
  const [uploadedDocData, setUploadedDocData] = useState<string | null>(null);
  const [uploadFileName, setUploadFileName] = useState<string>('');
  const [uploadFileSize, setUploadFileSize] = useState<string>('');
  const [isFirestoreConnected, setIsFirestoreConnected] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cardFileInputRef = useRef<HTMLInputElement>(null);
  const [cardToUploadId, setCardToUploadId] = useState<string | null>(null);

  // Helper to ensure official documents use default SVGs unless a custom document or file has been uploaded
  const normalizeDocUrl = (doc: EmbeddedDocument): EmbeddedDocument => {
    const defaultMatch = DEFAULT_DOCUMENTS.find(d => d.id === doc.id);
    if (defaultMatch) {
      const hasCustomUpload = Boolean(
        doc.documentUrl && (
          doc.documentUrl.startsWith('data:') ||
          doc.documentUrl.startsWith('blob:') ||
          doc.isAttached ||
          (doc.fileName && doc.fileName !== defaultMatch.fileName)
        )
      );

      return {
        ...defaultMatch,
        ...doc,
        date: defaultMatch.date || doc.date,
        verificationCode: defaultMatch.verificationCode || doc.verificationCode,
        fullDocumentText: defaultMatch.fullDocumentText || doc.fullDocumentText,
        documentUrl: hasCustomUpload ? doc.documentUrl : defaultMatch.documentUrl,
        fileName: hasCustomUpload ? doc.fileName : (defaultMatch.fileName || doc.fileName),
        fileType: doc.fileType || defaultMatch.fileType
      };
    }
    return doc;
  };

  // Load custom documents from localStorage on mount & subscribe to Firestore
  useEffect(() => {
    // 1. Initial LocalStorage load
    try {
      const saved = safeLocalStorageGet(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const normalizedCustom = parsed.map(normalizeDocUrl);
          const combined = sortDocumentsAntiChronological([
            ...normalizedCustom,
            ...DEFAULT_DOCUMENTS.filter(dp => !normalizedCustom.some((p: EmbeddedDocument) => p.id === dp.id))
          ]);
          setDocuments(combined);
        }
      }
    } catch (e) {
      console.warn('Notice loading cached custom documents:', e);
    }

    // 2. Subscribe to Firestore custom documents collection
    const unsubscribe = subscribeToCustomDocs(
      (firestoreDocs) => {
        setIsFirestoreConnected(true);
        if (firestoreDocs && firestoreDocs.length > 0) {
          const normalizedFirestoreDocs = firestoreDocs.map(normalizeDocUrl);
          const combined = sortDocumentsAntiChronological([
            ...normalizedFirestoreDocs,
            ...DEFAULT_DOCUMENTS.filter(dp => !normalizedFirestoreDocs.some((p: EmbeddedDocument) => p.id === dp.id))
          ]);
          setDocuments(combined);
          safeLocalStorageSet(STORAGE_KEY, JSON.stringify(normalizedFirestoreDocs));
        }
      },
      () => {
        setIsFirestoreConnected(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const saveCustomDocs = (updatedList: EmbeddedDocument[], itemToSync?: EmbeddedDocument) => {
    safeLocalStorageSet(STORAGE_KEY, JSON.stringify(updatedList));

    if (itemToSync) {
      saveCustomDocToFirestore(itemToSync).catch(err => console.warn('Firestore doc save error:', err));
    } else {
      updatedList.forEach(d => {
        if (d.isCustom || d.isAttached) {
          saveCustomDocToFirestore(d).catch(err => console.warn('Firestore sync error:', err));
        }
      });
    }
  };

  const handleFileUpload = (file: File) => {
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    const isImg = file.type.startsWith('image/');
    const isText = file.type.startsWith('text/') || file.name.endsWith('.txt') || file.name.endsWith('.doc') || file.name.endsWith('.docx');

    if (!isPdf && !isImg && !isText) {
      onNotify('Please upload a valid document (PDF, PNG, JPG, WebP, SVG, or TXT).');
      return;
    }

    if (file.size > 12 * 1024 * 1024) {
      onNotify('File size exceeds 12MB. Please compress or link directly via URL.');
      return;
    }

    const sizeFormatted = file.size > 1024 * 1024
      ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(file.size / 1024)} KB`;

    setUploadFileName(file.name);
    setUploadFileSize(sizeFormatted);

    if (isPdf) {
      setDocFileType('pdf');
    } else if (isImg) {
      setDocFileType('image');
    } else {
      setDocFileType('text_document');
    }

    if (!docTitle) {
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setDocTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedDocData(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerCardUpload = (cardId: string) => {
    setCardToUploadId(cardId);
    cardFileInputRef.current?.click();
  };

  const handleCardFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !cardToUploadId) return;

    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    const isImg = file.type.startsWith('image/') || /\.(png|jpg|jpeg|webp)$/i.test(file.name);
    const fileType: DocumentFileType = isPdf ? 'pdf' : isImg ? 'image' : 'text_document';
    const sizeFormatted = file.size > 1024 * 1024
      ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(file.size / 1024)} KB`;

    let fileDataUrl: string;
    if (isImg) {
      fileDataUrl = await optimizeImageFile(file, 1600, 0.85);
    } else {
      fileDataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (ev) => resolve((ev.target?.result as string) || '');
        reader.readAsDataURL(file);
      });
    }

    let targetDoc: EmbeddedDocument | null = null;
    const updated = documents.map(item => {
      if (item.id === cardToUploadId) {
        targetDoc = {
          ...item,
          documentUrl: fileDataUrl,
          fileName: file.name,
          fileSize: sizeFormatted,
          fileType: fileType,
          isAttached: true,
          attachedAt: new Date().toISOString()
        };
        return targetDoc;
      }
      return item;
    });

    setDocuments(updated);
    saveCustomDocs(updated, targetDoc || undefined);
    if (selectedDoc?.id === cardToUploadId && targetDoc) {
      setSelectedDoc(targetDoc);
    }
    const docTitle = targetDoc ? (targetDoc as EmbeddedDocument).title : 'credential';
    onNotify(`Successfully uploaded & attached "${file.name}" (${sizeFormatted}) to ${docTitle}!`);
    e.target.value = '';
    setCardToUploadId(null);
  };

  const handleCreateDocument = (e: React.FormEvent) => {
    e.preventDefault();

    let finalUrl = '';
    let determinedFileType: DocumentFileType = docFileType;

    if (embedMethod === 'upload') {
      if (!uploadedDocData) {
        onNotify('Please select a document or image file to upload.');
        return;
      }
      finalUrl = uploadedDocData;
    } else if (embedMethod === 'url') {
      if (!docUrlInput.trim()) {
        onNotify('Please enter a valid document or image URL.');
        return;
      }
      finalUrl = docUrlInput.trim();
      if (finalUrl.toLowerCase().endsWith('.pdf')) {
        determinedFileType = 'pdf';
      } else if (finalUrl.match(/\.(jpg|jpeg|png|webp|svg)$/i)) {
        determinedFileType = 'image';
      } else {
        determinedFileType = 'web_link';
      }
    } else if (embedMethod === 'text_statement') {
      if (!docFullText.trim()) {
        onNotify('Please enter the document text, transcript notes, or letter transcription.');
        return;
      }
      // Generate a styled document canvas fallback
      finalUrl = 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80';
      determinedFileType = 'text_document';
    }

    if (!docTitle.trim()) {
      onNotify('Please enter a title for the document.');
      return;
    }

    const newDoc: EmbeddedDocument = {
      id: `doc-custom-${Date.now()}`,
      title: docTitle.trim(),
      category: docCategory,
      fileType: determinedFileType,
      documentUrl: finalUrl,
      fileName: uploadFileName || (embedMethod === 'text_statement' ? `${docTitle.trim().replace(/\s+/g, '_')}.txt` : 'embedded_document.pdf'),
      fileSize: uploadFileSize || (embedMethod === 'text_statement' ? 'Text Transcript' : 'Cloud File'),
      caption: docCaption.trim() || 'Verified portfolio credential and document asset.',
      institution: docInstitution.trim() || undefined,
      issuer: docIssuer.trim() || undefined,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      isCustom: true,
      verifiedStatus: 'User Embedded Credential',
      fullDocumentText: docFullText.trim() || undefined,
      verificationCode: docVerificationCode.trim() || `VERIFIED-DOC-${Math.floor(100000 + Math.random() * 900000)}`
    };

    const updated = sortDocumentsAntiChronological([newDoc, ...documents]);
    setDocuments(updated);

    const customOnly = updated.filter(p => p.isCustom);
    saveCustomDocs(customOnly, newDoc);

    // Reset Form
    setDocTitle('');
    setDocCategory('Certificates & Credentials');
    setDocFileType('pdf');
    setDocInstitution('');
    setDocIssuer('');
    setDocCaption('');
    setDocUrlInput('');
    setDocFullText('');
    setDocVerificationCode('');
    setUploadedDocData(null);
    setUploadFileName('');
    setUploadFileSize('');
    setIsEmbedModalOpen(false);
    onNotify(`Embedded document "${newDoc.title}" successfully into Registry!`);
  };

  const handleDeleteDocument = (docId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = documents.filter(p => p.id !== docId);
    setDocuments(updated);
    const customOnly = updated.filter(p => p.isCustom);
    saveCustomDocs(customOnly);
    deleteCustomDocFromFirestore(docId).catch(err => console.warn('Firestore delete error:', err));
    if (selectedDoc?.id === docId) {
      setSelectedDoc(null);
    }
    onNotify('Document removed from registry & Firestore.');
  };

  const handleCopyCitation = (doc: EmbeddedDocument) => {
    const citation = `"${doc.title}" — ${doc.institution || 'Verified Credential'}, ${doc.date || 'Record'}. ${doc.verificationCode ? `[Verification ID: ${doc.verificationCode}]` : ''}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(doc.id);
    onNotify('Document citation & verification details copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories: string[] = [
    'All',
    'Certificates & Credentials',
    'Awards & Honors',
    'Strategic Blueprints'
  ];

  const filteredDocs = sortDocumentsAntiChronological(
    documents.filter(doc => {
      const matchesCategory =
        activeCategory === 'All' ? true :
        doc.category === activeCategory;

      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.institution && doc.institution.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (doc.issuer && doc.issuer.toLowerCase().includes(searchQuery.toLowerCase())) ||
        doc.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.fullDocumentText && doc.fullDocumentText.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    })
  );

  const getDocTypeIcon = (type: DocumentFileType) => {
    switch (type) {
      case 'pdf':
        return <File className="w-3.5 h-3.5 text-rose-600" />;
      case 'text_document':
        return <FileText className="w-3.5 h-3.5 text-blue-600" />;
      case 'web_link':
        return <LinkIcon className="w-3.5 h-3.5 text-[#2c5282]" />;
      default:
        return <ImageIcon className="w-3.5 h-3.5 text-amber-600" />;
    }
  };

  return (
    <div id="media-gallery" className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-stone-200/70 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-mono">
            Credentials
          </h2>
          <p className="text-xs text-slate-600 font-sans mt-0.5">
            Verified academic credentials, professional accreditations, and advanced certifications spanning strategic management, agile architecture, and quantitative analysis.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {categories.map(cat => (
            <button
              key={cat}
              id={`filter-tab-${cat.toLowerCase().replace(/[\s&]+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-full whitespace-nowrap transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white font-bold border-slate-900 shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs hover:-translate-y-0.5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-full pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] shadow-2xs font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs shrink-0 whitespace-nowrap">
            {filteredDocs.length} {filteredDocs.length === 1 ? 'RECORD' : 'RECORDS'}
          </span>
        </div>
      </div>

      {/* Documents Grid */}
      <div
        className="grid gap-6 w-full max-w-full"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}
      >
        {filteredDocs.map(doc => (
          <div
            key={doc.id}
            id={`card-${doc.id}`}
            onClick={() => {
              setSelectedDoc(doc);
              setViewerTab(doc.fileType === 'text_document' && !doc.isAttached ? 'text' : 'preview');
              setZoomLevel(1);
            }}
            className="group glass-panel rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer relative hover:-translate-y-1 hover:shadow-md transition-all duration-200 border-[1.5px] border-[#f1ded7] bg-white/95"
          >
            {/* Document Header / Preview Stage */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900/5 flex items-center justify-center border-b border-[#f1ded7]">
              {doc.fileType === 'text_document' && !doc.isAttached ? (
                <div className="w-full h-full p-4 bg-gradient-to-br from-amber-50/70 to-orange-50/40 flex flex-col justify-between text-slate-800 font-serif relative">
                  <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-[#D9532F]" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
                        Official Transcription
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{doc.date}</span>
                  </div>
                  <p className="text-xs italic text-slate-700 leading-relaxed line-clamp-3 my-1">
                    "{doc.highlightQuotes?.[0] || doc.caption}"
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-amber-200/60">
                    <span className="truncate max-w-[170px] font-semibold">{doc.issuer || doc.institution}</span>
                    <span className="text-[#D9532F] font-bold">Read Transcript →</span>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={doc.documentUrl}
                    alt={doc.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </>
              )}

              {/* Custom Embed Badge if applicable */}
              {doc.isCustom && (
                <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-[#D9532F] text-white text-[10px] font-mono font-bold shadow-xs">
                    Custom Embed
                  </span>
                </div>
              )}

              {/* Date stamp at top right */}
              {doc.date && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white/95 text-[9px] font-mono border border-white/10 shadow-xs">
                    {doc.date}
                  </span>
                </div>
              )}

              {/* Hover Prompt */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-slate-900 text-[11px] font-mono font-bold shadow-md border border-[#f1ded7]">
                  <Maximize2 className="w-3 h-3 text-[#D9532F]" />
                  Open Document
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-3.5 bg-white">
              <div className="space-y-2">
                <h3 className="text-sm font-black text-slate-900 group-hover:text-[#D9532F] transition-colors leading-snug line-clamp-2">
                  {doc.title}
                </h3>
                {doc.institution && (
                  <p className="text-[11px] font-mono text-[#6B5E55] font-semibold line-clamp-1 flex items-center gap-1">
                    <Building className="w-3 h-3 shrink-0 text-stone-400" />
                    <span>{doc.institution}</span>
                  </p>
                )}

                {/* Highlight Quote if Letter or Credential */}
                {doc.highlightQuotes && doc.highlightQuotes.length > 0 && (
                  <div
                    className="h-auto min-h-0 overflow-visible whitespace-normal break-words rounded-r-xl rounded-l-xs bg-amber-50/70 border-l-[3px] border-[#D9532F] text-[11px] sm:text-xs font-serif italic text-stone-800 leading-relaxed mb-2.5 shadow-2xs"
                    style={{ padding: '10px 14px', wordBreak: 'break-word', overflow: 'visible', whiteSpace: 'normal', height: 'auto' }}
                  >
                    "{doc.highlightQuotes[0]}"
                  </div>
                )}

                <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-2 pt-0.5">
                  {doc.caption}
                </p>
              </div>

              {/* Card Bottom Controls: View Action on Left, Badges on Right */}
              <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-1.5 w-full max-w-full box-border font-mono text-xs">
                {/* View Action Buttons on Left */}
                <div className="flex flex-wrap items-center gap-1.5 shrink-0 max-w-full">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDoc(doc);
                      setViewerTab(doc.fileType === 'text_document' && !doc.isAttached ? 'text' : 'preview');
                      setZoomLevel(1);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#1E140F] hover:bg-[#2D231E] text-white transition-colors cursor-pointer shadow-2xs shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5 text-orange-300" />
                    <span>View Document</span>
                  </button>

                  {doc.isCustom && (
                    <button
                      type="button"
                      onClick={(e) => handleDeleteDocument(doc.id, e)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors cursor-pointer shrink-0"
                      title="Remove this credential"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                {/* Verified Official & Official Certificate Tags: Fluid wrapping, no truncation slicing */}
                <div className="flex flex-wrap items-center sm:items-end justify-start sm:justify-end gap-1.5 max-w-full">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#eaf1f8] text-[#2c5282] text-[10px] font-mono font-bold border border-[#3c6382]/25 shadow-2xs w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                    <ShieldCheck className="w-3 h-3 text-[#2c5282] shrink-0" />
                    <span>{doc.verifiedStatus || 'Verified Official'}</span>
                  </span>
                  {doc.certType && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[10px] font-mono font-bold border border-blue-200 shadow-2xs w-fit max-w-full whitespace-normal leading-[1.4] break-words">
                      <Award className="w-3 h-3 text-blue-600 shrink-0" />
                      <span>Official Certificate</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDocs.length === 0 && (
        <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl space-y-3">
          <FileText className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No documents found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto font-sans">
            No embedded documents match your search or filter. You can embed a new PDF, transcript, certificate, or recommendation letter right now.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
              setIsEmbedModalOpen(true);
            }}
            className="px-4 py-2 bg-[#D9532F] text-white text-xs font-mono font-bold rounded-xl cursor-pointer hover:bg-[#C2410C] transition-colors"
          >
            + Embed Document Now
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/* EMBED NEW DOCUMENT / CREDENTIAL MODAL                        */}
      {/* ============================================================ */}
      {isEmbedModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 max-w-xl w-full rounded-3xl shadow-2xl p-6 sm:p-7 space-y-5 relative my-8">
            <button
              onClick={() => setIsEmbedModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9532F]/10 text-[#C2410C] text-[11px] font-mono font-bold uppercase border border-[#D9532F]/25">
                <FileCheck className="w-3 h-3 text-[#D9532F]" />
                <span>Document & Credential Registry</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight font-mono">
                Embed Document or Credential
              </h2>
              <p className="text-xs text-slate-600 font-sans">
                Add official PDF transcripts, academic certificates, signed faculty letters of recommendation, or strategic frameworks directly into this section.
              </p>
            </div>

            <form onSubmit={handleCreateDocument} className="space-y-4 font-mono text-xs">
              {/* Method Switcher */}
              <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setEmbedMethod('upload')}
                  className={`py-2 text-[11px] font-mono font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    embedMethod === 'upload'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5 text-[#D9532F]" />
                  <span>Upload File</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEmbedMethod('url')}
                  className={`py-2 text-[11px] font-mono font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    embedMethod === 'url'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5 text-[#D9532F]" />
                  <span>Document Link</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEmbedMethod('text_statement')}
                  className={`py-2 text-[11px] font-mono font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    embedMethod === 'text_statement'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-[#D9532F]" />
                  <span>Paste Text / Letter</span>
                </button>
              </div>

              {/* Upload Dropzone */}
              {embedMethod === 'upload' && (
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0]);
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-[#D9532F] bg-[#D9532F]/5'
                      : 'border-slate-300/80 hover:border-[#D9532F]/70 bg-white/70 backdrop-blur-sm'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,image/*,.txt,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
                    }}
                  />
                  {uploadedDocData ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold shadow-xs">
                        {docFileType === 'pdf' ? 'PDF' : docFileType === 'image' ? 'IMG' : 'DOC'}
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-slate-900 truncate max-w-[220px]">{uploadFileName}</p>
                        <span className="text-[10px] text-[#D9532F] font-bold block">
                          ✓ File ready ({uploadFileSize}) • Click to change
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-6 h-6 text-[#D9532F] mx-auto" />
                      <p className="text-xs font-bold text-slate-800">
                        Drag & drop document here, or <span className="text-[#D9532F] underline">browse files</span>
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Supports PDF documents, Certificate scans (PNG, JPG), and Transcripts up to 12MB
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* URL Input */}
              {embedMethod === 'url' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                    Document or Certificate URL *
                  </label>
                  <input
                    type="url"
                    value={docUrlInput}
                    onChange={(e) => setDocUrlInput(e.target.value)}
                    placeholder="https://example.com/documents/georgetown-certificate.pdf"
                    className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] font-mono shadow-xs"
                    required={embedMethod === 'url'}
                  />
                  <p className="text-[10px] text-slate-500">
                    Supports direct PDF links, Google Drive public preview links, Credly credentials, or image scans.
                  </p>
                </div>
              )}

              {/* Text / Recommendation Letter Paste */}
              {embedMethod === 'text_statement' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                    Official Document / Letter Transcription *
                  </label>
                  <textarea
                    value={docFullText}
                    onChange={(e) => setDocFullText(e.target.value)}
                    rows={4}
                    placeholder="Paste the full text of the letter of recommendation, certificate charter, or transcript summary here..."
                    className="w-full bg-white/80 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] shadow-xs font-mono"
                    required={embedMethod === 'text_statement'}
                  />
                </div>
              )}

              {/* Title Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                  Document / Credential Title *
                </label>
                <input
                  type="text"
                  value={docTitle}
                  onChange={(e) => setDocTitle(e.target.value)}
                  placeholder="e.g., Georgetown University SCS Certificate in Strategic Management"
                  className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] shadow-xs"
                  required
                />
              </div>

              {/* Category & Institution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                    Document Category
                  </label>
                  <select
                    value={docCategory}
                    onChange={(e) => setDocCategory(e.target.value as DocumentCategory)}
                    className="w-full bg-white/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:border-[#D9532F] font-mono shadow-xs"
                  >
                    <option value="Certificates & Credentials">Certificates & Credentials</option>
                    <option value="Awards & Honors">Awards & Honors</option>
                    <option value="Strategic Blueprints">Strategic Blueprints</option>
                    <option value="Campus & Media">Campus & Media</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                    Issuing Institution
                  </label>
                  <input
                    type="text"
                    value={docInstitution}
                    onChange={(e) => setDocInstitution(e.target.value)}
                    placeholder="e.g., Georgetown University SCS"
                    className="w-full bg-white/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] shadow-xs"
                  />
                </div>
              </div>

              {/* Signatory & Verification ID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                    Signatory / Faculty Member
                  </label>
                  <input
                    type="text"
                    value={docIssuer}
                    onChange={(e) => setDocIssuer(e.target.value)}
                    placeholder="e.g., Prof. Gary Steinberg"
                    className="w-full bg-white/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                    Verification Code / Record ID
                  </label>
                  <input
                    type="text"
                    value={docVerificationCode}
                    onChange={(e) => setDocVerificationCode(e.target.value)}
                    placeholder="e.g., GU-SCS-2026-DR"
                    className="w-full bg-white/80 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] shadow-xs"
                  />
                </div>
              </div>

              {/* Description / Caption */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-slate-700 block font-bold">
                  Document Overview & Relevance
                </label>
                <textarea
                  value={docCaption}
                  onChange={(e) => setDocCaption(e.target.value)}
                  rows={2}
                  placeholder="Key competencies proven, strategic relevance to Oaklin Lane Consulting & Strategy role..."
                  className="w-full bg-white/80 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D9532F] shadow-xs"
                />
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setIsEmbedModalOpen(false)}
                  className="px-4 py-2.5 text-xs font-mono text-slate-600 hover:text-slate-900 rounded-xl transition-colors cursor-pointer font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1E140F] hover:bg-[#2D231E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-orange-300" />
                  <span>Embed into Registry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* FULLSCREEN DOCUMENT VIEWER & SPEC MODAL                      */}
      {/* ============================================================ */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="max-w-5xl w-full h-full max-h-[92vh] flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            {/* Viewer Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-white">
              <div className="space-y-0.5 truncate">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="glass-badge text-[10px] flex items-center gap-1">
                    {getDocTypeIcon(selectedDoc.fileType)}
                    <span>{selectedDoc.category}</span>
                  </span>
                  {selectedDoc.institution && (
                    <span className="text-xs font-mono text-slate-500 truncate">
                      • {selectedDoc.institution}
                    </span>
                  )}
                  {selectedDoc.verifiedStatus && (
                    <span className="px-2 py-0.5 rounded-full bg-[#eaf1f8] text-[#2c5282] text-[10px] font-mono font-bold border border-[#3c6382]/25 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#2c5282]" />
                      {selectedDoc.verifiedStatus}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-black text-slate-900 truncate">
                  {selectedDoc.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Tab Switcher in Viewer */}
                <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-mono">
                  <button
                    onClick={() => setViewerTab('preview')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                      viewerTab === 'preview' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Visual Preview
                  </button>
                  <button
                    onClick={() => setViewerTab('text')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                      viewerTab === 'text' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Official Text
                  </button>
                </div>

                {/* Zoom Controls (for image preview) */}
                {viewerTab === 'preview' && selectedDoc.fileType !== 'text_document' && (
                  <>
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                      title="Zoom In"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                      title="Zoom Out"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setZoomLevel(1)}
                      title="Reset Zoom"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Action Buttons */}
                {selectedDoc.isCustom && (
                  <button
                    onClick={(e) => handleDeleteDocument(selectedDoc.id, e)}
                    title="Remove from Section 7"
                    className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={() => triggerCardUpload(selectedDoc.id)}
                  title={`Upload or Replace Document for ${selectedDoc.title} (.pdf, .png, .jpg)`}
                  className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#C2410C] border border-orange-200 transition-colors cursor-pointer flex items-center gap-1.5 font-mono text-xs font-bold"
                >
                  <Upload className="w-4 h-4" />
                  <span className="hidden sm:inline">Upload Document</span>
                </button>

                <button
                  onClick={() => handleCopyCitation(selectedDoc)}
                  title="Copy Document Citation"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  {copiedId === selectedDoc.id ? <Check className="w-4 h-4 text-[#2c5282]" /> : <Copy className="w-4 h-4" />}
                </button>

                <a
                  href={selectedDoc.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  download={selectedDoc.fileName || 'document'}
                  title="Open Original / Download"
                  className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#C2410C] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedDoc(null)}
                  title="Close"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewer Stage */}
            <div className="flex-1 bg-slate-900/5 overflow-auto flex items-center justify-center p-4 sm:p-6 select-none relative">
              {viewerTab === 'text' || (!selectedDoc.documentUrl && selectedDoc.fullDocumentText) ? (
                <div className="max-w-3xl w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg space-y-5 text-slate-900 font-serif">
                  <div className="border-b border-slate-200 pb-3 flex items-center justify-between font-mono text-xs text-slate-500">
                    <span className="font-bold text-slate-900 uppercase">{selectedDoc.institution || 'Verified Document'}</span>
                    <span>{selectedDoc.date}</span>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed whitespace-pre-line text-slate-800">
                    {selectedDoc.fullDocumentText || selectedDoc.caption}
                  </div>

                  {selectedDoc.highlightQuotes && selectedDoc.highlightQuotes.length > 0 && (
                    <div
                      className="p-4 bg-orange-50/80 border-l-4 border-[#D9532F] rounded-r-xl space-y-2 font-sans h-auto overflow-visible whitespace-normal break-words"
                      style={{ padding: '12px 16px', wordBreak: 'break-word', overflow: 'visible', whiteSpace: 'normal', height: 'auto' }}
                    >
                      <span className="text-[10px] font-mono font-bold uppercase text-[#C2410C] block">
                        Key Strategic Highlight:
                      </span>
                      {selectedDoc.highlightQuotes.map((q, idx) => (
                        <p key={idx} className="text-xs sm:text-sm text-slate-800 italic font-serif leading-relaxed whitespace-normal break-words" style={{ wordBreak: 'break-word' }}>
                          "{q}"
                        </p>
                      ))}
                    </div>
                  )}

                  {selectedDoc.issuer && (
                    <div className="pt-3 border-t border-slate-200 font-mono text-xs text-slate-600 flex items-center justify-between">
                      <div>
                        <strong>Signatory:</strong> {selectedDoc.issuer}
                      </div>
                      {selectedDoc.verificationCode && (
                        <span className="text-slate-400 text-[11px]">ID: {selectedDoc.verificationCode}</span>
                      )}
                    </div>
                  )}
                </div>
              ) : selectedDoc.fileType === 'pdf' && (selectedDoc.documentUrl.startsWith('data:application/pdf') || selectedDoc.documentUrl.startsWith('blob:') || selectedDoc.documentUrl.endsWith('.pdf')) ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-200 p-4 space-y-3">
                  <iframe
                    src={selectedDoc.documentUrl}
                    title={selectedDoc.title}
                    className="w-full h-full min-h-[55vh] rounded-xl border border-slate-200"
                  />
                  <div className="flex items-center justify-between w-full px-2 text-xs font-mono text-slate-500">
                    <span>{selectedDoc.fileName || 'Official PDF Document'}</span>
                    <a
                      href={selectedDoc.documentUrl}
                      download={selectedDoc.fileName || 'document.pdf'}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#D9532F] font-bold hover:underline flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Document
                    </a>
                  </div>
                </div>
              ) : (
                <div
                  style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
                  className="max-w-full max-h-full flex items-center justify-center"
                >
                  <img
                    src={selectedDoc.documentUrl}
                    alt={selectedDoc.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] max-w-full object-contain rounded-2xl shadow-xl border border-white"
                  />
                </div>
              )}
            </div>

            {/* Footer Metadata */}
            <div className="px-6 py-4 bg-white/95 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5 max-w-3xl">
                <p className="text-slate-700 leading-relaxed font-sans">
                  {selectedDoc.caption}
                </p>
                {selectedDoc.verificationCode && (
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Verification ID: {selectedDoc.verificationCode} • Conferred: {selectedDoc.date}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0 font-mono text-[11px] text-slate-500">
                <button
                  onClick={() => handleCopyCitation(selectedDoc)}
                  className="text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy Citation
                </button>

                {selectedDoc.isCustom && (
                  <button
                    onClick={(e) => handleDeleteDocument(selectedDoc.id, e)}
                    className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete Embed
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Hidden File Input for universal card document replacement and upload */}
      <input
        type="file"
        ref={cardFileInputRef}
        onChange={handleCardFileUpload}
        accept=".pdf,.png,.jpg,.jpeg,.webp"
        className="hidden"
      />
    </div>
  );
};
