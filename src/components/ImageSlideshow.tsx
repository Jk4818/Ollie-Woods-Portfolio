import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type PropType = {
  slides: string[]; // Array of image URLs
};

const ImageSlideshow: React.FC<PropType> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  );

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((src, index) => (
          <div key={index} className="embla__slide flex-[0_0_calc(100%)] sm:flex-[0_0_calc(50%)]  xl:flex-[0_0_calc(33.33%)] relative w-full h-[30rem]">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="p-1 pt-2 object-cover rounded"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              priority={index < 5} // Make sure the first 5 images are prioritized
              unoptimized={src.startsWith("http") && !src.includes("/_next/image")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
