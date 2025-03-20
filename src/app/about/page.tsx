"use client";
import React, { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MotionImage from "@/components/MotionImage";
import KeyMilestones from '@/components/KeyMilestones';
import { Milestone } from "@/components/KeyMilestones";
import AnimatedText from '@/components/AnimatedText';

export default function About() {
    const [isTextAnimationComplete, setIsTextAnimationComplete] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const bioRef = useRef<HTMLDivElement>(null);
    
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
            date: "2022",
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

    // Use the entire viewport height for the animation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Track if animation is complete to reveal rest of content
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Animation will complete at 80% of the scroll through the section
        if (latest >= 0.8 && !isTextAnimationComplete) {
            setIsTextAnimationComplete(true);
        } else if (latest < 0.8 && isTextAnimationComplete) {
            setIsTextAnimationComplete(false);
        }
    });

    return (
        <div className='container mx-auto'>
            <section ref={sectionRef} className="text-white min-h-screen flex flex-col justify-between pb-16 relative">
                {/* Main content with sticky positioning */}
                <div className="pt-32 md:pt-44 sticky top-0">
                    <h1 className='uppercase text-lg font-bold tracking-[0.2em]'>
                        About.
                    </h1>

                    <motion.div
                        id='initial-about'
                        ref={bioRef}
                        className="mt-10 max-w-full text-xl md:text-[2.5rem] font-normal leading-relaxed"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                    >
                        <AnimatedText 
                            scrollYProgress={scrollYProgress}
                            text="Ollie is a London-based session drummer working with a diverse roster of artists across the UK and internationally. He recently toured China with The Reunion featuring Ramin Karimloo, Samantha Barks, Hadley Fraser, Natalie May Paris, Earl Carpenter, and Holly Ann Hull. In 2024, he performed alongside Jason Robert Brown with guest stars Cynthia Erivo and Alfie Boe at the London Palladium, and played on the UK tour of Layton and Nikita Live! including two shows at Theatre Royal Drury Lane."
                        />
                    </motion.div>
                </div>

                {/* Spacer div to create scrollable area */}
                <div style={{ height: '110vh' }}></div>

                {/* Scroll down indicator */}
                <motion.div
                    className="flex justify-center items-center absolute bottom-0 left-0 right-0"
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
            
            {/* Rest of the page - only visible after text animation completes */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isTextAnimationComplete ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                    pointerEvents: isTextAnimationComplete ? 'auto' : 'none',
                }}
            >
                <section className='mt-10 h-[70vh] grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16'>
                    <div className='h-96 sm:h-full lg:col-span-2'>
                        <div className="w-full h-full flex items-end">
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
                        <p className='indent-8 text-sm font-medium leading-relaxed'>
                            Following in his sister's footsteps, Ollie began drum lessons with Omar Hayes aged 7. He continued his performance studies at the renowned Berklee College of Music (Boston, US), attained a Fellowship of Trinity College London, and is currently studying for a Doctorate in Music at the University of Surrey. This extensive scholarship with the likes of Kenwood Dennard and Victor Wooten transformed his drumming, leading to an exciting career in the music industry.
                        </p>
                    </div>
                </section>
                <section>
                    <KeyMilestones milestones={milestones} />
                </section>
            </motion.div>
        </div>
    )
}