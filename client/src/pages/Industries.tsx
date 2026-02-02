import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import {
    Landmark,
    Stethoscope,
    Smartphone,
    ShoppingCart,
    Briefcase,
    Zap,
    ArrowRight,
    Globe,
    Target,
    TrendingUp,
    Brain,
    Wheat,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Industries() {
    const industries = [
        {
            icon: Landmark,
            title: "Financial Services & Fintech",
            desc: "Comprehensive compliance for banking, payments, lending (micro, SME, and crypto lending), and financial technology platforms.",
        },
        {
            icon: Stethoscope,
            title: "Health Technology",
            desc: "Protecting sensitive health data in digital health solutions, telemedicine platforms, and health-tech applications.",
        },
        {
            icon: Brain,
            title: "Artificial Intelligence",
            desc: "Navigating complex AI governance, algorithmic accountability, and data processing requirements for AI-driven solutions.",
        },
        {
            icon: ShoppingCart,
            title: "Cryptocurrency & Blockchain",
            desc: "Specialized compliance for crypto exchanges, blockchain platforms, and digital asset management services.",
        },
        {
            icon: Wheat,
            title: "Agricultural Technology",
            desc: "Data protection for agri-tech platforms, farm management systems, and agricultural data processing solutions.",
        },
        {
            icon: Smartphone,
            title: "Telecommunications",
            desc: "Managing massive subscriber datasets with robust privacy architecture and telecommunications-specific compliance.",
        },
        {
            icon: Globe,
            title: "Social Media Platforms",
            desc: "Privacy-first approaches for social platforms, user-generated content, and community-driven applications.",
        },
        {
            icon: Briefcase,
            title: "Insurtech",
            desc: "Insurance technology compliance, risk assessment data protection, and regulatory alignment for insurtech solutions.",
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
                            Industries We Serve
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                            Specialized{" "}
                            <span className="text-gradient">
                                Industry Expertise
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                            Deep knowledge for sectors where data privacy and
                            regulatory compliance are mission-critical.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section-padding bg-[#030712]">
                <div className="container-responsive">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover group">
                                    <div className="mb-5 p-3 bg-primary/10 border border-primary/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                                        <industry.icon className="h-7 w-7 text-primary" />
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-display group-hover:text-primary transition-colors">
                                        {industry.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {industry.desc}
                                    </p>

                                    <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Learn More</span>
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Industry-Specific Matters */}
            <section className="section-padding bg-[#020617]">
                <div className="container-responsive">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
                    >
                        <SectionHeader
                            title="Why Industry-Specific Expertise Matters"
                            subtitle="Generic compliance advice doesn't account for unique sector challenges"
                            className="text-white"
                        />
                        <p className="text-base md:text-lg text-slate-400 leading-relaxed mt-6">
                            Our team understands the nuances, threat landscapes,
                            and regulatory expectations specific to your
                            sector—making the difference between checking boxes
                            and building resilient systems.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: Globe,
                                number: "6+",
                                label: "Industry Sectors",
                            },
                            {
                                icon: Target,
                                number: "500+",
                                label: "Organizations Served",
                            },
                            {
                                icon: TrendingUp,
                                number: "98%",
                                label: "Compliance Success",
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 md:p-8 text-center bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-primary/40 transition-all duration-300 card-hover">
                                    <div className="icon-container icon-bounce inline-block mb-4">
                                        <stat.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm md:text-base text-slate-400">
                                        {stat.label}
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
                            Is Your Industry Listed?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            Even if your sector isn't mentioned above, we bring
                            cross-industry insights and adaptable frameworks to
                            meet your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] button-hover">
                                    Discuss Your Needs
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button
                                    variant="outline"
                                    className="text-white border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm button-hover"
                                >
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
