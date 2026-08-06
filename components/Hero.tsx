"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Terminal, Download, ArrowRight, Code2, MapPin, Map } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const titles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Programmer",
    "Leader"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden pt-15">
      {/* 3D Abstract Background Placeholder */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT PANEL */}
        <div className="col-span-1 lg:col-span-5 flex flex-col space-y-8 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group hover:border-[#00E5FF]/30 transition-all duration-300">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#00E5FF] to-[#7C3AED] shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] group cursor-pointer transition-shadow duration-300">
                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative">
                  <Image 
                    src="/profile.jpg" 
                    alt="Rajan Prajapati" 
                    fill  
                    className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 "
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#00E5FF]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00E5FF] tracking-widest text-sm font-mono uppercase mb-2 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">Hello, I'm</span>
                <h1 className="text-4xl md:text-5xl font-space font-bold tracking-tight text-white mb-2 group-hover:text-[#FF3366] transition-colors">
                  Rajan Prajapati
                </h1>
                
                <div className="h-12 mt-2 relative font-space font-bold text-xl md:text-2xl text-white/80 perspective-1000">
                  <motion.div
                    key={titleIndex}
                    initial={{ opacity: 0, y: 20, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 60 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="absolute text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-2xl hover:scale-110 transition-transform cursor-pointer origin-left drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {titles[titleIndex]}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-slate-400 text-sm leading-relaxed font-mono"
          >
            I architect high-performance backends and intuitive frontends. Passionate about solving complex algorithms, optimizing systems, and delivering flawless user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)] hover:scale-105 transition-all text-white flex items-center space-x-2">
              <Code2 className="w-5 h-5" />
              <span>Hire Me</span>
            </a>
            <a href="/Rajan_Prajapati_Resume.pdf" download="Rajan_Prajapati_Resume.pdf" target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold backdrop-blur-md hover:bg-[#FF3366]/20 hover:border-[#FF3366]/50 transition-all text-white hover:text-[#FF3366] hover:shadow-[0_0_25px_rgba(255,51,102,0.5)] flex items-center space-x-2 group/btn">
              <Download className="w-5 h-5 text-[#00E5FF] group-hover/btn:text-[#FF3366]" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT PANEL: Interactive Workspace & Terminal */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
           {/* Code Snippet Monitor to impress recruiter */}
           <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 5, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full h-[260px] bg-black/70 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl flex flex-col hover:border-[#00E5FF]/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all"
            >
              <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 space-x-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                 <span className="text-[10px] font-mono text-slate-500 ml-2">App.tsx — Optimization Engine</span>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="text-slate-500">// Engineering scalable systems with impact</div>
                <div className="mt-1"><span className="text-purple-400">const</span> <span className="text-blue-400">Rajan</span> = <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> {'{'}</div>
                <div className="pl-4 mt-1"><span className="text-purple-400">useEffect</span><span className="text-yellow-300">(()</span> <span className="text-purple-400">=&gt;</span> {'{'}</div>
                <div className="pl-8 text-cyan-400">optimizeArchitecture();</div>
                <div className="pl-8 text-cyan-400">deliverCleanCode();</div>
                <div className="pl-8 text-cyan-400">solveComplexAlgorithms();</div>
                <div className="pl-4 text-yellow-300">{'}'}, [])</div>
                <div className="pl-4 mt-1"><span className="text-purple-400">return</span> <span className="text-green-400">&lt;Masterpiece /&gt;</span>;</div>
                <div>{'}'}</div>
                <div className="animate-pulse h-4 w-2 bg-[#00E5FF] mt-2 inline-block"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent blur-sm"></div>
           </motion.div>

           {/* Terminal Below */}
           <div className="h-[300px] relative w-full">
             <TerminalMockup />
           </div>
        </div>
      </div>
    </section>
  );
}

function TerminalMockup() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "Initializing Portfolio..." },
    { type: "sys", text: "Loading Skills..." },
    { type: "sys", text: "Connected to GitHub API..." },
    { type: "sys", text: "Welcome to Rajan's Workspace. Type 'help' to begin." },
  ]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: "cmd", text: `rajan@portfolio:~$ ${cmd}` }];
      
      let response = "";
      switch(cmd) {
        case "help": response = "Available commands: whoami, skills, projects, contact, github, clear"; break;
        case "whoami": response = "Rajan Prajapati - Software Development Engineer\nLocation: Ghaziabad, India\nB.Tech CSE @ AKGEC"; break;
        case "skills": response = "Java, MERN Stack, React, Node.js, Express, MongoDB, Python, SQL, REST APIs"; break;
        case "projects": response = "- FIR AI Assistant\n- Phishing Detection System"; break;
        case "contact": response = "Email: kingprajapati391@gmail.com\nPhone: 8795930332"; break;
        case "github": response = "Opening GitHub: https://github.com/Rajan8795"; break;
        case "clear": setHistory([]); setInput(""); return;
        case "sudo hire-rajan": response = "Access Granted! Ready for interview."; break;
        default: response = `Command not found: ${cmd}`;
      }

      setHistory([...newHistory, { type: "sys", text: response }]);
      setInput("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute inset-0 w-full h-full rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl overflow-hidden flex flex-col font-mono text-sm shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:border-[#7C3AED]/30 transition-all group"
    >
      {/* Terminal Header */}
      <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 space-x-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        <div className="flex-1 text-center text-slate-500 text-[10px] tracking-wider">rajan@terminal ~ zsh</div>
      </div>
      
      {/* Terminal Body */}
      <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col space-y-2">
        {history.map((line, i) => (
          <div key={i} className={`${line.type === "cmd" ? "text-[#00E5FF]" : "text-white/80 whitespace-pre-line"}`}>
            {line.text}
          </div>
        ))}
        <div className="flex items-center space-x-2 text-[#00E5FF] mt-2">
          <span>rajan@portfolio:~$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 placeholder-white/20"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
