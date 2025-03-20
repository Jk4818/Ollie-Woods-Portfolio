import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type MobileDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  isHomePage: boolean;
  onAnimationComplete?: () => void;
};

const MobileDropdown: React.FC<MobileDropdownProps> = ({ 
  onClose,
  onAnimationComplete
}) => {
  // Animation variants with faster transitions
  const containerVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: { 
        height: { duration: 0.2 },  // Faster animation
        opacity: { duration: 0.1 },  // Faster animation
        when: "afterChildren",
        staggerChildren: 0.03,  // Faster staggering
        staggerDirection: -1
      }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: { 
        height: { duration: 0.2 },  // Faster animation
        opacity: { duration: 0.1 },  // Faster animation
        when: "beforeChildren",
        staggerChildren: 0.05,  // Faster staggering
        delayChildren: 0.05  // Less delay
      }
    }
  };
  
  const itemVariants = {
    closed: { y: -8, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  // Hover animation style class
  const linkClassName = "text-white uppercase text-sm font-medium mix-blend-difference relative transform transition-transform duration-200 hover:scale-105 hover:text-gray-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-200 hover:after:w-full";

  return (
    <motion.div 
      className="md:hidden overflow-hidden"
      initial="closed"
      animate="open"
      exit="closed"
      variants={containerVariants}
      onAnimationComplete={(definition) => {
        if (definition === "open" && onAnimationComplete) {
          onAnimationComplete();
        }
      }}
    >
      <nav className="flex flex-col items-center space-y-4 py-4 relative z-10">
        <motion.div variants={itemVariants}>
          <Link 
            href="/about"
            className={linkClassName}
            onClick={onClose}
          >
            About
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link 
            href="/services" 
            className={linkClassName}
            onClick={onClose}
          >
            Services
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link 
            href="/contact" 
            className={linkClassName}
            onClick={onClose}
          >
            Contact
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link 
            href="https://patreon.com/OllieWoodsDrums" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={linkClassName}
            onClick={onClose}
          >
            Transcriptions
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default MobileDropdown;