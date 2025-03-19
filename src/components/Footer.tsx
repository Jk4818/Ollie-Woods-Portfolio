// components/Footer.tsx
import Link from "next/link";
import { Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">MENU</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors text-sm">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-gray-300 transition-colors text-sm">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors text-sm">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="https://www.patreon.com/ow" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors text-sm">
                  PATREON
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0 md:text-right">
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <p className="text-sm">OLLIEWOODSDRUMS@GMAIL.COM</p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.youtube.com/ow" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="text-white hover:text-gray-300 transition-colors" size={20} />
            </a>
            <a href="https://www.instagram.com/ow" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-white hover:text-gray-300 transition-colors" size={20} />
            </a>
            <a href="https://www.facebook.com/ow" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="text-white hover:text-gray-300 transition-colors" size={20} />
            </a>
          </div>
          
          <div className="text-sm text-right">
            <p>DESIGNED & DEVELOPED WITH LOVE BY <span className="font-bold">jk</span></p>
          </div>
        </div>
        
        <div className="mt-8 text-right">
          <p className="text-sm">ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;