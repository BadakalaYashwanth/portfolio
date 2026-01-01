"use client";

import { motion } from "framer-motion";
import { Award, Chrome, ExternalLink, Trophy, Zap } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
    return (
        <section id="achievements" className="py-32 bg-ferrari-black border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ferrari-red/5 to-transparent pointer-events-none" />

            <div className="container px-6 mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                    <div>
                        <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">DISTINCTIONS</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
                            Achievements <span className="text-gray-600"></span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Primary Featured Achievement */}
                    <div className="lg:col-span-2">
                        <Link
                            href="https://github.com/BadakalaYashwanth/AdEclipse-chrome-extensions"
                            target="_blank"
                            className="group relative block h-full min-h-[400px] bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-sm overflow-hidden hover:border-ferrari-red/50 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 md:p-12 flex flex-col justify-end">
                                <div className="mb-auto">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-ferrari-red/10 border border-ferrari-red/20 text-ferrari-red text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                                        <Trophy className="w-3 h-3" /> Featured Project
                                    </span>
                                </div>

                                <div className="flex justify-between items-start">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-ferrari-red transition-colors duration-300">
                                        AdEclipse
                                    </h3>
                                    <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                                </div>

                                <p className="text-gray-300 text-lg font-light leading-relaxed mb-8 max-w-xl">
                                    Built a production-grade Chrome extension that blocks ad images and videos and automatically sets YouTube playback speed to 2x. Currently serving 7 active users with real-world browser automation and performance optimization.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-white/10 px-3 py-1.5 rounded-full bg-black/50">
                                        <Chrome className="w-3 h-3" /> Chrome Extension
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 border border-white/10 px-3 py-1.5 rounded-full bg-black/50">
                                        <Zap className="w-3 h-3" /> Performance
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Secondary Achievements List */}
                    <div className="lg:col-span-1 flex flex-col justify-between gap-6">
                        <div className="p-8 bg-white/5 border border-white/5 rounded-sm h-full flex flex-col justify-center hover:bg-white/[0.07] transition-colors">
                            <Award className="w-8 h-8 text-ferrari-red mb-6" />
                            <h4 className="text-xl font-bold text-white mb-2">Google QuickDraw & YOLO</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                                Contributor to algorithm improvements, enhancing detection accuracy and dataset processing efficiency.
                            </p>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Open Source Contribution</span>
                        </div>

                        <div className="p-8 bg-white/5 border border-white/5 rounded-sm h-full flex flex-col justify-center hover:bg-white/[0.07] transition-colors">
                            <Trophy className="w-8 h-8 text-yellow-500 mb-6" />
                            <h4 className="text-xl font-bold text-white mb-2">Google Cloud Arcade 2025</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                                Winner of the cloud architecture and deployment challenge, demonstrating mastery in GCP services.
                            </p>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Competition Winner</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
