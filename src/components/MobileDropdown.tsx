import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type MobileDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  isHomePage: boolean;
};

const MobileDropdown: React.FC<MobileDropdownProps> = ({ isOpen, onClose, handleNavClick, isHomePage }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden text-white mix-blend-difference z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href={isHomePage ? "#biography" : "/#biography"} className="uppercase text-sm font-medium mix-blend-difference" onClick={(e) => { handleNavClick(e, "biography"); onClose(); }}>
              About
            </Link>
            <Link href="/services" className="uppercase text-sm font-medium mix-blend-difference" onClick={onClose}>
              Services
            </Link>
            <Link href="/contact" className="uppercase text-sm font-medium mix-blend-difference" onClick={onClose}>
              Contact
            </Link>
            <Link href="https://patreon.com/OllieWoodsDrums" target="_blank" rel="noopener noreferrer" className="uppercase text-sm font-medium mix-blend-difference" onClick={onClose}>
              Transcriptions
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileDropdown;
