// app/page.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageSlideshow";
import { scrollToSection } from "@/utils/smoothScroll";
import Link from "next/link";
import EventsTable from "@/components/EventsTable";
import { Event } from "@/components/EventsTable";

export default function Home() {
  const biographyRef = useRef<HTMLDivElement>(null);
  // Event data based on the design
  const events: Event[] = [
    {
      date: "MAY 03",
      artists: "JASON ROBERT BROWN, CYNTHIA ERIVO, & ALFIE BOE",
      venue: "@ LONDON PALLADIUM (UK)",
      detailsLink: "/events/may-03-2025"
    },
    {
      date: "JUNE 30",
      artists: "LAYTON & NIKITA LIVE!",
      venue: "@ LONDON PALLADIUM (UK)",
      detailsLink: "/events/june-30-2025"
    },
    {
      date: "MAY 03",
      artists: "JASON ROBERT BROWN, CYNTHIA ERIVO, & ALFIE BOE",
      venue: "@ LONDON PALLADIUM (UK)",
      detailsLink: "/events/may-03-2025-2"
    },
    {
      date: "JUNE 30",
      artists: "LAYTON & NIKITA LIVE!",
      venue: "@ LONDON PALLADIUM (UK)",
      detailsLink: "/events/june-30-2025-2"
    }
  ];
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

      {/* Biography Section - Using the new layout from the design */}
      <section id="biography" ref={biographyRef} className="w-full bg-black text-white">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Main image (2/3 width on desktop) */}
          <div className="w-full md:w-2/3 h-screen relative">
            <img 
              src="https://picsum.photos/1200/800" 
              alt="Drummer performing" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Bio text (1/3 width on desktop) */}
          <div className="w-full md:w-1/3 bg-indigo-900 p-8 flex flex-col justify-center">
            <h2 className="text-6xl font-bold mb-12">BIO.</h2>
            <div className="space-y-6">
              <p className="text-sm">
                "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor 
                Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation 
                Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
              </p>
              <p className="text-sm">
                Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla 
                Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit 
                Anim Id Est Laborum."
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors text-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Image gallery (3 images in a row) */}
        <div className="w-full flex flex-col md:flex-row h-96">
          <div className="w-full md:w-1/3 h-full">
            <img 
              src="https://picsum.photos/400/400" 
              alt="Performance with lighting" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 h-full">
            <img 
              src="https://picsum.photos/200/400" 
              alt="Drummer in action" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 h-full">
            <img 
              src="https://picsum.photos/600/400" 
              alt="Drum kit setup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      
      {/* Selected Works Section - Using the imported component */}
      <EventsTable events={events} />

    </>
  );
}