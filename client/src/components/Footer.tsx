import { Link } from "wouter";
import { motion } from "framer-motion";
import logo from "@assets/cealed-removebg-preview_1769845234703.png";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Send,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-black text-slate-200 overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Newsletter Section */}
            <div className="relative border-b border-white/10">
                <div className="container-responsive section-padding">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
                            Stay Compliance Ready
                        </h3>
                        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                            Get monthly insights on data protection regulations,
                            cybersecurity best practices, and NDPA updates.
                        </p>

                        <form
                            onSubmit={handleNewsletterSubmit}
                            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12 sm:h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary focus:ring-primary rounded-lg flex-1"
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="h-12 sm:h-14 px-8 font-semibold rounded-lg button-hover shadow-lg shadow-primary/20 w-full sm:w-auto"
                            >
                                Subscribe
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative container-responsive py-16 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Company Info - Spans 4 columns */}
                    <div className="lg:col-span-4 space-y-6">
                        <img
                            src={logo}
                            alt="Cealed Logo"
                            className="h-10 w-auto brightness-0 invert opacity-90"
                        />
                        <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                            Your trusted partner for Data Protection, NDPA
                            Compliance, and Cybersecurity Governance across
                            Africa. Building digital trust, one policy at a
                            time.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="group p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="group p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Services - Spans 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center">
                            <span className="h-px w-4 bg-primary mr-2"></span>
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: "Data Protection", href: "/services" },
                                { label: "NDPA Compliance", href: "/services" },
                                { label: "Cybersecurity", href: "/services" },
                                { label: "DPO Training", href: "/training" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company - Spans 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center">
                            <span className="h-px w-4 bg-primary mr-2"></span>
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Our Process", href: "/compliance" },
                                { label: "Industries", href: "/industries" },
                                { label: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Spans 4 columns */}
                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center">
                            <span className="h-px w-4 bg-primary mr-2"></span>
                            Get in Touch
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3 group">
                                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-slate-400">
                                    Victoria Island
                                    <br />
                                    Lagos, Nigeria
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Phone className="h-5 w-5 shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
                                <a
                                    href="tel:+2340123456789"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    +234 (0) 123 456 7890
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Mail className="h-5 w-5 shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
                                <a
                                    href="mailto:info@cealed.com"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    info@cealed.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-white/10">
                <div className="container-responsive py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>
                            &copy; {new Date().getFullYear()} Cealed. All rights
                            reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
