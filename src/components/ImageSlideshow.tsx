import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
  slides: string[] // Array of image URLs
}

const ImageSlideshow: React.FC<PropType> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,  // Enable looping through the images
      skipSnaps: false,  // Allow snapping to slides (ensures smooth scrolling)
      align: 'start',  // Keep slides aligned at the start
      containScroll: 'trimSnaps', // Avoid empty space after the last slide
    },
    [AutoScroll({ playOnInit: true })] // Auto-scroll plugin with 3-second delay
  )

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__viewport overflow-hidden">
        <div className="embla__container flex">
          {slides.slice(0, 3).map((src, index) => (
            <div key={index} className="embla__slide w-1/3">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlideshow
