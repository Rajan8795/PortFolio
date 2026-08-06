import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/Cursor";
import { FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white selection:bg-[#FF3366]/30 relative overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00E5FF]/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7C3AED]/10 blur-[150px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-[#FF3366]/5 blur-[100px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <CustomCursor />

      {/* Top Navbar / Header */}
      <header className="fixed top-0 w-full z-40 bg-[#050816]/70 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo + Name */}
          <a
            href="#"
            className="font-space font-bold text-xl tracking-tighter flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <img
                src="\hacker.jpg"
                alt="RP"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="group-hover:text-[#FF3366] transition-colors">
              Rajan Prajapati
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 font-mono text-sm">
            <a
              href="#about"
              className="text-slate-400 hover:text-[#00E5FF] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all"
            >
              About
            </a>

            <a
              href="#experience"
              className="text-slate-400 hover:text-[#00E5FF] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="text-slate-400 hover:text-[#00E5FF] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-400 hover:text-[#00E5FF] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all"
            >
              Projects
            </a>

            {/* Download Resume */}
            <a
              href="/Rajan_Prajapati_Resume.pdf"
              download="Rajan_Prajapati_Resume.pdf"
              className="text-[#C0C0C0] flex items-center gap-1 hover:text-[#00E5FF] hover:drop-shadow-[0_0_8px_rgba(255,51,102,0.8)] transition-all"
            >
              <FileText className="w-3 h-3" />
              Resume
            </a>
          </nav>

          {/* Contact */}
          <div>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-mono border border-[#00E5FF]/50 text-[#00E5FF] rounded-lg hover:bg-[#00E5FF] hover:text-black hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}