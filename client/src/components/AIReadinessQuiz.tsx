import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  orgName: string;
  role: string;
  roleOther: string;
  industry: string;
  industryOther: string;
  stage: string;
  aiUse: string;
  aiApplications: string[];
  aiOwner: string;
  guidelines: string;
  riskHandling: string;
  dcmiStatus: string;
  sadprStatus: string;
  dpiaStatus: string;
  externalPressure: string;
  confidence: string;
  wantReview: string;
  followUp: string;
  email: string;
  phone: string;
}

export function AIReadinessQuiz() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    orgName: "",
    role: "",
    roleOther: "",
    industry: "",
    industryOther: "",
    stage: "",
    aiUse: "",
    aiApplications: [],
    aiOwner: "",
    guidelines: "",
    riskHandling: "",
    dcmiStatus: "",
    sadprStatus: "",
    dpiaStatus: "",
    externalPressure: "",
    confidence: "",
    wantReview: "",
    followUp: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const calculateScore = () => {
    let score = 0;
    let maxScore = 0;

    // AI Use (10 max)
    maxScore += 10;
    if (formData.aiUse === "production" || formData.aiUse === "pilots") score += 10;
    else if (formData.aiUse === "planned") score += 5;
    else if (formData.aiUse === "no") score += 1;

    // AI Applications (10 max)
    maxScore += 10;
    if (formData.aiApplications.length > 0) score += 10;

    // AI Owner (10 max)
    maxScore += 10;
    if (formData.aiOwner === "yes") score += 10;
    else if (formData.aiOwner === "partially") score += 5;
    else if (formData.aiOwner === "no") score += 1;

    // Guidelines (10 max)
    maxScore += 10;
    if (formData.guidelines === "yes") score += 10;
    else if (formData.guidelines === "inProgress") score += 5;
    else if (formData.guidelines === "no") score += 3;

    // Risk Handling (10 max)
    maxScore += 10;
    if (formData.riskHandling) score += 10;

    // DCMI Status (10 max)
    maxScore += 10;
    if (formData.dcmiStatus === "registered") score += 10;
    else if (formData.dcmiStatus === "registeredNotFiled") score += 5;

    // SADPR Status (10 max)
    maxScore += 10;
    if (formData.sadprStatus === "submitted") score += 10;
    else if (formData.sadprStatus === "informal") score += 5;
    else if (formData.sadprStatus === "noDpo") score += 2;

    // DPIA Status (10 max)
    maxScore += 10;
    if (formData.dpiaStatus === "before") score += 10;
    else if (formData.dpiaStatus === "after") score += 5;

    // External Pressure (10 max)
    maxScore += 10;
    if (formData.externalPressure === "notYet") score += 10;
    else if (formData.externalPressure === "expecting") score += 5;
    else if (formData.externalPressure === "yes") score += 1;

    // Confidence (10 max)
    maxScore += 10;
    if (formData.confidence === "very") score += 10;
    else if (formData.confidence === "somewhat") score += 5;
    else if (formData.confidence === "not" || formData.confidence === "unsure") score += 3;

    return Math.round((score / maxScore) * 100);
  };

  const needsDPIA = () => {
    return formData.aiUse === "production" || formData.aiUse === "pilots";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return { level: "Excellent", color: "text-green-400", message: "Your organization shows strong AI governance and data privacy readiness." };
    if (score >= 60) return { level: "Good", color: "text-blue-400", message: "You're on the right track, but there are areas for improvement." };
    if (score >= 40) return { level: "Moderate", color: "text-yellow-400", message: "Significant gaps exist in your AI governance framework." };
    return { level: "Critical", color: "text-red-400", message: "Immediate action needed to address compliance risks." };
  };

  const handleSubmit = async () => {
    const score = calculateScore();
    const scoreInfo = getScoreMessage(score);

    const submissionData = {
      ...formData,
      score: `${score}%`,
      scoreLevel: scoreInfo.level,
      needsDPIA: needsDPIA() ? "Yes" : "No",
      _subject: "AI Readiness Check - Tech Fest 2026",
      _captcha: "false",
      _autoresponse: "Thank you for completing the AI Readiness Assessment! We're analyzing your responses and will send your personalized readiness report within 24 hours."
    };

    try {
      await fetch("https://formsubmit.co/ajax/solusesi03@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData),
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (submitted) {
    const score = calculateScore();
    const scoreInfo = getScoreMessage(score);

    return (
      <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-md text-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-white mb-4">Your AI Readiness Score</h3>
        <div className={`text-6xl font-bold ${scoreInfo.color} mb-2`}>{score}%</div>
        <p className="text-xl text-white mb-4">{scoreInfo.level}</p>
        <p className="text-slate-400 mb-6">{scoreInfo.message}</p>
        {needsDPIA() && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="text-yellow-300 font-semibold">⚠️ DPIA & AI Governance Program Required</p>
            <p className="text-sm text-slate-400 mt-2">Based on your AI usage, you need a Data Privacy Impact Assessment and AI Monitoring Program.</p>
          </div>
        )}
        <p className="text-slate-500">We'll be in touch soon with your detailed assessment.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">Section {step + 1} of 6</h3>
          <span className="text-sm text-slate-400">{Math.round((step / 6) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${(step / 6) * 100}%` }} />
        </div>
      </div>

      {step === 0 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white mb-6">Organisational Context</h4>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Organisation Name *</label>
            <input 
              type="text" 
              required 
              value={formData.orgName} 
              onChange={(e) => setFormData({ ...formData, orgName: e.target.value })} 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Enter your organisation name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Your Role *</label>
            <select
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="" className="bg-[#1e293b]">Select your role</option>
              <option value="Founder / Co-founder" className="bg-[#1e293b]">Founder / Co-founder</option>
              <option value="CTO / Head of Engineering" className="bg-[#1e293b]">CTO / Head of Engineering</option>
              <option value="Product / AI Lead" className="bg-[#1e293b]">Product / AI Lead</option>
              <option value="Compliance / Risk" className="bg-[#1e293b]">Compliance / Risk</option>
              <option value="Operations" className="bg-[#1e293b]">Operations</option>
              <option value="Other" className="bg-[#1e293b]">Other</option>
            </select>
            {formData.role === "Other" && (
              <input 
                type="text" 
                placeholder="Specify your role" 
                value={formData.roleOther} 
                onChange={(e) => setFormData({ ...formData, roleOther: e.target.value })} 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mt-3" 
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Industry *</label>
            <select
              required
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="" className="bg-[#1e293b]">Select your industry</option>
              <option value="Fintech" className="bg-[#1e293b]">Fintech</option>
              <option value="Health / Healthtech" className="bg-[#1e293b]">Health / Healthtech</option>
              <option value="SaaS / Technology" className="bg-[#1e293b]">SaaS / Technology</option>
              <option value="AI / Data Company" className="bg-[#1e293b]">AI / Data Company</option>
              <option value="Other" className="bg-[#1e293b]">Other</option>
            </select>
            {formData.industry === "Other" && (
              <input 
                type="text" 
                placeholder="Specify your industry" 
                value={formData.industryOther} 
                onChange={(e) => setFormData({ ...formData, industryOther: e.target.value })} 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mt-3" 
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Company Stage *</label>
            <select
              required
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="" className="bg-[#1e293b]">Select company stage</option>
              <option value="Early stage" className="bg-[#1e293b]">Early stage</option>
              <option value="Growth stage" className="bg-[#1e293b]">Growth stage</option>
              <option value="Scaling" className="bg-[#1e293b]">Scaling</option>
              <option value="Enterprise" className="bg-[#1e293b]">Enterprise</option>
            </select>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white mb-6">AI Use & Deployment</h4>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Does your organisation currently use AI? *</label>
            <div className="space-y-2.5">
              {[
                { value: "production", label: "Yes — in production", points: "10 points" },
                { value: "pilots", label: "Yes — in pilots / experimentation", points: "10 points" },
                { value: "planned", label: "Planned", points: "5 points" },
                { value: "no", label: "No", points: "1 point" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="aiUse" 
                      value={option.value} 
                      checked={formData.aiUse === option.value} 
                      onChange={(e) => setFormData({ ...formData, aiUse: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Where is AI currently applied? (Select all that apply)</label>
            <div className="space-y-2.5">
              {[
                { value: "customer", label: "Customer interaction (chatbots, support)" },
                { value: "credit", label: "Credit, pricing, or eligibility decisions" },
                { value: "health", label: "Health, risk, or impact assessments" },
                { value: "internal", label: "Internal operations or analytics" },
                { value: "thirdParty", label: "Third-party AI tools (e.g. SaaS platforms)" },
              ].map((app) => (
                <label key={app.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      value={app.value} 
                      checked={formData.aiApplications.includes(app.value)} 
                      onChange={(e) => {
                        const apps = e.target.checked ? [...formData.aiApplications, app.value] : formData.aiApplications.filter((a) => a !== app.value);
                        setFormData({ ...formData, aiApplications: apps });
                      }} 
                      className="w-4 h-4 text-primary rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{app.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">10 points</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white mb-6">Governance & Control</h4>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Is there a defined owner for AI oversight? *</label>
            <div className="space-y-2.5">
              {[
                { value: "yes", label: "Yes", points: "10 points" },
                { value: "partially", label: "Partially", points: "5 points" },
                { value: "no", label: "No", points: "1 point" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="aiOwner" 
                      value={option.value} 
                      checked={formData.aiOwner === option.value} 
                      onChange={(e) => setFormData({ ...formData, aiOwner: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Do you have documented guidelines for AI systems? *</label>
            <div className="space-y-2.5">
              {[
                { value: "yes", label: "Yes", points: "10 points" },
                { value: "inProgress", label: "In progress", points: "5 points" },
                { value: "no", label: "No", points: "3 points" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="guidelines" 
                      value={option.value} 
                      checked={formData.guidelines === option.value} 
                      onChange={(e) => setFormData({ ...formData, guidelines: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">How are risks like bias handled? *</label>
            <div className="space-y-2.5">
              {["Formal process", "Informal / ad-hoc", "Not addressed", "Unsure"].map((r) => (
                <label key={r} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="riskHandling" 
                      value={r} 
                      checked={formData.riskHandling === r} 
                      onChange={(e) => setFormData({ ...formData, riskHandling: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{r}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">10 points</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white mb-6">Data Privacy</h4>
          <div>
            <label className="block text-sm font-medium text-white mb-3">DCMI Registration & CAR Filing Status *</label>
            <div className="space-y-2.5">
              {[
                { value: "registered", label: "Registered and filed", points: "10 points" },
                { value: "registeredNotFiled", label: "Registered but not filed", points: "5 points" },
                { value: "notRegistered", label: "Not registered", points: "0 points" },
                { value: "unsure", label: "Unsure", points: "0 points" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="dcmiStatus" 
                      value={option.value} 
                      checked={formData.dcmiStatus === option.value} 
                      onChange={(e) => setFormData({ ...formData, dcmiStatus: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Has your DPO submitted SADPR? *</label>
            <div className="space-y-2.5">
              {[
                { value: "submitted", label: "Yes, formally submitted", points: "10 points" },
                { value: "informal", label: "Submitted informally", points: "5 points" },
                { value: "noDpo", label: "We have DPO but no SADPR", points: "2 points" },
                { value: "noDpoAtAll", label: "No DPO", points: "0 points" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="sadprStatus" 
                      value={option.value} 
                      checked={formData.sadprStatus === option.value} 
                      onChange={(e) => setFormData({ ...formData, sadprStatus: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Have you conducted DPIAs? *</label>
            <div className="space-y-2.5">
              {[
                { value: "before", label: "Yes, before deployment", points: "10 points" },
                { value: "after", label: "Yes, after deployment", points: "5 points" },
                { value: "no", label: "No", points: "0 points" },
                { value: "unsure", label: "Unsure", points: "0 points" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="dpiaStatus" 
                      value={option.value} 
                      checked={formData.dpiaStatus === option.value} 
                      onChange={(e) => setFormData({ ...formData, dpiaStatus: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white mb-6">Readiness & Future Pressure</h4>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Have customers/regulators asked about AI governance? *</label>
            <div className="space-y-2.5">
              {[
                { value: "yes", label: "Yes", points: "1 point" },
                { value: "notYet", label: "Not yet", points: "10 points" },
                { value: "expecting", label: "Expecting soon", points: "5 points" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="externalPressure" 
                      value={option.value} 
                      checked={formData.externalPressure === option.value} 
                      onChange={(e) => setFormData({ ...formData, externalPressure: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">How confident explaining your AI governance? *</label>
            <div className="space-y-2.5">
              {[
                { value: "very", label: "Very confident", points: "10 points" },
                { value: "somewhat", label: "Somewhat confident", points: "5 points" },
                { value: "not", label: "Not confident", points: "3 points" },
                { value: "unsure", label: "Unsure", points: "3 points" }
              ].map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="confidence" 
                      value={option.value} 
                      checked={formData.confidence === option.value} 
                      onChange={(e) => setFormData({ ...formData, confidence: e.target.value })} 
                      className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                    />
                    <span className="text-white group-hover:text-primary transition-colors">{option.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{option.points}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white mb-6">Next Steps</h4>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Want a complimentary readiness review? *</label>
            <div className="space-y-2.5">
              {["Yes", "Maybe—I would like more clarity", "Not at this time"].map((w) => (
                <label key={w} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <input 
                    type="radio" 
                    name="wantReview" 
                    value={w} 
                    checked={formData.wantReview === w} 
                    onChange={(e) => setFormData({ ...formData, wantReview: e.target.value })} 
                    className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                  />
                  <span className="text-white group-hover:text-primary transition-colors">{w}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">Preferred follow-up method *</label>
            <div className="space-y-2.5">
              {["Email", "Phone / WhatsApp", "Meeting"].map((f) => (
                <label key={f} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/40 cursor-pointer transition-all group">
                  <input 
                    type="radio" 
                    name="followUp" 
                    value={f} 
                    checked={formData.followUp === f} 
                    onChange={(e) => setFormData({ ...formData, followUp: e.target.value })} 
                    className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                  />
                  <span className="text-white group-hover:text-primary transition-colors">{f}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Email *</label>
            <input 
              type="email" 
              required 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Phone (Optional)</label>
            <input 
              type="tel" 
              value={formData.phone} 
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="+234 xxx xxx xxxx"
            />
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-8 pt-6 border-t border-white/10">
        {step > 0 && (
          <Button 
            variant="outline" 
            onClick={() => setStep(step - 1)} 
            className="text-white border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
          >
            Previous
          </Button>
        )}
        {step < 5 ? (
          <Button 
            onClick={() => setStep(step + 1)} 
            className="ml-auto bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
          >
            Next Section
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit} 
            className="ml-auto bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
          >
            Complete Assessment
          </Button>
        )}
      </div>
    </Card>
  );
}
