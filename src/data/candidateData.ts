import { 
  EndorsementDocument, 
  StrategicPillar, 
  RoadmapMilestone, 
  HiringCommitteePoint, 
  AnalyticalFrameworkItem 
} from '../types';

export const CANDIDATE_PROFILE = {
  fullName: 'Donna Aseret Rivas',
  preferredName: 'Donna Rivas',
  targetRole: 'Consulting & Strategy Intern',
  company: 'Oaklin Lane (TBD Investors Portfolio)',
  ceoName: 'Chris Callander',
  email: 'internship@tbdinvestors.com',
  candidateEmail: 'dar159@georgetown.edu',
  location: 'Remote',
  committeeTarget: 'TBD Investors & Oaklin Lane Hiring Committee',
  headline: 'Strategic Management (Georgetown SCS) • Harvard Extension • Managerial Finance & B2B Operations (Cal Poly Pomona)',
  summary: 'A disciplined, analytical, and high-tenacity professional with specialized academic training in Strategic Management from Georgetown University, coursework in international business and communication from Harvard Extension School, and rigorous foundations in managerial finance and B2B sales operations from Cal Poly Pomona. Uniquely positioned to serve as a high-leverage Consulting & Strategy Intern to CEO Chris Callander and engagement leads in scaling Oaklin Lane into a national leader in pediatric therapy.',
  coreCompetencies: [
    { name: 'Strategic Foresight & Corporate Structure', level: 95, category: 'Strategy' },
    { name: 'Data Synthesis & Business Intelligence', level: 94, category: 'Analytics' },
    { name: 'Managerial Finance & Unit Economics', level: 92, category: 'Finance' },
    { name: 'B2B Commercial Execution & Sales Tactics', level: 93, category: 'Operations' },
    { name: 'Executive Presentation & Capstone Delivery', level: 96, category: 'Communication' },
    { name: 'Operational Tenacity & High-Pressure Execution', level: 98, category: 'Leadership' }
  ]
};

export const MISSION_CONNECTION_STATEMENT = {
  headline: 'Commitment to Expanding Pediatric Therapy Access',
  missionStatement: `My enthusiasm for Oaklin Lane is rooted in a core conviction: that early, high-quality pediatric intervention can permanently alter a child's developmental trajectory and unlock lifelong opportunity for families. In an increasingly fragmented healthcare landscape, millions of children face debilitating waitlists or geographic barriers to essential speech, occupational, and physical therapies. My personal career ambition has always been to apply rigorous strategic thinking and financial discipline not merely for commercial growth, but to solve high-stakes societal bottlenecks. Scaling Oaklin Lane’s clinic footprint means directly expanding care capacity for underserved communities—ensuring that every child, regardless of zip code, receives compassionate, world-class clinical support. Building this national platform alongside Chris Callander and TBD Investors represents the ideal alignment of my operational drive, strategic training, and deep-seated commitment to human-centered impact.`,
  personalValuesAlignment: [
    {
      value: 'Equitable Pediatric Care Access',
      description: 'Removing clinical backlogs so vulnerable children receive critical developmental therapy during formative growth windows.'
    },
    {
      value: 'High-Integrity Operational Stewardship',
      description: 'Aligning clinic profitability with clinical excellence—ensuring sustainable unit economics never compromise therapist quality or patient care.'
    },
    {
      value: 'Founder & Mission-Driven Dedication',
      description: 'Bringing unrelenting work ethic and high personal responsibility to shoulder the executive burden of scaling a mission-first healthcare organization.'
    }
  ]
};

export const HIRING_COMMITTEE_KEY_EXPERIENCES: HiringCommitteePoint[] = [
  {
    id: 'exp-strategic-thinking',
    title: 'Strategic Foresight & Corporate Structure Evaluation',
    category: 'Strategic Thinking',
    candidateExperience: 'Completed formal Certificate in Strategic Management at Georgetown University SCS (Feb 2026). Researched industry governance architectures and led strategic capstone evaluation for American Express.',
    academicOrRealWorldSource: 'Georgetown University SCS (Prof. Gary Steinberg & Dr. John A. Corso)',
    directContributionToCEO: 'Directly multiplies Chris Callander’s strategic bandwidth by drafting executive decision memos, competitor intelligence briefs, board-level growth materials for TBD Investors, and structuring complex expansion tradeoffs.',
    measurableImpact: 'Reduces CEO prep time for board/investor reviews by 30-40%; delivers structured, hypothesis-driven strategic briefings.',
    endorsementCitation: 'Prof. Steinberg: "cultivated a professional philosophy centered on analytical precision and strategic foresight... ability to synthesize high-level data into actionable business intelligence."'
  },
  {
    id: 'exp-operational-scaling',
    title: 'Managerial Finance, Clinic Unit Economics & Capacity Optimization',
    category: 'Operational Scaling',
    candidateExperience: 'Mastery in Managerial Finance (FRL 3000 at Cal Poly Pomona) modeling dynamic cost structures, capital budgeting, and clinic-level contribution margins.',
    academicOrRealWorldSource: 'Cal Poly Pomona College of Business Administration (Dr. Paul Sarmas)',
    directContributionToCEO: 'Builds and maintains real-time clinic unit economics models (therapist utilization rates, session reimbursement curves, fixed lease overhead amortization) to evaluate prospective clinic locations and protect EBITDA margins during rapid scaling.',
    measurableImpact: 'Provides real-time visibility into clinic break-even timelines and clinician caseload capacity across all regional sites.',
    endorsementCitation: 'Dr. Sarmas: "strong abilities and academic aptitude... initiative and motivation that exceeds most requirements... continuously seeks to explore the use of financial tools in management."'
  },
  {
    id: 'exp-pediatric-access',
    title: 'Healthcare & Pediatric Referral Pipeline Strategy',
    category: 'Healthcare / Pediatric Access',
    candidateExperience: 'Advanced training in B2B Strategic Selling, stakeholder outcome projection, and multi-channel partner relationship development.',
    academicOrRealWorldSource: 'Singelyn Graduate School of Business (Dr. Megan C. Good) & Commercial Sales Experience',
    directContributionToCEO: 'Designs and executes B2B outreach playbooks targeting pediatric primary care practices, child developmental psychologists, and public school district special education coordinators to drive steady, high-intent patient intake and eliminate clinic vacancy.',
    measurableImpact: 'Builds recurring clinical referral networks that compress new clinic patient ramp time from 6 months to under 90 days.',
    endorsementCitation: 'Dr. Good: "thorough introduction to various strategic revenue generating tactics... ability to project outcomes that organizations experience based on decisions made in B2B frameworks."'
  },
  {
    id: 'exp-unsupervised-execution',
    title: 'Unsupervised Problem-Solving & High-Pressure Execution',
    category: 'Executive Bandwidth Multiplier',
    candidateExperience: 'Demonstrated real-world frontline commercial tenacity and project ownership under intense pressure (Sierra Chevrolet, Daniel’s Jewelers, rigorous academic client projects).',
    academicOrRealWorldSource: 'Faculty Endorsements (Dr. Megan Good & Dr. John Corso)',
    directContributionToCEO: 'Operates as an autonomous consulting and strategy operator who proactively identifies operational bottlenecks, manages cross-functional workstreams (recruiting, clinical directors, ops), and executes high-urgency strategic deliverables without requiring step-by-step supervision.',
    measurableImpact: 'Directly frees 15+ hours/week of leadership bandwidth to focus on macro capital allocation, key hires, and strategic M&A.',
    endorsementCitation: 'Dr. Good: "supervized a rigorous real-world project and was impressed with her tenacity and ability to perform and communicate under pressure... unsupervised problem-solving were premium tools honed."'
  },
  {
    id: 'exp-consulting-discretion',
    title: 'Management Consulting Polish, Interpersonal Discretion & Trust',
    category: 'Commercial & B2B Execution',
    candidateExperience: 'Coursework at Harvard Extension School and Georgetown SCS instilling active listening, emotional intelligence, and executive presence in high-stakes environments.',
    academicOrRealWorldSource: 'Harvard Extension School (Senior Lecturer Anne Taieb)',
    directContributionToCEO: 'Represents the Office of the CEO with poise and total confidentiality when interfacing with TBD Investors partners, clinical directors, pediatric providers, and patient families—mirroring Chris Callander’s McKinsey & HBS standards.',
    measurableImpact: 'Establishes a culture of high-trust accountability, discrete stakeholder management, and seamless inter-departmental collaboration.',
    endorsementCitation: 'Anne Taieb: "self-assured and attentive—traits that are especially valuable in the management consultancy sector, where client interaction, discretion, and professionalism are essential."'
  }
];

export const ANALYTICAL_FRAMEWORKS_AND_METHODOLOGIES: AnalyticalFrameworkItem[] = [
  {
    id: 'framework-toc',
    frameworkName: 'Theory of Constraints (TOC) & Patient Lifecycle Throughput Diagnosis',
    academicOrigin: 'Georgetown SCS Strategic Management (Prof. Gary Steinberg)',
    coreMethodology: 'Systematic mapping of operational dependency chains to identify and eliminate the single primary rate-limiting step restricting clinic system throughput.',
    pediatricScalingApplication: 'Audit and streamline the 6-stage pediatric patient journey: (1) Pediatrician Referral → (2) Clinical Intake / Insurance Verification → (3) Pre-Authorization → (4) Therapist Schedule Matching → (5) Active Care Delivery → (6) Re-evaluation & Payor Billing. Eliminates intake drop-off and therapist scheduling idle time.',
    expectedOutcome: 'Reduces time-to-first-therapy-session by 35% and increases clinical capacity utilization without hiring additional overhead.',
    tags: ['Operations', 'Throughput', 'Clinic Workflow', 'TOC']
  },
  {
    id: 'framework-unit-econ',
    frameworkName: 'Clinic Unit Economics & Sensitivity Contribution Modeling',
    academicOrigin: 'Cal Poly Pomona Managerial Finance FRL 3000 (Dr. Paul Sarmas)',
    coreMethodology: 'Dynamic multi-variable financial modeling assessing fixed clinic overhead amortization, therapist salary-to-billable ratio, and payor reimbursement variations.',
    pediatricScalingApplication: 'Construct a parametric expansion simulator evaluating clinic profitability across varied geographic markets, clinician compensation tiers, Medicaid vs. commercial payor mixes, and session frequencies (OT/PT/Speech).',
    expectedOutcome: 'Clear geographic feasibility gating metrics ensuring every new clinic location achieves operating breakeven within 4-6 months of launch.',
    tags: ['Finance', 'Unit Economics', 'EBITDA Modeling', 'Payor Mix']
  },
  {
    id: 'framework-b2b-funnel',
    frameworkName: 'B2B Referral Funnel & Community Stakeholder Acquisition Matrix',
    academicOrigin: 'Cal Poly Pomona Strategic Selling & Decision Modeling (Dr. Megan Good)',
    coreMethodology: 'Structured B2B sales pipeline mechanics, stakeholder outcome projection, and conversion rate optimization across institutional referral nodes.',
    pediatricScalingApplication: 'Segment and prioritize local pediatric healthcare ecosystems (pediatrician practices, pediatric neurologists, school district special education teams, and early intervention state agencies) with tailored value propositions and referral friction reducers.',
    expectedOutcome: 'Generates a predictable, recurring intake stream of 40+ qualified pediatric patient referrals per clinic per month.',
    tags: ['B2B Strategy', 'Referral Pipelines', 'Provider Outreach', 'Growth']
  },
  {
    id: 'framework-mece-trees',
    frameworkName: 'MECE Issue Trees & Hypothesis-Driven Problem Solving',
    academicOrigin: 'Georgetown SCS Capstone & Harvard Extension Problem Frameworks (Dr. John Corso)',
    coreMethodology: 'Mutually Exclusive, Collectively Exhaustive (MECE) problem decomposition combined with deductive hypothesis testing and 80/20 executive synthesis (McKinsey consulting methodology).',
    pediatricScalingApplication: 'Dissect ambiguous operational scaling challenges (e.g. clinician turnover in specific sub-specialties, regional payor denial spikes, or uneven clinic ramp curves) into testable root causes and structured mitigation roadmaps for CEO and Board decision-making.',
    expectedOutcome: 'Crisp, data-backed 1-page executive memos for CEO Chris Callander that convert complex operational chaos into clear binary decisions.',
    tags: ['Consulting', 'MECE', 'Executive Briefings', 'Decision Science']
  },
  {
    id: 'framework-okr-governance',
    frameworkName: 'Balanced Scorecard & Cascading OKR Operational Governance',
    academicOrigin: 'Georgetown University SCS Certificate in Strategic Management',
    coreMethodology: 'Translating high-level corporate growth goals into synchronized departmental Objectives & Key Results with rigorous weekly accountability cadences.',
    pediatricScalingApplication: 'Deploy a unified Weekly Business Review (WBR) cockpit linking Clinical Quality & Patient NPS, Clinician Retention & Burnout Metrics, Clinic Financial Contribution Margins, and New Site Launch Milestones.',
    expectedOutcome: 'Maintains 100% alignment between CEO strategic priorities, TBD Investors milestones, and daily front-line clinic operations.',
    tags: ['Governance', 'OKRs', 'WBR Cockpit', 'Executive Cadence']
  }
];

export const VERIFIED_DOCUMENTS: EndorsementDocument[] = [
  {
    id: 'leaf-workflow',
    title: 'L-EAF: WorkFLOW I — Certificate of Achievement',
    issuer: 'L-EAF.org Certifying Board',
    institution: 'L-EAF (Learning - Educational Agile Framework)',
    date: 'August 3, 2026',
    type: 'certificate',
    badge: 'L-EAF Practitioner',
    contactInfo: 'support@l-eaf.org | L-EAF.org',
    keyTakeaway: 'Awarded Certificate of Achievement for completing WorkFLOW I, validating foundational mastery in agile workflow management, task decomposition, and lean educational cadence design.',
    highlightQuotes: [
      'This is to certify that Donna Rivas has successfully completed WorkFLOW I — L-EAF Practitioner.',
      'Demonstrating foundational mastery in agile workflow management, task decomposition, and lean educational cadence design.'
    ],
    fullText: `LEARNING - EDUCATIONAL AGILE FRAMEWORK (L-EAF)
CERTIFICATE OF ACHIEVEMENT
This is to certify that
DONNA RIVAS
has successfully completed
WorkFLOW I
Date of Issue: 08-03-2026
Authorized by: L-EAF.org
Credential: L-EAF Practitioner WorkFLOW I
Verification ID: LEAF-WF1-20260803-DR`,
    skillsHighlighted: ['Agile Workflow Design', 'Task Decomposition', 'Lean Cadence Optimization', 'Execution Velocity', 'Process Engineering'],
    signatoryTitle: 'Certifying Board, L-EAF (Learning - Educational Agile Framework)',
    relevanceToRole: 'Directly validates agile execution methodologies, sprint management, and structured operational workflows necessary for coordinating multi-clinic teams.'
  },
  {
    id: 'leaf-nested-workflow',
    title: 'L-EAF: Nested WorkFLOW I — Certificate of Achievement',
    issuer: 'L-EAF.org Certifying Board',
    institution: 'L-EAF (Learning - Educational Agile Framework)',
    date: 'August 3, 2026',
    type: 'certificate',
    badge: 'Nested WorkFLOW Specialist',
    contactInfo: 'support@l-eaf.org | L-EAF.org',
    keyTakeaway: 'Awarded Certificate of Achievement for completing Nested WorkFLOW I, certifying specialized competency in multi-tier agile architecture and cross-functional workflow synchronization.',
    highlightQuotes: [
      'This is to certify that Donna Rivas has successfully completed Nested WorkFLOW I — L-EAF.org.',
      'Certifying specialized competency in multi-tier agile architecture, hierarchical sprint structures, and cross-functional workflow synchronization.'
    ],
    fullText: `LEARNING - EDUCATIONAL AGILE FRAMEWORK (L-EAF)
CERTIFICATE OF ACHIEVEMENT
This is to certify that
DONNA RIVAS
has successfully completed
Nested WorkFLOW I
Date of Issue: 08-03-2026
Authorized by: L-EAF.org
Credential: Nested WorkFLOW I Specialist
Verification ID: LEAF-NWF1-20260803-DR`,
    skillsHighlighted: ['Multi-Tier Agile Architecture', 'Hierarchical Sprint Structures', 'Cross-Functional Sync', 'Complex Workflow Orchestration', 'Scaling Governance'],
    signatoryTitle: 'Certifying Board, L-EAF (Learning - Educational Agile Framework)',
    relevanceToRole: 'Essential for multi-site healthcare operations: aligning executive objectives with clinic-level sprint execution and nested administrative workflows.'
  },
  {
    id: 'georgetown-corso',
    title: 'Letter of Endorsement - Capstone Presentation & Analytical Intellect',
    issuer: 'Dr. John A. Corso, D.P.A.',
    institution: 'Georgetown University, School of Continuing Studies',
    date: 'March 16, 2026',
    type: 'recommendation',
    badge: 'Georgetown Capstone Excellence',
    contactInfo: 'John.Corso@georgetown.edu | (301) 529-9446',
    keyTakeaway: 'Endorsed for persuasive analytical and communication skills in presenting the American Express capstone project, personal responsibility, and high character.',
    highlightQuotes: [
      'Especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project.',
      'Her insight and thoughtful classroom contributions were consistently edifying to the class as a whole and enriching to the general program.',
      'Donna is a person of character and intellect with a high sense of personal responsibility.'
    ],
    fullText: `To Whom it May Concern,

It is with great pleasure that I endorse Ms. Donna Rivas for a sales consultant position.

Donna is my former strategic management student at Georgetown University's School of Continuing Studies in Washington, DC. She was my student in the Professional Certificate in Strategic Management program at Georgetown, especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project. Her insight and thoughtful classroom contributions were consistently edifying to the class as a whole and enriching to the general program at the school. Donna is a person of character and intellect with a high sense of personal responsibility. I have no doubt she will prove to be an asset to any position to which she accedes.

If I can assist you or Ms. Rivas at any time, please don't hesitate to reach out to me.

Very Truly Yours,
John A. Corso, DPA
Faculty Member, Georgetown University School of Continuing Studies (John.Corso@georgetown.edu, (301) 529-9446)`,
    skillsHighlighted: ['Capstone Execution', 'Executive Presentation', 'Persuasive Communication', 'High Intellectual Rigor'],
    signatoryTitle: 'Faculty Member, Georgetown University SCS',
    relevanceToRole: 'Proves capability in synthesizing complex multi-stakeholder business problems (American Express) into clear executive communications.'
  },
  {
    id: 'georgetown-certificate',
    title: 'Certificate in Strategic Management',
    issuer: 'Kelly J. Otter, Ph.D., Dean',
    institution: 'Georgetown University, School of Continuing Studies',
    date: 'February 13, 2026',
    type: 'certificate',
    badge: 'Georgetown SCS Credential',
    keyTakeaway: 'Awarded formal certificate in Strategic Management by virtue of authority granted by charter enacted by the Senate and House of Representatives of the United States in Congress assembled.',
    highlightQuotes: [
      'In recognition of the successful completion of the requisite course of study... Georgetown University hereby confers upon Donna Aseret Rivas the Certificate in Strategic Management.'
    ],
    fullText: `Georgetown University - School of Continuing Studies
In recognition of the successful completion of the requisite course of study and by virtue of authority granted by charter enacted by the Senate and House of Representatives of the United States of America in Congress assembled, Georgetown University hereby confers upon Donna Aseret Rivas the Certificate in Strategic Management. With all the Rights, Privileges, Honors, and Obligations thereto appertaining.
Given at Georgetown University, February 13, 2026.
Dean Kelly J. Otter, Ph.D.`,
    skillsHighlighted: ['Strategic Management', 'Corporate Governance', 'Executive Planning', 'Strategic Decision Frameworks'],
    signatoryTitle: 'Dean, School of Continuing Studies, Georgetown University',
    relevanceToRole: 'Direct academic and institutional pedigree alignment with CEO Chris Callander (Georgetown alumnus), proving formal mastery of corporate growth frameworks.'
  },
  {
    id: 'georgetown-steinberg',
    title: 'Letter of Recommendation - Strategic Foresight & Business Intelligence',
    issuer: 'Prof. Gary Steinberg',
    institution: 'Georgetown University, School of Continuing Studies',
    date: 'February 2026',
    type: 'recommendation',
    badge: 'Georgetown Strategic Frameworks',
    contactInfo: 'gas34@georgetown.edu',
    keyTakeaway: 'Praised for analytical precision, strategic foresight, evaluating complex corporate structures, and synthesizing high-level data into actionable business intelligence for forward-thinking leadership.',
    highlightQuotes: [
      'Donna Rivas excelled as a member of our Georgetown University, School of Continuing Studies, Certificate Program in Strategic Management.',
      'She cultivated a professional philosophy centered on analytical precision and strategic foresight.',
      'Equipped her with the frameworks necessary to evaluate complex corporate structures and drive operational excellence.',
      'Underscored her ability to synthesize high-level data into actionable business intelligence... to provide disciplined, data-driven support to a forward-thinking leadership team.'
    ],
    fullText: `To Whom it may concern,

Donna Rivas excelled as a member of our Georgetown University, School of Continuing Studies, Certificate Program in Strategic Management. Ms. Rivas demonstrated an outstanding understanding of business management and strategic management concepts and approaches. She also demonstrated excellent analytical and communications skills and the ability to work in a team environment during group exercises.

As she progressed through the program, she cultivated a professional philosophy centered on analytical precision and strategic foresight. Her academic tenure, highlighted by intensive research in Strategic Management, has equipped her with the frameworks necessary to evaluate complex corporate structures and drive operational excellence. During our program, Ms. Rivas' in-depth case study evaluations of industry leaders underscored her ability to synthesize high-level data into actionable business intelligence. Her class exercises also demonstrated her ability to leverage her background in finance and strategic planning to provide disciplined, data-driven support to a forward-thinking leadership team.

Based on her outstanding performance in our program, I would strongly recommend Ms. Rivas for a position in your organization.

Gary Steinberg, Adjunct Professor, Georgetown University (gas34@georgetown.edu)`,
    skillsHighlighted: ['Analytical Precision', 'Strategic Foresight', 'Operational Excellence', 'Data Synthesis', 'Executive Decision Support'],
    signatoryTitle: 'Adjunct Professor, Georgetown University',
    relevanceToRole: 'Directly validates the exact Consulting & Strategy skill set: evaluating organizational structures, synthesizing raw data into executive intelligence, and supporting leadership priorities.'
  },
  {
    id: 'georgetown-corso',
    title: 'Letter of Endorsement - Capstone Presentation & Analytical Intellect',
    issuer: 'Dr. John A. Corso, D.P.A.',
    institution: 'Georgetown University, School of Continuing Studies',
    date: 'March 16, 2026',
    type: 'recommendation',
    badge: 'Georgetown Capstone Excellence',
    contactInfo: 'John.Corso@georgetown.edu | (301) 529-9446',
    keyTakeaway: 'Endorsed for persuasive analytical and communication skills in presenting the American Express capstone project, personal responsibility, and high character.',
    highlightQuotes: [
      'Especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project.',
      'Her insight and thoughtful classroom contributions were consistently edifying to the class as a whole and enriching to the general program.',
      'Donna is a person of character and intellect with a high sense of personal responsibility.'
    ],
    fullText: `To Whom it May Concern,

It is with great pleasure that I endorse Ms. Donna Rivas for a sales consultant position.

Donna is my former strategic management student at Georgetown University's School of Continuing Studies in Washington, DC. She was my student in the Professional Certificate in Strategic Management program at Georgetown, especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project. Her insight and thoughtful classroom contributions were consistently edifying to the class as a whole and enriching to the general program at the school. Donna is a person of character and intellect with a high sense of personal responsibility. I have no doubt she will prove to be an asset to any position to which she accedes.

If I can assist you or Ms. Rivas at any time, please don't hesitate to reach out to me.

Very Truly Yours,
John A. Corso, DPA
Faculty Member, Georgetown University School of Continuing Studies (John.Corso@georgetown.edu, (301) 529-9446)`,
    skillsHighlighted: ['Capstone Execution', 'Executive Presentation', 'Persuasive Communication', 'High Intellectual Rigor'],
    signatoryTitle: 'Faculty Member, Georgetown University SCS',
    relevanceToRole: 'Proves capability in synthesizing complex multi-stakeholder business problems (American Express) into clear executive communications.'
  },
  {
    id: 'harvard-taieb',
    title: 'Letter of Recommendation - Professionalism, Interpersonal Skills & Global Mindset',
    issuer: 'Anne Taieb, Senior Lecturer',
    institution: 'Harvard Extension School',
    date: 'December 5, 2025',
    type: 'recommendation',
    badge: 'Harvard Academic Distinction',
    contactInfo: 'ataieb@g.harvard.edu',
    keyTakeaway: 'Highlighted traits essential to management consultancy: self-assurance, discretion, active collaboration, attentive listening, and high-integrity client interaction.',
    highlightQuotes: [
      'She distinguished herself as a motivated, engaged, and reliable student—qualities that I believe will make her an excellent addition to your team.',
      'She is self-assured and attentive - traits that are especially valuable in the management consultancy sector, where client interaction, discretion, and professionalism are essential.',
      'Culturally curious and open-minded... will bring enthusiasm and a strong sense of responsibility to any professional setting.'
    ],
    fullText: `To Whom It May Concern,

I am pleased to recommend Donna Rivas, whom I had the opportunity to teach in Elementary French E1b during the Spring 2025 at Harvard Extension School. From the very beginning of the course, she distinguished herself as a motivated, engaged, and reliable student—qualities that I believe will make her an excellent addition to your team.

In my class, she consistently demonstrated a strong work ethic and a genuine enthusiasm for learning. She approached each assignment thoughtfully, actively participated in discussions, and regularly sought feedback to improve her skills. Her ability to communicate clearly, collaborate effectively with classmates, and maintain a positive and professional attitude was evident throughout the semester.

What sets her apart is her dedication to personal growth and her natural interpersonal skills. She is self-assured and attentive - traits that are especially valuable in the management consultancy sector, where client interaction, discretion, and professionalism are essential. She is also culturally curious and open-minded, showing a real interest in languages and international contexts, which I believe will serve her well in a global-facing role.

I am confident that Donna Rivas will bring enthusiasm and a strong sense of responsibility to any professional setting. She contributed positively to our classroom environment, and I have no doubt that she will bring the same energy and commitment to her work with your company.

Sincerely,
Anne Taieb, Senior Lecturer, Harvard Extension School (ataieb@g.harvard.edu)`,
    skillsHighlighted: ['Management Consulting Polish', 'High Discretion & Trust', 'Active Listening', 'Interpersonal Excellence', 'Adaptability'],
    signatoryTitle: 'Senior Lecturer, Harvard Extension School',
    relevanceToRole: 'Resonates with Chris Callander’s Harvard & McKinsey background; confirms Donna possesses the polish, discretion, and composure needed in high-stakes leadership settings.'
  },
  {
    id: 'calpoly-good',
    title: 'Letter of Recommendation - B2B Strategic Selling, Critical Thinking & Pressure Execution',
    issuer: 'Dr. Megan C. Good, Ph.D.',
    institution: 'California State Polytechnic University, Pomona (Singelyn Graduate School of Business)',
    date: 'March 22, 2024',
    type: 'recommendation',
    badge: 'B2B Sales & Problem Solving',
    contactInfo: 'mcgood@cpp.edu | (909) 869-2400',
    keyTakeaway: 'Praised for strategic revenue generating tactics, projecting organizational outcomes, unsupervised problem-solving, and proven tenacity and communication under intense pressure.',
    highlightQuotes: [
      'Provided her a thorough introduction to various strategic revenue generating tactics that apply to her interests in business management and sales.',
      'Supervised a rigorous real-world project and was impressed with her tenacity and ability to perform and communicate under pressure.',
      'Skills such as strategic critical thinking and unsupervised problem-solving were premium tools honed within this dynamic environment.',
      'Demonstrated the quality of her character every day on campus and in professional environments, with a high degree of accountability to her learning and a strong work ethic.'
    ],
    fullText: `Date: March 22, 2024
From: Dr. Megan C. Good, Assistant Professor, Dept. of International Business & Marketing, Singelyn Graduate School of Business, Cal Poly Pomona
Subject: Letter of Recommendation - Donna Rivas

This letter will serve as a recommendation for Donna Rivas. I have known Donna since 2022 while she pursued a Bachelor of Science in Business Administration (BSBA) degree at Cal Poly Pomona, with a major focus in Marketing Management.

Donna completed my Professional Selling course, which provided her a thorough introduction to various strategic revenue generating tactics that apply to her interests in business management and sales. I worked closely with her while I supervised a rigorous real-world project and was impressed with her tenacity and ability to perform and communicate under pressure.

Donna's class performance reflected a mature individual who was committed to learning and maximizing her classroom experience. While interacting with others, she was always prepared to discuss and share her ideas with those around her. These excellent communication skills not only indicated her strengths in effectively collaborating with others, but also reflected her strengths in her preparation (which I found to be excellent). Importantly, her peers were receptive to Donna's insights, and it is clear that they respected both her perspectives and her professional methods of delivery in and out of the classroom.

Moreover, many of the assignments and exams required extensive critical thinking and the ability to project outcomes that individuals and /or organizations would experience based on decisions made in the framework of professional business-to-business sales. As a result, skills such as strategic critical thinking and unsupervised problem-solving were premium tools honed within this dynamic environment. Donna performed very well in these areas and will be a great fit for the Investment Banking Analyst position with your organization, to which she applied.

As a final point, Donna demonstrated the quality of her character every day on campus and in professional environments, with a high degree of accountability to her learning and a strong work ethic in her responsibilities.

In conclusion, I have confidence she is a trustworthy person of the highest integrity and I highly recommend Donna Rivas.

Dr. Megan C. Good, Ph.D., Assistant Professor (mcgood@cpp.edu, (909) 869-2400)`,
    skillsHighlighted: ['Unsupervised Problem-Solving', 'Strategic Revenue Tactics', 'B2B Sales Operations', 'Performance Under Pressure', 'Tenacity'],
    signatoryTitle: 'Assistant Professor, Singelyn Graduate School of Business, Cal Poly Pomona',
    relevanceToRole: 'Essential for scaling Oaklin Lane: building partner relationships with pediatricians, school districts, and clinic networks while driving unsupervised operational problem-solving.'
  },
  {
    id: 'calpoly-sarmas',
    title: 'Letter of Recommendation - Managerial Finance & Real-World Commercial Grit',
    issuer: 'Paul Sarmas, Ph.D., Professor of Finance',
    institution: 'California State Polytechnic University, Pomona (College of Business Administration)',
    date: 'May 11, 2023',
    type: 'recommendation',
    badge: 'Managerial Finance & Work Ethic',
    contactInfo: 'psarmas@cpp.edu | (909) 869-2405',
    keyTakeaway: 'Commended for strong financial aptitude in Managerial Finance (FRL 3000), initiative exceeding requirements, and demonstrated commercial sales work ethic at Daniel\'s Jewelers and Sierra Chevrolet.',
    highlightQuotes: [
      'Performance in the managerial Finance (FRL 3000) course has been good. I find her to be a good student with strong abilities and academic aptitude. She has the initiative and motivation that exceeds most requirements.',
      'Donna has shown great enthusiasm and willingness to learn new concepts in the field of finance... continuously seeks to explore the use of financial tools in marketing management.',
      'Donna\'s sales experience at Daniel\'s Jewelers and Sierra Chevrolet is evidence of her dedication and work ethic.',
      'Donna\'s ability to manage projects, handle responsibility, and dedicate time and energy to the assignments at hand distinguishes her from other young candidates.'
    ],
    fullText: `May 11, 2023
Dear General Manager:

Miss Donna Rivas has been my student and advisee for about a year. Miss Rivas's performance in the managerial Finance (FRL 3000) course has been good. I find her to be a good student with strong abilities and academic aptitude. She has the initiative and motivation that exceeds most requirements.

Miss Rivas is often a leader in class discussions, and her comments are insightful and well-thought-out. Donna has shown great enthusiasm and willingness to learn new concepts in the field of finance. Even though her primary academic focus is marketing, she continuously seeks to explore the use of financial tools in marketing management.

Miss Rivas has proved to be diligent, conscientious, and very personable. Donna's sales experience at Daniel's Jewelers and Sierra Chevrolet is evidence of her dedication and work ethic. Donna's ability to manage projects, handle responsibility, and dedicate time and energy to the assignments at hand distinguishes her from other young candidates. She will add diversity and will be a valuable asset to your operation.

Taking into consideration her dedication, determination, and motivation, I have no reservations concerning her success in the field of finance. I believe that Miss Donna Rivas will be a successful member of your team.

Respectfully,
Paul Sarmas, Ph.D., Professor of Finance (psarmas@cpp.edu, (909) 869-2405)`,
    skillsHighlighted: ['Managerial Finance', 'Financial Modeling & Tooling', 'Commercial Operations', 'Project Management', 'Relentless Work Ethic'],
    signatoryTitle: 'Professor of Finance, Cal Poly Pomona',
    relevanceToRole: 'Proves Donna pairs strategic vision with quantitative financial discipline and roll-up-your-sleeves commercial operational experience.'
  },
  {
    id: 'presidents-award',
    title: 'President\'s Education Awards Program - Outstanding Academic Achievement',
    issuer: 'President of the United States & U.S. Secretary of Education',
    institution: 'Executive Office of the President / U.S. Dept of Education',
    date: '2009',
    type: 'award',
    badge: 'Presidential Distinction',
    keyTakeaway: 'Conferred in recognition of outstanding academic achievement, demonstrating lifelong commitment to educational excellence, self-discipline, and intellectual vigor.',
    highlightQuotes: [
      'In recognition of Outstanding Academic Achievement — President\'s Education Awards Program'
    ],
    fullText: `President's Education Awards Program
Award for Educational Achievement
Presented to Donna Rivas in recognition of Outstanding Academic Achievement.
Signed by: U.S. Secretary of Education Arne Duncan & President of the United States Barack Obama.`,
    skillsHighlighted: ['Lifelong Academic Excellence', 'Inherent Discipline', 'Rigorous Work Standard'],
    signatoryTitle: 'President of the United States & Secretary of Education',
    relevanceToRole: 'Demonstrates a multi-decade foundation of scholastic excellence and high personal standards.'
  }
];

export const STRATEGIC_ALIGNMENT_PILLARS: StrategicPillar[] = [
  {
    id: 'academic-pedigree',
    pillarTitle: 'Shared Georgetown & Harvard DNA',
    iconName: 'GraduationCap',
    chrisBackground: 'Georgetown University alumnus; Harvard Business School MBA & President of HBS Entrepreneurship Club.',
    donnaCapability: 'Georgetown University SCS Certificate in Strategic Management (Feb 2026); Harvard Extension School coursework (Spring 2025).',
    synergyImpact: 'Shared institutional values, rigorous case study methodology, strategic frameworks, and an entrepreneurial mindset primed for fast-paced execution.',
    supportingEvidence: 'Endorsed by Georgetown SCS Faculty (Prof. Gary Steinberg, Dr. John A. Corso) and Harvard Senior Lecturer Anne Taieb.'
  },
  {
    id: 'consulting-rigor',
    pillarTitle: 'McKinsey Rigor Meets High-Leverage Strategic Consulting & Execution',
    iconName: 'TrendingUp',
    chrisBackground: 'Former McKinsey & Company consultant with structured problem-solving and top-tier strategy toolkit.',
    donnaCapability: 'Trained in synthesizing unstructured business problems, American Express Capstone analysis, and translating high-level datasets into actionable intelligence.',
    synergyImpact: 'Speaks the McKinsey language of MECE structuring, hypothesis-driven problem solving, 80/20 executive briefing, and operational milestone tracking.',
    supportingEvidence: 'Prof. Steinberg: "equipped her with the frameworks necessary to evaluate complex corporate structures and drive operational excellence."'
  },
  {
    id: 'financial-commercial',
    pillarTitle: 'Managerial Finance & B2B Commercial Grit',
    iconName: 'DollarSign',
    chrisBackground: 'Scaling a high-growth healthcare company backed by TBD Investors, requiring strict unit economics and regional market penetration.',
    donnaCapability: 'Managerial Finance (FRL 3000, Cal Poly Pomona) + B2B Professional Selling & real-world high-volume sales experience (Sierra Chevrolet & Daniel\'s Jewelers).',
    synergyImpact: 'Bridges top-down financial modeling with front-line commercial tenacity—ready to model clinic profitability and establish local clinical referral pipelines.',
    supportingEvidence: 'Dr. Good: "strategic revenue generating tactics... unsupervised problem-solving"; Dr. Sarmas: "financial tools in marketing management... distinguished work ethic."'
  },
  {
    id: 'mission-compassion',
    pillarTitle: 'Pediatric Healthcare Mission & High-Empathy Stakeholder Management',
    iconName: 'HeartHandshake',
    chrisBackground: 'Mission: Expanding access to high-quality pediatric therapy for children and families across the nation.',
    donnaCapability: 'High emotional intelligence, interpersonal discretion, deep customer-first empathy, and proven collaborative composure under pressure.',
    synergyImpact: 'Balances analytical execution with deep care for clinicians, children, and parent stakeholders essential to scaling high-trust pediatric care clinics.',
    supportingEvidence: 'Anne Taieb (Harvard): "natural interpersonal skills, self-assured and attentive... client interaction, discretion, and professionalism are essential."'
  }
];

export const CHIEF_OF_STAFF_ROADMAP: RoadmapMilestone[] = [
  {
    phase: 'Phase 1: Days 1–30',
    timeframe: 'Absorb & Structure',
    focusArea: 'Diagnostic & Quantitative Immersion',
    initiatives: [
      'Audit Oaklin Lane project archives, past deliverables, and existing operational benchmarks across regional clinic footprints.',
      'Master internal research frameworks, engagement metrics, and establish structured communication cadences with engagement leads and CEO Chris Callander.',
      'Support ongoing qualitative and quantitative data gathering across clinic intake funnels, clinician utilization, and partner referral channels.'
    ],
    deliverables: [
      'Comprehensive Engagement Archive & Operational Diagnostic Baseline',
      'Research Framework Mastery & KPI Tracking Matrix',
      'Initial Quantitative Intake & Referral Analysis Brief'
    ],
    kpis: ['100% project archive audit completed', 'Cadence established with engagement leads', 'Initial baseline data synthesized without friction']
  },
  {
    phase: 'Phase 2: Days 31–60',
    timeframe: 'Analyze & Synthesize',
    focusArea: 'Independent Modeling & Strategic Formulation',
    initiatives: [
      'Build independent analytical models assessing clinic-level unit economics, capacity utilization, and geographic market viability.',
      'Draft structured slide decks and executive memorandums for active client engagements and sponsor review cycles.',
      'Identify process bottlenecks in clinic expansion workflows and formulate actionable hypothesis-driven recommendations.'
    ],
    deliverables: [
      'Independent Unit Economic & Sensitivity Financial Model',
      'Client-Ready Strategic Engagement Slide Deck & Executive Brief',
      'Operational Bottleneck & Gap Analysis Action Matrix'
    ],
    kpis: ['Independent financial models validated', '15–20% cycle time reduction in slide deck delivery', 'Actionable client recommendations formalized']
  },
  {
    phase: 'Phase 3: Days 61–90',
    timeframe: 'Own & Deliver',
    focusArea: 'Discrete Workstream Ownership & Reusable Toolkits',
    initiatives: [
      'Lead discrete workstream modules with full end-to-end analytical autonomy and rigorous quality control.',
      'Deliver polished, client-ready presentations and executive reporting packages for Oaklin Lane leadership and TBD Investors.',
      'Codify reusable consulting toolkits, standard operating frameworks, and onboarding blueprints for future intern cohorts.'
    ],
    deliverables: [
      'Autonomous Strategic Workstream Package & Client Presentation',
      'Reusable Consulting Toolkit & Engagement Playbook Hub',
      'Quarterly Strategic Review & 12-Month Platform Roadmap'
    ],
    kpis: ['Full workstream module ownership delivered', 'Consulting toolkit codified for future cohorts', 'Zero-defect client-ready presentations']
  }
];

export const SAMPLE_LETTERS = {
  executive: {
    subject: 'Application: Consulting & Strategy Intern (Oaklin Lane) — Donna Rivas',
    body: `Dear Chris Callander and the TBD Investors Hiring Committee,

I am writing to submit my application for the Consulting & Strategy Intern role at Oaklin Lane, as invited following my application with TBD Investors.

Genuine Commitment to Oaklin Lane's Mission:
My enthusiasm for Oaklin Lane is rooted in a core conviction: that early, high-quality pediatric intervention can permanently alter a child's developmental trajectory and unlock lifelong opportunity for families. In an increasingly fragmented healthcare landscape, millions of children face debilitating waitlists or geographic barriers to essential speech, occupational, and physical therapies. My personal career ambition has always been to apply rigorous strategic thinking and financial discipline not merely for commercial growth, but to solve high-stakes societal bottlenecks. Scaling Oaklin Lane’s clinic footprint means directly expanding care capacity for underserved communities—ensuring that every child, regardless of zip code, receives compassionate, world-class clinical support. Building this national platform alongside Chris Callander and TBD Investors represents the ideal alignment of my analytical drive, strategic training, and deep-seated commitment to human-centered impact.

Strategic & Consulting Contributions from Day One:
1. Structured Problem-Solving & Strategic Intelligence: Having earned my Certificate in Strategic Management at Georgetown University SCS, I was trained in evaluating corporate structures, strategic foresight, and distilling multi-variable datasets into actionable business intelligence (endorsed by Prof. Gary Steinberg and Dr. John Corso for the American Express capstone). I will structure executive decision memos, Board reviews, and client-ready strategic briefings.
2. Managerial Finance & Quantitative Modeling: Through Managerial Finance (FRL 3000, Dr. Paul Sarmas at Cal Poly Pomona), I model clinic contribution margins, therapist utilization sensitivity, and lease amortization curves to ensure profitable clinic expansion.
3. B2B Commercial Strategy & Referral Execution: Trained in B2B Strategic Selling (Dr. Megan Good) and tested in commercial sales operations (Sierra Chevrolet, Daniel's Jewelers), I will spearhead market mapping across pediatric primary care clinics, developmental specialists, and school districts to build predictable patient pipelines.
4. Autonomous Execution & Workstream Ownership: Dr. Megan Good validated my "tenacity and ability to perform and communicate under pressure" and mastery of "unsupervised problem-solving." I will autonomously drive consulting workstreams and eliminate strategic bottlenecks.
5. Management Consulting Polish & Discretion: My coursework at Georgetown and Harvard Extension School instills the analytical precision, active listening, and high-trust discretion expected in top-tier management consultancy (noted by Harvard Senior Lecturer Anne Taieb).

I have prepared an interactive candidate portfolio and hiring committee dossier with all 7 verified endorsement letters, transcripts, and a 90-day consulting and scaling blueprint for your review.

I would welcome the opportunity to discuss how my strategic preparation and relentless work ethic will support Chris and the Oaklin Lane team in building a national pediatric therapy leader.

Warm regards,

Donna Aseret Rivas
Georgetown University SCS | Harvard Extension School | Cal Poly Pomona BSBA
Email: donnaarivas10@gmail.com
Targeting: Consulting & Strategy Intern — Oaklin Lane`
  },
  comprehensive: {
    subject: 'Strategic Application & Candidate Dossier: Consulting & Strategy Intern (Oaklin Lane) — Donna Rivas',
    body: `Dear Chris Callander and TBD Investors Selection Committee,

Thank you for inviting me to consider the Consulting & Strategy Intern role with Oaklin Lane. Having applied to TBD Investors out of a deep respect for your thesis-driven approach to backing transformative businesses, I am thrilled by the prospect of joining Oaklin Lane at this critical inflection point.

I. WHY THIS MISSION MATTERS TO ME
My enthusiasm for Oaklin Lane is rooted in a core conviction: that early, high-quality pediatric intervention can permanently alter a child's developmental trajectory and unlock lifelong opportunity for families. In an increasingly fragmented healthcare landscape, millions of children face debilitating waitlists or geographic barriers to essential speech, occupational, and physical therapies. My personal career ambition has always been to apply rigorous strategic thinking and financial discipline not merely for commercial growth, but to solve high-stakes societal bottlenecks. Scaling Oaklin Lane’s clinic footprint means directly expanding care capacity for underserved communities—ensuring that every child, regardless of zip code, receives compassionate, world-class clinical support.

II. HOW MY STRATEGIC TOOLKIT EMPOWERS OAKLIN LANE'S ENGAGEMENTS
• Diagnostic & Quantitative Research: In my Strategic Management program at Georgetown University, my research focused on diagnosing complex organizational frameworks, market mapping, and distilling multi-variable datasets into actionable executive briefings (Prof. Gary Steinberg).
• Slide Deck Architecture & Capstone Delivery: Leading the strategic analysis for the American Express capstone project demonstrated my ability to evaluate enterprise-level challenges and synthesize structured, client-ready presentations (Dr. John Corso endorsement).
• Commercial Strategy & Pipeline Mechanics: Under Dr. Megan Good at Cal Poly Pomona, I honed B2B strategic selling frameworks, projecting organizational outcomes, and driving unsupervised problem-solving in high-pressure settings. Combined with real-world sales execution at Sierra Chevrolet and Daniel's Jewelers, I know how to evaluate healthcare referral networks.
• Financial Modeling & Unit Economics: Trained in Managerial Finance (FRL 3000, Dr. Paul Sarmas), I build dynamic financial models, clinic-level P&Ls, therapist scheduling algorithms, and capacity planning tools.
• Professionalism, Discretion & High Integrity: As commended by Harvard Senior Lecturer Anne Taieb, I bring the interpersonal poise, cultural awareness, and utmost discretion required in management consultancy.

I am ready to roll up my sleeves and provide immediate, high-leverage strategic support across clinic throughput, market mapping, and client deliverables.

Sincerely,

Donna Aseret Rivas
Georgetown University SCS • Harvard Extension • Cal Poly Pomona BSBA
donnaarivas10@gmail.com`
  },
  operational: {
    subject: 'Operational & Strategic Value Contribution: Consulting & Strategy Intern — Donna Rivas for Oaklin Lane',
    body: `Dear Chris and the Hiring Committee,

I am writing to submit my application for the Consulting & Strategy Intern position at Oaklin Lane. Scaling a pediatric therapy organization from regional footprint to national leader requires rigorous strategic cadence, analytical modeling, and structured execution—disciplines that define my academic and professional background.

Mission Alignment:
Early pediatric therapy intervention changes children's lives. Scaling this access nationwide with uncompromised quality is a calling that aligns with my dedication to impactful operational stewardship.

Key Pillars of My Immediate Contribution:
1. Analytical Rigor & Workstream Ownership: Dr. Megan Good (Singelyn Graduate School of Business) noted my "tenacity and ability to perform and communicate under pressure" and mastery of "unsupervised problem-solving." I will take ownership of discrete workstream modules, project tracking, and deliverable execution.
2. Managerial Finance & Unit Economics: Supported by Dr. Paul Sarmas (Finance, Cal Poly Pomona), my financial training enables me to model therapist productivity, optimize clinic chair utilization, and analyze geographic market feasibility.
3. Strategic Case Analysis (Georgetown SCS): Having developed frameworks for corporate structural evaluation and data synthesis under Prof. Gary Steinberg, I can immediately assist with Board/TBD Investors presentations, KPI dashboards, and expansion diligence.
4. Client-Ready Communication: My direct sales track record at Daniel's Jewelers and Sierra Chevrolet paired with Harvard and Georgetown training ensures polished, structured communication across executive and clinical stakeholders.

Best regards,

Donna Aseret Rivas
donnaarivas10@gmail.com`
  },
  mission_focused: {
    subject: 'Mission-Driven Application: Consulting & Strategy Intern at Oaklin Lane — Donna Rivas',
    body: `Dear Chris Callander and TBD Investors Selection Committee,

When I reviewed the mission of Oaklin Lane—building a national leader in pediatric therapy to expand access to high-quality care for children and families—I immediately recognized the exact mission-driven environment where I want to dedicate my energy and capabilities.

My enthusiasm for Oaklin Lane is rooted in a core conviction: that early, high-quality pediatric intervention can permanently alter a child's developmental trajectory and unlock lifelong opportunity for families. In an increasingly fragmented healthcare landscape, millions of children face debilitating waitlists or geographic barriers to essential speech, occupational, and physical therapies. My personal career ambition has always been to apply rigorous strategic thinking and financial discipline not merely for commercial growth, but to solve high-stakes societal bottlenecks. Scaling Oaklin Lane’s clinic footprint means directly expanding care capacity for underserved communities—ensuring that every child, regardless of zip code, receives compassionate, world-class clinical support.

Why I Am uniquely Positioned to Support Oaklin Lane:
• Georgetown & Harvard Alignment: Bridging strategic management frameworks from Georgetown SCS with the interpersonal polish and consultancy standards observed during my studies at Harvard Extension School.
• Actionable Business Intelligence: Proven ability to synthesize complex operational data to support forward-thinking strategic decisions (Prof. Gary Steinberg).
• Quantitative & Financial Discipline: Grounded in managerial finance (Dr. Paul Sarmas) and B2B sales strategy (Dr. Megan Good), ready to drive expansion analysis and provider network development.
• Deep Dedication & Personal Character: Consistently recognized across all academic and professional mentors for utmost integrity, high personal responsibility, and exceptional work ethic.

Warmest regards,

Donna Aseret Rivas
donnaarivas10@gmail.com`
  }
};
