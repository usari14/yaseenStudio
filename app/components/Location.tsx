"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin } from "lucide-react";

export function Location() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="location" className="py-16 sm:py-24 md:py-32 bg-[#FAFAFA] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex justify-center mb-4">
             <MapPin className="w-5 h-5 text-black/50" />
          </div>
          <h3 className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 sm:mb-4 text-black/50">Visit Us</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">The <span className="font-serif italic text-black">Location</span></h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={fadeUp}
          className="w-full relative shadow-2xl overflow-hidden bg-white group"
        >
          {/* A subtle grayscale filter that transitions to full color on hover for a premium feel */}
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] transition-all duration-700 ease-in-out group-hover:grayscale-0 grayscale-[40%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.655128802087!2d67.08853239999999!3d24.875625700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0113ac914d%3A0x7e15ad4e1e52da18!2sYaseen&#39;s%20Studio!5e0!3m2!1sen!2s!4v1776972042680!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Overlay border to ensure sharp edges */}
          <div className="absolute inset-0 border border-black/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
