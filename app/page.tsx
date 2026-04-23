"use client";

import React from "react";
import logo from "./assets/applogo.png";
import Image from "next/image";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Scissors, Clock, Droplets, MapPin, Instagram } from "lucide-react";
import { Hero } from "./components/Hero";
import { SmoothScroll } from "./components/SmoothScroll";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const { scrollYProgress } = useScroll();

  // Nav transitions — start transparent on dark hero, fade to white after hero
  const navBgColor = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0.92)"]
  );

  const navTextColor = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"]
  );

  const navBorderColor = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.08)"]
  );

  const navBlur = useTransform(
    scrollYProgress,
    [0, 0.08],
    [0, 12]
  );

  return (
    <SmoothScroll>
      <div className="min-h-screen text-black font-sans selection:bg-black selection:text-white bg-white">

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundColor: navBgColor,
            color: navTextColor,
            borderBottomColor: navBorderColor,
            backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
            WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
          }}
          className="fixed top-0 left-0 w-full z-50 border-b text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
            <div className="text-lg sm:text-xl md:text-2xl font-light tracking-widest sm:tracking-[0.2em] uppercase">
              Yaseen's <span className="font-serif italic font-normal" style={{ color: "inherit" }}>Studio</span>
            </div>
            <div className="hidden md:flex gap-8 lg:gap-10 text-xs tracking-[0.2em] uppercase opacity-70">
              <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
              <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
              <a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <Hero />

        {/* Philosophy / Intro */}
        <section className="py-16 sm:py-24 md:py-32 bg-white border-t border-black/5 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ filter: 'grayscale(50%)' }}>
            <img
              src="https://images.unsplash.com/photo-1599581373516-72b1448b11c9?auto=format&fit=crop&w=2070&q=80"
              alt="Barber Shop Details"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-white"></div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              variants={stagger}
            >
              <motion.h3 variants={fadeUp} className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 sm:mb-4 text-black/50">The Standard</motion.h3>
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 md:mb-10 leading-tight">
                "We don't just cut hair.<br /> <span className="font-serif italic text-black/80">We curate your confidence.</span>"
              </motion.h2>
              <motion.p variants={fadeUp} className="text-black/60 font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                At Yaseen's Studio, we embody the timeless traditions of the classic barber shop while injecting a contemporary aesthetic. Our minimalist approach ensures that the focus remains solely on the craft and the client.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden border-t border-black/5">
          <div className="absolute inset-0 z-0 opacity-10" style={{ filter: 'grayscale(50%)' }}>
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2070&q=80"
              alt="Barber Station Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/70"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={stagger}
                className="w-full lg:w-1/2"
              >
                <motion.h3 variants={fadeRight} className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-black/50 mb-3 sm:mb-4">Our Services</motion.h3>
                <motion.h2 variants={fadeRight} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-8 sm:mb-10 lg:mb-12">The <span className="font-serif italic text-black">Menu</span></motion.h2>

                <div className="space-y-8 lg:space-y-12 pr-0 lg:pr-12">
                  {[
                    { title: "The Signature Cut", desc: "Consultation, precision cut, neck shave, styling and finish.", icon: Scissors },
                    { title: "Hot Towel Shave", desc: "Traditional cut-throat shave, hot & cold towels, soothing balms.", icon: Droplets },
                    { title: "Beard Sculpting", desc: "Detailed beard shaping, lineup, and condition.", icon: Clock },
                    { title: "The Executive", desc: "Haircut, hot towel shave, facial treatment and premium styling.", icon: MapPin }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="group border-b border-black/10 pb-8 hover:border-black/40 transition-colors"
                    >
                      <div className="flex justify-between items-baseline mb-2 sm:mb-3">
                        <h4 className="text-lg sm:text-xl font-medium tracking-wide text-black group-hover:pl-2 transition-all duration-300">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm sm:text-base text-black/50 font-light leading-relaxed group-hover:pl-2 transition-all duration-300">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative hidden lg:block"
              >
                <div className="aspect-3/4 overflow-hidden grayscale relative group shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1974&q=80"
                    alt="Barber"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 bg-black text-white p-6 sm:p-8 hidden md:flex flex-col items-center justify-center tracking-widest uppercase shadow-xl z-10 border border-black/10">
                  <span className="text-3xl mb-1 font-serif italic block">Est.</span>
                  <span className="text-sm font-bold">2026</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              variants={fadeUp}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <h3 className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 sm:mb-4 text-black/50">The Portfolio</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">Precision in <span className="font-serif italic text-black">Focus</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1621645582931-d1d3e6564943?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1974&q=80",
              ].map((imgUrl, i) => (
                <div
                  key={i}
                  className={`group relative aspect-3/4 overflow-hidden ${(i % 3 === 1) ? 'lg:mt-16' : ''}`}
                >
                  <div className="absolute inset-0 bg-white/10 z-10 transition-colors duration-500 group-hover:bg-transparent pointer-events-none"></div>
                  <img
                    src={imgUrl}
                    alt={`Look ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 bg-[#FAFAFA] border-t border-black/10 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
            <Image src={logo} alt="Yaseen's Studio" className="mb-6 sm:mb-8 h-32 sm:h-40 md:h-44 w-auto" />
            <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 text-black/50">
              <a href="https://www.instagram.com/yaseens.studio" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><Instagram className="w-4 sm:w-5 h-4 sm:h-5" /></a>
            </div>
            <p className="text-black/40 text-[10px] sm:text-xs font-light uppercase tracking-widest">
              © {new Date().getFullYear()} Yaseen's Studio. The Classic Barber.
            </p>
          </div>
        </footer>
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/923702363664?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Yaseen%20Studio."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </SmoothScroll>
  );
}
