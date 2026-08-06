"use client";

import { motion } from "motion/react";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSuccess, setIsSuccess] =
    useState(false);

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden

        py-8
        md:py-10
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Cyan glow */}

        <div
          className="
            absolute
            -top-32
            left-1/2

            h-[450px]
            w-[650px]

            -translate-x-1/2

            rounded-full

            bg-[#00E5FF]/[0.055]

            blur-[130px]
          "
        />

        {/* Purple glow */}

        <div
          className="
            absolute
            -bottom-40
            -left-32

            h-[400px]
            w-[400px]

            rounded-full

            bg-[#7C3AED]/[0.06]

            blur-[130px]
          "
        />

        {/* Pink glow */}

        <div
          className="
            absolute
            -bottom-40
            -right-32

            h-[400px]
            w-[400px]

            rounded-full

            bg-[#FF3366]/[0.045]

            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.025]

            [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]

            [background-size:60px_60px]
          "
        />
      </div>

      {/* =====================================================
          SECTION CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          w-full

          px-4

          md:px-6
          lg:px-8

          max-w-[1500px]
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.15,
          }}
          className="
            relative
            overflow-hidden

            rounded-[30px]

            border
            border-white/[0.10]

            bg-[#050914]/75

            backdrop-blur-2xl

            shadow-[0_30px_100px_rgba(0,0,0,0.45)]

            md:rounded-[38px]
          "
        >
          {/* =================================================
              TOP GLASS HIGHLIGHT
          ================================================= */}

          <div
            className="
              pointer-events-none

              absolute
              inset-x-0
              top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-[#00E5FF]/50
              to-transparent
            "
          />

          {/* =================================================
              TOP DECORATIVE LINE
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-0

              h-24
              w-[55%]

              -translate-x-1/2

              bg-[#00E5FF]/[0.035]

              blur-3xl
            "
          />

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              relative

              px-6
              pb-7
              pt-9

              text-center

              md:px-10
              md:pb-8
              md:pt-11
            "
          >
            {/* Small system label */}

            <div
              className="
                mb-3

                flex
                items-center
                justify-center
                gap-1
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5

                  rounded-full

                  bg-[#00E5FF]

                  shadow-[0_0_12px_#00E5FF]
                "
              />

              <span
                className="
                  font-mono

                  text-[8px]

                  tracking-[0.35em]

                  text-[#00E5FF]/70
                "
              >
                CONNECTION.REQUEST
              </span>

              <Sparkles
                className="
                  h-3
                  w-3

                  text-[#7C3AED]/70
                "
              />
            </div>

            {/* Heading */}

            <h2
              className="
                text-4xl

                font-bold

                leading-none

                tracking-tight

                text-white

                md:text-5xl

                lg:text-6xl
              "
            >
              Get in{" "}

              <span
                className="
                  relative

                  bg-gradient-to-r
                  from-[#00E5FF]
                  via-[#7C3AED]
                  to-[#FF3366]

                  bg-clip-text

                  text-transparent
                "
              >
                Touch

                {/* glow */}

                <span
                  className="
                    absolute
                    inset-0
                    -z-10

                    bg-gradient-to-r
                    from-[#00E5FF]
                    via-[#7C3AED]
                    to-[#FF3366]

                    opacity-20

                    blur-xl
                  "
                />
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-3

                max-w-xl

                font-mono

                text-[10px]

                leading-5

                text-slate-400

                md:text-xs
              "
            >
              Let's build something amazing together.
              Reach out for opportunities or just to say hi.
            </p>
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              relative

              grid
              grid-cols-1

              gap-5

              px-5
              pb-5

              md:px-7
              md:pb-7

              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-6
              lg:px-8
              lg:pb-8
            "
          >
            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                relative

                overflow-hidden

                rounded-[24px]

                border
                border-white/[0.08]

                bg-white/[0.025]

                p-5

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-[#00E5FF]/20

                hover:bg-white/[0.035]

                md:p-6
              "
            >
              {/* Inner glow */}

              <div
                className="
                  pointer-events-none

                  absolute
                  -right-20
                  -top-20

                  h-40
                  w-40

                  rounded-full

                  bg-[#00E5FF]/10

                  blur-[70px]
                "
              />

              {/* Heading */}

              <div
                className="
                  relative

                  mb-5

                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      font-mono

                      text-[8px]

                      tracking-[0.25em]

                      text-[#00E5FF]/60
                    "
                  >
                    DIRECT_CHANNEL
                  </p>

                  <h3
                    className="
                      mt-1

                      text-xl

                      font-bold

                      text-white
                    "
                  >
                    Contact Information
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/10

                    bg-black/30

                    text-[#00E5FF]
                  "
                >
                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                    "
                  />
                </div>
              </div>

              {/* Contact items */}

              <div
                className="
                  relative

                  space-y-3
                "
              >
                {/* Email */}

                <a
                  href="mailto:kingprajapati391@gmail.com"
                  className="
                    group

                    flex
                    items-center
                    gap-4

                    rounded-2xl

                    border
                    border-white/[0.06]

                    bg-black/20

                    p-3.5

                    transition-all
                    duration-300

                    hover:border-[#00E5FF]/25

                    hover:bg-[#00E5FF]/[0.04]

                    hover:-translate-y-0.5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-[#00E5FF]/20

                      bg-[#00E5FF]/[0.07]

                      transition-all

                      group-hover:border-[#00E5FF]/50

                      group-hover:shadow-[0_0_20px_rgba(0,229,255,0.18)]
                    "
                  >
                    <Mail
                      className="
                        h-5
                        w-5

                        text-[#00E5FF]
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        mb-0.5

                        font-mono

                        text-[8px]

                        uppercase
                        tracking-widest

                        text-slate-500
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        truncate

                        text-sm

                        text-white

                        transition-colors

                        group-hover:text-[#00E5FF]
                      "
                    >
                      kingprajapati391@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}

                <div
                  className="
                    group

                    flex
                    items-center
                    gap-4

                    rounded-2xl

                    border
                    border-white/[0.06]

                    bg-black/20

                    p-3.5

                    transition-all
                    duration-300

                    hover:border-[#FF3366]/25

                    hover:bg-[#FF3366]/[0.035]

                    hover:-translate-y-0.5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-[#FF3366]/20

                      bg-[#FF3366]/[0.06]

                      transition-all

                      group-hover:border-[#FF3366]/50

                      group-hover:shadow-[0_0_20px_rgba(255,51,102,0.18)]
                    "
                  >
                    <Phone
                      className="
                        h-5
                        w-5

                        text-[#FF3366]
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        mb-0.5

                        font-mono

                        text-[8px]

                        uppercase
                        tracking-widest

                        text-slate-500
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        text-sm

                        text-white
                      "
                    >
                      +91 8795930332
                    </p>
                  </div>
                </div>

                {/* Location */}

                <div
                  className="
                    group

                    flex
                    items-center
                    gap-4

                    rounded-2xl

                    border
                    border-white/[0.06]

                    bg-black/20

                    p-3.5

                    transition-all
                    duration-300

                    hover:border-[#7C3AED]/25

                    hover:bg-[#7C3AED]/[0.035]

                    hover:-translate-y-0.5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-[#7C3AED]/20

                      bg-[#7C3AED]/[0.06]

                      transition-all

                      group-hover:border-[#7C3AED]/50

                      group-hover:shadow-[0_0_20px_rgba(124,58,237,0.18)]
                    "
                  >
                    <MapPin
                      className="
                        h-5
                        w-5

                        text-[#7C3AED]
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        mb-0.5

                        font-mono

                        text-[8px]

                        uppercase
                        tracking-widest

                        text-slate-500
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        text-sm

                        text-white
                      "
                    >
                      Ghaziabad, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom status */}

              <div
                className="
                  mt-4

                  flex
                  items-center
                  gap-2

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

                AVAILABLE FOR OPPORTUNITIES

                <span className="ml-auto">
                  ONLINE
                </span>
              </div>
            </motion.div>

            {/* =================================================
                FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                relative
              "
            >
              <form
                onSubmit={handleSubmit}
                className="
                  relative

                  h-full

                  overflow-hidden

                  rounded-[24px]

                  border
                  border-white/[0.08]

                  bg-white/[0.025]

                  p-5

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:border-white/[0.15]

                  md:p-6
                "
              >
                {/* Form glow */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    -bottom-24
                    -right-24

                    h-48
                    w-48

                    rounded-full

                    bg-[#7C3AED]/10

                    blur-[80px]
                  "
                />

                {/* Form heading */}

                <div className="relative mb-4">
                  <p
                    className="
                      font-mono

                      text-[8px]

                      tracking-[0.25em]

                      text-[#7C3AED]/70
                    "
                  >
                    SEND_MESSAGE
                  </p>

                  <h3
                    className="
                      mt-1

                      text-xl

                      font-bold

                      text-white
                    "
                  >
                    Let's talk
                  </h3>
                </div>

                {/* Fields */}

                <div
                  className="
                    relative

                    grid
                    grid-cols-1

                    gap-3

                    md:grid-cols-2
                  "
                >
                  {/* Name */}

                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-1.5

                        block

                        font-mono

                        text-[8px]

                        uppercase
                        tracking-widest

                        text-slate-500
                      "
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      required
                      value={
                        formData.name
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="
                        w-full

                        rounded-xl

                        border
                        border-white/10

                        bg-black/30

                        px-3.5
                        py-3

                        text-sm

                        text-white

                        outline-none

                        placeholder:text-slate-700

                        transition-all

                        focus:border-[#00E5FF]/60

                        focus:ring-1
                        focus:ring-[#00E5FF]/30
                      "
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-1.5

                        block

                        font-mono

                        text-[8px]

                        uppercase
                        tracking-widest

                        text-slate-500
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      required
                      value={
                        formData.email
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="
                        w-full

                        rounded-xl

                        border
                        border-white/10

                        bg-black/30

                        px-3.5
                        py-3

                        text-sm

                        text-white

                        outline-none

                        placeholder:text-slate-700

                        transition-all

                        focus:border-[#FF3366]/60

                        focus:ring-1
                        focus:ring-[#FF3366]/30
                      "
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Message */}

                <div
                  className="
                    relative

                    mt-3
                  "
                >
                  <label
                    htmlFor="message"
                    className="
                      mb-1.5

                      block

                      font-mono

                      text-[8px]

                      uppercase
                      tracking-widest

                      text-slate-500
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={
                      formData.message
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message:
                          e.target.value,
                      })
                    }
                    className="
                      w-full

                      resize-none

                      rounded-xl

                      border
                      border-white/10

                      bg-black/30

                      px-3.5
                      py-3

                      text-sm

                      text-white

                      outline-none

                      placeholder:text-slate-700

                      transition-all

                      focus:border-[#7C3AED]/60

                      focus:ring-1
                      focus:ring-[#7C3AED]/30
                    "
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Button */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    relative
                    z-10

                    mt-4

                    flex
                    w-full

                    items-center
                    justify-center
                    gap-2

                    overflow-hidden

                    rounded-xl

                    border
                    border-white/10

                    bg-gradient-to-r
                    from-[#00E5FF]
                    via-[#7C3AED]
                    to-[#FF3366]

                    bg-[length:200%_auto]

                    px-5
                    py-3.5

                    text-sm

                    font-bold

                    text-white

                    shadow-[0_0_25px_rgba(124,58,237,0.25)]

                    transition-all
                    duration-500

                    hover:bg-[position:right_center]

                    hover:scale-[1.01]

                    hover:shadow-[0_0_35px_rgba(124,58,237,0.4)]

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    disabled:hover:scale-100
                  "
                >
                  {isSubmitting ? (
                    <span
                      className="
                        animate-pulse
                        font-mono
                        text-xs
                      "
                    >
                      Sending Message...
                    </span>
                  ) : isSuccess ? (
                    <span
                      className="
                        font-mono
                        text-xs
                      "
                    >
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <>
                      <span>
                        Send Message
                      </span>

                      <Send
                        className="
                          h-4
                          w-4
                        "
                      />
                    </>
                  )}
                </button>

                {/* Form footer */}

                <div
                  className="
                    relative

                    mt-3

                    flex
                    items-center
                    justify-center

                    font-mono

                    text-[7px]

                    tracking-[0.2em]

                    text-slate-700
                  "
                >
                  SECURE_CHANNEL // READY_TO_CONNECT
                </div>
              </form>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM DECORATION
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center

              gap-3

              pb-4
            "
          >
            <span
              className="
                h-px
                w-16

                bg-gradient-to-r
                from-transparent
                to-white/10
              "
            />

            <span
              className="
                font-mono

                text-[7px]

                tracking-[0.3em]

                text-slate-700
              "
            >
              END_OF_SECTION
            </span>

            <span
              className="
                h-px
                w-16

                bg-gradient-to-l
                from-transparent
                to-white/10
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}