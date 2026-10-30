import type { PAPStep, PAPCalculatorConfig } from "@/types/karka";

export const papSteps: PAPStep[] = [
  {
    stepNumber: "01",
    title: "Crack the Skill Check & Enroll at ₹0 Tuition",
    subtitle: "Zero Upfront. Real Screening.",
    description:
      "Pass a 45-minute logical reasoning and curiosity screening call with our senior mentors. No competitive exam, no prior coding knowledge required. If we believe in your potential, you're in — paying zero upfront course tuition.",
    highlightMetric: "₹0 Tuition to Start",
    iconName: "Zap",
  },
  {
    stepNumber: "02",
    title: "24 Weeks of Hardcore Code + Real Internship",
    subtitle: "Build Real. Ship Real.",
    description:
      "Build production systems daily, commit to GitHub, and work on live industry projects alongside senior engineers. No toy calculator apps. Real PRs reviewed by engineers from Zoho, Freshworks, and top product startups.",
    highlightMetric: "45+ Production Projects",
    iconName: "Code2",
  },
  {
    stepNumber: "03",
    title: "Dedicated Placement War-Room",
    subtitle: "Unlimited Mock Interviews & Direct Referrals.",
    description:
      "Unlimited mock interviews, system design whiteboarding sessions, resume engineering, and direct referrals to 120+ hiring partners. Our placement team works with you until you get the offer — not just the application.",
    highlightMetric: "120+ Hiring Partners",
    iconName: "Target",
  },
  {
    stepNumber: "04",
    title: "Pay Only After You Earn ₹5.0 LPA+",
    subtitle: "100% Risk-Free. Your Success = Our Success.",
    description:
      "Your Income Share Agreement (ISA) activates only after your first salary hits your bank account. If you don't get placed above ₹5 LPA within 12 months of graduation, you pay ₹0 — no hidden clauses, no NBFC loans, no collateral.",
    highlightMetric: "₹0 if Below ₹5 LPA",
    iconName: "ShieldCheck",
  },
];

export const papCalculatorConfig: PAPCalculatorConfig = {
  minimumThresholdLPA: 5.0,
  isaPercentage: 15,
  maxPaymentMonths: 24,
  maxCapAmountINR: 120000,
  upfrontRegistrationDepositINR: 0,
  depositRefundPolicy:
    "Zero deposit required. No hidden charges. ISA activates only upon placement above ₹5.0 LPA threshold. Total payment capped at ₹1,20,000 regardless of CTC.",
};
