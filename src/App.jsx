import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import Certifications from "./components/sections/Certifications";
import Skills from "./components/sections/Skills";
import Process from "./components/sections/Process";
import CallToAction from "./components/sections/CallToAction";

function App() {
  return (
    <main className="min-h-screen bg-ferrari-black text-white selection:bg-ferrari-red selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Process />
        <Achievements />
        <Certifications />
        <CallToAction />
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;
