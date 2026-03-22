import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Transition from "./components/Transition";
import EasterEgg from "./components/EasterEgg";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Transition />
        <EasterEgg />

        {/* Subtle section dividers */}
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>

        <Projects />

        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>

        <Skills />

        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>

        <About />

        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-white/5" />
        </div>

        <Contact />
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Anton Satsuk
      </footer>
    </div>
  );
}