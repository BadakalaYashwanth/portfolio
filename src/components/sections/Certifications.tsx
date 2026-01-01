"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const certifications = [
    {
        title: "Frontend Development",
        issuer: "HackerRank",
        logo: "/logos/hackerrank.png",
    },
    {
        title: "ReactJS",
        issuer: "HackerRank",
        logo: "/logos/hackerrank.png",
    },
    {
        title: "Cybersecurity Network and Security",
        issuer: "Cisco",
        logo: "/logos/cisco.png",
    },
    {
        title: "Developer Program Member",
        issuer: "Google",
        logo: "/logos/google.png",
    },
    {
        title: "Programming Using Python",
        issuer: "Microsoft",
        logo: "/logos/microsoft.png",
    },
    {
        title: "Forward Program",
        issuer: "McKinsey & Company",
        logo: "/logos/mckinsey.png",
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-32 bg-zinc-950 border-t border-white/5">
            <div className="container px-6 mx-auto max-w-6xl">
                <div className="mb-20 text-center md:text-left">
                    <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">CREDENTIALS</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
                        Professional <span className="text-gray-600">Certifications</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 bg-ferrari-black border border-white/5 hover:border-ferrari-red/40 transition-all duration-300 rounded-sm flex items-center gap-5"
                        >
                            {/* Logo Container */}
                            <div className="relative w-16 h-16 flex-shrink-0 bg-white p-2 rounded-lg overflow-hidden flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-shadow duration-300">
                                <Image
                                    src={cert.logo}
                                    alt={`${cert.issuer} logo`}
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-ferrari-red transition-colors mb-1 leading-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <BadgeCheck className="w-3 h-3 text-ferrari-red" />
                                    <span className="text-sm text-gray-500 font-mono uppercase tracking-wide">
                                        {cert.issuer}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
