"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "Explainable Multi-Modal Phishing Detection System",
    description:
      "A cybersecurity-focused full-stack project designed to analyze multiple website and URL indicators and provide an explainable risk assessment. The system focuses on identifying suspicious characteristics and presenting security-related insights in an understandable format. The project is currently under development.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Cybersecurity",
      "Phishing Detection",
    ],
    image: "/projects/Phising.jpg",
    live: "#",
    github: "#",
    color: "from-[#FF3366]/30 to-orange-500/20",
  },

  {
    title: "FIR AI Assistant",
    description:
      "An AI-assisted web application designed to help users organize incident information into structured complaint details. The application provides a user-friendly interface for collecting information and generating organized responses. Built as a practical project combining web development and cybersecurity concepts.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "MERN",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: "/projects/FIR.jpg",
    live: "https://fir-assistantt.vercel.app/",
    github: "https://github.com/Krishnadevyadav1/fir-assistantt",
    color: "from-[#00E5FF]/30 to-[#7C3AED]/20",
  },

  {
    title: "Password Strength Checker",
    description:
      "A frontend security utility that evaluates password strength based on different password characteristics. The interface provides immediate visual feedback to help users understand whether a password is weak, moderate, or strong and encourages better password practices.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Password Security",
      "Frontend",
    ],
    image: "/projects/password.jpg",
    live: "https://password-strengthchecker.vercel.app/",
    github: "https://github.com/Rajan8795/password-strengthchecker",
    color: "from-green-500/30 to-emerald-500/20",
  },

  {
    title: "Amusement Park Website",
    description:
      "A responsive amusement park website created as a frontend web project for the Cloud Computing Cell Society. The website focuses on an engaging visual interface, responsive layouts, navigation and interactive frontend elements using core web technologies.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend",
    ],
    image: "/projects/amusement.jpg",
    live: "https://amusement-park-gray.vercel.app/",
    github: "https://github.com/Rajan8795/amusement-park",
    color: "from-pink-500/30 to-purple-500/20",
  },

  {
    title: "Loan Prediction Website",
    description:
      "A web-based loan prediction interface that allows users to enter relevant financial information and receive prediction results. The project focuses on creating a clean frontend experience for interacting with a prediction system and presenting results in an understandable way.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Machine Learning",
      "Frontend",
    ],
    image: "/projects/Loan.jpg",
    live: "https://loan-predictioner.vercel.app/",
    github: "https://github.com/Rajan8795/Loan__prediction",
    color: "from-cyan-500/30 to-blue-500/20",
  },

  {
    title: "Box Office Revenue Prediction",
    description:
      "A movie revenue prediction web project that provides an interface for entering movie-related information and displaying prediction results. The project combines a clean frontend interface with data-driven prediction functionality and visual presentation of results.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Machine Learning",
      "Data Visualization",
    ],
    image: "/projects/BoxOffice.jpg",
    live: "https://box-office-revenue.vercel.app/",
    github: "https://github.com/Rajan8795/BoxOfficeRevenue",
    color: "from-purple-500/30 to-indigo-500/20",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const targetX = useMotionValue(0);

  const smoothX = useSpring(targetX, {
    stiffness: 55,
    damping: 18,
    mass: 0.8,
  });

  const [maxScroll, setMaxScroll] = useState(0);
  const [progress, setProgress] = useState(0);

  /*
  ============================================================
  CALCULATE HORIZONTAL TRAVEL
  ============================================================
  */

  useEffect(() => {
    const calculateScroll = () => {
      if (!trackRef.current || !viewportRef.current) return;

      const track = trackRef.current;
      const viewport = viewportRef.current;

      const distance = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth
      );

      setMaxScroll(distance);

      const current = targetX.get();

      if (current < -distance) {
        targetX.set(-distance);
      }

      if (current > 0) {
        targetX.set(0);
      }
    };

    calculateScroll();

    window.addEventListener("resize", calculateScroll);

    return () => {
      window.removeEventListener("resize", calculateScroll);
    };
  }, [targetX]);

  /*
  ============================================================
  PROGRESS BAR
  ============================================================
  */

  useEffect(() => {
    const unsubscribe = smoothX.on("change", (value) => {
      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      const valueProgress = Math.abs(value) / maxScroll;

      setProgress(
        Math.min(
          1,
          Math.max(0, valueProgress)
        )
      );
    });

    return () => unsubscribe();
  }, [smoothX, maxScroll]);

  /*
  ============================================================
  MOUSE CURSOR HORIZONTAL CONTROL
  ============================================================

  IMPORTANT:
  Movement is attached ONLY to project cards.
  Cursor outside cards = NO movement.
  ============================================================
  */

  const handleCardMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (maxScroll <= 0) return;

    const section = sectionRef.current;

    if (!section) return;

    const rect = section.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;

    const percentage = mouseX / rect.width;

    const clampedPercentage = Math.min(
      1,
      Math.max(0, percentage)
    );

    const nextX = -maxScroll * clampedPercentage;

    targetX.set(nextX);
  };

  /*
  ============================================================
  KEEP POSITION WHEN MOUSE LEAVES CARD
  ============================================================
  */

  const handleCardMouseLeave = () => {
    // Project stays at its current position.
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        h-screen
        w-full
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#00E5FF]/[0.045]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#7C3AED]/[0.05]
          blur-[140px]
        "
      />

      {/* =====================================================
          MAIN PROJECT SCREEN
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          flex-col
          px-4
          py-5
          md:px-8
          md:py-6
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="shrink-0 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <p
              className="
                font-mono
                text-[9px]
                tracking-[0.35em]
                text-[#00E5FF]
                md:text-xs
              "
            >
              // PROJECTS.EXE
            </p>

            <h2
              className="
                mt-1
                text-3xl
                font-bold
                tracking-tight
                md:text-4xl
                lg:text-5xl
              "
            >
              Featured{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#00E5FF]
                  via-[#7C3AED]
                  to-[#FF3366]
                  bg-clip-text
                  text-transparent
                "
              >
                Projects
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-1.5
                max-w-xl
                font-mono
                text-[9px]
                leading-4
                text-slate-500
                md:text-[11px]
                md:leading-5
              "
            >
              A collection of projects built with web
              technologies, software engineering and
              cybersecurity concepts.
            </p>

            {/* Progress */}

            <div
              className="
                mt-0
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <span
                className="
                  font-mono
                  text-[8px]
                  text-slate-600
                "
              >
                01
              </span>

              <div
                className="
                  h-[2px]
                  w-28
                  overflow-hidden
                  rounded-full
                  bg-white/10
                  md:w-40
                "
              >
                <div
                  className="
                    h-full
                    bg-gradient-to-r
                    from-[#00E5FF]
                    via-[#7C3AED]
                    to-[#FF3366]
                    transition-[width]
                    duration-100
                  "
                  style={{
                    width: `${progress * 100}%`,
                  }}
                />
              </div>

              <span
                className="
                  font-mono
                  text-[8px]
                  text-slate-600
                "
              >
                06
              </span>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            CARD AREA
        =================================================== */}

        <div
          ref={viewportRef}
          className="
            relative
            flex
            flex-1
            min-h-0
            items-center
            overflow-visible
          "
        >
          <motion.div
            ref={trackRef}
            style={{
              x: smoothX,
            }}
            className="
              flex
              w-max
              items-center
              gap-2
              pl-[120px]
              pr-[120px]
            "
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                className="
                  group
                  relative
                  shrink-0

                  h-[66vh]
                  w-[82vw]

                  max-h-[600px]
                  max-w-[900px]

                  overflow-hidden

                  rounded-[38px]

                  border
                  <border-white />
                  <5></5>

                  bg-white/[0.05]

                  shadow-[0_25px_90px_rgba(0,0,0,.45)]

                  backdrop-blur-[70px]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#00E5FF]/50
                  hover:scale-[1.02]

                  md:h-[65vh]
                  md:w-[82vw]

                  lg:w-[78vw]
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* =================================================
                    OUTER 3D GLOW
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -inset-1
                    rounded-[34px]
                    bg-gradient-to-br
                    ${project.color}
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  `}
                />

                {/* =================================================
                    GLASS HIGHLIGHT
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-30
                    rounded-[32px]
                    bg-gradient-to-br
                    from-white/[0.07]
                    via-transparent
                    to-transparent
                  "
                />

                {/* =================================================
                    3D CARD CONTENT
                ================================================= */}

                <div
                  className="
                    relative
                    z-20
                    grid
                    h-full
                    min-h-0
                    grid-cols-1
                    lg:grid-cols-[1.05fr_0.95fr]
                  "
                >
                  {/* =================================================
                      LEFT CONTENT
                  ================================================= */}

                  <div
                    className="
                      flex
                      min-w-0
                      min-h-0
                      flex-col
                      justify-center
                      overflow-hidden
                      p-6
                      md:p-8
                      lg:p-10
                    "
                    style={{
                      transform: "translateZ(20px)",
                    }}
                  >
                    {/* Project label */}

                    <div>
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-[#00E5FF]/30
                          bg-[#00E5FF]/[0.05]
                          px-3
                          py-1.5
                          font-mono
                          text-[9px]
                          tracking-wider
                          text-[#00E5FF]
                          backdrop-blur-xl
                        "
                      >
                        PROJECT_
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-4
                        max-w-[620px]
                        text-2xl
                        font-bold
                        leading-[1.1]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#00E5FF]
                        md:text-3xl
                        lg:text-4xl
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-4
                        max-w-[610px]
                        line-clamp-4
                        text-[11px]
                        leading-5
                        text-slate-400
                        md:text-[13px]
                        md:leading-6
                      "
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}

                    <div
                      className="
                        mt-4
                        flex
                        max-w-[620px]
                        flex-wrap
                        gap-1.5
                      "
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.035]
                            px-2.5
                            py-1.5
                            font-mono
                            text-[9px]
                            text-slate-300
                            transition-all
                            group-hover:border-[#00E5FF]/25
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}

                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2.5
                      "
                    >
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-1
                            rounded-xl
                            border
                            border-[#00E5FF]/30
                            bg-[#00E5FF]/10
                            px-4
                            py-2.5
                            font-mono
                            text-[9px]
                            text-[#00E5FF]
                            transition-all
                            hover:bg-[#00E5FF]
                            hover:text-black
                            hover:shadow-[0_0_30px_rgba(0,229,255,0.35)]
                          "
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          LIVE PROJECT
                        </a>
                      )}

                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-1
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-4
                            py-2.5
                            font-mono
                            text-[9px]
                            text-white
                            transition-all
                            hover:border-white/30
                            hover:bg-white/10
                          "
                        >
                          <GithubIcon />
                          SOURCE CODE
                        </a>
                      )}
                    </div>

                    {/* =================================================
                        PHISHING ONGOING STATUS
                    ================================================= */}

                    {index === 0 && (
                      <div
                        className="
                          mt-4
                          inline-flex
                          w-fit
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#FF3366]/25
                          bg-[#FF3366]/[0.06]
                          px-3
                          py-1.5
                          font-mono
                          text-[8px]
                          tracking-[0.18em]
                          text-[#FF6688]
                          shadow-[0_0_20px_rgba(255,51,102,0.08)]
                        "
                      >
                        <span
                          className="
                            relative
                            flex
                            h-1.5
                            w-1.5
                          "
                        >
                          <span
                            className="
                              absolute
                              inline-flex
                              h-full
                              w-full
                              animate-ping
                              rounded-full
                              bg-[#FF3366]
                              opacity-75
                            "
                          />

                          <span
                            className="
                              relative
                              inline-flex
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#FF3366]
                            "
                          />
                        </span>

                        PROJECT ONGOING
                      </div>
                    )}

                    {/* Status */}

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        border-t
                        border-white/[0.07]
                        pt-3
                        font-mono
                        text-[8px]
                        tracking-widest
                        text-slate-600
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#00E5FF]
                          shadow-[0_0_10px_#00E5FF]
                        "
                      />

                      SYSTEM_READY

                      <span className="ml-auto">
                        NODE_
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      RIGHT IMAGE
                  ================================================= */}

                  <div
                    className="
                      relative
                      min-h-0
                      overflow-hidden
                      lg:block
                    "
                    style={{
                      transform: "translateZ(30px)",
                    }}
                  >
                    {/* =================================================
                        CLICKABLE IMAGE
                    ================================================= */}

                    {project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          absolute
                          inset-0
                          z-10
                          block
                          cursor-pointer
                        "
                        aria-label={`Open ${project.title}`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="
                            object-contain
                            p-5
                            transition-transform
                            duration-700
                            group-hover:scale-[1.03]
                            group-hover:-translate-y-2
                            group-hover:translate-x-2
                          "
                        />
                      </a>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                          object-contain
                          p-5
                          transition-transform
                          duration-700
                          group-hover:scale-[1.03]
                          group-hover:-translate-y-2
                          group-hover:translate-x-2
                        "
                      />
                    )}

                    {/* Image dark overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-20
                        bg-gradient-to-r
                        from-[#080b18]/10
                        via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-20
                        bg-gradient-to-t
                        from-[#080b18]/15
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Image glass frame */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-5
                        z-20
                        rounded-[26px]
                        border
                        border-white/10
                        bg-transparent
                      "
                    />

                    {/* Open project */}

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          absolute
                          right-8
                          top-8
                          z-30
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/15
                          bg-black/30
                          text-[#00E5FF]
                          backdrop-blur-xl
                          transition-all
                          hover:scale-110
                          hover:border-[#00E5FF]/50
                        "
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                    {/* Image number */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-8
                        right-8
                        z-30
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-3
                        py-1
                        font-mono
                        text-[8px]
                        text-white/60
                        backdrop-blur-xl
                      "
                    >
                      VISUAL_
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM HINT
        =================================================== */}

        <div
          className="
            shrink-0
            pt-1
            text-center
            font-mono
            text-[8px]
            tracking-[0.25em]
            text-slate-600
          "
        >
          ← MOVE CURSOR LEFT / RIGHT TO EXPLORE PROJECTS →
        </div>
      </div>
    </section>
  );
}