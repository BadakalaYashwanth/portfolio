"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-ferrari-dark border-y border-white/5">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">THE DRIVER</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
                            Fueled by <span className="text-gray-500">Curiosity</span>,<br />
                            Driven by <span className="text-white">Precision</span>.
                        </h2>

                        <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                            <p>
                                I don't just write code; I engineer solutions. My journey started not in a classroom, but in the trenches of trial and error, breaking systems to understand how they work, and rebuilding them better.
                            </p>
                            <p>
                                Like a high-performance engine, modern software requires a delicate balance of raw power and refined control. I specialize in building scalable, resilient applications that handle complexity with grace.
                            </p>
                            <p>
                                My philosophy is simple: <strong className="text-white">If it's not fast, it's broken. If it's not beautiful, it's unfinished.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Visual Representation of 'Mindset' */}
                        <div className="aspect-square bg-gradient-to-tr from-ferrari-black to-zinc-900 rounded-sm border border-white/5 p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="text-6xl font-heading font-bold text-white/5">01</span>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-ferrari-red animate-pulse" />
                                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <span className="block text-4xl font-bold text-white font-heading">5+</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-white font-heading">50+</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-white font-heading">100%</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Commitment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
