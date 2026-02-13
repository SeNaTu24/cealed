import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    align = "center",
    className = "",
}: SectionHeaderProps) {
    return (
        <div
            className={`mb-8 sm:mb-10 lg:mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-display-lg text-foreground"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className={`mt-3 text-body text-slate-400 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
                >
                    {subtitle}
                </motion.p>
            )}
            <div
                className={`mt-3 h-1 w-16 bg-primary rounded-full ${align === "center" ? "mx-auto" : ""}`}
            />
        </div>
    );
}
