"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MotionImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const MotionImage: React.FC<MotionImageProps> = ({ 
  src, 
  alt, 
  className,
  style = {} 
}) => {
  const [transform, setTransform] = useState("scale(1) translate(0px, 0px)");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { offsetWidth: width, offsetHeight: height } = containerRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Get relative mouse position within the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Adjust the translation speed (slower movement)
    const xWalk = Math.round((x / width * 100) - 50) / 6;
    const yWalk = Math.round((y / height * 100) - 50) / 8;

    // Apply scale and translation dynamically
    setTransform(`scale(1.05) translate(${xWalk}px, ${yWalk}px)`);
  };

  const handleMouseLeave = () => {
    setTransform("scale(1) translate(0px, 0px)");
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ 
          transform,
          transition: "transform 0.3s ease-out",
          width: "100%",
          height: "100%",
          ...style
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill={true}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MotionImage;