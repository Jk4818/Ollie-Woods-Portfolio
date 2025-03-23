"use client";

import React, { useRef } from 'react';
import LearnMoreLink from '@/components/LearnMoreLink';
import EventsSection from '@/components/EventsSection';
import MotionImage from "@/components/MotionImage";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1]
        }
    }),
    exit: (index) => ({
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay) => ({
        opacity: 1,
        transition: {
            duration: 0.8,
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

const textReveal = {
    hidden: { opacity: 0, y: 100 },
    visible: (index) => ({
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

export default function Services() {
    const mainRef = useRef(null);
    const isMainInView = useInView(mainRef, { once: false, amount: 0.2 });

    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: false, amount: 0.8 });

    const servicesRef = useRef(null);
    const isServicesInView = useInView(servicesRef, { once: false, amount: 0.5 });

    const startImageRef = useRef(null);
    const isStartImageInView = useInView(startImageRef, { once: false, amount: 0.3 });

    const eventsRef = useRef(null);
    const isEventsInView = useInView(eventsRef, { once: false, amount: 0.2 });

    const endImageRef = useRef(null);
    const isEndImageInView = useInView(endImageRef, { once: false, amount: 0.3 });

    const { scrollYProgress: startImageScroll } = useScroll({
        target: startImageRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: endImageScroll } = useScroll({
        target: endImageRef,
        offset: ["start end", "end start"]
    });

    const startImageScale = useTransform(startImageScroll, [0, 0.5, 1], [0.95, 1, 0.98]);
    const endImageScale = useTransform(endImageScroll, [0, 0.5, 1], [0.95, 1, 0.98]);

    const eventsData = [
        {
            year: "2025",
            yearLabel: "(INC. UPCOMING)",
            events: [
                {
                    date: "Apr 15 - Jun 20",
                    artists: "The West End Orchestra",
                    venue: "Royal Albert Hall, London",
                    detailsLink: "/works/west-end-orchestra"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Jul 10 - Jul 15",
                    artists: "Cynthia Erivo Solo Tour",
                    venue: "The O2 Arena, London",
                    detailsLink: "/works/cynthia-erivo-tour"
                }
            ]
        },
        {
            year: "2024",
            yearLabel: "(CURRENT)",
            events: [
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Aug 12 - Sep 18",
                    artists: "Layton and Nikita Live!",
                    venue: "Theatre Royal Drury Lane, London",
                    detailsLink: "/works/layton-nikita"
                }
            ]
        },
        {
            year: "2023",
            yearLabel: "",
            events: [
                {
                    date: "Nov 10 - Dec 15",
                    artists: "The Reunion",
                    venue: "China Tour - Multiple Venues",
                    detailsLink: "/works/reunion-china"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Oct 5 - Oct 20",
                    artists: "Jason Robert Brown & Guests",
                    venue: "London Palladium, London",
                    detailsLink: "/works/jason-robert-brown"
                },
                {
                    date: "Feb 5 - Mar 10",
                    artists: "West End Live Festival",
                    venue: "Trafalgar Square, London",
                    detailsLink: "/works/west-end-live"
                }
            ]
        }
    ];


    return (
        <motion.div
            ref={mainRef}
            className=''
            initial="hidden"
            animate={isMainInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
        >
            <div className='container mx-auto h-screen w-full flex flex-col items-center justify-center text-white relative'>
                <motion.div
                    ref={titleRef}
                    initial="hidden"
                    animate={isTitleInView ? "visible" : "exit"}
                    variants={fadeInUp}
                    custom={0}
                    className='w-full'
                >
                    <motion.h2
                        className="uppercase text-6xl font-bold mb-16 md:ml-[16.666%]"
                        variants={textReveal}
                        custom={0}
                    >
                        Services.
                    </motion.h2>
                </motion.div>

                <div
                    ref={servicesRef}
                    className='flex flex-col gap-30 md:flex-row xl:px-30 w-full items-center justify-between h-[20rem]'
                >
                    <motion.div
                        className='px-4 w-full sm:px-0 sm:w-2/3 lg:w-1/3 max-w-[34rem] h-full flex flex-col gap-8'
                        initial="hidden"
                        animate={isServicesInView ? "visible" : "exit"}
                        variants={fadeInUp}
                        custom={1}
                    >
                        <motion.h1
                            className='uppercase text-lg font-bold tracking-[0.2em]'
                            variants={textReveal}
                            custom={1}
                        >
                            Transcriptions
                        </motion.h1>
                        <motion.p
                            className='indent-8 font-normal'
                            variants={textReveal}
                            custom={2}
                        >
                            I offer detailed drum transcriptions, available exclusively on my Patreon. Whether you're looking to study intricate grooves, fills, or full song breakdowns, my transcriptions provide accurate, note-for-note insights to help you improve your playing. Check them out and gain access to a growing library of drum charts!
                        </motion.p>
                        <motion.div
                            className='flex justify-end mt-auto uppercase'
                            variants={fadeInUp}
                            custom={3}
                        >
                            <div className='align-top h-full'>
                                <LearnMoreLink href='https://patreon.com/OllieWoodsDrums' />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="px-4 w-full sm:px-0 sm:w-2/3 lg:w-1/3 max-w-[34rem] h-full flex flex-col gap-8"
                        initial="hidden"
                        animate={isServicesInView ? "visible" : "exit"}
                        variants={fadeInUp}
                        custom={2}
                    >
                        <motion.h1
                            className="uppercase text-lg font-bold tracking-[0.2em]"
                            variants={textReveal}
                            custom={1}
                        >
                            Session & Performance Work
                        </motion.h1>

                        <motion.p
                            className="indent-8 font-normal flex-1"
                            variants={textReveal}
                            custom={2}
                        >
                            For session work, live performances, or other drumming-related services, feel free to get in touch via my contact page. Whether you need a drummer for recording, gigs, or other projects, I'd love to discuss how we can collaborate.
                        </motion.p>

                        <motion.div
                            className="flex justify-end mt-auto uppercase"
                            variants={fadeInUp}
                            custom={3}
                        >
                            <LearnMoreLink href="/contact" target=''
                                text='Contact Me' />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.section
                ref={startImageRef}
                id='services_start_image'
                className="w-full h-[50vh] text-white"
                initial="hidden"
                animate={isStartImageInView ? "visible" : "exit"}
                variants={fadeIn}
                custom={0.2}
            >
                <div className="w-full h-full flex items-end overflow-hidden">
                    <MotionImage
                        src="/images/gallery/profile_hoxton.JPG"
                        alt="Ollie Woods at Hoxton"
                        className="w-full h-auto"
                    />
                </div>
            </motion.section>

            <motion.section
                ref={eventsRef}
                id="events"
                className="w-full text-white py-24 px-4 md:px-12"
                initial="hidden"
                animate={isEventsInView ? "visible" : "exit"}
                variants={fadeInUp}
                custom={0}
            >
                <EventsSection
                    sectionTitle="Events."
                    yearsData={eventsData}
                />
            </motion.section>

            <motion.section
                ref={endImageRef}
                id='services_end_image'
                className="w-full h-[80vh] text-white"
                initial="hidden"
                animate={isEndImageInView ? "visible" : "exit"}
                variants={fadeIn}
                custom={0.2}
            >
                <div className="w-full h-full flex items-start overflow-hidden">
                    <MotionImage
                        src="/images/gallery/profile_hoxton.JPG"
                        alt="Ollie Woods at Hoxton"
                        className="w-full h-auto"
                    />
                </div>
            </motion.section>
        </motion.div>
    )
}