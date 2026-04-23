const newLocal = "use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";

/* ─── letter-split helper ─── */
function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", willChange: "transform, opacity" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── animated line reveal ─── */
function LineReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── floating orb ─── */
function Orb({
  size,
  color,
  x,
  y,
  blur,
  duration,
}: {
  size: number;
  color: string;
  x: string;
  y: string;
  blur: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        left: x,
        top: y,
        willChange: "transform",
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* smooth spring-damped scroll values */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* parallax transforms */
  const heroY = useTransform(smoothProgress, [0, 1], [0, -200]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(smoothProgress, [0.0, 0.5], [0.35, 0.85]);

  /* text parallax — different layers move at different speeds */
  const tagY = useTransform(smoothProgress, [0, 1], [0, -60]);
  const headingY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const subY = useTransform(smoothProgress, [0, 1], [0, -80]);
  const ctaY = useTransform(smoothProgress, [0, 1], [0, -40]);

  /* scroll indicator */
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  /* stagger variants */
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* ── Background Image with parallax ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: heroY,
          scale: heroScale,
          willChange: "transform",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=2400&q=80"
          alt="Barbershop atmosphere"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.8) brightness(0.6)" }}
        />
      </motion.div>

      {/* ── Dark overlay ── */}
      <motion.div
        className="absolute inset-0 z-1 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* ── Ambient orbs ── */}
      <div className="absolute inset-0 z-2 overflow-hidden pointer-events-none opacity-30">
        <Orb size={500} color="radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" x="10%" y="20%" blur={80} duration={20} />
        <Orb size={350} color="radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" x="65%" y="55%" blur={100} duration={25} />
        <Orb size={250} color="radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" x="80%" y="10%" blur={60} duration={18} />
      </div>

      {/* ── Film grain overlay ── */}
      <div
        className="absolute inset-0 z-3 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 z-4 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center"
        style={{ opacity: heroOpacity }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div style={{ y: tagY }}>
          <LineReveal delay={0.2}>
            <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-white/40 font-light mb-6 sm:mb-8">
              Heritage & Craft — Est. 2026
            </p>
          </LineReveal>
        </motion.div>

        {/* Main heading line 1 */}
        <motion.div style={{ y: headingY }} className="mb-2 sm:mb-3">
          <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-extralight tracking-tight leading-[0.9] text-white">
            <SplitText text="YASEEN'S" delay={0.4} />
          </h1>
        </motion.div>

        {/* Main heading line 2 — italic serif */}
        <motion.div style={{ y: headingY }} className="mb-8 sm:mb-12">
          <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-light tracking-tight leading-[0.9] text-white font-serif italic">
            <SplitText text="Studio" delay={0.7} />
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div style={{ y: subY }}>
          <LineReveal delay={1.1} className="mb-10 sm:mb-14">
            <p className="text-sm sm:text-base md:text-lg text-white/50 font-light max-w-lg mx-auto tracking-wide leading-relaxed">
              Reviving traditional barbering with modern precision.
              <br className="hidden sm:block" />A sanctuary for the modern gentleman.
            </p>
          </LineReveal>
        </motion.div>

        {/* CTA */}
        <motion.div style={{ y: ctaY }}>
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block border border-white/30 text-white px-8 sm:px-12 py-3.5 sm:py-4 uppercase tracking-[0.25em] text-[10px] sm:text-xs backdrop-blur-sm bg-white/5 transition-colors duration-500 hover:border-white"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-white/25 font-light">
          Scroll
        </span>
        <div className="w-px h-10 sm:h-14 bg-linear-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white/60 h-3"
            animate={{ y: [0, 56, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-linear-to-t from-black to-transparent z-5" />
    </section>
  );
}
