import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/cealed-removebg-preview_1769845234703.png";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/compliance", label: "NDPA Audit" },
    { href: "/industries", label: "Industries" },
    { href: "/training", label: "Training & DPO" },
    { href: "/techfest-live-event-2026", label: "Resources" },
];

export function Navbar() {
    const [location] = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isHomePage = location === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed ${isHomePage ? 'top-[44px]' : 'top-0'} z-[101] w-full transition-all duration-300 ${
                    scrolled
                        ? "bg-white border-b border-gray-200 py-2 sm:py-3 shadow-sm"
                        : "bg-[#0f172a] border-b border-white/10 py-3 sm:py-4"
                }`}
            >
                <div className="container-responsive">
                    <div className="flex h-12 items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 relative z-[60]"
                        >
                            <img
                                src={logo}
                                alt="Cealed Logo"
                                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Nav - Centered */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-xs font-medium uppercase tracking-wide transition-all duration-200 link-underline pb-1 ${
                                        location === link.href
                                            ? scrolled
                                                ? "text-black"
                                                : "text-white"
                                            : scrolled
                                            ? "text-gray-700 hover:text-black"
                                            : "text-slate-300 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Link href="/contact">
                                <Button
                                    variant="default"
                                    size="default"
                                    className="rounded-md button-hover shadow-sm w-auto"
                                >
                                    Schedule Consultation
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className={`lg:hidden relative z-[70] hover:text-primary focus:outline-none transition-colors duration-200 p-2 -mr-2 rounded-lg backdrop-blur-sm ${
                                scrolled
                                    ? "text-gray-700 bg-gray-100/50"
                                    : "text-white bg-black/20"
                            }`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <X className={`h-5 w-5 ${scrolled ? "text-gray-700" : "text-white"}`} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <Menu className="h-5 w-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 300,
                            }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#0f172a] border-l border-white/10 z-[105] lg:hidden shadow-xl overflow-y-auto"
                        >
                            <div className="flex flex-col min-h-full pt-20 pb-6 px-6">
                                {/* Close Button */}
                                <div className="absolute top-4 right-4">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2.5 text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 rounded-lg"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 space-y-2">
                                    {links.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: index * 0.04 + 0.08,
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block py-4 px-5 text-base font-semibold rounded-xl transition-all duration-200 ${
                                                    location === link.href
                                                        ? "text-white bg-primary shadow-lg"
                                                        : "text-slate-300 hover:text-white hover:bg-white/10"
                                                }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-6 border-t border-white/10 mt-6"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Button
                                            size="lg"
                                            className="w-full font-semibold rounded-xl bg-primary hover:bg-primary/90 py-4 text-base"
                                        >
                                            Schedule Consultation
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
