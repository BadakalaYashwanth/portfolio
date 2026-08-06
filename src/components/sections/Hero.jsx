import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ferrari-black">
            {/* Background Gradient / Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-ferrari-black to-ferrari-black z-0 pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none" />

            <div className="container relative z-10 px-6 mx-auto text-center">
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-ferrari-red text-xs font-mono tracking-wider mb-6">
                        ENGINEERED FOR PERFORMANCE
                    </span>
                </div>

                <h1
                    className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6 uppercase leading-tight"
                >
                    Digital <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                        Perfection
                    </span>
                </h1>

                <p
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    AI-Powered Full Stack Developer crafting intelligent, high-performance
                    web experiences where machine learning meets modern engineering.
                </p>

                <div
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-4 bg-ferrari-red text-white font-bold tracking-wide rounded-sm hover:bg-red-600 transition-all flex items-center gap-2"
                    >
                        VIEW PROJECTS
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-wide rounded-sm hover:bg-white/5 hover:border-white transition-all"
                    >
                        HIRE ME
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto" />
            </div>
        </section>
    );
}
