import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInLeft, fadeInRight, scaleUp, staggerContainer } from "../../utils/animationVariants";

const projectImages = [
    { src: "/projects/datasphere.png",      name: "DataSphere" },
    { src: "/projects/drivefusion.png",     name: "DriveFusion" },
    { src: "/projects/meta-extensions.png", name: "Meta Extensions" },
    { src: "/projects/neowallet.png",       name: "NeoWallet" },
    { src: "/projects/stocksage.png",       name: "StockSage" },
];

const slideVariants = {
    enter: (dir) => ({
        x: dir > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir) => ({
        x: dir > 0 ? "-100%" : "100%",
        opacity: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

function ProjectSlider({ index, direction, onGoTo }) {
    const current = projectImages[index];

    return (
        <div className="absolute inset-0 overflow-hidden rounded-sm">
            <AnimatePresence custom={direction} mode="popLayout">
                <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.name}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Project name bottom-left */}
            <div className="absolute bottom-4 left-4 right-4">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={current.name}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="text-white font-heading font-bold text-sm tracking-wider uppercase"
                    >
                        {current.name}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Dot indicators bottom-right */}
            <div className="absolute bottom-4 right-4 flex gap-2">
                {projectImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onGoTo(i)}
                        className={`transition-all duration-300 rounded-full ${
                            i === index
                                ? "w-6 h-2 bg-ferrari-red"
                                : "w-2 h-2 bg-white/30 hover:bg-white/60"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function About() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % projectImages.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    const goTo = (i) => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    };

    // Dots: only show 3, cycling through active states
    const dotColors = [0, 1, 2].map((offset) => {
        const dotIndex = (index + offset) % projectImages.length;
        return dotIndex === index % projectImages.length && offset === 0
            ? "bg-ferrari-red animate-pulse"
            : offset === 1
            ? "bg-gray-500"
            : "bg-gray-700";
    });

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
                            className="aspect-square bg-gradient-to-tr from-ferrari-black to-zinc-900 rounded-sm border border-white/5 relative overflow-hidden"
                        >
                            {/* Header overlay — number + dots, always on top */}
                            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-start p-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-6xl font-heading font-bold text-white/20 leading-none"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </motion.span>
                                </AnimatePresence>
                                <div className="flex gap-2 pointer-events-auto">
                                    {projectImages.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => goTo(i)}
                                            className={`transition-all duration-300 rounded-full ${
                                                i === index
                                                    ? "w-6 h-2 bg-ferrari-red"
                                                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Full-bleed image slider */}
                            <ProjectSlider index={index} direction={direction} onGoTo={goTo} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

