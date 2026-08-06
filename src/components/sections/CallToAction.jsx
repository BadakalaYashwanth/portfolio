import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Check } from "lucide-react";
import clsx from "clsx";
import { fadeInUp, hoverScale, iconHover, scaleUp, staggerContainer } from "../../utils/animationVariants";

const socialLinks = [
    {
        id: "email",
        icon: Mail,
        label: "Copy Email",
        action: "copy",
        value: "yaswanth052002@gmail.com",
        color: "hover:text-ferrari-red",
    },
    {
        id: "github",
        icon: Github,
        label: "GitHub",
        action: "link",
        href: "https://github.com/BadakalaYashwanth",
        color: "hover:text-white",
    },
    {
        id: "linkedin",
        icon: Linkedin,
        label: "LinkedIn",
        action: "link",
        href: "https://www.linkedin.com/in/badakala-yaswanth-aa2853238/",
        color: "hover:text-[#0077b5]",
    },
    {
        id: "instagram",
        icon: Instagram,
        label: "Instagram",
        action: "link",
        href: "https://www.instagram.com/_byashh/",
        color: "hover:text-[#E1306C]",
    },
];

export default function CallToAction() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="py-32 bg-ferrari-black flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ferrari-red/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10 text-center">
                <motion.div variants={scaleUp}>
                    <motion.h2 variants={fadeInUp} className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Let&apos;s <span className="text-ferrari-red">Connect</span>
                    </motion.h2>

                    <div className="flex items-center justify-center gap-12">
                        {socialLinks.map((link) => {
                            const Icon = link.id === "email" && copied ? Check : link.icon;

                            if (link.action === "copy") {
                                return (
                                    <motion.button
                                        key={link.id}
                                        onClick={() => handleCopy(link.value)}
                                        variants={hoverScale}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className="group relative focus:outline-none"
                                        aria-label={link.label}
                                    >
                                        <div
                                            className={clsx(
                                                "p-4 rounded-full bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-focus:ring-2 group-focus:ring-ferrari-red/50",
                                                link.color,
                                                copied && link.id === "email" ? "text-green-500 border-green-500/50" : "text-gray-400"
                                            )}
                                        >
                                            <motion.div variants={iconHover} whileHover="hover" whileTap="tap">
                                                <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                                            </motion.div>
                                        </div>

                                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-500 whitespace-nowrap font-mono pointer-events-none">
                                            {copied && link.id === "email" ? "Copied!" : link.label}
                                        </span>

                                        <AnimatePresence>
                                            {copied && link.id === "email" && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                                                    animate={{ opacity: 1, y: -60, x: "-50%" }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute left-1/2 top-0 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg whitespace-nowrap pointer-events-none"
                                                >
                                                    Email Copied
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                );
                            }

                            return (
                                <motion.a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={hoverScale}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="group relative focus:outline-none"
                                    aria-label={link.label}
                                >
                                    <div
                                        className={clsx(
                                            "p-4 rounded-full bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-focus:ring-2 group-focus:ring-ferrari-red/50 text-gray-400",
                                            link.color
                                        )}
                                    >
                                        <motion.div variants={iconHover} whileHover="hover" whileTap="tap">
                                            <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                                        </motion.div>
                                    </div>
                                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-500 whitespace-nowrap font-mono pointer-events-none">
                                        {link.label}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
