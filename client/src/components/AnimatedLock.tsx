import { useState } from "react";
import { motion } from "framer-motion";

export function AnimatedLock() {
    const [isHovered, setIsHovered] = useState(false);

    const threats = [
        {
            text: "Data Breach",
            position: { top: "15%", left: "10%" },
            delay: 0,
        },
        {
            text: "Identity Theft",
            position: { top: "25%", right: "15%" },
            delay: 0.1,
        },
        {
            text: "Ransomware",
            position: { bottom: "30%", left: "5%" },
            delay: 0.2,
        },
        {
            text: "GDPR Violations",
            position: { top: "45%", right: "5%" },
            delay: 0.3,
        },
        {
            text: "Financial Fraud",
            position: { bottom: "15%", right: "20%" },
            delay: 0.4,
        },
        {
            text: "Privacy Loss",
            position: { top: "60%", left: "15%" },
            delay: 0.5,
        },
    ];

    return (
        <div
            className="relative w-full h-full flex items-center justify-center cursor-pointer select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: isHovered
                            ? [0, 0.5, 0.5, 0]
                            : [0, 0.3, 0.3, 0],
                        scale: isHovered
                            ? [0.8, 1.4, 1.4, 1.6]
                            : [0.8, 1.2, 1.2, 1.4],
                    }}
                    transition={{
                        duration: 2,
                        times: [0, 0.3, 0.7, 1],
                        ease: "easeOut",
                    }}
                    className={`rounded-full blur-3xl transition-colors duration-300 ${
                        isHovered ? "bg-red-500/30" : "bg-primary/20"
                    } w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64`}
                />
            </div>

            {/* Security Threats */}
            {threats.map((threat, index) => (
                <motion.div
                    key={threat.text}
                    className="absolute z-20 px-3 py-2 bg-red-600/90 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg backdrop-blur-sm border border-red-500/50"
                    style={threat.position}
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? [0, 1.2, 1] : 0,
                        rotate: isHovered ? [0, 5, 0] : -10,
                        y: isHovered ? [10, -5, 0] : 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: isHovered ? threat.delay : 0,
                        ease: "backOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                        {threat.text}
                    </div>
                    {/* Threat Arrow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            className="w-px h-8 bg-red-400/60"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: isHovered ? 1 : 0 }}
                            transition={{
                                delay: threat.delay + 0.2,
                                duration: 0.3,
                            }}
                            style={{
                                transformOrigin: threat.position.top
                                    ? "bottom"
                                    : "top",
                                [threat.position.top ? "top" : "bottom"]:
                                    "100%",
                            }}
                        />
                    </div>
                </motion.div>
            ))}

            {/* Main Lock SVG */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 transition-all duration-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
                style={{
                    filter: isHovered
                        ? "drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))"
                        : "none",
                }}
            >
                {/* Geometric Pattern Background */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 20 0 L 0 0 0 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-primary/30"
                            />
                        </pattern>
                    </defs>
                    <rect
                        x="120"
                        y="100"
                        width="160"
                        height="300"
                        fill="url(#grid)"
                    />
                </motion.g>

                {/* Lock Body */}
                <motion.rect
                    x="130"
                    y="230"
                    width="140"
                    height="180"
                    rx="12"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className={`transition-colors duration-300 ${
                        isHovered ? "text-red-400" : "text-white"
                    }`}
                    animate={{
                        strokeWidth: isHovered ? 4 : 3,
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Lock Shackle - Opens on hover */}
                <motion.path
                    d="M 150 230 L 150 160 C 150 125 170 105 200 105 C 230 105 250 125 250 160 L 250 230"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className={`transition-colors duration-300 ${
                        isHovered ? "text-red-400" : "text-white"
                    }`}
                    strokeLinecap="round"
                    animate={{
                        d: isHovered
                            ? "M 150 230 L 150 160 C 150 125 170 105 200 105 C 230 105 250 125 250 160 L 250 140"
                            : "M 150 230 L 150 160 C 150 125 170 105 200 105 C 230 105 250 125 250 160 L 250 230",
                        strokeWidth: isHovered ? 4 : 3,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Inner Shackle Detail */}
                <motion.path
                    d="M 165 230 L 165 165 C 165 140 177 128 200 128 C 223 128 235 140 235 165 L 235 230"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className={`transition-colors duration-300 ${
                        isHovered ? "text-red-300" : "text-primary"
                    }`}
                    strokeLinecap="round"
                    animate={{
                        d: isHovered
                            ? "M 165 230 L 165 165 C 165 140 177 128 200 128 C 223 128 235 140 235 165 L 235 145"
                            : "M 165 230 L 165 165 C 165 140 177 128 200 128 C 223 128 235 140 235 165 L 235 230",
                        opacity: isHovered ? 0.8 : 0.6,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Keyhole - Changes color on hover */}
                <motion.g
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <circle
                        cx="200"
                        cy="300"
                        r="18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        className={`transition-colors duration-300 ${
                            isHovered ? "text-red-400" : "text-primary"
                        }`}
                    />
                    <path
                        d="M 200 315 L 195 350 L 205 350 L 200 315 Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        className={`transition-colors duration-300 ${
                            isHovered ? "text-red-400" : "text-primary"
                        }`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.g>

                {/* Corner Accents - Pulse on hover */}
                <motion.g
                    animate={{
                        opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4,
                    }}
                    transition={{
                        duration: isHovered ? 1 : 0.3,
                        repeat: isHovered ? Infinity : 0,
                    }}
                >
                    <path
                        d="M 135 235 L 135 245 M 135 235 L 145 235"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`transition-colors duration-300 ${
                            isHovered ? "text-red-400" : "text-primary"
                        }`}
                    />
                    <path
                        d="M 265 235 L 265 245 M 265 235 L 255 235"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`transition-colors duration-300 ${
                            isHovered ? "text-red-400" : "text-primary"
                        }`}
                    />
                    <path
                        d="M 135 405 L 135 395 M 135 405 L 145 405"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`transition-colors duration-300 ${
                            isHovered ? "text-red-400" : "text-primary"
                        }`}
                    />
                    <path
                        d="M 265 405 L 265 395 M 265 405 L 255 405"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`transition-colors duration-300 ${
                            isHovered ? "text-red-400" : "text-primary"
                        }`}
                    />
                </motion.g>

                {/* Shield Icon - Changes to warning on hover */}
                <motion.g
                    animate={{
                        scale: isHovered ? 1.2 : 1,
                        rotate: isHovered ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: isHovered ? Infinity : 0,
                        repeatType: "reverse",
                    }}
                >
                    {!isHovered ? (
                        // Shield (secure state)
                        <>
                            <path
                                d="M 200 70 L 180 80 L 180 100 C 180 115 190 125 200 130 C 210 125 220 115 220 100 L 220 80 Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                className="text-primary/50"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M 193 100 L 198 105 L 207 92"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                className="text-primary/50"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </>
                    ) : (
                        // Warning triangle (threat state)
                        <>
                            <path
                                d="M 200 70 L 185 95 L 215 95 Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="rgba(239, 68, 68, 0.2)"
                                className="text-red-400"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <line
                                x1="200"
                                y1="80"
                                x2="200"
                                y2="88"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-red-400"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="200"
                                cy="92"
                                r="1"
                                fill="currentColor"
                                className="text-red-400"
                            />
                        </>
                    )}
                </motion.g>
            </svg>

            {/* Floating Particles - More intense on hover */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(isHovered ? 12 : 6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${
                            isHovered ? "bg-red-400/60" : "bg-primary/40"
                        }`}
                        style={{
                            left: `${20 + ((i * 8) % 60)}%`,
                            top: `${30 + (i % 4) * 15}%`,
                            width: isHovered ? 6 : 4,
                            height: isHovered ? 6 : 4,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, isHovered ? 1.5 : 1, 0],
                            y: [0, -40, -80],
                            x: [0, i % 2 ? 10 : -10, 0],
                        }}
                        transition={{
                            delay: i * 0.1,
                            duration: isHovered ? 1.5 : 2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    />
                ))}
            </div>

            {/* Hover instruction */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <p className="text-xs sm:text-sm text-slate-400 font-medium text-center px-4">
                    {isHovered
                        ? "Security threats detected!"
                        : "Hover to reveal threats"}
                </p>
            </motion.div>
        </div>
    );
}
