"use client";

import { motion, useScroll, useSpring } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Globe,
  Code2,
} from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    type: "EDUCATION",
    title: "B.Tech in Computer Science & Engineering",
    company: "Ajay Kumar Garg Engineering College (AKGEC)",
    location: "Ghaziabad, Uttar Pradesh",
    date: "2024 - Present",
    icon: <GraduationCap className="w-10 h-5" />,
    color: "#7C3AED",
    link: "https://www.akgec.ac.in/",
    linkText: "VISIT COLLEGE",
    resumeLink: "\Rajan_Prajapati_Resume.pdf",
    resumeLinkText: "VIEW RESUME",
    points: [
      "CGPA: 8.33 / 10",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },

  {
    type: "SOFTWARE + CYBERSECURITY",
    title: "Software Development & Cybersecurity Intern",
    company: "Amroha Police",
    location: "Uttar Pradesh",
    date: "2026",
    icon: <ShieldCheck className="w-10 h-5" />,
    color: "#00E5FF",
    link: "https://www.linkedin.com/posts/rajanprajapati8795_cyber-security-intership-ugcPost-7475497300681707520--H-v/",
    linkText: "VIEW INTERNSHIP",

    points: [
      "Completed hands-on cybersecurity training focused on security fundamentals, web security, reconnaissance, vulnerability assessment and security testing.",
      "Developed the FIR AI Assistant using MERN Stack to collect incident information and transform user inputs into structured complaint details.",
      "Worked with JavaScript, React, Node.js, Express.js, MongoDB, REST APIs, input validation and modular application architecture.",
      "Applied cybersecurity concepts while designing secure and structured application workflows.",
    ],
  },

  {
    type: "PROJECT",
    title: "Amusement Park Website",
    company: "Frontend Web Project",
    location: "HTML • CSS • JavaScript",
    date: "2025",
    icon: <Globe className="w-10 h-5" />,
    color: "#FF3366",

    points: [
      "Designed and developed a responsive amusement park frontend website.",
      "Focused on interactive UI, responsive layouts and engaging user experience.",
      "Built as a project at the Cloud Computing  Cell Society.",
    ],

    link: "https://amusement-park-gray.vercel.app/",
    linkText: "VIEW LIVE PROJECT",
  },

  {
    type: "PROJECT",
    title: "Registration & Carousel Website",
    company: "Frontend Web Project",
    location: "HTML • CSS • JavaScript",
    date: "2025",
    icon: <Code2 className="w-10 h-5" />,
    color: "#FACC15",

    points: [
      "Created a registration interface with a dedicated interactive carousel.",
      "Built completely using HTML, CSS and JavaScript without a frontend framework.",
      "Focused on clean UI structure, responsive styling and frontend interactions.",
       "Built as a project at the Cloud Computing  Cell Society.",
    ],

    link: "https://registration-and-carousel.vercel.app/register.html",
    linkText: "VIEW LIVE PROJECT",
  },
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 25%"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={timelineRef}
      className="pt-0 pb-0 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute top-[15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#FF3366]/5 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-12"
        >
          <p className="text-[#00E5FF] font-mono text-xs tracking-[0.35em] uppercase mb-3">
            // career.log
          </p>

          <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#7C3AED] to-[#FF3366]">
              Journey
            </span>
          </h2>

          <p className="text-slate-500 font-mono text-sm mt-4">
            Education • Experience • Projects • Growth
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative max-w-7xl mx-auto">

          {/* STATIC CENTER LINE */}

          <div
            className="
              hidden md:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-[2px]
              -translate-x-1/2
              bg-white/10
            "
          />

          {/* GLOWING SCROLL LINE */}

          <motion.div
            style={{
              scaleY: lineProgress,
            }}
            className="
              hidden md:block
              absolute
              left-1/2
              top-0
              h-[calc(100%-32px)]
              w-[3px]
              -translate-x-1/2
              origin-top
              bg-gradient-to-b
              from-[#7C3AED]
              via-[#00E5FF]
              via-[#22C55E]
              via-[#FACC15]
              to-[#FF3366]
              
              shadow-[0_0_10px_#00E5FF,0_0_25px_#7C3AED,0_0_40px_#FF3366]
              z-10
            "
          />

          {/* ================= ITEMS ================= */}

          <div className="space-y-1 md:space-y-4">

            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -70 : 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className={`
                    relative
                    flex
                    items-center
                    ${
                      isLeft
                        ? "md:justify-start"
                        : "md:justify-end"
                    }
                  `}
                >

                  {/* ================= CENTER NODE ================= */}

                  <div
                    className="
                      hidden
                      md:flex
                      absolute
                      left-1/2
                      -translate-x-1/2
                      z-30
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#050816]
                        border-2
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                      "
                      style={{
                        borderColor: item.color,
                        boxShadow: `
                          0 0 15px ${item.color}66,
                          0 0 35px ${item.color}33
                        `,
                      }}
                    >
                      <div
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* ================= CARD ================= */}

                  <div
                    className={`
                      w-full
                      md:w-[48%]
                      ${
                        isLeft
                          ? "md:mr-auto"
                          : "md:ml-auto"
                      }
                    `}
                  >

                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        p-5
                        md:p-5
                        bg-white/[0.045]
                        backdrop-blur-xl
                        border
                        border-white/10
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:bg-white/[0.07]
                      "
                      style={{
                        boxShadow: `0 10px 45px ${item.color}08`,
                      }}
                    >

                      {/* CARD GLOW */}

                      <div
                        className="
                          absolute
                          -top-28
                          -right-28
                          w-60
                          h-60
                          rounded-full
                          blur-[90px]
                          opacity-0
                          group-hover:opacity-30
                          transition-opacity
                          duration-500
                          pointer-events-none
                        "
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      {/* CONTENT */}

                      <div className="relative z-10">

                        {/* TOP */}

                        <div className="flex items-start justify-between gap-0">

                          <div className="min-w-0">

                            {/* TYPE */}

                            <div
                              className="
                                flex
                                items-center
                                gap-2
                                font-mono
                                text-[10px]
                                tracking-[0.22em]
                                mb-3
                              "
                              style={{
                                color: item.color,
                              }}
                            >

                              <span
                                className="
                                  w-2
                                  h-2
                                  rounded-full
                                  animate-pulse
                                "
                                style={{
                                  backgroundColor: item.color,
                                  boxShadow: `0 0 8px ${item.color}`,
                                }}
                              />

                              {item.type}

                            </div>

                            {/* TITLE */}

                            <h3
                              className="
                                text-xl
                                md:text-2xl
                                font-bold
                                text-white
                                leading-tight
                                group-hover:text-[#00E5FF]
                                transition-colors
                                duration-300
                              "
                            >
                              {item.title}
                            </h3>

                            {/* COMPANY */}

                            <p className="text-slate-400 text-sm mt-2">
                              {item.company}
                            </p>

                            <p className="text-slate-600 text-xs mt-1 font-mono">
                              {item.location}
                            </p>

                          </div>

                          {/* DATE */}

                          <span
                            className="
                              shrink-0
                              px-3
                              py-1.5
                              rounded-full
                              text-[10px]
                              font-mono
                              border
                            "
                            style={{
                              color: item.color,
                              borderColor: `${item.color}40`,
                              backgroundColor: `${item.color}10`,
                            }}
                          >
                            {item.date}
                          </span>

                        </div>

                        {/* DIVIDER */}

                        <div
                          className="
                            w-full
                            h-[1px]
                            my-5
                            opacity-30
                          "
                          style={{
                            backgroundColor: item.color,
                          }}
                        />

                        {/* POINTS */}

                        <ul className="space-y-2.5">

                          {item.points.map((point, i) => (

                            <li
                              key={i}
                              className="
                                flex
                                gap-3
                                text-sm
                                text-slate-300
                                leading-relaxed
                              "
                            >

                              <span
                                className="
                                  mt-[7px]
                                  w-1.5
                                  h-1.5
                                  rounded-full
                                  shrink-0
                                "
                                style={{
                                  backgroundColor: item.color,
                                  boxShadow: `0 0 8px ${item.color}`,
                                }}
                              />

                              <span>
                                {point}
                              </span>

                            </li>

                          ))}

                        </ul>

                        {/* PROJECT LINK */}
                         
                        {/* VISIT COLLEGE */}
                        {"link" in item && item.link && (
                          <div className="mt-5 flex items-center gap-3">

                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-lg
                                border
                                text-[10px]
                                font-mono
                                tracking-wider
                                transition-all
                                duration-300
                                hover:scale-105
                              "
                              style={{
                                color: item.color,
                                borderColor: `${item.color}40`,
                                backgroundColor: `${item.color}08`,
                              }}
                            >
                              <span>
                                ↗
                              </span>

                              {item.linkText}
                            </a>

                          </div>
                        )}
                        {"resumeLink" in item && item.resumeLink && (
                          <div className="mt-3">
                           <a
                             href={item.resumeLink}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="
                               inline-flex
                               items-center
                               gap-2
                               px-4
                               py-2
                               rounded-lg
                               border
                               text-[10px]
                               font-mono
                               tracking-wider
                               transition-all
                               duration-300
                               hover:scale-105
                               text-[#7C3AED] 
                               border-[#7C3AED]/40
                               bg-[#7C3AED]/5
                               hover:bg-[#7C3AED]/15 
                               hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"  >
                             <span>↗</span>
                             {item.resumeLinkText}
                           </a>
                         </div>
                        )}

                        {/* FOOTER */}

                        <div
                          className="
                            mt-5
                            pt-3
                            border-t
                            border-white/5
                            flex
                            items-center
                            justify-between
                            font-mono
                            text-[9px]
                            text-slate-600
                          "
                        >

                          <span>
                            NODE_{String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="group-hover:text-white/50 transition-colors">
                            VERIFIED
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* ================= END NODE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex justify-center mt-12"
          >

            <div
              className="
                px-5
                py-2
                rounded-full
                border
                border-[#00E5FF]/30
                bg-[#00E5FF]/5
                text-[#00E5FF]
                font-mono
                text-xs
                shadow-[0_0_20px_rgba(0,229,255,0.15)]
              "
            >

              <span className="animate-pulse">
                ●
              </span>

              {" "}
              CURRENTLY BUILDING

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}