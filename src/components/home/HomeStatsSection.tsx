"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: 40,
    suffix: " LPA",
    label: "Highest Package",
    description: "A strong launchpad for ambitious careers.",
  },
  {
    value: 550,
    suffix: "+",
    label: "Recruiters",
    description: "Industry connections creating career opportunities.",
  },
  {
    value: 3500,
    suffix: "+",
    label: "Job Offers",
    description: "Opportunities generated for our students.",
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function AnimatedNumber({
  value,
  suffix,
  startAnimation,
}: {
  value: number;
  suffix: string;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let animationFrame: number;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [startAnimation, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function HomeStatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-stats-heading"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "var(--gu-bg)",
      }}
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{
          backgroundColor: "var(--gu-gold)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{
          backgroundColor: "var(--gu-navy)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* SECTION HEADER */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-3xl text-center"
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{
                color: "var(--gu-gold)",
              }}
            >
              Outcomes That Matter
            </p>

            <h2
              id="home-stats-heading"
              className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl"
              style={{
                color: "var(--gu-navy)",
              }}
            >
              Turning Education Into Opportunity
            </h2>

            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full"
              style={{
                backgroundColor: "var(--gu-gold)",
              }}
            />

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              A future-ready education is measured not only by what students
              learn, but by the opportunities they create after learning.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={itemVariants}
            className="relative mt-12 grid gap-6 sm:gap-8 md:mt-16 md:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
                style={{
                  borderColor:
                    index === 1
                      ? "rgba(232, 135, 26, 0.40)"
                      : "rgba(6, 53, 95, 0.10)",
                }}
              >
                {/* Active top line */}
                <div
                  className="absolute left-0 right-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{
                    backgroundColor:
                      index === 1
                        ? "var(--gu-gold)"
                        : "var(--gu-navy)",
                  }}
                />

                <div className="mt-2 flex flex-col justify-center">
                  <p
                    className="font-sans text-5xl font-bold tracking-tight sm:text-6xl"
                    style={{
                      color: "var(--gu-navy)",
                    }}
                  >
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      startAnimation={hasAnimated}
                    />
                  </p>

                  <h3
                    className="mt-4 text-sm font-bold uppercase tracking-[0.12em]"
                    style={{
                      color: "var(--gu-navy)",
                    }}
                  >
                    {stat.label}
                  </h3>

                  <p
                    className="mt-3 max-w-sm text-sm leading-7"
                    style={{
                      color: "var(--gu-text-muted)",
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* TRUST LINE */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
          >
            <span
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />

            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Industry connected • Career focused • Future ready
            </p>

            <span
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}