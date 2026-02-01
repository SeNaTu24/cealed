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
];

export function Navbar() {
    const [location] = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                    scrolled
                        ? "bg-background/90 backdrop-blur-xl border-b border-white/10 py-2 sm:py-2 md:py-3 shadow-lg shadow-black/5"
                        : "bg-transparent py-3 sm:py-4 md:py-6"
                }`}
            >
                <div className="container-responsive">
                    <div className="flex h-11 sm:h-12 md:h-14 items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 relative z-[60]"
                        >
                            <img
                                src={logo}
                                alt="Cealed Logo"
                                className="h-8 sm:h-10 md:h-12 w-auto object-contain invert transition-transform duration-300 hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Nav - Centered */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10 absolute left-1/2 transform -translate-x-1/2">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-xs font-medium uppercase tracking-wide transition-all duration-300 link-underline pb-1 ${
                                        location === link.href
                                            ? "text-primary"
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
                                    size="lg"
                                    className="rounded-md button-hover shadow-lg w-auto"
                                >
                                    Schedule Consultation
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="lg:hidden relative z-[70] text-white hover:text-primary focus:outline-none transition-colors duration-300 p-3 -mr-2 bg-black/20 rounded-lg backdrop-blur-sm"
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
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-8 w-8 text-white" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-8 w-8" />
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
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-background/98 backdrop-blur-2xl border-l border-white/10 z-[60] lg:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full pt-24 pb-8 px-6">
                                {/* Navigation Links */}
                                <nav className="flex-1 space-y-2">
                                    {links.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: index * 0.05 + 0.1,
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block py-3 px-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                                                    location === link.href
                                                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                                                        : "text-slate-300 hover:text-white hover:bg-white/5 hover:translate-x-1"
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
                                    transition={{ delay: 0.4 }}
                                    className="pt-6 border-t border-white/10"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Button className="w-full h-12 text-sm font-semibold rounded-lg bg-primary hover:bg-primary/90 button-hover shadow-lg shadow-primary/30">
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
