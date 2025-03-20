"use client";
import React from 'react'
import { motion } from 'framer-motion';
import LearnMoreLink from '@/components/LearnMoreLink';
import MotionImage from "@/components/MotionImage";
import KeyMilestones from '@/components/KeyMilestones';
import { Milestone } from "@/components/KeyMilestones";

export default function About() {

    // Sample milestone data (replace with your actual data)
    const milestones: Milestone[] = [
        {
            date: "May 03 2025",
            milestone: "Jason Robert Brown, Cynthia Erivo, & Alfie Boe"
        },
        {
            date: "2023",
            milestone: "Layton & Nikita Live!"
        },
        {
            date: "2023",
            milestone: "Layton & Nikita Live!"
        },
        {
            date: "2022",
            milestone: "Layton & Nikita Live!"
        },
        {
            date: "2020",
            milestone: "Layton & Nikita Live!"
        }
    ];


    return (
        <div className='container mx-auto '>
            <section className=" text-white min-h-screen flex flex-col justify-between pb-16">
                {/* Main content */}
                <div className="pt-32 md:pt-44">
                    <h1 className='uppercase text-lg font-bold tracking-[0.2em]'>
                        About.
                    </h1>

                    <motion.div
                        className="mt-10 max-w-full text-xl md:text-[2.5rem] font-normal leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className='indent-8 md:indent-18'>
                            Ollie is a London-based session drummer working with a diverse roster
                            of artists across the UK and internationally. He recently toured China with
                            The Reunion featuring Ramin Karimloo, Samantha Barks, Hadley Fraser,
                            Natalie May Paris, Earl Carpenter, and Holly Ann Hull. In 2024, he performed
                            alongside Jason Robert Brown with guest stars Cynthia Erivo and Alfie Boe
                            at the London Palladium, and played on the UK tour of Layton and Nikita
                            Live! including two shows at Theatre Royal Drury Lane.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll down indicator */}
                <motion.div
                    className="flex justify-center items-center mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5L12 19M12 19L18 13M12 19L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </motion.div>
            </section>
            <section className='h-[70vh] grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16'>
                <div className='lg:col-span-2'>

                    <div className=" w-full h-full  flex items-end">
                        <MotionImage
                            src="/images/gallery/profile_hoxton.JPG"
                            alt="Ollie Woods at Hoxton"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className='justify-end mt-auto px-4 w-full sm:px-0 h-full flex flex-col gap-8'>
                    <h1 className='uppercase text-lg font-bold tracking-[0.2em]'>
                        About Cont.
                    </h1>
                    <p className='indent-8 text-sm font-medium leading-relaxed'>Following in his sister’s footsteps, Ollie began drum lessons with Omar Hayes aged 7. He continued his performance studies at the renowned Berklee College of Music (Boston, US), attained a Fellowship of Trinity College London, and is currently studying for a Doctorate in Music at the University of Surrey. This extensive scholarship with the likes of Kenwood Dennard and Victor Wooten transformed his drumming, leading to an exciting career in the music industry.
                    </p>
                </div>
            </section>
            <section>

                <KeyMilestones milestones={milestones} />
            </section>
        </div>
    )
}