"use client";

import React from 'react'
import LearnMoreLink from '@/components/LearnMoreLink';
import EventsSection from '@/components/EventsSection';
import MotionImage from "@/components/MotionImage";



export default function Services() {

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
        <div className=''>

            <div className='container mx-auto h-screen w-full flex flex-col items-center justify-center text-white relative'>
                <div className='w-full'>
                    <h2 className="uppercase text-6xl font-bold mb-16 md:ml-[16.666%]">Services.</h2>
                </div>

                <div className='flex flex-col gap-30 md:flex-row xl:px-30 w-full items-center justify-between h-[20rem]'>
                    <div className='px-4 w-full sm:px-0 sm:w-2/3 lg:w-1/3 max-w-[34rem] h-full flex flex-col gap-8'>
                        <h1 className='uppercase text-lg font-bold tracking-[0.2em]'>
                            Transcriptions
                        </h1>
                        <p className='indent-8 font-normal'>I offer detailed drum transcriptions, available exclusively on my Patreon. Whether you’re looking to study intricate grooves, fills, or full song breakdowns, my transcriptions provide accurate, note-for-note insights to help you improve your playing. Check them out and gain access to a growing library of drum charts!
                        </p>
                        <div className='flex justify-end mt-auto uppercase'>
                            <div className='align-top h-full '>
                                <LearnMoreLink href='https://patreon.com/OllieWoodsDrums' />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 w-full sm:px-0 sm:w-2/3 lg:w-1/3 max-w-[34rem] h-full flex flex-col gap-8">
                        <h1 className="uppercase text-lg font-bold tracking-[0.2em]">
                            Session & Performance Work
                        </h1>

                        <p className="indent-8 font-normal flex-1">
                            For session work, live performances, or other drumming-related services, feel free to get in touch via my contact page. Whether you need a drummer for recording, gigs, or other projects, I’d love to discuss how we can collaborate.
                        </p>

                        <div className="flex justify-end mt-auto uppercase">
                            <LearnMoreLink href="/contact" target=''
                                text='Contact Me' />
                        </div>
                    </div>

                </div>
            </div>

            <section id='services_start_image' className="w-full h-[50vh] bg-black text-white">

                <div className=" w-full h-full  flex items-end">
                    <MotionImage
                        src="/images/gallery/profile_hoxton.JPG"
                        alt="Ollie Woods at Hoxton"
                        className="w-full h-auto"
                    />
                </div>
            </section>

            <section id="events" className="w-full  text-white py-24 px-4 md:px-12">
                <EventsSection
                    sectionTitle="Events."
                    yearsData={eventsData}
                />
            </section>

            <section id='services_end_image' className="w-full h-[80vh] bg-black text-white">

                <div className=" w-full h-full  flex items-end">
                    <MotionImage
                        src="/images/gallery/profile_hoxton.JPG"
                        alt="Ollie Woods at Hoxton"
                        className="w-full h-auto"
                    />
                </div>
            </section>

        </div>
    )
}