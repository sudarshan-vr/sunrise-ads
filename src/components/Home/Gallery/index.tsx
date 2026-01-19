'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
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

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Group logos into chunks of 4 for carousel slides
  const chunkSize = 4;
  const logoChunks = [];
  for (let i = 0; i < clientLogos.length; i += chunkSize) {
    logoChunks.push(clientLogos.slice(i, i + chunkSize));
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === logoChunks.length - 1 ? 0 : prevIndex + 1
    );
  }, [logoChunks.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? logoChunks.length - 1 : prevIndex - 1
    );
  }, [logoChunks.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

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
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {logoChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
                  {chunk.map((logo, index) => (
                    <div 
                      key={`${chunkIndex}-${index}`}
                      className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg h-32 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={logo}
                          alt={`Client Logo ${chunkIndex * chunkSize + index + 1}`}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 50vw, 25vw"
                          unoptimized
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {logoChunks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary dark:bg-primary-400 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}