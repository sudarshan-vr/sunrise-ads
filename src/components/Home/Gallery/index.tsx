import Image from 'next/image';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: '/images/gallery/1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/images/gallery/2.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/images/gallery/3.jpg', alt: 'Gallery Image 3' },
    { id: 4, src: '/images/gallery/4.jpg', alt: 'Gallery Image 4' },
    { id: 5, src: '/images/gallery/5.jpg', alt: 'Gallery Image 5' },
    { id: 6, src: '/images/gallery/6.jpg', alt: 'Gallery Image 6' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-dark dark:text-white mb-4">Our Gallery</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our portfolio of stunning designs and successful projects
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white text-dark px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
