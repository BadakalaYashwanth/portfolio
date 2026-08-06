import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-8 bg-ferrari-black border-t border-white/5 text-center">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-white flex items-center justify-center gap-2 text-gray-600 text-sm font-mono"
            >
                <span>© {new Date().getFullYear()} DEV. ENGINEERED IN INDIA</span>
            </motion.div>
        </footer>
    );
}
