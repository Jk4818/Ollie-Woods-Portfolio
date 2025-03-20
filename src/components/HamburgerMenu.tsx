import React from "react";
import { motion } from "framer-motion";

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  isDisabled?: boolean;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu, isDisabled = false }) => {
  // Animation variants for the hamburger lines
  const topLineVariants = {
    closed: { rotate: 0, y: -3 },
    open: { rotate: 45, y: 0 }  // Reduced y value for better X alignment
  };
  
  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };
  
  const bottomLineVariants = {
    closed: { rotate: 0, y: 4 },
    open: { rotate: -45, y: 0 }  // Reduced y value for better X alignment
  };

  return (
    <button 
      onClick={toggleMenu}
      disabled={isDisabled}
      className={`relative z-20 flex flex-col justify-center items-center w-6 h-6 focus:outline-none cursor-pointer hover:opacity-80 transition-opacity ${isDisabled ? 'opacity-70' : ''}`}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <motion.span
          className="absolute w-full h-[2px] bg-current rounded-full"  // Increased line height
          variants={topLineVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}  // Slightly faster
          style={{ marginTop: isOpen ? 0 : "-5px" }}  // Adjusted margin for closed state
        />
        <motion.span
          className="absolute w-full h-[2px] bg-current rounded-full"  // Increased line height
          variants={middleLineVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}  // Slightly faster
        />
        <motion.span
          className="absolute w-full h-[2px] bg-current rounded-full"  // Increased line height
          variants={bottomLineVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}  // Slightly faster
          style={{ marginTop: isOpen ? 0 : "5px" }}  // Adjusted margin for closed state
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;