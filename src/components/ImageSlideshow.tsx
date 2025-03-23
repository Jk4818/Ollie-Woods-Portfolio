import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
  slides: string[] // Array of image URLs
}

const ImageSlideshow: React.FC<PropType> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  )

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((src, index) => (
          <div 
            key={index} 
            className="embla__slide flex-[0_0_calc(33.33%)]"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlideshow