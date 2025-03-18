// components/ImageSlideshow.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ImageCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Array of at least 6 images
  const images = [
    "https://picsum.photos/800/500",
    "https://picsum.photos/800/500",
    "https://picsum.photos/800/500",
    "https://picsum.photos/800/500",
    "https://picsum.photos/800/500",
    "https://picsum.photos/800/500",
    "https://picsum.photos/800/500",
    "https://picsum.photos/800/500",
  ];

  // Duplicate the images array to create a seamless loop
  const carouselImages = [...images, ...images];

  useEffect(() => {
    // No need for manual animation control as we'll use framer-motion
  }, []);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <motion.div
        ref={carouselRef}
        className="flex absolute"
        animate={{
          x: [`0%`, `-50%`]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }
        }}
      >
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3 h-full px-2"
          >
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;