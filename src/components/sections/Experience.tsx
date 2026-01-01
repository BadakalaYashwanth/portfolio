"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
    return (
        <section id="experience" className="py-32 bg-ferrari-black border-t border-white/5">
            <div className="container px-6 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="mb-20">
                    <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">THE JOURNEY</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
                        Internship <span className="text-gray-600">Experience</span>
                    </h2>
                </div>

                <div className="space-y-20">
                    {/* Entry 1: Feynn Labs */}
                    <div className="relative border-l border-white/10 pl-8 md:pl-12 py-2">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-ferrari-red shadow-[0_0_10px_rgba(255,40,0,0.5)]" />

                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Software Engineering Intern</h3>
                            <div className="flex items-center gap-3 mt-2 md:mt-0">
                                <span className="text-white font-medium">Feynn Labs</span>
                                <span className="text-gray-600">•</span>
                                <span className="font-mono text-gray-500 text-sm">Dec 2024 - Mar 2025</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                Worked as a Software Engineering Intern building production-grade web systems, focused on performance optimization, UI engineering, and intelligent data-driven applications.
                            </p>

                            <div className="space-y-4">
                                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Key Contributions</h4>
                                <ul className="space-y-4 text-gray-300 font-light">
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-ferrari-red mt-2.5 shrink-0" />
                                        <span className="leading-relaxed">
                                            Built and optimized responsive React interfaces consuming Node.js APIs, improving data visualization performance and insight delivery speed by approximately 9 percent.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-ferrari-red mt-2.5 shrink-0" />
                                        <span className="leading-relaxed">
                                            Integrated modern React UI with machine learning pipelines to improve investment forecasting accuracy and increase user engagement.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-ferrari-red mt-2.5 shrink-0" />
                                        <span className="leading-relaxed">
                                            Focused on optimizing data models and query performance for interactive analytics.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Featured Projects within Experience */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <Link
                                    href="https://startling-piroshki-342345.netlify.app/"
                                    target="_blank"
                                    className="group relative block aspect-video overflow-hidden border border-white/10 rounded-xl bg-neutral-900 transition-all duration-300 hover:border-ferrari-red/50 hover:brightness-110"
                                >
                                    <Image
                                        src="/projects/stocksage.png"
                                        alt="StockSage Project Screenshot"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2 p-4 text-center">
                                        <h5 className="text-xl font-bold text-white">StockSage</h5>
                                        <p className="text-gray-300 text-xs font-light">AI-Powered Stock Market Predictions</p>
                                        <span className="text-ferrari-red text-xs font-mono mt-2 flex items-center gap-1">
                                            VIEW LIVE <ExternalLink className="w-3 h-3" />
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                                        <h5 className="text-sm font-bold text-white">StockSage</h5>
                                    </div>
                                </Link>

                                <Link
                                    href="https://github.com/BadakalaYashwanth/DataSphere-"
                                    target="_blank"
                                    className="group relative block aspect-video overflow-hidden border border-white/10 rounded-xl bg-neutral-900 transition-all duration-300 hover:border-ferrari-red/50 hover:brightness-110"
                                >
                                    <Image
                                        src="/projects/datasphere.png"
                                        alt="DataSphere Project Screenshot"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2 p-4 text-center">
                                        <h5 className="text-xl font-bold text-white">DataSphere</h5>
                                        <p className="text-gray-300 text-xs font-light">High-Performance Business Dashboards</p>
                                        <span className="text-ferrari-red text-xs font-mono mt-2 flex items-center gap-1">
                                            VIEW CODE <Github className="w-3 h-3" />
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                                        <h5 className="text-sm font-bold text-white">DataSphere</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Entry 2: Open Source */}
                    <div className="relative border-l border-white/10 pl-8 md:pl-12 py-2">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-600 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />

                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Open Source Contributor</h3>
                            <div className="flex items-center gap-3 mt-2 md:mt-0">
                                <span className="text-white font-medium">Hacktoberfest</span>
                                <span className="text-gray-600">•</span>
                                <span className="font-mono text-gray-500 text-sm">Oct 2024 - Dec 2024</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                Contributed to open-source machine learning and data processing ecosystems with a focus on reliability and performance.
                            </p>

                            <div className="space-y-4">
                                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Key Contributions</h4>
                                <ul className="space-y-4 text-gray-300 font-light">
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0" />
                                        <span className="leading-relaxed">
                                            Resolved TensorFlow runtime failures, improving distributed model stability and reducing execution errors across community projects.
                                        </span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0" />
                                        <span className="leading-relaxed">
                                            Optimized Pandas and NumPy data workflows, lowering large dataset processing latency and reducing compute resource usage.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
