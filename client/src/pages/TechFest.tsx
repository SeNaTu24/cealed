import { motion } from "framer-motion";
import {
    Sparkles,
    Calendar,
    MapPin,
    Download,
} from "lucide-react";
import { AIReadinessQuiz } from "@/components/AIReadinessQuiz";
import techFestImage from "@/assets/cealed-can.png";

export default function TechFest() {
    return (
        <div className="min-h-screen bg-[#1e293b] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden">
                <div className="mx-auto px-2 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto mb-8 sm:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-blue-600/20 border border-blue-400/40 rounded-full">
                            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-blue-300" />
                            <span className="text-xs sm:text-sm font-medium text-blue-200">
                                Proud Sponsor
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 font-display px-2">
                            Lagos Tech Fest 2026
                        </h1>
                        <p className="text-base sm:text-xl text-slate-300 px-2">
                            Sealing compliance gaps, one African business at a
                            time
                        </p>
                    </motion.div>

                    {/* Event Info */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="mb-6 sm:mb-8 overflow-hidden rounded-lg sm:rounded-2xl">
                                <img
                                    src={techFestImage}
                                    alt="Lagos Tech Fest 2026"
                                    className="w-full h-48 sm:h-64 md:h-80 object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-display">
                                    About Lagos Tech Fest
                                </h2>
                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    Now in its 6th year, Lagos Tech Fest annually gathers enterprise tech leaders,
                                    emerging startups, innovators, investors, and government representatives to shape the
                                    future of Nigeria's tech ecosystem.
                                </p>

                                <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                                        Visit Cealed's Stand!
                                    </h3>
                                    <p className="text-slate-300 text-xs sm:text-sm mb-2 sm:mb-3">
                                        Pick a mystery number and stand a chance to win{" "}
                                        <span className="text-blue-300 font-bold">₦100,000</span>{" "}
                                        + additional gifts throughout the day.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Calendar className="h-5 w-5 text-blue-400" />
                                        <span className="font-semibold">18th February 2026 • 8:00 AM</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <MapPin className="h-5 w-5 text-blue-400" />
                                        <span>Landmark Event Centre, Lagos</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Readiness Check */}
            <section className="py-16 bg-[#0f172a]">
                <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
                            AI Governance & Data Privacy Readiness Check
                        </h2>
                        <p className="text-slate-300 text-lg mb-2">
                            Complete this 5-minute assessment and get your readiness score
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full">
                            <Download className="h-4 w-4 text-primary" />
                            <span className="text-sm text-primary font-semibold">
                                + Download our E-brochure upon completion
                            </span>
                        </div>
                    </motion.div>
                    <AIReadinessQuiz />
                </div>
            </section>
        </div>
    );
}
