"use client";

import React, { useRef } from 'react';
import LearnMoreLink from '@/components/LearnMoreLink';
import EventsSection from '@/components/EventsSection';
import MotionImage from "@/components/MotionImage";

import { motion, useInView,  } from "framer-motion";

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


    const eventsData = [
        {
            year: "2025",
            yearLabel: "(INC. UPCOMING)",
            events: [
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
                {
                    date: "6th April",
                    artists: "Eden Rain",
                    venue: "Yes, Manchester",
                    detailsLink:
                        "https://www.instagram.com/p/DHTuxZbSENT/?utm_source=ig_web_copy_link",
                },
                {
                    date: "5th April",
                    artists: "Samantha Barks",
                    venue: "London Palladium",
                    detailsLink:
                        "https://lwtheatres.co.uk/whats-on/samantha-barks-tlp/",
                },
                {
                    date: "15th March",
                    artists: "Rachel Croft",
                    venue: "Festival À Toute Heure, Paris",
                    detailsLink:
                        "https://www.instagram.com/p/DHUAzNIOPY7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "February",
                    artists:
                        "The Reunion: Ramin Karimloo, Samantha Barks, Hadley Fraser, Natalie May Paris, Earl Carpenter, Holly Ann Hull",
                    venue: "China Tour",
                    detailsLink: "https://www.gingerboy.me/the-reunion",
                },
            ],
        },
        {
            year: "2024",
            yearLabel: "(CURRENT)",
            events: [
                {
                    date: "20th & 21st December",
                    artists: "A Very Naughty Christmas",
                    venue: "Southwark Playhouse (Elephant)",
                    detailsLink: "https://www.averynaughtychristmas.com",
                },
                {
                    date: "5th December",
                    artists: "The Vice-Chancellor’s Awards",
                    venue: "University Hall, Guildford",
                    detailsLink:
                        "https://www.instagram.com/p/DDO5OnStVNe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "30th November",
                    artists: "So Cher",
                    venue: "Heythrop Park, Oxford",
                    detailsLink: "https://www.rachael-hawnt.co.uk/so-cher",
                },
                {
                    date: "24th November",
                    artists: "Dirty Rotten Scoundrels",
                    venue: "London Palladium",
                    detailsLink:
                        "https://www.instagram.com/reel/DCy0BcTtFYO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "20th November",
                    artists: "Eden Rain – BBC New Music Live",
                    venue: "Square Chapel, Halifax",
                    detailsLink: "https://www.youtube.com/watch?v=qRqbWN_41gE",
                },
                {
                    date: "12th November",
                    artists: "Eden Rain",
                    venue: "Moth Club, London",
                    detailsLink: "https://www.instagram.com/edenintherain/",
                },
                {
                    date: "25th October",
                    artists: "Armstrong",
                    venue: "West End Centre, Hampshire",
                    detailsLink: "https://www.instagram.com/armstrong_band/",
                },
                {
                    date: "10th October",
                    artists: "Great Scott",
                    venue: "Elland Road, Leeds",
                    detailsLink: "https://www.greatscottband.com",
                },
                {
                    date: "6th October",
                    artists: "Il Volo",
                    venue: "Theatre Royal Drury Lane, London",
                    detailsLink:
                        "https://www.instagram.com/reel/DA2sfgIMz4z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "28th September",
                    artists: "Armstrong",
                    venue: "The Star Inn, Guildford",
                    detailsLink: "https://www.instagram.com/armstrong_band/",
                },
            ],
        },
        {
            year: "2023",
            yearLabel: "",
            events: [
                {
                    date: "3rd September",
                    artists: "Spies Are Forever",
                    venue: "Gillian Lynne Theatre, London",
                    detailsLink:
                        "https://www.instagram.com/p/C_jKNzPy9w9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "28th August",
                    artists: "Harry Baker",
                    venue: "The Britannia, Guildford",
                    detailsLink: "https://www.instagram.com/harrybakeruk/",
                },
                {
                    date: "19th July",
                    artists: "Thotrio",
                    venue: "Notting Hill Arts Club, London",
                    detailsLink: "https://www.instagram.com/tho.trio/",
                },
                {
                    date: "16th July",
                    artists: "Layton & Nikita Live!",
                    venue: "Theatre Royal Drury Lane, London",
                    detailsLink:
                        "https://www.instagram.com/reel/C9NMkTcIsXe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "6th July",
                    artists: "Armstrong",
                    venue: "Haslemere Fringe Festival",
                    detailsLink: "https://www.instagram.com/armstrong_band/",
                },
                {
                    date: "6th July",
                    artists: "Emily Windham",
                    venue: "Farnham House Hotel",
                    detailsLink: "https://www.instagram.com/emilylaurra/",
                },
                {
                    date: "30th June",
                    artists: "Layton & Nikita Live!",
                    venue: "Bridgewater Hall, Manchester",
                    detailsLink:
                        "https://www.instagram.com/p/C849whxodby/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "15th June",
                    artists: "So Cher",
                    venue: "London Hippodrome",
                    detailsLink: "https://www.rachael-hawnt.co.uk/so-cher",
                },
                {
                    date: "3rd June",
                    artists: "Playing Our Part: The West End Sings for Target Ovarian Cancer",
                    venue: "Cadogan Hall, London",
                    detailsLink:
                        "https://www.instagram.com/reel/C7ylFTrMON2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                },
                {
                    date: "28th May",
                    artists: "Eden Rain",
                    venue: "The Kazimier, Leeds",
                    detailsLink: "https://www.instagram.com/edenintherain/",
                },
                // {
                //     date: "12th May",
                //     artists: "So Cher",
                //     venue: "Heythrop Park, Oxford",
                //     detailsLink: "https://www.rachael-hawnt.co.uk/so-cher",
                // },
                // {
                //     date: "24th March",
                //     artists: "Jason Robert Brown, Cynthia Erivo, Alfie Boe",
                //     venue: "London Palladium",
                //     detailsLink:
                //         "https://www.instagram.com/p/C48moqZLhdG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                // }
            ]
        }
    ];


    return (
        <motion.div
            ref={mainRef}
            className='h-max'
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
                // ref={endImageRef}
                // id='services_end_image'
                className="w-full h-[80vh] text-white"
                // initial="hidden"
                // animate={isEndImageInView ? "visible" : "exit"}
                // variants={fadeIn}
                // custom={0.2}
            >
                <div className="w-full h-full flex items-start overflow-hidden">
                    <MotionImage
                        src="/images/gallery/profile_hoxton.JPG"
                        alt="asdasd"
                        className="w-full h-auto"
                    />
                </div>
            </motion.section>
        </motion.div>
    )
}