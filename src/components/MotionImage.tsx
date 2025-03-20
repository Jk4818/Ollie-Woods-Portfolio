"use client"; // Ensure Framer Motion works in Next.js App Router

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MotionImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MotionImage: React.FC<MotionImageProps> = ({ src, alt, className }) => {
  const [transformStyle, setTransformStyle] = useState("scale(1) translate(0px, 0px)");

  // Function that translates the image towards the cursor when hovering over the image
  useEffect(() => {
    const imageHoverContainer = document.getElementById("image-hover-container");
    const imageHover = document.getElementById("image-hover");

    if (imageHoverContainer && imageHover) {
      imageHover.style.transition = "transform 0.3s ease-out"; // Smooth transition for scaling and translation

      const translateImage = (e: MouseEvent) => {
        const { offsetWidth: width, offsetHeight: height } = imageHover;
        let { offsetX: x, offsetY: y } = e;

        // Adjust the translation speed (slower movement)
        const xWalk = Math.round((x / width * 100) - 50) / 6; // Reduced divisor for slower translation
        const yWalk = Math.round((y / height * 100) - 50) / 8; // Reduced divisor for slower translation

        // Apply scale and translation dynamically with slower zoom and easing
        setTransformStyle(`scale(1.05) translate(${xWalk}px, ${yWalk}px)`); // Reduced zoom value (1.05)
      };

      // Event listeners for mouse movement and mouse leave
      imageHoverContainer.addEventListener("mousemove", translateImage);
      imageHoverContainer.addEventListener("mouseleave", () => {
        setTransformStyle("scale(1) translate(0px, 0px)"); // Reset to default when mouse leaves
      });

      return () => {
        imageHoverContainer.removeEventListener("mousemove", translateImage);
        imageHoverContainer.removeEventListener("mouseleave", () => {
          setTransformStyle("scale(1) translate(0px, 0px)"); // Reset to default on mouse leave
        });
      };
    }
  }, []);

  return (
    <motion.div
      id="image-hover-container"
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <motion.div
        id="image-hover"
        style={{ transform: transformStyle }} // Apply dynamic transformation based on cursor position
        className="w-full h-full"
      >
        {/* Ensure the wrapper div around Image uses relative positioning */}
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            layout="fill" // Make the image fill the container
            objectFit="cover" // Ensure the image covers the container without distorting
            className="w-full h-full object-cover "
            priority // Improves LCP by loading it faster
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MotionImage;
