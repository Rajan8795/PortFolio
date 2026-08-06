"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Code2,
  Server,
  Database,
  Terminal,
  Shield,
  Cpu,
  Sparkles,
} from "lucide-react";

const aboutSlides = [
  {
    id: "01",
    title: "Who I Am",
    command: "whoami",
    icon: User,
    color: "#00E5FF",
    secondary: "#7C3AED",
    role: "SOFTWARE ENGINEER",
    content:
      "I am a Computer Science undergraduate and aspiring Software Engineer focused on building scalable, responsive, and performance-oriented applications.",
    stats: [
      ["ROLE", "Software Engineer"],
      ["FOCUS", "Full Stack Development"],
      ["STATUS", "Building & Learning"],
    ],
  },
  {
    id: "02",
    title: "Frontend Engineering",
    command: "frontend --stack",
    icon: Code2,
    color: "#FF3366",
    secondary: "#00E5FF",
    role: "FRONTEND ENGINEER",
    content:
      "I build modern interfaces with React, Tailwind CSS, HTML and CSS, focusing on responsive layouts, smooth interactions, reusable components, and clean user experiences.",
    stats: [
      ["CORE", "React.js"],
      ["UI", "Tailwind CSS"],
      ["MINDSET", "UX + Performance"],
    ],
  },
  {
  id: "03",
  title: "MERN Stack Development",
  command: "mern --stack",
  icon: Code2,
  color: "#00E5FF",
  secondary: "#7C3AED",
  role: "MERN STACK DEVELOPER",
  content:
    "I build full-stack web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. I focus on developing responsive interfaces, scalable REST APIs, secure authentication, database integration, and clean end-to-end application architecture.",
  stats: [
    ["FRONTEND", "React.js"],
    ["BACKEND", "Node.js + Express"],
    ["DATABASE", "MongoDB"],
  ],
},
  {
    id: "04",
    title: "Backend & Systems",
    command: "system --inspect",
    icon: Server,
    color: "#7C3AED",
    secondary: "#00E5FF",
    role: "BACKEND ENGINEER",
    content:
      "I develop REST APIs and backend services using Node.js and Express.js with a focus on modular architecture, authentication, scalability, and maintainable code.",
    stats: [
      ["RUNTIME", "Node.js"],
      ["API", "REST Architecture"],
      ["SERVER", "Express.js"],
    ],
  },
  {
    id: "05",
    title: "Data & Storage",
    command: "database --status",
    icon: Database,
    color: "#22C55E",
    secondary: "#00E5FF",
    role: "DATA & DATABASE",
    content:
      "I work with MongoDB, PostgreSQL and MySQL while understanding CRUD operations, schema design, relationships, queries, and practical database management.",
    stats: [
      ["NOSQL", "MongoDB"],
      ["SQL", "MySQL / PostgreSQL"],
      ["FOCUS", "Data Modeling"],
    ],
  },
  {
    id: "06",
    title: "Security Mindset",
    command: "security --scan",
    icon: Shield,
    color: "#FF3366",
    secondary: "#7C3AED",
    role: "SECURITY ENTHUSIAST",
    content:
      "I approach software with a security-first mindset and enjoy understanding vulnerabilities, network behavior, web security, and defensive engineering practices.",
    stats: [
      ["MINDSET", "Security First"],
      ["AREA", "Web Security"],
      ["APPROACH", "Think Like Attacker"],
    ],
  },
  {
    id: "07",
    title: "Problem Solver",
    command: "algorithm --optimize",
    icon: Cpu,
    color: "#FACC15",
    secondary: "#FF3366",
    role: "PROBLEM SOLVER",
    content:
      "I continuously strengthen my problem-solving ability through Data Structures and Algorithms, optimization patterns, debugging, and building practical software projects.",
    stats: [
      ["DSA", "Java"],
      ["FOCUS", "Optimization"],
      ["GOAL", "Better Solutions"],
    ],
  },
  {
  id: "08",
  title: "Communication & Leadership",
  command: "skills --soft",
  icon: User,
  color: "#FACC15",
  secondary: "#FF3366",
  role: "COMMUNICATION • LEADERSHIP",
  content:
    "I believe great software is built through great communication and teamwork. I enjoy collaborating with teams, explaining technical ideas clearly, taking ownership of responsibilities, leading when needed, and helping turn ideas into practical solutions , Strong communication, teamwork, and leadership are an important part of how I work. I can communicate technical ideas clearly, collaborate effectively with teammates, take ownership of tasks, coordinate work, and step up to lead when the situation demands it.",
  stats: [
    ["COMMUNICATION", "Clear & Effective"],
    ["LEADERSHIP", "Team Coordination"],
    ["MINDSET", "Ownership & Collaboration"],
  ],
},
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slide = aboutSlides[currentSlide];
  const Icon = slide.icon;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev === 0 ? aboutSlides.length - 1 : prev - 1)
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      id="about"
      className="relative min-h-screen py-5 pb-10 overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#00E5FF]/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[0%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#7C3AED]/10 blur-[150px]"
        />
      </div>

      {/* =========================================================
          SECTION HEADER
      ========================================================= */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <Terminal className="w-5 h-5 text-[#00E5FF]" />

            <span className="font-mono text-xs tracking-[0.3em] text-[#00E5FF]">
              SYSTEM / ABOUT
            </span>

            <Terminal className="w-5 h-5 text-[#00E5FF]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-space font-bold tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-[#7C3AED] to-[#00E5FF]">
              Me
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm mt-5">
            Discover my background, engineering mindset, technologies and
            current mission.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN INTERACTIVE CONSOLE
        ========================================================= */}

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer Glow */}

            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -inset-2 rounded-[32px] blur-2xl opacity-20"
              style={{
                background: `linear-gradient(135deg, ${slide.color}, ${slide.secondary})`,
              }}
            />

            {/* Main Card */}

            <div className="relative rounded-[30px] border border-white/10 bg-[#080B14]/80 backdrop-blur-2xl overflow-hidden shadow-2xl">
              {/* =====================================================
                  TOP TERMINAL BAR
              ===================================================== */}

              <div className="h-12 px-5 flex items-center border-b border-white/10 bg-white/[0.025]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>

                <div className="flex-1 text-center font-mono text-[11px] text-slate-500">
                  rajan@portfolio:~ / about.exe
                </div>

                <div className="flex items-center gap-2 font-mono text-[9px] text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* =====================================================
                  CONTENT
              ===================================================== */}

              <div className="relative min-h-[480px] p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{
                      opacity: 0,
                      rotateX: 15,
                      scale: 0.94,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      rotateX: 0,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotateX: -15,
                      scale: 0.94,
                      y: -25,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: "easeInOut",
                    }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                  >
                    {/* =================================================
                        LEFT - ORBITING IDENTITY
                    ================================================= */}

                    <div className="lg:col-span-4 flex justify-center">
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Outer Ring */}

                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 rounded-full border border-dashed"
                          style={{
                            borderColor: `${slide.color}55`,
                          }}
                        />

                        {/* Second Ring */}

                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-6 rounded-full border"
                          style={{
                            borderColor: `${slide.secondary}40`,
                          }}
                        />

                        {/* Orbit Dots */}

                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0"
                        >
                          <div
                            className="absolute top-0 left-1/2 w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: slide.color,
                              boxShadow: `0 0 20px ${slide.color}`,
                            }}
                          />
                        </motion.div>

                        {/* Core */}

                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                          className="relative w-32 h-32 rounded-full flex items-center justify-center border border-white/10 bg-black/60 backdrop-blur-xl"
                          style={{
                            boxShadow: `0 0 50px ${slide.color}30`,
                          }}
                        >
                          <Icon
                            className="w-12 h-12"
                            style={{
                              color: slide.color,
                            }}
                          />
                        </motion.div>

                        {/* Floating Tech Particles */}

                        <motion.div
                          animate={{
                            y: [0, -12, 0],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                          className="absolute top-12 right-4"
                        >
                          <Sparkles
                            className="w-5 h-5"
                            style={{ color: slide.color }}
                          />
                        </motion.div>

                        <motion.div
                          animate={{
                            y: [0, 10, 0],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                          }}
                          className="absolute bottom-12 left-5"
                        >
                          <Cpu
                            className="w-4 h-4"
                            style={{ color: slide.secondary }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* =================================================
                        RIGHT - INFORMATION
                    ================================================= */}

                    <div className="lg:col-span-8">
                      {/* Command */}

                      <div className="font-mono text-xs mb-4">
                        <span style={{ color: slide.color }}>
                          rajan@portfolio:~$
                        </span>{" "}
                        <span className="text-slate-400">
                          {slide.command}
                        </span>
                      </div>

                      {/* Title */}

                      <h3 className="text-3xl md:text-4xl font-space font-bold text-white mb-3">
                        {slide.title}
                      </h3>

                      {/* Role */}

                      <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono tracking-widest mb-6"
                        style={{
                          color: slide.color,
                          borderColor: `${slide.color}50`,
                          backgroundColor: `${slide.color}08`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{
                            backgroundColor: slide.color,
                          }}
                        />

                        {slide.role}
                      </div>

                      {/* Description */}

                      <p className="text-slate-300 text-base md:text-lg leading-8 max-w-2xl">
                        {slide.content}
                      </p>

                      {/* =================================================
                          DATA TERMINAL
                      ================================================= */}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
                        {slide.stats.map(([label, value], index) => (
                          <motion.div
                            key={label}
                            whileHover={{
                              y: -5,
                              scale: 1.03,
                            }}
                            className="rounded-xl border border-white/10 bg-black/30 p-4 cursor-default"
                          >
                            <div
                              className="font-mono text-[9px] tracking-widest mb-2"
                              style={{
                                color: slide.color,
                              }}
                            >
                              {label}
                            </div>

                            <div className="text-xs text-slate-300 font-mono">
                              {value}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* =====================================================
                    SCAN LINE
                ===================================================== */}

                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 w-1/3 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${slide.color}, transparent)`,
                  }}
                />
              </div>

              {/* =====================================================
                  BOTTOM CONTROL PANEL
              ===================================================== */}

              <div className="border-t border-white/10 px-6 md:px-10 py-5 flex flex-col md:flex-row items-center gap-5">
                {/* Slide Indicator */}

                <div className="flex items-center gap-3 mr-auto">
                  <span className="font-mono text-xs text-slate-500">
                    0{slide.id}
                  </span>

                  <div className="flex gap-2">
                    {aboutSlides.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setCurrentSlide(index);
                          setIsAutoPlaying(false);
                        }}
                        className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                        style={{
                          width: index === currentSlide ? "42px" : "10px",
                          backgroundColor:
                            index === currentSlide
                              ? slide.color
                              : "rgba(255,255,255,0.15)",
                        }}
                        aria-label={`Open ${item.title}`}
                      />
                    ))}
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    / 0{aboutSlides.length}
                  </span>
                </div>

                {/* Auto Play */}

                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="font-mono text-[10px] text-slate-500 hover:text-white transition-colors"
                >
                  AUTO:
                  <span
                    className="ml-1"
                    style={{
                      color: isAutoPlaying ? "#22C55E" : "#FF3366",
                    }}
                  >
                    {isAutoPlaying ? "ON" : "OFF"}
                  </span>
                </button>

                {/* Navigation */}

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      prevSlide();
                      setIsAutoPlaying(false);
                    }}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => {
                      nextSlide();
                      setIsAutoPlaying(false);
                    }}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      color: slide.color,
                      borderColor: `${slide.color}40`,
                    }}
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}