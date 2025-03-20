"use client";

import React from 'react'
import { useRef } from "react";
import { TextFade } from '@/components/TextFade';
import LearnMoreLink from '@/components/LearnMoreLink';
import EventsTable from '@/components/EventsTable';
import { Event } from "@/components/EventsTable";



export default function Services() {

    const eventsServices: Event[] = [
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
        <div className=''>

            <div className='mt-60 h-full w-full flex flex-col items-center justify-center text-white relative'>
                <div className='w-full'>
                    <h2 className="uppercase text-6xl font-bold mb-16 md:ml-[16.666%]">Services.</h2>
                </div>

                <div className='flex w-full justify-between h-[20rem]'>
                    <div className='px-4 w-full sm:px-0 sm:w-2/3 lg:w-1/3 max-w-[34rem] h-full flex flex-col gap-8'>
                        <h1 className='uppercase text-lg font-bold tracking-[0.2em]'>
                            Transcriptions
                        </h1>
                        <p className='indent-8 font-medium'>I offer detailed drum transcriptions, available exclusively on my Patreon. Whether you’re looking to study intricate grooves, fills, or full song breakdowns, my transcriptions provide accurate, note-for-note insights to help you improve your playing. Check them out and gain access to a growing library of drum charts!
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

                        <p className="indent-8 font-medium flex-1">
                            For session work, live performances, or other drumming-related services, feel free to get in touch via my contact page. Whether you need a drummer for recording, gigs, or other projects, I’d love to discuss how we can collaborate.
                        </p>

                        <div className="flex justify-end mt-auto uppercase">
                            <LearnMoreLink href="https://patreon.com/OllieWoodsDrums" />
                        </div>
                    </div>

                </div>
            </div>

            <section id="events" className="w-full  text-white py-24 px-4 md:px-12">
                <EventsTable events={eventsServices} />
            </section>

        </div>
    )
}