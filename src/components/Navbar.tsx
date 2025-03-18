// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/utils/smoothScroll";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const isHomePage = pathname === "/";
  
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolling down or up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setShouldShow(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setShouldShow(true);
      }
      
      // Update scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', controlNavbar);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
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
        <motion.nav
          className="fixed top-0 w-full z-50 py-6 px-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex justify-between items-center">
            <Link 
              href="/" 
              className="text-white text-2xl font-bold mix-blend-difference"
              onClick={(e) => isHomePage && handleNavClick(e, "hero")}
            >
              OW
            </Link>
            <div className="flex items-center">
              <div className="hidden md:flex space-x-8 mr-8">
                <Link 
                  href={isHomePage ? "#biography" : "/#biography"} 
                  className="text-white hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference"
                  onClick={(e) => handleNavClick(e, "biography")}
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  className="text-white hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference"
                >
                  Services
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference"
                >
                  Contact
                </Link>
                <Link 
                  href="https://www.patreon.com/ow" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-gray-300 transition-colors uppercase text-sm font-medium mix-blend-difference"
                >
                  Patreon
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://www.youtube.com/ow" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="mix-blend-difference">
                  <Youtube className="text-white hover:text-gray-300 transition-colors" size={20} />
                </a>
                <a href="https://www.instagram.com/ow" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mix-blend-difference">
                  <Instagram className="text-white hover:text-gray-300 transition-colors" size={20} />
                </a>
                <a href="https://www.facebook.com/ow" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mix-blend-difference">
                  <Facebook className="text-white hover:text-gray-300 transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;