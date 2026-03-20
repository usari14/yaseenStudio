"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

export function ScrollSequence({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const FRAME_COUNT = 100;

  // Path generator based on frame index (1 to 100 -> 001 to 100)
  const currentFrame = (index: number) =>
    `/sequence/${index.toString().padStart(3, "0")}.png`;

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 99)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latestFrame) => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameInt = Math.floor(latestFrame);
    const img = images[frameInt];

    if (img) {
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
    }
  });

  // Animate text overlay at the end of the sequence
  const textOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  // Initial draw and resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (imagesLoaded && canvas && ctx && images.length > 0) {
      const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Trigger initial draw
        const img = images[Math.floor(frameIndex.get())];
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
  }, [imagesLoaded, images, frameIndex]);

  return (
    <section id="home" ref={containerRef} className="relative h-[300vh] bg-black border-t border-black/10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
        {/* The Canvas for image sequence */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        
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
