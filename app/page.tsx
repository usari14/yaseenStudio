"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Scissors, Clock, Droplets, MapPin, Phone, Instagram } from "lucide-react";

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
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden selection:bg-black selection:text-white">

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase">
            Yaseen <span className="font-serif italic font-normal text-black">Studio</span>
          </div>
          <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-black/70">
            <a href="#home" className="hover:text-black transition-colors">Home</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2070&q=80"
            alt="Barber Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/50"></div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-8 md:px-16 py-16 max-w-4xl mx-auto mt-20 bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl border border-white"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <Scissors className="w-8 h-8 text-black/80" strokeWidth={1} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-black text-xs md:text-sm tracking-[0.4em] font-light uppercase mb-6">Heritage & Craft</motion.h2>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter mb-8 leading-[0.9]">
            THE <span className="font-serif italic block mt-2 text-black">CLASSIC</span> CUT
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-black/70 font-light max-w-xl mx-auto mb-12 tracking-wide">
            Reviving traditional barbering with modern precision. A sanctuary for the modern gentleman.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#services"
            className="inline-block border border-black text-black px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-black hover:text-white transition-all duration-500 bg-transparent"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </section>

      {/* Philosophy / Intro */}
      <section className="py-32 bg-white border-t border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ filter: 'grayscale(50%)' }}>
          <img
            src="https://images.unsplash.com/photo-1599581373516-72b1448b11c9?auto=format&fit=crop&w=2070&q=80"
            alt="Barber Shop Details"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
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
              At Yaseen Studio, we embody the timeless traditions of the classic barber shop while injecting a contemporary aesthetic. Our minimalist approach ensures that the focus remains solely on the craft and the client.
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
                  { title: "The Signature Cut", price: "From £35", desc: "Consultation, precision cut, neck shave, styling and finish.", icon: Scissors },
                  { title: "Hot Towel Shave", price: "From £30", desc: "Traditional cut-throat shave, hot & cold towels, soothing balms.", icon: Droplets },
                  { title: "Beard Sculpting", price: "From £20", desc: "Detailed beard shaping, lineup, and condition.", icon: Clock },
                  { title: "The Executive", price: "From £60", desc: "Haircut, hot towel shave, facial treatment and premium styling.", icon: MapPin }
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
                      <span className="text-sm tracking-widest text-black/60">{item.price}</span>
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
              <div className="aspect-[3/4] overflow-hidden grayscale relative group shadow-2xl">
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
                className={`group relative aspect-[3/4] overflow-hidden ${(i % 3 === 1) ? 'lg:mt-16' : ''}`}
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
          <div className="text-xl font-light tracking-[0.2em] uppercase mb-8 text-black">
            Yaseen <span className="font-serif italic text-black/70">Studio</span>
          </div>
          <div className="flex gap-6 mb-8 text-black/50">
            <a href="#" className="hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
          <p className="text-black/40 text-xs font-light uppercase tracking-widest">
            © {new Date().getFullYear()} Yaseen Studio. The Classic Barber.
          </p>
        </div>
      </footer>
    </div>
  );
}
