import { useState } from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle2, Sparkles, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import techFestImage from "@/assets/tchfst.jpg";

export default function TechFest() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formDataToSend = new FormData(form);

        try {
            await fetch("https://formsubmit.co/solusesi03@gmail.com", {
                method: "POST",
                body: formDataToSend,
            });
            
            setSubmitted(true);
            
            // Download document
            const link = document.createElement("a");
            link.href = "/cealed-company-profile.pdf";
            link.download = "Cealed-Company-Profile.pdf";
            link.click();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#1e293b]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container-responsive relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/30 rounded-full">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Proud Sponsor</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
                            Lagos Tech Fest 2026
                        </h1>
                        <p className="text-xl text-slate-300">
                            Sealing compliance gaps, one African business at a time
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {/* Left: Image & Event Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Event Image */}
                            <div className="relative group mb-8">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                                <img
                                    src={techFestImage}
                                    alt="Lagos Tech Fest"
                                    className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                                />
                            </div>

                            {/* Event Details */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                                    About Lagos Tech Fest
                                </h3>
                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    Now in its 6th year, Lagos Tech Fest annually gathers enterprise tech leaders, emerging startups, innovators, investors, and government representatives to shape the future of Nigeria's tech ecosystem.
                                </p>
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    Combining conferences, roundtables, exhibitions and networking, the event creates a platform that drives investments into the ecosystem.
                                </p>
                                
                                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
                                    <h4 className="text-lg font-bold text-white mb-3">Visit Cealed's Stand!</h4>
                                    <p className="text-slate-300 text-sm mb-3">
                                        Pick a mystery number and stand a chance to win <span className="text-primary font-bold">₦100,000</span> + additional gifts throughout the day.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        <span className="font-semibold">18th February 2026 • 8:00 AM</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <MapPin className="h-5 w-5 text-primary" />
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
                            <div className="bg-gradient-to-br from-primary/20 to-transparent p-1 rounded-2xl sticky top-24">
                                <div className="bg-[#1e293b] rounded-2xl p-8 border border-primary/20">
                                    {!submitted ? (
                                        <>
                                            <div className="text-center mb-8">
                                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">
                                                    Download Cealed's E-brochure
                                                </h2>
                                                <p className="text-slate-400">
                                                    Learn more about our compliance services
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                <input type="hidden" name="_subject" value="Lagos Tech Fest 2026 - Lead" />
                                                <input type="hidden" name="_captcha" value="false" />
                                                <input type="hidden" name="_template" value="table" />

                                                <div>
                                                    <label className="block text-sm font-medium text-white mb-2">
                                                        Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, name: e.target.value })
                                                        }
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
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, email: e.target.value })
                                                        }
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-white mb-2">
                                                        Interested Service *
                                                    </label>
                                                    <select
                                                        name="service"
                                                        required
                                                        value={formData.service}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, service: e.target.value })
                                                        }
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                                    >
                                                        <option value="" className="bg-[#1e293b]">Select a service</option>
                                                        <option value="AI Governance" className="bg-[#1e293b]">AI Governance</option>
                                                        <option value="NDPC Audits" className="bg-[#1e293b]">NDPC Audits</option>
                                                        <option value="Offensive Security" className="bg-[#1e293b]">Offensive Security</option>
                                                        <option value="Privacy Programme Implementation" className="bg-[#1e293b]">
                                                            Privacy Programme Implementation
                                                        </option>
                                                    </select>
                                                </div>

                                                <Button
                                                    type="submit"
                                                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                                                >
                                                    <Download className="mr-2 h-5 w-5" />
                                                    Download Cealed's E-brochure
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
                                            <p className="text-slate-500">
                                                Explore our website to learn more about our services
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
