"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="w-full h-[75vh] flex justify-center items-center text-white text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" w-full text-wrap sm:w-2/3 lg:w-1/3 max-w-[34rem] h-1/3 flex flex-col gap-8">
        {/* Title */}
        <motion.h1
          className="uppercase text-xs sm:text-lg font-bold tracking-[0.2em]"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let&apos;s have a chat.
        </motion.h1>

        {/* Email */}
        <motion.h2
          className="font-serif text-lg md:text-3xl underline font-light"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="mailto:olliewoodsdrums@gmail.com">olliewoodsdrums@gmail.com</a>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="indent-8 text-sm md:text-lg font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          For bookings, collaborations, session work, or any drumming-related inquiries, feel free to reach out. I’m always open to new projects and would love to discuss how we can work together!
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-between uppercase text-xs"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="align-top h-full">
            <a
              href="https://www.tiktok.com/@olliewoodsdrums"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              @olliewoodsdrums.com
            </a>
          </div>

          <ul className="uppercase text-end flex flex-col gap-2">
            {[
              { name: "Instagram", link: "https://www.instagram.com/olliewoodsdrums" },
              { name: "Facebook", link: "https://www.facebook.com/olliewoodsdrums" },
              { name: "Youtube", link: "https://www.youtube.com/channel/UCceB0EleKJcNx-fzM_VGv8Q?view_as=subscriber" },
              { name: "TikTok", link: "https://www.tiktok.com/@olliewoodsdrums" },
            ].map(({ name, link }, index) => (
              <motion.li
                key={name}
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
