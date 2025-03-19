"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/utils/smoothScroll";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import MobileDropdown from "./MobileDropdown";

const Navbar = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShouldShow(false);
      } else if (currentScrollY < lastScrollY) {
        setShouldShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="fixed top-0 w-full z-50 overflow-hidden pointer-events-none"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.nav
            className="container mx-auto flex flex-col transition-all duration-300 px-4 mix-blend-difference"
          >
            {/* Navbar Container */}
            <div className="flex justify-between items-center w-full py-4 pointer-events-auto">
              {/* Logo */}
              <Link href="/" onClick={(e) => isHomePage && handleNavClick(e, "hero")}>
                <Image
                  src="/logo_2025.svg"
                  alt="Brand Logo"
                  width={50}
                  height={50}
                  className="w-10 h-auto mix-blend-difference"
                  priority
                />
              </Link>
              <div className="flex gap-20">

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href={isHomePage ? "#biography" : "/#biography"}
                    className="hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference"
                    onClick={(e) => handleNavClick(e, "biography")}
                  >
                    About
                  </Link>
                  <Link href="/services" className="hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference">
                    Services
                  </Link>
                  <Link href="/contact" className="hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference">
                    Contact
                  </Link>
                  <Link
                    href="https://patreon.com/OllieWoodsDrums"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference"
                  >
                    Transcriptions
                  </Link>
                </div>

                {/* Social Icons & Hamburger Menu */}
                <div className="flex items-center space-x-4">
                  <a href="https://www.youtube.com/@OllieWoodsDrums" target="_blank" className="mix-blend-difference">
                    <Youtube className="hover:text-gray-300 transition-colors" size={20} />
                  </a>
                  <a href="https://www.instagram.com/olliewoodsdrums/" target="_blank" className="mix-blend-difference">
                    <Instagram className="hover:text-gray-300 transition-colors" size={20} />
                  </a>
                  <a href="https://www.facebook.com/olliewoodsdrums/" target="_blank" className="mix-blend-difference">
                    <Facebook className="hover:text-gray-300 transition-colors" size={20} />
                  </a>
                  {/* Hamburger Menu Button */}
                  <HamburgerMenu isOpen={isMobileMenuOpen} toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </div>
              </div>
            </div>

            {/* Mobile Dropdown */}
            <MobileDropdown
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              handleNavClick={handleNavClick}
              isHomePage={isHomePage}
            />
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
