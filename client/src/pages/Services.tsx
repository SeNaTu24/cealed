import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
    Shield,
    FileCheck,
    Lock,
    Users,
    Briefcase,
    GraduationCap,
    ArrowRight,
    CheckCircle2,
    Crosshair,
    Brain,
    Target,
    AlertTriangle,
    FileText,
    UserCog,
    Network,
    Activity,
    BookOpen,
    BarChart3,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Services() {
    const [activeTab, setActiveTab] = useState("data-privacy");

    const categories = [
        { id: "data-privacy", label: "Data Privacy & Compliance" },
        { id: "security", label: "Security Services" },
        { id: "ai-governance", label: "AI Governance" },
        { id: "training", label: "Training & Support" },
    ];

    const services = {
        "data-privacy": [
            {
                id: "ndpa-compliance-audit",
                icon: Shield,
                title: "NDPA Privacy Compliance Audit",
                description:
                    "Structured audit to help organizations meet NDPA and GAID requirements efficiently and correctly for UHL, EHL, and OHL classifications.",
                features: [
                    "Comprehensive 6-week audit process",
                    "Privacy governance framework review",
                    "Website, web app, and mobile app analysis",
                    "Third-party data processor assessment",
                    "Regulatory audit report preparation",
                    "NDPC filing and trustmark issuance",
                ],
            },
            {
                id: "dpia-services",
                icon: FileCheck,
                title: "Data Protection Impact Assessment (DPIA)",
                description:
                    "Risk-prevention tool for high-risk data processing activities under NDPA and GAID requirements.",
                features: [
                    "Three-part test application (Purpose, Necessity, Balancing)",
                    "Structured templates and records",
                    "Safeguard recommendations",
                    "Documentation suitable for regulators",
                    "Risk mitigation strategies",
                    "Ongoing DPIA monitoring",
                ],
            },
            {
                id: "privacy-policies",
                icon: Lock,
                title: "Privacy Policies & Documentation",
                description:
                    "NDPA-aligned privacy policies that are practical and reflective of real operations.",
                features: [
                    "NDPA-compliant policy development",
                    "Privacy notice optimization",
                    "Contract review and modification",
                    "Data processing agreements",
                    "Employee privacy policies",
                    "Cookie and tracking policies",
                ],
            },
            {
                id: "registration-services",
                icon: Briefcase,
                title: "Data Controller/Processor Registration",
                description:
                    "Support for NDPC classification, registration, and annual renewals to avoid penalties or suspension.",
                features: [
                    "NDPC classification advisory (UHL, EHL, OHL)",
                    "Initial registration support",
                    "Annual renewal management",
                    "Filing reminders and deadlines",
                    "Regulator liaison services",
                    "Compliance audit return (CAR) preparation",
                ],
            },
            {
                id: "dpo-service",
                icon: Users,
                title: "Data Protection Officer (DPO) as a Service",
                description:
                    "Outsourced DPO services for organizations lacking internal capacity, providing ongoing compliance oversight.",
                features: [
                    "Compliance oversight and monitoring",
                    "Management advisory services",
                    "NDPC liaison and communication",
                    "Data subject request handling",
                    "Incident response guidance",
                    "Semi-annual data protection reports",
                ],
            },
        ],
        "security": [
            {
                id: "offensive-security",
                icon: Crosshair,
                title: "Offensive Security",
                description:
                    "Proactive security testing to identify vulnerabilities before attackers do, with comprehensive penetration testing and security assessments.",
                features: [
                    "External & Internal Network Penetration Testing",
                    "Web Application Security Testing (OWASP Top 10)",
                    "Mobile Application Security Assessment",
                    "API & Cloud Infrastructure Security Testing",
                    "Compliance-Aligned Testing (SOC 2, ISO 27001, PCI DSS)",
                    "Social Engineering & Phishing Simulation",
                    "Vulnerability Assessment & Risk Scoring",
                    "Detailed Reporting with Proof-of-Concept Evidence",
                    "Remediation Guidance & Fix Instructions",
                    "Retesting & Vulnerability Verification",
                ],
            },
        ],
        "ai-governance": [
            {
                id: "ai-governance-audit",
                icon: Brain,
                title: "AI Governance & ISO/IEC 42001 Readiness Audit",
                description:
                    "Structured assessment to help organisations understand and meet AI governance, risk, and regulatory requirements under global frameworks such as ISO/IEC 42001, the EU AI Act, and the NIST AI Risk Management Framework.",
                features: [
                    "Comprehensive 6–8 week assessment process",
                    "AI governance structure and accountability review",
                    "AI use-case, system, and model inventory analysis",
                    "AI lifecycle and risk management evaluation",
                    "Gap analysis against ISO/IEC 42001 and applicable regulations",
                    "Executive-level audit report and implementation roadmap",
                ],
            },
            {
                id: "ai-maturity",
                icon: Target,
                title: "AI Maturity Assessment",
                description:
                    "A structured evaluation of your organisation's AI governance posture and management across its operations.",
                features: [
                    "AI maturity scoring across governance, risk, data, lifecycle, and oversight",
                    "Use-case risk classification",
                    "Organisational readiness assessment",
                    "Benchmarking against industry and regulatory expectations",
                    "Prioritised improvement roadmap",
                    "Report for management",
                ],
            },
            {
                id: "ai-impact-assessment",
                icon: AlertTriangle,
                title: "AI Impact Assessment (AIIA)",
                description:
                    "Risk-prevention and accountability tool for AI systems with potential legal, ethical, or operational impact.",
                features: [
                    "AI system purpose and context assessment",
                    "Bias, fairness, and discrimination risk analysis",
                    "Transparency and explainability assessment",
                    "Human oversight and intervention analysis",
                    "Risk mitigation and control recommendations",
                    "Documentation suitable for regulators and auditors",
                ],
            },
            {
                id: "ai-policies",
                icon: FileText,
                title: "Responsible AI Policies & Documentation",
                description:
                    "Practical AI governance documentation aligned with real-world AI deployment and regulatory expectations.",
                features: [
                    "Responsible AI policy development",
                    "AI risk management framework",
                    "AI lifecycle and model governance documentation",
                    "Human-in-the-loop and escalation policies",
                    "AI transparency and disclosure documentation",
                    "Internal AI registers and system records",
                ],
            },
            {
                id: "ai-governance-officer",
                icon: UserCog,
                title: "AI Governance Officer as a Service",
                description:
                    "Outsourced AI governance leadership for organisations without internal AI governance capacity.",
                features: [
                    "Ongoing AI governance oversight and advisory",
                    "AI risk and use-case review support",
                    "Executive and product team advisory",
                    "Regulatory and supervisory engagement support",
                    "AI incident and escalation management",
                    "Periodic AI governance reporting",
                ],
            },
            {
                id: "vendor-ai-risk",
                icon: Network,
                title: "Third-Party & Vendor AI Risk Assessment",
                description:
                    "Assessment and monitoring of AI vendors, tools, APIs, and embedded models to reduce external AI risk exposure.",
                features: [
                    "AI vendor risk classification",
                    "Contractual and governance control review",
                    "Embedded and outsourced model assessments",
                    "Ongoing third-party AI monitoring",
                    "Risk mitigation and remediation guidance",
                    "Supplier governance documentation",
                ],
            },
            {
                id: "ai-incident-response",
                icon: Activity,
                title: "AI Incident, Failure & Model Drift Response",
                description:
                    "Preparation and response planning for AI-specific incidents and failures.",
                features: [
                    "AI incident and failure scenario planning",
                    "Model drift and performance degradation controls",
                    "Bias and hallucination incident response",
                    "Escalation and human intervention workflows",
                    "Incident documentation and reporting",
                    "Post-incident review and improvement actions",
                ],
            },
            {
                id: "ai-monitoring",
                icon: BarChart3,
                title: "Monitoring, Evaluation & Maintenance (AI-MEM)",
                description:
                    "Ongoing AI governance support to ensure AI systems remain compliant, ethical, and well-controlled over time.",
                features: [
                    "Continuous AI governance monitoring",
                    "Periodic AI risk and impact reviews",
                    "Key Performance Indicator (KPI) and Key Risk Indicator (KRI) tracking",
                    "Governance effectiveness assessments",
                    "Semi-annual AI governance health reports",
                    "Continuous improvement and regulatory updates",
                ],
            },
        ],
        "training": [
            {
                id: "training-awareness",
                icon: GraduationCap,
                title: "Data Protection Training & Awareness",
                description:
                    "Bespoke data protection training delivered team-by-team or organization-wide over 1-3 weeks.",
                features: [
                    "Privacy fundamentals training",
                    "Data processing principles",
                    "DPIA and third-party audit training",
                    "Data breach response procedures",
                    "Internal compliance monitoring",
                    "Specialized DPO certification training",
                ],
            },
            {
                id: "ai-training",
                icon: BookOpen,
                title: "AI Governance Training & Awareness Programs",
                description:
                    "Bespoke AI governance and responsible AI training delivered team-by-team or organisation-wide.",
                features: [
                    "AI governance fundamentals training",
                    "Responsible AI and ethical risk awareness",
                    "Product and engineering-focused AI governance training",
                    "Executive and board-level AI risk briefings",
                    "AI incident and escalation training",
                    "Role-specific training modules",
                ],
            },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#0f172a]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

                <div className="container-responsive relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-block px-4 py-2 mb-6 text-xs md:text-sm font-medium tracking-wider text-primary uppercase glass-panel rounded-full">
                            Our Services
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                            Comprehensive{" "}
                            <span className="text-gradient">
                                Compliance Solutions
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                            Expert guidance tailored to your specific
                            regulatory, security, and governance needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="section-padding bg-[#030712]">
                <div className="container-responsive">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    activeTab === category.id
                                        ? "bg-primary text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {services[activeTab].map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover group flex flex-col">
                                    <div className="mb-5 p-3 bg-primary/10 border border-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 icon-container icon-pulse">
                                        <service.icon className="h-7 w-7 text-primary" />
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 font-display group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="h-px w-full bg-white/10 mb-5" />
                                        <ul className="space-y-2.5">
                                            {service.features.map(
                                                (feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2.5"
                                                    >
                                                        <CheckCircle2 className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                                                        <span className="text-xs text-slate-300">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary/10 via-[#030712] to-[#030712] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />

                <div className="container-responsive relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                            Let's Build Your Compliance Strategy
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            Schedule a consultation to discuss how our services
                            can protect your organization and enable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] button-hover">
                                    Schedule Consultation
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/compliance">
                                <Button
                                    variant="outline"
                                    className="text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover"
                                >
                                    Our Process
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
