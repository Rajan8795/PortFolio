"use client";

import {
  Code2,
  Copy,
  TerminalSquare,
} from "lucide-react";
import { useState, useEffect } from "react";

/* =========================================================
   GITHUB ICON
========================================================= */

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
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

/* =========================================================
   LINKEDIN ICON
========================================================= */

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* =========================================================
   X / TWITTER ICON
========================================================= */

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

/* =========================================================
   INSTAGRAM ICON
========================================================= */

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect
      width="20"
      height="20"
      x="2"
      y="2"
      rx="5"
      ry="5"
    />

    <path d="M16 11.37a4 4 0 1 1-3.37-3.37A4 4 0 0 1 16 11.37z" />

    <line
      x1="17.5"
      x2="17.51"
      y1="6.5"
      y2="6.5"
    />
  </svg>
);

/* =========================================================
   YOUTUBE ICON
========================================================= */

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />

    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const [githubData, setGithubData] = useState({
    repos: 0,
    lastCommit: "Fetching...",
  });

  const [localTime, setLocalTime] = useState("");

  const [scrollProgress, setScrollProgress] =
    useState(0);

  /* =======================================================
     SCROLL PROGRESS
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollTop;

      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (windowHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const scroll = Math.round(
        (totalScroll / windowHeight) * 100
      );

      setScrollProgress(
        Math.min(100, Math.max(0, scroll))
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* =======================================================
     CLOCK
  ======================================================= */

  useEffect(() => {
    const updateClock = () => {
      setLocalTime(
        new Date().toLocaleTimeString(
          "en-US",
          {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Kolkata",
          }
        ) + " IST"
      );
    };

    updateClock();

    const timer = setInterval(
      updateClock,
      1000
    );

    return () =>
      clearInterval(timer);
  }, []);

  /* =======================================================
     GITHUB DATA
  ======================================================= */

  useEffect(() => {
    async function fetchGithub() {
      try {
        const res = await fetch(
          "https://api.github.com/users/Rajan8795"
        );

        if (!res.ok) {
          throw new Error(
            "GitHub API error"
          );
        }

        const data = await res.json();

        const eventsRes =
          await fetch(
            "https://api.github.com/users/Rajan8795/events/public?per_page=1"
          );

        const events =
          eventsRes.ok
            ? await eventsRes.json()
            : [];

        let timeAgo = "Recently";

        if (
          Array.isArray(events) &&
          events.length > 0
        ) {
          const lastEventDate =
            new Date(
              events[0].created_at
            );

          const now = new Date();

          const diffInHours =
            Math.floor(
              (now.getTime() -
                lastEventDate.getTime()) /
                (1000 * 60 * 60)
            );

          if (
            diffInHours < 24 &&
            diffInHours > 0
          ) {
            timeAgo =
              `~${diffInHours} hours ago`;
          } else if (
            diffInHours === 0
          ) {
            timeAgo = "Just now";
          } else {
            timeAgo =
              `${Math.floor(
                diffInHours / 24
              )} days ago`;
          }
        }

        setGithubData({
          repos:
            data.public_repos || 0,
          lastCommit: timeAgo,
        });
      } catch {
        setGithubData({
          repos: 0,
          lastCommit:
            "Unavailable",
        });
      }
    }

    fetchGithub();
  }, []);

  /* =======================================================
     COPY EMAIL
  ======================================================= */

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "kingprajapati391@gmail.com"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  /* =======================================================
     SCROLL TOP
  ======================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          relative
          mt-20
          overflow-hidden
          border-t
          border-white/5
          bg-[#050816]
          pt-16
          pb-32
        "
      >
        {/* Background */}

        <div
          className="
            absolute
            inset-0
            z-0
            opacity-10
            bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
            from-[#00E5FF]
            via-[#050816]
            to-[#050816]
          "
        />

        <div
          className="
            container
            relative
            z-10
            mx-auto
            px-6
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-8
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {/* =================================================
                COLUMN 1
            ================================================= */}

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span
                  className="
                    font-space
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  Rajan Prajapati
                </span>
              </div>

              <p className="text-sm text-slate-400">
                Software Development
                Engineer building scalable
                systems and modern web
                experiences.
              </p>

              <div
                className="
                  group
                  flex
                  cursor-default
                  items-center
                  space-x-2
                  text-sm
                  text-green-400
                "
              >
                <span className="relative flex h-3 w-3">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-green-400
                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-green-500
                    "
                  />
                </span>

                <span className="font-mono group-hover:hidden">
                  Open to opportunities
                </span>

                <span
                  className="
                    hidden
                    font-mono
                    text-xs
                    group-hover:inline
                  "
                >
                  Internship · Full-Time
                </span>
              </div>
            </div>

            {/* =================================================
                COLUMN 2
                SYSTEM STATUS
            ================================================= */}

            <div className="space-y-4">
              <h4
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-widest
                  text-white
                "
              >
                System Status
              </h4>

              <div
                className="
                  space-y-2
                  font-mono
                  text-sm
                  text-slate-400
                "
              >
                <div
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    pb-1
                  "
                >
                  <span>
                    API Status
                  </span>

                  <span
                    className="
                      text-green-400
                      transition-colors
                      group-hover:text-[#00E5FF]
                    "
                  >
                    Operational
                  </span>
                </div>

                <div
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    pb-1
                  "
                >
                  <span>
                    Last Commit
                  </span>

                  <span
                    className="
                      text-slate-300
                      transition-colors
                      group-hover:text-[#00E5FF]
                    "
                  >
                    {githubData.lastCommit}
                  </span>
                </div>

                <div
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    pb-1
                  "
                >
                  <span>
                    Public Repos
                  </span>

                  <span
                    className="
                      text-[#00E5FF]
                      transition-transform
                      group-hover:scale-110
                    "
                  >
                    {githubData.repos}
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                COLUMN 3
                PLATFORMS + SOCIALS
            ================================================= */}

            <div className="space-y-7">
              {/* ================= PLATFORMS ================= */}

              <div className="space-y-4">
                <h4
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-widest
                    text-white
                  "
                >
                  Platforms
                </h4>

                <div className="flex flex-wrap gap-3">
                  {/* GitHub */}

                  <a
                    href="https://github.com/Rajan8795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-[#00E5FF]/20
                      hover:text-[#00E5FF]
                    "
                    title="GitHub"
                  >
                    <GithubIcon />
                  </a>

                  {/* LinkedIn */}

                  <a
                    href="https://www.linkedin.com/in/rajanprajapati8795/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-[#7C3AED]/20
                      hover:text-[#7C3AED]
                    "
                    title="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>

                  {/* LeetCode */}

                  <a
                    href="https://leetcode.com/u/Rajan_Prajapati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-orange-500/20
                      hover:text-orange-500
                    "
                    title="LeetCode"
                  >
                    <Code2 className="h-5 w-5" />
                  </a>

                  {/* GFG */}

                  <a
                    href="https://www.geeksforgeeks.org/profile/kingprajai4ik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-green-500/20
                      hover:text-green-500
                    "
                    title="GeeksForGeeks"
                  >
                    <span className="text-xs font-bold">
                      GFG
                    </span>
                  </a>

                  {/* HackerRank */}

                  <a
                    href="https://www.hackerrank.com/profile/kingprajapati391"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-green-400/20
                      hover:text-green-400
                    "
                    title="HackerRank"
                  >
                    <span className="text-[9px] font-bold">
                      HR
                    </span>
                  </a>
                </div>
              </div>

              {/* ================= SOCIALS ================= */}

              <div className="space-y-4">
                <h4
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-widest
                    text-white
                  "
                >
                  Socials
                </h4>

                <div className="flex flex-wrap gap-3">
                  {/* Instagram */}

                  <a
                    href="https://www.instagram.com/rajan__87/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-pink-500/20
                      hover:text-pink-400
                    "
                    title="Instagram"
                  >
                    <InstagramIcon />
                  </a>

                  {/* X */}

                  <a
                    href="https://x.com/Kingprajap9679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-white/10
                      hover:text-white
                    "
                    title="X"
                  >
                    <XIcon />
                  </a>

                  {/* YouTube */}

                  <a
                    href="https://www.youtube.com/@multicontent-o7u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/5
                      transition-all
                      hover:-translate-y-1
                      hover:bg-red-500/20
                      hover:text-red-500
                    "
                    title="YouTube"
                  >
                    <YoutubeIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* =================================================
                COLUMN 4
                CONTACT
            ================================================= */}

            <div
              className="
                flex
                flex-col
                items-start
                space-y-4
                lg:items-end
              "
            >
              <button
                onClick={handleCopy}
                className="
                  flex
                  items-center
                  space-x-2
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  text-white
                  transition-all
                  hover:border-[#00E5FF]/50
                  hover:bg-[#00E5FF]/10
                "
              >
                <Copy
                  className="
                    h-4
                    w-4
                    text-[#00E5FF]
                    transition-transform
                    group-hover:scale-110
                  "
                />

                <span className="font-mono">
                  {copied
                    ? "Copied!"
                    : "kingprajapati391@gmail.com"}
                </span>
              </button>

              <div
                className="
                  mt-2
                  flex
                  flex-col
                  items-start
                  gap-1
                  font-mono
                  text-xs
                  text-slate-400
                  lg:items-end
                "
              >
                <span>
                  Phone:{" "}
                  <span className="text-white">
                    8795930332
                  </span>
                </span>

                <span>
                  Loc:{" "}
                  <span className="text-white">
                    Ghaziabad, India
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          BOTTOM COMPACT STATUS BAR
      ===================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          flex
          flex-col
          items-center
          justify-between
          gap-4
          border-t
          border-white/10
          bg-[#09111F]/80
          px-4
          py-3
          backdrop-blur-2xl
          md:flex-row
          md:px-8
        "
      >
        {/* LEFT SIDE */}

        <div
          className="
            hide-scrollbar
            flex
            w-full
            items-center
            gap-4
            overflow-x-auto
            whitespace-nowrap
            pb-2
            md:w-auto
            md:gap-8
            md:pb-0
          "
        >
          {/* System */}

          <div
            className="
              flex
              flex-shrink-0
              items-center
              gap-2
            "
          >
            <div
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-green-500
                shadow-[0_0_10px_rgba(34,197,94,0.5)]
              "
            />

            <span
              className="
                font-mono
                text-[10px]
                text-slate-300
              "
            >
              SYSTEMS OPERATIONAL
            </span>
          </div>

          {/* Divider */}

          <div
            className="
              hidden
              h-4
              w-[1px]
              bg-white/10
              md:block
            "
          />

          {/* Local Time */}

          <div
            className="
              flex-shrink-0
              font-mono
              text-[10px]
              text-slate-400
            "
          >
            <span
              className="
                mr-1
                uppercase
                text-slate-500
              "
            >
              Local Time:
            </span>

            {localTime || "Loading..."} ·
            Ghaziabad, IN
          </div>

          {/* Divider */}

          <div
            className="
              hidden
              h-4
              w-[1px]
              bg-white/10
              md:block
            "
          />

          {/* Scroll Progress */}

          <div
            className="
              flex-shrink-0
              font-mono
              text-[10px]
            "
          >
            <span
              className="
                tracking-tighter
                text-[#00E5FF]
              "
            >
              JOURNEY EXPLORED:{" "}
              {scrollProgress}%
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
            md:w-auto
            md:justify-end
          "
        >
          {/* Command */}

          <div
            className="
              hidden
              items-center
              gap-2
              rounded-md
              border
              border-white/10
              bg-white/5
              px-3
              py-1
              font-mono
              text-[10px]
              text-slate-400
              transition-colors
              hover:bg-white/10
              md:flex
            "
          >
            <TerminalSquare className="h-3 w-3" />

            <span>
              PRESS{" "}
              <kbd className="text-white">
                ⌘ K
              </kbd>{" "}
              FOR COMMANDS
            </span>
          </div>

          {/* Back To Top */}

          <div
            onClick={scrollToTop}
            className="
              flex
              h-8
              w-8
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition-all
              hover:border-[#00E5FF]/50
              hover:bg-[#00E5FF]/20
              hover:text-[#00E5FF]
            "
            title="Back to Top"
          >
            <span className="text-xs">
              ↑
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          HIDE SCROLLBAR
      ===================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }

            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
        }}
      />
    </>
  );
}