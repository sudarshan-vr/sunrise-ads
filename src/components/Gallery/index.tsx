'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image17.png',
    alt: 'Hoardings',
    category: 'Hoardings'
  },
  {
    id: 2,
    src: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image30.jpeg',
    alt: 'Pole Kiosks',
    category: 'Pole Kiosks'
  },
  {
    id: 3,
    src: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image8.jpeg',
    alt: 'Gantry Branding',
    category: 'Gantry Branding'
  },
  {
    id: 4,
    src: 'https://cdn.gamma.app/dcr8q2isiem5xdc/imports/pptx/73e44e08c87f52506b262017b7725d78/v2/fbf9590d54c04b138b086686f3649042/extracted/ppt/media/image26.jpeg',
    alt: 'Bus Shelter Branding',
    category: 'Bus Shelter Branding'
  },
  // Add more images as needed
];

const categories = ['All', ...new Set(galleryImages.map(item => item.category))];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentImageIndex(0);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <div 
            key={image.id} 
            className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold">{image.category}</h3>
                <p className="text-sm mt-1">Click to view</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-primary transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">
                {filteredImages[currentImageIndex].category}
              </p>
              <p className="text-sm text-gray-300">
                {currentImageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-primary transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}
