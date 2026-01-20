'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clientLogos = [
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image40.jpeg',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image39.jpg',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image45.jpeg',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image46.jpeg',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image41.jpeg',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image37.png',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image47.jpeg',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image43.png',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image36.jpeg',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image42.png',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image38.png',
  'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image44.jpg'
];

// Duplicate the array to create a seamless loop
const duplicatedLogos = [...clientLogos, ...clientLogos];

export default function Clients() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const speed = 0.5; // Adjust speed here (lower is slower)

  // Animation logic
  useEffect(() => {
    if (!containerRef.current) return;

    const animate = () => {
      if (!containerRef.current || isHovered) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const container = containerRef.current;
      const maxScroll = container.scrollWidth / 2; // Since we duplicated the logos
      
      // Reset position to create infinite loop effect
      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
        container.scrollLeft = 0;
      } else {
        scrollPositionRef.current += speed;
        container.scrollLeft = scrollPositionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section className="py-16 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Our Valued Clients
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by leading brands and organizations across various industries
          </p>
        </div>

        <div 
          ref={containerRef}
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex w-max">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${index}-${logo}`}
                className="flex-shrink-0 mx-4 w-40 h-32 flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${index % clientLogos.length + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 160px, 160px"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              const container = containerRef.current;
              if (container) {
                container.scrollLeft -= 200;
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={() => {
              const container = containerRef.current;
              if (container) {
                container.scrollLeft += 200;
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
}