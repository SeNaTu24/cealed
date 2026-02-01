import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
    CheckCircle,
    GraduationCap,
    Users,
    BookOpen,
    Award,
} from "lucide-react";

export default function Training() {
    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-24 bg-gradient-to-b from-[#020617] via-slate-900 to-black">
            {/* Header */}
            <section className="container-responsive mb-8 sm:mb-12 md:mb-16">
                <SectionHeader
                    title="Training & DPO Services"
                    subtitle="Building a culture of privacy through education and expert leadership."
                />
            </section>

            {/* Main Training Cards */}
            <section className="container-responsive mb-12 sm:mb-16 md:mb-24">
                <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
                    {/* Training Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-2xl md:rounded-3xl shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2" />

                        <div className="relative">
                            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/20 rounded-lg sm:rounded-xl md:rounded-2xl mb-4 sm:mb-6">
                                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                            </div>

                            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 font-display">
                                Corporate Training
                            </h3>
                            <p className="text-slate-300 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                                Bespoke data protection training delivered team-by-team or organization-wide over 1-3 weeks, flexibly:
                            </p>

                            <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10">
                                {[
                                    "Privacy fundamentals training",
                                    "Data processing principles",
                                    "DPIA and third-party audit training",
                                    "Data breach response procedures",
                                    "Internal compliance monitoring",
                                    "Specialized DPO certification training",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start space-x-2 sm:space-x-3"
                                    >
                                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary shrink-0 mt-0.5" />
                                        <span className="font-medium text-xs sm:text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact">
                                <Button className="w-full h-10 sm:h-12 md:h-14 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm sm:text-base button-hover rounded-lg md:rounded-xl">
                                    Request Training Brochure
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* DPO Services Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-2xl md:rounded-3xl shadow-xl"
                    >
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg sm:rounded-xl md:rounded-2xl mb-4 sm:mb-6">
                            <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                        </div>

                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-white font-display">
                            DPO as a Service
                        </h3>
                        <p className="text-slate-300 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                            Cealed offers outsourced DPO services for organizations that lack internal capacity, providing ongoing compliance oversight and expert guidance.
                        </p>

                        <div className="space-y-3 sm:space-y-4 md:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
                            <div className="flex gap-2 sm:gap-3 md:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs sm:text-sm md:text-base shrink-0">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">
                                        Compliance Oversight
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                        Oversees compliance and advises management on data protection matters.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 sm:gap-3 md:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs sm:text-sm md:text-base shrink-0">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">
                                        NDPC Liaison
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                        Acts as liaison with NDPC and handles data subject requests.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 sm:gap-3 md:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs sm:text-sm md:text-base shrink-0">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">
                                        Incident Response
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                        Provides incident response guidance and delivers compliance reports.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact">
                            <Button className="w-full h-10 sm:h-12 md:h-14 shadow-lg shadow-primary/20 button-hover rounded-lg md:rounded-xl font-semibold text-sm sm:text-base">
                                Hire a Virtual DPO
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Additional Training Features */}
            <section className="container-responsive">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Why Choose Our Training?
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                            Practical, engaging, and tailored to your
                            organization's specific needs and compliance
                            requirements.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: "Practical Content",
                                desc: "Real-world scenarios and case studies relevant to your industry",
                            },
                            {
                                icon: Users,
                                title: "Interactive Sessions",
                                desc: "Engaging workshops with Q&A and hands-on exercises",
                            },
                            {
                                icon: Award,
                                title: "Certification",
                                desc: "Participants receive certificates of completion for their records",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg md:rounded-xl mb-4 md:mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 font-display">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-responsive mt-16 md:mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 font-display">
                        Ready to Build Your Privacy Culture?
                    </h2>
                    <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
                        Let's discuss your training needs and create a
                        customized program for your team.
                    </p>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="h-12 md:h-14 px-8 md:px-12 bg-white text-primary hover:bg-slate-100 font-bold button-hover shadow-xl w-full sm:w-auto"
                        >
                            Schedule a Consultation
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
