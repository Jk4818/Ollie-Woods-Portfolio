// app/page.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ImageSlideshow from "@/components/ImageSlideshow";
import MotionImage from "@/components/MotionImage";
import { scrollToSection } from "@/utils/smoothScroll";
import LearnMoreLink from "@/components/LearnMoreLink";
import EventsTable from "@/components/EventsTable";
import { Event } from "@/components/EventsTable";

const images = [
  "/images/gallery/Spies_Gillian_Lynne.jpg",
  "/images/gallery/0X5A7601.jpg",
  "/images/gallery/0x5a7374.jpg",
  "/images/gallery/0x5a7757.jpg",
  "/images/gallery/40X5A8925.jpg",

];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (index : number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  exit: (index : number) => ({
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const textReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: (index : number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 * index,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay : number) => ({
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: delay,
            ease: [0.22, 1, 0.36, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};



export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.1 });
  const biographyRef = useRef<HTMLDivElement>(null);
  const isBioInView = useInView(biographyRef, { once: false, amount: 0.1 });
  const galleryRef = useRef<HTMLDivElement>(null);
  const isGalleryInView = useInView(galleryRef, { once: false, amount: 0.1 });
  // Event data based on the design
  const events: Event[] = [
    {
      date: "26th & 27th April",
      artists: "Starkid: I Can’t Believe It’s Been A Little Less Than A Year",
      venue: "London Palladium",
      detailsLink: "https://lwtheatres.co.uk/whats-on/starkid/",
    },
    {
      date: "10th April",
      artists: "Eden Rain",
      venue: "The Hope & Ruin, Brighton",
      detailsLink:
        "https://www.instagram.com/p/DHTuxZbSENT/?utm_source=ig_web_copy_link",
    },
    {
      date: "9th April",
      artists: "Eden Rain",
      venue: "Scala, London",
      detailsLink:
        "https://www.instagram.com/p/DHTuxZbSENT/?utm_source=ig_web_copy_link",
    },
    {
      date: "8th April",
      artists: "Eden Rain",
      venue: "Rough Trade, Bristol",
      detailsLink:
        "https://www.instagram.com/p/DHTuxZbSENT/?utm_source=ig_web_copy_link",
    },
  ];
  return (
    <>
      {/* Hero Section - Full Viewport */}
      <motion.section ref={heroRef} id="hero"
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0}
        className="h-screen w-full flex flex-col items-center justify-center text-white relative">
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
            variants={textReveal}
            custom={2}
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
          variants={fadeInUp}
          custom={3}
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
      </motion.section>

      {/* Biography Section - Using the new layout from the design */}
      <motion.section
        id="biography"
        ref={biographyRef}
        initial="hidden"
        animate={isBioInView ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0}
        className="w-full lg:h-[90vh] bg-black text-white">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left side - Main image (2/3 width on desktop) */}
          <div className=" w-full h-96 lg:h-full lg:w-2/3 col-span-1 flex items-end">
            <MotionImage
              src="/images/gallery/0X5A7608.jpg"
              alt="Ollie Woods at Hoxton"
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Bio text (1/3 width on desktop) */}
          <div className="h-full w-full lg:w-1/3 bg-custom-main text-white px-4 lg:pt-16 xl:pt-24 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between">
              {/* Title */}
              <motion.h2
                variants={textReveal}
                custom={1}
                className="text-6xl font-bold mt-10 lg:mt-0 mb-12 md:mb-16 lg:mb-20">BIO.</motion.h2>
              {/* Bio Text */}
              <div className="grid sm:grid-cols-3 ">
                {/* Text Container */}
                <div className="col-span-2 max-w-2xl text-sm font-medium leading-6 space-y-6 flex flex-col justify-end self-end">
                  <motion.p
                    variants={textReveal}
                    custom={2}
                    className="indent-8">
                    Ollie Woods is an <span className="font-bold">in-demand session drummer </span>
                    working with internationally acclaimed artists. This diverse portfolio has seen him
                    perform with <span className="font-bold">Cynthia Erivo</span> at the London
                    Palladium, tour Asia with <span className="font-bold">Samantha Barks</span>, and work
                    on projects for <span className="font-bold">Universal Production and BBC Radio 1</span>.
                    His primary work lies in the pop/rock genre, yet his experience enables him to comfortably
                    adapt to any performance environment.
                  </motion.p>
                  <motion.p
                    variants={textReveal}
                    custom={3}
                    className="indent-8 block lg:hidden xl:block">
                    He has developed a <span className="font-bold">library of transcription and
                      performance</span> videos for the drumming community on Instagram, with a combined audience
                    of over <span className="font-bold">100,000</span> across social media. Ollie is
                    constantly seeking out new musical ventures and welcomes the opportunity to work with
                    exciting artists and bands.
                  </motion.p>
                </div>
              </div>
            </div>


            {/* Learn More Link */}
            <motion.div
              variants={textReveal}
              custom={4}
              className="text-right w-full my-4 sm:my-0 mb-4">
              <LearnMoreLink href="/about" target="" />
            </motion.div>
          </div>
        </div>

      </motion.section>

      {/* Image gallery (3 images in a row) */}
      <motion.section
        ref={galleryRef}
        initial="hidden"
        animate={isGalleryInView ? "visible" : "hidden"}
        variants={fadeInUp}
        id="landingCarousel"
        className="w-full overflow-hidden">
        <ImageSlideshow slides={images} />
      </motion.section>

      {/* Selected Works Section - Using the imported component */}
      <EventsTable
        events={events}
        title={"Selected Works."} />

    </>
  );
}