export interface EndorsementDocument {
  id: string;
  title: string;
  issuer: string;
  institution: string;
  date: string;
  type: 'recommendation' | 'certificate' | 'award';
  keyTakeaway: string;
  highlightQuotes: string[];
  fullText: string;
  skillsHighlighted: string[];
  contactInfo?: string;
  signatoryTitle: string;
  relevanceToRole: string;
  badge: string;
}

export interface StrategicPillar {
  id: string;
  pillarTitle: string;
  iconName: string;
  chrisBackground: string;
  donnaCapability: string;
  synergyImpact: string;
  supportingEvidence: string;
}

export interface RoadmapMilestone {
  phase: string;
  timeframe: string;
  focusArea: string;
  initiatives: string[];
  deliverables: string[];
  kpis: string[];
}

export interface ApplicationNoteConfig {
  tone: 'executive' | 'comprehensive' | 'operational' | 'mission_focused';
  emphasis: 'all' | 'strategy_finance' | 'b2b_operations' | 'georgetown_harvard';
}

export interface HiringCommitteePoint {
  id: string;
  title: string;
  category: 'Strategic Thinking' | 'Operational Scaling' | 'Healthcare / Pediatric Access' | 'Commercial & B2B Execution' | 'Executive Bandwidth Multiplier';
  candidateExperience: string;
  academicOrRealWorldSource: string;
  directContributionToCEO: string;
  measurableImpact: string;
  endorsementCitation: string;
}

export interface AnalyticalFrameworkItem {
  id: string;
  frameworkName: string;
  academicOrigin: string;
  coreMethodology: string;
  pediatricScalingApplication: string;
  expectedOutcome: string;
  tags: string[];
}

export type PortfolioTemplate = 'editorial' | 'architectural' | 'nordic' | 'midnight';
