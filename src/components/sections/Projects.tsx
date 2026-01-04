"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "NeoWallet",
        category: "Full Stack Financial Platform",
        description: "Developed a full-stack digital wallet enabling seamless transactions, AI-driven financial insights, automated expense categorization, and personalized budgeting. Designed an intuitive UI for accessibility while ensuring secure payments and real-time data processing.",
        tech: ["HTML", "CSS", "TypeScript", "Node.js", "Express.js", "OpenAPI", "Bootstrap CSS", "REST API", "Python", "Wallet Architecture", "Postman", "Git", "GitHub Actions", "MongoDB"],
        color: "from-emerald-900 to-black",
        image: "/projects/neowallet.png",
        links: {
            demo: "https://walletpa.netlify.app/",
            repo: "https://github.com/BadakalaYashwanth/NeoWallet"
        }
    },
    {
        id: "02",
        title: "Vortex Finance",
        category: "Fintech Platform",
        description: "A high-frequency trading dashboard with real-time WebSocket data visualization.",
        tech: ["Next.js", "TypeScript", "D3.js", "Supabase"],
        color: "from-blue-900 to-black",
    },
    {
        id: "03",
        title: "Aura Systems",
        category: "SaaS Dashboard",
        description: "AI-driven analytics platform for enterprise resource planning.",
        tech: ["React", "Tailwind", "Python", "AWS"],
        color: "from-purple-900 to-black",
    },
    {
        id: "04",
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
                        <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">Each project is a</span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase">
                            Proof of <span className="text-gray-600">Work</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm mt-6 md:mt-0 font-light">
                        Each project is approached with a full-stack engineering mindset, where performance, scalability, modern UI, machine learning integration, and real-world usability are treated as non-negotiable.
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
                                {(project as any).image ? (
                                    <>
                                        <div className="absolute inset-0 p-4 flex items-center justify-center">
                                            <div className="relative w-full h-full shadow-2xl overflow-hidden rounded-sm bg-ferrari-black/50">
                                                <Image
                                                    src={(project as any).image}
                                                    alt={`${project.title} Preview`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        {/* Hover Overlay */}
                                        {(project as any).links?.demo && (
                                            <Link
                                                href={(project as any).links.demo}
                                                target="_blank"
                                                className="absolute bottom-0 left-0 right-0 py-2 bg-black/99 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 text-white font-mono text-sm uppercase tracking-widest hover:text-ferrari-red"
                                            >
                                                View Live Project <ArrowUpRight className="w-3 h-3" />
                                            </Link>
                                        )}
                                    </>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Placeholder for actual screenshot */}
                                        <span className="font-heading text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                            {project.id}
                                        </span>
                                    </div>
                                )}
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

                                <div className="flex gap-4 mt-8">
                                    {(project as any).links ? (
                                        <>
                                            <Link
                                                href={(project as any).links.demo}
                                                target="_blank"
                                                className="px-6 py-2.5 text-sm font-bold bg-ferrari-red text-white rounded-sm hover:bg-red-600 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,40,0,0.2)] hover:shadow-[0_0_30px_rgba(255,40,0,0.4)]"
                                            >
                                                View Project <ExternalLink className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={(project as any).links.repo}
                                                target="_blank"
                                                className="px-6 py-2.5 text-sm font-bold border border-white/20 text-white rounded-sm hover:border-white hover:bg-white/10 transition-all flex items-center gap-2"
                                            >
                                                View Code <Github className="w-4 h-4" />
                                            </Link>
                                        </>
                                    ) : (
                                        <Link href="#" className="flex items-center gap-2 text-white font-bold group/link w-max">
                                            VIEW CASE STUDY
                                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
