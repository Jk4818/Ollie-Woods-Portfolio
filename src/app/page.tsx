// app/page.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageSlideshow from "@/components/ImageSlideshow";
import MotionImage from "@/components/MotionImage";
import { scrollToSection } from "@/utils/smoothScroll";
import LearnMoreLink from "@/components/LearnMoreLink";
import EventsTable from "@/components/EventsTable";
import { Event } from "@/components/EventsTable";

const images = [
  "https://picsum.photos/300/400",
  "https://picsum.photos/200/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/500/400",
  "https://picsum.photos/500/500",
  "https://picsum.photos/300/600",
];

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
      <section id="hero" className="h-screen w-full flex flex-col items-center justify-center text-white relative">
        <div className="text-center px-4">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            {/* Logo Image */}
            <Image
              src="/logo_2025.svg" // Path from public folder
              alt="Brand Logo"
              width={200} // Adjust as needed
              height={200} // Adjust as needed
              className="w-72 h-auto" // Responsive sizing
              priority
            />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
              Session Drummer
            </h2>
            <p className="text-xs font-bold tracking-[0.3em] uppercase">London</p>
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
      <section id="biography" ref={biographyRef} className="w-full lg:h-[90vh] bg-black text-white">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left side - Main image (2/3 width on desktop) */}
          <div className=" w-full h-96 lg:h-full lg:w-2/3 col-span-1 flex items-end">
            <MotionImage
              src="/images/gallery/profile_hoxton.JPG"
              alt="Ollie Woods at Hoxton"
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Bio text (1/3 width on desktop) */}
          <div className="h-full w-full lg:w-1/3 bg-custom-main text-white px-4 lg:pt-16 xl:pt-24 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between">
              {/* Title */}
              <h2 className="text-6xl font-bold mt-10 lg:mt-0 mb-12 md:mb-16 lg:mb-20">BIO.</h2>
              {/* Bio Text */}
              <div className="grid grid-cols-3 ">
                {/* Text Container */}
                <div className="col-span-2 max-w-2xl text-sm font-medium leading-6 space-y-6 flex flex-col justify-end self-end">
                  <p className="indent-8">
                    Ollie Woods is an <span className="font-bold">in-demand session drummer</span>
                    working with internationally acclaimed artists. This diverse portfolio has seen him
                    perform with <span className="font-bold">Cynthia Erivo</span> at the London
                    Palladium, tour Asia with <span className="font-bold">Samantha Barks</span>, and work
                    on projects for <span className="font-bold">Universal Production and BBC Radio 1</span>.
                    His primary work lies in the pop/rock genre, yet his experience enables him to comfortably
                    adapt to any performance environment.
                  </p>
                  <p className="indent-8 block lg:hidden xl:block">
                    He has developed a <span className="font-bold">library of transcription and
                      performance</span> videos for the drumming community on Instagram, with a combined audience
                    of over <span className="font-bold">100,000</span> across social media. Ollie is
                    constantly seeking out new musical ventures and welcomes the opportunity to work with
                    exciting artists and bands.
                  </p>
                </div>
              </div>
            </div>


            {/* Learn More Link */}
            <div className="text-right w-full mb-4">
              <LearnMoreLink href="/about" target="" />
            </div>
          </div>
        </div>

      </section>

      {/* Image gallery (3 images in a row) */}
      <section id="landingCarousel" className="w-full bg-black text-white">
        <ImageSlideshow
          slides={images}
        />
      </section>

      {/* Selected Works Section - Using the imported component */}
      <EventsTable
        events={events}
        title={"Selected Works."} />

    </>
  );
}