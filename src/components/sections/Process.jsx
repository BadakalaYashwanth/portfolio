import { motion } from "framer-motion";
import { fadeInUp, scaleUp, staggerContainer } from "../../utils/animationVariants";

const steps = [
    {
        num: "01",
        icon: "bi-clipboard2-check",
        title: "Planning",
        desc: "Gathering requirements, defining project scope, feasibility analysis, and setting timelines and success criteria.",
    },
    {
        num: "02",
        icon: "bi-pencil-square",
        title: "Design",
        desc: "Creating system architecture, UI/UX wireframes, database schemas, and technical specifications.",
    },
    {
        num: "03",
        icon: "bi-code-slash",
        title: "Implementation",
        desc: "Writing clean, modular, and well-documented code following industry best practices and standards.",
    },
    {
        num: "04",
        icon: "bi-bug",
        title: "Testing",
        desc: "Executing unit, integration, and UAT to ensure quality, performance, and bug-free delivery.",
    },
    {
        num: "05",
        icon: "bi-cloud-upload",
        title: "Deployment",
        desc: "Releasing the product to production with CI/CD pipelines, environment configuration, and rollout strategies.",
    },
    {
        num: "06",
        icon: "bi-tools",
        title: "Maintenance",
        desc: "Monitoring performance, patching vulnerabilities, and iterating based on user feedback and analytics.",
    },
];


export default function Process() {
    return (
        <motion.section
            id="process"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="py-24 bg-ferrari-dark border-t border-white/5"
        >
            <div className="container px-6 mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <span className="text-ferrari-red font-mono text-sm tracking-widest mb-2 block">SOFTWARE DEVELOPMENT LIFECYCLE</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        My <span className="text-gray-600">SDLC</span> Process
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {steps.map((step) => (
                        <motion.div
                            key={step.num}
                            variants={scaleUp}
                            whileHover="hover"
                            whileTap="tap"
                            className="relative group bg-ferrari-black p-6 border border-white/5 rounded-sm hover:border-ferrari-red/30 transition-colors"
                        >
                            <span className="absolute -top-4 -left-2 text-6xl font-heading font-bold text-white/5 z-0 group-hover:text-ferrari-red/10 transition-colors">
                                {step.num}
                            </span>
                            <div className="relative z-10 pt-4">
                                <i className={`bi ${step.icon} text-2xl text-ferrari-red mb-3 block group-hover:scale-110 transition-transform duration-300`} />
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
