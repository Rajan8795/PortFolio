"use client";

import { motion, useAnimation } from "motion/react";
import {
  ShieldCheck,
  Globe,
  Network,
  Layers,
  Code2,
  Database,
  GitBranch,
  Server,
  Terminal,
  Braces,
  Shield,
  Wind,
} from "lucide-react";

const skills = [
  {
    name: "Java",
    icon: <Code2 />,
    level: "Intermediate",
    category: "Programming",
    description:
      "Strong foundation in Java programming, OOP, collections, exception handling, and problem solving with DSA.",
    technologies: ["OOP", "Collections", "DSA", "Exception Handling"],
    color: "#F89820",
  },
  {
    name: "Tailwind CSS",
    icon: <Wind />,
    level: "Advanced",
    category: "Frontend",
    description:
      "Creating responsive and modern interfaces using utility-first CSS and custom design systems.",
    technologies: ["Responsive", "Utilities", "Animations", "UI"],
    color: "#38BDF8",
  },

  {
    name: "JavaScript",
    icon: <Braces />,
    level: "Advanced",
    category: "Programming",
    description:
      "Used for building interactive web applications and implementing modern frontend and backend functionality.",
    technologies: ["ES6+", "DOM", "Async/Await", "APIs"],
    color: "#F7DF1E",
  },

  {
    name: "React.js",
    icon: <Code2 />,
    level: "Intermediate",
    category: "Frontend",
    description:
      "Building component-based, responsive and interactive user interfaces with reusable React components.",
    technologies: ["Components", "Hooks", "State", "Props"],
    color: "#61DAFB",
  },
  {
  name: "Next.js",
  icon: <Layers />,
  level: "Intermediate",
  category: "Software Engineering",
  description:
    "Developing production-ready web applications with Next.js using routing, server-side rendering, API routes and optimized performance.",
  technologies: ["Next.js", "App Router", "SSR", "API Routes", "Optimization"],
  color: "#FFFFFF",
  },

  {
    name: "Node.js",
    icon: <Server />,
    level: "Intermediate",
    category: "Backend",
    description:
      "Building backend services and APIs using Node.js with asynchronous and event-driven architecture.",
    technologies: ["REST API", "Async", "NPM", "HTTP"],
    color: "#68A063",
  },
  {
  name: "Express.js",
  icon: <Network />,
  level: "Intermediate",
  category: "Software Engineering",
  description:
    "Building lightweight and modular backend APIs with routing, middleware, authentication and request-response handling.",
  technologies: ["Express.js", "REST API", "Middleware", "Routing", "Authentication"],
  color: "#FFFFFF",
  },
  {
  name: "SQL",
  icon: <Database />,
  level: "Intermediate",
  category: "Software Engineering",
  description:
    "Experienced with both NoSQL and relational databases for designing, querying and managing application data across full-stack projects.",
  technologies: [
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Mongoose",
    "CRUD",
    "Joins",
    "Database Design",
  ],
  color: "#336791",
  },

  {
    name: "MongoDB",
    icon: <Database />,
    level: "Intermediate",
    category: "Database",
    description:
      "Working with NoSQL databases, collections, documents, CRUD operations and application data modeling.",
    technologies: ["NoSQL", "CRUD", "Documents", "Queries"],
    color: "#47A248",
  },
  {
  name: "Python",
  icon: <Code2 />,
  level: "Intermediate",
  category: "Software Engineering",
  description:
    "Using Python for programming, automation, scripting, problem solving and cybersecurity-related development tasks.",
  technologies: ["Python", "Scripting", "Automation", "OOP"],
  color: "#3776AB",
  },
  {
  name: "REST APIs",
  icon: <Globe />,
  level: "Intermediate",
  category: "Software Engineering",
  description:
    "Designing and consuming RESTful APIs for communication between frontend applications, backend services and databases.",
  technologies: ["REST", "HTTP", "JSON", "API Integration", "CRUD"],
  color: "#00E5FF",
 },

  {
    name: "Git & GitHub",
    icon: <GitBranch />,
    level: "Advanced",
    category: "Tools",
    description:
      "Using Git for version control, branching, commits, merging and maintaining project history.",
    technologies: ["Git", "GitHub", "Branches", "Version Control"],
    color: "#F05032",
  },

  {
    name: "Linux",
    icon: <Terminal />,
    level: "Intermediate",
    category: "System",
    description:
      "Comfortable working with Linux environments, terminal commands, file systems and development tooling.",
    technologies: ["Terminal", "Bash", "Kali Linux", "CLI"],
    color: "#00E5FF",
  },

  {
    name: "Cybersecurity",
    icon: <Shield />,
    level: "Intermediate",
    category: "Security",
    description:
      "Hands-on understanding of cybersecurity fundamentals, web security, network analysis and security testing.",
    technologies: ["Burp Suite", "Nmap", "Wireshark", "Web Security"],
    color: "#FF3366",
  },
  {
  name: "Ethical Hacking & Pentesting",
  icon: <ShieldCheck/>,
  level: "Advanced",
  category: "Cybersecurity",
  description:
    "Hands-on understanding of ethical hacking and penetration testing methodologies for identifying, analyzing and responsibly reporting security weaknesses.",
  technologies: [
    "Reconnaissance",
    "Vulnerability Assessment",
    "Web Pentesting",
    "Network Security",
    "Security Testing",
  ],
  color: "#FF3366",
 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="pt-5 pb-24 relative overflow-hidden"
    >
      {/* Background glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#7C3AED]/10 blur-[140px] rounded-full" />
      </div>

      {/* Heading */}

      <div className="relative z-10 text-center mb-8 px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-space font-bold"
        >
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#7C3AED] to-[#FF3366]">
            Arsenal
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-5 max-w-3xl mx-auto text-slate-400 font-mono text-sm md:text-base"
        >
          A comprehensive ecosystem of languages, frameworks, and tools I use
          to architect and build scalable software solutions.
        </motion.p>

        <div className="mt-4 text-[#00E5FF] text-xs font-mono tracking-[0.3em]">
          ← DRAG OR HOVER TO EXPLORE →
        </div>
      </div>

      {/* Moving Skills */}

      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-6 w-max px-6 skills-track" >

          {[...skills, ...skills].map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              skill={skill}
            />
          ))}

        </motion.div>

      </div>

      {/* Bottom hint */}

      <div className="relative z-8 mt-6 text-center">
        <span className="text-xs font-mono text-slate-500">
          SYSTEM STATUS: ALL SYSTEMS OPERATIONAL
        </span>
      </div>
    </section>
  );
}


/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ skill }: { skill: any }) {

  return (
    <motion.div
      whileHover={{
        rotateX: 4,
        rotateY: -10,
        scale: 1.08,
        y: -12,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative w-[260px] h-[320px] shrink-0 cursor-pointer"
    >

      {/* Outer glow */}

      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          background: skill.color,
        }}
      />

      {/* Glass card */}

      <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/[0.055] backdrop-blur-2xl overflow-hidden shadow-2xl">

        {/* Top shine */}

        <div
          className="absolute inset-x-0 top-0 h-[2px] opacity-50"
          style={{
            background: skill.color,
          }}
        />

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-[size:30px_30px]" />

        {/* Normal Card */}

        <div className="relative z-10 h-full p-7 flex flex-col">

          {/* Icon */}

          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-black/30 transition-all duration-500 group-hover:scale-110"
            style={{
              color: skill.color,
              boxShadow: `0 0 25px ${skill.color}30`,
            }}
          >
            <div className="w-9 h-9">
              {skill.icon}
            </div>
          </div>

          {/* Name */}

          <h3 className="mt-6 text-xl font-bold text-white">
            {skill.name}
          </h3>

          {/* Category */}

          <div
            className="mt-2 text-xs font-mono"
            style={{
              color: skill.color,
            }}
          >
            {skill.category}
          </div>

          {/* Level */}

          <div className="mt-auto">

            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-slate-500">
                PROFICIENCY
              </span>

              <span className="text-white">
                {skill.level}
              </span>
            </div>

            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width:
                    skill.level === "Advanced"
                      ? "88%"
                      : "70%",
                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full"
                style={{
                  background: skill.color,
                }}
              />

            </div>

          </div>

        </div>


        {/* HOVER DETAIL PANEL */}

        <div className="absolute inset-0 z-20 p-6 bg-black/85 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col">

          <div className="flex items-center justify-between">

            <span
              className="text-xs font-mono tracking-widest"
              style={{
                color: skill.color,
              }}
            >
              SYSTEM://SKILL
            </span>

            <span className="text-xs text-slate-600 font-mono">
              0x{skill.name.length}F
            </span>

          </div>

          <h3
            className="text-2xl font-bold mt-6"
            style={{
              color: skill.color,
            }}
          >
            {skill.name}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mt-4">
            {skill.description}
          </p>

          <div className="mt-auto">

            <div className="text-[10px] text-slate-500 font-mono mb-3 tracking-widest">
              CORE TECHNOLOGIES
            </div>

            <div className="flex flex-wrap gap-2">

              {skill.technologies.map(
                (tech: string) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}