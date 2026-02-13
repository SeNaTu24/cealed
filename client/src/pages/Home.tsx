import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedLock } from "@/components/AnimatedLock";
import {
    Shield,
    FileCheck,
    Lock,
    ArrowRight,
    CheckCircle2,
    Users,
    Globe,
    TrendingUp,
    ShieldCheck,
    Target,
    Briefcase,
    Award,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section with Animated Lock */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a] px-4 sm:px-6 pt-20">
                <div className="container mx-auto max-w-7xl relative z-10 py-12 md:py-0 px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl mt-8"
                        >
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary uppercase glass-panel rounded-full"
                            >
                                Trust • Security • Compliance
                            </motion.span>

                            <h1 className="mb-6">
                                <motion.span 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
                                >
                                    Sealing compliance gaps,
                                </motion.span>
                                <motion.span 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="block text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-50 to-primary bg-clip-text text-transparent leading-tight"
                                >
                                    one African business at a time
                                </motion.span>
                            </h1>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-base sm:text-lg text-blue-100/90 max-w-xl mb-8 leading-relaxed"
                            >
                                Trusted advisory firm helping organizations
                                across Africa comply with data protection laws,
                                strengthen cybersecurity governance, and manage
                                privacy risks in modern digital operations.
                            </motion.p>

                            {/* Key Points */}
                            <div className="space-y-2.5 mb-8">
                                {[
                                    "NDPA & GDPR Compliance Expertise",
                                    "Financial Services & Fintech Focus",
                                    "Cross-border Data Flow Management",
                                ].map((point, index) => (
                                    <motion.div
                                        key={point}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.6 + index * 0.1,
                                            duration: 0.5,
                                        }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                        </div>
                                        <span className="text-sm sm:text-base text-blue-50 font-medium">
                                            {point}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                            >
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto"
                                >
                                    <Button 
                                        size="lg"
                                        className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        Schedule Consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link
                                    href="/services"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white rounded-lg backdrop-blur-sm"
                                    >
                                        Our Services
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Animated Lock Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:flex items-center justify-center h-[600px]"
                        >
                            <AnimatedLock />
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                        Explore
                    </span>
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            </section>

            {/* Trust Frameworks */}
            <section className="py-12 md:py-16 bg-[#0f172a] border-y border-blue-800">
                <div className="container-responsive">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                            Regulatory Frameworks We Master
                        </p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 lg:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-700">
                        {[
                            "NDPA",
                            "GDPR",
                            "ISO 27001",
                            "PCI-DSS",
                            "NIST",
                            "SOC 2",
                        ].map((brand, index) => (
                            <motion.span
                                key={brand}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-base sm:text-lg lg:text-xl font-bold tracking-wider text-white font-display hover:text-primary transition-colors"
                            >
                                {brand}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-12 md:py-20 bg-[#0f172a] relative">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6">
                    <SectionHeader
                        title="Strategic Compliance Services"
                        subtitle="Comprehensive advisory for high-growth organizations navigating complex regulatory landscapes"
                        className="text-white"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {[
                            {
                                icon: Shield,
                                title: "Data Protection Advisory",
                                desc: "Sophisticated privacy engineering, impact assessments, and data governance frameworks tailored for complex environments.",
                                features: [
                                    "Privacy Impact Assessments",
                                    "Data Mapping & Classification",
                                    "Consent Management",
                                ],
                            },
                            {
                                icon: FileCheck,
                                title: "Regulatory Compliance",
                                desc: "Strategic alignment with NDPA, GDPR, and sector-specific regulations across African jurisdictions.",
                                features: [
                                    "NDPA Compliance",
                                    "GDPR Alignment",
                                    "Regulatory Audits",
                                ],
                            },
                            {
                                icon: Lock,
                                title: "Cybersecurity Governance",
                                desc: "Enterprise-grade security frameworks, risk management, and incident response protocols.",
                                features: [
                                    "ISO 27001 Implementation",
                                    "Risk Assessments",
                                    "Security Audits",
                                ],
                            },
                            {
                                icon: Users,
                                title: "DPO Services",
                                desc: "Certified Data Protection Officers providing ongoing oversight and compliance monitoring.",
                                features: [
                                    "Virtual DPO",
                                    "DPO Training",
                                    "Compliance Monitoring",
                                ],
                            },
                            {
                                icon: Briefcase,
                                title: "Vendor Risk Management",
                                desc: "Third-party security assessments and vendor compliance certification programs.",
                                features: [
                                    "Vendor Assessments",
                                    "Due Diligence",
                                    "Contract Reviews",
                                ],
                            },
                            {
                                icon: Target,
                                title: "Training & Awareness",
                                desc: "Executive workshops and staff training on data protection and cybersecurity best practices.",
                                features: [
                                    "Executive Briefings",
                                    "Staff Training",
                                    "Custom Workshops",
                                ],
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full p-6 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-200 card-hover group">
                                    <div className="mb-4 p-2.5 bg-primary/10 border border-primary/20 rounded-lg w-fit group-hover:scale-105 transition-transform duration-200 icon-container">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-display-sm text-white mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-body-sm text-slate-400 mb-4">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-xs text-slate-500"
                                            >
                                                <CheckCircle2 className="h-3.5 w-3.5 text-primary/60 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 text-center"
                    >
                        <Link href="/services">
                            <Button
                                variant="outline"
                                className="text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover"
                            >
                                View All Services
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Cealed */}
            <section className="section-padding bg-slate-900 relative">
                <div className="container-responsive">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeader
                                title="Why Leading Organizations Choose Cealed"
                                subtitle="Trusted by forward-thinking companies across Africa"
                                align="left"
                                className="text-white"
                            />

                            <div className="space-y-6 mt-8">
                                {[
                                    {
                                        icon: ShieldCheck,
                                        title: "Proven Expertise",
                                        desc: "Certified professionals with deep expertise in African regulatory landscapes and international standards.",
                                    },
                                    {
                                        icon: Globe,
                                        title: "Pan-African Coverage",
                                        desc: "Comprehensive knowledge of data protection laws across Nigeria, Kenya, South Africa, and beyond.",
                                    },
                                    {
                                        icon: Award,
                                        title: "Industry Recognition",
                                        desc: "Accredited by leading certification bodies and trusted by multinational corporations.",
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4 p-4 glass-panel rounded-lg hover:bg-white/10 transition-all duration-200"
                                    >
                                        <div className="shrink-0 p-2.5 bg-primary/10 border border-primary/20 rounded-lg h-fit">
                                            <item.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-display-sm text-white mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-body-sm text-slate-400">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                {
                                    value: "500+",
                                    label: "Clients Served",
                                    icon: Users,
                                },
                                {
                                    value: "98%",
                                    label: "Compliance Rate",
                                    icon: Target,
                                },
                                {
                                    value: "3+",
                                    label: "Years Experience",
                                    icon: Award,
                                },
                                {
                                    value: "20+",
                                    label: "Countries",
                                    icon: Globe,
                                },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="p-6 text-center bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-200 card-hover">
                                        <div className="icon-container inline-block mb-3">
                                            <stat.icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-display">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="section-padding bg-slate-950 relative">
                <div className="container-responsive">
                    <SectionHeader
                        title="Our Proven Process"
                        subtitle="A systematic approach to achieving and maintaining compliance"
                        className="text-white"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Assessment",
                                desc: "Comprehensive audit of your current compliance posture and risk profile.",
                            },
                            {
                                step: "02",
                                title: "Strategy Development",
                                desc: "Tailored compliance roadmap aligned with your business objectives.",
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Hands-on support deploying policies, controls, and documentation.",
                            },
                            {
                                step: "04",
                                title: "Monitoring & Support",
                                desc: "Ongoing oversight, training, and continuous improvement.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-primary to-transparent" />
                                )}
                                <div className="glass-panel p-5 rounded-lg hover:bg-white/10 transition-all duration-200 h-full">
                                    <div className="text-4xl font-bold text-primary/20 mb-3 font-display">
                                        {item.step}
                                    </div>
                                    <h3 className="text-display-sm text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-body-sm text-slate-400">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <Link href="/compliance">
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover"
                            >
                                Learn More About Our Process
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-gradient-to-br from-primary/10 via-[#030712] to-[#030712] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />

                <div className="container-responsive relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-display-lg text-white mb-6">
                            Ready to Seal Your Compliance?
                        </h2>
                        <p className="text-body-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with our compliance experts
                            and discover how we can protect your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] button-hover">
                                    Get Started Today
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    variant="outline"
                                    className="text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover"
                                >
                                    Learn About Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
