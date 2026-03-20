"use client";

import React, { useEffect, useState } from "react";
import logo from "./assets/applogo.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Scissors, Clock, Droplets, MapPin, Instagram } from "lucide-react";
import { ScrollSequence } from "./components/ScrollSequence";

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

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase">
            Yaseen's <span className="font-serif italic font-normal text-black">Studio</span>
          </div>
          <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-black/70">
            <a href="#home" className="hover:text-black transition-colors">Home</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section (Scroll Sequence) */}
      <ScrollSequence>
        <div
          className="relative z-10 text-center px-8 md:px-16 py-16 max-w-4xl mx-auto mt-20 bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl border border-white pointer-events-auto"
        >
          <div className="flex justify-center mb-6">
            <Scissors className="w-8 h-8 text-black/80" strokeWidth={1} />
          </div>
          <h2 className="text-black text-xs md:text-sm tracking-[0.4em] font-light uppercase mb-6">Heritage & Craft</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter mb-8 leading-[0.9]">
            THE <span className="font-serif italic block mt-2 text-black">CLASSIC</span> CUT
          </h1>
          <p className="text-lg text-black/70 font-light max-w-xl mx-auto mb-12 tracking-wide">
            Reviving traditional barbering with modern precision. A sanctuary for the modern gentleman.
          </p>
          <a
            href="#services"
            className="inline-block border border-black text-black px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-black hover:text-white transition-all duration-500 bg-transparent pointer-events-auto"
          >
            Explore Services
          </a>
        </div>
      </ScrollSequence>

      {/* Philosophy / Intro */}
      <section className="py-32 bg-white border-t border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ filter: 'grayscale(50%)' }}>
          <img
            src="https://images.unsplash.com/photo-1599581373516-72b1448b11c9?auto=format&fit=crop&w=2070&q=80"
            alt="Barber Shop Details"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-white"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="text-xs tracking-[0.3em] uppercase mb-4 text-black/50">The Standard</motion.h3>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-light mb-10 leading-tight">
              "We don't just cut hair.<br /> <span className="font-serif italic text-black/80">We curate your confidence.</span>"
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black/60 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              At Yaseen's Studio, we embody the timeless traditions of the classic barber shop while injecting a contemporary aesthetic. Our minimalist approach ensures that the focus remains solely on the craft and the client.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 z-0 opacity-10" style={{ filter: 'grayscale(50%)' }}>
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2070&q=80"
            alt="Barber Station Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              variants={stagger}
              className="w-full lg:w-1/2"
            >
              <motion.h3 variants={fadeRight} className="text-xs tracking-[0.3em] uppercase text-black/50 mb-4">Our Services</motion.h3>
              <motion.h2 variants={fadeRight} className="text-4xl md:text-6xl font-light mb-12">The <span className="font-serif italic text-black">Menu</span></motion.h2>

              <div className="space-y-12 pr-0 lg:pr-12">
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
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="text-xl font-medium tracking-wide text-black group-hover:pl-2 transition-all duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-black/50 font-light leading-relaxed group-hover:pl-2 transition-all duration-300">
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
              <div className="absolute -bottom-10 -left-10 bg-black text-white p-8 hidden md:flex flex-col items-center justify-center tracking-widest uppercase shadow-xl z-10 border border-black/10">
                <span className="text-3xl mb-1 font-serif italic block">Est.</span>
                <span className="text-sm font-bold">2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h3 className="text-xs tracking-[0.3em] uppercase mb-4 text-black/50">The Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-light">Precision in <span className="font-serif italic text-black">Focus</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
      <footer className="py-12 bg-[#FAFAFA] border-t border-black/10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <Image src={logo} alt="Yaseen's Studio" className="mb-8 h-44 w-auto" />
          <div className="flex gap-6 mb-8 text-black/50">
            <a href="https://www.instagram.com/yaseens.studio" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
          <p className="text-black/40 text-xs font-light uppercase tracking-widest">
            © {new Date().getFullYear()} Yaseen's Studio. The Classic Barber.
          </p>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923702363664?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Yaseen%20Studio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
