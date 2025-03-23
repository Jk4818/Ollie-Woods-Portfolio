// components/Footer.tsx
"use client"; 
import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.footer
      ref={ref}
      className="text-white py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Menu Section */}
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-md font-bold mb-4">MENU</h3>
            <ul>
              {["ABOUT", "SERVICES", "CONTACT", "PATREON"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item === "PATREON" ? "https://patreon.com/OllieWoodsDrums" : `/${item.toLowerCase()}`}
                    target={item === "PATREON" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Email Section */}
          <motion.div
            className="mb-8 md:mb-0 md:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-md font-bold tracking-wide">OLLIEWOODSDRUMS@GMAIL.COM</p>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 md:mt-42 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex space-x-4 mb-4 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {[
              { name: "YouTube", Icon: Youtube },
              { name: "Instagram", Icon: Instagram },
              { name: "Facebook", Icon: Facebook },
            ].map(({ name, Icon }, index) => (
              <motion.a
                key={name} // ✅ Now using a valid key
                href={`https://www.${name.toLowerCase()}.com/ow`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Icon className="text-white hover:text-gray-300 transition-colors" size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="https://iamjkeung.com/" target="_blank" rel="noopener noreferrer">
              <div className="text-[0.6rem] text-right uppercase flex items-center hover:opacity-80 transition-all">
                <p>Designed & Developed with ❤️ by</p>
                <span className="inline-block ml-1 -mt-1">
                  <Image
                    src="/iamjkeung_logo_2025.svg"
                    alt="iamjkeung Logo"
                    width={10}
                    height={10}
                    className="w-5 h-auto mix-blend-difference"
                    priority
                  />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="mt-2 sm:mt-0 text-right uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-sm">All Rights Reserved {new Date().getFullYear()}</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
