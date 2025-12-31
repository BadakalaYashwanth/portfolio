"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "Understanding the core problem and defining success metrics.",
    },
    {
        num: "02",
        title: "Architecture",
        desc: "Designing scalable systems and intuitive interfaces.",
    },
    {
        num: "03",
        title: "Development",
        desc: "Writing clean, efficient, and well-documented code.",
    },
    {
        num: "04",
        title: "Optimization",
        desc: "Refining performance, SEO, and user experience.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-ferrari-dark border-t border-white/5">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16">
                    <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">PRODUCTION LINE</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        How I <span className="text-gray-600">Build</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group bg-ferrari-black p-6 border border-white/5 rounded-sm hover:border-ferrari-red/30 transition-colors"
                        >
                            <span className="absolute -top-4 -left-2 text-6xl font-heading font-bold text-white/5 z-0 group-hover:text-ferrari-red/10 transition-colors">
                                {step.num}
                            </span>
                            <div className="relative z-10 pt-4">
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
