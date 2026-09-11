import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animationVariants";

export default function Footer() {
    return (
        <footer className="py-8 bg-ferrari-black border-t border-white/5 text-center">
            <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white flex items-center justify-center gap-2 text-gray-600 text-sm font-mono"
            >
                <span>© {new Date().getFullYear()} DEV. ENGINEERED IN INDIA</span>
            </motion.div>
        </footer>
    );
}
