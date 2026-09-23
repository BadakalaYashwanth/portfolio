import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, hoverScale, iconHover, staggerContainer } from "../../utils/animationVariants";
import WaveBackground from "../common/WaveBackground";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ferrari-black">
            {/* 3D Wave Ribbon Animation - Deepest Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <WaveBackground />
            </div>

            {/* Background Gradient / Spotlight over wave */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-ferrari-black/75 to-ferrari-black z-[1] pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-[2] pointer-events-none" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container relative z-10 px-6 mx-auto text-center"
            >
                <motion.div variants={fadeInUp}>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-ferrari-red text-xs font-mono tracking-wider mb-6">
                        ENGINEERED FOR PERFORMANCE
                    </span>
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6 uppercase leading-tight"
                >
                    Digital <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                        Perfection
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    AI-Powered Full Stack Developer crafting intelligent, high-performance
                    web experiences where machine learning meets modern engineering.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        variants={hoverScale}
                        whileHover="hover"
                        whileTap="tap"
                        className="group px-8 py-4 bg-ferrari-red text-white font-bold tracking-wide rounded-sm hover:bg-red-600 transition-all flex items-center gap-2"
                    >
                        VIEW PROJECTS
                        <motion.span variants={iconHover} whileHover="hover" whileTap="tap">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.span>
                    </motion.a>
                    <motion.a
                        href="#contact"
                        variants={hoverScale}
                        whileHover="hover"
                        whileTap="tap"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-wide rounded-sm hover:bg-white/5 hover:border-white transition-all"
                    >
                        HIRE ME
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            >
                <i className="bi bi-mouse text-white/20 text-xl" />
                <i className="bi bi-chevron-double-down text-white/20 text-xs animate-bounce" />
            </motion.div>
        </section>
    );
}
