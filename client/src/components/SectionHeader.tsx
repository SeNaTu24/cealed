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
            className={`mb-6 sm:mb-8 md:mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`mt-2 sm:mt-3 md:mt-4 text-sm xs:text-base sm:text-base md:text-lg text-slate-400 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
                >
                    {subtitle}
                </motion.p>
            )}
            <div
                className={`mt-3 md:mt-4 h-1 w-12 sm:w-16 md:w-20 bg-primary rounded-full ${align === "center" ? "mx-auto" : ""}`}
            />
        </div>
    );
}
