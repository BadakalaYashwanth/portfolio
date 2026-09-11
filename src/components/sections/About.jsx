import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, scaleUp, staggerContainer } from "../../utils/animationVariants";

export default function About() {
    return (
        <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="py-24 bg-ferrari-dark border-y border-white/5"
        >
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div variants={fadeInLeft}>
                        <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">ENGINEER</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
                            Fueled by <span className="text-gray-500">Curiosity</span>,<br />
                            Driven by <span className="text-white">Precision</span>.
                        </h2>

                        <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                            <p>
                                Hi, I&apos;m <span className="font-bold text-white">Badakala Yaswanth</span>.
                            </p>
                            <p>
                                I&apos;m an AI and Full Stack Developer with a B.Tech in Computer Science from <span className="font-bold text-white">Andhra University</span>. I build intelligent web applications by combining modern frontend development, scalable backend systems, and AI-powered capabilities.
                            </p>
                            <p>
                                My expertise spans React.js, Node.js, Python, REST APIs, MySQL, and Large Language Model integrations. I enjoy designing end-to-end applications, from responsive user interfaces and backend architectures to AI-driven features that solve real-world problems.
                            </p>
                            <p>
                                I&apos;m passionate about building reliable, scalable, and production-ready software while continuously exploring modern AI technologies, cloud platforms, and application architecture to create impactful digital products.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInRight} className="relative">
                        <motion.div
                            variants={scaleUp}
                            className="aspect-square bg-gradient-to-tr from-ferrari-black to-zinc-900 rounded-sm border border-white/5 p-8 flex flex-col justify-between"
                        >
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
                                    <span className="block text-4xl font-bold text-white font-heading">0.6</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Months Exp</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-white font-heading">30+</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-white font-heading">100%</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Commitment</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
