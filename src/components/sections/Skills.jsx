import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInLeft, hoverScale, staggerContainer } from "../../utils/animationVariants";

const skills = [
    {
        category: "Primary Languages",
        icon: "bi-terminal-fill",
        items: ["Python", "Java", "JavaScript", "TypeScript"],
    },
    {
        category: "Frontend, Backend & Database",
        icon: "bi-layers-fill",
        items: ["React", "Next.js", "Express.js", "Node.js", "Tailwind CSS", "Bootstrap CSS", "PostgreSQL", "MySQL", "MongoDB", "RDBMS"],
    },
    {
        category: "DevOps & Tools",
        icon: "bi-gear-wide-connected",
        items: ["Git", "GitHub Actions", "Bitbucket", "Jenkins", "Postman", "Docker", "Kubernetes", "LINUX", "AWS LINUX"],
    },
    {
        category: "AI/ML",
        icon: "bi-robot",
        items: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Semi-Supervised Learning",
            "Reinforcement Learning",
            "Classification",
            "Regression",
            "Clustering",
            "Neural Networks",
            "Deep Learning",
            "LSTM",
            "Facebook Prophet",
            "LangChain",
            "Vector Database",
            "RAG",
            "AI Agents",
            "MCP",
        ],
    },
];

const accentColors = [
    { bar: "bg-red-500", text: "text-red-400", pill: "border-red-500/30 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.25)]" },
    { bar: "bg-blue-500", text: "text-blue-400", pill: "border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]" },
    { bar: "bg-emerald-500", text: "text-emerald-400", pill: "border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]" },
    { bar: "bg-purple-500", text: "text-purple-400", pill: "border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]" },
];

export default function Skills() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <motion.section
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="py-24 bg-ferrari-black"
        >
            <div className="container px-6 mx-auto">
                <div className="mb-16">
                    <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">SPECIFICATIONS</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        Technical <span className="text-gray-600">Skills</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-3">
                    {skills.map((skillGroup, index) => {
                        const isOpen = openIndex === index;
                        const color = accentColors[index % accentColors.length];
                        return (
                            <motion.div
                                key={skillGroup.category}
                                variants={fadeInLeft}
                                className="overflow-hidden"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`
                                        w-full flex items-center justify-between
                                        px-6 py-5 rounded-lg
                                        bg-white/[0.03] border border-white/5
                                        hover:bg-white/[0.06] transition-all duration-300
                                        cursor-pointer group relative overflow-hidden
                                        ${isOpen ? "border-white/10" : ""}
                                    `}
                                >
                                    {/* Left accent bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${color.bar} transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-40 group-hover:opacity-70"}`} />

                                    <div className="flex items-center gap-4 pl-4">
                                        <i className={`bi ${skillGroup.icon} text-lg transition-colors duration-300 ${isOpen ? color.text : "text-gray-500 group-hover:text-white"}`} />
                                        <h3 className={`font-mono text-sm tracking-widest uppercase transition-colors duration-300 ${isOpen ? color.text : "text-gray-400 group-hover:text-white"}`}>
                                            {skillGroup.category}
                                        </h3>
                                        <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border transition-colors duration-300 ${isOpen ? `${color.text} border-current` : "text-gray-600 border-gray-700"}`}>
                                            {skillGroup.items.length}
                                        </span>
                                    </div>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? color.text : "text-gray-600"}`} />
                                    </motion.div>
                                </button>

                                {/* Accordion Content */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 py-6 flex flex-wrap gap-3">
                                                {skillGroup.items.map((item) => (
                                                    <motion.span
                                                        key={item}
                                                        variants={hoverScale}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                        className={`
                                                            px-4 py-2 rounded-full font-mono text-xs
                                                            bg-white/[0.03] border text-gray-400
                                                            transition-colors duration-300 cursor-pointer
                                                            backdrop-blur-sm ${color.pill}
                                                        `}
                                                    >
                                                        {item}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
