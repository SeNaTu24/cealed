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
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Services() {
    const services = [
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
            id: "training-awareness",
            icon: GraduationCap,
            title: "Training & Awareness Programs",
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
    ];

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

            {/* Services Grid */}
            <section className="section-padding bg-[#030712]">
                <div className="container-responsive">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
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
                                            {service.features.slice(0, 4).map(
                                                (feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2.5"
                                                    >
                                                        <CheckCircle2 className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                                                        <span className="text-xs text-slate-500">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                            {service.features.length > 4 && (
                                                <li className="text-xs text-primary/60 italic pt-1">
                                                    +{service.features.length - 4} more features
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
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
