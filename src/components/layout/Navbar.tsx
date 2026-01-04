"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
    "About",
    "Projects",
    "Experience",
    "Skills",
    "Process",
    "Achievements",
    "Certifications"
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
                    isScrolled
                        ? "bg-ferrari-black/80 backdrop-blur-md border-b border-white/5 py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <span className="font-heading font-bold text-2xl tracking-tighter text-white group-hover:text-ferrari-red transition-colors">
                            DEV<span className="text-ferrari-red">.</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ferrari-red transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-5 py-2 text-sm font-bold border border-white/20 hover:border-ferrari-red hover:bg-ferrari-red hover:text-white transition-all duration-300 rounded-sm"
                        >
                            HIRE ME
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-ferrari-black flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-heading font-bold text-white hover:text-ferrari-red transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-8 py-3 text-lg font-bold bg-ferrari-red text-white rounded-sm"
                        >
                            HIRE ME
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
