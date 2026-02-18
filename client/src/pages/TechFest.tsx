import { useState } from "react";
import { motion } from "framer-motion";
import {
    Download,
    CheckCircle2,
    Sparkles,
    Calendar,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIReadinessQuiz } from "@/components/AIReadinessQuiz";
import techFestImage from "@/assets/cealed-can.png";

export default function TechFest() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formsubmit.co/ajax/83d6604566d31d64b52e8124731600aa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    service: formData.service,
                    _subject: "Lagos Tech Fest 2026 - Brochure Download",
                    _captcha: "false"
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);

                // Download document
                const link = document.createElement("a");
                link.href = "/cealed-company-profile.pdf";
                link.download = "Cealed-Company-Profile.pdf";
                link.click();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

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
                            Sealing compliance gaps, one African business at a time
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 max-w-7xl mx-auto">
                        {/* Left: Image & Event Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full min-w-0"
                        >
                            <div className="mb-6 sm:mb-8 overflow-hidden rounded-lg sm:rounded-2xl">
                                <img
                                    src={techFestImage}
                                    alt="Lagos Tech Fest 2026"
                                    className="w-full h-32 sm:h-48 md:h-56 lg:h-auto max-w-full object-cover"
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

                        {/* Right: Download Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bg-gradient-to-br from-primary/20 to-transparent p-1 rounded-lg sm:rounded-2xl sticky top-24">
                                <div className="bg-[#1e293b] rounded-lg sm:rounded-2xl p-4 sm:p-8 border border-primary/20">
                                    {!submitted ? (
                                        <>
                                            <div className="text-center mb-6 sm:mb-8">
                                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 font-display">
                                                    Download Cealed's E-brochure
                                                </h2>
                                                <p className="text-sm sm:text-base text-slate-400">
                                                    Learn more about our compliance services
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-white mb-2">
                                                        Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                                        placeholder="Your full name"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-white mb-2">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-white mb-2">
                                                        Interested Service *
                                                    </label>
                                                    <select
                                                        required
                                                        value={formData.service}
                                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                                    >
                                                        <option value="" className="bg-[#1e293b]">Select a service</option>
                                                        <option value="AI Governance" className="bg-[#1e293b]">AI Governance</option>
                                                        <option value="NDPC Audits" className="bg-[#1e293b]">NDPC Audits</option>
                                                        <option value="Offensive Security" className="bg-[#1e293b]">Offensive Security</option>
                                                        <option value="Privacy Programme Implementation" className="bg-[#1e293b]">Privacy Programme Implementation</option>
                                                    </select>
                                                </div>

                                                <Button
                                                    type="submit"
                                                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 sm:py-6 text-sm sm:text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                                                >
                                                    <Download className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                                                    Download Brochure
                                                </Button>
                                            </form>
                                        </>
                                    ) : (
                                        <div className="text-center py-12">
                                            <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
                                            <h3 className="text-3xl font-bold text-white mb-3 font-display">
                                                Thank You!
                                            </h3>
                                            <p className="text-slate-400 text-lg mb-8">
                                                Your download should start automatically. We'll be in touch soon!
                                            </p>
                                        </div>
                                    )}
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
                        <p className="text-slate-300 text-lg">
                            Assess your organization's AI readiness in 5 minutes
                        </p>
                    </motion.div>
                    <AIReadinessQuiz />
                </div>
            </section>
        </div>
    );
}
