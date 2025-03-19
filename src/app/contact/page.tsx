import React from 'react'
import { TextFade } from '@/components/TextFade'

export default function Contact() {
    return (
        <section className='w-screen h-[75vh] flex justify-center items-center text-white text-sm'>
            <TextFade direction='up' className='px-4 w-full sm:px-0 sm:w-2/3 lg:w-1/3 max-w-[34rem] h-1/3 flex flex-col gap-8'>
                <h1 className='uppercase text-lg font-bold tracking-[0.2em]'>
                   Let&apos;s have a chat.
                </h1>
                <h2 className='font-serif text-3xl underline font-light'>olliewoodsdrums@gmail.com</h2>
                <p className='indent-8 font-medium'>For bookings, collaborations, session work, or any drumming-related inquiries, feel free to reach out. I’m always open to new projects and would love to discuss how we can work together!</p>
                <div className='flex justify-between uppercase '>
                    <div className='align-top h-full '>
                        <a href='https://www.youtube.com/ow' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-300 transition-colors'>
                            @olliewoodsdrums.com
                        </a>
                    </div>
                    <ul className='uppercase text-end flex flex-col gap-2'>
                        <li>
                            <a href='https://www.instagram.com/ow' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-300 transition-colors'>Instagram
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/ow' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-300 transition-colors'>Facebook
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/channel/UCceB0EleKJcNx-fzM_VGv8Q?view_as=subscriber' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-300 transition-colors'>Youtube
                            </a>
                        </li>
                        <li>
                            <a href='https://www.tiktok.com/@olliewoodsdrums' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-300 transition-colors'>TikTok
                            </a>
                        </li>
                    </ul>
                </div>
            </TextFade>
        </section>
    )
}