"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "",
        items: ["Python", "Java", "Node.js", "PostgreSlQL", "MySQL", "MongoDB", "Docker"],
    },
    {
        category: "  ",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap CSS", "Express.js", "JavaScript"],
    },
    {
        category: "   ",
        items: ["Git", "GitHub Actions", "Postman", "Docker", "Kubernetes", "GCP"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-ferrari-black">
            <div className="container px-6 mx-auto">
                <div className="mb-16">
                    <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">SPECIFICATIONS</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        Technical <span className="text-gray-600">Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-sm group"
                        >
                            {/* <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-ferrari-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                {skillGroup.category}
                            </h3> */}
                            <ul className="space-y-4">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="text-gray-400 font-mono text-sm border-b border-white/5 pb-2 last:border-0 flex justify-between items-center">
                                        {item}
                                        <span className="text-white/10 group-hover:text-ferrari-red/50 transition-colors">→</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
