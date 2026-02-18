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
  const [step, setStep] = useState(1);
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
      
      // Auto-download brochure after submission
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/cealed-company-profile.pdf";
        link.download = "Cealed-Company-Profile.pdf";
        link.click();
      }, 1000);
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
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
          <p className="text-primary font-semibold mb-2">🎁 Your E-brochure is downloading...</p>
          <p className="text-sm text-slate-400">Check your downloads folder for Cealed's company profile</p>
        </div>
        <p className="text-slate-500">We'll be in touch soon with your detailed assessment.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">Section {step} of 6</h3>
          <span className="text-sm text-slate-400">{Math.round((step / 6) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${(step / 6) * 100}%` }} />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Organisational Context</h4>
          <div>
            <label className="block text-sm text-white mb-2">Organisation Name *</label>
            <input type="text" required value={formData.orgName} onChange={(e) => setFormData({ ...formData, orgName: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white" />
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Your Role *</label>
            <div className="space-y-2">
              {["Founder / Co-founder", "CTO / Head of Engineering", "Product / AI Lead", "Compliance / Risk", "Operations", "Other"].map((r) => (
                <label key={r} className="flex items-center gap-2 text-white">
                  <input type="radio" name="role" value={r} checked={formData.role === r} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
                  {r}
                </label>
              ))}
            </div>
            {formData.role === "Other" && (
              <input type="text" placeholder="Specify role" value={formData.roleOther} onChange={(e) => setFormData({ ...formData, roleOther: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white mt-2" />
            )}
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Industry *</label>
            <div className="space-y-2">
              {["Fintech", "Health / Healthtech", "SaaS / Technology", "AI / Data Company", "Other"].map((i) => (
                <label key={i} className="flex items-center gap-2 text-white">
                  <input type="radio" name="industry" value={i} checked={formData.industry === i} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} />
                  {i}
                </label>
              ))}
            </div>
            {formData.industry === "Other" && (
              <input type="text" placeholder="Specify industry" value={formData.industryOther} onChange={(e) => setFormData({ ...formData, industryOther: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white mt-2" />
            )}
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Company Stage *</label>
            <div className="space-y-2">
              {["Early stage", "Growth stage", "Scaling", "Enterprise"].map((s) => (
                <label key={s} className="flex items-center gap-2 text-white">
                  <input type="radio" name="stage" value={s} checked={formData.stage === s} onChange={(e) => setFormData({ ...formData, stage: e.target.value })} />
                  {s}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">AI Use & Deployment</h4>
          <div>
            <label className="block text-sm text-white mb-2">Does your organisation currently use AI? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="aiUse" value="production" checked={formData.aiUse === "production"} onChange={(e) => setFormData({ ...formData, aiUse: e.target.value })} />
                Yes — in production (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="aiUse" value="pilots" checked={formData.aiUse === "pilots"} onChange={(e) => setFormData({ ...formData, aiUse: e.target.value })} />
                Yes — in pilots / experimentation (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="aiUse" value="planned" checked={formData.aiUse === "planned"} onChange={(e) => setFormData({ ...formData, aiUse: e.target.value })} />
                Planned (5 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="aiUse" value="no" checked={formData.aiUse === "no"} onChange={(e) => setFormData({ ...formData, aiUse: e.target.value })} />
                No (1 point)
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Where is AI currently applied? (Select all)</label>
            <div className="space-y-2">
              {[
                { value: "customer", label: "Customer interaction (chatbots, support)" },
                { value: "credit", label: "Credit, pricing, or eligibility decisions" },
                { value: "health", label: "Health, risk, or impact assessments" },
                { value: "internal", label: "Internal operations or analytics" },
                { value: "thirdParty", label: "Third-party AI tools (e.g. SaaS platforms)" },
              ].map((app) => (
                <label key={app.value} className="flex items-center gap-2 text-white">
                  <input type="checkbox" value={app.value} checked={formData.aiApplications.includes(app.value)} onChange={(e) => {
                    const apps = e.target.checked ? [...formData.aiApplications, app.value] : formData.aiApplications.filter((a) => a !== app.value);
                    setFormData({ ...formData, aiApplications: apps });
                  }} />
                  {app.label} (10 points)
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Governance & Control</h4>
          <div>
            <label className="block text-sm text-white mb-2">Is there a defined owner for AI oversight? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="aiOwner" value="yes" checked={formData.aiOwner === "yes"} onChange={(e) => setFormData({ ...formData, aiOwner: e.target.value })} />
                Yes (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="aiOwner" value="partially" checked={formData.aiOwner === "partially"} onChange={(e) => setFormData({ ...formData, aiOwner: e.target.value })} />
                Partially (5 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="aiOwner" value="no" checked={formData.aiOwner === "no"} onChange={(e) => setFormData({ ...formData, aiOwner: e.target.value })} />
                No (1 point)
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Do you have documented guidelines for AI systems? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="guidelines" value="yes" checked={formData.guidelines === "yes"} onChange={(e) => setFormData({ ...formData, guidelines: e.target.value })} />
                Yes (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="guidelines" value="inProgress" checked={formData.guidelines === "inProgress"} onChange={(e) => setFormData({ ...formData, guidelines: e.target.value })} />
                In progress (5 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="guidelines" value="no" checked={formData.guidelines === "no"} onChange={(e) => setFormData({ ...formData, guidelines: e.target.value })} />
                No (3 points)
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">How are risks like bias handled? *</label>
            <div className="space-y-2">
              {["Formal process", "Informal / ad-hoc", "Not addressed", "Unsure"].map((r) => (
                <label key={r} className="flex items-center gap-2 text-white">
                  <input type="radio" name="riskHandling" value={r} checked={formData.riskHandling === r} onChange={(e) => setFormData({ ...formData, riskHandling: e.target.value })} />
                  {r} (10 points)
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Data Privacy</h4>
          <div>
            <label className="block text-sm text-white mb-2">DCMI Registration & CAR Filing Status *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dcmiStatus" value="registered" checked={formData.dcmiStatus === "registered"} onChange={(e) => setFormData({ ...formData, dcmiStatus: e.target.value })} />
                Registered and filed (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dcmiStatus" value="registeredNotFiled" checked={formData.dcmiStatus === "registeredNotFiled"} onChange={(e) => setFormData({ ...formData, dcmiStatus: e.target.value })} />
                Registered but not filed (5 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dcmiStatus" value="notRegistered" checked={formData.dcmiStatus === "notRegistered"} onChange={(e) => setFormData({ ...formData, dcmiStatus: e.target.value })} />
                Not registered (0 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dcmiStatus" value="unsure" checked={formData.dcmiStatus === "unsure"} onChange={(e) => setFormData({ ...formData, dcmiStatus: e.target.value })} />
                Unsure (0 points)
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Has your DPO submitted SADPR? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="sadprStatus" value="submitted" checked={formData.sadprStatus === "submitted"} onChange={(e) => setFormData({ ...formData, sadprStatus: e.target.value })} />
                Yes, formally submitted (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="sadprStatus" value="informal" checked={formData.sadprStatus === "informal"} onChange={(e) => setFormData({ ...formData, sadprStatus: e.target.value })} />
                Submitted informally (5 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="sadprStatus" value="noDpo" checked={formData.sadprStatus === "noDpo"} onChange={(e) => setFormData({ ...formData, sadprStatus: e.target.value })} />
                We have DPO but no SADPR (2 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="sadprStatus" value="noDpoAtAll" checked={formData.sadprStatus === "noDpoAtAll"} onChange={(e) => setFormData({ ...formData, sadprStatus: e.target.value })} />
                No DPO (0 points)
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Have you conducted DPIAs? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dpiaStatus" value="before" checked={formData.dpiaStatus === "before"} onChange={(e) => setFormData({ ...formData, dpiaStatus: e.target.value })} />
                Yes, before deployment (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dpiaStatus" value="after" checked={formData.dpiaStatus === "after"} onChange={(e) => setFormData({ ...formData, dpiaStatus: e.target.value })} />
                Yes, after deployment (5 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dpiaStatus" value="no" checked={formData.dpiaStatus === "no"} onChange={(e) => setFormData({ ...formData, dpiaStatus: e.target.value })} />
                No (0 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="dpiaStatus" value="unsure" checked={formData.dpiaStatus === "unsure"} onChange={(e) => setFormData({ ...formData, dpiaStatus: e.target.value })} />
                Unsure (0 points)
              </label>
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Readiness & Future Pressure</h4>
          <div>
            <label className="block text-sm text-white mb-2">Have customers/regulators asked about AI governance? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="externalPressure" value="yes" checked={formData.externalPressure === "yes"} onChange={(e) => setFormData({ ...formData, externalPressure: e.target.value })} />
                Yes (1 point)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="externalPressure" value="notYet" checked={formData.externalPressure === "notYet"} onChange={(e) => setFormData({ ...formData, externalPressure: e.target.value })} />
                Not yet (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="externalPressure" value="expecting" checked={formData.externalPressure === "expecting"} onChange={(e) => setFormData({ ...formData, externalPressure: e.target.value })} />
                Expecting soon (5 points)
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">How confident explaining your AI governance? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="confidence" value="very" checked={formData.confidence === "very"} onChange={(e) => setFormData({ ...formData, confidence: e.target.value })} />
                Very confident (10 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="confidence" value="somewhat" checked={formData.confidence === "somewhat"} onChange={(e) => setFormData({ ...formData, confidence: e.target.value })} />
                Somewhat confident (5 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="confidence" value="not" checked={formData.confidence === "not"} onChange={(e) => setFormData({ ...formData, confidence: e.target.value })} />
                Not confident (3 points)
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="confidence" value="unsure" checked={formData.confidence === "unsure"} onChange={(e) => setFormData({ ...formData, confidence: e.target.value })} />
                Unsure (3 points)
              </label>
            </div>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Next Steps</h4>
          <div>
            <label className="block text-sm text-white mb-2">Want a complimentary readiness review? *</label>
            <div className="space-y-2">
              {["Yes", "Maybe—I would like more clarity", "Not at this time"].map((w) => (
                <label key={w} className="flex items-center gap-2 text-white">
                  <input type="radio" name="wantReview" value={w} checked={formData.wantReview === w} onChange={(e) => setFormData({ ...formData, wantReview: e.target.value })} />
                  {w}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Preferred follow-up method *</label>
            <div className="space-y-2">
              {["Email", "Phone / WhatsApp", "Meeting"].map((f) => (
                <label key={f} className="flex items-center gap-2 text-white">
                  <input type="radio" name="followUp" value={f} checked={formData.followUp === f} onChange={(e) => setFormData({ ...formData, followUp: e.target.value })} />
                  {f}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Email *</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white" />
          </div>
          <div>
            <label className="block text-sm text-white mb-2">Phone</label>
            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white" />
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-6">
        {step > 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)} className="text-white border-white/20">
            Previous
          </Button>
        )}
        {step < 6 ? (
          <Button onClick={() => setStep(step + 1)} className="ml-auto bg-primary">
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="ml-auto bg-primary">
            Submit
          </Button>
        )}
      </div>
    </Card>
  );
}
