export type TrackCategory =
  | "All"
  | "AI & LLM Engineering"
  | "Full Stack Web"
  | "Data Science & Analytics"
  | "Cloud & DevSecOps"
  | "Embedded AI & IoT";

export interface SyllabusModule {
  weekRange: string;
  title: string;
  topics: string[];
  deliverable: string;
  toolsUsed: string[];
}

export interface CareerTrack {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<TrackCategory, "All">;
  duration: string;
  mode: "Offline + Hybrid" | "Live Online" | "Intensive Bootcamp";
  nextBatchDate: string;
  seatsLeft: number;
  averageCtc: string;
  highestCtc: string;
  papEligible: boolean;
  badgeText: string;
  accentColor: "cyan" | "lime" | "purple" | "amber";
  tools: string[];
  outcomes: string[];
  syllabus: SyllabusModule[];
  capstoneProjectTitle: string;
  capstoneProjectSummary: string;
}

export interface PAPStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  highlightMetric: string;
  iconName: string;
}

export interface PAPCalculatorConfig {
  minimumThresholdLPA: number;
  isaPercentage: number;
  maxPaymentMonths: number;
  maxCapAmountINR: number;
  upfrontRegistrationDepositINR: number;
  depositRefundPolicy: string;
}

export interface StudentPlacement {
  id: string;
  studentName: string;
  college: string;
  degreeBackground: string;
  previousStatus: string;
  placedRole: string;
  companyName: string;
  companyTier: "Product AI" | "MNC Tech" | "High-Growth Startup" | "FinTech";
  packageLPA: number;
  location: string;
  trackCompleted: string;
  quote: string;
  linkedinHandle: string;
  avatarGradient: string;
  skillsMastered: string[];
}

export interface InternshipProject {
  id: string;
  title: string;
  category: "GenAI" | "FullStack" | "IoT & Edge" | "Data Engineering";
  builtByTeam: string[];
  clientOrDomain: string;
  problemStatement: string;
  architectureSummary: string;
  techStack: string[];
  metricsImpact: string;
  githubStars: number;
  liveDemoUrl: string;
  repoUrl: string;
  terminalPreviewLines: string[];
}

export interface InstaReelItem {
  id: string;
  handle: string;
  title: string;
  hookText: string;
  viewsCount: string;
  likesCount: string;
  tag: "Placement Drop" | "Project Build" | "Campus Vibe" | "AI Hack";
  gradientBg: string;
  durationSec: string;
}

export interface MentorProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  experienceYears: string;
  specialty: string;
  bio: string;
  teachesTrack: string;
}

export interface FAQItem {
  id: string;
  category: "Pay After Placement" | "Curriculum & Internships" | "Eligibility & Batch" | "Placements";
  question: string;
  answer: string;
}

export interface LeadApplicationPayload {
  fullName: string;
  phone: string;
  email: string;
  currentStatus: "Final Year Student" | "2nd/3rd Year Student" | "Recent Graduate" | "Working Professional";
  degreeBranch: string;
  preferredTrackId: string;
  preferredMode: "Nagercoil / Chennai Offline" | "Live Online Hybrid";
  agreedToPAPTerms: boolean;
}
