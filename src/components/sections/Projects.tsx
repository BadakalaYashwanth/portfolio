"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "Vortex Finance",
        category: "Fintech Platform",
        description: "A high-frequency trading dashboard with real-time WebSocket data visualization.",
        tech: ["Next.js", "TypeScript", "D3.js", "Supabase"],
        color: "from-blue-900 to-black",
    },
    {
        id: "02",
        title: "Aura Systems",
        category: "SaaS Dashboard",
        description: "AI-driven analytics platform for enterprise resource planning.",
        tech: ["React", "Tailwind", "Python", "AWS"],
        color: "from-purple-900 to-black",
    },
    {
        id: "03",
        title: "Nexus Core",
        category: "Design System",
        description: "A comprehensive component library built for speed and accessibility.",
        tech: ["Storybook", "React", "Radix UI"],
        color: "from-emerald-900 to-black",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-ferrari-black relative">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
                    <div>
                        <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">THE FLEET</span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase">
                            Selected <span className="text-gray-600">Works</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm mt-6 md:mt-0 font-light">
                        Each project is approached with a full-stack engineering mindset, where performance, scalability, modern UI, and real-world usability are treated as non-negotiable.
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
                        >
                            {/* Project Visual */}
                            <div className={`md:col-span-7 relative aspect-[16/9] bg-gradient-to-br ${project.color} rounded-sm overflow-hidden border border-white/10 group-hover:border-ferrari-red/50 transition-colors duration-500`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Placeholder for actual screenshot */}
                                    <span className="font-heading text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                        {project.id}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="md:col-span-5 flex flex-col justify-center">
                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="font-mono text-ferrari-red text-xl">0{index + 1}</span>
                                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                                </div>

                                <span className="text-gray-500 text-sm font-mono uppercase tracking-wider mb-6">{project.category}</span>

                                <p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs border border-white/10 text-gray-400 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <Link href="#" className="flex items-center gap-2 text-white font-bold group/link w-max">
                                    VIEW CASE STUDY
                                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
