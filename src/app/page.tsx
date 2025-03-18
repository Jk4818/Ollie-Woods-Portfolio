// app/page.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageSlideshow";
import { scrollToSection } from "@/utils/smoothScroll";

export default function Home() {
  const biographyRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero Section - Full Viewport */}
      <section id="hero" className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative">
        <div className="text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-8xl md:text-9xl font-bold text-[#f5f5f0]">OW</h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-lg md:text-xl font-medium tracking-widest uppercase">Session Drummer</h2>
            <p className="text-sm md:text-base tracking-wider uppercase">London</p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 text-center cursor-pointer"
          onClick={() => scrollToSection('biography')}
        >
          <p className="text-xs tracking-widest text-gray-400">Scroll To Explore</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-2"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Biography Section - 2/3 Viewport Height */}
      <section id="biography" className="h-[66vh] bg-white" ref={biographyRef}>
        <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Simple Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center p-8"
          >
            <div className="relative w-full h-full max-w-md">
              <div className="absolute inset-0 bg-gray-800 rounded-lg" />
              <img
                src="/api/placeholder/600/600"
                alt="Drummer"
                className="relative -top-4 -left-4 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>

          {/* Right Column - Red Background with Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center p-8"
          >
            <div className="bg-red-600 w-full h-full relative flex flex-col p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-4">Biography</h2>
              <div className="flex-grow" />
              <p className="text-white text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
                non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut 
                dapibus. Mauris iaculis porttitor posuere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Slideshow - 1/3 Viewport Height */}
      <section id="gallery" className="h-[33vh]">
        <ImageCarousel />
      </section>
    </>
  );
}