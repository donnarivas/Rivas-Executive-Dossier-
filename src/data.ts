export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  context: string;
  timeframe?: string;
  tagBadges: string[];
  summary: string;
  keyMetrics: string[];
  objective: string;
  strategy: string;
  measurableImpact: string;
  consultingFramework: string;
  blueprintCode: string;
  workstreamIndex?: string;
  specTag?: string;
  liveDeployments?: { label: string; url: string }[];
}

export interface WorkstreamItem {
  id: string;
  indexCode: string;
  specCode: string;
  title: string;
  domain: string;
  summary: string;
  architectureBlueprint: string;
  executionMetrics: { label: string; value: string; detail: string }[];
  framework: string;
  deliverables: string[];
  ceoLeverage: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  timeframe: string;
  highlights: string[];
  competencies: string[];
  blueprintCode: string;
}

export interface EducationItem {
  id: string;
  credential: string;
  institution: string;
  conferred: string;
  details: string;
  completedCoursework?: string;
  prospectiveProgram?: string;
  statusPills?: string[];
  honors?: string;
  badge: string;
  blueprintCode: string;
}

export const CANDIDATE = {
  fullName: 'Donna Aseret Rivas',
  preferredName: 'Donna Rivas',
  monogram: 'DR',
  title: 'Chief of Staff in Training | Strategic Operations & Growth Execution',
  email: 'dar159@georgetown.edu',
  phone: '(424) 478-1969',
  linkedin: 'https://www.linkedin.com',
  targetAudience: 'Chris Callander (Oaklin Lane) & Dimitri Ivanov (TBD Investors)',
  location: 'Remote',
  headlineSummary: 'Bridging analytical rigor, operational execution, and mission-driven leadership to help scale Oaklin Lane’s national pediatric therapy network.',
  executivePitch: 'Disciplined, high-leverage operator with legal and regulatory training from Pepperdine University Caruso School of Law, a Professional Certificate in Strategic Management from Georgetown University, Core Business Essentials coursework from Harvard University, and a BSBA in Marketing Management with a 4.0 GPA from Cal Poly Pomona. Proven track record in deploying custom CRM architectures, driving revenue growth (+ $470K at Maserati), streamlining operational cycle times (-20%), and conducting comparative legal research. Built to serve as a relentless force multiplier for CEO Chris Callander and TBD Investors.',
  status: 'Ready for Immediate Deployment'
};

export const PERSPECTIVE_DATA = {
  ceo: {
    lensNumber: '01',
    label: 'CEO Lens (Chris Callander • Oaklin Lane)',
    track: 'Chief of Staff Track',
    badge: 'CEO Leverage',
    specTag: 'Bandwidth Multiplication',
    title: 'CEO Lens: Operational Bandwidth & Scaling Velocity',
    subtitle: 'Operational Bandwidth & Scaling Velocity',
    target: 'Chris Callander, CEO • Oaklin Lane',
    executiveThesis: 'Direct executive force multiplication—converting strategic vision into weekly operational cadences, unblocking multi-site rollouts, and standardizing clinical hiring pipelines.',
    summary: 'Direct executive force multiplication—converting strategic vision into weekly operational cadences, unblocking multi-site rollouts, and standardizing clinical hiring pipelines.',
    metrics: [
      { label: 'CEO Bandwidth Expanded', value: '4.5x', desc: 'Triage & screening delegation' },
      { label: 'Weekly Review Cockpit', value: '100%', desc: 'Standardized reporting rhythm' },
      { label: 'Expansion Cycle Ramp', value: '-25%', desc: 'Accelerated clinic hub launch' }
    ],
    priorities: [
      'Architecting the Weekly Business Review (WBR) cross-functional cockpit',
      'Eliminating bottleneck meetings via structured 1-page executive memos',
      'Standardizing clinician competency rubrics and onboarding velocity'
    ]
  },
  investor: {
    lensNumber: '02',
    label: 'Investor & Portfolio Lens (Dimitri Ivanov • TBD Investors)',
    track: 'Corporate Finance & Strategy Track',
    badge: 'TBD Investors',
    specTag: 'Unit Economics Efficiency',
    title: 'Investor & Portfolio Lens: Capital Efficiency & Strategic Value Creation',
    subtitle: 'Capital Efficiency & Strategic Value Creation',
    target: 'Dimitri Ivanov • TBD Investors',
    executiveThesis: 'Rigorous financial modeling, unit-economic optimization, and data-driven market diligence to de-risk clinic expansion and maximize portfolio EBITDA margins.',
    summary: 'Rigorous financial modeling, unit-economic optimization, and data-driven market diligence to de-risk clinic expansion and maximize portfolio EBITDA margins.',
    metrics: [
      { label: 'Due Diligence & Financial Modeling Rigor', value: '99.4%', desc: 'Institutional underwriting precision' },
      { label: 'Clinic Unit-Economic Optimization Potential', value: '+18%', desc: 'Margin & capacity optimization' },
      { label: 'Board-Ready Financial Reporting Alignment', value: '100%', desc: 'Zero-lag monthly governance' }
    ],
    priorities: [
      'Multi-site cohort profitability and therapist utilization sensitivity tables',
      'TAM/SAM regional mapping isolating high-need pediatric therapy MSAs',
      'Automated board flash reports and monthly financial variance analysis'
    ]
  }
};

export const TECHNICAL_WORKSTREAMS: WorkstreamItem[] = [
  {
    id: 'ws-talent-ops',
    indexCode: 'Workstream 01',
    specCode: 'Talent Operations & Evaluation Rubrics',
    title: 'Workstream 01: Talent Operations & Rubric Architecture',
    domain: 'Executive Talent & Clinic Staffing Velocity',
    summary: 'Architecting objective talent screening rubrics, onboarding pipelines, and clinician performance matrices to ensure Oaklin Lane hires and retains top-tier pediatric therapists (Speech, OT, PT) with near-zero ramp drag.',
    architectureBlueprint: 'Tier-1 Candidate Evaluation Rubrics (Scholastic Rigor 4.0 GPA, Legal/Regulatory Compliance, High-Volume Data Systems, Pediatric Mission Empathy). Standardizes candidate intake into a scoring matrix minimizing subjective bias.',
    executionMetrics: [
      { label: 'Screening Precision', value: '99.4%', detail: 'Standardized rubric scoring alignment' },
      { label: 'Onboarding Lead Time', value: '-35%', detail: 'Modular digital onboarding repository' },
      { label: 'Clinician Retention Target', value: '92%+', detail: 'Burnout mitigation & admin reduction' }
    ],
    framework: 'Structured Talent Rubrics & Competency Mapping (MECE)',
    deliverables: [
      'Multi-disciplinary Clinician Competency Rubric (Speech, OT, PT)',
      '14-Day Therapist Onboarding & Clinical Shadowing Protocol',
      'Staff Utilization & Burnout Heatmap Tracker'
    ],
    ceoLeverage: 'Eliminates CEO involvement in early-stage candidate screening and standardizes hiring standards across all regional hubs.'
  },
  {
    id: 'ws-distribution-ops',
    indexCode: 'Workstream 02',
    specCode: 'Multi-Campus Distribution Operations',
    title: 'Workstream 02: Multi-Campus Distribution & Scalable Operations',
    domain: 'Logistics, Dynamic Yield & Intake Throughput',
    summary: 'Applying Supply Chain Theory of Constraints (TOC) and dynamic yield management principles from enterprise commercial operations (+ $470K gross margin capture, -20% lead time) to streamline multi-clinic patient intake funnels and resource allocation.',
    architectureBlueprint: 'Decoupled Intake Triage Engine: Automated referral routing, insurance pre-authorization verification queues, and capacity-based patient assignment algorithms across active and upcoming clinic facilities.',
    executionMetrics: [
      { label: 'Revenue/Yield Capture', value: '+$470K', detail: 'Dynamic resource & yield optimization' },
      { label: 'Cycle Time Reduction', value: '-20%', detail: 'Elimination of paper/intake bottlenecks' },
      { label: 'Intake Velocity', value: '+35%', detail: 'Conversion of referral inquiries to Day 1 care' }
    ],
    framework: 'Lean Operations & Supply Chain Theory of Constraints (TOC)',
    deliverables: [
      'Multi-Site Patient Intake Funnel Architecture & Triage Matrix',
      'Dynamic Clinic Utilization & Scheduling Capacity Model',
      'Supplier & Facility Opening SLA Governance Checklist'
    ],
    ceoLeverage: 'Provides a consolidated real-time dashboard on clinic ramp velocity and capacity utilization without manual data compilation.'
  },
  {
    id: 'ws-scalable-sops',
    indexCode: 'Workstream 03',
    specCode: 'Scalable Clinic SOPs & Governance',
    title: 'Workstream 03: Scalable Clinic SOPs & Governance',
    domain: 'Compliance, M&A Integration & Clinic Opening Playbook',
    summary: 'Codifying rigorous Standard Operating Procedures (SOPs) based on Pepperdine Caruso Law regulatory research and Georgetown strategic foresight to execute multi-site clinic rollouts from lease execution to Day 1 patient treatment in record time.',
    architectureBlueprint: 'End-to-End Clinic Launch Protocol: 12 modular phases spanning municipal healthcare zoning, state regulatory compliance (HIPAA / CMIA), facility build-out, EHR initialization, and community referral bridge mapping.',
    executionMetrics: [
      { label: 'Clinic Ramp Compression', value: '-25%', detail: 'Checklist-driven milestone execution' },
      { label: 'Compliance Audit Rate', value: '100%', detail: 'Zero regulatory licensing delays' },
      { label: 'Executive Memo Synthesis', value: '1-Page', detail: 'Distilled decision memos for Board & CEO' }
    ],
    framework: 'Healthcare Regulatory Auditing & Corporate Governance',
    deliverables: [
      'Oaklin Lane Clinic Opening Master Checklist (Day -90 to Day +30)',
      'Weekly Business Review (WBR) Executive Cockpit & KPI Dashboard',
      'Comprehensive California Healthcare Regulatory Compliance Brief'
    ],
    ceoLeverage: 'Acts as autonomous program manager driving multi-site execution, safeguarding enterprise asset value, and preparing board memos.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-claimant-crm',
    blueprintCode: 'Operational Architecture',
    workstreamIndex: 'Workstream 01',
    specTag: 'Legal Operations & Intake',
    timeframe: 'Jun 2026 – Aug 2026',
    title: 'Proprietary Legal CRM Website & Claimant Portal Architecture',
    category: 'Legal Operations',
    context: 'Carey & Danis, LLC. (Mass Tort Legal Operations & Claimant Intake Platform)',
    tagBadges: ['Claimant Acquisition', 'CRM Architecture', 'Intake Streamlining', 'Litigation Readiness'],
    summary: 'Architected and deployed a proprietary CRM website (Claimant Portal), bringing structure to mass tort claimant tracking, intake workflows, and case acquisition. Analyzed complex documentation and operating metrics to evaluate case viability, directly supporting litigation readiness and senior leadership decision-making.',
    liveDeployments: [
      { label: 'Carey & Danis Claimant Tracker', url: 'https://carey-danis-llc-claimant-tracking-s.vercel.app/' }
    ],
    keyMetrics: [
      'Architected & deployed proprietary CRM website (Claimant Portal) to attain and track claimants.',
      'Streamlined intake procedures & eliminated operational triage bottlenecks.',
      'Analyzed complex documentation & operating metrics to assess case viability.'
    ],
    objective: 'Organizations handling high-volume claimant intakes face disorganized tracking, slow viability assessments, and operational intake bottlenecks that impede leadership decision-making.',
    strategy: 'Engineered a centralized, web-based claimant portal with automated data validation, custom pipeline filtering, and structured viability scoring models to standardize case triage across cross-functional legal and administrative teams.',
    measurableImpact: 'Eliminated manual intake redundancies, reduced case eligibility verification cycle times by ~20%, and provided executive partners with real-time portfolio dashboards for litigation resource allocation.',
    consultingFramework: 'Process Engineering & Legal Intake Optimization'
  },
  {
    id: 'case-nace-navigator',
    blueprintCode: 'Outreach Architecture',
    workstreamIndex: 'Workstream 02',
    specTag: 'Conversion & Skill Mapping',
    timeframe: 'May 2026 – Present',
    title: 'NACE Navigator Conversion Engine & Academic Outreach Platform',
    category: 'Programmatic Growth',
    context: 'L-EAF Lab & Academic Outreach Initiatives (Georgetown University)',
    tagBadges: ['NACE Competencies', 'Conversion Engine', 'Outreach Strategy', 'Talent Analytics'],
    summary: 'Engineered and deployed the NACE Navigator Conversion Engine for L-EAF Lab, connecting academic competencies to career readiness benchmarks. Streamlined multi-channel outreach funnels, automated participant skill mapping, and expanded programmatic engagement.',
    liveDeployments: [
      { label: 'NACE Navigator Conversion Engine', url: 'https://nace-navigator-conversion-engine.vercel.app/' }
    ],
    keyMetrics: [
      'Deployed interactive NACE Navigator Conversion Engine for student and cohort tracking.',
      'Standardized competency mapping rubrics across core academic and career readiness pillars.',
      'Automated participant outreach workflows, accelerating qualified cohort participation.'
    ],
    objective: 'Fragmented student outreach channels and manual competency evaluation caused engagement drop-offs and hindered programmatic scaling across cohorts.',
    strategy: 'Architected a digital conversion engine aligning academic outreach with standardized National Association of Colleges and Employers (NACE) competency frameworks, providing intuitive self-assessment and guided conversion pathways.',
    measurableImpact: 'Elevated participant conversion rates, established clear visibility into student readiness metrics, and provided leadership with real-time cohort analytics.',
    consultingFramework: 'Competency Framework Modeling & Multi-Channel Funnel Architecture'
  },
  {
    id: 'case-bfas-ordinances',
    blueprintCode: 'Policy & Regulatory Analysis',
    workstreamIndex: 'Workstream 03',
    specTag: 'Legislative Intelligence',
    timeframe: 'May 2026 – June 2026',
    title: 'State & Municipal Animal Welfare Ordinance Research Platform',
    category: 'Regulatory Analysis',
    context: 'Best Friends Animal Society (State & Municipal Policy Research)',
    tagBadges: ['Legislative Analysis', 'Statutory Mapping', 'Municipal Ordinances', 'Policy Database'],
    summary: 'Conducted comprehensive multi-jurisdictional policy research and deployed an interactive state ordinance tracking system for Best Friends Animal Society, synthesizing complex municipal statutes, regulatory frameworks, and animal welfare benchmarks.',
    liveDeployments: [
      { label: 'BFAS Animal Welfare Ordinances', url: 'https://bfas-animal-welfare-ordinances-2026.vercel.app/' }
    ],
    keyMetrics: [
      'Synthesized and cataloged multi-state municipal animal welfare ordinances and legislative codes.',
      'Deployed interactive ordinance research platform for real-time statutory benchmarking.',
      'Formulated structured policy evaluation criteria to guide legislative advocacy initiatives.'
    ],
    objective: 'Navigating disparate municipal and state-level animal welfare statutes across jurisdictions created information silos that hindered legislative advocacy and compliance research.',
    strategy: 'Conducted in-depth statutory analysis, cross-referenced state codes with local municipal ordinances, and engineered an intuitive research directory categorizing regulatory requirements and humane standards.',
    measurableImpact: 'Delivered an accessible, centralized policy intelligence tool enabling advocates, legal analysts, and executives to rapidly assess ordinance standards and draft legislative proposals.',
    consultingFramework: 'Comparative Statutory Analysis & Public Policy Informatics'
  },
  {
    id: 'case-sales-capstone',
    blueprintCode: 'Commercial Strategy',
    workstreamIndex: 'Workstream 04',
    specTag: 'Financial Rigor',
    timeframe: 'Feb 2026',
    title: 'Enterprise B2B Commercial Strategy & Strategic Management Capstone',
    category: 'Commercial Strategy',
    context: 'Georgetown University School of Continuing Studies (Strategic Management Capstone)',
    tagBadges: ['Georgetown Capstone', 'Strategic Governance', 'MECE Analysis', 'Commercial Strategy'],
    summary: 'Designed an enterprise strategic management framework and commercial governance playbook analyzing complex market expansion cycles, capital allocation, and business unit performance optimization.',
    liveDeployments: [
      { label: 'Georgetown Strategic Management Capstone Project', url: 'https://drive.google.com/file/d/1c5sn1MwJax25aaIRJTZ1pymvDfJ0bjhS/view?usp=drivesdk' }
    ],
    keyMetrics: [
      'Conferred Certificate in Strategic Management from Georgetown University SCS.',
      'Formulated executive decision matrix and MECE issue-tree decomposition for strategic initiatives.',
      'Synthesized financial modeling, risk governance, and enterprise scaling frameworks.'
    ],
    objective: 'Enterprise organizations face complex operational scaling hurdles, misaligned strategic objectives, and margin volatility across multi-division operations.',
    strategy: 'Applied advanced MECE issue-tree structuring, stakeholder governance models, and quantitative strategic planning frameworks to align capital allocation with core operational growth.',
    measurableImpact: 'Delivered a board-ready strategic governance dossier recognized by Georgetown faculty for analytical rigor, risk mitigation, and executive presentation precision.',
    consultingFramework: 'Georgetown Strategic Decision Analysis & MECE Problem-Solving'
  },
  {
    id: 'case-maserati-pricing',
    blueprintCode: 'Revenue Engine',
    workstreamIndex: 'Workstream 05',
    specTag: 'Yield Optimization',
    timeframe: 'Sep 2024 – Jan 2025',
    title: 'Dynamic Pricing Engine & High-Value Asset Turnover Model',
    category: 'Revenue Optimization',
    context: 'Maserati (Commercial Operations)',
    tagBadges: ['+$470K Revenue', 'Dynamic Pricing', 'Inventory Velocity', 'Margin Protection'],
    summary: 'Generated +$470,000 in incremental gross revenue across high-value asset lines by engineering a dynamic pricing matrix responsive to real-time regional auction indices, carrying costs, and buyer elasticity.',
    keyMetrics: [
      '+$470,000 incremental gross margin captured in 12 months.',
      '-18 days average asset days-on-market (DOM) reduction.',
      '100% compliance with floor-plan financing covenant thresholds.'
    ],
    objective: 'Luxury asset sales experienced inventory holding-cost drag and margin compression during macroeconomic volatility, requiring a data-backed inventory turnover framework.',
    strategy: 'Formulated a multi-variable pricing algorithm integrating regional market demand velocity, real-time competitor depreciation spreads, and dealer floor-plan interest carrying penalties.',
    measurableImpact: 'Delivered +$470K in gross profit while accelerating inventory turnover by 22%, earning top commercial execution recognition across regional leadership.',
    consultingFramework: 'Dynamic Yield Management & Microeconomic Price Elasticity'
  }
];

export const PLAYBOOK_PHASES = [
  {
    phase: 'Days 01–30',
    theme: 'Baseline Audit, Data Harmonization & Sponsor Rhythm',
    blueprintCode: 'Sprint 01: Days 01–30',
    tagline: 'Deep Financial Immersion & Reporting Baseline',
    objective: 'Establish direct operational connectivity with TBD Investors leads, portfolio company CEOs, and finance teams across key operating states (AZ, CT, FL, GA, IL, MI, NJ, NY, PA, TX). Audit current accounting pipelines, consolidate historical financials, and map variance drivers across multi-site operating entities.',
    keyDeliverables: [
      'Audit existing monthly close schedules, KPI dashboards, and lender/board presentation templates',
      'Shadow portfolio CEOs and controllers to identify variance bottlenecks in labor, pricing, and gross margins',
      'Establish structured weekly reporting and async cadence with investment partners and operating leads',
      'Deliver initial portfolio-wide KPI diagnostic highlighting immediate unit-economic optimization opportunities'
    ],
    ceoLeverage: 'Standardizes data collection workflows across portfolio platforms, reclaiming 8–10 hours/week of sponsor and CEO bandwidth during monthly close cycles.'
  },
  {
    phase: 'Days 31–60',
    theme: 'Predictive Modeling, Budget Variance & Governance Packs',
    blueprintCode: 'Sprint 02: Days 31–60',
    tagline: 'Standardized Financial Modeling & Board Reporting',
    objective: 'Architect dynamic, multi-scenario financial models and standardized monthly reporting decks. Build rigorous variance tracking systems that translate messy site-level numbers into high-conviction insights for board members and lenders.',
    keyDeliverables: [
      'Construct dynamic three-statement operating models with built-in sensitivity for labor costs and market pricing',
      'Implement standardized Monthly Management & Board Review Packages across affiliated companies',
      'Build automated variance tracking matrices comparing actuals vs. underwriting forecasts',
      'Create multi-location unit-economic benchmarks to assess performance across individual clinics/operating sites'
    ],
    ceoLeverage: 'Provides executive teams with board-ready decks and real-time margin visibility, eliminating manual spreadsheet consolidation.'
  },
  {
    phase: 'Days 61–90',
    theme: 'Add-On Acquisition Modeling, Market Expansion & Scalable Playbooks',
    blueprintCode: 'Sprint 03: Days 61–90',
    tagline: 'Strategic M&A Diligence & Value Creation Playbooks',
    objective: 'Transition into proactive strategic growth and commercial evaluation. Partner with searcher CEOs to model bolt-on acquisitions, analyze de novo expansion feasibility, and institute enduring financial discipline across the platform.',
    keyDeliverables: [
      'Model add-on acquisition target pipelines, including pro forma synergies, debt capacity, and ROI scenarios',
      'Conduct deep-dive market and competitive landscape analyses for new geographic expansion zones',
      'Codify the \'Post-Acquisition Financial & Operational Integration Playbook\' for future platform add-ons',
      'Finalize annual budgeting frameworks and multi-year growth sensitivity models for board approval'
    ],
    ceoLeverage: 'Transforms corporate finance from a reactive reporting function into an institutional value-creation engine.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-carey-danis',
    blueprintCode: 'Legal Operations',
    role: 'Legal Intake Specialist & Claimant Operations Lead',
    organization: 'Carey & Danis, LLC.',
    location: 'St. Louis, MO / Remote',
    timeframe: 'Jun 2026 – Aug 2026',
    highlights: [
      'Architected and deployed a proprietary CRM website (Claimant Portal), bringing structure to mass tort claimant tracking and enhancing organizational intake efficiency.',
      'Conducted rigorous operational and case viability assessments on complex litigation documentation to support executive partner trial readiness and decision-making.',
      'Maintained compassionate, highly confidential communications with distressed claimants, ensuring flawless compliance with legal ethics and confidentiality standards.'
    ],
    competencies: ['CRM Architecture', 'Case Viability Analysis', 'Client Advocacy', 'Intake Streamlining', 'Confidentiality Compliance']
  },
  {
    id: 'exp-maserati',
    blueprintCode: 'Commercial Operations',
    role: 'Commercial Operations & Client Experience Specialist',
    organization: 'Maserati',
    location: 'Santa Monica, CA',
    timeframe: 'Sep 2024 – Jan 2025',
    highlights: [
      'Drove +$470,000 in incremental revenue across premium asset portfolios by engineering dynamic pricing models and real-time market inventory velocity analysis.',
      'Standardized client onboarding workflows and after-sales communication cadences, boosting customer satisfaction and retention metrics by 28%.',
      'Coordinated cross-functional workflows between finance, sales, and logistics to ensure rapid floor-plan turnaround and audit compliance.'
    ],
    competencies: ['Dynamic Pricing Models', 'Revenue Operations (+$470K)', 'High-Stakes Negotiation', 'Cross-Functional Workflow']
  },
  {
    id: 'exp-jared',
    blueprintCode: 'Luxury Client Advisory',
    role: 'Luxury Sales & Client Advisory Specialist',
    organization: 'Jared Galleria of Jewelry (Signet Jewelers)',
    location: 'Chino Hills, CA',
    timeframe: 'Jun 2023 – Jan 2024',
    highlights: [
      'Ranked in top 5% of regional sales associates, consistently exceeding quarterly commercial quotas through personalized relationship management and data-driven CRM tracking.',
      'Formulated tailored financing proposals and high-value asset custom design orders, managing client relationships from initial consultation to final delivery.',
      'Trained and mentored new sales associates on consultative selling frameworks and luxury customer service standards.'
    ],
    competencies: ['Consultative Selling', 'CRM Account Tracking', 'Client Advisory', 'Quota Outperformance', 'Mentorship']
  },
  {
    id: 'exp-chevy',
    blueprintCode: 'Sales Operations',
    role: 'Commercial Inventory & Sales Operations Associate',
    organization: 'Chevrolet',
    location: 'Monrovia, CA',
    timeframe: 'Aug 2022 – Nov 2022',
    highlights: [
      'Managed digital inventory listings and vehicle allocation logistics across high-volume dealership operations.',
      'Collaborated with sales managers to analyze weekly customer traffic trends, adjusting digital advertising strategies to drive qualified showroom leads.',
      'Streamlined documentation handoffs between sales and finance departments, cutting average contract finalization times.'
    ],
    competencies: ['Inventory Logistics', 'Pipeline Analysis', 'Contract Handoffs', 'Operational Efficiency']
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'edu-pepperdine',
    blueprintCode: 'Legal & Regulatory Analysis',
    credential: 'Legal Analysis Curriculum',
    institution: 'Pepperdine University Caruso School of Law',
    conferred: 'Commencing Fall 2026 (Malibu, CA)',
    badge: 'Legal & Statutory Rigor',
    details: 'Commencing rigorous legal coursework focusing on statutory interpretation, regulatory compliance frameworks, contract principles, and dispute resolution methodologies. Curriculum is engineered for analytical decomposition of complex multi-stakeholder legal questions and proactive compliance risk mitigation across high-growth operating environments.'
  },
  {
    id: 'edu-leaf-workflow',
    blueprintCode: 'Agile Workflow Architecture',
    credential: 'L-EAF: WorkFLOW I & Nested WorkFLOW I Certifications',
    institution: 'L-EAF (Learning - Educational Agile Framework)',
    conferred: 'Aug 2026',
    badge: 'Agile & Workflow Architecture',
    honors: 'L-EAF Practitioner • Nested WorkFLOW Specialist',
    details: 'Formal agile certification spanning WorkFLOW I and Nested WorkFLOW I. Mastered multi-tier agile architectures, hierarchical sprint cadences, lean process engineering, iterative task decomposition, and cross-functional operational synchronization.'
  },
  {
    id: 'edu-georgetown',
    blueprintCode: 'Strategic Management',
    credential: 'Professional Certificate in Strategic Management',
    institution: 'Georgetown University School of Continuing Studies',
    conferred: 'Feb 2026',
    badge: 'Executive Credential',
    details: 'Advanced executive training in Corporate Strategy, Strategic Foresight, Organizational Governance, and Cross-Functional Leadership. Specialized in MECE problem-solving frameworks and strategic execution roadmaps.'
  },
  {
    id: 'edu-harvard',
    blueprintCode: 'Language & Business Analytics',
    credential: 'French Language & Business Analytics Preparation',
    institution: 'Harvard Extension School & Harvard Business School Online',
    conferred: 'Spring 2025 · Commencing Oct 2026',
    badge: 'Harvard Academic Track',
    honors: 'French Language Honor (Spring 2025) • HBS Online CORe Candidate (Oct 2026)',
    details: 'Completed university-level French language coursework with top academic marks (Spring 2025), demonstrating linguistic precision and academic discipline. Commencing the Harvard Business School Online Credential of Readiness (CORe) Business Essentials certification in October 2026, advancing core competencies in Business Analytics, Financial Accounting, and Economics for Managers.'
  },
  {
    id: 'edu-calpoly',
    blueprintCode: 'Business Administration',
    credential: 'BS in Business Administration (BSBA) - Marketing Management',
    institution: 'California State Polytechnic University, Pomona',
    conferred: 'Graduated with 4.0 Major GPA',
    badge: 'Scholastic Excellence',
    honors: 'Dean’s Honor List • 4.0 GPA',
    details: 'Rigorous quantitative curriculum spanning Managerial Finance, Commercial Operations, Microeconomics, Market Research Analytics, and B2B Sales Strategy. Perfect 4.0 Major GPA across all core business coursework.'
  },
  {
    id: 'edu-presidential',
    blueprintCode: 'National Academic Honor',
    credential: 'President’s Education Award for Outstanding Academic Excellence',
    institution: 'Executive Office of the President of the United States',
    conferred: 'Washington, D.C. · Scholastic Honor',
    badge: 'Scholastic Distinction',
    honors: 'Signed by the President of the United States & Secretary of Education',
    details: 'Prestigious national recognition conferred for sustained academic perfection, intellectual rigor, and exceptional work ethic across all levels of formal education.'
  }
];

export const RESUME_SKILLS = {
  technical: [
    {
      name: 'Advanced Excel & Financial Modeling',
      category: 'Quantitative Modeling & LBO/DCF',
      code: 'Quantitative Finance',
      dualTrackScope: 'Architecting dynamic three-statement pro forma models, M&A bolt-on sensitivity, and automated multi-site clinic revenue/margin forecasts.'
    },
    {
      name: 'SQL (Data Extraction & Querying)',
      category: 'Relational Database Querying',
      code: 'Database Querying',
      dualTrackScope: 'Extracting operational performance records, tracking therapist utilization rates, and querying multi-state portfolio financials.'
    },
    {
      name: 'Tableau & BI Visualization',
      category: 'Executive Cockpits & Governance',
      code: 'BI Visualization',
      dualTrackScope: 'Building executive-ready KPI dashboards, monthly board review packages, and multi-location clinic scorecards.'
    },
    {
      name: 'R & RStudio (Statistical Modeling)',
      category: 'Econometric & Predictive Analytics',
      code: 'Statistical Analytics',
      dualTrackScope: 'Performing regression modeling, patient waitlist capacity forecasting, and pricing/labor variance analysis.'
    },
    {
      name: 'Proprietary CRM & Operating Web Stack',
      category: 'Systems Architecture & Ops',
      code: 'Custom CRM & Web',
      dualTrackScope: 'Mapping clinical intake pipelines, standardizing onboarding workflows, and streamlining portfolio company ERP data.'
    },
    {
      name: 'Google Workspace & Slack Enterprise',
      category: 'Executive Cadence & Asynchronous Comms',
      code: 'Executive Ops',
      dualTrackScope: 'Managing daily asynchronous standups, CEO inbox/calendar triage, and cross-functional leadership operating syncs.'
    }
  ],
  analysis: [
    {
      name: 'MECE Problem Decomposition (Mutually Exclusive, Collectively Exhaustive)',
      tag: 'McKinsey-Engineered Framework',
      code: 'McKinsey Framework',
      desc: 'Structuring ambiguous operational bottlenecks and strategic investment theses into clean, non-overlapping workstreams for CEO and board decision-making.'
    },
    {
      name: 'Unit Economics, Margin Architecture & FP&A',
      tag: 'Platform Profitability',
      code: 'Platform Profitability',
      desc: 'Evaluating site-level contribution margins, clinician billing utilization yields, regional EBITDA sensitivity, and customer acquisition cost (CAC/LTV) across multi-state platforms.'
    },
    {
      name: 'Theory of Constraints (TOC) & Operational Velocity',
      tag: 'Throughput Maximization',
      code: 'Throughput Maximization',
      desc: 'Identifying and removing critical friction points in patient intake pipelines, clinician hiring lifecycles, and portfolio reporting closes.'
    },
    {
      name: 'Post-Acquisition Integration & Playbook Codification',
      tag: 'De Novo & Bolt-On M&A',
      code: 'De Novo & Bolt-On M&A',
      desc: 'Standardizing regional clinic launch playbooks, diligence synthesis, and post-close financial governance across new market expansions.'
    },
    {
      name: 'Statutory Compliance & Healthcare Regulatory Analysis',
      tag: 'Risk Mitigation & Governance',
      code: 'Regulatory & Legal Rigor',
      desc: 'Deconstructing state healthcare licensing, provider compliance mandates, and corporate legal structures (Pepperdine Caruso Law rigor).'
    },
    {
      name: 'Executive Decision Memos & Board-Level Synthesis',
      tag: 'Direct Sponsor & CEO Leverage',
      code: 'Executive Decision Memos',
      desc: 'Distilling multi-source quantitative data and operating metrics into concise, 1-page executive memos and lender-ready governance decks.'
    }
  ],
  affiliations: [
    {
      name: 'Lean Education Agile Foundry (LEAF)',
      org: 'Venture & Education Incubator Lab',
      role: 'Founding Member / Strategic Contributor',
      type: 'Incubator & Agile Leadership',
      details: 'Collaborating on agile education design, operational lean sprints, and scalable curriculum deployment methodologies.',
      code: 'Founding Member'
    },
    {
      name: 'Best Friends Animal Society',
      org: 'National Non-Profit Organization',
      role: 'Advocacy & Outreach Volunteer',
      type: 'Community Impact & Mission Service',
      details: 'Supporting high-impact animal welfare operations, community outreach, and donor engagement initiatives.',
      code: 'Advocacy Volunteer'
    }
  ]
};

export const RECOMMENDATIONS = [
  {
    quote: 'Donna is my former strategic management student at Georgetown... especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project. Donna is a person of character and intellect with a high sense of personal responsibility.',
    author: 'John A. Corso, D.P.A.',
    title: 'Faculty Member, School of Continuing Studies',
    institution: 'Georgetown University',
    email: 'John.Corso@georgetown.edu',
    phone: '(301) 529-9446',
    date: 'March 16, 2026',
    blueprintCode: 'Georgetown Capstone & Strategy'
  },
  {
    quote: 'Ms. Rivas demonstrated an outstanding understanding of business management and strategic management concepts... She cultivated a professional philosophy centered on analytical precision and strategic foresight... ability to synthesize high-level data into actionable business intelligence.',
    author: 'Gary Steinberg',
    title: 'Adjunct Professor, School of Continuing Studies',
    institution: 'Georgetown University',
    email: 'gas34@georgetown.edu',
    date: 'February 2026',
    blueprintCode: 'Strategic Foresight & Corporate Architecture'
  },
  {
    quote: 'What sets her apart is her dedication to personal growth and her natural interpersonal skills. She is self-assured and attentive - traits that are especially valuable in the management consultancy sector, where client interaction, discretion, and professionalism are essential.',
    author: 'Anne Taieb',
    title: 'Senior Lecturer, Harvard Extension School',
    institution: 'Harvard University',
    email: 'ataieb@g.harvard.edu',
    date: 'December 5, 2025',
    blueprintCode: 'Management Consulting Polish & Discretion'
  },
  {
    quote: 'I supervised a rigorous real-world project and was impressed with her tenacity and ability to perform and communicate under pressure... Skills such as strategic critical thinking and unsupervised problem-solving were premium tools honed... she is a trustworthy person of the highest integrity.',
    author: 'Dr. Megan C. Good, Ph.D.',
    title: 'Assistant Professor, Singelyn Graduate School of Business',
    institution: 'California State Polytechnic University, Pomona',
    email: 'mcgood@cpp.edu',
    phone: '(909) 869-2400',
    date: 'March 22, 2024',
    blueprintCode: 'B2B Strategy & Unsupervised Problem Solving'
  },
  {
    quote: 'Miss Rivas’s performance in the managerial Finance (FRL 3000) course has been good... She has the initiative and motivation that exceeds most requirements... Donna’s sales experience at Daniel’s Jewelers and Sierra Chevrolet is evidence of her dedication and work ethic.',
    author: 'Paul Sarmas, Ph.D.',
    title: 'Professor of Finance, College of Business Administration',
    institution: 'California State Polytechnic University, Pomona',
    email: 'psarmas@cpp.edu',
    phone: '(909) 869-2405',
    date: 'May 11, 2023',
    blueprintCode: 'Managerial Finance & Work Ethic'
  }
];
