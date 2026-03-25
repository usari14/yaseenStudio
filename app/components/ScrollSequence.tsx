"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

interface ScrollSequenceProps {
  children?: React.ReactNode;
  frameCount?: number; // 25 (25%), 50 (50%), or 100 (100%) - defaults to 100
}

export function ScrollSequence({ children, frameCount = 50 }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingRef = useRef<Set<number>>(new Set());
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  const FRAME_COUNT = frameCount;
  const PRELOAD_RANGE = Math.ceil(5 * (100 / frameCount)); // Adaptive preload range
  const FRAME_STEP = Math.max(1, Math.floor(100 / frameCount)); // How many frames to skip (for 50: 2, for 25: 4)

  // Path generator - maps display frame to actual file frame
  const currentFrame = (index: number) =>
    `/sequence/${(index * FRAME_STEP).toString().padStart(3, "0")}.png`;

  // Smart lazy loader - only loads images near current scroll position
  const loadImage = useCallback((frameIndex: number) => {
    if (imagesRef.current.has(frameIndex) || loadingRef.current.has(frameIndex)) {
      return; // Already loaded or loading
    }

    loadingRef.current.add(frameIndex);
    const img = new Image();
    img.src = currentFrame(frameIndex);
    img.onload = () => {
      imagesRef.current.set(frameIndex, img);
      loadingRef.current.delete(frameIndex);
    };
    img.onerror = () => {
      loadingRef.current.delete(frameIndex);
    };
  }, []);

  // Preload initial frames to start ASAP
  useEffect(() => {
    for (let i = 0; i < Math.min(5, FRAME_COUNT); i++) {
      loadImage(i);
    }
    setImagesLoaded(true);
  }, [loadImage]);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 99)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latestFrame) => {
    if (!canvasRef.current) return;

    const frameInt = Math.floor(latestFrame);
    setCurrentFrameIndex(frameInt);

    // Smart preload: load frames around current position
    for (let i = Math.max(0, frameInt - PRELOAD_RANGE); i <= Math.min(FRAME_COUNT - 1, frameInt + PRELOAD_RANGE); i++) {
      loadImage(i);
    }

    // Draw the image if available
    const img = imagesRef.current.get(frameInt);
    if (!img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and draw image matching canvas size
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate aspect ratio fit (cover)
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  });

  // Animate text overlay at the end of the sequence
  const textOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  // Intro animation at the start of the sequence
  const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  const introScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  // Initial draw and resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (imagesLoaded && canvas && ctx) {
      const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Trigger initial draw with current frame
        const img = imagesRef.current.get(currentFrameIndex);
        if (img) {
           const canvasRatio = canvas.width / canvas.height;
           const imgRatio = img.width / img.height;

           let drawWidth = canvas.width;
           let drawHeight = canvas.height;
           let offsetX = 0;
           let offsetY = 0;

           if (canvasRatio > imgRatio) {
             drawHeight = canvas.width / imgRatio;
             offsetY = (canvas.height - drawHeight) / 2;
           } else {
             drawWidth = canvas.height * imgRatio;
             offsetX = (canvas.width - drawWidth) / 2;
           }

           ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      };

      updateCanvasSize();
      window.addEventListener("resize", updateCanvasSize);

      return () => {
        window.removeEventListener("resize", updateCanvasSize);
      };
    }
  }, [imagesLoaded, currentFrameIndex]);

  return (
    <section id="home" ref={containerRef} className="relative h-[250vh] sm:h-[300vh] md:h-[350vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
        {/* The Canvas for image sequence */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        
        {/* Intro overlay */}
        <motion.div 
          style={{ opacity: introOpacity, y: introY, scale: introScale }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 sm:p-6 pointer-events-none"
        >
          <h3 className="text-white/50 text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-2 sm:mb-4">Welcome to</h3>
          <h1 className="text-2xl sm:text-4xl md:text-6xl text-white font-light tracking-[0.2em] uppercase">
              Yaseen's <span className="font-serif italic font-normal text-white">Studio</span>
          </h1>
        </motion.div>

        {/* Overlay content */}
        {children ? (
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 pointer-events-none"
          >
            {children}
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
              <h2 className="text-4xl md:text-6xl text-white font-light tracking-widest uppercase mix-blend-difference">
                 Uncompromising <br /><span className="font-serif italic font-normal text-white">Quality</span>
              </h2>
          </div>
        )}
      </div>
    </section>
  );
}
