"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/utils/smoothScroll";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import MobileDropdown from "./MobileDropdown";
import AnimatedLink from "./AnimatedLink";

const Navbar = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const isHomePage = pathname === "/";

  // Control navbar visibility on scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShouldShow(false);
        // Close mobile menu when scrolling down
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      } else if (currentScrollY < lastScrollY) {
        setShouldShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  // Debounced menu toggle to prevent rapid state changes
  const toggleMobileMenu = useCallback(() => {
    if (isMenuAnimating) return; // Prevent toggle during animation
    
    setIsMenuAnimating(true); // Set animating flag
    setIsMobileMenuOpen(prev => !prev);
    
    // Reset the animating flag after animation completes
    setTimeout(() => {
      setIsMenuAnimating(false);
    }, 300); // Slightly longer than our animation duration
  }, [isMenuAnimating]);
  
  // Function to close the mobile menu
  const closeMobileMenu = useCallback(() => {
    if (isMenuAnimating || !isMobileMenuOpen) return;
    
    setIsMenuAnimating(true);
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      setIsMenuAnimating(false);
    }, 300);
  }, [isMenuAnimating, isMobileMenuOpen]);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: shouldShow ? 0 : -100
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Background overlay that persists regardless of mobile menu state */}
      <div className="absolute inset-0 bg-custom-background/70 backdrop-blur-sm w-full h-full" />
      
      <div className="container mx-auto px-4 relative">
        <nav className="flex justify-between items-center py-4">
          {/* Logo - modified to close menu on click */}
          <Link 
            href="/" 
            className="relative z-10"
            aria-label="Home"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo_2025.svg"
              alt="Brand Logo"
              width={50}
              height={50}
              className="w-10 h-auto mix-blend-difference"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mix-blend-difference">
            <AnimatedLink
              href="/about"
              text="About"
              target=""
              className="hover:text-gray-300 transition-colors uppercase text-sm font-medium"
            />
            <AnimatedLink 
              href="/services" 
              text="Services"
              target=""
              className="hover:text-gray-300 transition-colors uppercase text-sm font-medium"
            />
            <AnimatedLink 
              href="/contact" 
              text="Contact"
              target=""
              className="hover:text-gray-300 transition-colors uppercase text-sm font-medium"
            />
            <AnimatedLink
              href="https://patreon.com/OllieWoodsDrums"
              text="Transcriptions"
              target="_blank"
              className="hover:text-gray-300 transition-colors uppercase text-sm font-medium"
              aria-label="Transcriptions on Patreon"
            />
          </div>

          {/* Social Icons & Hamburger Menu */}
          <div className="flex items-center gap-4 mix-blend-difference">
            <a 
              href="https://www.youtube.com/@OllieWoodsDrums" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="hover:text-gray-300 transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://www.instagram.com/olliewoodsdrums/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/olliewoodsdrums/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="hover:text-gray-300 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@olliewoodsdrums/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Tiktok Page"
              className="hover:text-gray-300 transition-colors"
            >
              <PiTiktokLogo size={20} />
            </a>
            
            {/* Hamburger Menu Button with disabled state */}
            <div className="md:hidden">
              <HamburgerMenu 
                isOpen={isMobileMenuOpen} 
                toggleMenu={toggleMobileMenu}
                isDisabled={isMenuAnimating}
              />
            </div>
          </div>
        </nav>
        
        {/* Use AnimatePresence to better control animation lifecycle */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileDropdown
              isOpen={isMobileMenuOpen}
              onClose={closeMobileMenu}
              handleNavClick={handleNavClick}
              isHomePage={isHomePage}
              onAnimationComplete={() => setIsMenuAnimating(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;